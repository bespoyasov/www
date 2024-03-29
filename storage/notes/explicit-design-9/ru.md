---
title: Часть 9. Расцепляем фичи через события
description: В новом посте серии мы обсудим, как сделать слайсы приложения более независимыми с помощью событий и в каких случаях это может быть оправдано.
datetime: 2023-06-26T18:00
cover: 09-decoupling-via-events.webp
tags:
  - adapter
  - architecture
  - cohesion
  - coupling
  - eventdriven
  - intention
  - modelling
  - observer
  - patterns
  - react
  - refactoring
  - typescript
  - verticalslice
---

# Часть 9. Расцепляем фичи через события

[В прошлый раз](/blog/explicit-design-8) мы создали новую фичу и реализовали её, посмотрев как можно развивать и прорабатывать разные модули с разной глубиной в зависимости от требований. В этом посте мы обсудим, как сделать слайсы приложения более независимыми с помощью событий и в каких случаях это может быть оправдано.

<aside>

[Исходный код](https://github.com/bespoyasov/explicit-design) примеров из всех постов этой серии,
а также [исходники этого блога](https://github.com/bespoyasov/www) доступны на GitHub. Звезданите
по репозиториям, если вам понравился пост!

</aside>

## Вертикальные слайсы

Ранее мы упоминали, что слайсы в приложении помогают выделять [ограниченные контексты](https://martinfowler.com/bliki/BoundedContext.html) и представлять фичи самостоятельными частями приложения.

Для маленьких приложений преимущества такого разделения не особо заметны и не то чтобы перекрывают затраты на «нарезку» по [слайсам](https://en.wikipedia.org/wiki/Vertical_slice). Но для более объёмных проектов это может оказаться полезно, особенно для [«микрофронтендов»](https://micro-frontends.org), где каждая фича может быть [отдельным приложением](https://microfrontend.dev/architecture/#composablearch), написанным на отличающемся стеке технологий.

Связать фичи прямыми вызовами в микрофронтендах, конечно, можно, но это сильно ограничивает свободу разработки и нивелирует смысл микрофронтендов. (Командам придётся синхронизировать работу и ждать друг друга, чтобы опубликовать серьёзные изменения в проекте.)

Вместо прямых вызовов в таких проектах удобнее организовать общение между фичами через события.

## Зацепление через адаптер

В прошлый раз мы связали фичи между собой через адаптер к заметкам для конвертера. В простых случаях этого может быть достаточно, но условимся, что наше приложение собирается вырасти.

Если кроме заметок об обновлении котировок конвертеру надо будет уведомить другие фичи, то количество адаптеров может бесконтрольно увеличиться:

![С каждой новой фичей конвертеру приходится добавлять новый адаптер и обновлять юзкейс, чтобы отправить сигнал в каждый из них](./09-multiple-adapters.webp)

Каждый из сигналов другим фичам — это место зацепления и потенциальная точка отказа. Если мы хотим избежать прямого зацепления между фичами, нам стоит не «уведомлять каждую» фичу руками, а «послать сигнал» во внешний мир, что котировки обновились. По такому принципу в ответ на это событие [другие фичи _сами решат_](https://en.wikipedia.org/wiki/Inversion_of_control), каким из них и как нужно реагировать на это событие.

![Юзкейс отправляет лишь один сигнал во внешний мир, на который другие фичи реагируют самостоятельно](./09-decoupling-via-events.webp)

Во втором случае точка зацепления юзкейса с внешним миром только одна и сколько бы нам ни надо было добавить других реакций на это событие, мы их будем добавлять отдельно «где-то снаружи». Такой способ организации называется событийным, а место, куда отправляются события — _шиной событий_.

## Шина событий

Попробуем применить идею [шины](https://www.enterpriseintegrationpatterns.com/patterns/messaging/MessageBus.html) к нашему приложению. Вместо прямого вызова другой фичи конвертер будет публиковать событие о том, что котировки обновились, и передаст значения этих котировок:

```ts
// core/ports.output
type PublishRefreshed = (rates: ExchangeRates) => void;
```

Эти сообщения будут прилетать в некий «хаб», который будет эти сообщения пересылать всем заинтересованным частям приложения. «Заинтересованность» будет выражаться в подписке модулей на конкретные события, которые им нужно обработать. Этот «хаб» мы и будем называть шиной.

<aside>

Шина, очередь, брокер, модель pub-sub — у каждого термина есть свои [отличительные
черты](https://stackoverflow.com/questions/7793927/message-queue-vs-message-bus-what-are-the-differences),
а в каких-то аспектах они пересекаются. Мы не будем подробно останавливаться на разнице между
ними, но я оставлю полезные ссылки на тему.

</aside>

Наша самописная шина будет предоставлять 3 интерфейса: для публикации событий, подписки на них и отписки. Эти интерфейсы будут общими для всех модулей, поэтому мы положим их в [Shared Kernel](http://ddd.fed.wiki.org/view/welcome-visitors/view/domain-driven-design/view/shared-kernel):

```ts
// shared/kernel

export type PublishEvent = (event: InternalEvent, data: EventPayload) => void;
export type SubscribeTo = (event: InternalEvent, handler: EventHandler) => void;
export type Unsubscribe = (event: InternalEvent, handler: EventHandler) => void;
```

Также в Shared Kernel мы опишем типы событий, которые могут возникнуть в разных частях приложения:

```ts
// shared/kernel

type ConverterEvent = 'RatesRefreshed';

// Maybe in the future, we'll also have:
// type NotesEvent = "NoteCreated"
// type UserEvent = "SessionExpired"

export type InternalEvent = ConverterEvent; /* | NotesEvent | UserEvent | etc */
```

<aside>

Мы можем использовать Shared Kernel, потому что события (и интерфейс шины) в любом случае будут
использоваться в разных частях приложения. Мы не создаём «дополнительного» зацепления между
модулями, кроме того, что обусловлено необходимостью модулей «общаться». Подробнее о том, что
такое Shared Kernel и для чего его использовать, подробно описано [в этом
посте](https://herbertograca.com/2018/07/07/more-than-concentric-layers/).

</aside>

Реализация может сильно отличаться в зависимости от требований. Для нашего приложения мы возьмём [небольшую библиотеку](https://github.com/developit/mitt), которая сделает почти всё за нас:

```ts
// shared/infrastructure/bus

import mitt from 'mitt';

const emitter = mitt<Record<InternalEvent, Optional<string>>>();

export const publishEvent: PublishEvent = emitter.emit;
export const subscribeTo: SubscribeTo = emitter.on;
```

<aside>

Вообще, выбор библиотеки будет [сильно зависеть](https://dataintensive.net) от требований и условий использования. Например, в распределённых системах (тех же микрофронтендах) важно, чтобы сообщение было [гарантированно доставлено всем подписчикам, причём только один раз](https://exactly-once.github.io/posts/exactly-once-delivery/).

В нашем случае приложение монолитно, а доставка будет осуществляться в основном синхронно, поэтому мы можем себе позволить простенький in-memory bus.

</aside>

### Расцепляем фичи

Используем шину событий, чтобы расцепить фичи. В юзкейсе конвертера первым делом заменим адаптер на публикацию события:

```ts
// converter/refreshRates

type Dependencies = {
	// ...
	publishRefreshed: PublishRefreshed;
};

export const createRefreshRates =
	({ publishRefreshed /* ... */ }: Dependencies): RefreshRates =>
	async () => {
		// ...
		publishRefreshed(rates);
	};
```

Сам адаптер перепишем так, чтобы он не вызывал конкретную фичу, а дёргал метод публикации в шине:

```ts
// converter/infrastructure/bus

import type { PublishEvent } from '~/shared/kernel';
import type { PublishRefreshed } from '../../core/ports.output';

export const createPublisher =
	(publish: PublishEvent): PublishRefreshed =>
	(rates) => {
		const noteContent = JSON.stringify(rates, null, 2);
		publish('RatesRefreshed', noteContent);
	};

// converter/infrastructure/bus.composition

export const publishRefreshed: PublishRefreshed = createPublisher(publishEvent);
```

Зарегистрируем публикатор в юзкейсе:

```ts
// converter/refreshRates.composition

import { publishRefreshed } from '../../infrastructure/bus';

export const refreshRates: RefreshRates = withAnalytics(
	createRefreshRates({
		fetchRates,
		readConverter,
		saveConverter,
		publishRefreshed
	})
);
```

...И обновим тесты:

```ts
// converter/refreshRates.test

// ...
const publishRefreshed = vi.fn();
const refreshRates = createRefreshRates({ publishRefreshed /*...*/ });

describe('when called', () => {
	// ...

	it('calls a message bus with the rates refreshed event', async () => {
		await refreshRates();
		expect(publishRefreshed).toHaveBeenCalledWith(rates);
	});
});
```

С первого взгляда ничего особо не поменялось, но если раньше для оповещения третьей фичи об обновлении нам бы пришлось менять код юзкейса `refreshRates`, то сейчас третья фича может подписаться на событие _сама_, если ей это нужно.

Юзкейсу также не нужно знать о том, в каком формате другие фичи хотят работать с данными. Формат событий одинаков сквозь всё приложение, поэтому нам достаточно опубликовать событие с нужными данными, а каждый подписчик сам решит в какой формат для своей работы эти данные перевести.

### Подписка на событие

Внутри фичи заметок создадим механизм подписки на событие:

```ts
// notes/infrastructure/bus

import { subscribeTo, unsubscribeFrom } from '~/shared/infrastructure/bus';
import { createNote } from '../../core/createNote';

const subscribe = () => subscribeTo('RatesRefreshed', createNote);
const unsubscribe = () => unsubscribeFrom('RatesRefreshed', createNote);
```

В общем случае это может быть отдельным юзкейсом, но для простоты пропустим этот шаг. Подписываться на событие будем, допустим, при монтировании компонента:

```ts
export const useBus = () => {
	useEffect(() => {
		subscribe();
		return unsubscribe;
	}, []);
};
```

И объявим подписку в фиче:

```ts
export function Notes() {
	useBus();
	// return ...
}
```

Использовать хуки опять же необязательно, потому что подписка на шину не зависит от фреймвока и в целом от UI.

### Но ведь это же... Redux? 🤨

Принцип работы подозрительно напоминает Redux. Если не вдаваться в подробности, то ментальная модель и правда почти совпадает: события — это экшены, шина — это стор, подписки — подписки.

Разница тут, пожалуй, в том, кто инициирует подписку: если в Redux входная точка — это глобальный стор, то в нашем примере фичи сами решают, когда и на что подписываться. События прилетают только в те участки кода, которые сами решили следить за ними.

Ну и экшены от событий всё же, конечно, отличаются. События описывают, что уже случилось, а экшены чаще говорят, что [должно произойти](https://redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow#actions). Но в остальном подходы и правда схожи.

<aside>

Кстати, я даже видел реализации шин, сделанные с помощью Redux. Я бы конечно не рекомендовал
тащить целый RTK лишь для pub-sub шаблона, это кажется избыточным, но если приложение уже работает
на нём, то можно выделить отдельный стор и повесить на него «роль шины событий».

</aside>

Однако, на «шину» похож не только на Redux, а скорее любой инструмент, который помогает настроить «более-менее расцепленное» общение между модулями. Атомарные сторы, обзёрверы — если захотеть, всё это можно свести к событийной модели.

Смысл идеи именно в слабом зацеплении и общении через контракты (события, сообщения, экшены и т.д.), поэтому «заимствование» идей в таких инструментах получается само собой 🙃

## События и DDD

В DDD события занимают [ещё более важное место](/blog/domain-modelling-made-functional/) — они помогают координировать работу разных ограниченных контекстов и служат результатом работы бизнес-процессов.

В юзкейсе конвертера мы сделали нечто похожее — мы опубликовали событие `RatesRefreshed` по результатам работы пользовательского сценария:

```
Handle Command:       Perform Use Case:        Publish Event:
RefreshButtonClick -> [ FetchRates        ] -> RatesRefreshed
                      [ -> ReadConverter  ]
                      [ -> LookupRate     ]
                      [ -> CalculateQuote ]
                      [ -> SaveConverter  ]
```

Это помогает думать о процессах в приложении, как о [превращении команд в события](/blog/domain-modelling-made-functional/).

DDD в его «каноничном» виде нужен [далеко не всегда](https://youtu.be/8XmXhXH_q90), но идея о грамотном разделении границ поддоменов, представлении процессов как последовательности преобразований и событий может помочь при проектировании приложения.

## В следующий раз

В этой серии мы посмотрели, как можно написать приложение по «принципам из книжек» и обсудили их смысл и пользу. В следующем посте мы подведём промежуточные итоги, составим список того, о чём не успели поговорить и составим план из нескольких тем на продолжение серии в будущем.

## Ссылки

Все ссылки на книги, статьи и другие материалы, упомянутые в статье.

- [Исходный код этапа разработки на Гитхабе](https://github.com/bespoyasov/explicit-design/tree/main/09-decoupling-features-using-events)
- [Блог на Гитхабе на случай опечаток](https://github.com/bespoyasov/www)

### Архитектура и микрофронтенды

- [Designing Data-Intensive Applications](https://dataintensive.net)
- [Micro-frontends, Architecture](https://microfrontend.dev/architecture/#composablearch)
- [More than concentric layers](https://herbertograca.com/2018/07/07/more-than-concentric-layers/)
- [Vertical slice, Википедия](https://en.wikipedia.org/wiki/Vertical_slice)
- [What are Micro Frontends?](https://micro-frontends.org)

### Расцепление через события и сообщения

- [Exactly-once message delivery](https://exactly-once.github.io/posts/exactly-once-delivery/)
- [Message Queue vs Message Bus—what are the differences?](https://stackoverflow.com/questions/7793927/message-queue-vs-message-bus-what-are-the-differences)
- [Messaging Patterns](https://www.enterpriseintegrationpatterns.com/patterns/messaging/MessageBus.html)
- [Mitt, functional event emitter](https://github.com/developit/mitt)

### DDD и «догматизм»

- [Bounded Context](https://martinfowler.com/bliki/BoundedContext.html)
- [Stop “doing” DDD](https://youtu.be/8XmXhXH_q90)
- [Доменное моделирование в функциональном стиле. Скотт Влашин](/blog/domain-modelling-made-functional/)

### Прочее

- [Actions in Redux](https://redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow#actions)
- [Shared Kernel](http://ddd.fed.wiki.org/view/welcome-visitors/view/domain-driven-design/view/shared-kernel)
- [Инверсия управления, Википедия](https://ru.wikipedia.org/wiki/Инверсия_управления)

### Другие части серии

- [Введение, предпосылки и ограничения](/blog/explicit-design-series)
- [Моделирование предметной области](/blog/explicit-design-1)
- [Проектирование пользовательских сценариев](/blog/explicit-design-2)
- [Описание UI как «адаптера» к приложению](/blog/explicit-design-3)
- [Создание инфраструктуры под нужды сценариев](/blog/explicit-design-4)
- [Композиция приложения в хуках](/blog/explicit-design-5)
- [Композиция приложения без хуков](/blog/explicit-design-6)
- [Внедрение cross-cutting concerns](/blog/explicit-design-7)
- [Расширение функциональности новой фичей](/blog/explicit-design-8)
- Расцепление фич приложения (этот пост)
- [Обзор и предварительные выводы](/blog/explicit-design-10)
