const _supabaseUrl = 'https://xpwgzassajhmlqrjyyon.supabase.co';
const _supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhwd2d6YXNzYWpobWxxcmp5eW9uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYyMzIyNTYsImV4cCI6MjA5MTgwODI1Nn0.yuizzF45EItmSe224LutMGNoGcUsgLCUWu-zXVU6o9g';
const supabase = supabase.createClient(_supabaseUrl, _supabaseKey);

async function syncSite() {
    // 1. Sync Site Configuration (Bio, Images, Socials)
    const { data: config } = await supabase.from('site_config').select('*');
    if (config) {
        config.forEach(item => {
            const el = document.getElementById(`config-${item.key}`);
            if (el) {
                if (el.tagName === 'IMG') el.src = item.value;
                else if (el.tagName === 'A') el.href = item.value;
                else el.innerText = item.value;
            }
        });
    }

    // 2. Sync Music Catalog Grid
    const grid = document.getElementById('catalog-grid');
    if (grid) {
        const { data: music } = await supabase.from('music_catalog').select('*').order('release_date', { ascending: false });
        if (music) {
            grid.innerHTML = music.map(m => `
                <a href="/${m.path}" class="group block">
                    <div class="aspect-square overflow-hidden mb-4 border border-white/5 group-hover:border-cyan-400 transition">
                        <img src="${m.cover_url}" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-700">
                    </div>
                    <h3 class="font-bold text-[10px] uppercase tracking-widest truncate">${m.title}</h3>
                    <p class="text-[8px] text-gray-600 uppercase tracking-widest mt-1">${m.type}</p>
                </a>
            `).join('');
        }
    }
}

document.addEventListener('DOMContentLoaded', syncSite);
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
