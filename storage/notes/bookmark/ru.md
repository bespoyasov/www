---
title: Запускаем Букмарк
description: Букмарк — навигация по странице, которая не занимает места.
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

# Запускаем Букмарк

[Букмарк](https://bookmark.bespoyasov.ru/) — навигация по странице, которая не занимает места.

На длинных страницах с кучей этажей сложно ориентироваться. Букмарк создаёт ссылки на каждый этаж и добавляет их в навигацию по странице. Уживается с любым дизайном.

Ссылки в навигации показывают порядок и длину этажей, а скроллбар — где находится пользователь. Поэтому по умолчанию активная ссылка не отличается от остальных. Если хотите дополнительно выделить активный раздел, перепишите стиль для ссылки с классом `active`.

Букмарк автоматически даст названия ссылкам на этажи, если не найдёт название в атрибуте name. Чтобы можно было ссылаться на этаж, в адресную строку он добавит транслитированное название или `data-hash` ссылки. Отключить изменение строки можно атрибутом `data-hashChange`.

Отдельный кайф — как меню появляется и исчезает. Анимация не бесит при скролле как на короткие, так и на длинные расстояния.

## C чего начать?

Добавьте ссылки на скрипт и стили в `<head>` страницы:

```html
<head>
	<link href="path/to/bookmark.min.css" rel="stylesheet" />
	<script src="path/to/jquery.js"></script>
	<script src="path/to/bookmark.min.js"></script>
</head>
```

Добавьте класс `bookmarks` блоку с закладками:

```html
<div class="bookmarks">
	<div class="bookmark" name="Первая закладка" data-hash="first"></div>
	<div class="bookmark" name="Вторая закладка" data-hash="second"></div>
</div>
```

Или отметьте места-закладки классом `bookmark` и запустите скрипт, как стандартный плагин:

```html
<div class="foo">
	<h1 class="bookmark" name="Первая закладка" data-hash="first">Заголовок</h1>
</div>

<script type="text/javascript">
	$(function () {
		$('.foo').bookmark();
	});
</script>
```

## Настройка

Параметры указываются в `data`-атрибутах блока с закладками. При ручной инициализации передайте объект с параметрами, как аргумент функции-конструктора.

- `autoHide` (`boolean`), по умолчанию `true`, автоматически скрывать меню;
- `autoHideTime` (`number`), по умолчанию 800 мс, время, после которого меню скроется;
- `fadeTime` (`number`), по умолчанию 400 мс, скорость исчезновения;
- `scrollingTime` (`number`), по умолчанию 500 мс, длительность прокрутки после клика на ссылку;
- `bookmarkClassName` (`string`), по умолчанию `bookmark`, класс якорей-закладок;
- `touchDevices` (`boolean`), по умолчанию `false`, отображение на тач-устройствах. `autoHide` не работает;
- `onScrollStart` (`function`) вызывается перед прокруткой к разделу;
- `onScrollEnd` (`function`) вызывается после прокрутки к разделу.

Параметры `onScrollStart` и `onScrollEnd` можно настроить только при ручной инициализации.

## А можно полный пример?

Пример с настройкой всех возможных свойств:

```html
<head>
	<link href="path/to/bookmark.min.css" rel="stylesheet" />
	<script src="path/to/jquery.js"></script>
	<script src="path/to/bookmark.min.js"></script>
</head>

<body>
	<div class="foo" data-touchDevices="false" data-hashChange="false">
		<h1 class="bookmark" name="Первая закладка" data-hash="first">Заголовок</h1>
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

				// curIndex — номер текущего раздела
				// nextIndex — номер следующего раздела
				// оба аргумента необязательные
			});
		});
	</script>
</body>
```

## [Скачать](https://bookmark.bespoyasov.ru/)

Предложения и замечания присылайте на bespoyasov@me.com!
