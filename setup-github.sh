#!/bin/bash

# Script to set up GitHub repository and deployment
# Run this script after creating the repository on GitHub

echo "🚀 Setting up GitHub repository..."

# Check if repository name is provided
if [ -z "$1" ]; then
    echo "Usage: ./setup-github.sh <repository-name>"
    echo "Example: ./setup-github.sh spotify-browse-all"
    exit 1
fi

REPO_NAME=$1
GITHUB_USER=$(git config user.name)

echo "Repository name: $REPO_NAME"
echo "GitHub user: $GITHUB_USER"

# Add remote (you'll need to create the repo on GitHub first)
echo ""
echo "📝 To create the repository on GitHub:"
echo "   1. Go to https://github.com/new"
echo "   2. Repository name: $REPO_NAME"
echo "   3. Make it Public (for GitHub Pages)"
echo "   4. Don't initialize with README (we already have one)"
echo "   5. Click 'Create repository'"
echo ""
echo "Then run these commands:"
echo ""
echo "git remote add origin https://github.com/$GITHUB_USER/$REPO_NAME.git"
echo "git branch -M main"
echo "git push -u origin main"
echo ""
echo "For GitHub Pages deployment:"
echo "   1. Go to repository Settings > Pages"
echo "   2. Source: Deploy from a branch"
echo "   3. Branch: main, folder: / (root)"
echo "   4. Your site will be at: https://$GITHUB_USER.github.io/$REPO_NAME"

