---
title: Сделал плагин-типограф для Grunt
description: Грунтограф — плагин для гранта, который типографит текст и HTML.
datetime: 2015-08-25T15:00
tags:
  - automatization
  - css
  - design
  - grunt
  - javascript
  - product
  - productivity
  - tools
---

# Сделал плагин-типограф для Grunt

[Грунтограф](https://www.npmjs.com/package/grunt-contrib-groontograf) помогает типографить текст и HTML-код.

Он расставляет неразрывные пробелы после предлогов, союзов и коротких слов. Меняет «программистские кавычки» на ёлочки, а вложенные — на лапки. Заменяет дефис на тире, там где это нужно. Ставит короткое тире в диапазонах чисел. Cвешивает кавычки и скобки. Стилизует аббревиатуры. Ставит полупробелы в числах и перед знаками валют. Пока знает только русский язык.

## Установка

Чтобы установить плагин, зайдите через терминал в папку с проектом и вызовите команду:

```
npm install grunt-contrib-groontograf --save-dev
```

## Настройка

Пример грант-файла:

```json
{
	"groontograf": {
		"compile": {
			"options": {
				"hang": true,
				"abbr": true,
				"halfSpaces": true,
				"styles": "inline"
			},
			"files": {
				"dest/pretty.html": "src/ugly.html"
			}
		}
	}
}
```

Из настроек плагин поддерживает:

- `hang` (`boolean`), по умолчанию `true` свешивает пунктуацию;
- `abbr` (`boolean`), по умолчанию `true` стилизует аббревиатуры;
- `halfSpaces` (`boolean`), по умолчанию `true` расставляет полупробелы;
- `styles` (`string`), по умолчанию `inline` определяет, куда писать стили;

Грунтограф пишет стили в атрибут `style` элементов. Если это вам не подходит, напишите в опциях:

```json
{
	"styles": "class",
	"abbrClassName": "smallcaps",
	"hangClassName": ["hp_quote_space", "hp_quote", "hp_bracket_space", "hp_bracket"],
	"halfSpaceClassName": "halfspace"
}
```

Тогда вместо инлайновых стилей грунтограф пропишет классы из `hangClassName`, `abbrClassName` и `halfSpaceClassName`. Рекомендуется скачать файл стилей из пакета, если вы не хотите прописывать стили для классов самостоятельно.

## Предложения и замечания

...Присылайте на bespoyasov@me.com!
