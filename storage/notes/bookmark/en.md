---
title: Bookmark. Navigation Plugin
description: Bookmark—page navigation that  doesn't take up space.
datetime: 2015-02-19T16:14:40
tags:
  - css
  - design
  - html
  - javascript
  - product
  - productivity
  - tools
---

# Bookmark. Navigation Plugin

[Bookmark](https://bookmark.bespoyasov.ru)—page navigation that doesn't take up space.

Long pages with lots of sections are hard to navigate. Bookmark creates links to each section and adds them to the page navigation. It gets along with any design.

The links in the navigation show the order and length of the sections, and the scrollbar shows where the user is. So by default, the active link is not distinguished from the rest. If you want to further emphasize the active section, rewrite the style for the link with the `active` class.

Bookmark will automatically name section links if it doesn't find a name in the name attribute. To be able to reference a section, it will add the transliterated name or `data-hash` of the link to the address bar. You can disable string changes with the `data-hashChange` attribute.

The menu animation is not annoying when scrolling both short and long distances.

## Installation

Add scripts and styles to the `<head>` section of the page:

```html
<head>
	<link href="path/to/bookmark.min.css" rel="stylesheet" />
	<script src="path/to/jquery.js"></script>
	<script src="path/to/bookmark.min.js"></script>
</head>
```

Add the `bookmarks` class to the block with sections:

```html
<div class="bookmarks">
	<div class="bookmark" name="First Section" data-hash="first"></div>
	<div class="bookmark" name="Second Section" data-hash="second"></div>
</div>
```

Or mark bookmark locations with the `bookmark` class and run the script as a standard jQuery plugin:

```html
<div class="foo">
	<h1 class="bookmark" name="First Section" data-hash="first">Heading</h1>
</div>

<script type="text/javascript">
	$(function () {
		$('.foo').bookmark();
	});
</script>
```

## Configuration

Parameters are specified in the `data` attributes of the tabbed block. When initializing manually, pass the object with parameters as an argument to the constructor function.

- `autoHide` (`boolean`), defaults to `true`, to automatically hide the menu;
- `autoHideTime` (`number`), defaults to 800 ms, the time after which the menu will hide;
- `fadeTime` (`number`), default 400 ms, the rate of disappearance;
- `scrollingTime` (`number`), default 500 ms, the duration of scrolling after clicking a link;
- `bookmarkClassName` (`string`), defaults to `bookmark`, the bookmark anchor class;
- `touchDevices` (`boolean`), default `false`, display on touch devices. `autoHide` does not work;
- `onScrollStart` (`function`) is called before scrolling to a section;
- `onScrollEnd` (`function`) is called after scrolling to a section.

The `onScrollStart` and `onScrollEnd` parameters can be set only via manual initialization with the constructor function.

## Full Example

An example with all possible properties configured:

```html
<head>
	<link href="path/to/bookmark.min.css" rel="stylesheet" />
	<script src="path/to/jquery.js"></script>
	<script src="path/to/bookmark.min.js"></script>
</head>

<body>
	<div class="foo" data-touchDevices="false" data-hashChange="false">
		<h1 class="bookmark" name="First Section" data-hash="first">Heading</h1>
	</div>

	<script type="text/javascript">
		$(function () {
			$('.foo').bookmark({
				autoHide: true,
				autoHideTime: 900,
				fadeTime: 400,
				scrollingTime: 500,
				bookmarkClassName: 'bookmark',

				onScrollStart: function (curIndex, nextIndex) {},
				onScrollEnd: function (curIndex, nextIndex) {}

				// curIndex—number of the current section
				// nextIndex—number of the next section
				// both arguments are optional
			});
		});
	</script>
</body>
```

## [Download](https://bookmark.bespoyasov.ru/)

Send feedback, suggestions, and comments to bespoyasov@me.com!
