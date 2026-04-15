# DoubleU Singles - Design & Navigation Guide

## Project Overview

The DoubleU website is a **pure static HTML/CSS/JavaScript** site featuring a dark minimalism aesthetic with neon blue accents. The site now includes **9 custom-styled single pages**, each with unique visual themes inspired by their album artwork.

---

## Single Pages & Custom Themes

### 1. **Cold Sheets, Wide Eyes**
- **URL:** `/pages/singles/cold-sheets-wide-eyes.html`
- **Theme:** Ethereal & Moody
- **Primary Color:** Teal (#1a3a4a)
- **Accent Color:** Pink (#ff6b9d)
- **Inspiration:** Ghostly, intimate bedroom aesthetic with ethereal glows
- **Animation:** Soft ethereal glow pulse (8s cycle)

### 2. **Fading Out**
- **URL:** `/pages/singles/fading-out.html`
- **Theme:** Cinematic Black & White
- **Primary Color:** Dark (#1a1a1a)
- **Accent Color:** Cyan (#00d4ff)
- **Inspiration:** Urban solitude, rain-soaked city reflection
- **Animation:** Cinematic pulse effect (6s cycle)

### 3. **Found You In The Rain Fall**
- **URL:** `/pages/singles/found-you-in-the-rain-fall.html`
- **Theme:** Warm & Intense
- **Primary Color:** Deep Brown (#2a1810)
- **Accent Color:** Orange (#ff8c42)
- **Inspiration:** Warm, intimate connection in chaos
- **Animation:** Warm glow effect (7s cycle)

### 4. **Aint New To Me**
- **URL:** `/pages/singles/aint-new-to-me.html`
- **Theme:** Neon Energy
- **Primary Color:** Deep Blue (#0a1428)
- **Accent Color:** Neon Green (#00ff88)
- **Inspiration:** Confident neon car silhouette
- **Animation:** Neon pulse with dual-color glow (6s cycle)

### 5. **Two Of Us**
- **URL:** `/pages/singles/two-of-us.html`
- **Theme:** Tender & Intimate
- **Primary Color:** Deep Purple (#1a1a2e)
- **Accent Color:** Hot Pink (#ff69b4)
- **Inspiration:** Intimate hands together, vulnerability
- **Animation:** Tender glow effect (8s cycle)

### 6. **Real Life Trauma**
- **URL:** `/pages/singles/real-life-trauma.html`
- **Theme:** Raw & Visceral
- **Primary Color:** Deep Red (#1a0f0f)
- **Accent Color:** Bright Red (#ff4444)
- **Inspiration:** Raw emotional scars and tattoos
- **Animation:** Raw pulse effect (7s cycle)

### 7. **Trippin'** (feat. Papa Metree)
- **URL:** `/pages/singles/trippin.html`
- **Theme:** Ethereal & Abstract
- **Primary Color:** Deep Blue (#0a1a3a)
- **Accent Color:** Cyan (#00d9ff)
- **Inspiration:** Blue neon abstract, altered perspectives
- **Animation:** Ethereal float effect (8s cycle)

### 8. **Fresh**
- **URL:** `/pages/singles/fresh.html`
- **Theme:** Vibrant & Energetic
- **Primary Color:** Deep Green (#0a2a1a)
- **Accent Color:** Neon Green (#00ff99)
- **Inspiration:** Energetic renewal, neon vibes
- **Animation:** Vibrant pulse effect (6s cycle)

### 9. **A Place To Land**
- **URL:** `/pages/singles/a-place-to-land.html`
- **Theme:** Warm & Peaceful
- **Primary Color:** Deep Brown (#2a1a0a)
- **Accent Color:** Warm Orange (#ffb366)
- **Inspiration:** Sunset silhouettes, peaceful acceptance
- **Animation:** Sunset glow effect (8s cycle)

---

## Navigation Structure

### Main Navigation (All Pages)
- **Home** → `/index.html`
- **Music** → `/pages/music.html`
  - Dropdown: Albums
  - Dropdown: Singles
- **About** → `/pages/about.html`
- **Contact** → `/pages/contact.html`

### Music Page Links
The Music page (`/pages/music.html`) contains:
- **Albums Section** - Links to album details
- **Singles Section** - Grid of 9 singles, each linking to their dedicated page

Each single card on the Music page includes:
- Album artwork image
- Title and description
- "View Project" link (navigates to single page)
- Streaming buttons (Spotify, Apple Music, YouTube)

---

## Single Page Structure

Each single page follows this layout:

1. **Navigation Bar** - Consistent across all pages
2. **Hero Section** - Large title with custom theme background
3. **Single Details** - Two-column grid:
   - Left: Album artwork (sticky on desktop)
   - Right: Track info card with:
     - Title & type
     - Description
     - Streaming buttons
     - Track metadata (artist, release date, genre)
4. **About Section** - Narrative description of the track
5. **Footer** - Links and social media

---

## Design System

### Color Palette
- **Background:** Near-black (#050505)
- **Secondary BG:** Slightly lighter (#111111)
- **Text Primary:** White (#ffffff)
- **Text Secondary:** Light gray (rgba(255,255,255,0.7))
- **Borders:** Subtle accent color at 20-30% opacity

### Typography
- **Headings:** Playfair Display (serif, 700 weight)
- **Body:** Inter (sans-serif, 300-600 weight)
- **Sizes:** Responsive with clamp() for fluid scaling

### Spacing & Layout
- **Mobile-first approach** with min-width media queries
- **Breakpoints:** 480px, 768px, 1024px
- **Container:** Max-width 1200px with responsive padding
- **Grid:** Auto-fill with minmax() for responsive columns

### Interactive Elements
- **Hover states:** Subtle color shifts and elevation
- **Transitions:** 0.3s ease for smooth interactions
- **Animations:** 6-8s infinite loops for background glows
- **Mobile:** Touch-friendly button sizes (min 44px)

---

## Streaming Links

All single pages include streaming buttons for:
- **Spotify** - Green (#1DB954)
- **Apple Music** - Gray (#555555)
- **YouTube** - Red (#FF0000)

**Note:** These are currently placeholder URLs. Replace with actual streaming links:
- `https://open.spotify.com/track/[TRACK_ID]`
- `https://music.apple.com/track/[TRACK_ID]`
- `https://www.youtube.com/watch?v=[VIDEO_ID]`

---

## File Structure

```
doubleu-html/
├── index.html                          # Home page
├── pages/
│   ├── music.html                      # Music discography
│   ├── about.html                      # Artist bio
│   ├── contact.html                    # Contact form
│   └── singles/
│       ├── cold-sheets-wide-eyes.html
│       ├── fading-out.html
│       ├── found-you-in-the-rain-fall.html
│       ├── aint-new-to-me.html
│       ├── two-of-us.html
│       ├── real-life-trauma.html
│       ├── trippin.html
│       ├── fresh.html
│       └── a-place-to-land.html
├── css/
│   └── style.css                       # Global styles (~15KB)
├── js/
│   └── main.js                         # Navigation & interactions
├── assets/
│   ├── 240.webp - 251.webp             # Album artwork
│   ├── cold-sheets.png                 # Cold Sheets artwork
│   └── fading-out.webp                 # Fading Out artwork
└── README.md
```

---

## Responsive Design

### Mobile (< 480px)
- Single column layout
- Hamburger navigation
- Full-width images
- Stacked buttons

### Tablet (480px - 768px)
- 2-column music grid
- Adjusted spacing
- Optimized touch targets

### Desktop (> 768px)
- Full 2-column detail layout
- Sticky artwork sidebar
- Hover effects on cards
- Dropdown navigation

---

## Customization Guide

### Changing Single Page Colors
1. Open the single page HTML
2. Find the `<style>` section
3. Update the CSS variables at the top:
   ```css
   .single-[theme-name] {
       --theme-primary: #new-color;
       --theme-accent: #new-color;
       --theme-light: #new-color;
   }
   ```

### Adding New Singles
1. Create new HTML file in `/pages/singles/`
2. Copy template from existing single page
3. Update:
   - Title and subtitle
   - Color scheme
   - Artwork image path
   - Description text
   - Streaming links
4. Add link to Music page

### Updating Streaming Links
1. Open the single page HTML
2. Find the `.streaming-buttons` section
3. Replace placeholder URLs with real links:
   ```html
   <a href="https://open.spotify.com/track/YOUR_TRACK_ID" ...>
   ```

---

## Performance Notes

- **Image Optimization:** All artwork is WebP format (smaller file size)
- **CSS:** Single global stylesheet + inline styles per page
- **JavaScript:** Minimal - only for navigation and interactions
- **No Build Process:** Pure HTML/CSS/JS - no compilation needed
- **Fast Loading:** Static files serve instantly

---

## Browser Support

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support
- Mobile browsers: Full support with responsive design

---

## Deployment

This is a **static HTML site** - deploy to:
- **Vercel** (recommended)
- **Netlify**
- **GitHub Pages**
- **Any FTP host**

No backend or build process required!

---

## Future Enhancements

Potential additions:
- Lyrics display on single pages
- Audio player embeds
- Social sharing buttons
- Analytics tracking
- Newsletter signup
- Merchandise store integration
