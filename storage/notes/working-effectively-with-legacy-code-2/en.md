---
title: Working Effectively with Legacy Code. Part 2
description: In the second part, we talk about changing code when we run out of time, adding features, TDD and dependencies.
datetime: 2018-03-09T15:00
cover: cover.webp
tags:
  - abstraction
  - books
  - composition
  - coupling
  - cqs
  - decorator
  - dependencies
  - immutability
  - isp
  - tdd
  - oop
  - patterns
  - refactoring
  - testing
  - tradeoffs
---

# Working Effectively with Legacy Code. Part 2

[In Part 1](/blog/working-effectively-with-legacy-code/) we looked at the introduction, reasons for changing code, seams and automated refactoring tools. Today we talk about changing code when you don't have enough time, adding features, TDD and dependencies.

## Chapter 6. I Don't Have Enough Time but Need to Change Code

Refactoring and tests are extra work. But in the future it will make it easier to change the code and catch bugs faster.

### Method Extraction

If you want to add a feature which can be expressed in new code, it is better to write this code in a new method and call the new method. The new method can be covered by tests.

```js
class UserList {
	// Method sends action notifications to the specified users:
	notifyOfAction(users) {
		const message = 'some message to send';
		users.forEach((user) => {
			this.sendEmail(user, message);
		});
	}

	// ...
}
```

If we want the notification to be sent only to adults, we can filter the list of users directly in the method:

```js
class UserList {
	notifyOfAction(users) {
		const message = 'some message to send';
		users = users.filter((user) => user.age >= 18);
		users.forEach((user) => {
			this.sendEmail(user, message);
		});
	}

	// ...
}
```

But this way we will not understand where the old code ends, where the new code begins, and how to test it. It is better to put the filtering into a new method:

```js
class UserList {
	notifyOfAction(users) {
		const message = 'some message to send';
		users = this.filterInAdults(users);
		users.forEach((user) => {
			this.sendEmail(user, message);
		});
	}

	filterInAdults(users) {
		return users.filter((user) => user.age >= 18);
	}

	// ...
}
```

The new `filterInAdults` method can now be covered by tests.

Algorithm of the method:

- Find the place to change.
- If the change can be called as a separate method, then write code to call that method, adding comments to it.
- Declare all local variables needed to be called and make them arguments to the new method.
- Determine the value to be returned by the new method.
- Create a new method using TDD.
- Remove the comment and replace it with a real new method.

Cons:

- You leave the original method unattended for a while, with no intention of testing or changing it.
- Sometimes it becomes unclear why actions happen in a different method.

Pros:

- The new code is completely separate from the old code.
- It is possible to test it.
- It is possible to observe all the variables that change the behavior of the method.

Extraction can be used for the whole class, not only a method. For example, if you want to change the output format from string to HTML.

### Method wrapping

Another way to add behavior to existing code. The `pay` method of the `Employee` class calls `paymentDispatcher` to pay the employee.

```
class Employee {
  pay(amount) {
    const date = // ...
    paymentDispatcher(date, amount)
  }
}
```

Suppose we want to log each payment. We can add logging directly to the `pay` method, but we can create a new method with the same signature, and call it internally:

```
class Employee {
  // New method with old code:
  dispatchPayment(amount) {
    const date = // ...
    paymentDispatcher(date, amount)
  }

  // Old method with a call to the allocated and added logging:
  pay(amount) {
    this.logPayment(amount)
    this.dispatchPayment(amount)
  }

  // Additional method:
  logPayment(amount) {
    // ...
  }
}
```

Algorithm:

