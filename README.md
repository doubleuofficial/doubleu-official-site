# DoubleU - Static HTML Website

A pure HTML/CSS/JavaScript website for DoubleU, the soul-trap and pain-rap artist.

## 📁 Project Structure

```
doubleu-html/
├── index.html              # Home page
├── css/
│   └── style.css          # Main stylesheet
├── js/
│   └── main.js            # JavaScript functionality
├── pages/
│   ├── music.html         # Music discography
│   ├── about.html         # Artist biography
│   ├── contact.html       # Contact form
│   ├── album/             # Album detail pages
│   └── single/            # Single detail pages
├── assets/                # Images and media
└── README.md              # This file
```

## 🚀 Features

✅ **Mobile-First Design** - Responsive on all devices
✅ **No Build Process** - Pure HTML/CSS/JavaScript
✅ **Fast Loading** - No dependencies or frameworks
✅ **SEO Friendly** - Semantic HTML structure
✅ **Accessible** - WCAG compliant
✅ **Dark Theme** - Modern dark minimalism design
✅ **Smooth Navigation** - Mobile hamburger menu
✅ **Countdown Timer** - Release date countdown
✅ **Contact Form** - Simple contact functionality
✅ **Streaming Links** - Direct links to all platforms

## 📖 Getting Started

### Local Development

1. **Open in Browser**
   ```bash
   # Simply open index.html in your browser
   # Or use a local server:
   python -m http.server 8000
   # Visit: http://localhost:8000
   ```

2. **File Structure**
   - All pages are independent HTML files
   - CSS is shared across all pages
   - JavaScript handles interactivity

### Customization

**Update Artist Info:**
- Edit content in HTML files directly
- Update social links in footer sections
- Modify streaming platform URLs

**Change Colors:**
- Edit CSS variables in `css/style.css`
- Modify the `:root` section at the top

**Add New Pages:**
- Create new `.html` file in `pages/` directory
- Copy navigation structure from existing pages
- Link from main navigation

## 🌐 Deployment Options

### Option 1: GitHub Pages (Free)

1. Create GitHub repository
2. Push HTML files
3. Enable GitHub Pages in settings
4. Your site is live at `https://username.github.io/doubleu-html`

### Option 2: Netlify (Free)

1. Connect GitHub repository
2. Set build command: (leave empty)
3. Set publish directory: `/`
4. Deploy

### Option 3: Vercel (Free)

1. Import GitHub repository
2. Select framework: Other (Static)
3. Deploy

### Option 4: Traditional Hosting

1. Upload files via FTP/SFTP
2. No build process needed
3. Works on any web server

## 📝 Pages

### Home (`index.html`)
- Hero section with countdown timer
- Featured release showcase
- Latest releases grid
- About preview
- Call-to-action buttons

### Music (`pages/music.html`)
- Albums section
- Singles section
- Streaming platform links
- Project detail links

### About (`pages/about.html`)
- Artist biography
- Sound philosophy (Soul-Trap, Melodic Pain, Urban Grit)
- Musical influences
- Statistics

### Contact (`pages/contact.html`)
- Contact form
- Email address
- Social media links
- Streaming platform links
- Business inquiry email

## 🎨 Design System

### Colors
- **Primary Background**: `#050505` (Deep Black)
- **Secondary Background**: `#0a0a0a` (Dark Gray)
- **Accent Color**: `#007bff` (Electric Blue)
- **Text Primary**: `#ffffff` (White)
- **Text Secondary**: `#b0b0b0` (Light Gray)

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)
- **Font Sizes**: Responsive with `clamp()`

### Spacing
- Mobile-first approach
- Responsive padding and margins
- Consistent grid system

## 🔧 Customization Guide

### Update Navigation
Edit the navbar in each HTML file:
```html
<ul class="nav-menu" id="navMenu">
    <li class="nav-item">
        <a href="path/to/page.html" class="nav-link">Link Name</a>
    </li>
</ul>
```

### Add Streaming Links
Update the streaming buttons:
```html
<a href="https://open.spotify.com/track/YOUR_ID" class="streaming-btn spotify" target="_blank">Spotify</a>
```

### Modify Colors
Edit CSS variables in `css/style.css`:
```css
:root {
    --accent-primary: #007bff;
    --bg-primary: #050505;
    /* ... other variables */
}
```

### Update Footer
Edit the footer section in each HTML file:
```html
<footer class="footer">
    <!-- Footer content -->
</footer>
```

## 📱 Mobile Optimization

- Hamburger menu for screens < 768px
- Responsive grid layouts
- Touch-friendly buttons (min 44px)
- Optimized font sizes
- Flexible images

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Color contrast compliance
- Focus states for all interactive elements

## 📊 Performance

- No external dependencies
- Minimal CSS (~15KB)
- Minimal JavaScript (~8KB)
- Optimized images
- Fast page load times

## 🔒 Security

- No backend required
- No database
- No user data collection
- Safe for static hosting
- No vulnerabilities from dependencies

## 🐛 Troubleshooting

### Pages not loading
- Check file paths are relative (`../`)
- Ensure all files are in correct directories
- Use local server instead of file:// protocol

### Styles not applying
- Clear browser cache (Ctrl+Shift+Delete)
- Check CSS file path is correct
- Verify CSS variables are defined

### Navigation not working
- Check links point to correct file paths
- Verify hamburger menu JavaScript is loaded
- Test on different browsers

## 📚 Resources

- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS Tricks](https://css-tricks.com/)
- [Web Accessibility Guidelines](https://www.w3.org/WAI/)

## 📄 License

© 2026 DoubleU. All rights reserved.

---

**Built with HTML, CSS, and Vanilla JavaScript**
**No frameworks. No build process. Pure web.**
