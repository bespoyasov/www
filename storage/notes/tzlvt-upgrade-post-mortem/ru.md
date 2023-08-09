---
title: Чёрный экран смерти в Тяжеловато, отчёт об инциденте
description: 25 ноября в 9:10 по Московскому времени вышло обновление приложения Тяжеловато для iOS под версией 1.2. Релиз привёл к поломке, из-за которой пользователи в течение суток не могли пользоваться приложением. Приложение открывалось на телефонах, но показывало чёрный экран и не реагировало на жесты и перезагрузку. 26 ноября в 9:05 было подготовлено обновление с частичным исправлением проблемы. В 19:47 оно стало доступно пользователям.
datetime: 2019-11-29T21:00
cover: shame.webp
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

# Чёрный экран смерти в Тяжеловато, отчёт об инциденте

25 ноября в 9:10 по Московскому времени вышло обновление приложения [Тяжеловато](https://apps.apple.com/ru/app/tzlvt/id1093713971) для _iOS_ под версией 1.2.

Релиз привёл к поломке, из-за которой пользователи в течение полутора суток не могли пользоваться приложением. Приложение открывалось на телефонах, но показывало чёрный экран и не реагировало на жесты и перезагрузку.

Устранить проблему полностью у нас не получилось.

26 ноября в 9:05 было подготовлено обновление с частичным исправлением.<br />В 19:42 оно стало доступно пользователям в магазине.

## Предпосылки

Мы используем веб-приложение в качестве ядра и нативные оболочки, как контейнеры для дистрибьюции через магазины. Оболочки мы стали использовать не сразу. Какое-то время после запуска мы работали исключительно в вебе.

Для сохранения веб-версии офлайн на телефоны пользователей мы использовали [`AppCache`](https://developer.mozilla.org/en-US/docs/Web/API/Window/applicationCache). Когда появились оболочки, кодовая база у веб-версии и версий для магазинов осталась одна. В одной из первых версий мы допустили ошибку — `AppCache`-манифест попал в сборку для магазинов по недосмотру.

Мы удалили `AppCache`-манифест и ссылки на него в патч-обновлении, следовавшем сразу после первой версии.

Недавнее обновление веб-версии и перевод её с `AppCache` на `ServiceWorker` прошли гладко. В обновлении для _Android_ «чёрных экранов смерти» также не появлялось. Тестовая сборка приложения в `TestFlight` и переход на ней между версиями также не показывали подобных проблем.

Из всего этого мы сделали предположение, что обновление для _iOS_ должно было пройти гладко.

## Хронология и анализ

**25 ноября в 9:10** по Московскому времени мы запаблишили обновление в _AppStore_. Обновление должно было использовать старую кодовую базу, а после нажатия кнопки «Сохранить бюджет» — обновить ядро приложения и перейти на новую.

**В 9:14** появилась первая жалоба в поддержку на сломанную функциональность: приложение запускалось, но экран был пустым, приложение не реагировало на пользовательский ввод, перезагрузка не помогала. Помогала только переустановка. В течение следующих двух часов появились первые отзывы в _AppStore_, указывающие на ту же проблему.

**В 9:33** мы сделали первое предположение о причине проблемы. Гипотеза заключалась в особенностях работы закэшированных ресурсов, и том, что после обновления мы отказались от использования `AppCache`, но неправильно очистили кэши после первого обновления.

**В 10:06** после разговора с пользователем, который непосредственно пострадал от последствий, гипотеза подтвердилась. Мы начали думать над тем, как исправить ситуацию. Почистить кэши принудительно мы могли только с помощью нативной оболочки.

**В 18:39** была подготовлена первая версия с исправлением проблемы. Чтобы удостовериться, что фикс поможет, мы полностью воссоздали релизное окружение предыдущей версии и кэши всех ресурсов.

**К 20:21** исправление было протестировано на разных версиях iOS и под разными устройствами. Проблема, казалось, была решена и подготовили обновление к релизу в _AppStore_.

**26 ноября в 0:37** после более тщательной проверки выяснилось, что обновление всё-таки проблему не решает. Принудительное очищение кэшей в оболочке срабатывало не стабильно.

Даные пользователей всё ещё были в сохранности на устройствах, отображались в виджете, но использовать их программно не представлялось возможным.

**В 8:43** мы решили больше не рисковать и помочь пользователям обновить приложение вручную.

Нам было известно, что переустановка проблему решала. Однако она же сбрасывала данные и настройки приложения. Мы подготовили обновление, в котором попросили пользователей воспользоваться виджетом и перенести настройки бюджета после переустановки приложения в новую версию.

![Экран позора — инструкция «Что делать дальше»](./shame.webp)

**В 9:05** обновление было готово к релизу.

**В 11:17** исправление было отправлено в магазин.

**В 18:02** приложение прошло ревью магазина.

**В 19:47** исправление стало доступно пользователям.

**В 19:51** появилось первое сообщение от пользователей, что чёрный экран смерти пропал.

## Текущий статус

Свежая версия работает в штатном режиме.

Обновление для пользователей, которые не успели обновиться, проходит с помощью экрана с инструкцией.

## Выводы и работа над ошибками

Автоматического тестирования оказалось недостаточно, а ручное должно было быть более тщательным. Наша ошибка была в том, что тестируемая сборка отличалась от той, которая была на телефонах пользователей. Тестировать следовало окружение, максимально приближенное к релизному.

Мы изменили подход к проверке функциональности перед публикацией и к самой публикации релизов в магазины. К команде присоединился пользователь, который готов помогать с ручным тестированием приложения перед релизом.

Мы определили критические сценарии описали их в документации для тестирования, которую будем использовать как чеклист как для интеграционного автоматизированного, так и для ручного тестирования. Каждый новый сценарий будет дополнять документацию и расширять чеклист проверки.

Также ошибкой было считать, что обновление не содержало _“breaking changes”_. По принципу «Сделать всё за пользователя» переход между версиями технической базы я решил сделать плавным и незаметным.

Возможно, стоило выпустить обновлённую версию отдельным приложением, или хотя бы сразу предусмотреть самый пессимистичный вариант и подготовить инструкцию с ручным обновлением заранее, чтобы даунтайм не был настолько большим.