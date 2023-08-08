---
title: Прокрутчик
description: Лучшая крутилка контента.
datetime: 2014-01-08T19:00
tags:
  - components
  - design
  - javascript
  - product
  - prokrutchik
---

# Прокрутчик

[Прокрутчик](https://scroller.bespoyasov.ru) — это как [Скроллье](https://github.com/artpolikarpov/scrollyeah), только с якорями, скроллбаром и субъективно более приятной инерцией. Я экспериментировал с разными «донастройками», но в итоге написал свою крутилку с нуля.

Из эксперимента получился этот плагин. Он пока в бете, поэтому могут быть баги — будьте аккуратнее! 🙃

## Установка

Чтобы установить Прокрутчик, добавьте скрипты и стили в `head` страницы. Прокрутчику для работы нужен jQuery и [jTweener](https://code.google.com/archive/p/jtweener/), не забудьте добавить их тоже:

```html
<head>
	<script src="./jquery.min.js"></script>
	<script src="./jtweener.min.js"></script>

	<script src="./prokrutchik.min.js"></script>
	<link href="./prokrutchik.css" rel="stylesheet" />
</head>
```

## Настройка

Прокрутчик поддерживает несколько настроек:

- `data-noAnchors`, отключает якоря;
- `data-noScrollbar`, отключает скроллбар;
- `data-start`, начальное положение (`left`, `right`, `center`);
- `data-startAnimation`, длительность стартовой анимации прокрутки;
- `data-central`, делает выделенный элемент центральным при загрузке страницы;

## Использование

Чтобы превратить элемент в крутилку, задайте класс `ab_scroller`. При загрузке Прокрутчик найдёт все элементы с этим классом и превратит их в крутилки автоматически.
