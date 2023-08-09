---
title: Отдебажь это! Часть 2
description: Продолжаем читать “Debug it! Find, Repair, and Prevent Bugs in Your Code”.
datetime: 2018-07-02T16:00
tags:
  - antipatterns
  - books
  - bugs
  - checklist
  - error
  - patterns
  - testing
---

# Отдебажь это! Часть 2

В прошлый раз мы охватили [первую часть книги](/blog/debug-it/). Сегодня поговорим об определении проблем, приёмах дебагинга, которые можно использовать, и антипаттернах.

## Глава 6. Определяем, что у нас проблемы

Иногда мы не знаем, что в программе есть баг, и нам надо его отследить. Для этого используют баг-трекеры.

- Они дают пользователям стандартную форму для баг-репорта, что повышает вероятность успешной отладки;
- следят за тем, какие баги уже починили;
- напоминают разработчикам о багах;
- помогают приоритизировать баги;
- хранят причины, по которым мы могли отказаться исправлять какой-то баг.

Хороший баг-репорт детализированный и однозначный, но при этом не слишком большой. На один баг должен быть один баг-репорт. Хорошая система отслеживания ошибок автоматически собирает информацию об окружении и настройках.

Пользователи не будут писать вам о багах, если составить баг-репорт им слишком сложно. Упрощайте процесс:

- сделайте кнопку для отправки баг-репорта заметной;
- автоматизируйте сбор любой информаций, которую можете собрать сами;
- не просите пользователя делать много;
- в шаблонной форме добавьте поле для описания ошибки в свободной форме, потому что стадартных полей может быть недостаточно;
- не забывайте о защите персональных данных, аккуратнее с передачей кому угодно какой угодно информации.

Общайтесь с пользователями на их языке и в их мире. В самых крайних случаях свяжитесь напрямую с пользователем. Отвечайте на баг-репорты после исправления ошибок, обратная связь от разработчиков приятна пользователям.

Попробуйте поработать в команде поддержки. Это поможет понять реальное состояние продукта и даст возможность вникнуть в проблему без игры в глухой телефон с поддержкой.

## Глава 7. Прагматичная нетерпимость к багам

Баги надо чинить в первую очередь, это уменьшает неопределённость и технический долг. Чем больше багов будет копиться, тем более пофиг на них будет — такого допускать нельзя.

Между «ой да плевать, пусть идёт как идёт» и «в проекте всё будет идеально вылизано» следует выбирать нечто посередине, чуть ближе к правому краю:

![Прагматичная нетерпимость находится почти по середине, чуть ближе к перфекционизму](./zero-tolerance.webp)

Быстрых фиксов не существует — разбираться в проблеме придётся каждый раз. Чтобы было проще:

- настройте систему версий, сборку проекта, автотесты, CI, CD;
- отделите хороший код: чистый, оттестированный, отдебаженный — от плохого;
- выделите важные части системы, найдите и исправьте ошибки в ней;
- найдите и исправьте ошибки в остальных частях системы;
- проводите недели чисток, когда все занимаются только поиском ошибок и дебагингом.

## Глава 8. Особые случаи

**При патче** релиза сосредотачивайтесь на корне проблемы. Когда вы патчите уже релизнутый продукт, вам хочется сделать это быстро, но _всегда_ концентрируйтесь на проблеме. Также не забудьте поправить этот баг в версии, которая сейчас в разработке.

Иногда багфиксы ломают **обратную совместимость**. Добавьте пункты для проверки совместимости в фикс-чеклист. Если багфикс ломает совместимость, создайте как можно менее болезненный путь перехода на новую версию. Полагайтесь на создание режима совместимости, как на крайнее средство — этот способ очень дорогой и может наплодить ещё больше багов (привет, Ворд!).

Если вы только готовитесь сломать совместимость, предупредите пользователей: опишите, что будет изменено, расскажите, как подготовиться к переходу. В крайних случаях не правьте ошибку вовсе. Например, если правильная работа остальной части программы напрямую зависит от этой ошибки.

**Гейзенбаги (или хайзенбаги)** — это баги, которые пропадают, когда вы пробуете их обнаружить. Лучший метод борьбы с ними — создавать как можно меньше сайд-эффектов в программе с самого начала. Если вам уже не повезло, настройте логер, очистите разум и запаситесь терпением — придётся много думать.

Чтобы побороть **низкую производительность**, найдите место, где она падает. Настройте профайлер и используйте его во время работы. Убедитесь, что:

- вы профилируете версию продукта, максимально приближенную к продакшену;
- окружение максимально похоже на боевое;
- программа работает с реальными данными либо почти такими же.

Иногда баги появляются в **стороннем коде**, не торопитесь винить его — вначале тщательно проверьте свой, скорее всего ошибка там. Если вы всё же нашли ошибку не у себя, сообщите автору и подумайте, как её можно обойти до тех пор, пока её не починят. Несколько раз подумайте перед тем, как использовать форкнутую версию чужого кода у себя.

## Глава 9. Идеальное окружение для отладки

У вас должны быть автотесты. Критерии хороших тестов:

- _Вы должны доверять своим тестам_. Если они падают — на то должна быть причина. Если тест иногда падает, иногда нет, доверять ему не будут.
- _Тест не должен требовать ручной настройки окружения_. Ему оно либо не нужно, либо окружение настраивается автоматически.
- _Тест не должен зависеть от других тестов_. Он полностью независим оттого, сколько и какие тесты в наборе, а также от хода и результатов выполнения других тестов.
- _Тесты должны покрывать как минимум всю важную часть логики и компонентов программы_. Покрытие кода полностью не всегда достижимо и рентабельно для бизнеса, но самая важная часть логики должна быть покрыта вся.

Настройте систему контроля версий.

- она помогает откатываться до текущей версии проекта после исследований;
- может содержать ветки только для дебагинга и чистки кода;
- автоматизирует сборку и деплой;
- помогает создавать чейнджлоги и описывать релизы.

## Глава 10. Учим программу дебажить себя

Настройте ассёрты внутри кода (например, при валидации значений), чтобы обнаружить случаи, которые не покрыты тестами. Они должны легко выключаться. Но помните, что ассёрты — это не механизм обработки ошибок, обрабатывать исключения всё равно нужно.

## Глава 11. Антипаттерны

- _Суперзвезды в командах_. Такие разработчики работают быстро, но часто грязно, и результат становится неподдерживаемым.
- _Отдельная команда поддержки_. Дебагинг кода сложнее, чем написание, поэтому в команде поддержки должны работать более сильные программисты, это неэффективно. А ещё команда поддержки хуже знает кодовую базу.
- _Переписать с нуля_. Считайте затраты и возможный эффект от решения, чаще всего переписывать с нуля дорого.
- _Код без хозяина_. Чтобы команде было не пофиг на код, они должны чувствовать свою ответственность за него и причастность к написанному.
- _Магия в программе_. Всё, что непонятно — потенциально ошибка.

## Ссылки по теме

- [Часть 1](/blog/debug-it/)
- [Debug it!](https://www.amazon.com/Debug-Repair-Prevent-Pragmatic-Programmers/dp/193435628X)