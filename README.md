# ✍️ 💻 👋

Source code for my [blog](https://bespoyasov.ru).

## Overview

[Next](https://nextjs.org) is used as a static site generator. Pages call `api` that triggers `persistence` to read a post or a project from an MDX file.

RSS is generated via a custom `ops` script. Images optimization performed using [Squoosh](https://squoosh.app) and set up in `ops` as well.

[Jest](https://jestjs.io) is used for running tests and [Hygen](https://www.hygen.io)—for code generation.

Deployed on a static server using [GitHub Actions](https://github.com/features/actions).

## Installation and Development

Clone the repo and install dependencies:

```sh
git clone https://github.com/bespoyasov/www.git
cd www
npm i
npm start
```

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
