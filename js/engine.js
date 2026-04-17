const _supabaseUrl = 'https://xpwgzassajhmlqrjyyon.supabase.co';
const _supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhwd2d6YXNzYWpobWxxcmp5eW9uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYyMzIyNTYsImV4cCI6MjA5MTgwODI1Nn0.yuizzF45EItmSe224LutMGNoGcUsgLCUWu-zXVU6o9g';
const supabase = supabase.createClient(_supabaseUrl, _supabaseKey);

// 1. Load Global Config (Logo, Socials, Meta)
async function loadSiteConfig() {
    const { data, error } = await supabase.from('site_config').select('*');
    if (data) {
        data.forEach(conf => {
            const element = document.getElementById(`config-${conf.key}`);
            if (element) {
                if (element.tagName === 'A') element.href = conf.value;
                else element.innerText = conf.value;
            }
        });
    }
}

// 2. Load Music Catalog (For music.html)
async function loadCatalog() {
    const grid = document.getElementById('catalog-grid');
    if (!grid) return;

    const { data: music, error } = await supabase
        .from('music_catalog')
        .select('*')
        .order('release_date', { ascending: false });

    if (music) {
        grid.innerHTML = music.map(item => `
            <a href="/${item.path}" class="group block bg-white/5 p-4 rounded-2xl border border-white/5 hover:border-cyan-400 transition">
                <img src="${item.cover_url}" class="w-full aspect-square object-cover rounded-lg mb-4 grayscale group-hover:grayscale-0 transition duration-500">
                <h3 class="font-bold uppercase tracking-tighter">${item.title}</h3>
                <p class="text-[9px] text-gray-500 uppercase tracking-widest mt-1">${item.genre} • ${item.type}</p>
            </a>
        `).join('');
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadSiteConfig();
    loadCatalog();
});
