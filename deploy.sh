#!/bin/bash

# Build the React app
npm run build

# Create gh-pages branch
git checkout --orphan gh-pages

# Remove everything except build folder
git rm -rf .

# Copy build contents to root
cp -r build/* .

# Remove build folder
rm -rf build

# Add all files
git add .

# Commit
git commit -m "Deploy to GitHub Pages"

# Push to gh-pages branch
git push origin gh-pages --force

# Go back to main branch
git checkout main
