---
title: Release of New Request.ru
description: How we developed a web app for ordering escape room tickets at Request.ru in 3 weeks.
datetime: 2016-11-30T17:00
tags:
  - architecture
  - components
  - deadlines
  - documentation
  - game
  - javascript
  - management
  - mentoring
  - mobile
  - node
  - process
  - product
  - react
  - request
  - research
---

# Release of New Request.ru

The new [Request.ru website](https://request.ru) is a big Redux application. I designed its architecture, set up server-side rendering, built a set of UI elements, and compiled the layout and pages. In this post I'll show you what we made.

## Escape Room Catalogue and Bookings

On the catalog page, we show cards with games. In each card, we describe how difficult the escape room is, how many people can play the game, its price, and near which metro station it is located.

![Catalogue of escape rooms](./catalog-1.webp)

The card itself leads to a separate page of the game, but you can book the game right here through the “Book” button. The button opens a popup where we offer the nearest free time:

![Game card and booking popup](./catalog-2.webp).

Time and date can be changed. In the list, we show only available time slots as well as the price for a certain time:

![List of available dates](./catalog-3.webp)

## Time Table and Schedule

On the schedule page we have made filters by room sets, time, and price. You can select the date in the calendar below the filters. The game descriptions occupy the rows below. Games are collected by price into groups, price is in the basement of the group.

![Schedule of games as a table](./time-table-1.webp)

Multiple filters and time slots help to choose the escape room more precisely. The “Reset” button erases all filter settings.

![Filters and settings](./time-table-2.webp)

The time table is mouse draggable and scrolls horizontally. On mobile devices, it can be dragged with a swipe.

![Time slots can be dragged horizontally](./time-table-3.webp)

When you tap on a free time, a booking popup opens. The arrow in it points at which game the user is booking. And the date and time are focused on that game.

![Reservation from schedule](./time-table-4.webp)

## Mobile Design

For phones and narrow screens, we simplify the layout a bit. For example, we expand the booking popup to the full screen and display it in the center:

![The booking popup on the phone takes up all the space almost available](./mobile-1.webp)

Also we make quest filters large to make it easier to tap with a finger, and add a swiping functionality to the calendar:

![Filters on phone become bigger](./mobile-2.webp)

The time tables on the quest page is grouped by day, and the “Book” button sticks to the bottom of the screen. When you tap on a particular day, the time table unfolds:

![Grouping in time table on the phone](./mobile-3.webp)

## Conclusions

The project turned out to be extensive, I learned a lot during my time with it—not only in terms of hard skills, but also in managing and mentoring other developers.

I wrote more about my experience in [separate post](/blog/about-new-request-site) 🙃
