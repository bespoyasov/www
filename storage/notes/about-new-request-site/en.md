---
title: Process of Making New Request.ru
description: Post about how we updated the site for the Request company.
datetime: 2016-12-11T18:00
tags:
  - deadlines
  - documentation
  - javascript
  - management
  - mentoring
  - node
  - process
  - product
  - react
  - request
---

# Process of Making New Request.ru

In November, I worked on a [new site for Request](https://request.ru). Request is an escape room company, they create, build, and host escape rooms in Moscow.

In this post, I'll share what I learned during the work and what obstacles I encountered. (Be careful: there's going to be lots of frontend terms.)

## Deadlines

We had only 3 weeks for everything 🙃

On the first week, I designed the app lifecycle, created its main frame and a set of UI components. It helped with dividing pages between team mates and launch the app in time.

## Server Site Rendering

For SEO reasons, we wanted pages with different content to have different URLs. Our project is an single page application (SPA) for we decided to use server side rendering (SSR) to solve this issue.

SSR is a technic when the server gets a request from the user, renders the page corresponding to the current URL and returns it to the user. The browser then “resurrects” the application from that page.

I already worked with [Redux](https://redux.js.org/) by that time but haven't tried SSR yet. In two days I figured out how to work with [Express](https://expressjs.com/) and set up the routing. I made it so the both client and the server work with the same router, so all the routing logic is collected in just one module.

## Documentation

The project is quite big, there is a team of several people working on it. For the work to go smoothly, and for the project to be consistent, I wrote documentation about it.

In the docs, I described architecture:

- how to work with the state and how to use Redux,
- how the server works,
- how to use the router;

...described the component system:

- which properties are supported by the components,
- examples of how to use components;

...described the work with the content:

- the difference between the static and dynamic content of the site,
- how to call the API server to access the dynamic content;

...described how to work with git:

- how to write commit messages,
- what to do before sending a PR,
- what open-source solutions we use and why;

...described how the project building works:

- locally,
- for testing environment,
- for production environment;

...mentioned all the obstacles we had during the development and how to avoid them.

## Open-Source Solutions

I decided what open-source components we were going to use. I looked though the components' documentation and source code to compare their public API and the code quality.

This was important because third-party code's problems were going to become our problems the same moment we would start using them.

For example, I made a mistake with a custom selector component. I took existing one but during the development I learned that it lacked some properties and it was difficult to extend its functionality. So I had to create my own selector to solve this.

## Separation and Delegation of Tasks

I was trusted to separate tasks between team members. In order to do it properly, I figured out who can handle what tasks and do it faster. I learned how to adjust a development plan and understood what an [MVP](https://en.wikipedia.org/wiki/Minimum_viable_product) is.

I also learned how to read other people's code for providing quick code reviews. It turned out to be a bit harder than I initially thought 🙃

## Staging and Production Settings

I've set up project builds for staging and production server. Figured out how to work with environment variables and Node processes on different platforms.

I made it so that in the production build we have only the minified required code without subdependencies. We also send logs and errors to our own analytics server. So if there's an error in production we get an email from our mailing server.

## Conclusion

A large amount of work, unfamiliar technology, tests, code reviews, and a tight deadline added a challenge to the project. It has been one of the most intense projects for me so far. And it's cool that we were able to work out all the issues and launch the project on time.
