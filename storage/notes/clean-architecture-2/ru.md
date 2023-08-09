---
title: Чистая архитектура. Часть 2
description: Конспект-перевод книги «Чистая архитектура» Роберта Мартина.
datetime: 2018-09-03T13:00
cover: cover.webp
tags:
  - abstraction
  - architecture
  - books
  - cohesion
  - components
  - coupling
  - dependencies
---

# Чистая архитектура. Часть 2

[В первой части](/blog/clean-architecture/) мы рассмотрели понятие архитектуры, парадигмы программирования и принципы SOLID. Сегодня поговорим о связанности и сочетаемости компонентов систем, а также обсудим подробнее цели хорошей архитектуры.

## Глава 12. Компоненты

Коротко:

- Компонент — наименьшая сущность, которую можно задеплоить, как часть системы.
- Компоненты, DLL — плагины к бизнес-правилам.

## Глава 13. Связность компонентов

Коротко — чтобы определить, к какому компоненту относится тот или иной класс, следует пользоваться 3 принципами:

- принцип эквивалентности переиспользования и перевыпуска;
- принцип общей причины для изменения;
- принцип совместного переиспользования.

### Принцип эквивалентности переиспользования

Компонент не может включать просто набор классов и модулей, должна быть общая цель для этих классов и модулей. Все классы и модули одного компонента должны выпускаться вместе.

### Принцип общей причины для изменения

В один компонент должны включаться классы, которые меняются по одним причинам и в одно время. Для многих приложений поддерживаемость важнее, чем переиспользование. Если код должен меняться, то будет удобнее, если изменение будет только в одном компоненте, а не размазано по приложению.

### Принцип совместного переиспользования

В компоненте должны содержаться те классы и модули, которые используются вместе. Не заставляйте пользователей зависеть от того, что они не будут использовать.

## Глава 14. Сочетаемость компонентов

Коротко — чтобы определить отношения между компонентами, следует пользоваться 3 принципами:

- принцип ацикличности зависимостей;
- принцип стабильных зависимостей;
- принцип стабильности абстракций.

### Принцип ацикличности зависимостей

Не допускайте зацикленности в графе зависимостей компонента. Если в зависимостях есть цикл, его можно разорвать одним из 2 способов:

- применить принцип инверсии зависимостей;
- создать новый компонент, от которого будут зависеть компоненты, вызывающие цикличность.

### Принцип стабильных зависимостей

Зависимости должны быть направлены в сторону устойчивости. Некоторые компоненты должны быть более изменяемыми, чтобы удовлетворять изменения в бизнес-требованиях. И такие менее стабильные компоненты должны зависеть от более стабильных.

Чтобы узнать, насколько компонент нестабилен, можно посчитать количество входных и выходных зависимостей.

> _Нестабильность = Кол-во выходных / (Кол-во входных + Кол-во выходных)_

### Принцип стабильности абстракций

Компонент должен быть настолько же абстрактным, насколько он стабилен.

> _Абстрактность = Кол-во абстрактных классов и интерфейсов в компоненте / Общее количество классов в компоненте_

По оси Х — нестабильность, по оси Y — абстрактность. Следует придерживаться линии _main sequence_ и избегать зон по углам:

![Зоны исключения, которых следует избегать](./clean-arch-4.webp)

## Глава 15. Что такое архитектура

Коротко:

- Цель хорошей архитектуры — облегчить разработку, деплой и поддержку системы.
- Хорошая архитектура выделяет бизнес-логику и считает её важнейшим элементом системы.
- Хорошая архитектура пытается построить систему так, будто количество непринятых решений относительно деталей — максимально.

Архитектура — это облик системы, которая диктует правила общения компонентов друг с другом. Её цель — облегчить разработку, деплой и поддержку системы. Способ достижения цели — оставлять как можно больше открытых возможностей для изменения на как можно больший срок.

Каждая система может быть разбита на две части: бизнес-логика и детали реализации. Детали говорят, как пользователи, компоненты и т.д. общаются с бизнес-логикой. Хорошая архитектура выделяет бизнес-логику и считает её важнейшим элементом системы, делая её независимой от деталей реализации.

Бизнес-логике не важно, какую мы используем базу данных, будем ли мы доставлять данные через веб или иначе, она не зависит от устройства, на котором будет работать система и т.д.

Это позволяет абстрагироваться от деталей реализации и отсрочивать решения относительно них. Хорошая архитектура пытается построить систему так, будто количество непринятых решений относительно деталей — максимально.

## Глава 16. Независимость

Коротко — архитектура должна поддерживать:

- юзкейсы;
- поддерживаемость;
- разработку;
- лёгкий деплой системы.

Мы не знаем заранее всех юзкейсов, организацию команды разработки, требования к деплою и т.д. А даже если бы и знали, то они всё равно бы менялись во время жизни системы. Хорошая архитектура позволяет вносить изменения дешевле.

Следует делить систему на слои. Например:

- независимые бизнес-правила;
- бизнес-правила под конкретно это приложение;
- пользовательский интерфейс;
- база данных и др.

Если система спроектирована верно, то каждый слой может меняться и деплоиться независимо от других.

При обнаружении дублирования определите, настоящее это дублирование или случайное. Если «дубликаты» развивались абсолютно разными путями, то скорее всего это случайное дублирование.

Разделять систему можно по-разному:

- на уровне исходников;
- уровне развёртывания;
- и сервисном уровне.

Какой способ подходит, зависит от самого проекта, стадии, на которой он находится и других параметров.

## Глава 17. Границы

Коротко:

- знание одного компонента системы о других должно быть ограничено;
- границы должны отделять сущности, которые имеют значение (для бизнес-логики) от тех, которые не имеют значения;
- основа — бизнес-логика.

Следует избегать преждевременных решений. Решение преждевременное — если оно не относится к бизнес-требованиям. Выбор базы данных, фреймворка, даже языка программирования — решения преждевременные.

Границы должны отделять сущности, которые имеют значение (для бизнес-логики) от тех, которые не имеют значения. Например, бизнес-логика не должна зависеть ни от схемы БД, ни от языка запросов.

В хорошей архитектуре бизнес-логика — это основа, а всё остальное: устройства ввода-вывода, БД и т.д. — плагины к ней:

![БД и интерфейс — плагины к бизнес-логике](./clean-arch-5.webp)

## Что дальше?

[В третьей части](/blog/clean-architecture-3/) подробнее обсудим бизнес-правила, уровни архитектуры, немного поговорим о шаблонах и тестах.