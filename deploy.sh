#!/bin/bash
set -e

# Source: kudadonbe.v3 Astro build output
src_dir="../kudadonbe.v3/dist"

# Destination: docs/ folder served by GitHub Pages
dest_dir="./docs"

if [ ! -d "$src_dir" ]; then
  echo "error: $src_dir not found. Run 'pnpm build' in ../kudadonbe.v3 first." >&2
  exit 1
fi

# Wipe old build then copy fresh dist
rm -rf "$dest_dir"
mkdir -p "$dest_dir"
cp -r "$src_dir"/* "$dest_dir"
# Include dotfiles like .nojekyll
cp -r "$src_dir"/.[!.]* "$dest_dir"/ 2>/dev/null || true

# SPA-style 404 fallback
cp "$src_dir/index.html" "$dest_dir/404.html"

# Safety net in case .nojekyll wasn't in the build
touch "$dest_dir/.nojekyll"

git add .
if git diff --cached --quiet; then
  echo "No changes to deploy."
  exit 0
fi

git commit -m "Deploy v3 build"

# Push current branch (GitHub Pages serves from whichever branch is configured)
current_branch="$(git rev-parse --abbrev-ref HEAD)"
git push -u origin "$current_branch"
