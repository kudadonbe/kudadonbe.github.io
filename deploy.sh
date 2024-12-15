#!/bin/bash

# Source directory (replace with your actual path)
src_dir="~/Documents/GitHub/portfolio/dist/portfolio"

# Destination directory (replace with the relative path)
dest_dir="./docs"

# Copy files recursively
cp -r "$src_dir"* "$dest_dir"

# Stage all changes (optional, customize if needed)
git add .

# Commit changes with a descriptive message
git commit -m "Automatic deployment from local build"

# Push changes to the remote repository
git push -u origin main