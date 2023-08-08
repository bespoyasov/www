---
title: 'Refactor Like a Superhero: Introducing a New Online Book!'
description: How to refactor code efficiently and without pain.
datetime: 2022-10-10T08:00
cover: cover.webp
tags:
  - antipatterns
  - beginners
  - books
  - checklist
  - communication
  - documentation
  - editing
  - education
  - error
  - fp
  - javascript
  - oop
  - patterns
  - product
  - react
  - refactoring
  - tdd
  - testing
  - tools
  - typescript
---

# Refactor Like a Superhero: Introducing a New Online Book!

In January this year, I was preparing a talk about refactoring. I collected all the techniques and resources I use in my everyday work and wanted to reflect them in the talk. But there was so much material that it was impossible to compress all of it into a 40-minute talk.

For the talk, I trimmed and cut the text and code samples. However, the leftovers contained context, explanations of constraints and limitations of each used technique, and a comparison between different ways of refactoring the code.

I decided not to throw the leftovers in the trash but instead recompile them in a free online book. This is how [this project](https://github.com/bespoyasov/refactor-like-a-superhero-online-book) came to be.

## Who Might Want to Read This Book

This is a book about how to efficiently refactor code. In it, we'll discuss the benefits of code refactoring for developers and the business, how to search for problems in your code, and how to solve them.

This book might be useful for developers of web services and user applications who write in high-level languages and have a couple of years of experience.

Library developers might also find some ideas in it but I'll mostly focus on user applications since I have more experience in that area.

More experienced and senior developers probably already know some of the techniques described in the book. They might find the list of sources at the end of the book most valuable.

## What Topics it Touches

In this book, we’ll discuss various refactoring techniques as well as the process of refactoring itself. In particular, we’ll talk about:

### Notion of Refactoring and Code Quality

What refactoring is and why it is needed. What an uncontrollably increasing complexity of a project can lead to. How to define “bad” and “good” code.

### What to Do Before and During the Refactoring

How to prepare the code for changes in order to simplify the work. How to secure the work with future changes. How to make the process of refactoring easier. How to isolate changes and make sure no other code is broken. How to stay within resource budget and keep changes small.

### Low-Hanging Fruits in Refactoring

How to use the capabilities of automated code refactoring tools and analyzers. Reasons to know the peculiarities of the language and environment in which the code is executed. How to benefit from automation. How consistency helps you to solve problems more quickly.

### Naming of Entities and Functions

Why naming is important, how variable and function names affect code perception and development speed. Why terminology synchronization improves team collaboration. How to identify “bad” and “good” names. Ways to deal with lying names.

### How to Work with Code Duplication

How to distinguish between code duplication and lack of knowledge about the system. Why and how to use duplication as a tool. The benefits of regular code audits and how to get into the habit of doing them.

### Abstraction and Separation of Concerns

How and why to use abstraction. Reasons to separate intention from implementation and consider the limits of the working memory of the human brain. How to give the reader information about the system in a controlled way. How to efficiently decompose complex tasks into simpler ones. How to make sure the application data is always in the correct state.

### Functional Pipeline and Linear Code Execution

How and why to express data states of business workflows in code. The benefits of linear code execution are. How to disallow passing invalid data to functions and isolate data validation. The benefits of functional programming are.

### Conditions and Code Complexity

How to organize the conditions to decrease the cognitive load of the code. Metrics to use to measure complexity. How to use automated tools to manage complexity. Reasons to “straighten” code execution and “turn” conditions inside out. How to use Boolean algebra to simplify conditions. Design patterns that can help do this. How to apply functional programming principles to simplify conditions.

### How to Refactor and Work with Code with Side Effects

Reasons why side effects make the program more complex and unpredictable. How to reduce the number of effects in your code and what to do with effects needed for the application to work. The benefits of pure functions and referential transparency. Options to test effects and reasons to separate logic from effects. The point of dividing code into commands and queries.

### Ways of Refactoring Error Handling

What kinds of errors exist and how they differ. Problems entangled error handling lead to. What to pay attention to when refactoring error handling in JavaScript code. Techniques to use when there are technology, paradigm, or methodology constraints.

### How to Improve Module Integration

The meaning of coupling and cohesion. How to divide an application into modules and then compose these modules together. Why and how to decompose tasks. The benefits of contracts and guarantees between modules are. How to decouple modules from each other as much as possible but still leave room for them to communicate. The difference between object and functional composition is. How to manage dependencies. How to achieve data integrity and consistency.

### Generics and Hierarchies

How to understand when you need a generalized algorithm or type. Why composition is preferable to inheritance in most cases. How to use the Liskov substitution principle as an integration linter.

### Basics of Refactoring the Application Architecture

How poor architecture can hamper refactoring. How to use ubiquitous language to improve the architecture. How to build interaction with the outside world and manage dependencies. How ports and adapters are useful. Reasons to separate UI-logic from business-logic. How architecture affects testability.

### When and Why to Use Declarative Style

The benefits of a declarative code style over an imperative one. Situations when to prefer the imperative style. Why finite state machines can be useful in frontend development.

### Static Typing as a Tool in Refactoring

How to use types to convey more knowledge about the domain. How to make invalid data states unrepresentable in code. How to use types to detect development principles violation.

### Refactoring Test Code

How not to break tests during refactoring. What makes tests brittle.” How to find a balance between high coverage and low test-induced damage.

### Around the Code: Comments and Documentation

How to synchronize the sources of information in a project. How and why to make comments more informative. How to increase the benefits of documentation without increasing the cost of maintaining it.

### Refactoring as a Process

How to decide whether to refactor or rewrite the code. The information to collect about the project before the start. How to estimate the time required for a task. Metrics to use to measure the effect of refactoring on the code.

## What This Book Isn't

In this book, I don't claim to show “the only correct way” to refactor and write code. If you have a lot of experience, you probably already know most of the techniques described and have your own opinion about them.

Also, this is not a “step-by-step manual” that is universally applicable to all projects. My coding habits and programming style are biased by my development experience. The decision of whether to apply an idea depends greatly on the project, the context, resources, and the purpose of refactoring. Try to choose ideas that bring more benefits at less cost.

## Feedback and Errata

The book is free and [available on GitHub](https://github.com/bespoyasov/refactor-like-a-superhero-online-book).

If you noticed a typo or have ideas for improvement text or code samples that would better describe the point, please send them in GitHub repo issues. The history of changes and updates is also available in the book repository.

Right now, the book is available in English and Russian. If you want to help with translating it into more languages, please, let me know. I'll be happy to discuss the details!

Hope, you find the book helpful!

## Sources

Here's the list with links to the book, its table of contents, list of used resources, and the original talk that started all this:

- [Refactor Like a Superhero, Online Book](https://github.com/bespoyasov/refactor-like-a-superhero-online-book)
- [Table of Contents](https://github.com/bespoyasov/refactor-like-a-superhero-online-book/blob/main/manuscript-en/TOC.md)
- [Resources and Links](https://github.com/bespoyasov/refactor-like-a-superhero-online-book/blob/main/manuscript-en/23-sources.md)
- [Refactor Like a Superhero, Talk on YouTube](/talks/refactor-like-a-superhero/)
