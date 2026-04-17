const supabaseUrl = 'https://xpwgzassajhmlqrjyyon.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhwd2d6YXNzYWpobWxxcmp5eW9uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYyMzIyNTYsImV4cCI6MjA5MTgwODI1Nn0.yuizzF45EItmSe224LutMGNoGcUsgLCUWu-zXVU6o9g';
const _supabase = supabase.createClient(supabaseUrl, supabaseKey);

async function init() {
    const { data: music, error } = await _supabase
        .from('music_catalog')
        .select('*')
        .order('release_date', { ascending: false });

    if (error) return console.error(error);

    renderMusicPage(music);
    renderHomePage(music);
}

function renderMusicPage(music) {
    const albumContainer = document.getElementById('featured-album-container');
    const singlesGrid = document.getElementById('singles-grid');
    if (!albumContainer || !singlesGrid) return;

    // 1. Find the Album (Faded 405)
    const album = music.find(item => item.type === 'Album');
    if (album) {
        albumContainer.innerHTML = `
            <div class="flex flex-col md:flex-row gap-12 p-8 border border-white/10 rounded-2xl album-card">
                <img src="${album.cover_url}" class="w-full md:w-1/2 aspect-square object-cover rounded-lg shadow-2xl">
                <div class="flex flex-col justify-center space-y-6">
                    <h2 class="text-6xl font-black italic tracking-tighter">${album.title}</h2>
                    <p class="text-gray-400 uppercase tracking-widest text-sm font-bold">Full Length Project</p>
                    <a href="${album.path}" class="inline-block bg-white text-black text-center py-4 px-8 rounded-full font-bold uppercase tracking-widest hover:bg-cyan-400 transition-colors">View Album Details</a>
                </div>
            </div>`;
    }

    // 2. Render Singles
    const singles = music.filter(item => item.type === 'Single');
    singlesGrid.innerHTML = singles.map(item => `
        <a href="${item.path}" class="group block space-y-4">
            <div class="relative aspect-square overflow-hidden rounded-lg border border-white/5 group-hover:border-cyan-500/50 transition-all">
                <img src="${item.cover_url}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
            </div>
            <h3 class="font-bold truncate text-sm uppercase tracking-wider">${item.title}</h3>
        </a>
    `).join('');
}

function renderHomePage(music) {
    const randomGrid = document.getElementById('most-streamed-grid');
    if (!randomGrid) return;

    // Pick 3 random tracks for "Most Streamed"
    const shuffled = [...music].sort(() => 0.5 - Math.random()).slice(0, 3);
    randomGrid.innerHTML = shuffled.map(item => `
        <div class="text-center space-y-4">
            <img src="${item.cover_url}" class="w-full aspect-square object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-700">
            <h4 class="font-bold text-xs uppercase tracking-[0.2em]">${item.title}</h4>
        </div>
    `).join('');
}

document.addEventListener('DOMContentLoaded', init);
