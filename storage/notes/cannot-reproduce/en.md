---
title: How to Describe Bugs
description: How to describe bugs so that the developers don't deny them.
datetime: 2017-06-18T11:15
tags:
  - bugs
  - checklist
  - communication
  - documentation
  - favorite
  - focus
  - opinion
  - productivity
---

# How to Describe Bugs

Developers do not like bugs and want to get rid of them as soon as possible. If they don't understand how to reproduce the problem, you will most likely get the answer “can't reproduce”. No one wants to deal with obscure stuff.

What helps me when describing bugs to other developers is to describe to them:

- what I did;
- what I wanted to achieve;
- what I really got.

It has several advantages.

## Clear What Is the Bug

It's not always obvious what seems obvious.

When you and the developer don't speak the same language, “fix the margin” becomes a quest for the developer. “Should I make it smaller, larger, a multiple of 5, remove it altogether?” The phrase “Increase the indent by 5px” makes more sense.

However, if the problem is complex, you can't describe everything in one line. Writing “What you wanted to get and what you got” immediately shows by example how the program should work and how it shouldn't.

## Clear How to Reproduce

The excuse “it doesn't reproduce” won't work anymore, because you've already written how to reproduce it 🙃

It works especially well if you specify the context: browser, screen size, etc. There's really no way around it.

Recording the environment can be automated. For example, Jira has a [browser extension](https://confluence.atlassian.com/display/CAPTURE/Getting+Capture+for+JIRA+in+your+browser), which records the browser, screen resolution and operating system during the screenshot.

## You will Be Asked Anyway

If something remains unclear, you will be asked about it anyway, and time will be wasted.

I have noticed that when I describe a problem in detail, it takes other developers less time to solve it. This applies not only to developers, but also to support, chat in the bank. If I describe the problem in detail immediately, I do not get requests for clarifications.

Of course, not every situation needs it. “Change the color of the link to blue” is okay, everything is clear here. But if the team has not yet worked together, or the problem is complex, the more detailed the description is, the better.
