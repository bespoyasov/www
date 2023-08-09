---
title: Fullstack React with TypeScript
description: Анонс новой книги о разработке приложений с использованием React и TypeScript.
datetime: 2020-06-06T15:00
tags:
  - books
  - components
  - editing
  - music
  - next
  - process
  - product
  - patterns
  - react
  - testing
  - typescript
---

# Fullstack React with TypeScript

Максим Иванов, Артём Самофалов и я при поддержке издательства Newline выпустили книгу [Fullstack React with TypeScript](https://www.newline.co/fullstack-react-with-typescript). Я в ней написал главы 3 и 5.

## Глава 3. Паттерны

В 3-й главе (“React Patterns”) на примере виртуальной музыкальной клавиатуры рассказал о таких паттернах как _Render-Props_ и _Higher Order Component_.

![Скриншот приложения с виртуальной музыкальной клавиатурой](./app-react-piano.webp)

Перед тем, как начать вместе с читателями писать React-компоненты, я объяснил основы музыкальной теории и показал, как мы будем представлять ноты и их соотношения в TypeScript. Я описал особенности работы с типами и интерфейсами, а также рассказал, как можно отделить бизнес-логику от UI-слоя приложения.

Объяснение сложных концептов, как например _Higher Order Component_, я начинал с простейших случаев — на примерах простых функций и по шагам расписывая потоки данных.

Здесь я специально выбрал музыкальную клавиатуру, чтобы показать решение одной и той же проблемы разными способами с помощью разных паттернов. Так примеры получились более наглядными, а сравнивать способы между собой стало проще.

## Глава 5. SSG и SSR с Next.js

В 5-й главе (“Static Site Generation and Server Side Rendering Using Next.js”) на примере новостного сайта я рассказал, как использовать Next.js для генерации статических сайтов и серверного рендеринга.

![Скриншот «новостного сайта» из 5-й главы](./app-news-site.webp)

Я рассказал о пользе SSR и SSG и показал, как настроить статическую генерацию сайтов на Next с вкраплениями SSR. Объяснил, как использовать _next-redux-wrapper_ для управления состоянием до и во время гидрации. Провёл читателей по шагам от инициализации нового проекта до сборки и деплоя проекта.

Показал разницу между статической генерацией сайтов и серверным рендерингом на каждый запрос. Рассказал, что и при каких обстоятельствах лучше использовать.

Кроме текста с примерами кода, в комплекте с книгой идут исходники каждого из приложений, а также каждого шага создания в отдельности.

## Что ещё

В книге мы также затронули тестирование проектов на React с TypeScript, описали работу с данными и рассказали о стейт-менеджменте. Рассказали о _tsconfig.json_, как рендерить React в консольное приложение, а ещё — как работать с GraphQL и автоматически генерировать типы.

## Для кого

Книга — для тех, кто немного знаком с React, и почти не знаком с TypeScript. Мы рассказываем и объясняем основы типизации и интеграции TS в проекты.

Мы подразумеваем, что читатели знают основы JavaScript, поверхностно знакомы с CSS и знакомы с концепцией жизненного цикла компонентов в React.

Сама книга на английском языке, перевода пока не планировалось.

Если вы хотели попробовать поработать с TypeScript и попробовать его в связке React или просто хотите поддержать авторов, то можете [приобрести книгу](https://www.newline.co/fullstack-react-with-typescript) на сайте издательства.

## Послесловие

Давно уже хотел сесть и написать музыкальную клавиатуру, но как-то руки не доходили. А тут отличный повод подвернулся 🙃

А ещё в детстве я мечтал стать писателем. Даже пробовал несколько раз начинать что-то писать. Не думал, правда, что стану техническим писателем, но это тоже 😁