---
title: Trying React Native Again
description: Continuing the tradition of trying out new technologies on Kursovik.
datetime: 2020-12-30T16:00
tags:
  - habit
  - javascript
  - kursovik
  - mobile
  - native
  - react
  - research
---

# Trying React Native Again

Continuing the tradition of trying out new technologies on [Kursovik](/blog/kursovik) 😅

Last time I was playing around with new technologies, I used Electron to write the app. This time I decided to see how the React Native ecosystem is doing again. I tried using on it once before, and I thought the DX was pretty raw. This time it turned out to be different.

## First, Application

I wrote the application in React Native using Expo. If you're interested, you can look at the [results](https://expo.io/@bespoyasov/projects/Kursovik). (You'll need the [Expo client](https://expo.io/tools) to see the app on your phone.)

The Central Bank sometimes doesn't give exchange rates for the next day, so the value for tomorrow may not be on the screen sometimes, sorry ¯\\\_(ツ)\_/¯

If anyone is interested in looking at the source code, I've uploaded it [on GitHub](https://github.com/bespoyasov/kursovik-rn-expo).

## So, How's React Native

Since the last time, React Native has gotten better and more pleasant to use. For example, the documentation is now more thoughtful and complete. But there are some things that I'd like to emphasize separately.

### Non-Obvious Things

- Gradients must be made with the help of a special component, they cannot be made with styles.
- There are some dances with Android Studio setup, but in general it is tolerable.
- Expo has some limitations on native APIs.
- Positioning text on the web is much easier 😃

### Cool Things

- There are templates for starting a project in TypeScript.
- Hot Reload is magic, all changes are displayed instantly even on a real device.
- Redux/MobX/whatever works seamlessly, I have a Redux-toolkit under the hood right now.
- Expo has a very user friendly publish process and in general the whole DX.

If anyone is interested in trying React Native as well, I can recommend [this video](https://youtu.be/0-S5a0eXPoc). It's a free start to a paid course, but it was enough for me to get into it.

## Links and Resources

- [Original Kursovik app](/blog/kursovik)
- [Kursovik on Expo](https://expo.io/@bespoyasov/projects/Kursovik)
- [Source code on GitHub](https://github.com/bespoyasov/kursovik-rn-expo)
- [React Native Tutorial for Beginners](https://youtu.be/0-S5a0eXPoc)
- [Expo Tools and Services](https://expo.io/tools)
