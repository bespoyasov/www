---
title: What I've Learned From Failure by Reg Braithwaite
description: Notes from the book, my summary and review.
datetime: 2019-02-04T11:00
tags:
  - books
  - communication
  - entropy
  - error
  - failure
  - management
  - tradeoffs
---

# What I've Learned From Failure by Reg Braithwaite

This book is more about attitudes toward work and the industry as a whole than about programming. What to do, what not to do, why that is, and what bad decisions lead to.

You can read an [online version](https://leanpub.com/shippingsoftware/read) for free. It's pretty short, I got through it in an evening.

## What I’ve Learned From Failure

Project development can fail if even one of the components is bad:

- The competence of the developers;
- Adequate expectations of the quality of the product;
- Suitability of proposed solutions in development and management;
- Competence of project management and communications.

### People

Weak teams lose. A sign of a weak team: if you were going to quit your job and didn't want to take any of your colleagues with you, the team is weak.

Weak product-owners lose, too. Admitting that the project has problems and it's time to make changes is difficult and scary, but necessary.

External imposed constraints (government restrictions, for example) tend to be detrimental.

### Action

Get feedback fast—_fail fast!_ The sooner you know you have a problem, the easier it is to find a solution. Works for both the code and the product as a whole.

### Details

Details and controversial decisions in a project should always be visible to everyone. To stop following the details is to start burying the project.

### Schedule

Deadlines are a must have. It's important for product owners and investors to know what's going on and when the next part of the project will be ready.

### Power

If you want to make a change to a project, be prepared to prove the benefit of your decision to anyone and everyone.

### History

A hypothesis based on actions from the past may not work in the future.

_“If we had taken more time to plan, we would have planned better; that's what happened in the past project”_ is not a fact at all.

### Finishing

Walking away from a project is sometimes useful, too. Playing the hero who drags everything on can be bad for both the health of the “hero” and the health of the project. Sometimes you don't have to finish what you started. Sometimes you don't have to finish what others have started.

## The Not So Big Software Design

To understand the details of a project, you have to know how it is different from all the others. The most important architectural decisions are based on what makes a project different from others.

### Better Software Architecture

The better architecture is, the more precisely and in detail describes that particular project. It should be compact, but describe the features in detail.

## Which Theory Fits the Evidence?

Why do _theory P_ and _theory D_ matter?

If we believe in _theory D_ (_deterministic_—that the process can be described completely, and if something doesn't add up, we just don't have enough data), then we believe that the project can be planned in advance and completely.

If we believe in _theory P_ (_probabilistic_—that nothing can be predicted completely, but only some parts and only with some accuracy), then we believe that we should plan only some parts of the project, and when something goes wrong, we should add new information to the plan to correct it.

### Belief Drives Behavior

Adepts of _theory D_ believe that:

- one can plan a project in advance;
- you can calculate in advance how long it will take to implement;
- the most important thing in development is planning;
- using off-the-shelf solutions will speed up development and spend fewer resources on finding developers.

Adepts of _theory P_ believe that:

- only some parts of a project can be planned, but not the whole project;
- when calculating time, everyone, _everyone_, **_everyone_** lies, often unknowingly;
- the most important thing in development is learning, often from mistakes;
- teamwork is better than solitary;
- frameworks should be used cautiously, comparing what problems they will solve and what they will bring with them.

## Project Management Acts like a Marketplace for Information

In a steam engine, one of the most important parts are the pipes, because they allow steam to flow from one part to another. In a project, it is important that information circulates from one part of the team to another.

A project is like a marketplace, where some information is valued where it is lacking. The challenge for managers is to be able to separate valuable information (that will help predict the outcome of the project or parts of it) from non-valuable information; to be able to “buy” it from developers and “sell” it to management or investors.

## Bricks

The analogy with bricks is dangerous. Bricks are too simple. If you know how to work with one brick, you know how to work with the others. This is not the case in software. Not only is it not always clear how to handle “bricks”, it's also not clear how many you need to build a project.

When you add people to a project who don't understand how it works, you run the risk of piling up a bunch of broken code. It is necessary to allocate the minimum knowledge to work on the project and not to break this rule when recruiting people.

### Software Development is Difficult to Parallelize

The “bricks” that make up the software are connected to each other in some way. In order to develop them in parallel, you have to initially think through how they should interact, which doesn't always work out well.

If you add people to the project in order to parallelize the development at a later stage (when some part is already written), the productivity will even decrease.

The second problem with the brick analogy is that it lets you think that you can measure progress by the number of bricks you use. But software is transfinite.

Also, “where to put the brick” and “how to connect it to others” play an important role. One mistake can roll back the progress mark a lot.

The third difference with bricks: as the project evolves, client requirements change, so progress will have to be recalculated constantly.

## Trial-and-Error with Feedback Cycle

The whole point of this cycle is to create a plan, but realize in advance that the plan will not stand up to a collision with reality. So it's better to run into problems early _(fail fast!)_.

### Feedback

There is a mistake in which software is developed by _increments_ instead of _iterations_.

A _increment_ is a piece of software that is complete in itself, but carries no value to the business. An _iteration_ is a finished part that brings value to the business.

For feedback to work, it has to be feedback from real users. The only way to get that feedback, and get it fast, is through iterative development.

## Software’s Receding Hairline

Technical debt leads to a non-working product.

## Interlude: The Mouse Trap

The architecture of the mouse trap is a set of incompatible components, used not for their intended purpose, it is unclear how they are connected by flimsy crutches.

## Duck Programming

It's a managerial anti-pattern; the view that anything not related to programmers, programming languages, or tools is not programming.

## I Can’t Find Good Salespeople

We believe in our product. But salespeople need to convince consumers that they have a need and our product can meet it, and that that need needs to be filled now. They are willing to take risks, but only for what they can control.

## Other Books on Similar Topics

Some other books about programming

- [Clean Code by Robert C. Martin](/blog/clean-code/)
- [Clean Architecture by Robert C. Martin](/blog/clean-architecture/)
- [The Art of Readable Code by D. Bowsell, T. Foucher](/blog/the-art-of-readable-code/)

And other books:

- [Decoded. The Science behind Why We Buy by Phil Barden](/blog/why-we-buy/)
- Antifragile by Nassim N. Taleb
- The Black Swan by Nassim N. Taleb
