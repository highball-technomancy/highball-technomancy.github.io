# Highball Technomancy

**Binary Spirits, Digital Alchemy** ✨🥃

Official website for Highball Technomancy - building AI-powered tools for the adventurous.

## 🚀 Live Site

Visit us at: [technomancyai.com](https://technomancyai.com)

## 🛠️ Tech Stack

- **Framework:** [Astro](https://astro.build) (static site generator)
- **Styling:** [Tailwind CSS](https://tailwindcss.com) (utility-first CSS)
- **Deployment:** GitHub Pages
- **Custom Features:** 
  - Animated SVG logo (highball glass with neon tech elements)
  - Particle background animation (binary code floating)
  - Smooth scroll navigation
  - Glassmorphism effects
  - Neon glow hover states

## 📦 Installation

1. **Install dependencies:**
```bash
npm install
```

2. **Run development server:**
```bash
npm run dev
```
Visit `http://localhost:4321` to see the site locally.

## 🏗️ Building for Production

To build the site and generate static files in the `/docs` directory:

```bash
npm run build
```

This will create optimized HTML/CSS/JS in the `/docs` folder, which GitHub Pages will serve.

## 🚢 Deployment

The site auto-deploys to GitHub Pages:

1. Push changes to the `main` branch
2. GitHub Pages automatically serves from the `/docs` directory
3. Custom domain configured via `docs/CNAME`

### Manual Deploy (if needed)
```bash
npm run build
git add docs/
git commit -m "Deploy updated site"
git push origin main
```

## 📁 Project Structure

```
/
├── src/
│   ├── components/       # Reusable Astro components
│   │   ├── Logo.astro           # Animated SVG logo
│   │   ├── Navigation.astro     # Top nav with smooth scroll
│   │   ├── Hero.astro           # Hero section with particles
│   │   ├── ProductCard.astro    # Product showcase cards
│   │   └── Footer.astro         # Site footer
│   ├── layouts/
│   │   └── Layout.astro  # Base HTML layout
│   ├── pages/
│   │   └── index.astro   # Homepage (all sections)
│   └── styles/
│       └── global.css    # Global styles + neon utilities
├── docs/                 # Build output (GitHub Pages serves from here)
│   └── CNAME            # Custom domain config
├── astro.config.mjs     # Astro configuration
├── tailwind.config.mjs  # Tailwind configuration
└── package.json         # Dependencies
```

## 🎨 Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Neon Green | `#00c853` | Primary brand color, CTAs |
| Neon Purple | `#a855f7` | Secondary accent |
| Purple Light | `#c084fc` | Highlights, details |
| Cyan | `#00e5ff` | Tech elements, data viz |
| Red | `#ff4444` | Warnings, errors |
| Orange | `#ff9800` | Status indicators |
| Pure Black | `#000000` | Main background |
| Dark Grey | `#1c1c1e` | Panels, cards |
| Dark Blue | `#101221` | Section backgrounds |

## 🧩 Adding New Products

To add a new product to the showcase:

1. Edit `src/pages/index.astro`
2. Add a new `<ProductCard>` component in the Products section:

```astro
<ProductCard
  title="Your Product Name"
  description="What it does..."
  status="In Development" // or "Beta", "Live", "Coming Soon"
  techStack={['React', 'Python', 'etc']}
  githubUrl="https://github.com/..."
  icon="🔥"
>
  <!-- Optional additional content -->
</ProductCard>
```

## 🎯 Logo Design

The logo is a custom SVG featuring:
- Highball glass outline (neon green)
- Ice cubes with circuit board patterns (cyan)
- Neural network nodes and connections (purple)
- Binary code bubbles (0s and 1s) that animate upward
- Glow effects on hover

To customize the logo, edit `src/components/Logo.astro`.

## 📝 Content Updates

### Tagline
Current: **"Binary Spirits, Digital Alchemy"**

To change, edit `src/components/Hero.astro`:
```astro
<p class="text-2xl md:text-3xl text-gray-300 mb-4 fade-in glow-purple">
  Your New Tagline Here
</p>
```

### About Section
Edit the "What is Highball Technomancy?" section in `src/pages/index.astro`.

### Contact Info
Update links in `src/components/Footer.astro` and `src/pages/index.astro` (Contact section).

## 🐛 Troubleshooting

**Port already in use:**
```bash
# Kill process on port 4321
npx kill-port 4321
npm run dev
```

**Build fails:**
```bash
# Clear Astro cache
rm -rf .astro
npm run build
```

**GitHub Pages not updating:**
- Check that `/docs` folder is committed
- Verify `docs/CNAME` contains `technomancyai.com`
- Check GitHub Pages settings: Settings → Pages → Source = `/docs`

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🤝 Contributing

This is the official website for Highball Technomancy. For product-specific contributions, see individual project repositories:

- [Permafrost](https://github.com/highball-technomancy/Permafrost) - Grid trading bot

---

Made with ❄️ and 🥃 by the Highball Technomancy team
