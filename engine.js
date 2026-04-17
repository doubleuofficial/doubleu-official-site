async function init() {
    try {
        // 1. Fetch Data
        const [musicRes, configRes] = await Promise.all([
            fetch('/music.json'),
            fetch('/config.json')
        ]);
        
        const music = await musicRes.json();
        const config = await configRes.json();

        // 2. Sort Music: Newest First
        music.sort((a, b) => new Date(b.release_date) - new Date(a.release_date));

        // 3. Route Rendering
        if (document.getElementById('most-streamed-grid')) renderHome(music, config);
        if (document.getElementById('singles-grid')) renderMusic(music);
        
        applyConfig(config);
        initVisuals();
    } catch (e) { console.error("Engine Error:", e); }
}

function applyConfig(config) {
    document.querySelectorAll('.social-spotify').forEach(el => el.href = config.socials.spotify);
    document.querySelectorAll('.social-apple').forEach(el => el.href = config.socials.apple);
    document.querySelectorAll('.social-youtube').forEach(el => el.href = config.socials.youtube);
    const mgmt = document.getElementById('mgmt-email');
    if (mgmt) mgmt.innerText = config.brand.email;
}

function renderHome(music, config) {
    const grid = document.getElementById('most-streamed-grid');
    const shuffled = [...music].sort(() => 0.5 - Math.random()).slice(0, 3);
    grid.innerHTML = shuffled.map(item => `
        <div class="space-y-4 group">
            <div class="overflow-hidden rounded-lg border border-white/5">
                <img src="${item.cover_url}" class="w-full aspect-square object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700">
            </div>
            <h4 class="text-[10px] uppercase tracking-[0.3em] text-center text-gray-500">${item.title}</h4>
        </div>
    `).join('');
}

function renderMusic(music) {
    const albumContainer = document.getElementById('featured-album-container');
    const singlesGrid = document.getElementById('singles-grid');

    const album = music.find(m => m.type === "Album");
    if (album && albumContainer) {
        albumContainer.innerHTML = `
            <div class="flex flex-col md:flex-row gap-12 p-8 border border-white/10 rounded-2xl bg-white/[0.02]">
                <img src="${album.cover_url}" class="w-full md:w-1/2 aspect-square object-cover rounded-lg shadow-2xl">
                <div class="flex flex-col justify-center space-y-4">
                    <h2 class="text-5xl font-black italic tracking-tighter">${album.title}</h2>
                    <p class="text-cyan-400 text-[10px] tracking-[0.4em] uppercase font-bold">Featured Project • ${new Date(album.release_date).getFullYear()}</p>
                    <a href="${album.path}" class="bg-white text-black py-4 px-8 rounded-full font-bold text-[10px] uppercase tracking-widest text-center hover:bg-cyan-400 transition-colors">View Details</a>
                </div>
            </div>`;
    }

    const singles = music.filter(m => m.type === "Single");
    if (singlesGrid) {
        singlesGrid.innerHTML = singles.map(item => `
            <a href="${item.path}" class="group block space-y-2">
                <div class="relative overflow-hidden rounded-lg border border-white/5 group-hover:border-cyan-500/50 transition-all">
                    <img src="${item.cover_url}" class="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-500">
                    <div class="absolute top-2 left-2 bg-black/80 px-2 py-1 text-[7px] text-cyan-400 font-bold uppercase tracking-widest">${new Date(item.release_date).getFullYear()}</div>
                </div>
                <h3 class="text-[9px] uppercase tracking-[0.2em] truncate text-gray-400 group-hover:text-white">${item.title}</h3>
            </a>
        `).join('');
    }
}

function initVisuals() {
    const cursor = document.getElementById('cursor');
    document.addEventListener('mousemove', e => {
        if(cursor) {
            cursor.style.left = e.clientX - 10 + 'px';
            cursor.style.top = e.clientY - 10 + 'px';
        }
    });
    
    document.querySelectorAll('a').forEach(link => {
        if (link.hostname === window.location.hostname && !link.hash) {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                document.body.classList.add('is-transitioning');
                setTimeout(() => window.location.href = link.href, 500);
            });
        }
    });
}

document.addEventListener('DOMContentLoaded', init);
