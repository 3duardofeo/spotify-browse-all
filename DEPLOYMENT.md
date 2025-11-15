# Deployment Guide

## Creating GitHub Repository

### Option 1: Using GitHub Web Interface

1. Go to https://github.com/new
2. Repository name: `spotify-browse-all` (or your preferred name)
3. Description: "Spotify Browse All page - React implementation"
4. Make it **Public** (required for free GitHub Pages)
5. **Don't** initialize with README, .gitignore, or license (we already have these)
6. Click "Create repository"

### Option 2: Using GitHub CLI (if installed)

```bash
gh repo create spotify-browse-all --public --source=. --remote=origin --push
```

## Pushing to GitHub

After creating the repository, run:

```bash
# Add the remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/spotify-browse-all.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

## Setting up GitHub Pages

### For GitHub Pages Subdomain (username.github.io/repository-name)

1. Go to your repository on GitHub
2. Click **Settings** > **Pages**
3. Under "Source", select:
   - Branch: `main`
   - Folder: `/ (root)`
4. Click **Save**
5. Update `vite.config.js` base path to match your repo name:
   ```js
   base: process.env.NODE_ENV === 'production' ? '/spotify-browse-all/' : '/',
   ```
6. The site will be available at: `https://YOUR_USERNAME.github.io/spotify-browse-all/`

### For Custom Domain/Subdomain

1. Follow steps 1-4 above
2. In repository Settings > Pages, add your custom domain
3. Update `vite.config.js`:
   ```js
   base: '/',
   ```
4. Configure DNS for your domain to point to GitHub Pages

## Automatic Deployment

The repository includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that will automatically:
- Build the project when you push to `main`
- Deploy to GitHub Pages

Just push your code and it will deploy automatically!

## Manual Build & Deploy

If you prefer manual deployment:

```bash
# Build the project
npm run build

# The dist folder contains the built files
# GitHub Pages will serve from the root or /docs folder
```

## Updating the Base Path

If your repository name is different, update `vite.config.js`:

```js
base: process.env.NODE_ENV === 'production' ? '/your-repo-name/' : '/',
```

