---
title: Часть 8. Добавляем новую фичу
description: В новом посте серии мы добавим в приложение новую фичу, реализуем её, обсудим, как держать под контролем зацепление модулей, и поговорим о пользе вертикальных слайсов.
datetime: 2023-06-19T18:00
cover: 08-various-elaboration.webp
tags:
  - adapter
  - architecture
  - cohesion
  - communication
  - composition
  - coupling
  - crosscutting
  - decorator
  - dependencies
  - domain
  - encapsulation
  - lsp
  - modelling
  - ocp
  - opinion
  - patterns
  - react
  - refactoring
  - tradeoffs
  - typescript
  - verticalslice
---

# Часть 8. Добавляем новую фичу

В предыдущих постах мы написали приложение из одной фичи — конвертер валют. В этом посте мы добавим новую фичу, реализуем её (чуть более просто, чем предыдущую 🙃), обсудим, как держать под контролем зацепление, и поговорим о пользе вертикальных слайсов.

<aside>

[Исходный код](https://github.com/bespoyasov/explicit-design) примеров из всех постов этой серии,
а также [исходники этого блога](https://github.com/bespoyasov/www) доступны на GitHub. Звезданите
по репозиториям, если вам понравился пост!

</aside>

## Описываем модель

Представим, что продукт-оунер хочет провести эксперимент и добавить в приложение пользовательские заметки. Мы не уверены, что эта фича останется в приложении, поэтому хотим добавить быстрое решение, которое в будущем при необходимости должно быть просто улучшить.

Чтобы не раздувать пост, мы опишем только один пользовательский сценарий — создание заметки. Такой юзкейс — это [CRUD](https://ru.wikipedia.org/wiki/CRUD) операция, доменной логики в ней нет. Весь процесс можно свести к такому потоку данных:

```
// Получаем строчку из UI,
// создаём из неё объект заметки,
// если строка валидна,
// сохраняем данные в хранилище.

FormSubmitEvent ->
  ContentString ->
  Note ->
  Persistence
```

Входным портом для этого юзкейса будет тип `CreateNote`. Он принимает строку (потенциальный контент заметки) и запускает асинхронный процесс сохранения:

```ts
// core/ports.input
type CreateNote = (content: string) => Promise<void>;
```

Выходной порт у нас будет пока один — тип `PersistNote`. Он принимает черновик заметки, сохраняет его в хранилище и возвращает сохранённую заметку:

```ts
// core/ports.output
type PersistNote = (note: DraftNote) => Promise<SavedNote>;
```

Модель данных заметки будет состоять из 2 типов: черновика и сохранённой заметки. Мы используем [юнион](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types), чтобы в будущем было [проще расширять модель](/blog/domain-modelling-made-functional/) данных при необходимости:

```ts
// core/types

type Note = DraftNote | SavedNote;

type DraftNote = { content: LocalizedString };
type SavedNote = { content: LocalizedString; id: EntityId };
```

<aside>

Мы используем юнион вместо булевых флагов, чтобы в коде [можно было описывать
эволюцию](https://blog.ploeh.dk/2016/02/10/types-properties-software-designing-with-types/) и
трансформации данных. Кроме этого распределённые типы помогают
[«запретить»](https://khalilstemmler.com/articles/typescript-domain-driven-design/make-illegal-states-unrepresentable/)
некоторые невалидные состояния.

</aside>

Учтём также, что данные заметки должны быть внутренне согласованы, поэтому мы будем считать её [_агрегатом_](https://martinfowler.com/bliki/DDD_Aggregate.html). В простом случае на коде это не отразится, но в будущем это может обусловить выбор инструментов под задачу.

## Реализуем юзкейс

В этот раз для реализации юзкейса мы не будем использовать «явную композицию», а вместо этого попробуем импортировать модули напрямую:

```ts
// core/createNote
import type { CreateNote } from '../ports.input';
import { persistNote } from '../../infrastructure/persistence';

export const createNote: CreateNote = async (content: string) => {
	const draft = { content };
	await persistNote(draft);
};
```

Несмотря на то, что композиция находится прямо в этом файле, мы всё ещё можем проследить, чтобы юзкейс опирался в первую очередь на _тип_, а [не на конкретную реализацию](https://en.wikipedia.org/wiki/Inversion_of_control):

```ts
// infrastructure/persistence
import type { PersistNote } from '../../core/ports.output';

// TODO: implement the port.
export const persistNote: PersistNote = async () => {};
```

Для тестирования юзкейса мы сможем замокать модуль `infrastructure/persistence` и подменить функцию `persistNote` на шпиона.

### Сервисы и выходные порты

В модуле хранилища мы явно указываем, что функция `persistNote` должна реализовать выходной порт `PersistNote`. Таким образом мы следим, чтобы _сервисы_ подстраивались под приложение, а [не наоборот](https://www.goodreads.com/book/show/18043011-clean-architecture). (Так как композиция в этой фиче неявная, допустить ошибку с неправильным направлением зависимостей несколько проще, мы же хотим её предупредить.)

Указание типа в этом случае служит [«буферной зоной»](https://learn.microsoft.com/en-us/azure/architecture/patterns/anti-corruption-layer) — если мы реализуем порт неправильно, компилятор скажет об этом и не даст собрать приложение. По этой же причине внутри реализации мы, в целом, можем привязаться к библиотекам и инструментам напрямую:

```ts
// infrastructure/persistence

import type { NoteCollection } from '../../core/types';
import type { PersistNote } from '../../core/ports.output';

import { nanoid } from 'nanoid';
import { persist, retrieve } from '~/services/persistence';

export const persistNote: PersistNote = async (draft) => {
	// Imagine the ID is assigned
	// by the persistence service:
	const note = { ...draft, id: nanoid() };
	const notes = retrieve<NoteCollection>(persistenceKey) ?? [];

	persist(persistenceKey, [...notes, note]);
	return note;
};
```

«Отцепить» библиотеки при необходимости в будущем будет не сложно как раз благодаря типу и правильному направлению зависимостей.

### UI и входной порт

Примерно та же ситуация будет с входными портами. Компоненты будут полагаться на тип `CreateNote`, реализовывать который будет функция `createNote`:

```tsx
import { createNote } from '../../core/createNote';
import { useField } from '~/shared/ui/useField';
import { Input } from '~/shared/ui/Input';

export function NoteForm() {
	const [value, update, clear] = useField('');
	const onSubmit = useCallback(
		(e: FormEvent) => {
			e.preventDefault();
			createNote(value);
			clear();
		},
		[value]
	);

	return (
		<form onSubmit={onSubmit}>
			<label>
				<span>Make a note:</span>
				<Input type="text" value={value} onChange={update} />
			</label>
		</form>
	);
}
```

Композиция «смешана» с кодом компонента, но идейно он всё ещё «полагается на абстракцию» и «достаточно отцеплен» от ядра приложения.

### Cross-Cutting Concerns

Допустим, для проверки гипотезы мы хотим добавить аналитику. Опираясь на тип юзкейса, мы можем написать [декоратор](https://refactoring.guru/ru/design-patterns/decorator), который «навесит» аналитику на сценарий, не вмешиваясь внутрь кода юзкейса:

```ts
// infrastructure/analytics

import type { CreateNote } from '../../core/ports.input';
import { sendEvent } from '~/services/analytics';

export const withAnalytics =
	(fn: CreateNote): CreateNote =>
	async (content) => {
		sendEvent('NOTE_CREATED', `Content size of: ${content.length}`);
		return await fn(content);
	};
```

Так как «композиция» юзкейса находится прямо в его исходном коде, навесим декоратор прямо там:

```ts
import { withAnalytics } from '../../infrastructure/analytics';

//                                    ↓ Decorator   ↓ Use Case Function
export const createNote: CreateNote = withAnalytics(async (content: string) => {
	const draft = { content };
	await persistNote(draft);
});
```

Однако, мы всё ещё держим в голове, что именно декоратор зависит от юзкейса, и поэтому можем отделить их друг от друга. Идейно эта два модуля расцеплены и оба полагаются на _тип_ юзкейса.

<aside>
Подробнее о декораторах и их композиции мы говорили в предыдущем посте.</aside>

## Используем фичу

Чтобы использовать заметки в приложении, мы можем создать публичное API для новой фичи:

```tsx
// ui/Notes

export function Notes() {
	return (
		<section>
			<h2 className="visually-hidden">Notes</h2>
			<NoteForm />
		</section>
	);
}

// notes/index

export * from './ui/Notes';
```

...И добавить её на дашборд:

```tsx
// pages/Dashboard

import { Converter } from '~/features/converter';
import { Notes } from '~/features/notes';

export function Dashboard() {
	return (
		<>
			<Converter />
			<Notes />
		</>
	);
}
```

В компоненте дашборда видно, как он компонует виджеты различных фич вместе. Это помогает визуализировать [«ограниченные контексты»](https://martinfowler.com/bliki/BoundedContext.html), за которые отвечает каждая из фич, и избегать их пересечения — то есть поделить всё приложение на так называемые _слайсы_.

## Вертикальные слайсы

Каждая фича в нашем приложении описывает один ограниченный контекст. Она содержит модель предметной области, код пользовательских сценариев, входные-выходные порты и адаптеры ко всем сервисам, которые ей нужны для работы. По-другому часть приложения называется [слайсом](https://en.wikipedia.org/wiki/Vertical_slice).

Польза этого архитектурного стиля в независимости и самодостаточности фич. Их можно добавлять, удалять, развивать независимо друг от друга и с [_разной глубиной проработки_](https://youtu.be/cVVMbuKmNes).

Для слайса неважно, как работают другие слайсы. В одном мы можем писать код максимально чисто и аккуратно, в другом — писать, будто мы пишем прототип. Одни слайс мы можем распилить на слои, а в другом — писать весь код в одном файле.

Так как слайсы изолированы друг от друга решения, принятые в коде одной фичи, _могут не влиять_ на код других фич. Это даёт возможность развивать и усложнять код _по мере необходимости_. То есть нам не надо продумывать «архитектуру всего приложения» целиком, выбирать инструменты «сразу и все» и становиться заложниками этих решений в будущем.

У фич вполне может быть разное устройство, а их сложность — зависеть от требований и сложности предметной области. Так для простенького CRUD-слайса мы можем написать менее аккуратный и простенький код, а для фичи со сложной бизнес-логикой — расписать доменную модель, спроектировать пользовательские сценарии и разделить код на слои:

![Разные фичи мы можем прорабатывать с разной степенью тщательности](./08-various-elaboration.webp)

Слайсы помогают нам держать _все знания_, относящиеся к одному поддомену, рядом, [не разбрасывая их по кодовой базе](https://youtu.be/L2Wnq0ChAIA). А изоляция даёт возможность не принимать больших решений на весь проект.

Кроме этого слайсы заставляют нас [иначе воспринимать данные](https://youtu.be/L2Wnq0ChAIA), с которыми мы работаем. Так как фокус слайсов смещён на конкретную часть предметной области, одинаковые на первый взгляд данные мы начинаем видеть _через призму конкретного поддомена_. Например, абстрактная «цена» в контексте закупок может начать означать «оптовую цену от поставщика», а в контексте продажи — «цену на ценнике с учётом доставки».

Такое разделение помогает нам понять суть данных, с которыми мы работаем, а также различие между «казалось бы одинаковыми вещами» в свете разных частей предметной области.

## Общение между фичами

Основная идея слайсов в их независимости. Фичи в приложении в идеале не должны знать о существовании и влиять на работу друг друга.

Достичь этого помогает правильное выделение контекстов и разделение данных между ними. Если мы замечаем, что нам нужны данные из другого контекста, то скорее всего [мы неправильно их поделили](https://youtu.be/anL-RGKz_Ak). (Особенно это заметно, если две фичи меняются с подозрительно одинаковой частотой и оперируют схожим набором данных.)

Но по разным причинам это не всегда достижимо, и нам может понадобиться настроить общение между фичами. Для этого мы можем как обращаться из одной фичи в другую напрямую, так и использовать события.

В этом посте мы посмотрим на пример прямого общения между фичами и обсудим его плюсы и минусы. В следующем — поговорим об общении на событиях и сравним эти два подхода.

### Пример прямого общения

Представим, что нам пришла задача при обновлении котировок автоматически создавать новую заметку со свежим курсом. (Пример притянут за уши, но у меня не очень богатая фантазия, сорян 🤷)

Для реализации нам потребуется после получения данных от сервера «дёрнуть» другую фичу, чтобы дать ей команду создать новую заметку. Для конвертера эта операция будет сигналом в условный «внешний мир» — ему не очень важно, куда именно мы отправим эту команду. Для фичи заметок же такой сигнал — это буквально рычажок входного порта, который запустит юзкейс.

![Мы можем использовать порты, как единственное место для зацепления фич](./08-coupling-via-ports.webp)

Такое общение между фичами всё ещё повышает между ними зацепление, потому что конвертеру придётся _знать_ о существовании соседней фичи. Но связывая их через порты, мы всё ещё позволяем себе в будущем расцепить их по-настоящему. (Об этом мы как раз поговорим в следующем посте.)

### Связь через порты

При связывании фич через их порты мы создаём только одну точку зацепления. Это удобно, потому что создаёт консистентные ожидания оттого, как организовано общение между разными частями приложения. Нам не нужно будет думать, где искать сочленение разных фич.

В случае с заметками входной порт у нас уже есть:

```ts
// notes/ports.input

type CreateNote = (content: string) => Promise<void>;
```

Функция, реализующая этот порт, и будет входной точкой в фичу, а код, который будет её вызывать, будет запускать юкейс, то есть будет выполнять роль [«управляющего адаптера»](https://herbertograca.com/2017/09/14/ports-adapters-architecture/).

В конвертере же нам придётся подумать, как ограничить распространение знаний о заметках и не дать им «расползтись» по всему конвертеру. Например, если мы положим `CreateNote` прямо в зависимости юзкейса, то зацепим ядро конвертера напрямую с внешний миром:

```ts
// converter/refreshRates

import type { FetchRates, ReadConverter, SaveConverter } from '../ports.output';
import type { CreateNote } from '~/features/notes/ports.input';
// Прямое зацепление...          ↑

type Dependencies = {
	fetchRates: FetchRates;
	readConverter: ReadConverter;
	saveConverter: SaveConverter;
	createNote: CreateNote;
};
```

...А нам бы хотелось этого избежать, потому что такое зацепление «размазывает» сочленение между фичами, и знания о заметках начинают расплываться по всему коду конвертера.

Кроме этого такой вариант будет побуждать нас менять код _конвертера_ при изменении логики _заметок_:

```ts
export const createRefreshRates =
	({}: /*...*/ Dependencies): RefreshRates =>
	async () => {
		// ...

		// Чтобы «правильно сериализовать заметку»,
		// нам приходится менять код конвертера:
		const message = JSON.stringify(rates);
		createNote(message);

		// ...Но как и во что превращать контент заметки,
		// к конвертеру не относится.
	};
```

Чтобы предотвратить «расползание» знаний о заметках и сохранить независимость юзкейса конвертера, мы напишем адаптер к фиче заметок.

### Адаптер _к фиче_? 🤨

По слову «адаптер» может показаться, что этот паттерн нужен только, чтобы соединить приложение со сторонними инструментами или сервисами. Но на деле [задача адаптера](https://refactoring.guru/design-patterns/adapter) сделать один _какой-то_ интерфейс сопоставимым с другим _каким-то_ интерфейсом.

Оба этих интерфейса вполне могут быть портами фич, чем мы и воспользуемся. Напишем тип `CreateNoteAdapter` для конвертера. Этот тип будет выходным портом, потому что его задача подать сигнал во внешний мир:

```ts
// converter/ports.output

type CreateNoteAdapter = (rates: ExchangeRates) => void;
```

Юзкейсу тогда будет достаточно лишь вызвать функцию, реализующую тип `CreateNoteAdapter`:

```ts
// converter/refreshRates

import type { CreateNoteAdapter /*...*/ } from '../ports.output';

type Dependencies = {
	fetchRates: FetchRates;
	readConverter: ReadConverter;
	saveConverter: SaveConverter;
	createNote: CreateNoteAdapter;
};

export const createRefreshRates =
	({}: /*...*/ Dependencies): RefreshRates =>
	async () => {
		// ...

		// Единственное, о чём надо беспокоиться юзкейсу, —
		// вызвать эту функцию, передав ей свежие котировки.
		// Всё остальное она обязуется взять на себя.
		createNote(rates);
	};
```

Тогда [все знания](<https://en.wikipedia.org/wiki/Cohesion_(computer_science)>) о том, _как_ работать с заметками, во что их конвертировать, как сериализовать и т.д., будут находиться в реализации:

```ts
// converter/adapters

// Зависим только от выходного порта конвертера
// и входного порта соседней фичи:
import type { CreateNoteAdapter } from '../../core/ports.output';
import type { CreateNote } from '~/features/notes/core/ports.input';

// Берём один интерфейс, превращаем в другой:
type AdaptInterface = (realFeature: CreateNote) => CreateNoteAdapter;

export const createAdapter =
	(callFeature: CreateNote): CreateNoteAdapter =>
	// Возвращаем функцию, которая содержит в себе всё,
	// что нужно знать, чтобы правильно отправить сигнал
	// во внешний мир и запустить юзкейс в фиче заметок:
	(rates) => {
		const noteContent = JSON.stringify(rates, null, 2);
		callFeature(noteContent);
	};
```

Частично применим фабрику, передав ей настоящую функцию `createNote`, реализующую входной порт заметок:

```ts
// adapters/createNote.composition

import { createAdapter } from './createNote';
import { createNote as callFeature } from '~/features/notes/core/createNote';

export const createNote = createAdapter(callFeature);
```

Теперь единственное место во _всём юзкейсе_, которое зацеплено с кодом другой фичи — это адаптер и его композиция:

![Единственное место, где конвертер «знает» о том, как разговаривать с другой фичей, — адаптер](./08-coupling-via-adapter.webp)

Так мы создаём задел на ещё более глубокое расцепление фич в будущем.

### Регистрация адаптера

Нам осталось зарегистрировать созданный адаптер в композиции юзкейса и покрыть это всё тестами. Обновим композицию:

```ts
// converter/refreshRates.composition

// ...
import { createNote } from '../../adapters/createNote';

export const refreshRates: RefreshRates = withAnalytics(
	createRefreshRates({ createNote /* ...Other dependencies. */ })
);
```

Обновим композицию тестов:

```ts
const fetchRates = async () => ({ ...rates });
const readConverter = () => ({ ...converter });
const saveConverter = vi.fn();
const createNote = vi.fn();

const refreshRates = createRefreshRates({
	fetchRates,
	readConverter,
	saveConverter,
	createNote
});
```

И добавим новый тест, который проверит, что при обновлении котировок юзкейс вызывает функцию адаптера с правильными аргументами:

```ts
describe('when called', () => {
	// ...

	it('calls a note creations out of the fresh rates data', async () => {
		await refreshRates();
		expect(createNote).toHaveBeenCalledWith(rates);
	});
});
```

## В следующий раз

В этом посте мы создали новую фичу и реализовали её, посмотрев как можно развивать и прорабатывать разные модули с разной глубиной в зависимости от требований. Кроме этого мы описали прямое взаимодействие между слайсами приложения и оставили себе задел на будущее, чтобы уменьшить зацепление. В [следующем посте](/blog/explicit-design-9) мы обсудим, как сделать слайсы ещё более независимыми с помощью событий и в каких случаях это может быть оправдано.

## Ссылки

Все ссылки на книги, статьи и другие материалы, упомянутые в статье.

- [Исходный код этапа разработки на Гитхабе](https://github.com/bespoyasov/explicit-design/tree/main/08-adding-new-feature)
- [Блог на Гитхабе на случай опечаток](https://github.com/bespoyasov/www)

### Изоляция, зацепление и связность

- [Anti-corruption layer](https://learn.microsoft.com/en-us/azure/architecture/patterns/anti-corruption-layer)
- [Bounded context](https://martinfowler.com/bliki/BoundedContext.html)
- [“I NEED data from another service!”... Do you really?](https://youtu.be/anL-RGKz_Ak)
- [CRUD, Википедия](https://ru.wikipedia.org/wiki/CRUD)
- [Инверсия контроля, Википедия](https://ru.wikipedia.org/wiki/Инверсия_управления)
- [Связность в программирование, Википедия](<https://ru.wikipedia.org/wiki/Связность_(программирование)>)

### Архитектура и паттерны

- [Adapter](https://refactoring.guru/design-patterns/adapter)
- [Aggregate](https://martinfowler.com/bliki/DDD_Aggregate.html)
- [Clean Architecture by Robert C. Martin](https://www.goodreads.com/book/show/18043011-clean-architecture)
- [Ports & Adapters Architecture](https://herbertograca.com/2017/09/14/ports-adapters-architecture/)
- [Декоратор](https://refactoring.guru/ru/design-patterns/decorator)

### Вертикальные слайсы

- [Feature-Sliced Design](https://feature-sliced.design)
- [Restructuring to a Vertical Slice Architecture](https://youtu.be/cVVMbuKmNes)
- [Vertical Slice Architecture, not Layers!](https://youtu.be/L2Wnq0ChAIA)
- [Vertical slice, Википедия](https://en.wikipedia.org/wiki/Vertical_slice)

### Состояния и трансформации данных

- [Make Illegal States Unrepresentable!](https://khalilstemmler.com/articles/typescript-domain-driven-design/make-illegal-states-unrepresentable/)
- [Types + Properties = Software: designing with types](https://blog.ploeh.dk/2016/02/10/types-properties-software-designing-with-types/)
- [Union Types in TypeScript](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types)

### Другие части серии

- [Введение, предпосылки и ограничения](/blog/explicit-design-series)
- [Моделирование предметной области](/blog/explicit-design-1)
- [Проектирование пользовательских сценариев](/blog/explicit-design-2)
- [Описание UI как «адаптера» к приложению](/blog/explicit-design-3)
- [Создание инфраструктуры под нужды сценариев](/blog/explicit-design-4)
- [Композиция приложения в хуках](/blog/explicit-design-5)
- [Композиция приложения без хуков](/blog/explicit-design-6)
- [Внедрение cross-cutting concerns](/blog/explicit-design-7)
- Расширение функциональности новой фичей (этот пост)
- [Расцепление фич приложения](/blog/explicit-design-9)
- [Обзор и предварительные выводы](/blog/explicit-design-10)
