// engine.js - Core Logic for DoubleU Official
const supabaseUrl = 'https://xpwgzassajhmlqrjyyon.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhwd2d6YXNzYWpobWxxcmp5eW9uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYyMzIyNTYsImV4cCI6MjA5MTgwODI1Nn0.yuizzF45EItmSe224LutMGNoGcUsgLCUWu-zXVU6o9g';
const _supabase = supabase.createClient(supabaseUrl, supabaseKey);

async function loadMusicCatalog() {
    const musicGrid = document.getElementById('music-grid');
    if (!musicGrid) return;

    // Fetch music data ordered by most recent release
    const { data: music, error } = await _supabase
        .from('music_catalog')
        .select('*')
        .order('release_date', { ascending: false });

    if (error) {
        console.error('Error loading music:', error.message);
        return;
    }

    // Map through the catalog to create cards
    musicGrid.innerHTML = music.map(item => {
        // Absolute paths are handled by the leading / in the DB
        const pageLink = item.path || '#';
        const imageSrc = item.cover_url || '/assets/default-cover.webp';

        return `
            <div class="music-card group bg-[#0a0a0a] border border-white/5 p-4 rounded-lg hover:border-cyan-500/30 transition-all duration-300">
                <a href="${pageLink}" class="block overflow-hidden rounded-md mb-4 relative">
                    <img src="${imageSrc}" alt="${item.title}" 
                         class="w-full aspect-square object-cover transform group-hover:scale-105 transition-transform duration-500">
                    <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                        <span class="text-white text-xs font-bold tracking-[0.2em] uppercase">Open Project</span>
                    </div>
                </a>
                
                <div class="space-y-1 mb-4">
                    <h3 class="text-white font-bold text-lg truncate">${item.title}</h3>
                    <p class="text-gray-500 text-xs uppercase tracking-wider">
                        ${item.type === 'Album Track' ? `Track • ${item.album_name}` : item.type}
                    </p>
                </div>
                
                <div class="flex gap-4 items-center border-t border-white/5 pt-4">
                    ${item.spotify_link ? `
                        <a href="${item.spotify_link}" target="_blank" class="text-gray-400 hover:text-[#1DB954] transition-colors">
                            <i class="fab fa-spotify text-xl"></i>
                        </a>` : ''}
                    
                    ${item.apple_link ? `
                        <a href="${item.apple_link}" target="_blank" class="text-gray-400 hover:text-[#FC3C44] transition-colors">
                            <i class="fab fa-apple text-xl"></i>
                        </a>` : ''}
                    
                    ${item.youtube_link ? `
                        <a href="${item.youtube_link}" target="_blank" class="text-gray-400 hover:text-[#FF0000] transition-colors">
                            <i class="fab fa-youtube text-xl"></i>
                        </a>` : ''}
                </div>
            </div>
        `;
    }).join('');
}

// Ensure the function runs once the DOM is ready
document.addEventListener('DOMContentLoaded', loadMusicCatalog);
