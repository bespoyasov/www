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

Create a component, post, or a project:

```sh
npm run new:component
npm run new:post
npm run new:project

# Interactive CLI will guide after.
```

Run the tests:

```sh
# For development:
npm run test:dev

# Run once, used in CI:
npm test
```

Build, generate RSS, export site, and test the build:

```sh
npm run build
```

Optimize images in the `public` directory:

```sh
npm run images:convert
```

## Plans and TODOs

Everything I consider implementing is in the [projects section](https://github.com/bespoyasov/www/projects) on GitHub.
