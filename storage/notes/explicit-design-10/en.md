---
title: Explicit Software Design. Preliminary Conclusions
description: In the last post, we draw preliminary conclusions and analyze the application code that we wrote as part of this series of posts.
datetime: 2023-07-03T18:00
tags:
  - abstraction
  - antipatterns
  - checklist
  - communication
  - finance
  - entropy
  - opinion
  - tradeoffs
  - verticalslice
---

# Explicit Software Design. Preliminary Conclusions

I planned this series as a playground for various methods of software development and design, using a single application as an example.

The original content plan was much broader: I wanted to add the server side, discuss distributed systems, talk about error handling and its functional alternative, delve deeper into DDD principles through examples, and explore the topic of type safety in functional code.

However, once I started working on it, I realized that it would be impossible to fit everything into one series all at once—there's just too much material. I was afraid I might give up halfway and not publish a single post.

Instead, I decided to package the first batch of posts in this series as a “foundation” that can be later used to dive into other topics in more detail. I am currently planning to take a break and, perhaps, return to this series in the future.

As a conclusion though, I think it would be useful to look at the code we managed to write while working on the application and discuss it.

<aside>

By the way, all the [source code for this series](https://github.com/bespoyasov/explicit-design)
and the [blog's source code](https://github.com/bespoyasov/www) are available on GitHub. Give
these repositories a star if you liked the post!

</aside>

## Created Application Analysis

For a simple converter, this whole carnival of principles and constraints is superfluous. At the beginning of the series, we agreed to not pay attention to this, but now I want to remind you of it.

The complexity of the project structure and application composition _increases the maintenance costs_. If the application does not contain complex logic, the extra structural complexity will only be a problem.

<aside>

In general, any new tool should _bring more benefits than constraints and costs_. This heuristic
will remind itself throughout this article.

</aside>

However, we can still draw some conclusions about the benefits and issues of the ideas we tested in the previous posts.

### Features Slices Seem Beneficial

Dividing the application functionality “by features” seems useful even in small applications.

Feature slices show “clusters” of semantically related functionality and define boundaries between them. This helps in breaking down large tasks, managing code complexity, and giving the reader [at any given moment only necessary information](https://github.com/bespoyasov/refactor-like-a-superhero/blob/main/manuscript-en/08-abstraction.md#fractal-architecture).

Boundaries between features help to keep coupling between modules under control. By the way, we don’t have to physically build adapters between features; it’s enough to remember or document the place of their interaction to see how the coupling is growing.

Control over coupling gives a chance to react if different parts of the code start to know too much about each other’s internals.

Lastly, feature slices help to design each feature and manage its complexity _independently from others_. We can choose and use only the tools that are suitable for a specific task, [without having to choose them for the entire application at once](https://youtu.be/L2Wnq0ChAIA).

### Trade-Offs Everywhere

Every decision carries benefits and costs. Design is an attempt to find a balance between meeting requirements, low costs, and high benefits. This is an ongoing process, and it doesn't end after the release of the first version of the application.

Priorities and weights of costs and benefits will change depending on the project's situation. For fixing a bug in production, for example, you can disregard code cleanliness and fix it later. On the other hand, when implementing a new feature or cleaning up technical debt, the priorities might not be so apparent.

Additionally, the same solution in different projects can lead to different outcomes, so analyzing benefits and costs is necessary, even if we use common architectural patterns to solve problems.

<mark>

In general, there is no silver bullet; you will have to think a lot in any case
</mark>

...Therefore, simply “taking one principle and using it everywhere” won’t work. Extracting a domain model in a CRUD application is hardly justified, and splitting the code of a simple form in an online store into layers is probably excessive.

### “Almost, but not Quite”

JavaScript (and consequently TypeScript) is a multi-paradigm language. It allows the use of different tools to solve problems, but somewhat “half-heartedly”.

For true™ functional programming in JS, native pattern matching and partial function application are missing (at least for now: [1](https://github.com/tc39/proposal-pattern-matching), [2](https://github.com/tc39/proposal-partial-application)). For proper OOP, it lacks real interfaces and compile-time [dependency injection](/blog/di-ts-in-practice/).

<mark>
As a result, you can use either of them, but none will be convenient</mark>

The problem can be solved with additional libraries and constraints, using linters and third-party tools, but this increases maintenance costs and sometimes makes the code less resilient to changes.

### Constant Battle with Entropy

The multi-paradigm nature also leads to problems with “non-standard solutions”.

For example, I’m not sure that the idea of [“explicit composition”](/blog/explicit-design-4/#functionality-and-composition) will be appealing to a significant number of developers. Such a way to compose modules looks weird, unfamiliar, and “non-standard”.

Even if hypothetically a non-standard idea can bring a lot of benefits, its “non-mainstream” and “strangeness” can easily overshadow it. Tools and ideas are developed by the community, and if an idea doesn't go mainstream, there will be [problems with its development and support](https://github.com/tc39/proposal-decorators#why-is-decorators-taking-so-long).

This is neither good nor bad; it's just is how it works. But whether to fight it and swim against the mainstream, advocating some ideas, is... well 🤷

### Excessive Purism Costs Money

In some previous posts, I emphasized how you can “cut corners” when using one concept or another.

For many of the solutions shown, you can distinguish “degrees” of their strictness. The stricter the implementation of an idea, the closer it is to the “standard”\* and the more costly it is. Conversely, the looser the implementation, the easier it is to use, but the further it is from the original concept.

<aside>

The word “standard” is in quotes because all the solutions shown by me are just my interpretation,
and it’s not necessarily a correct one.

</aside>

In many cases, “freedom in implementation” has little effect on benefits but can reduce its costs. (As, for example, [direct imports](/blog/explicit-design-5/#more-conventional-component) of hooks used as DI.)

You'll have to keep all this balance in mind when deciding how to write code. Striving for pure and strict implementation just for the sake of pure and strict implementation can be a useful exercise, but it is not always profitable. Excessive purism takes development resources and can be costly.

Using tools blindly is dangerous. It is easy to add layers of abstraction and indirection, but if it doesn’t bring any tangible benefits, they will [only harm](https://youtu.be/DNjDZ0E6GUs), raising maintenance costs and the barrier to entry for the project.

## When It Might Be Useful

I can see several situations where the described development approach could be useful.

### Experiments with Code

If you want to get hands-on experience with ideas and principles to understand the problems they solve, it makes sense to do so. Experiments will help you evaluate ideas and form your own opinion about them.

Doing this through books, posts, or learning materials might be difficult because they are often biased by the authors' experience and project their attitudes towards development, design, or problem-solving.

### Legacy Code Exploration

Trying to break down a complex system with code written before your time into explicit parts and describing their interactions simplifies the exploration and understanding of the system. Bounded contexts and explicit composition can help with this.

You don't even have to commit the results of the exploration to the project repository; doing this locally to understand the structure of module interactions and then rolling back the result is enough. The actual changes in code after this can greatly vary in the “strictness” of implementation and can be much simpler.

### Long-Living Side Projects

By long-living projects, I mean those that last longer than 5-7 years. By side projects, I mean those that don't have significant resources for daily maintenance and which developers return to sporadically or systematically, but rarely.

For such projects, explicit design can help with two things:

- Document more knowledge about the project and describe it in code or as close to it as possible.
- Make the project more resilient to external changes, like chaotic updates of libraries or tools.

A ubiquitous language and explicit description of processes in code help to [get into the context of a task faster](/blog/tzlvt-architecture-upgrade/) after a long break. An explicit structure, dependency direction, and buffer zones can help limit the spread of changes in code when updating tools or infrastructure.

Again, the patterns of using a particular tool will depend heavily on the balance of benefits and costs, but secondary and tertiary tools can be isolated so that their maintenance or replacement does not consume many resources.

### Framework Supports the Idea

If the project is built on a framework that supports the described principles, facilitates their implementation, and reduces friction when following them, the balance of benefits and costs may change. With the presence of “guidelines” within the framework, it is easier to follow the rules, which reduces costs.

## When It's Harmful

Besides cases when the described approach can be useful, there are also situations when its use would be more harmful than helpful.

### Project Doesn't Need It

By “doesn't need it” various things can be implied:

- The application is small or doesn’t contain complex logic;
- The team doesn’t see any benefits in these rules, and they slow down their work;
- The cost-benefit ratio doesn’t favor the approach;
- The already accepted coding rules partially or completely contradict the approach.

In all cases, the solutions will be different: don’t use the approach at all, use it partially, use only ideas but not the implementation, and of course—communicate, communicate, communicate.

Any approach, methodology, idea is a tool for achieving a certain goal. If the tool doesn't help to achieve it, there's no need to use it.

### Prototypes and Simple Applications

If the project doesn’t require long-term support, obsessing over cleanliness and strictness is costly and pointless. The same applies to simple applications, where additional structure only complicates it without any benefit.

### Resources Already Allocated

One of the ideas described is the isolation of tools and features from each other. If the project has enough resources for rhythmic updating of dependencies, tools, and infrastructure, tool isolation might not be needed.

Direct coupling to a tool might sometimes save more time in daily use than what would be needed to rewrite code when changing the tool or updating its version. (Which might not even occur).

### Approach Contradicts Accepted Rules

If a project uses a framework or set of rules that don’t support new ideas, it might be more beneficial to not use them.

Trying to combine incompatible elements requires a large amount of not only development resources but also management and communication. The risk of failure is high, which can result in unmaintainable code that neither takes advantage of the framework nor the new ideas.

A failed attempt will waste resources, frustrate the development team, and have a negative impact on the project as a whole.

### Benefits Smaller Than Costs

Ultimately, it all boils down to the cost-benefit ratio. We already mentioned this before, so I’ll just reiterate:

<mark>If the tool doesn’t provide benefits, it’s not worth using it</mark>

Excess abstractions, indirection, implicitness, and so on are only useful when their benefits greatly outweigh the costs of using them. Otherwise, we get a tool that is difficult to use, the benefits of which are not noticeable, and most likely sooner or later it will be abandoned.

## Real-Life Examples

To the question “Have I used something similar in real projects?” I usually give [Tzlvt](/projects/tzlvt/) as an example. It’s a finance management app that I made back in 2015. It has undergone several rewrites and has generally been the main testing ground for new ideas.

This app is a prime example of when a project has a long lifespan, but no resources for working on it or maintaining it.

In Tzlvt, I use the ideas of tool isolation. They help to not abandon the project completely because maintenance doesn’t require a lot of resources. In it, I also began to try out the ideas of explicit composition to simplify testing and reduce the number of dependencies.

I tried some of the described ideas in other projects as well. The impression was mixed, so let me repeat the disclaimer:

<mark>This is not a recommendation on how to write code</mark>

It's rather a buffet of ideas and my opinions about them. Don't take my word for it, try everything in a sandbox, and form your own opinion 🙃

## Future Posts?

I have several ideas for future posts that would expand this series. So far, the plans include topics such as:

- Applicability of the approach with frameworks like Next or SvelteKit.
- A more detailed dive into functional DDD.
- Type safety and type branding.
- Code-splitting, routing, and performance with React 18.
- Error handling in a functional style.
- Use with other JS libraries.

If you have ideas that could complement this list, [send me an email](mailto:bespoyasov@me.com) or create an issue in the [project repository](https://github.com/bespoyasov/explicit-design). I’d be happy to discuss! 👋

## Sources and References

Links to books, articles, and other materials I mentioned in this post.

- [Source code for all the steps in this series](https://github.com/bespoyasov/explicit-design)
- [Blog's source code for typos and corrections](https://github.com/bespoyasov/www)

### From My Blog and Projects

- [Fractal Architecture in Abstraction](https://github.com/bespoyasov/refactor-like-a-superhero/blob/main/manuscript-en/08-abstraction.md#fractal-architecture)
- [Tzlvt. Why Rewrite in TypeScript](/blog/tzlvt-architecture-upgrade/)
- [Tzlvt, app that helps you save money](/projects/tzlvt/)

### Other Resources

- [Vertical Slice Architecture, not Layers!](https://youtu.be/L2Wnq0ChAIA)
- [What's the Cost of Indirection & Abstractions?](https://youtu.be/DNjDZ0E6GUs)
- [ECMAScript Pattern Matching](https://github.com/tc39/proposal-pattern-matching)
- [Partial Application Syntax for ECMAScript](https://github.com/tc39/proposal-partial-application)
- [Why is decorators taking so long?](https://github.com/tc39/proposal-decorators#why-is-decorators-taking-so-long)

### Table of Contents for the Series

- [Introduction, assumptions, and limitations](/blog/explicit-design-series)
- [Modeling the domain](/blog/explicit-design-1)
- [Designing use cases](/blog/explicit-design-2)
- [Describing the UI as an “adapter” to the application](/blog/explicit-design-3)
- [Creating infrastructure to support use cases](/blog/explicit-design-4)
- [Composing the application using hooks](/blog/explicit-design-5)
- [Composing the application without hooks](/blog/explicit-design-6)
- [Dealing with cross-cutting concerns](/blog/explicit-design-7)
- [Extending functionality with a new feature](/blog/explicit-design-8)
- [Decoupling features of the application](/blog/explicit-design-9)
