#!/bin/bash

# Source directory (replace with your actual path)
src_dir="/Users/kudadonbe/Documents/GitHub/portfolio/dist/portfolio"

# Destination directory (replace with the relative path)
dest_dir="./docs"

# Copy files recursively
cp -r "$src_dir"/* "$dest_dir"

# Copy index.html to 404.html
cp "$src_dir/index.html" "$dest_dir/404.html"

# Stage all changes
git add .

# Commit changes with a descriptive message
git commit -m "Automatic deployment from local build with 404.html"

# Push changes to the remote repository
git push -u origin main