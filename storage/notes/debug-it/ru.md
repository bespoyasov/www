---
title: Отдебажь это! Пол Батчер
description: Это книга о том, как искать ошибки в программах и исправлять их. В оригинале название книги — “Debug it! Find, Repair, and Prevent Bugs in Your Code”. Сорри за кустарный перевод русский язык, официального перевода я не нашёл.
datetime: 2018-06-26T14:00
tags:
  - books
  - bugs
  - checklist
  - error
  - patterns
  - testing
---

# Отдебажь это! Пол Батчер

Это книга о том, как искать ошибки в программах и исправлять их. В [оригинале](https://www.amazon.com/Debug-Repair-Prevent-Pragmatic-Programmers/dp/193435628X) название книги — “Debug it! Find, Repair, and Prevent Bugs in Your Code”. Сорри за кустарный перевод на русский язык, официального перевода я не нашёл ¯\\\_(ツ)\_/¯

Конспект я разделил на две части. Сегодня — разбираем процесс дебагинга по шагам.

## Глава 1. Посреди безумия

Отдебажить — это больше, чем «сделать так, чтобы баг исчез». Составляющие эффективного дебагинга:

- понять, почему программа ведёт себя не так, как ожидается;
- исправить ошибку;
- не поломать ничего по дороге;
- не испортить качество кода: читаемость, архитектуру, покрытие тестами и др.;
- принять меры, чтобы подобная проблема не появлялась в будущем.

Часто разработчики, вместо того, чтобы вначале понять проблему, сразу пишут заплатки. Это плохо, потому что может поломать то, что работало.

Понять проблему помогают наблюдения. В разработке программ относительно просто провести эксперимент и посмотреть, как работает код.

Дебагинг состоит из 4 этапов:

- _воспроизвести_, найти способ точно и удобно воспроизвести проблему;
- _определить причину_, построить гипотезу проблемы и протестировать её на экспериментах;
- _починить проблему_, не ломая поведение других частей программы;
- _подумать, как предупредить_, что сделать, чтобы не допускать подобных проблем в будущем.

Перед тем, как пробовать воспроизвести проблему, надо определиться, как программа должна работать, и что именно происходит не правильно.

Исправляйте ошибки одну за одной, не пытайтесь решить несколько проблем за раз. Ошибки могут быть связаны, если чинить всё разом, можно эти связи упустить.

Начинайте с простого и не стесняйтесь просить помощи или спрашивать, сталкивался ли кто-то с такой проблемой раньше.

## Глава 2. Воспроизвести

Если у вас не получается воспроизвести проблему, вы не сможете её починить:

- дебагинг зависит оттого, как ведёт себя программа. Если не получается заставить её вести себя неправильно, то наблюдать будет не за чем;
- даже если у вас получится составить гипотезу о причинах ошибки, вы не сможете её проверить;
- не получится продемонстрировать, что проблема устранена.

Если есть баг-репорт, повторите шаги оттуда. При этом не забывайте контролировать и сверять:

- версию программы;
- окружение, программное и аппаратное;
- входные данные.

Если в баг-репорте не было входных данных, то у вас два пути: обратиться к логам или предполагать, что могли ввести пользователи. Не забывайте про пограничные значения и порядок ввода. Попробуйте представить, что по середине пути произошла ошибка, которую не сразу заметили. Попробуйте использовать случайные входные данные: полностью случайные либо изменённые по каким-то правилам.

Для логирования стоит выбрать инструмент, который:

- умеет включать и выключать логирование в местах, которые вам требуются;
- позволяет настраивать глубину логирования;
- может дать информацию о модуле, который вызвал ошибку, или даже строке кода;
- автоматически логирует исключения и заданные вами события.

У логирования, встроенного в код, есть минусы:

- усложняет код;
- может устаревать и не успевать обновляться за кодом;
- его всегда не достаточно.

Воспроизведение ошибок должно быть не только точным, но и удобным. Поэтому надо убирать лишние шаги, которые не относятся к проблеме. Чем короче путь до проблемы, тем проще её решать. По возможности автоматизируйте этот путь, чтобы уменьшить время, которое требуется для воспроизведения.

Есть баги, которые иногда появляются, иногда нет. Они возникают из-за:

- старта программы из неопределённых начальных условий;
- взаимодействия с внешними системами;
- работы со случайными значениями;
- многопоточности.

Против таких багов используйте рантайм-анализаторы; определяйте, что именно и в какой момент пришло от внешней системы; используйте псевдослучайные числа. Автоматизируйте процесс автотестами и программным воспроизведением лог-файлов.

Если всё ещё не получается воспроизвести:

- попробуйте поработать над другой проблемой из этой же области (модуля, компонента и т.д.);
- попросите помощи.

## Глава 3. Определить причину

Чтобы определить причину, придётся много думать. Когда вы заметили, что программа ведёт себя не так, как задумано, вам нужно заново понять, как программа работает. Для этого стройте гипотезы о причинах нежелательного поведения:

- определитесь с тем, что вы знаете о проблеме и постройте гипотезу о том, что является причиной;
- проведите эксперимент, который это проверит;
- если эксперимент опроверг гипотезу, постройте новую;
- если подтвердил часть гипотезы, создавайте новые эксперименты, пока результат не будет достаточным, чтобы считать, что гипотеза подтвердилась полностью.

Чтобы понять, как изменения повлияют на результат, экспериментируйте:

- c внутренним состоянием программы;
- входными данными, окружением;
- логикой самой программы.

Каждый эксперимент должен что-то объяснять или доказывать, иначе он бесполезен. Не забывайте, что эксперименты могут не только подтверждать вашу гипотезу, но и опровергать — о втором часто забывают, хотя такие эксперименты бывает проще проводить.

Базовое правило для эксперимента — одно изменение в программе за раз. Множественные изменения могут привести к неправильным выводам. Запоминайте, что вы проверяли. Время от времени возвращайтесь к проделанной работе, чтобы сделать промежуточные выводы.

Не игнорируйте ничего, любое странное или неожиданное поведение может помочь определить проблему. (Пусть даже не эту — вернётесь к ней позже.) Помните: всё, что вы не понимаете — потенциально баг.

Используйте бинарный поиск для определения места, откуда идёт проблема. Очень-очень грубо говоря, если ошибка на 23-й строке в программе из 200 строк, то на первом шаге определяем, в какой она половине: 0–100 или 100–200. Дальше — в какой четверти 0–50 или 50–100. И так далее, пока не доберёмся до 23-й строки.

Анализируйте, правильную ли часть программы или окружения вы изменяете. Если в результате ничего не меняется, то вы меняете не то, что собирались изменить. Всегда критически анализируйте свои предположения.

Попробуйте объяснить проблему кому-то, это приводит мысли в порядок. Если не кому рассказать, попробуйте её записать. Отдохните, если сильно устали. Если совсем ничего не помогает, попробуйте изменить хоть что-то, что угодно. Иногда проблема кроется там, где казалось бы ей быть невозможно.

Всегда проводите изменения и эксперименты в копии проекта, чтобы не внести случайных сайд-эффектов.

## Глава 4. Исправить проблему

Начинайте писать фиксы в чистой копии проекта. Так вы точно не забудете почистить изменения, которые проводили в ходе экспериментов. Перед началом работы проверьте, что имеющиеся тесты проходят — это нужно для уверенности, что фикс не поломал другую функциональность.

Во время работы над проблемой:

- проверьте, что тесты проходят;
- добавьте новый тест (или измените один из имеющихся), который демонстрировал бы проблему;
- исправьте проблему;
- проверьте, что тест из 2-го пункта проходит;
- проверьте, что остальные тесты тоже проходят.

Исправляйте причину, а не следствия ошибки. Чтобы добраться до причины, надо полностью понять проблему. Если во время объяснения вы произносите нечто вроде «по какой-то причине» или «не особо ясно, почему здесь так», то до корня проблемы вы ещё не добрались, и фикс не починит её полностью.

_Никогда не проводите рефакторинг совместно с фиксом ошибки_. Либо вы чините код, либо рефакторите.

Если вы пользуетесь системой контроля версий, то каждое следует комитить каждое логическое изменение, причём одно за раз. Это поможет в будущем разобраться, как вы решали проблему, если сломается что-то другое.

Чаще давайте свои решения на ревью.

## Глава 5. Не допускать такой ошибки в будущем

Подумайте, как программа работала до того, как вы обнаружили ошибку. Почему она работала, как вы ожидали, и почему перестала потом.

Чтобы вынести пользу из ситуации, подумайте, что пошло не так. Попробуйте принцип пяти почему, например:

- программа упала — почему?
- она не обработала ошибку сети во время запроса — почему?
- не было юнит-теста на ошибку сети — почему?
- предыдущий разработчик не написал такой тест — почему?
- там вообще нет юнит-тестов на ошибки сети для любого запроса — почему?
- мы прошляпили ошибки сети в архитектуре программы.

Примите меры, чтобы подобные ошибки не случались в будущем: напишите тесты, добавьте логи, сделайте так, чтобы пользователи обновили версию программы.

Проверьте, чтобы решение удовлетворяло стандартам, принятым в проекте:

- к нему написаны тесты;
- собрана документация;
- соблюдены стандарты по кодстайлу, архитектурным подходам;
- программа проходит тесты производительности и др.

Если требуется обновить что-то из старых тестов, документации и т.д. — не забудьте это сделать.

## В следующий раз

Во [второй части](/blog/debug-it-2/) поговорим об определении проблем и видении общей картины разработки, а также рассмотрим приёмы дебагинга.