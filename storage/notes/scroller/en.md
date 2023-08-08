---
title: Prokrutchik in Beta!
description: The best content scroller ever.
datetime: 2014-01-08T19:00
tags:
  - components
  - design
  - javascript
  - product
  - prokrutchik
---

# Prokrutchik in Beta!

[Prokrutchik](https://scroller.bespoyasov.ru) is like [ScrollYeah](https://github.com/artpolikarpov/scrollyeah), only with anchors, a scrollbar, and subjectively nicer inertia. I experimented with different “tweaks” for ScrollYeah but ended up writing my own scroller from scratch.

This plugin is the results of that experiment. It's in beta and might have bugs, so be careful! 🙃

## Installation

To install the Prokrutchik, add scripts and styles to the `head` of the page. It needs jQuery and [jTweener](https://code.google.com/archive/p/jtweener/) to work, don't forget to add them too:

```html
<head>
	<script src="./jquery.min.js"></script>
	<script src="./jtweener.min.js"></script>

	<script src="./prokrutchik.min.js"></script>
	<link href="./prokrutchik.css" rel="stylesheet" />
</head>
```

## Customization

Prokrutchik supports several settings:

- `data-noAnchors`, disables the anchors;
- `data-noScrollbar`, disables the scrollbar;
- `data-start`, sets up start position (`left`, `right`, `center`);
- `data-startAnimation`, the duration of the start animation;
- `data-central`, makes the selected element central when the page loads;

## How to Use

To turn an element into Prokrutchik, use the `ab_scroller` class. On load, Prokrutchik will find all elements with this class and turn them into scrollers automatically.
