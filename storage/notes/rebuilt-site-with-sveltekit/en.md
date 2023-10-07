---
title: Migrated Site to SvelteKit
description: Sharing my reasons for the migration and my impressions of the new stack.
datetime: 2023-10-07T10:00
tags:
  - components
  - design
  - editing
  - html
  - javascript
  - opinion
  - process
  - svelte
  - tradeoffs
---

# Migrated Site to SvelteKit

In September, I [migrated](https://github.com/bespoyasov/www/pull/90) my site to a new stack. In this post I want to discuss the reasons for and result of the migration, as well as share my impressions of the new stack.

## Why Migrate

I had two main reasons to rebuild the site: the desire to radically simplify everything and the feeling that Next is not good for generating static sites.

### Desire for Simplification

For a simple blog, the previous stack was overly demanding in terms of maintenance resources. Dependencies took a long time to update, dev server performance was low, React and TypeScript required various “ceremonies” before I could add a new page or feature. I wanted a faster, cheaper, and simpler solution.

### Next Not Really Suited for SSG

In Next, I liked [old page router](https://nextjs.org/docs/pages) and the [SSG](https://nextjs.org/docs/pages/building-your-application/rendering/static-site-generation) built into the framework, but I couldn't help but feel that their integration was an afterthought.

I felt like I had to reinvent the wheel when working with Next, which was time-consuming, and I didn't like the result of SSG—resulting pages seemed unnecessarily heavy. I wanted a more user-friendly and reliable tool.

<aside>

With [the new app routing](https://nextjs.org/docs/app), Next seemed even less suitable for my task.

</aside>

## New Stack

Among the candidates for a new stack, I considered [SvelteKit](https://kit.svelte.dev) and [Astro](https://astro.build). Judging by the documentation and reviews, both were supposed to solve the existing problems.

Astro seemed interesting, but I was already a bit familiar with SvelteKit—I wrote the [web version of my refactoring book](https://refactoring-book.vercel.app/) with it last year—so I chose it.

TypeScript is something I decided to move away from this time. Most of the code on the blog is “infrastructure” that I'm unlikely to change often, so I wouldn't get much use out of TypeScript but the maintenance cost would increase again.

For tests, I chose [Playwright](https://playwright.dev). I thought that the only thing important for a blog is how the pages look in the end, so I decided to only use screenshot tests, and Playwright had subjectively the nicest API for them.

## Changelog

There were a lot of changes. In addition to the “infrastructure” changes, I also updated the design, improved the content structure in the repository and translated some old posts into English.

### Pages Redesigned

I've been wanting to do this for a long time, so I finally freshened up the design of the main page and some other pages. The redesign of the post list is inspired by [Andrey Romanov's site](https://andreyromanov.com) and the redesign of the projects page by is inspired by [Salavat Abdullin's site](https://slvt.ru). If you're reading—thank you!

In addition, I got rid of dedicated pages for each of the projects. Now the links lead directly to the app, book, or project itself on GitHub. All the “cool stories” about the process of working on projects and their releases (e.g. ["How we launched MRKT"](/blog/mrkt-release/)) I moved to the blog.

### Tags Reinvented

Tags have become a little more useful. Each tag is now a “thematic compilation” of everything I've written, programmed, and said on the topic. Such compilations are convenient, for example, to send in response to questions like “What to read about X?”, which I sometimes receive in mail or in my GitHub issues.

I also now use tags to find and interlink similar content—something I've been wanting to do for a long time but never got around to it. So far I've only added a “Related Topics” section to the tag page, but I plan to add a similar section to the individual article page as well.

### Some Old Posts Resurrected

I published some posts that got lost when the site was first moved from [MODX](https://modx.com) to JAM-stack. Some of them were in drafts, some of them were unpublished (and I don't really remember why). Among such posts, for example:

- [Reasoning about night-coding](/blog/night-coding/)
- [Impressions from first use of flexbox](/blog/flexbox-is-awesome/)
- [The very first mention of Prokrutchik](/blog/scroller/)

Anyway, I dug them up, translated them into English, and published them.

### Content Structure Improved

In the new version, I'm using GitHub as an alternative way to read my articles. Each post is a directory inside `storage` that contains everything related to that particular post. Pictures, YouTube links, metadata, and text in all the languages I've managed to translate the post into.

The new content structure helps you read articles directly on GitHub—[looks fine](https://github.com/bespoyasov/www/blob/master/storage/notes/binary-adder-in-the-game-of-life-2/en.md):

![How an article about the Game of Life is rendered on Github. Particularly pleased with how I managed to not lose the YouTube links](./render-example.webp)

GitHub, however, doesn't render the `alt` text of the images as a caption to the `figure` as I do on my site, so sometimes the images are shown without additional context, but I found it not very critical.

<aside>

By the way, I used the same approach in [my refactoring book](https://github.com/bespoyasov/refactor-like-a-superhero)—you can read it in full on GitHub without going to a separate site, if that's more convenient.

</aside>

### Images Cleaned Up

I removed images in “old” formats (`jpg`, `png`) from my posts and left only `webp`, which already has [about 96% global support](https://caniuse.com/webp).

At the same time, I removed everything related to automated image minification and resizing. I don't write posts very often, I don't have a lot of images, so it seemed expensive and useless to me to build infrastructure for auto-minification, resizing and converting images to different formats. I decided to simply prepare images manually.

## Results

Of note, I can highlight the quality of the generated pages and the speed of the stack.

### Lightweight Pages

I use [Static Adapter](https://github.com/sveltejs/kit/tree/master/packages/adapter-static) to generate pages, and I like that it has a “don't use CSR” option. The output pages are now simple, lightweight, and most importantly, don't contain client-side JS where it isn't needed.

### Fast Dev Server

Vite, which runs under the hood at SvelteKit, actually starts and builds the site much faster than my previous stack with Next. Even on my old home laptop, the project starts almost instantly.

### Fast Builds and Deploy

The compiler is fast, so the build [takes no more than half a minute](https://github.com/bespoyasov/www/actions/runs/6362252595/job/17277171206), and the light weight of the pages makes for a fast deploy.

### Simplified Structure

This time I decided not to be too careful about “code purity.” The reasons are about the same as for not using TypeScript: I'm unlikely to change this code very often.

The lack of restrictions reduces the friction before starting a new feature, page, or testing an idea. Since I'm working on the project alone, there's not much point in “enforcing best practices on the team,” but the amount of development time is reduced significantly.

### Infrastructure Hacks

Not everything, however, is perfectly smooth. For example, I had to do a bit of work with integrating “custom components” like `YouTube` and `Switch` into posts. I couldn't find any handy tool, so I [wrote an auto-import hack](https://github.com/bespoyasov/www/blob/master/ops/auto-import.js). I hope I won't have to touch it often because of breaking changes in SvelteKit.

## Impressions

On the whole, I am satisfied with the new stack. I like that the routing is page-based, that the server code is not mixed with the client code, and that the framework uses standard web-platform-based stuff.

Separately, I liked the “server pages” and how they are rendered when generated statically. In the previous stack I had to “find a workaround” when generating an RSS feed, but SvelteKit [allows me](https://kit.svelte.dev/docs/page-options#prerender) to create a [`+server.js` file](https://github.com/bespoyasov/www/blob/master/src/routes/rss.xml/%2Bserver.js) and specify how to render it when building—so that the output becomes an `.xml` file. No helpers, no workarounds.

I also like Svelte itself better than React. At least I don't have to think of 100500 ways to integrate styles—everything is already thought out for me. Of course, there is a limitation that in Svelte a component is single file, but inside it there is _everything_ it needs: markup, styles, logic.

There is a slight feeling that SvelteKit is crude for generating static blogs because there are issues with rendering Markdown files and components within it <sup>[1](https://github.com/pngwn/MDsveX/issues/21), [2](https://github.com/pngwn/MDsveX/issues/525), [3](https://github.com/pngwn/MDsveX/issues/499), [4](https://github.com/pngwn/MDsveX/issues/116)</sup>, but maybe this is purely my problem due to dynamic components within articles.

In any case, all these problems can be fixed by workarounds, and the number of workarounds this time is much less than last time.

## Sources and References

- [Site's repo](https://github.com/bespoyasov/www)
- [Previous version built with Next](https://github.com/bespoyasov/www/tree/www-v7)
- [Pull-request with changes](https://github.com/bespoyasov/www/pull/90)

### Technologies

- [SvelteKit](https://kit.svelte.dev)
- [Page Options, `prerender`](https://kit.svelte.dev/docs/page-options#prerender)
- [Static Adapter](https://github.com/sveltejs/kit/tree/master/packages/adapter-static)
- [Astro](https://astro.build)
- [Playwright](https://playwright.dev)
- [Page Router in Next](https://nextjs.org/docs/pages)
- [App Router in Next](https://nextjs.org/docs/app)
- [MODX](https://modx.com)

### Redesign Inspired

- [Andrey Romanov](https://andreyromanov.com)
- [Salavat Abdullin](https://slvt.ru)
