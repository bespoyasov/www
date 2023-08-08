---
title: Clean Code by Robert C. Martin
description: Notes from “Clean Code” by Robert Martin.
datetime: 2017-10-14T11:00
cover: cover.webp
tags:
  - books
  - oop
---

# Clean Code by Robert C. Martin

I read [this book](https://www.goodreads.com/book/show/3735293-clean-code) two years ago. But the only thing I remember from it was that I didn't like the translation. So this time I decided to read it in the original and collect some good thoughts in my notes. Today we will look at the first 4 chapters.

## Chapter 1. Clean Code

In the first chapter, the author defines clean code. Putting all the descriptions into one list, clean code is:

- elegant and productive;
- simple and unambiguous;
- readable and maintainable;
- testable and with a minimally necessary API.

## Chapter 2. Names

TL;DR:

- the names should be clear and consistent;
- there should be no ambiguity in them;
- abbreviations in names are bad.

Use titles that explain what you want to do.

```
// Instead of:
let d; // elapsed time in days

// Try:
let elapsedTimeInDays;
```

Avoid ambiguous names. Do not call the variable `accountList` unless it is a list. Do not use names that differ by one or two characters, so as not to confuse them.

Use pronounceable names. Abbreviations should be avoided.

```
// Instead of:
let genymdhms;
class DtRec102 = { /* ... */ };

// Try:
let generationTimestamp;
class Customer = { /* ... */ };
```

A variable with a good name is fast to read and easy to find. Use `i`, `j`, `k` only for counters. Function and method names should be verbs or begin with them. Getters, setters and predicates are best named with prefixes: `get`, `set`, `is`, `has`, etc.

<aside>

Blog author's note: I think you can omit the verb in converting functions: `convertIntToStr` →
`intToStr`.

</aside>

Use the same word for the same concept. If similar methods have different names in different classes: `fetch`, `get`, `load` - it is hard to remember when to call which one.

## Chapter 3. Functions

TL;DR:

- short functions are better than cumbersome ones;
- the fewer arguments, the better;
- flags are better replaced by an object with settings.

Functions should not be large. The best size for a function is 2-3 lines.

<aside>Blog author's note: size is debatable.</aside>

Each function should perform only one action. But be careful about defining what “one action” is. Some parts can be taken out into separate functions, be able to stop at the right moment.

The names should fully describe what the functions do. They should be consistent, and unambiguous.

No more than 3 arguments should be used. Flags are better replaced with an object with settings.

```
// Instead of:
const initPopup = (
  node,
  closeOnEsc=false,
  closeWithAnimation=false
) => {
  /* ... */
}

// Try:
const initPopup = (node, options={}) => {
  const {
    closeOnEsc=false,
    closeWithAnimation=false
  } = options
  /* ... */
}
```

Avoid functions with side-effects and duplicate code.

## Chapter 4. Comments

TL;DR:

- the comment should not duplicate the code;
- and it should provide additional information that is not in the code.

Comments appear when we cannot express something directly in the code. Therefore, by default, we should consider a comment a flaw and try to convey the idea through a variable or function.

```
// Instead of:
// if the employee is eligible for full benefits
if ((employee.flags.includes(HOURLY_FLAG)) && (employee.age > 65)) { /* ... */ }

// Try:
if (employee.isEligibleForFullBenefits()) { /* ... */ }
```

In the comments, it is better to explain how you got to the solution. The comments should tell you things that the person who will be working with your code won't know. It is also worth warning in the comments about known problems with this part of the code.

Get rid of unnecessary comments. If something is clear from the code directly, there is no need to comment on it. Remove obsolete and misleading comments. Get rid of commented code.

## In the Next Post

In chapters 5-8, we'll discuss:

- formatting, why we need it;
- data structures, abstractions;
- error handling and exceptions.
