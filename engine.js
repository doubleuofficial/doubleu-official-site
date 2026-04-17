// engine.js
const supabaseUrl = 'https://xpwgzassajhmlqrjyyon.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhwd2d6YXNzYWpobWxxcmp5eW9uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYyMzIyNTYsImV4cCI6MjA5MTgwODI1Nn0.yuizzF45EItmSe224LutMGNoGcUsgLCUWu-zXVU6o9g';
const _supabase = supabase.createClient(supabaseUrl, supabaseKey);

async function loadMusicCatalog() {
    const musicGrid = document.getElementById('music-grid');
    if (!musicGrid) return;

    const { data: music, error } = await _supabase
        .from('music_catalog')
        .select('*')
        .order('release_date', { ascending: false });

    if (error) {
        console.error('Supabase Error:', error.message);
        return;
    }

    musicGrid.innerHTML = music.map(item => `
        <div class="music-card">
            <a href="${item.path}">
                <img src="${item.cover_url}" alt="${item.title}">
            </a>
            <h3>${item.title}</h3>
            <div class="links">
                ${item.spotify_link ? `<a href="${item.spotify_link}"><i class="fab fa-spotify"></i></a>` : ''}
                ${item.apple_link ? `<a href="${item.apple_link}"><i class="fab fa-apple"></i></a>` : ''}
                ${item.youtube_link ? `<a href="${item.youtube_link}"><i class="fab fa-youtube"></i></a>` : ''}
            </div>
        </div>
    `).join('');
}

document.addEventListener('DOMContentLoaded', loadMusicCatalog);
