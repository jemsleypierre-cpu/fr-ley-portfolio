# FR LEY — Portfolio Website

A professional personal portfolio built with React, Vite, and Tailwind CSS.

---

## Quick Editing Guide

### 📸 Profile Photo
Replace the file at:
```
public/images/profile.jpg
```
The image should ideally be square or portrait-oriented, at least 800×800px.

### 🖼️ Project Screenshots
Add your project images to:
```
public/images/project-1.jpg
public/images/project-2.jpg
public/images/project-3.jpg
public/images/project-4.jpg
public/images/project-5.jpg
public/images/project-6.jpg
```

### ✏️ Edit Project Content (names, descriptions, URLs)
All project information is in one file:
```
src/data/projects.js
```
Open it and edit each project's:
- `title` — Project name
- `category` — e.g. "Web Design & Development"
- `type` — `"Client Project"` or `"Concept Project"`
- `description` — Short description shown on the card
- `role` — Your role on the project
- `tools` — Array of tools/technologies
- `image` — Path to image in public/images/
- `liveUrl` — Live project URL (use `"#"` if none)
- `caseStudyUrl` — Link to full case study (leave `""` if none)
- `overview`, `problem`, `goal`, `process`, `result` — Case study sections

### 🌐 Edit Contact Info, Social Links, Email, Phone
Everything personal is in:
```
src/data/config.js
```
Edit:
- `email` — Your email address
- `phone` — Display format: "+1 (929) 369-4781"
- `phoneRaw` — Digits only, no +: "19293694781" (used for WhatsApp & tel links)
- `social.github` — Your GitHub URL
- `social.linkedin` — Your LinkedIn URL
- `social.contra` — Your Contra URL

### 🔧 Edit Services and Skills
Also in `src/data/config.js`:
- `skills` — Organized by category
- `services` — Each service card

---

## Running Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview the production build
npm run preview
```

---

## 🚀 Deploying to GitHub Pages (Free)

### Step 1 — Create a GitHub Account
Go to https://github.com and sign up if you haven't already.

### Step 2 — Create a New Repository
1. Click the **+** icon → **New repository**
2. Name it: `fr-ley-portfolio`
3. Set it to **Public**
4. Click **Create repository**

### Step 3 — Update the Base URL
In `vite.config.js`, make sure `base` matches your repo name:
```js
base: '/fr-ley-portfolio/',
```

### Step 4 — Install Git and Push Your Code
```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/fr-ley-portfolio.git
git push -u origin main
```
Replace `YOUR_USERNAME` with your actual GitHub username.

### Step 5 — Build and Deploy
Install the GitHub Pages deploy tool:
```bash
npm install --save-dev gh-pages
```

Add this to your `package.json` scripts:
```json
"deploy": "npm run build && gh-pages -d dist"
```

Then deploy:
```bash
npm run deploy
```

### Step 6 — Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Branch**, select `gh-pages` → `/ (root)`
4. Click **Save**

### Step 7 — Get Your URL
Your portfolio will be live at:
```
https://YOUR_USERNAME.github.io/fr-ley-portfolio/
```
It may take 2–5 minutes to go live after the first deploy.

---

## Project Structure

```
fr-ley-portfolio/
├── public/
│   ├── images/          ← Put your photos here
│   │   ├── profile.jpg
│   │   ├── project-1.jpg
│   │   └── ...
│   └── favicon.svg
├── src/
│   ├── components/      ← All UI sections
│   │   ├── Navigation.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── FeaturedProjects.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── ProjectModal.jsx
│   │   ├── DesignApproach.jsx
│   │   ├── Skills.jsx
│   │   ├── Services.jsx
│   │   ├── SelectedWork.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── data/            ← Edit your content here
│   │   ├── projects.js  ← All project info
│   │   └── config.js    ← Personal info, skills, services
│   ├── hooks/
│   │   └── useInView.js ← Scroll animation helper
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html           ← SEO meta tags
├── vite.config.js       ← Change base if repo name differs
├── tailwind.config.js
└── package.json
```

---

## Customization Tips

- **Colors**: Edit `tailwind.config.js` → `extend.colors`
- **Fonts**: Edit `index.html` (Google Fonts link) + `tailwind.config.js` → `fontFamily`
- **Add a project**: Copy one entry in `src/data/projects.js` and fill in your details
- **Change the headline**: Edit `headline` in `src/data/config.js`

---

Built with React + Vite + Tailwind CSS. Designed by FR LEY.
