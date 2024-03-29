---
title: Часть 6. Композиция приложения без хуков
description: В новом посте серии мы обсудим, как проделать то же самое, но без хуков, как внедрять зависимости «заранее» до рантайма и есть ли в этом какая-то польза.
datetime: 2023-06-07T10:00
cover: 06-hooks-complexity.webp
tags:
  - abstraction
  - architecture
  - butthurt
  - cohesion
  - components
  - composition
  - coupling
  - error
  - fp
  - intention
  - oop
  - opinion
  - patterns
  - performance
  - react
  - refactoring
  - statemanagement
  - testing
  - typescript
---

# Часть 6. Композиция приложения без хуков

Продолжаем серию постов и экспериментов о разработке и проектировании приложений. [В прошлый раз](/blog/explicit-design-5) мы собрали конвертер из его составных частей, упаковали всё в хуки, поговорили о способах упрощения композиции и затронули разные виды тестирования. В этом посте мы обсудим, как проделать то же самое, но без хуков, как внедрять зависимости «заранее» до рантайма и есть ли в этом какая-то польза.

<aside>

[Исходный код](https://github.com/bespoyasov/explicit-design) примеров из всех постов этой серии,
а также [исходники этого блога](https://github.com/bespoyasov/www) доступны на GitHub. Звезданите
по репозиториям, если вам понравился пост!

</aside>

## Проблемы с хуками

Этот пост, наверное, будет самым субъективным из всей серии.

Претензии к хукам — всего лишь моё мнение, и **я могу быть не прав**. Поэтому до того, как мы начнём писать код, я хочу объяснить причины, по которым хуки последнее время начинают казаться мне всё менее привлекательным инструментом.

### Высокая «заразность» и ограничения

Хуки заражают всё вокруг. Если где-то мы решили использовать хук для решения какой-то задачи, нам _придётся_ использовать их во всех остальных частях кода, которые как-то связаны с этой задачей, даже если они там не нужны.

Разработка с хуками заставляет принимать слишком много решений _слишком рано_. Нам приходится заниматься низкоуровневыми деталями реализации до того, как это становится действительно нужно.

Кроме этого хуки вносят не всегда оправданные [ограничения](https://react.dev/warnings/invalid-hook-call-warning), которые могут [внезапно измениться](https://react.dev/learn/synchronizing-with-effects#how-to-handle-the-effect-firing-twice-in-development) по слабо обоснованным причинам.

Волатильные ограничения инструмента снижают к нему доверие, потому что он становится дорогим в долгосрочной поддержке. Меняясь, такие инструменты [добавляют лишнюю работу](https://react.dev/reference/react/Component) и раздувают технический долг, потребляя ресурсы, которые можно было бы не потреблять.

### Вендор-лок и инструменты

Хуки намертво привязывают проект к конкретным технологиям и инструментам, сменить которые становится чрезмерно затратно.

Не для каждого проекта это критично, особенно если проект короткоживущий. Но если мы собираемся писать код, который будет жить 5+ лет, то стоит заранее заложить ресурсы для обновления кодовой базы и обдумать вероятность перехода на другой фреймворк или библиотеку.

### Неявные зависимости и текущие абстракции

Хуки [поощряют](https://react.dev/reference/react) склеивание данных и поведения вместе. Композиция хуков превращается в _композицию сайд-эффектов_, а это, например, одна из главных проблем того же ООП.

Скрытые взаимосвязи и влияние эффектов друг на друга [сложно уложить в голове](https://blog.ploeh.dk/2021/07/28/referential-transparency-fits-in-your-head/), из-за чего контролировать поведение программы становится сложнее.

<aside>

Под «поощрением» я имею в виду не столько примеры из документации, сколько разницу между тем,
насколько легко писать, склеивая данные с поведением и не делая этого. С хуками второе сложнее
даже на синтаксическом уровне.

</aside>

Детали реализации хуков зачастую абстрагированы избыточно или наоборот недостаточно. Один хук может содержать функциональность из разных уровней абстракции, что заставляет «мысленно прыгать» между разными уровнями при чтении. Это [повышает когнитивную нагрузку](https://github.com/bespoyasov/refactor-like-a-superhero/blob/main/manuscript-ru/08-abstraction.md) и затуманивает взаимодействие частей приложения.

По этим же причинам хуки бывает сложно тестировать. Композиция эффектов требует не только подготовить входные данные для хука, но и [«воссоздать его состояние»](https://www.goodreads.com/book/show/48927138-unit-testing), а неявные зависимости заставляют поднимать сложную тестовую инфраструктуру. Например, для тестирования такого хука:

```ts
const useUser = () => {
	const { data, isLoading } = useSWR(['/users', id], fetchUser);
	const role = useRoles(data);
	const session = useStore((s) => s.session);
	return { ...data, session, role };
};
```

Нам потребуется замокать `fetch` (или `useSWR`), настроить провайдер для стора, проверить, из чего состоит `useRoles`, чтобы при необходимости замокать его или его зависимости.

Наконец так как компоновка эффектов и избыточная абстракция не помещаются в голове, мы можем забыть протестировать эдж-кейсы: конкретная роль пользователя, неправильный ответ сервера, ревалидация данных, перезапись данных сессии со старой на новую и т.д.

В итоге в голове приходится держать код самого хука, но и кучу других аспектов:

![Скрытая сложность хуков может быть слишком высокой, а натуральных ограничителей для неё нет](./06-hooks-complexity.webp)

### Запутанная ментальная модель

Хукам сложно дать исчерпывающее определение, и по моим наблюдениям их ментальная модель вызывает много вопросов у новых разработчиков.

Они, вроде, похожи на функции, но [ведут себя по-другому](https://react.dev/warnings/invalid-hook-call-warning). Условия ререндера [усложняют](https://react.dev/learn/lifecycle-of-reactive-effects) представление о том, как работает перерисовка компонента. Сама концепция хуков, вроде, устоявшаяся, но детали и правила [могут меняться](https://legacy.reactjs.org/docs/strict-mode.html#ensuring-reusable-state) кардинально от версии к версии.

Это опять же снижает доверие к стабильности API и усложняет обучение.

### Дисклеймер

Всё это не значит, что на хуках невозможно написать хороший и грамотный код. Возможно, конечно.

Просто мне кажется, что если технология вносит ограничения, то они [должны наставлять разработчиков](https://youtu.be/US8QG9I1XW0) и делать так, чтобы написать «неправильно» было невозможно или как минимум затратно. С хуками же у меня складывается ощущение, что чёткого мысленного фреймворка для понимания _как писать_ они не дают.

Сейчас для меня хук — это способ композиции разной функциональности. Я думаю о них, как об «инжекторах» сервисов, функций, данных, которые запускают перерисовку компонентов. Если функциональность не связана напрямую с UI-состоянием или перерисовкой компонентов, то я сперва подумаю, могу ли написать её без применения хуков.

<aside>

Кстати, в новой документации Реакта я нашёл-таки [нечто
похожее](https://react.dev/learn/separating-events-from-effects) на эту идею.

</aside>

## Композиция без хуков

Теперь, когда мы синхронизировали понимание о хуках, попробуем пересобрать конвертер. Так как приложение само по себе уже спроектировано, мы можем сразу перейти к выбору подходящих под задачу инструментов.

<aside>

Этот раздел, кстати, может быть примером, почему подбирать инструменты лучше позже, когда о
проекте известно как можно больше. Понятно, что наше требование «уметь работать без хуков» —
искусственное, но на его месте может быть более существенное требование.

</aside>

Сервис запросов к API хуки не использует, поэтому его мы оставим без изменений, а вот стор немного изменим. Вместо контекста мы воспользуемся библиотекой [Zustand](https://github.com/pmndrs/zustand) — это стейт-менеджер, который чем-то напоминает Redux, но попроще и не требует провайдеров.

## Сервис хранилища данных

После установки Zustand в проект, мы можем описать с его помощью базовую реализацию стора:

```ts
// infrastructure/store.ts

export const converter = createStore<Converter>(() => ({
	// ...Дефолтные значения модели.
}));
```

Далее опишем композицию — то есть, как этот сервис будет реализовывать порты приложения, объявленные ранее:

```ts
// infrastructure/store.composition.ts

// Выходные порты приложения,
// свяжут сервис с юзкейсами:

export const readConverter: ReadConverter = converter.getState;
export const saveConverter: SaveConverter = converter.setState;

// Входные порты реализуем мимо ядра,
// так как в селекторах данных нет доменной логики:

export const useBaseValue: SelectBaseValue = () => useStore(converter, (vm) => vm.baseValue);
export const useQuoteCode: SelectQuoteCode = () => useStore(converter, (vm) => vm.quoteCode);
export const useQuoteValue: SelectQuoteValue = () => useStore(converter, (vm) => vm.quoteValue);
```

Селекторы данных мы оставим без изменений. Это как раз те самые «реактивные данные», которые должны перерисовывать UI, поэтому предоставлять их через хуки как раз имеет смысл.

Реализацию выходных портов с другой стороны будут использовать юзкейсы, которые мы реализуем в виде функций. Поэтому `readConverter` и `saveConverter` будут ссылками на функции чтения и записи, а не хуков.

### Композиция юзкейсов

Обновим композицию юзкейсов, чтобы они использовали функции `readConverter` и `saveConverter` напрямую:

```ts
// core/updateBaseValue.composition

// ...
import { readConverter, saveConverter } from '../../infrastructure/store';

export const useUpdateBaseValue: Provider<UpdateBaseValue> = () => {
	return useCallback(
		(value) => updateBaseValue(value, { readConverter, saveConverter }),
		[readConverter, saveConverter]
	);
};
```

Так как импортируемые функции не изменят своих ссылок, мы можем убрать `useCallback`:

```ts
// core/updateBaseValue.composition

import { readConverter, saveConverter } from '../../infrastructure/store';

export const useUpdateBaseValue: Provider<UpdateBaseValue> = () => {
	return (value) => updateBaseValue(value, { readConverter, saveConverter });
};
```

После чего станет понятно, что создавать в хуке лишнюю лямбду и подставлять зависимости в функцию `updateBaseValue` в рантайме больше не имеет смысла. Вместо этого мы воспользуемся запеканием зависимостей и подготовим весь юзкейс заранее.

Сейчас код функции `updateBaseValue` выглядит так:

```ts
// core/updateBaseValue

const stub = {} as Dependencies;

export const updateBaseValue: UpdateBaseValue = (
	rawValue,
	{ readConverter, saveConverter }: Dependencies = stub
) => {
	// ...
};
```

Мы «вывернем» её тип, чтобы функцию можно было частично применить, указав зависимости. Вытащим аргумент с зависимостями, поставим его на первое место и сделаем функцию «каррированной»:

```ts
// core/updateBaseValue

export const createUpdateBaseValue =
	({ readConverter, saveConverter }: Dependencies): UpdateBaseValue =>
	(rawValue) => {
		// ...
	};
```

<aside>

Чуть подробнее о «запекании» зависимостей я рассказывал в [посте об
инфраструктуре](/blog/explicit-design-4/). Если вам не совсем понятно, что тут происходит,
рекомендую сперва прочесть тот пост.

</aside>

<aside>

Кстати, на деле
[«каррированием»](http://learnyouahaskell.com/higher-order-functions#curried-functions) это
называть не совсем корректно, но мы не будем закапываться в терминологию. Когда в JS появится
[нативное частичное применение](https://github.com/tc39/proposal-partial-application), работать с
этим будет чуть проще.

</aside>

Далее мы можем частично применить фабрику, передав аргумент с зависимостями, и получить подготовленный юзкейс:

```ts
// core/updateBaseValue.composition

export const updateBaseValue: UpdateBaseValue = createUpdateBaseValue({
	readConverter,
	saveConverter
});
```

Как мы упоминали ранее, частичное применение более типобезопасно, чем необязательный аргумент с зависимостями, поэтому у нас меньше шансов передать неправильный сервис или забыть его передать. А так как подстановка реальных значений происходит лишь один раз, такая композиция не должна бить по производительности.

### Композиция компонентов

Так как юзкейс теперь — это просто функция, компоненты могут использовать его напрямую:

```tsx
// ui/BaseValueInput

type BaseValueInputDeps = {
	// Используем напрямую функцию:
	updateBaseValue: UpdateBaseValue;
	useBaseValue: SelectBaseValue;
};

// В самом компоненте уберём вызов хука `useUpdateBaseValue`
// и будем использовать напрямую переданную функцию.
```

Композиция компонента сама по себе изменится не сильно:

```tsx
// ui/BaseValueInput.composition

// ...Импортируем функцию:
import { updateBaseValue } from '../../core/updateBaseValue';

export const BaseValueInput = () =>
	// ...И передаём её в регистрации:
	Component({ updateBaseValue, useBaseValue });
```

То же проделаем и с другими компонентами, которые зависят от этого юзкейса.

<aside>

Опять же, если мы не используем явную композицию, то в компоненте было бы достаточно импортировать
и использовать функцию напрямую. Подробнее о явной и неявной композиции — [в прошлом
посте](/blog/explicit-design-5/).

</aside>

### Композиция тестов

Так как мы не трогаем логику, в тестах нам достаточно обновить лишь подготовку стабов и моков:

```ts
// core/updateBaseValue.test

const readConverter = () => ({ ...converter });
const saveConverter = vi.fn();
const updateBaseValue = createUpdateBaseValue({
	readConverter,
	saveConverter
});

// ui/BaseValueInput.test

const updateBaseValue = vi.fn();
const useBaseValue = () => 42;
const dependencies = {
	updateBaseValue,
	useBaseValue
};
```

Код теста и логика проверки останутся неизменными.

## Обновление котировок

Те же самые операции мы можем проделать и с юзкейсом обновления котировок. Сперва «вывернем» функцию юзкейса:

```ts
// core/refreshRates

export const createRefreshRates =
	({ fetchRates, readConverter, saveConverter }: Dependencies): RefreshRates =>
	async () => {
		//...
	};
```

Затем частично применим её, передав в качестве зависимостей свеже созданные функции для работы со стором:

```ts
// core/refreshRates.composition

import { readConverter, saveConverter } from '../../infrastructure/store';
import { fetchRates } from '../../infrastructure/api';

export const refreshRates: RefreshRates = createRefreshRates({
	fetchRates,
	readConverter,
	saveConverter
});
```

После этого останется решить, как мы хотим работать с адаптером `asCommand` и обновить его код. Например, мы хотим, чтобы юзкейс был независим и работал без хуков, но в UI хотим видеть реактивный статус операции.

Тогда мы можем переписать `asCommand` так, чтобы он превращал функцию юзкейса в хук, возвращающий интерфейс `{ result, execute }`:

```ts
// shared/infrastructure/cqs

export const asCommand =
	<F extends AsyncFn>(command: F): Provider<Command<F>> =>
	() => {
		// ...

		const execute = async () => {
			// ...
		};

		return { result, execute };
	};
```

Компонент в этом случае продолжит зависеть от хука:

```tsx
// ui/RefreshRates

type RefreshRatesProps = {
	useRefreshRates: Provider<Command<RefreshRates>>;
};
```

...Но при композиции мы можем скармливать компоненту обычную функцию:

```ts
// ui/RefreshRates.composition

import { refreshRates } from '../../core/refreshRates';
import { asCommand } from '~/shared/infrastructure/cqs';

export const RefreshRates = () => Component({ useRefreshRates: asCommand(refreshRates) });
```

## Другие инструменты

В этом примере в качестве стейт-менеджера мы выбрали Zustand, потому что он подходит для работы с объектами, где могут быть связаны несколько полей. В других приложениях нам могли бы потребоваться другие инструменты, типа [Jotai](https://github.com/pmndrs/jotai) или [MobX](https://github.com/mobxjs/mobx).

В репозитории я оставил [примеры](https://github.com/bespoyasov/explicit-design/tree/main/06-no-hooks-composition/src/features/converter/infrastructure/store), как можно реализовать стор с помощью этих двух библиотек тоже.

## В следующий раз

В этом посте мы обсудили, как компоновать юзкейсы и «внедрять» зависимости без использования хуков. В [следующий раз](/blog/explicit-design-7) мы обсудим, как добавить в приложение cross-cutting concerns типа кеширования, персистентости, логирования и сервисов аналитики так, чтобы они не переплетались с логикой приложения, но были удобны в использовании.

## Ссылки

Все ссылки на книги, статьи и другие материалы, упомянутые в статье.

- [Исходный код этапа разработки на Гитхабе](https://github.com/bespoyasov/explicit-design/tree/main/06-no-hooks-composition)
- [Блог на Гитхабе на случай опечаток](https://github.com/bespoyasov/www)

### Реакт, хуки, компоненты

- [Built-in React Hooks](https://react.dev/reference/react)
- [Component](https://react.dev/reference/react/Component)
- [How to handle the Effect firing twice in development?](https://react.dev/learn/synchronizing-with-effects#how-to-handle-the-effect-firing-twice-in-development)
- [Rules of Hooks](https://react.dev/warnings/invalid-hook-call-warning)

### Работа с состоянием

- [Ensuring reusable state](https://legacy.reactjs.org/docs/strict-mode.html#ensuring-reusable-state)
- [Lifecycle of Reactive Effects](https://react.dev/learn/lifecycle-of-reactive-effects)
- [Separating Events from Effects](https://react.dev/learn/separating-events-from-effects)

### Абстракция и декомпозиция

- [Functional architecture - The pits of success](https://youtu.be/US8QG9I1XW0)
- [Referential transparency fits in your head](https://blog.ploeh.dk/2021/07/28/referential-transparency-fits-in-your-head/)
- [Абстракция как инструмент проектирования](https://github.com/bespoyasov/refactor-like-a-superhero/blob/main/manuscript-ru/08-abstraction.md)

### Инструменты для работы с состоянием

- [Jotai](https://github.com/pmndrs/jotai)
- [MobX](https://github.com/mobxjs/mobx)
- [Zustand](https://github.com/pmndrs/zustand)

### Прочее

- [Curried functions](http://learnyouahaskell.com/higher-order-functions#curried-functions)
- [Partial Application Syntax for ECMAScript](https://github.com/tc39/proposal-partial-application)
- [Unit Testing: Principles, Practices, and Patterns. Vladimir Khorikov](https://www.goodreads.com/book/show/48927138-unit-testing)

### Другие части серии

- [Введение, предпосылки и ограничения](/blog/explicit-design-series)
- [Моделирование предметной области](/blog/explicit-design-1)
- [Проектирование пользовательских сценариев](/blog/explicit-design-2)
- [Описание UI как «адаптера» к приложению](/blog/explicit-design-3)
- [Создание инфраструктуры под нужды сценариев](/blog/explicit-design-4)
- [Композиция приложения в хуках](/blog/explicit-design-5)
- Композиция приложения без хуков (этот пост)
- [Внедрение cross-cutting concerns](/blog/explicit-design-7)
- [Расширение функциональности новой фичей](/blog/explicit-design-8)
- [Расцепление фич приложения](/blog/explicit-design-9)
- [Обзор и предварительные выводы](/blog/explicit-design-10)
