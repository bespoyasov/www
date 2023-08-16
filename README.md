# www

Source code for my blog:

- [English](https://bespoyasov.me)
- [Russian](https://bespoyasov.ru)

## Overview

Made with [SvelteKit](https://kit.svelte.dev), uses [Adapter Static](https://kit.svelte.dev/docs/adapter-static) to generate a static web site.

## Installation & Development

Clone the repo, install, and run the project locally:

```sh
git clone https://github.com/bespoyasov/www.git
cd www

npm i
npm run dev
```

Build and preview production build:

```sh
npm run build
npm run preview
```

## Localization

By default, all npm scripts are run for the EN-lang version of the site. To run or build the RU-lang version of the project, use:

```sh
npm run dev:ru
npm run build:ru
```

## Previous Versions

- [`v7`](https://github.com/bespoyasov/www/tree/www-v7), built with Next and React.

## License

The source code is distributed under the [GNU GPL v3.0](LICENSE) license. You can use, modify, and redistribute it as long as you keep the license and disclose the source.

The content of the site is distributed under the [CC BY-NC-SA 4.0](LICENSE-SA.md) license. You can use and modify it as long as you mention the source and author, keep the license, and don't use the content in a commercial product.
