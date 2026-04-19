const fs = require('fs');

// Load the database
const musicData = JSON.parse(fs.readFileSync('./music.json', 'utf-8'));

function buildSite() {
    musicData.forEach(item => {
        // 1. Create Folder Structure
        if (item.release_type === "Album") {
            const albumPath = `./${item.slug}`;
            if (!fs.existsSync(albumPath)) fs.mkdirSync(albumPath);
            
            // Create the Album Landing Page (Tracklist)
            const albumHtml = generateAlbumTemplate(item);
            fs.writeFileSync(`${albumPath}/index.html`, albumHtml);
        }

        if (item.release_type === "Album Track") {
            const albumPath = `./${item.album_name}`;
            if (!fs.existsSync(albumPath)) fs.mkdirSync(albumPath);
            
            // Create Individual Track Page
            const trackHtml = generateTrackTemplate(item);
            fs.writeFileSync(`${albumPath}/${item.slug}.html`, trackHtml);
        }

        if (item.release_type === "Single") {
            if (!fs.existsSync('./single')) fs.mkdirSync('./single');
            
            // Create Single Page
            const singleHtml = generateTrackTemplate(item);
            fs.writeFileSync(`./single/${item.slug}.html`, singleHtml);
        }
    });
    console.log("Site build complete: Directories and HTML files synced.");
}

// Minimalist Noir Template for Tracks/Singles
function generateTrackTemplate(item) {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${item.title} // DoubleU</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="/style.css">
</head>
<body class="bg-[#050505] text-[#eee]">
    <div class="film-grain"></div>
    <nav class="p-6"><a href="/music" class="text-[#FF5F1F] font-bold tracking-widest text-xs uppercase">← Back to Catalog</a></nav>
    <main class="flex flex-col items-center justify-center min-h-[80vh] px-6 text-center">
        <img src="${item.cover_url}" class="w-64 h-64 md:w-96 md:h-96 object-cover mb-8 shadow-2xl border border-white/10">
        <h1 class="text-4xl md:text-6xl font-black italic uppercase tracking-tighter mb-2">${item.title}</h1>
        <p class="text-cyan-400 text-[10px] uppercase tracking-[0.4em] mb-8">${item.release_type}</p>
        <div class="flex gap-4">
            ${item.links.spotify !== "NULL" ? `<a href="${item.links.spotify}" class="px-6 py-3 border border-white/20 text-[10px] font-bold uppercase hover:bg-white hover:text-black transition">Spotify</a>` : ''}
            ${item.links.youtube !== "NULL" ? `<a href="${item.links.youtube}" class="px-6 py-3 border border-white/20 text-[10px] font-bold uppercase hover:bg-white hover:text-black transition">YouTube</a>` : ''}
        </div>
    </main>
</body>
</html>`;
}

// Template for Album Hubs
function generateAlbumTemplate(album) {
    const tracks = musicData.filter(t => t.album_name === album.slug).sort((a, b) => a.track_number - b.track_number);
    const trackListHtml = tracks.map(t => `
        <a href="${t.site_url}" class="flex justify-between items-center p-4 border-b border-white/5 hover:bg-white/5 transition">
            <span class="text-xs text-gray-500 italic">${String(t.track_number).padStart(2, '0')}</span>
            <span class="font-bold uppercase tracking-widest text-sm">${t.title}</span>
            <span class="text-[9px] text-cyan-400">VIEW //</span>
        </a>
    `).join('');

    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${album.title} // DoubleU</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="/style.css">
</head>
<body class="bg-[#050505] text-[#eee] p-6 md:p-10">
    <div class="film-grain"></div>
    <div class="max-w-4xl mx-auto">
        <header class="flex flex-col md:flex-row gap-10 items-center mb-16">
            <img src="${album.cover_url}" class="w-64 h-64 object-cover shadow-2xl">
            <div class="text-center md:text-left">
                <h1 class="text-6xl font-black italic uppercase tracking-tighter text-[#FF5F1F]">${album.title}</h1>
                <p class="text-[10px] text-gray-500 uppercase tracking-widest mt-2">Full Project // ${album.release_date}</p>
            </div>
        </header>
        <div class="space-y-2">${trackListHtml}</div>
    </div>
</body>
</html>`;
}

buildSite();
