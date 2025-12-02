#!/bin/bash

# Personal Website - One-Click Run Script
# ========================================

set -e  # Exit on error

echo "🚀 Starting Personal Website..."
echo ""

# Check if nvm is installed
if [ ! -d "$HOME/.nvm" ]; then
    echo "❌ Error: nvm not found!"
    echo "Please install nvm first:"
    echo "curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash"
    exit 1
fi

# Load nvm
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Check Node.js version
echo "📦 Checking Node.js version..."
if ! command -v node &> /dev/null || [ "$(node -v | cut -d'v' -f2 | cut -d'.' -f1)" -lt 20 ]; then
    echo "📥 Installing Node.js 22..."
    nvm install 22
    nvm use 22
else
    echo "✅ Node.js $(node -v) detected"
fi

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    echo ""
    echo "📦 Installing dependencies..."
    npm install
else
    echo "✅ Dependencies already installed"
fi

echo ""
echo "🎨 Starting development server..."
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  🌐 Local:   http://localhost:5173/"
echo "  💡 Press Ctrl+C to stop"
echo "  📱 Opening in VS Code Simple Browser..."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Start dev server in background
npm run dev &
DEV_PID=$!

# Wait for server to start
sleep 2

# Open in VS Code Simple Browser
code --open-url http://localhost:5173

# Wait for the dev server process
wait $DEV_PID
