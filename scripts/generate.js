const fs = require('fs');
const path = require('path');

// Load the new database
const musicData = JSON.parse(fs.readFileSync('./music.json', 'utf-8'));

function buildSite() {
    musicData.forEach(item => {
        const fullPath = path.join('.', item.site_path);
        const dir = item.type === "Album" ? fullPath : path.dirname(fullPath);
        
        // Ensure directories exist
        if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

        let htmlContent = "";

        if (item.type === "Album") {
            htmlContent = generateAlbumTemplate(item);
            fs.writeFileSync(path.join(fullPath, 'index.html'), htmlContent);
        } else {
            htmlContent = generateTrackTemplate(item);
            const fileName = item.type === "Album Track" ? `${item.slug}.html` : `${path.basename(item.site_path)}.html`;
            fs.writeFileSync(path.join(dir, fileName), htmlContent);
        }
    });
    console.log("Build Success: All .html pages generated based on new schema.");
}

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
<body class="bg-[#050505] text-[#eee] selection:bg-cyan-500">
    <div class="film-grain"></div>
    <nav class="p-6">
        <a href="/music" class="text-[#FF5F1F] font-bold tracking-widest text-[10px] uppercase hover:text-white transition">← Back to Catalog</a>
    </nav>
    <main class="flex flex-col items-center justify-center min-h-[80vh] px-6 text-center">
        <div class="relative group">
            <img src="${item.image_path}" class="w-64 h-64 md:w-96 md:h-96 object-cover mb-8 shadow-2xl border border-white/10 transition-transform duration-700 group-hover:scale-[1.02]">
            ${item.audio_path ? `<div class="absolute bottom-12 left-0 right-0 px-4"><audio controls class="w-full opacity-30 hover:opacity-100 transition-opacity"><source src="${item.audio_path}" type="audio/wav"></audio></div>` : ''}
        </div>
        
        <h1 class="text-4xl md:text-6xl font-black italic uppercase tracking-tighter mb-2">${item.title}</h1>
        ${item.featured_artist ? `<p class="text-gray-400 text-xs uppercase tracking-widest mb-4">ft. ${item.featured_artist}</p>` : ''}
        
        <p class="text-cyan-400 text-[10px] uppercase tracking-[0.4em] mb-8">
            ${item.type} // Released ${item.release_date}
        </p>

        <div class="flex flex-wrap justify-center gap-4">
            ${item.spotify_link ? `<a href="${item.spotify_link}" class="px-6 py-3 border border-white/20 text-[10px] font-bold uppercase hover:bg-white hover:text-black transition">Spotify</a>` : ''}
            ${item.apple_link ? `<a href="${item.apple_link}" class="px-6 py-3 border border-white/20 text-[10px] font-bold uppercase hover:bg-white hover:text-black transition">Apple Music</a>` : ''}
            ${item.youtube_link ? `<a href="${item.youtube_link}" class="px-6 py-3 border border-white/20 text-[10px] font-bold uppercase hover:bg-white hover:text-black transition">YouTube</a>` : ''}
        </div>
    </main>
</body>
</html>`;
}

function generateAlbumTemplate(album) {
    const tracks = musicData.filter(t => t.album_name === album.title && t.type === "Album Track").sort((a, b) => a.track_no - b.track_no);
    
    const trackListHtml = tracks.map(t => `
        <a href="${t.site_path}" class="flex justify-between items-center p-5 border-b border-white/5 hover:bg-white/5 transition-all group">
            <div class="flex items-center gap-4">
                <span class="text-xs text-gray-600 font-mono">${String(t.track_no).padStart(2, '0')}</span>
                <span class="font-bold uppercase tracking-widest text-sm group-hover:text-cyan-400">${t.title}</span>
            </div>
            <span class="text-[9px] text-gray-500 group-hover:text-white transition-colors">PLAY //</span>
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
        <header class="flex flex-col md:flex-row gap-12 items-center mb-16 mt-10">
            <img src="${album.image_path}" class="w-72 h-72 object-cover shadow-2xl border border-white/10">
            <div class="text-center md:text-left">
                <p class="text-[#FF5F1F] text-[10px] font-bold uppercase tracking-[0.5em] mb-4">Official Album</p>
                <h1 class="text-6xl md:text-8xl font-black italic uppercase tracking-tighter mb-4">${album.title}</h1>
                <p class="text-xs text-gray-500 uppercase tracking-widest">Released ${album.release_date}</p>
                <div class="flex gap-4 mt-8 justify-center md:justify-start">
                    ${album.spotify_link ? `<a href="${album.spotify_link}" class="text-xs font-bold hover:text-cyan-400 transition">SPOTIFY</a>` : ''}
                    ${album.apple_link ? `<a href="${album.apple_link}" class="text-xs font-bold hover:text-cyan-400 transition">APPLE</a>` : ''}
                </div>
            </div>
        </header>
        <div class="border-t border-white/10">
            ${trackListHtml}
        </div>
    </div>
</body>
</html>`;
}

buildSite();
