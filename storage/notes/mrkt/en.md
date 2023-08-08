---
title: Process of Creating MRKT. Part 1
description: In this post, I discuss the process of developing the frontend of the MRKT trading platform, the difficulties my team encountered, and how we solved them.
datetime: 2019-04-12T12:00
tags:
  - behavior
  - communication
  - deadlines
  - design
  - documentation
  - finance
  - focus
  - gtd
  - mrkt
  - opinion
  - process
  - product
  - productivity
  - research
---

# Process of Creating MRKT. Part 1

For the last year and a half, I've been working on the frontend for the [MRKT trading platform](https://bespoyasov.ru/projects/mrkt/). This project is a place where agricultural businesses can make deals, create auctions and tenders with bids and real-life competitions, order equipment, sell goods and services.

We couldn't afford to iteratively release new features and roll them out as they were ready. We had to completely redesign the whole service and roll out the new version all at once.

In this post I'll explain why it's a hard way, show the mistakes we made, and advise you to avoid this approach if possible.

## Context

Our goal was to rewrite the frontend, update the design, and add new auction bid types.

The project turned out to be complicated. I hadn't encountered this level of complexity before. To cope somehow, I tried to look for recommended approaches, read [books about code organization and architecture](/tags/books/) and tried to apply it all as I went along.

Now let me show you the difficulties I encountered.

## Problem #1: Alone in the Dark

I started out writing the code by myself. To create the service alone means to suffer from a lack of reviews and feedback. Refactoring is difficult, there is no one to ask for advice from the outside of the project—the source code is under NDA.

The strength of teamwork is that everyone is immersed in the context. Everyone in the team is aware of all the compromises and weak solutions them team has made. The solutions themselves do not conserve in one head, and a fresh look at the problem always helps to find a simpler solution.

If you write a service alone, you will miss a lot. And you have to have _very_ strong self-discipline to keep it running.

## Problem #2: Sagging Motivation

If you are writing a large service without continuous releases, you will inevitably encounter a state where the amount of work seems overwhelming, and plans stop convincing you that you can do it. At such times, motivation is severely depleted.

In order not to lose focus and keep going, I split the stages and tasks into smaller stages and tasks. That way, progress was more noticeable, and the impression of being overwhelmed receded for a while.

But sometimes this stopped working, too. Then it helped me to “just sit down and start doing _something_”. Once you start small, you can get involved and keep working. But it is the “sit down and start” that can be difficult.

In short, marathons, especially without constant feedback, are not suitable for everyone. Think carefully before you enter such a marathon.

## Problem #3: Lack of Feedback

If the development is not iterative, it means that for some time the result of the work will be “hidden”. When the project doesn't roll out to real users, the work can seem pointless.

Without feedback from the world, it's hard to convince yourself that there's real value to the work. Without it, it can be hard to be satisfied with the results. And without it—see point 2 &uarr;

## Problem #4: Fear of Launch

Iterative development means making a feature and deploying it when it's ready. If something goes wrong, we find out about it immediately, it's clear what caused the problem and how to fix it.

This is not the case with a private development. You write a large set of features of which anything can fail. The bigger the project and the longer it's been private and “hidden”, the greater the fear of launching it.

It's not just the fear that there are bugs in the code, but for the product as a whole. The design can be rejected, custom templates can break, there will definitely be bugs somewhere that will be hard to trace.

If the code can be covered by tests and the cognitive load can be partially relieved by that, then there is nothing you can do about “anticipating” the reaction of users to a new version. Only run, cross your fingers and wait.

Overcoming fear is difficult. Iteratively deploying is better. Understanding it in my own experience is priceless.

## Problem #5: Featureism

If you're writing a project privately, there's a lot of temptation to add as many features as possible. “Since we're not rolling out in parts, let's do it all.” That's the road to nowhere.

The only solution that helped us was to set [a final release date and not move it](https://bureau.ru/about/fff/). Anything that didn't make it in time was moved to version 2.1.

It's interesting that the more time spent on development, the easier it is to agree to some other feature. After all, “we've spent so much time, it's ok to spend a little more”. But these “little things” can add up to weeks and months. Don't let it take control over your project.

## Problem #6: Size and Complexity

It is impossible to remember everything; there are too many details and nuances.

It is important to fixate decisions, but most importantly, [describe the reasons](/blog/documentation/) why this decision is made in the documentation. Otherwise there is a high probability that later you won't remember why some feature works this way.

[Architecture redesign](/blog/architecture-which-sucks/) and decoupling entities has helped us shed some of that burden, but redesigning architecture is hard, painful, and costly. Control this from the beginning if possible.

## Problem #7: Release

In iterative development, a release is quite common. It's done, it's released, we move on. In private ”closed“ development, a release is a milestone. After the release, as a rule, there is even more work.

If the service has already been used, and the new version was in closed development, the backlog will grow at such a rate that I'd love to come up with some comparison, but I won't even try.

This could be a stress test for both your product, your team, and you.

## Conclusion

It was probably the most difficult project, both in terms of the complexity of the system and in terms of maintaining rhythmic work with self-discipline.

After the release it became more fun: new people in the team, a fresh look at the service and all that. But the year and a half before became a very valuable experience: I learned a lot during this time and experienced a lot.
