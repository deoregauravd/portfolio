# 🚀 Complete Deployment & Customization Guide

Your portfolio is built using **Astro 5** with pure static site generation (SSG). This means lightning-fast load times, perfect 100 SEO/Performance scores, and 100% free hosting on both **Vercel** and **Cloudflare Pages**.

---

## 🛠️ How to Modify Your Portfolio in 30 Seconds

All content in this portfolio is managed in a single file:
👉 **[`src/data/portfolio.ts`](src/data/portfolio.ts)**

Inside that file, you can edit:
- **Personal Info**: Name, title, headline, location, email, availability badge
- **Resume Link**: Direct link to your Google Docs resume or PDF
- **Social Profiles**: GitHub, LinkedIn, Medium, YouTube
- **Featured Video / Demo Reel**: Turn on `enabled: true` and paste any YouTube link or MP4 path
- **Project Videos**: Add `videoUrl` to any project to display a "Demo Video" button
- **Skills**: Add or remove technologies under any category
- **Projects**: Title, category, description, live links, GitHub repos, tags, metrics
- **Experience**: Companies, roles, dates, bullet-point achievements, project samples
- **Education & Certifications**: Add degrees, courses, dates

Whenever you save [`src/data/portfolio.ts`](src/data/portfolio.ts), the entire website updates automatically!

---

## 📦 Step 1: Push Code to GitHub

### Option A: Using Windows Terminal (Command Line)
If you don't have Git installed yet, run this in PowerShell:
```powershell
winget install --id Git.Git -e --source winget
```
*(Restart your terminal after installation so `git` is recognized)*

Then run the following commands inside this portfolio folder:
```powershell
# 1. Initialize git repository
git init

# 2. Stage all files
git add .

# 3. Create initial commit
git commit -m "feat: initial Astro portfolio setup"

# 4. Set main branch
git branch -M main

# 5. Create a new repository on https://github.com/new named 'portfolio'
# Then link your remote and push:
git remote add origin https://github.com/deoregauravd/portfolio.git
git push -u origin main
```

### Option B: Using GitHub Desktop (Easiest Visual Way)
1. Download & open **[GitHub Desktop](https://desktop.github.com/)**.
2. Click **File** > **Add Local Repository...**
3. Choose this folder: `c:\Users\deore\OneDrive\Documents\Gemini\Portfolio`
4. Click **Create Repository** if prompted.
5. Click **Publish repository** to push it to your GitHub account (`deoregauravd`).

---

## 🌐 Step 2: Deploy to Vercel (Recommended - 2 Minutes)

Vercel provides automatic deployments on every `git push`, free SSL, and instant preview branches.

1. Go to **[vercel.com](https://vercel.com/)** and log in with your GitHub account.
2. Click **"Add New..."** > **"Project"**.
3. Locate your `portfolio` repository and click **"Import"**.
4. Vercel automatically detects Astro!
   - **Framework Preset**: Astro
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **"Deploy"**.
6. Within 30 seconds, your portfolio will be live at `https://portfolio-xxx.vercel.app` (you can also attach a free custom domain).

---

## ⚡ Step 3: Or Deploy to Cloudflare Pages (Alternative)

Cloudflare Pages provides unlimited bandwidth and runs on Cloudflare's global edge network.

1. Go to **[dash.cloudflare.com](https://dash.cloudflare.com/)** and sign in.
2. In the left sidebar, navigate to **Compute (Workers) > Pages**.
3. Click **"Connect to Git"** and choose your `portfolio` GitHub repository.
4. Set the build configuration:
   - **Framework preset**: `Astro`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
5. Click **"Save and Deploy"**.

---

## 💻 Local Development Commands

To preview and work on your portfolio locally:

```powershell
# Start local development server (with hot-reload)
npm run dev

# Build production static bundle to verify
npm run build

# Preview the built production output locally
npm run preview
```
