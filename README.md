# Haifa Audrey Azzahra — ID Portfolio

A multi-page instructional design portfolio built with HTML, CSS, and vanilla JS.  
Deployed via GitHub Pages.

---

## 📁 File Structure

```
portfolio/
├── index.html              ← Homepage (hero + projects)
├── about.html              ← Full CV + experience
├── contact.html            ← Contact page with form
├── style.css               ← Shared stylesheet (all pages)
├── projects/
│   └── ei-conversations.html   ← EI project case study
│   └── (add more project pages here)
└── README.md               ← This file
```

---

## 🚀 How to Deploy (GitHub Pages) — Step by Step

### Step 1: Create a GitHub Account
1. Go to https://github.com and click **Sign up**
2. Choose a username (suggestion: `haifaaudrey` or `haifa-audrey`)
3. Verify your email

### Step 2: Create a New Repository
1. Click the **+** icon (top right) → **New repository**
2. Name it **exactly**: `haifaaudrey.github.io`  
   _(Replace `haifaaudrey` with whatever username you chose)_
3. Set it to **Public**
4. Do NOT initialize with a README (we'll upload our files)
5. Click **Create repository**

### Step 3: Upload Your Files
1. On your new repository page, click **uploading an existing file**
2. Drag and drop ALL files from this folder:
   - `index.html`
   - `about.html`
   - `contact.html`
   - `style.css`
3. Click **Commit changes**
4. Then go back, create a folder called `projects/` and upload:
   - `projects/ei-conversations.html`

### Step 4: Enable GitHub Pages
1. Go to your repository → **Settings** tab
2. Scroll to **Pages** in the left sidebar
3. Under **Source**, select **Deploy from a branch**
4. Choose **main** branch, **/ (root)** folder
5. Click **Save**

### Step 5: Your site is live! 🎉
Wait 1–2 minutes, then visit:  
**https://haifaaudrey.github.io**

---

## 📎 Adding Your CV PDFs

1. Export your CVs as PDF files
2. Name them: `cv-id-haifa.pdf` and `cv-pm-haifa.pdf`
3. Upload them to your GitHub repository (drag and drop)
4. In `about.html`, find the two download buttons and update the `href`:

```html
<!-- Change this: -->
<a href="#" class="download-btn" onclick="alert(...)">

<!-- To this: -->
<a href="cv-id-haifa.pdf" class="download-btn" download>
  Download ID CV
</a>
```

---

## 📬 Setting Up the Contact Form

The contact form uses [Formspree](https://formspree.io) — free, no backend needed.

1. Go to https://formspree.io and create a free account
2. Create a new form — it will give you a form ID like `xyzabcde`
3. In `contact.html`, find this line:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
4. Replace `YOUR_FORM_ID` with your actual ID

---

## ➕ Adding a New Project Page

1. Duplicate `projects/ei-conversations.html`
2. Update the title, meta, hero, meta strip, and content
3. Upload to GitHub in the `projects/` folder
4. Add a new card in `index.html` pointing to it

---

## 🎨 Design Reference

- **Primary colour:** `#2952C4` (cobalt blue)
- **Background:** `#F5F0E6` (warm ivory)
- **Headline font:** Playfair Display (Google Fonts)
- **Body font:** DM Sans (Google Fonts)
- **Accent colour:** `#C4633A` (terracotta)

Inspired by the split-panel, editorial aesthetic of the design template provided.
