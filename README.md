# Astro Starter Kit: Minimal-ish

This is Kristoff's minimal-ish starter template for [Astro](https://astro.build).
It includes a few extras to help you get started, but is still very minimal.

## ✨ Features

- `<Container>` component to center your content and provide padding
- `<SkipLink>` component for accessibility
- Global CSS reset
- Starter theme with CSS variables
- Pre-configured import aliases for `@components`, `@layouts`, `@assets`, and `@content`
- Samples showing the following:
  - importing & using an image
  - importing & using a component
  - importing & using a Markdown file as a component
  - using CSS variables for theming
  - importing and using a Google Font with `@fontsource`

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
