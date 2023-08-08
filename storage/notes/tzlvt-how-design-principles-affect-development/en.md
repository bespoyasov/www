---
title: Tzlvt. How Design Principles Affect Development
description: A week ago, I started helping with the development of a finance management app. This is my third app on React, and I'll be sharing my experiences, ideas, and process with you. The first post is about design principles.
datetime: 2016-02-10T12:50
tags:
  - architecture
  - communication
  - components
  - deadlines
  - design
  - game
  - habit
  - mobile
  - opinion
  - process
  - product
  - react
  - research
  - tzlvt
---

# Tzlvt. How Design Principles Affect Development

A week ago I started helping [Konstantin](https://yumadilov.com/) with the development of a finance management application. This is my third app built with React, I'll be sharing my experience, ideas and process with you. The first post is about design principles.

We're launching the first version on the web. The web and the first app version is our platform for testing. At first, it seems difficult to build an application on the web that works as a regular app that remembers user input, stores data locally and runs without the Internet. To remove the limitations of the web and simplify the app UX, we formulated some principles for UI and development.

## Flexible Architecture, Tight Feedback Loop

For building a flexible prototype, I chose React with Flux. Such combination helps to forget about routine DOM updates and concentrate on basic app functionality.

React is like a Lego constructor. The components are the parts of a “bigger piece”. React assembles the application components itself according to my instructions: “take these parts and combine them in a blue screen for me“.

Flux monitors the changes in the application state and adjusts those instructions. User actions automatically converts into instructions. React notices the changes in the state and updates the screen.

Such a prototype can be evolved. We already have rewritten the UI twice but I didn't have to rewrite the components from scratch—we can reuse them.

## Offline Mode and Unstable Connection Handling

Often in stores, the phone has poor Internet connection. The app is a spending tracker, it will be used in stores, we need to be prepared. I decided to save styles, scripts and pictures in the phone cache. As a result, after the first download the application works without internet. I will tell you about that in the next post.

## User Data is Sacred

We keep all the expense records and store them in the phone local storage. Everything works until the person erases the browser history. This isn't perfect but it'll do for the first version.

We wrote our own backend, but quickly realized that we didn't know how to secure the data on our server. Storing information about other people's money is a big responsibility. So for now we just decided to store the data locally on the user's device.

Right now we are polishing the main functionality of the application. Next week we will show the prototype to everyone.
