---
title: Tzlvt. “Black Screen of Death” Post-Mortem
description: On November 25 at 9:10 AM Moscow time, an update was released to the Tzlvt app for iOS under version 1.2. The release caused a bug that left users unable to use the app for 24 hours. The app opened on the phones, but showed a black screen and didn't respond to gestures or rebooting. On November 26 at 9:05 an update was prepared with a partial fix for the problem. At 19:47 it became available to users.
datetime: 2019-11-29T21:00
tags:
  - antipatterns
  - bugs
  - checklist
  - design
  - documentation
  - error
  - failure
  - mobile
  - process
  - product
  - tzlvt
---

# Tzlvt. “Black Screen of Death” Post-Mortem

On November 25 at 9:10 Moscow time, we released an update to the [Tzlvt](https://apps.apple.com/ru/app/tzlvt/id1093713971) app for _iOS_ under version 1.2.

The release resulted in a failure that left users unable to use the app for a day and a half. The app opened on the phones, but showed a black screen and did not respond to gestures or rebooting.

We were unable to fix the problem completely.

On November 26 at 9:05 an update was prepared with a partial fix.<br />At 19:42 it became available to users in the store.

## Prerequisites

We use the web application as the core and native web views as containers for distribution through stores. We haven't been using web views from the start. For a while after the launch we worked exclusively on the web.

We used [`AppCache`](https://developer.mozilla.org/en-US/docs/Web/API/Window/applicationCache) to keep the web version offline on users' phones. That time the Service Workers weren't yet the thing so we had to use another way to cache the resources on the users' phones.

When the web views came out, the code base for the web version and the store versions remained the same. In one of the first versions, we made a mistake—the `AppCache` manifest got into the store version by mistake.

We deleted the `AppCache` manifest and references to it in a patch update immediately after the first version.

The recent update to the web version and moving it from `AppCache` to `ServiceWorker` went smoothly. No “black screens of death” appeared in the update for _Android_ either. A test build of the application in `TestFlight` and switching between versions on it showed no such problems either.

From all of this, we made the assumption that the update for _iOS_ should have gone smoothly.

## Chronology and Analysis

**On November 25, at 9:10** Moscow time, we pushed an update to the _AppStore_. The update was supposed to use the old codebase, and after clicking the “Save Budget” button, it was supposed to update the core of the app and switch to the new one.

**At 9:14** the first support complaint about broken functionality appeared: the app would start but the screen was black, the app didn't respond to user input, and rebooting didn't help. Only reinstalling helped. Over the next two hours, the first reviews appeared in the _AppStore_, pointing to the same problem.

**At 9:33** we made our first hypothesis about the cause of the problem. The hypothesis was the peculiarities of cached resources, and that we had given up using `AppCache` after the update, but had not properly cleared the caches after the first update.

**At 10:06** after talking to a user who was directly affected, the hypothesis was confirmed. We started to think about how to fix the situation. The only way we could clean the caches forcibly was to use the webview.

**At 18:39** the first version with a fix for the problem was prepared. To make sure the fix would help, we fully recreated the release environment of the previous version and all the resource caches.

**At 20:21** the fix was tested on different versions of iOS and under different devices. The problem seemed to have been resolved and prepared the update for release in the _AppStore_.

**On November 26, at 0:37** after a closer inspection, it turned out that the update does not solve the problem after all. Forced cache clearing in the webview didn't work consistently.

The user data were still stored on the devices and were displayed in the widget, but it was not possible to use them programmatically.

**At 8:43** we decided not to take any more chances and helped the users to update the app manually.

We knew that reinstalling it solved the problem. However, it also reset the data and settings of the app. We prepared an update that asked users to use the widget and migrate their budget settings after reinstalling the app to the new version.

**At 9:05** the update was ready for release.

**At 11:17** the fix was sent to the store.

**At 18:02** the app was reviewed by the store.

**At 19:47** the fix became available to users.

**At 19:51** the first message from users appeared that the black screen of death was gone.

## Current Status

The fresh version works as usual.

Updating for users who have not had time to update is done with the instruction screen.

## Conclusions and Error Prevention

The automatic testing was insufficient, and the manual testing should have been more thorough. Our mistake was that the build under test was different from the one on the users' phones. We should have tested an environment that was as close to the release environment as possible.

We changed our approach to testing functionality before release, and to publishing the releases to the stores themselves. A user has joined the team and is willing to help with manual testing of the app before release.

We've identified critical scenarios described in the testing documentation, which we'll use as a checklist for both integration automated and manual testing. Each new scenario will supplement the documentation and expand the checklist for testing.

It was also a mistake to think that the update didn't contain _“breaking changes”_. On the principle of “Doing everything instead of the user”, I decided to make the transition between versions of the technical base smooth and unnoticeable.

Maybe I should have released the updated version as a separate application, or at least I should have foreseen the most pessimistic version right away and prepared instructions with manual update in advance, so that the down-time was not so big.
