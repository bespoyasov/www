---
title: Notes from “Frontend Fellows” Conference
description: Notes from “Frontend Fellows” Conference in Ufa.
datetime: 2016-11-20T18:05
tags:
  - automatization
  - components
  - css
  - html
  - javascript
  - patterns
  - process
  - react
  - tools
---

# Notes from “Frontend Fellows” Conference

On November 12, there was a conference in Ufa called ”Frontend Fellows“. When I was there, I was summarizing the talks. Here are the notes from the conference.

## “Is Grid Layout a Panacea?” by Oleg Mokhov

Disadvantages of flexbox:

- vertically arranged flex elements are not connected;
- the order of the elements requires agreements.

But grid layout is not a universal solution and is not needed everywhere. It's a tool that should be used:

- when there is a _grid_ (not just columns) and the rows in it are interconnected;
- when the grid can change under the action of the content;
- when the grid has blocks of width of several cells;
- in the admin panel, and where cross-browsing is not important.

Grid layout doesn't work properly for now. The functionality is hidden behind flags in browsers.

Building adaptive design with the grid layout is still a bad idea. For that, it's better to use flexbox for now.

## “Higher Order Components” by Alexander Aibulatov

A higher-order function returns a function as a result. Higher-order components work on the same principles: they take a component as an argument, return a component with extended functionality.

Higher-order components help to:

- share similar behavior between different components;
- connect application state to components;
- transform component properties.

The [Recompose](https://github.com/acdlite/recompose) library automates the routine, hides the complex stuff inside itself, allowing you to focus on the architecture.

If we use higher-order components, we put business logic and general behavior of different components inside them. We then can leave the other components “dumb” and stateless.

## “Shorter\_” by Sergey Zhigalov

We read code more often than we write it. That's why the code should be clear and clean. The less complicated the code is, the fewer errors there are in it. The [Lodash](https://lodash.com/) library helps to make code simpler.

Copy-pasting somebody else's code into your project makes it your own code. You'll have to read it, fix it, you'll have to live with it. No one is responsible for other people's code, while Lodash is the developers' responsibility. This library is tested and checked.

Lodash helps you write shorter, functional style code. It allows you to get rid of helpers and utility methods and its functions are called in a human-readable way. When you read Lodash methods you know what they do.

There's a lot of intricacy with data types in javascript. To check a property of an object inside another object, you have to do a bunch of checks. With Lodash you don't have to think about it, the library has it covered.

The disadvantage is that the developers of the library like to break backward compatibility. They can cut out a couple of methods, change behavior. Updating major versions in a product project might be painful.

After the talk, I tried using Lodash instead of my own helpers. I liked it, it saves time and clarifies the code. In short\_, cool.

## References and Reading List

- [CSS Flexbox Spec](https://www.w3.org/TR/css-flexbox-1/), [Grid Layout Spec](https://www.w3.org/TR/2016/CR-css-grid-1-20160929/);
- [Recompose](https://github.com/acdlite/recompose);
- [Lodash](https://lodash.com/docs/);
- [Clean Code, Robert Martin](/blog/clean-code).
