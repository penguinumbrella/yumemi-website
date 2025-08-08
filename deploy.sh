#!/bin/bash

echo "🚀 Starting deployment to GitHub Pages..."

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the React app
echo "🔨 Building React app..."
npm run build

# Create gh-pages branch
echo "🌿 Creating gh-pages branch..."
git checkout --orphan gh-pages

# Remove everything except build folder
echo "🧹 Cleaning up files..."
git rm -rf .

# Copy build contents to root
echo "📁 Copying built files..."
cp -r build/* .

# Remove build folder
rm -rf build

# Add all files
echo "📝 Adding files to git..."
git add .

# Commit
echo "💾 Committing changes..."
git commit -m "Deploy to GitHub Pages"

# Push to gh-pages branch
echo "🚀 Pushing to gh-pages branch..."
git push origin gh-pages --force

# Go back to main branch
echo "🔄 Switching back to main branch..."
git checkout main

echo "✅ Deployment complete! Your website should be live at:"
echo "   https://penguinumbrella.github.io/yumemi-website"
