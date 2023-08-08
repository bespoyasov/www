---
title: Morse Code Translator and Player in JavaScript
description: An experiment with Web Audio API and asynchronous generator functions.
datetime: 2018-12-21T15:05
tags:
  - composition
  - coupling
  - dependencies
  - javascript
  - music
  - research
---

# Morse Code Translator and Player in JavaScript

For one of my projects, I needed to experiment with the Web Audio API and the generation of audio sequences. As part of this experiment, I wrote a small (and not very useful) [morse code generator](https://bespoyasov.me/showcase/morse/). In this post, I'll show you how to make on of these in JavaScript.

![UI of the Morse code generator-translator](./morse-code-translator.webp)

## Alphabet and Translation Module

The first thing we need is a translator module. We'll need it to break down user input into characters and replace them with dots and dashes.

Let's create an object in which we will specify the correspondence between letters and digits and Morse code characters:

```js
const defaultAlphabet = {
	'.-': 'a',
	'-...': 'b',
	'-.-.': 'c',
	'-..': 'd',
	'.': 'e',
	// ...Other letters.

	'-----': '0',
	'.----': '1',
	// ...Other digits.

	'·-·-·-': '.',
	'--··--': ',',
	'-·-·--': '!',
	' ': ' '
};
```

<aside>

The full character set, you can find in the [source code](https://github.com/bespoyasov/morse/blob/master/Translator/dictionary.js) or [on Wikipedia](https://en.wikipedia.org/wiki/Morse_code).

</aside>

Next, let's create a translation module that will use the alphabet object to translate phrases:

```js
class Translator {
	constructor({ alphabet = defaultAlphabet, space = ' ' }) {
		this.space = space;
		this.alphabet = alphabet;
	}
}
```

We pass the alphabet as part of the configuration in the constructor of the `Translator` class, so that it can be replaced if necessary. This is not needed per se, but will be useful if we, for example, want to change the alphabet depending on the user's locale.

In addition to the alphabet, we also specify a space character. We will use it to split phrases into words, and to compose words back into phrases. (More on this later.)

To encode text into Morse code, we'll write the `encode` method:

```js
class Translator {
	// ...

	encode = (message) => {
		return message
			.toLowerCase()
			.split('')
			.reduce((encoded, char) => {
				// TODO: Turn characters into morse code.
			}, '');
	};
}
```

The `encode` method will take a string, split it into individual characters, find the corresponding morse code characters, and then glue them into a string with dots and dashes.

To find a match between a letter or digit and a Morse code character, we need an inverted duplicate of the alphabet with Morse code characters as keys. For this purpose, let's write the `inverse` method:

```js
class Translator {
	constructor({ alphabet = defaultAlphabet, space = ' ' }) {
		this.space = space;
		this.alphabet = alphabet;
		this.inverted = this.inverse(alphabet);
	}

	inverse = (alphabet) =>
		Object.keys(alphabet).reduce(
			(inverted, key) => ({
				...inverted,
				[alphabet[key]]: key
			}),
			{}
		);

	// ...
}
```

The inverted alphabet we can then use in the `encode` method:

```js
class Translator {
	// ...

	encode = (message) => {
		return message
			.toLowerCase()
			.split('')
			.reduce((encoded, char) => {
				// For each letter, digit or punctuation mark
				// find the corresponding Morse character:
				const code = this.inverted[char] || '';

				// Add a space between characters,
				// so that the result doesn't merge
				// into a mishmash of dots and dashes:
				const part = code + this.space;

				// Expand the result text:
				return (encoded += part);
			}, '');
	};
}
```

We put a space between Morse code characters so that they don't stick together in one indistinct line. We leave one space between characters and two spaces between words.

<aside>

You can read more about the translation algorithm and why we need two spaces between words here [in this article](https://www.geeksforgeeks.org/morse-code-translator-python/). There are code samples in Python, but they're clear enough even for me to read.

</aside>

Let's finish the translation module with one last method for decoding Morse code:

```js
class Translator {
	// ...

	decode = (message) => {
		message += this.space;

		let decoded = '';
		let currentCode = '';
		let spaceCount = 0;

		for (const char of message) {
			// Split the string into separate characters:
			// dots, dashes, and spaces
			// and check each character.

			// If it is not a space,
			// we need to “listen to the end”
			// of the alphabet character:

			if (char !== this.space) {
				currentCode += char;
				spaceCount = 0;
				continue;
			}

			// If it was a space, check,
			// how many spaces we listened to.
			// If we listened to 2 spaces,
			// then the “word” is over, and we need to
			// add a space to the resulting string:

			spaceCount += 1;
			if (spaceCount === 2) {
				decoded += this.space;
				continue;
			}

			// If there was only one space,
			// then we've listened to the “character”
			// that corresponds a letter, number,
			// or punctuation mark.

			// Find a match in the alphabet and
			// add it to the resulting string:

			decoded += this.alphabet[currentCode];
			currentCode = '';
		}

		return decoded;
	};
}
```

## Oscillator and Sound Generator

To be able to not only see the translated phrases on the screen, but also listen to them, we need [Web Audio API](https://developer.mozilla.org/ru/docs/Web/API/Web_Audio_API).

Let's write a sound generator module:

```js
class SoundEmitter {
	constructor(config) {
		// ...
	}

	play = (durationMS) => {
		// ...
	};
}
```

First we will access [audio-context](https://developer.mozilla.org/en-US/docs/Web/API/AudioContext). Through it, we will reach the audio API:

```js
class SoundEmitter {
	constructor(config = {}) {
		const { glbl = window } = config;

		const AudioContext = glbl.AudioContext || glbl.webkitAudioContext;
		if (!AudioContext) throw new Error('Failed to access Audio Context.');

		this.audioCtx = new AudioContext();
	}

	// ...
}
```

Set the frequency of the sound wave we are going to produce. Usually, Morse code [is heard at 600-1000 Hz](https://en.wikipedia.org/wiki/Morse_code). This frequency we will specify in the settings:

```js
class SoundEmitter {
	constructor(config = {}) {
		const { glbl = window, frequencyHZ = 600 } = config;

		// ...

		this.frequencyHZ = frequencyHZ;
	}

	// ...
}
```

To actually generate sound with Web Audio API we need an [oscillator](https://developer.mozilla.org/en-US/docs/Web/API/OscillatorNode)—a representation of a sound wave of a certain frequency. Let's add a method to create it:

```js
class SoundEmitter {
	// ...

	createOscillator = () => {
		const oscillator = this.audioCtx.createOscillator();
		oscillator.frequency.value = this.frequencyHZ;
		oscillator.connect(this.audioCtx.destination);

		return oscillator;
	};
}
```

Finally, let's create a method for playing a sound wave that takes its duration in milliseconds as input:

```js
class SoundEmitter {
	// ...

	play = (durationMS) => {
		const oscillator = this.createOscillator();
		oscillator.start();
		oscillator.stop(this.audioCtx.currentTime + durationMS / 1000);
	};
}
```

<aside>

Note that we use [`AudioContext.currentTime`](https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/currentTime) to calculate the duration correctly.

</aside>

## Message Player

The last thing left to do is to write a module that will start and stop audio playback based on dots and dashes from a message encoded in Morse code.

The duration of a dot [usually equals to 50 ms](https://en.wikipedia.org/wiki/Morse_code), and a dash is equal to 3 dots. The space between words will be a pause of 5 dots, and the space between characters will be a pause of 3 dots. Within a character, dots and dashes are separated by a one-dot pause.

```js
class MorseCodePlayer {
	constructor({ translator, soundEmitter, dotLengthMS = 50 }) {
		this.isPlaying = false;
		this.translator = translator;
		this.soundEmitter = soundEmitter;

		this.durations = {
			dot: dotLengthMS,
			dash: 3 * dotLengthMS
		};

		this.gaps = {
			part: dotLengthMS,
			char: 3 * dotLengthMS,
			word: 5 * dotLengthMS
		};
	}
}
```

In the constructor, we access instances of previously created classes: `translator` and `soundEmitter`. This is so-called [dependency injection](/blog/di-ts-in-practice). With it, we don't couple the class to concrete objects, but make this connection customizable.

<aside>

Dependency injection is convenient to make classes more testable, because we can substitute dependencies for [fake objects](https://en.wikipedia.org/wiki/Mock_object) in tests.

</aside>

Next, let's add methods to find durations from the passed strings:

```js
class MorseCodePlayer {
	// ...

	getSignalDuration = (smbl) => {
		const { dot, dash } = this.durations;

		switch (smbl) {
			case '.':
				return dot;
			case '-':
				return dash;
			default:
				return 0;
		}
	};

	getGapDuration = (smbl) => {
		const { word, char, part } = this.gaps;

		switch (smbl) {
			case '  ':
				return word;
			case ' ':
				return char;
			default:
				return part;
		}
	};
}
```

To convert a sequence of characters into a time-based sequence of sounds, we'll use an [asynchronous generator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator). When we iterate over it, it will control the “schedule” of pauses and sounds, delaying them with a timeout:

```js
class MorseCodePlayer {
	// ...

	*generateSequence(symbols) {
		for (const smbl of symbols) {
			const signal = this.getSignalDuration(smbl);
			const gap = this.getGapDuration(smbl);

			yield Promise.resolve({ signal });
			yield new Promise((resolve) => setTimeout(() => resolve({ gap }), signal + gap));
		}
	}
}
```

Now all that's left is to write a method that will trigger the oscillator wave playback on this schedule:

```js
class MorseCodePlayer {
	// ...

	togglePlayingState = () => {
		this.isPlaying = !this.isPlaying;
	};

	playMessage = async (message) => {
		// Prohibit “interrupting” playing messages:

		if (this.isPlaying) return false;
		this.togglePlayingState();

		// Translate message in Morse code:

		const morseString = this.translator.encode(message);
		const symbols = morseString.split('');

		// Go through each symbol and
		// “schedule” playing its sound:

		for await (const bit of this.generateSequence(symbols)) {
			const { signal } = bit;

			// If at the current moment of the schedule
			// we see a “signal”, we play it:
			if (signal) this.soundEmitter.play(signal);

			// If we see a pause instead of a signal,
			// we don't play anything, we just wait
			// for the next scheduled signal.
		}

		// Record in the player's state,
		// that it is busy playing the message:
		this.togglePlayingState();
	};
}
```

## Combine All Together

The last thing we need to do is to compose the application and configure all dependencies:

```js
// Create instances of the translator
// and the sound generator:

const translator = new Translator();
const soundEmitter = new SoundEmitter();

// Create an instance of the application
// and pass all dependencies in the constructor:

const codePlayer = new MorseCodePlayer({
	soundEmitter,
	translator
});
```

Next, let's set up event handlers to submit a form that will trigger message translation and sound playback, and use `codePlayer` in it:

```js
const form = document.getElementById('form');
const input = document.getElementById('message');
const output = document.getElementById('translated');

form.addEventListener('submit', (e) => {
	e.preventDefault();

	const message = input.value;
	codePlayer.playMessage(message);

	const encoded = translator.encode(message);
	output.innerHTML = encoded;
});
```

And that's it, [the app is ready!](https://bespoyasov.ru/showcase/morse/) 🙃

## Sources and References

- [Sample app](https://bespoyasov.ru/showcase/morse/)
- [Source code on GitHub](https://github.com/bespoyasov/morse)

### Morse Code

- [Morse code, Wikipedia](https://en.wikipedia.org/wiki/Morse_code)
- [Morse Code Translator In Python](https://www.geeksforgeeks.org/morse-code-translator-python/)

### Web Audio API

- [Web Audio API, MDN](https://developer.mozilla.org/ru/docs/Web/API/Web_Audio_API)
- [AudioContext, MDN](https://developer.mozilla.org/en-US/docs/Web/API/AudioContext)
- [OscillatorNode, MDN](https://developer.mozilla.org/en-US/docs/Web/API/OscillatorNode)
- [`currentTime`, MDN](https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/currentTime)

### Dependency Management

- [Dependency Injection with TypeScript in Practice](/blog/di-ts-in-practice)
- [Fake objects, Wikipedia](https://en.wikipedia.org/wiki/Mock_object)

### Other Topics

- [Asynchronous Generator, MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator)
