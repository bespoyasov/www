---
title: Part 6. App Composition without Hooks
description: In this post, we'll discuss how to do the same thing, but without hooks, how to inject dependencies “before runtime,” and whether there's any benefit to doing so.
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

# Part 6. App Composition without Hooks

Let's continue experimenting with explicit software design. [Last time](/blog/explicit-design-5) we've built the converter app from its parts, composed everything with hooks, discussed ways to simplify composition, and talked about various types of testing. In this post, we'll discuss how to do the same thing without hooks, how to inject dependencies “before runtime,” and whether there's any benefit to doing so.

<aside>

By the way, all the [source code for this series](https://github.com/bespoyasov/explicit-design)
and the [blog's source code](https://github.com/bespoyasov/www) are available on GitHub. Give
these repositories a star if you liked the post!

</aside>

## Problems with Hooks

This post is probably going to be the most subjective in the entire series.

My criticism of hooks is just my opinion, **I could be wrong**, and I am probably wrong. So before we start writing code, I want to explain the reasons why hooks have recently become less attractive to me as a tool.

### High Infectiousness and Multiple Limitations

Hooks infect everything around them. If we decide to use a hook somewhere to solve a particular problem, we _have to_ use them in all other parts of the code that are somehow related to that problem, even if they're not needed there.

Developing with hooks requires making too many decisions _too early_. We have to deal with low-level implementation details before it becomes really necessary.

In addition, hooks introduce not always justified [restrictions](https://react.dev/warnings/invalid-hook-call-warning), which can [suddenly change](https://react.dev/learn/synchronizing-with-effects#how-to-handle-the-effect-firing-twice-in-development) for weakly substantiated reasons.

The volatile restrictions of a tool decrease trust in it, because it becomes expensive to maintain in the long term. Changing, such tools [add extra work](https://react.dev/reference/react/Component) and inflate technical debt, consuming resources that could have been saved.

### Vendor Lock-In

Hooks tightly bind the project to specific technologies and tools, making it excessively costly to switch them.

This may not be critical for every project, especially if the project is short-lived. But if we are going to write code that will live for 5+ years, we should allocate resources in advance to update the codebase and consider the likelihood of switching to another framework or library.

### Implicit Dependencies and Leaking Abstractions

Hooks [encourage](https://react.dev/reference/react) combining data and behavior. Composing hooks leads to a _composition of side effects_, which is called one of the main problems of OOP, for example.

Hidden dependencies and the influence of effects on each other are [difficult to grasp](https://blog.ploeh.dk/2021/07/28/referential-transparency-fits-in-your-head/), making it harder to control program behavior.

<aside>

By “encouragement” I mean not so much the examples from the documentation as the difference in how
easy it is to write code by combining data with behavior versus not doing so. With hooks, the
latter is even more difficult on a syntactical level.

</aside>

Implementation details of hooks are often overly or insufficiently abstracted. A single hook may contain functionality from different abstraction levels, which requires mentally jumping between different levels while reading. This increases cognitive load and clouds the interaction between parts of the application.

For the same reasons, testing hooks can be difficult. Composing effects requires not only preparing input data for the hook but also “recreating its state,” and implicit dependencies require complex testing infrastructure. For example, to test such a hook:

```ts
const useUser = () => {
	const { data, isLoading } = useSWR(['/users', id], fetchUser);
	const role = useRoles(data);
	const session = useStore((s) => s.session);
	return { ...data, session, role };
};
```

For example, to test such a hook, we need to mock `fetch` (or `useSWR`), set up a store provider, check what `useRoles` consists of, so that we can mock it or its dependencies if necessary.

Finally, since the composition of effects and excessive abstraction do not fit in our heads, we may forget to test edge cases: a specific user role, an incorrect server response, data revalidation, overwriting session data from old to new, etc.

As a result, we have to keep in mind not only the code of the hook itself but also many other aspects:

![The hidden complexity of hooks can be too high, and there are no natural boundaries for it](./06-hooks-complexity.webp)

### Complicated Mental Model

It is difficult to give a comprehensive definition of hooks, and in my observations, their mental model raises many questions for new developers.

They seem to be similar to functions, but [behave differently](https://react.dev/warnings/invalid-hook-call-warning). Conditions for re-rendering [complicate](https://react.dev/learn/lifecycle-of-reactive-effects) the understanding of how component re-rendering works. The concept of hooks seems to be established, but details and rules [can change](https://legacy.reactjs.org/docs/strict-mode.html#ensuring-reusable-state) drastically from version to version.

This, again, reduces confidence in the stability of the API and complicates learning.

### Disclaimer

All of this doesn't mean that it's impossible to write good and well-structured code with hooks. It's possible, of course.

I just feel that if a technology imposes restrictions, they should [guide developers](https://youtu.be/US8QG9I1XW0) and make it impossible or at least difficult to write code “incorrectly”. With hooks, however, I get the feeling that they don't provide a clear mental framework for understanding _how to write_ code using them.

For me, hooks are a way of composing different functionality. I think of them as “injectors” of services, functions, and data that trigger component re-renders. If the functionality is not directly related to the UI state or component re-rendering, then I will first consider whether it can be written without using hooks.

<aside>

By the way, in the new React documentation I found [something
similar](https://react.dev/learn/separating-events-from-effects) to this idea.

</aside>

## Composition without Hooks

Now that we have aligned our understanding of hooks, let's try to rebuild the converter without using them. Since the application itself is already designed, we can immediately move on to choosing the appropriate tools for the task.

<aside>

By the way, this section can be an example of why it's better to choose tools later, when you know
as much as possible about the project. It's clear that our requirement “to be able to work without
hooks” is artificial, but it can be replaced with a more significant requirement that is directly
related to the business needs.

</aside>

The service that requests data from the API doesn't use hooks, so we will leave it unchanged, but we will slightly modify the store. Instead of using context, we will use the [Zustand](https://github.com/pmndrs/zustand) library. It is a state manager that is somewhat similar to Redux, but simpler and doesn't require providers.

## Store Service

After installing Zustand in the project, we can describe a basic implementation of the store using it:

```ts
// infrastructure/store.ts

export const converter = createStore<Converter>(() => ({
	// ...Default model values.
}));
```

Next, let's describe the composition, that is, how this service will implement the application ports declared earlier:

```ts
// infrastructure/store.composition.ts

// Output ports connect the service
// with the use cases:

export const readConverter: ReadConverter = converter.getState;
export const saveConverter: SaveConverter = converter.setState;

// Input ports will be implemented directly,
// since there's no “domain logic” in the selectors:

export const useBaseValue: SelectBaseValue = () => useStore(converter, (vm) => vm.baseValue);
export const useQuoteCode: SelectQuoteCode = () => useStore(converter, (vm) => vm.quoteCode);
export const useQuoteValue: SelectQuoteValue = () => useStore(converter, (vm) => vm.quoteValue);
```

We will leave the data selectors unchanged. These are precisely the “reactive data” that should update the UI, so providing them through hooks makes sense.

On the other hand, the implementation of output ports will be used by use cases, which we will implement as functions. Therefore, `readConverter` and `saveConverter` will be references to read and write functions, not hooks.

### Composition of Use Cases

Let's update the composition of use cases to use `readConverter` and `saveConverter` functions directly:

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

Since the imported functions won't change their references, we can remove the `useCallback`:

```ts
// core/updateBaseValue.composition

import { readConverter, saveConverter } from '../../infrastructure/store';

export const useUpdateBaseValue: Provider<UpdateBaseValue> = () => {
	return (value) => updateBaseValue(value, { readConverter, saveConverter });
};
```

After that, it will become clear that creating an extra lambda in the hook and passing dependencies to the `updateBaseValue` function at runtime no longer makes sense. Instead, we will use “bake in” dependencies and prepare the entire use case in advance.

Currently, the code for the `updateBaseValue` function looks like this:

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

We will change the function signature so that it can be partially applied by specifying dependencies. We will extract the dependency argument, put it first, and make the function “curried”:

```ts
// core/updateBaseValue

export const createUpdateBaseValue =
	({ readConverter, saveConverter }: Dependencies): UpdateBaseValue =>
	(rawValue) => {
		// ...
	};
```

<aside>

I have covered dependency “baking” in more detail in a previous [post about
infrastructure](/blog/explicit-design-4/). If you're not quite clear on what's happening here, I
recommend reading that post first.

</aside>

<aside>

By the way, technically it's not quite accurate to call this “currying” in JS, but we won't delve
into terminology here. Also, the current way to make the function partially applicable is somewhat
cumbersome. However, when [native partial
application](https://github.com/tc39/proposal-partial-application) is introduced to JS, working
with this concept will be slightly easier.

</aside>

Next, we can partially apply the factory function by passing in the dependency argument and obtain a prepared use case:

```ts
// core/updateBaseValue.composition

export const updateBaseValue: UpdateBaseValue = createUpdateBaseValue({
	readConverter,
	saveConverter
});
```

As we mentioned earlier, partial application is more type-safe than an optional argument with dependencies, so we have less chance of passing the wrong service or forgetting to pass it. And since the real values are substituted only once, such composition should not affect performance.

### Composition of Components

Since the use case is now just a function, components can use it directly:

```tsx
// ui/BaseValueInput

type BaseValueInputDeps = {
	// Using the function directly:
	updateBaseValue: UpdateBaseValue;
	useBaseValue: SelectBaseValue;
};

// In the component itself, we'll remove the `useUpdateBaseValue` call
// and will use the given `updateBaseValue` function directly.
```

The composition of the component itself will not change significantly:

```tsx
// ui/BaseValueInput.composition

// ...Import the function:
import { updateBaseValue } from '../../core/updateBaseValue';

export const BaseValueInput = () =>
	// ...Pass it when “registering” the component:
	Component({ updateBaseValue, useBaseValue });
```

Let's do the same with other components that depend on this use case.

<aside>

Again, if we don't use explicit composition, it would be enough to import and use the function
directly in the component. More details about explicit and implicit composition can be found in
the [previous post](/blog/explicit-design-5/).

</aside>

### Composition of Tests

Since we are not touching the logic, in tests, we only need to update the preparation of stubs and mocks:

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

The test code and its logic will remain unchanged.

## Exchange Rates Refresh

We can do the same with the update quotes use case. First, we change the function's signature to be prepared for the partial application:

```ts
// core/refreshRates

export const createRefreshRates =
	({ fetchRates, readConverter, saveConverter }: Dependencies): RefreshRates =>
	async () => {
		//...
	};
```

Next, we can partially apply it, passing freshly created functions for working with the store as dependencies:

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

After this, we need to decide how we want to work with the `asCommand` adapter and update its code. For example, we want the use case to be independent and work without hooks, but we want to see the reactive status of the operation in the UI.

Then we can rewrite `asCommand` so that it turns the use case function into a hook that returns the `{ result, execute }` interface:

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

The component in this case will continue depending on a hook:

```tsx
// ui/RefreshRates

type RefreshRatesProps = {
	useRefreshRates: Provider<Command<RefreshRates>>;
};
```

...But at composition time, we can provide a regular function to a component, the adapter will transform it into a hook:

```ts
// ui/RefreshRates.composition

import { refreshRates } from '../../core/refreshRates';
import { asCommand } from '~/shared/infrastructure/cqs';

export const RefreshRates = () => Component({ useRefreshRates: asCommand(refreshRates) });
```

## Other Tools

In this example, we chose Zustand as our state manager because it is suitable for working with objects where multiple fields can be inter-related. In other applications, we might need other tools, such as [Jotai](https://github.com/pmndrs/jotai) or [MobX](https://github.com/mobxjs/mobx).

In the repository, I left a [couple of examples](https://github.com/bespoyasov/explicit-design/tree/main/06-no-hooks-composition/src/features/converter/infrastructure/store) of how to implement the store using these two libraries as well.

## Next Time

In this post, we discussed how to compose use cases and “inject” functionality without using hooks. In the [next post](/blog/explicit-design-7), we will discuss how to add cross-cutting concerns such as caching, persistence, logging, and analytics services to the application so that they do not intertwine with the application logic but are convenient to use.

## Sources and References

Links to books, articles, and other materials I mentioned in this post.

- [Source code for the current step on GitHub](https://github.com/bespoyasov/explicit-design/tree/main/06-no-hooks-composition)
- [Blog's source code for typos and corrections](https://github.com/bespoyasov/www)

### React Hooks and Components

- [Built-in React Hooks](https://react.dev/reference/react)
- [Component](https://react.dev/reference/react/Component)
- [How to handle the Effect firing twice in development?](https://react.dev/learn/synchronizing-with-effects#how-to-handle-the-effect-firing-twice-in-development)
- [Rules of Hooks](https://react.dev/warnings/invalid-hook-call-warning)

### State and Effect Management

- [Ensuring reusable state](https://legacy.reactjs.org/docs/strict-mode.html#ensuring-reusable-state)
- [Lifecycle of Reactive Effects](https://react.dev/learn/lifecycle-of-reactive-effects)
- [Separating Events from Effects](https://react.dev/learn/separating-events-from-effects)

### Abstractions and Decomposition

- [Abstraction as a design tool](https://github.com/bespoyasov/refactor-like-a-superhero/blob/main/manuscript-en/08-abstraction.md)
- [Functional architecture - The pits of success](https://youtu.be/US8QG9I1XW0)
- [Referential transparency fits in your head](https://blog.ploeh.dk/2021/07/28/referential-transparency-fits-in-your-head/)

### Infrastructure Tools

- [Jotai](https://github.com/pmndrs/jotai)
- [MobX](https://github.com/mobxjs/mobx)
- [Zustand](https://github.com/pmndrs/zustand)

### Other Topics

- [Curried functions](http://learnyouahaskell.com/higher-order-functions#curried-functions)
- [Partial Application Syntax for ECMAScript](https://github.com/tc39/proposal-partial-application)
- [Unit Testing: Principles, Practices, and Patterns by Vladimir Khorikov](https://www.goodreads.com/book/show/48927138-unit-testing)

### Table of Contents for the Series

- [Introduction, assumptions, and limitations](/blog/explicit-design-series)
- [Modeling the domain](/blog/explicit-design-1)
- [Designing use cases](/blog/explicit-design-2)
- [Describing the UI as an “adapter” to the application](/blog/explicit-design-3)
- [Creating infrastructure to support use cases](/blog/explicit-design-4)
- [Composing the application using hooks](/blog/explicit-design-5)
- Composing the application without hooks (this post)
- [Dealing with cross-cutting concerns](/blog/explicit-design-7)
- [Extending functionality with a new feature](/blog/explicit-design-8)
- [Decoupling features of the application](/blog/explicit-design-9)
- [Overview and preliminary conclusions](/blog/explicit-design-10)