- Define the method to be changed.
- Create a new method with the same [signature](https://developer.mozilla.org/en-US/docs/Glossary/Signature/Function).
- Call the new method inside the old method.
- Create a method for the new behavior via TDD and call it inside the old method.

Pros:

- Old methods are not changed, only renamed.
- The new functions are not explicitly dependent on the others.

Cons:

- Unfortunate method names may appear.

It is also possible to wrap not only a method but also a class. For the example above, you could create a class `LoggingEmployee` that inherits from `Employee` and overload the `pay` method, adding the desired new behavior. This is also called [decorator](https://en.wikipedia.org/wiki/Decorator_pattern).

## Chapter 7. Endless Changes

When code depends on some [interface](<https://en.wikipedia.org/wiki/Protocol_(object-oriented_programming)>), this dependency is usually less coupled. You only need to change the code if the interface itself changes. So it's better to have dependencies on abstract interfaces than on specific classes.

Use interfaces to break dependencies in the project before refactoring. This takes time, but it ends up with sections of code that are easy to work with and test.

## Chapter 8. How to Add a Feature

TDD algorithm:

- Write a failing test.
- Write a function for the test to stop crashing.
- Remove duplicate code.
- Repeat.

With examples, the first step:

```js
// Write a test that we know will fail:
it('Return a sum of 2 integers', () => {
	expect(sum(1, 1)).toEqual(1 + 1);
});

// The function is empty for now:
const sum = (a, b) => {};
```

We make sure that the test falls with the reason we expect. Then, at the second step:

```js
// Change the implementation of a function or method so that the test passes:
const sum = (a, b) => a + b;
```

At the third step, we check that there is no duplication and refactor the method code and tests. Gradually describe examples of test passing and examples of failing. In legacy code, tested methods and classes are first prepared for testing, and then proceed to the TDD algorithm.

## Chapter 9. I Can't Test This Class

Some classes are hard to test: it's expensive to create objects of that class, there are side-effects when creating them, a lot of parallel work is done. The easiest way to find out how much trouble creating an instance of such a class will cause is to create it. Try creating an object, the debugger will tell you what's missing to create it.

Test code doesn't have to live up to the same standards as production code. You can break encapsulation if it makes writing tests easier. But the tests must be clear and clean. Bring repetitive code for tests into the setup.

If creating a class requires instances of other classes, try creating them with empty values in their constructors.

If the class has hidden dependencies in its constructor, consider making them explicit. For example, pass this dependency to the constructor from the outside.

## Chapter 10. I Can't Run This Method When Testing

Sometimes class methods are hard to test, too:

- It is private.
- It is difficult to create arguments to call the method.
- The method has side-effects.

If the method is private, we should consider whether it can be tested through a public method. In general, if you want to test a private method, you should make it public. If it's bugging you, then apparently the class is doing too much.

If there are side-effects, it's worth trying to extract the method. The class below creates interface elements and decides what information to display in them:

```js
class AccountDetails {
	// ...

	handlePerformedAction(event) {
		const { type } = event;
		if (type === 'project activity') {
			const modal = this.createModal();
			const display = this.createElement('input');
			modal.setDescription('modal text');
			modal.show();

			let accountDescription = this.modal.getSymbol();
			accountDescription += ': ';
			// ...
			display.value = accountDescription;
		}
	}
}
```

You can separate code that does not depend on the interface from code that does. Separate the command processing methods so that the methods become testable and independent of each other:

```js
class AccountDetails {
	// ...

	handlePerformedAction(event) {
		const { type } = event;
		this.performCommand(type);
	}

	performCommand(type) {
		if (type === 'project activity') {
			this.setDescription('modal text');
			this.updateModalValue();
		}
	}

	setDescription(text) {
		const modal = this.createModal();
		modal.setDescription(text);
		modal.show();
	}

	updateModalValue() {
		const display = this.createElement('input');
		let accountDescription = this.modal.getSymbol();
		accountDescription += ': ';
		// ...
		display.value = accountDescription;
	}
}
```

### Command-Query Separation

A method can be either command or query, but not both at the same time. Command modifies the object's state, but does not return a value. Query returns a value, but does not modify the object.

## Chapter 11. Unclear What Methods to Test

A change in a method causes a chain of changes in other places that are related to that method. If the code is well structured, these chains of relationships will be simple.

Impacts propagate in code in three main ways.

- When the program uses the values that the method returns.
- When the method changes the parameters that are passed to it as arguments, and the program uses them after the changes.
- When the method changes global objects or variables.

Impact recognition algorithm:

- Identify the method to be changed.
- If the method returns a value, check the places where the method is called.
- If the method changes any parameters, check the places that use those parameters.
- Check the superclasses and subclasses of the object with that method.
- Find the global variables that the method changes as it runs.

## Chapters 12–13. What Tests to Write to Change Code

The behavior of legacy code should be taken as an axiom: if it works that way, it must work that way. Therefore the behavior of this code should be preserved. Characteristic tests are tests which preserve behavior.

The algorithm of characteristic tests creation:

- Start testing a small piece of code.
- Write a test that fails.
- Detect code behavior.
- Correct the test so that it assumes this behavior.

There can be errors in legacy. So if you find strange behavior, you must find out if it is a bug or a feature.

## Chapter 14. Dependencies are Killing Me

Avoid arbitrary and uncontrolled direct library calls in your code.

## In the Next Post

In the next post, we'll talk about obscure code, code without structure, huge classes, and situations where nothing helps.

## Resources

- [Working Effectively with Legacy Code by Michael C. Feathers](https://www.goodreads.com/book/show/44919.Working_Effectively_with_Legacy_Code)
- [Function Signature](https://developer.mozilla.org/en-US/docs/Glossary/Signature/Function)
- [Decorator Pattern](https://en.wikipedia.org/wiki/Decorator_pattern)
- [Interface in OOP](<https://en.wikipedia.org/wiki/Protocol_(object-oriented_programming)>)
- [Test-Driven Development](https://en.wikipedia.org/wiki/Test-driven_development)
- [Side Effects](<https://en.wikipedia.org/wiki/Side_effect_(computer_science)>)
