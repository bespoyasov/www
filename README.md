# ✍️ 💻 👋

Source code for my blog.

- [In English](https://bespoyasov.me)
- [In Russian](https://bespoyasov.ru)

## Overview

[Next](https://nextjs.org) is used as a static site generator. Pages call the `network` service that triggers `persistence` to read a post or a project from an MDX file in the `storage` directory.

Translation dictionary collection, RSS generation and image optimization are performed by custom scripts located in `ops`. For optimizing images, [Squoosh](https://squoosh.app) is used.

[Jest](https://jestjs.io) is used as a test runner and [Hygen](https://www.hygen.io) as a code generator.

Deployed on static servers using [GitHub Actions](https://github.com/features/actions).

## Installation

Clone the repo and install dependencies:

```sh
git clone https://github.com/bespoyasov/www.git
cd www

npm i
```

## Development

For starting the development mode, run:

```sh
npm start
```

This command will start 3 daemons in parallel:

- Next dev server for En version on [2001 port](http://localhost:2001);
- Next dev server for Ru version on [2002 port](http://localhost:2002);
- Translation dictionary watcher for live-updates of localization data.

### Code Generation

Create a component, post, or a page:

```sh
npm run new:component
npm run new:post
npm run new:page

# Interactive CLI will guide you after this.
```

### Testing

To run the tests in development:

```sh
npm run test:dev
```

For running all the tests once:

```sh
npm test
```

The latter command is also used in CI.

## Project Build

The project can be built in 2 different languages:

```sh
npm run build:en
npm run build:ru
```

After the build, Next exports the generated site sources into `out`. Then the static resources are cleaned up to contain only the media related to the current build locale. In the end, RSS is generated.

The sources in `out` now can be deployed to a server.

## Plans and TODOs

Everything I consider implementing is in the [projects section](https://github.com/bespoyasov/www/projects) on GitHub.
