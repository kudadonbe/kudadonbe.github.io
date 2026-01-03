# kudadonbe.github.io

Personal portfolio website built with Vue 3 + Vite + Tailwind CSS + Pinia.

## Features

- 🎨 Modern, minimal design with Tailwind CSS
- 🌓 Dark mode with system preference detection
- 🌍 Multi-language support (English, Arabic, Dhivehi) with RTL
- 📱 Fully responsive mobile-first design
- ⚡ Fast performance with Vite
- 🎯 Component-based architecture
- 💾 Persistent user preferences (localStorage)
- ♿ Accessible with semantic HTML and ARIA labels

## Tech Stack

- **Framework:** Vue 3.5.13
- **Build Tool:** Vite 6.0.5
- **Styling:** Tailwind CSS 4.1.18
- **State Management:** Pinia 3.0.4
- **Icons:** Hero Icons
- **Deployment:** GitHub Actions → GitHub Pages

## Development

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm run dev

# Build for production
pnpm run build
```

## Deployment

The site is **automatically deployed** via GitHub Actions on every push to `main` or `vue-vite-rebuild` branches.

### How it works:
1. Push code to GitHub
2. GitHub Actions builds the project
3. Automatically deploys to GitHub Pages
4. Live at https://kudadonbe.github.io

**No manual build artifacts needed!** The `docs/` folder is ignored in git - GitHub Actions handles the build.

## Project Structure

```
src/
├── components/       # Reusable Vue components
├── stores/          # Pinia state management
├── App.vue          # Main app component
├── main.js          # App entry point
└── style.css        # Global styles

.github/workflows/   # GitHub Actions deployment
```

## License

MIT
