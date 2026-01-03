# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website at `kudadonbe.github.io` built with Vue 3 + Vite + Tailwind CSS 4 + Pinia. Features dark mode, multi-language support (English, Arabic, Dhivehi) with RTL handling, and responsive design.

## Commands

```bash
pnpm install     # Install dependencies
pnpm run dev     # Start dev server (http://localhost:5173)
pnpm run build   # Build to docs/ folder
pnpm run preview # Preview production build
```

## Deployment

Automated via GitHub Actions on push to `main` or `vue-vite-rebuild` branches. The workflow builds and deploys to GitHub Pages - no manual build artifacts needed in commits.

The `docs/` folder is gitignored. Build happens in CI only.

## Architecture

### State Management (Pinia Stores)

Three stores in `src/stores/` manage global state, all using Composition API pattern:

- **`language.js`** - Language switching (en/ar/dv) with RTL support. Contains all translations inline. Use `t` computed property for translated strings.
- **`theme.js`** - Dark/light/system theme with `isDark` reactive state. Applies `dark` class to `<html>`.
- **`preferences.js`** - User accessibility preferences (reduced motion, animations).

All stores persist to localStorage with `kudadonbe_` prefix and initialize via `init*()` methods called in `main.js`.

### Component Structure

```
src/
├── App.vue              # Root - handles RTL direction
├── main.js              # Entry - initializes all stores
├── style.css            # Global Tailwind styles
├── stores/index.js      # Re-exports all stores
└── components/
    ├── Navigation.vue   # Top nav with theme/language toggles
    ├── HeroSection.vue  # Landing hero
    ├── AboutSection.vue
    ├── SkillsSection.vue
    ├── ProjectsSection.vue
    └── Footer.vue
```

### Key Patterns

- Components use `<script setup>` syntax
- Translations accessed via `useLanguageStore().t.section.key`
- RTL handled by binding `:dir` on root element based on `isRTL` computed
- Tailwind 4 with `@tailwindcss/postcss` - uses CSS-based config, not `tailwind.config.js`
- Vite config includes custom plugin to copy `index.html` → `404.html` for SPA routing on GitHub Pages
