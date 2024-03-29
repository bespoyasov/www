---
title: Часть 7. Cross-Cutting Concerns и расширение инфраструктуры
description: 'В новом посте серии о явном дизайне мы поговорим о функциональности, связанной с бизнес-логикой лишь побочно — о расширении инфраструктуры, аналитике, алёрт-мониторинге, логировании и т.д.'
datetime: 2023-06-13T10:00
cover: 07-decorator-composition.webp
tags:
  - architecture
  - bugs
  - cohesion
  - composition
  - crosscutting
  - decorator
  - dependencies
  - encapsulation
  - error
  - favorite
  - patterns
  - performance
  - react
  - refactoring
  - testing
  - typescript
---

# Часть 7. Cross-Cutting Concerns и расширение инфраструктуры

В предыдущих постах мы собрали базовую версию приложения, которая обрабатывала основные пользовательские сценарии. В этот раз мы поговорим о функциональности, которая связана с бизнес-логикой лишь побочно: расширении инфраструктуры, аналитике, алёрт-мониторинге, логировании и т.д.

<aside>

[Исходный код](https://github.com/bespoyasov/explicit-design) примеров из всех постов этой серии,
а также [исходники этого блога](https://github.com/bespoyasov/www) доступны на GitHub. Звезданите
по репозиториям, если вам понравился пост!

</aside>

## Виды кода и плотность

В приложениях помимо кода бизнес-логики есть ещё «обслуживающий» кода, который напрямую почти не связан с предметной областью. Это может быть «клей», который связывает разные части приложения и сторонние инструменты вместе, или «побочная» функциональность, которая нужна бизнесу опосредованно, например, аналитика или мониторинг.

Обычно, чем сложнее приложение, тем меньше нём доля бизнес-логики и больше — обслуживающего кода. Мы можем условно называть это отношение _плотностью_: чем больше обслуживающего кода, тем ниже плотность логики. Бизнес-правила в нём будто «разбавлены» разными вспомогательными штуками.

Основная опасность низкой плотности в том, что логика может «раствориться» и «затеряться» в обслуживающем клее. Но бизнес-логика и «клей» [меняются по разным причинам](https://blog.ploeh.dk/2023/03/27/more-functional-pits-of-success/) и с разной скоростью, поэтому в идеале они должны быть чётко отделены и не вмешиваться в работу друг друга.

С другой стороны обслуживающий код часто бывает [сложно разместить и инкапсулировать](https://en.wikipedia.org/wiki/Cross-cutting_concern) в какой-то одной части приложения, потому что его функциональностью пользуется _несколько_ других модулей.

Для удобной работы с таким кодом мы можем попробовать поделить его на «сервисную» часть, которая не зависит от предметной области, и «адаптерную» часть, которая будет содержать специфические для нашего приложения знания. В этом посте мы как раз посмотрим, насколько это достижимо и какие могут появиться ограничения по пути.

## Логирование и аналитика

Представим, что продукт-оунеры хотят провести UX-эксперимент, и для этого нам надо собрать данные о том, как пользователи работают с приложением. Нам нужно интегрировать сервис аналитики, который бы регистрировал действия на экране.

В нашем случае «сторонним сервисом» аналитики будет вот такой вот код:

```ts
// services/analytics
export const sendEvent: SendEvent = async (event, payload) => {
	const dateTime = new Date().toISOString();
	const eventData = payload ? `Additional data: ${payload}` : '';
	const message = `[Analytics ${dateTime}]: Captured event “${event}”. ${eventData}`;
	console.log(message);
};
```

...Который реализует тип `SendEvent`:

```ts
// shared/kernel
type SendEvent = (event: string, payload?: string) => Promise<void>;
```

Нам сейчас не особо важно, как именно регистрируются события, и мы их выводим в консоль. На этом месте мог быть запрос к какому-нибудь Google Analytics, FireBase или другому сервису.

Допустим, мы хотим привязать вызов этого сервиса к, например, клику по кнопке обновления котировок. Самый простой способ это сделать — положить сервис в зависимости юзкейса и дёрнуть его:

```ts
// core/refreshRates

type Dependencies = {
	fetchRates: FetchRates;
	readConverter: ReadConverter;
	saveConverter: SaveConverter;

	// Новая зависимость:
	sendAnalytics: SendEvent;
};

export const createRefreshRates =
	({ fetchRates, readConverter, saveConverter }: Dependencies): RefreshRates =>
	async () => {
		// Отправляем аналитику:
		sendAnalytics('CLICKED_CONVERTER_BUTTON_OR_WHATEVER');

		// ...Остальной код.
	};
```

Это рабочий вариант, но у него есть проблема. Пользовательский сценарий изначально ничего об аналитике не знал и от этого сервиса не зависел, поэтому аналитика непосредственно к юзкейсу отношения не имеет.

Аналитика важна для бизнеса, но в доменной модели её нет. Мы можем сделать вывод, что это «побочный» код, и нам не стоит его смешивать прямо с функцией пользовательского сценария. Улучшить ситуацию мы можем с помощью _декораторов_.

### Композиция в декораторах

[Декоратор](https://refactoring.guru/design-patterns/decorator) — это функция, которая обогащает другую функцию какой-то дополнительной функциональностью. В нашем случае декораторы будут «навешивать» на юзкейсы разные «побочные» вызовы типа аналитики.

Создадим функцию `withAnalytics`, которая будет ожидать на вход юзкейс `RefreshRates`:

```ts
// infrastructure/analytics

export const withAnalytics =
	// Принимаем `RefreshRates`,
	// возвращаем — тоже `RefreshRates`.


		(refresh: RefreshRates): RefreshRates =>
		async () => {
			// Вызываем сервис аналитики:
			sendEvent('CLICKED_CONVERTER_BUTTON_OR_WHATEVER');

			// Вызываем настоящий юзкейс
			// и возвращаем его результат:
			return await refresh();
		};
```

Отметим, что результат работы декоратора — новая функция, которая реализует _тот же_ тип, что и аргумент декоратора. Так декоратор обогащает юзкейс, но _не меняет_ его публичный интерфейс. Это значит, что для композиции этого декоратора вместе с юзкейсом, нам будет достаточно обернуть им функцию юзкейса:

```ts
// core/refreshRates.composition

export const refreshRates: RefreshRates = withAnalytics(
	createRefreshRates({
		fetchRates,
		readConverter,
		saveConverter
	})
);
```

В будущем сохранение типа позволит нам выстраивать целые цепочки из декораторов, обогащая юзкейс другой «побочной» функциональностью без изменения его кода.

<aside>

Тип функции `withAnalytics` при необходимости может быть
[дженериком](https://www.typescriptlang.org/docs/handbook/2/generics.html), чтобы уметь работать с
разными юзкейсами.

</aside>

### Польза декораторов

Декоратор [инкапсулирует](https://github.com/bespoyasov/refactor-like-a-superhero/blob/main/manuscript-ru/08-abstraction.md#инкапсуляция) в себе все специфические для конкретной фичи знания о том, как работать с сервисом аналитики. Имя события, порядок вызова, данные, которые надо передать вместе с вызовом — всё это находится в одном месте и не разбросано по кодовой базе.

Примешать или наоборот удалить специфическую часть функциональности с декораторами становится проще, потому что нам нужно добавить или удалить конкретную функцию, [не копаясь в исходниках самого юзкейса](https://solidbook.vercel.app/ocp). А неизменный интерфейс самого юзкейса помогает удобно компоновать вызовы.

![Функция юзкейса получается «окружена» набором декораторов, которые прицепляются к ней дополнительно и не залезают внутрь её кода](./07-decorator-composition.webp)

Вообще, идея [композиции на декораторах](https://youtu.be/qJPwSvDLmQE) не нова. Если вы работали с ООП-кодом, то, вероятно, знакомы с валидирующими или логирующими декораторами. Здесь мы используем ту же идею, но в виде функции, а не класса.

### Ограничения декораторов

Если нам важно запустить аналитику по середине юзкейса или в зависимости от условий, вероятно, декоратор не подойдёт. В таких случаях в целом не страшно вклинить вызов сервиса в код логики, но по умолчанию всё же стоит подумать, можно ли этого избежать.

Кроме этого вызов, например, аналитики может требовать данных из других ограниченных контекстов. Как именно это решать, зависит от условий конкретного проекта, но можно посмотреть в сторону выделения [Shared Kernel](https://herbertograca.com/2018/07/07/more-than-concentric-layers/), общего контекста или расцепленного общения между фичами. О последнем мы ещё подробно поговорим в двух следующих постах 🙃

## Алёрт-мониторинг

Помимо глобальной обработки исключений бывает также полезно отслеживать конкретные ошибки в, например, некоторых юзкейсах. Это тоже может быть удобно сделать на декораторах.

Создадим декоратора `withAlertMonitor`, укажем опасную функцию как аргумент и вернём обёрнутую в `try-catch` функцию, которая реализует тот же интерфейс:

```ts
// shared/error-handling

const withAlertMonitor =
	(workflow: T): T =>
	() => {
		try {
			// Пробуем запустить опасную операцию:
			return workflow();
		} catch (error) {
			//
			// Если возникла ошибка, которая нас интересует,
			// отправляем её в мониторинг:
			if (error instanceof DomainError) {
				captureError(error);
			}

			// После чего перебрасываем её дальше вверх,
			// чтобы обработать и сообщить о ней пользователю:
			throw error;
		}
	};
```

Вообще декораторы можно использовать и для непосредственно обработки ошибок, а не только мониторинга. Всё зависит от требований проекта и того, как устроена [обработка](https://github.com/bespoyasov/refactor-like-a-superhero/blob/main/manuscript-ru/12-error-handling.md).

<aside>

От этого же будет зависеть, надо нам [перебрасывать
(rethrow)](https://leftofnull.com/2020/06/29/rethrowing-errors-for-proper-stack-trace) ошибку выше
или нет.

</aside>

В этом примере мы считаем, что ошибки мы обрабатываем на верхнем уровне, а в декораторах лишь сообщаем о них в сервис мониторинга. Использовать такой декоратор мы могли бы так:

```ts
// core/refreshRates.composition

import { withAlertMonitor } from '~/shared/error-handling';

export const refreshRates: RefreshRates = withAlertMonitor(
	createRefreshRates({
		/*...*/
	})
);
```

## Профилирование

Ещё один сценарий использования декораторов — это перформанс-профайлинг. Например, чтобы замерить, сколько занимает работа юзкейса, мы могли бы написать такую функцию:

```ts
// infrastructure/performance

import type { RefreshRates } from '../../core/ports.input';

export const withPerfMeasure =
	(fn: RefreshRates): RefreshRates =>
	async () => {
		const start = performance.now();
		await fn();
		const end = performance.now();
		console.log(`RefreshRates took ${end - start}ms.`);
	};
```

А затем обернуть ей юзкейс:

```ts
// ...
import { withBenchmark } from '../../infrastructure/performance';

export const refreshRates: RefreshRates = withBenchmark(
	createRefreshRates({
		/*...*/
	})
);
```

## Персистентность

Большая часть стейт-менеджеров обычно предоставляет инструменты для сохранения данных в локальном хранилище устройства. Например, у Zustand есть [отдельный пакет](https://github.com/roadmanfong/zustand-persist) для персистентности.

Однако, не всегда такие инструменты есть, или они могут быть недостаточно настраиваемы. В таких случаях мы можем написать сохранение данных руками. Например, сперва опишем «сервис» сохранения данных:

```ts
// shared/kernel

type Persist = <T>(key: PersistenceKey, value: T) => void;
type Retrieve = <T>(key: PersistenceKey) => Nullable<T>;

// services/persistence

export const persist: Persist = (key, value) =>
	window.localStorage.setItem(key, JSON.stringify(value));

export const retrieve: Retrieve = (key) => {
	const value = window.localStorage.getItem(key);
	return value ? JSON.parse(value) : null;
};
```

Затем опишем декоратор, который будет оборачивать выходной порт `SaveConverter`:

```ts
// infrastructure/persistence

const key = 'converter-app:rates';

export const withPersistence =
	(fn: SaveConverter): SaveConverter =>
	(converter) => {
		persist(key, converter.rates);
		return fn(converter);
	};
```

Тогда мы сможем «прицепить» сохранение данных к обновлению модели:

```ts
// infrastructure/store.composition

import { withPersistence } from '../persistence';

const saveConverter = withPersistence(converter.setState);
```

## Композиция нескольких декораторов

Как мы упоминали ранее, декораторы сохраняют тип функции, которую обогащают новой функциональностью. Это значит, что один юзкейс можно обернуть в несколько декораторов разом:

```ts
export const refreshRates: RefreshRates = withAlertMonitor(
	withAnalytics(
		withBenchmark(
			createRefreshRates({
				fetchRates,
				readConverter,
				saveConverter
			})
		)
	)
);
```

Для красоты можно использовать функциональные утилиты типа [`pipe` или `compose`](https://medium.com/free-code-camp/pipe-and-compose-in-javascript-5b04004ac937), чтобы цепочка выглядела чуть площе:

```ts
export const refreshRates: RefreshRates = pipe(
	// Декораторы в порядке их «навешивания»:
	withBenchmark,
	withAnalytics,
	withAlertMonitor
)(
	// Юзкейс с внедрёнными зависимостями:
	createRefreshRates({
		fetchRates,
		readConverter,
		saveConverter
	})
);
```

Так разделение логики и «побочной» функциональности будет выражено прямо в коде, а удаление или добавление нового декоратора будет заключаться лишь в изменении списка внутри `pipe`.

## Смена инструментов и расширение инфраструктуры

Кроме использования декораторов, такой способ композиции даёт возможность обновлять и расширять инфраструктуру по мере необходимости. Мы уже затрагивали эту тему в прошлом посте, когда обсуждали замену стейт-менеджера, теперь посмотрим и на другие варианты.

### API клиент

Например, если нам надо заменить `fetch` на [`axios`](https://github.com/axios/axios), то будет достаточно реализовать тип `ApiRequest<T>`:

```ts
// services/network

import axios from 'axios';

export const get = (url: Url) =>
	axios
		.request({ ...config, url })
		.then((response) => response.data)
		.catch((cause) => {
			throw new Error('Failed to perform request', { cause });
		});
```

Композиция этого сервиса и работа с другими слоями приложения останется такой же, как была.

## Локализация

Локализация — тема несколько более сложная. Она может быть как просто частью UI, так и переплетаться с логикой работы — зависит от проекта. В нашем конвертере мы можем изолировать локализацию на уровне UI-слоя, поэтому достаточно будет обновить компоненты:

```tsx
type Localize = (key: string) => LocalizedString;

type BaseValueInputDeps = {
	updateBaseValue: UpdateBaseValue;
	useBaseValue: SelectBaseValue;

	// Укажем локализатор как зависимость:
	useLocales: Provider<Localize>;
};

export function BaseValueInput({ updateBaseValue, useBaseValue, useLocales }: BaseValueInputDeps) {
	// Используем его внутри компонента:
	const l = useLocales();

	return (
		<label>
			<span>{l('BaseValueInput.Label')}:</span>
			{/* ... */}
		</label>
	);
}
```

Затем обновим композицию, передав настоящий сервис локализации:

```ts
// ui/BaseValueInput.composition
// ...
import { useLocales } from '~/shared/ui/localization';

export const BaseValueInput = () => Component({ updateBaseValue, useBaseValue, useLocales });
```

Опять же, всегда можно использовать зависимость напрямую, если явная композиция нам не важна:

```tsx
export function BaseValueInput() {
	// Импортируем и используем локализатор напрямую:
	const l = useLocales();

	return (
		<label>
			<span>{l('BaseValueInput.Label')}:</span>
			{/* ... */}
		</label>
	);
}
```

В последнем случае для тестов может потребоваться провайдер локализации, если мы используем библиотеку, которая зависит от контекста.

## Кеширование и дедупликация

Если запросы к серверу нужно дедуплицировать или кешировать, мы можем расширить тулинг, добавив библиотеку и для этого. Большая часть библиотек для работы с сетью сейчас работает через хуки, поэтому мы будем использовать их.

<aside>

Мне, кстати, кажется, что [useSWR](https://swr.vercel.app) и [React
Query](https://tanstack.com/query/) берут на себя слишком много. Они пролезают в слишком много
слоёв приложения, из-за чего они перестают быть “non opinionated” и в некоторых случаях
использовать их становится неудобно. [Есть
библиотеки](https://github.com/mcollina/async-cache-dedupe), которые реализуют [SWR
стандарт](https://www.rfc-editor.org/rfc/rfc5861) и не используют хуки, но их довольно мало.

</aside>

У нас уже есть инфраструктурный хук, который превращает асинхронный юзкейс в «команду» для UI. Давайте расширим его и добавим туда `useSWR`:

```ts
// shared/cqs.swr

type RequestId = List<Unique<string>>;

// Добавляем request ID, по которому собираемся
// дедуплицировать запросы и кешировать результаты:
export const asCommand =
	<F extends AsyncFn>(command: F, requestId: RequestId): Provider<Command<F>> =>
	() => {
		const [run, setRun] = useState(false);
		const { data, error, isLoading } = useSWR(run ? requestId : null, command);
		// Под капотом вызываем useSWR.
		// Мне не очень нравится, как они рекомендуют
		// «откладывать» вызов через `null`, но имеем что имеем.

		const execute = (() => setRun(true)) as F;
		const status: Status = isLoading ? 'pending' : !!error ? 'failure' : 'idle';
		const result = { is: status, data, error };
		// Результат вызова useSWR адаптируем к требуемому интерфейсу,
		// чтобы все компоненты, полагающиеся на asCommand, продолжали работать.

		return { execute, result };
	};
```

Так как мы добавили новый аргумент в `asCommand`, нам надо добавить этот аргумент в композиции компонентов, которые его используют:

```ts
// ui/RefreshRates.composition

export const RefreshRates = () =>
	Component({ useRefreshRates: asCommand(refreshRates, ['refresh']) });
```

...Остальное же останется неизменным.

Мне не очень нравится, что так в `useSWR` приходится передавать не отдельно функцию запроса к сети, а весь юзкейс целиком. Кажется, будто это «не очень правильно», так как `useSWR` — это инструмент именно что для работы с сетью. С другой стороны нам бы всё равно пришлось перезапускать юзкейс после обновления данных, поэтому я посчитал, что можно оставить код таким.

## В следующий раз

В этом посте мы обсудили cross-cutting concerns и расширение инфраструктуры. В следующий раз мы добавим в приложение новую фичу и посмотрим, как строить вертикальные слайсы и чем они полезны.

## Ссылки

Все ссылки на книги, статьи и другие материалы, упомянутые в статье.

- [Исходный код этапа разработки на Гитхабе](https://github.com/bespoyasov/explicit-design/tree/main/07-cross-cutting-concerns-and-infrastructure)
- [Блог на Гитхабе на случай опечаток](https://github.com/bespoyasov/www)

### Проектирование и архитектура

- [Cross-cutting concern, Википедия](https://en.wikipedia.org/wiki/Cross-cutting_concern)
- [More functional pits of success](https://blog.ploeh.dk/2023/03/27/more-functional-pits-of-success/)
- [More than concentric layers](https://herbertograca.com/2018/07/07/more-than-concentric-layers/)
- [Абстракция как инструмент проектирования](https://github.com/bespoyasov/refactor-like-a-superhero/blob/main/manuscript-ru/08-abstraction.md#инкапсуляция)
- [Быстрорастворимое проектирование](https://www.youtube.com/watch?v=qJPwSvDLmQE)

### Обработка ошибок

- [Rethrowing Errors for Proper Stack Trace](https://leftofnull.com/2020/06/29/rethrowing-errors-for-proper-stack-trace)
- [Обработка ошибок](https://github.com/bespoyasov/refactor-like-a-superhero/blob/main/manuscript-ru/12-error-handling.md)

### Работа с сетью

- [`async-cache-dedupe`](https://github.com/mcollina/async-cache-dedupe)
- [`axios`](https://github.com/axios/axios)
- [HTTP Cache-Control Extensions for Stale Content](https://www.rfc-editor.org/rfc/rfc5861)
- [TanStack Query](https://tanstack.com/query/latest)
- [`useSWR`](https://swr.vercel.app)

### Прочее

- [Decorator Pattern](https://refactoring.guru/design-patterns/decorator)
- [Generics in TypeScript](https://www.typescriptlang.org/docs/handbook/2/generics.html)
- [A quick introduction to pipe() and compose() in JavaScript](https://medium.com/free-code-camp/pipe-and-compose-in-javascript-5b04004ac937)
- [`zustand-persist`](https://github.com/roadmanfong/zustand-persist)
- [Принцип открытости-закрытости, Википедия](https://solidbook.vercel.app/ocp)

### Другие части серии

- [Введение, предпосылки и ограничения](/blog/explicit-design-series)
- [Моделирование предметной области](/blog/explicit-design-1)
- [Проектирование пользовательских сценариев](/blog/explicit-design-2)
- [Описание UI как «адаптера» к приложению](/blog/explicit-design-3)
- [Создание инфраструктуры под нужды сценариев](/blog/explicit-design-4)
- [Композиция приложения в хуках](/blog/explicit-design-5)
- [Композиция приложения без хуков](/blog/explicit-design-6)
- Внедрение cross-cutting concerns (этот пост)
- [Расширение функциональности новой фичей](/blog/explicit-design-8)
- [Расцепление фич приложения](/blog/explicit-design-9)
- [Обзор и предварительные выводы](/blog/explicit-design-10)
