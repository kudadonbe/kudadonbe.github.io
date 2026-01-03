# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a GitHub Pages repository (`kudadonbe.github.io`) that hosts a personal portfolio website. This is a **consolidated single-repository approach** where both source code development and deployment happen in the same repo.

**Current Status**: Active development on the `vue-vite-rebuild` branch - this is the primary development branch for building the Vue + Vite application. All development work happens here.

## Repository Structure

This is a consolidated repository containing both source code and deployment artifacts:

- **Source code** - Vue + Vite project files at the repository root
- `docs/` - Production build output (GitHub Pages serves from this directory)
- `deploy.sh` - Legacy deployment script (to be replaced with modern build process)

## Deployment Workflow

The new deployment process:

1. Develop in the repository root (Vue/Vite source code)
2. Run build command (e.g., `npm run build`) to generate output in `docs/`
3. Commit and push changes to deploy

The build process automatically handles:
- Bundling and optimizing assets
- Creating `404.html` from `index.html` for SPA routing support
- Outputting production-ready files to `docs/`

## Branch Strategy

- `vue-vite-rebuild` - **Primary development branch** for Vue/Vite application (this is the main working branch)
- This branch serves as both the development environment and will eventually become the main branch
- Once the Vue/Vite migration is complete, this branch will be merged or renamed to `main`

The current git status shows deleted Angular build artifacts in `docs/`, suggesting the Vue/Vite rebuild is clearing out the old Angular application.

## Key Notes

- This is a unified repository containing both source code and build artifacts
- Source code lives at the repository root (Vue + Vite application)
- Build output is generated to `docs/` folder for GitHub Pages deployment
- The site uses client-side routing with `404.html` fallback to `index.html`
- Standard GitHub Pages workflow: develop → build → commit → push

## Session Notes

### 2025-12-18: Initial Google-Style Landing Page Setup

**Objective**: Migrate from separate portfolio repository to consolidated setup with Google-style landing page.

**Completed**:
- Updated documentation to reflect consolidated repository approach (single repo instead of two-repo pattern)
- Created initial Vue + Vite project structure:
  - `package.json` - Dependencies and build scripts configured to output to `docs/`
  - `vite.config.js` - Build configuration with base path set to `./`
  - `index.html` - Entry point
  - `.gitignore` - Standard Node.js ignores

**Pending** (requires PowerShell 6+ or manual creation):
- Create `src/` directory structure
- Add `src/main.js` - Vue app entry point
- Add `src/style.css` - Global styles
- Add `src/App.vue` - Google-style landing page component with:
  - Clean, minimal design inspired by Google's homepage
  - Large "kudadonbe.dev" logo/heading
  - Search box with placeholder "Search my work, skills, or projects..."
  - "Google Search" and "I'm Feeling Lucky" buttons
  - Quick links to GitHub, LinkedIn, Email
  - Responsive design for mobile

**Next Steps**:
1. Install PowerShell 6+ from https://aka.ms/powershell OR manually create `src/` folder
2. Add the three files in `src/` (main.js, style.css, App.vue - code provided in session)
3. Run `npm install` to install dependencies
4. Run `npm run dev` to test locally
5. Run `npm run build` to generate production build in `docs/`
6. Update vite.config.js to automatically copy `index.html` to `404.html` in build process
