# Dozy Pixel Studio website

A static studio portfolio that links visitors to the Fab and Unity Asset Store listings. Plain HTML, CSS and a little vanilla JavaScript. No framework, no build step, no npm. The site sells nothing and collects no data.

## Folder structure

```
dozy-pixel-studio/
├── index.html
├── 404.html
├── README.md
├── favicon.png
├── portfolio/index.html
├── about/index.html
├── support/index.html
├── privacy/index.html
└── assets/
    ├── css/styles.css
    ├── js/main.js
    └── img/
        ├── logo/        logo.png, logo-icon.png, og-image.jpg
        ├── portfolio/   your asset thumbnails (16:9)
        └── bg/          moon.svg (decorative)
```

## Publish on GitHub Pages

1. Create a GitHub account with your studio email and turn on two-factor authentication.
2. Create a **public** repository named `username.github.io` (use your exact GitHub username).
3. Upload everything inside the `dozy-pixel-studio` folder to the `main` branch, so that `index.html` sits at the top level of the repository.
4. In the repository, open **Settings > Pages**. Under **Build and deployment**, choose **Deploy from a branch**, select **main** and the **/ (root)** folder, then save.
5. Wait a few minutes, then open `https://username.github.io`.
6. Test on a phone and a desktop, click every link, and test the email link.

The repository is public, so only put website files in it. Never add paid asset files, source files or private documents.

## What to replace

Use your editor's "find in all files" to search for the strings below.

**Placeholder images (already in the folders, overwrite them with your own files, same names)**
- [ ] `assets/img/logo/logo.png`: your full logo artwork (transparent PNG, square or close to it)
- [ ] `assets/img/logo/logo-icon.png`: square icon version of the logo
- [ ] `favicon.png`: small square icon
- [ ] `assets/img/logo/og-image.jpg`: social preview image, 1200 x 630 px
- [ ] `assets/img/portfolio/`: add 16:9 thumbnails (JPG or WebP, under about 300 KB each)

**Store links**
- [ ] Search `data-store="fab"` and replace the `href="#"` before it with your Fab URL
- [ ] Search `data-store="unity"` and replace the `href="#"` before it with your Unity Asset Store URL
- [ ] Easiest way: find `href="#" data-store="fab"` and replace with `href="https://YOUR-FAB-URL" data-store="fab"` (same for Unity)

**Contact and socials**
- [ ] Search `studio@example.com` and replace with your studio email (every page)
- [ ] Search `data-social=` and replace each `href="#"` with your profile URL. Delete the list items for any profile you do not have (Instagram, YouTube, ArtStation, itch.io). Footer on every page, plus the About page.

**Address**
- [ ] Search `YOURUSERNAME.github.io` and replace with your real address. It is used in the Open Graph tags on every page.

**Text**
- [ ] `index.html`: confirm the tagline (currently "Slow-crafted assets, built to ship fast") and the "Why Dozy Pixel" points. Keep only what you consistently deliver.
- [ ] `about/index.html`: art style label, tools you really use, and anything about the team (only if true)
- [ ] `support/index.html`: response time you can truly keep, plus documentation links as you publish them
- [ ] `portfolio/index.html`: replace the six Coming soon cards with real assets; edit the engine badges to match each asset
- [ ] `privacy/index.html`: add a "last updated" date, and update it if you ever add analytics or embed YouTube videos
- [ ] Search `PLACEHOLDER` in all files. Nothing with that word should remain on a live page.

## Notes

- **Unity Publisher Portal:** put your home page address in Website, and your Support page address plus your support email in Customer Support.
- **404 page:** `404.html` uses paths starting with `/`, because GitHub Pages shows it at any address. This works for a `username.github.io` site. If you later host in a sub-folder, change those paths.
- **Custom domain later:** add it under Settings > Pages > Custom domain, then update your store profiles and the `YOURUSERNAME.github.io` address in the Open Graph tags.
- **Fonts:** Fredoka and Nunito load from Google Fonts. The privacy page mentions this. If you want zero external requests, download the fonts and host them in `assets/`.
- **YouTube turntables:** an example embed is commented out in `portfolio/index.html`.
- **Logos and badges:** the site uses plain text links for Fab and Unity. Check each platform's brand guidelines before adding their logos or badges.
