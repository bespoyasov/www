---
title: Конспект со встречи «Фронтенд-фелоус»
description: Конспект со встречи «Фронтенд-фелоус» в Уфе.
datetime: 2016-11-20T18:05
tags:
  - automatization
  - components
  - css
  - html
  - javascript
  - patterns
  - process
  - react
  - tools
---

# Конспект со встречи «Фронтенд-фелоус»

12 ноября прошла в Уфе прошла встреча «Фронтенд-фелоус». Я законспектировал и подытожил доклады, без примеров и кода.

## «Гриды — панацея или нет?» Олег Мохов

Минусы флексбокса:

- вертикально-расположенные флекс-элементы не связаны;
- порядок элементов требует договоренностей.

Но гриды — не универсальное решение, и не везде они нужны. Это инструмент, который следует использовать:

- когда есть именно сетка (а не только колонки), и строки в ней взаимосвязаны;
- когда сетка может меняться под действием контента;
- когда в сетке есть блоки шириной в несколько ячеек;
- в админках и там, где не важна кроссбраузерность.

Гриды не работают нигде. Всё скрыто за флагами в браузерах.

Адаптивная вёрстка на гридах — плохая идея, трудно уследить за всеми состояниями. Для адаптива лучше подойдёт флексбокс.

## «Компоненты высшего порядка» Александр Айбулатов

Функция высшего порядка возвращает функцию как результат. Компоненты высшего порядка работают по тем же принципам: принимают компонент как аргумент, возвращают компонент с более широкой функциональностью.

Компоненты высшего порядка помогают:

- хранить схожее поведение разных компонентов;
- соединять состояние приложения с компонентами;
- преобразовывать свойства компонентов.

Библиотека [Рекомпоз](https://github.com/acdlite/recompose) автоматизирует рутину, прячет сложную дичь внутрь себя, позволяя сосредоточиться на архитектуре.

При использовании компонентов высшего порядка бизнес-логику и общее поведение разных компонентов — выносим в них. Остальные компоненты оставляем глупыми и без состояний.

## «Короче\_» Сергей Жигалов

Мы чаще читаем код, чем пишем. Поэтому он должен быть понятным и несложным. Чем меньше сложность, тем меньше ошибок в коде. Лодаш помогает сделать код проще.

Взять чужой код в свой проект — сделать его своим кодом. Его придётся читать, чинить — с ним придётся жить. За чужой код никто не отвечает, а за Лодаш отвечают разработчики. Эта библиотека протестирована и проверена.

[Лодаш](https://lodash.com/) помогает писать код короче, в функциональном стиле. Позволяет избавиться от костылей и хелперов, методы в ней называются по-человечески. Когда читаешь, понятно, что происходит.

В джаваскрипте много тонкостей с типами данных. Чтобы проверить свойство объекта внутри другого объекта, надо сделать кучу проверок. С Лодашем можно не задумываться об этом, библиотека прикроет.

Минус — разработчики библиотеки любят ломать обратную совместимость. Могут выпилить пару методов, изменить поведение. Обновлять мажорные версии в продуктовом проекте больно.

После доклада попробовал использовать Лодаш вместо своих решений. Понравилось — экономит время, упрощает код. Круть, короче\_

## Ссылки и почитать

- [Спецификация флексбокса](https://www.w3.org/TR/css-flexbox-1/), [спецификация гридов](https://www.w3.org/TR/2016/CR-css-grid-1-20160929/);
- Доклады Вадима Макеева [о гридах](https://www.youtube.com/watch?v=5yCuzHklYZ4) и [о флексбоксе](https://pepelsbey.net/2013/05/flexbox-gotcha/);
- [Рекомпоз](https://github.com/acdlite/recompose);
- [Лодаш](https://lodash.com/docs/);
- [Чистый код. Создание, анализ и рефакторинг. Роберт Мартин](/blog/clean-code).