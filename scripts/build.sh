#!/bin/bash

# Build for Production - One-Click Script
# ========================================

set -e  # Exit on error

cd "$(dirname "$0")/.."

echo "🏗️  Building for production..."
echo ""

# Load nvm
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Check if dependencies are installed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies first..."
    npm install
    echo ""
fi

# Clean previous build
if [ -d "dist" ]; then
    echo "🧹 Cleaning previous build..."
    rm -rf dist
fi

# Build
echo "📦 Building..."
npm run build

echo ""
echo "✅ Build complete!"
echo "📁 Output: ./dist"
echo ""
echo "To preview the build:"
echo "  npm run preview"
echo ""
echo "To deploy to GitHub Pages:"
echo "  git add ."
echo "  git commit -m 'Update site'"
echo "  git push"
