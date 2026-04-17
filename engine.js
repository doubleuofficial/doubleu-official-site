/**
 * DOUBLEU OFFICIAL - SITE ENGINE
 * Handles: Supabase Data, Dynamic Rendering, Chronological Sorting, 
 * Page Transitions, and Custom UI Effects.
 */

// 1. INITIALIZATION & CONFIG
const supabaseUrl = 'https://xpwgzassajhmlqrjyyon.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhwd2d6YXNzYWpobWxxcmp5eW9uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYyMzIyNTYsImV4cCI6MjA5MTgwODI1Nn0.yuizzF45EItmSe224LutMGNoGcUsgLCUWu-zXVU6o9g';
const _supabase = supabase.createClient(supabaseUrl, supabaseKey);

async function init() {
    console.log("Initializing DoubleU Engine...");
    
    // Fetch all music sorted by Newest to Oldest
    const { data: music, error } = await _supabase
        .from('music_catalog')
        .select('*')
        .order('release_date', { ascending: false });

    if (error) {
        console.error("Database fetch error:", error.message);
        return;
    }

    // Identify current page and route rendering
    const path = window.location.pathname;
    
    if (path.includes('home.html') || path === '/') {
        renderHomePage(music);
    } 
    
    if (path.includes('music.html')) {
        renderMusicPage(music);
    }

    // Initialize Global UI Effects
    initVisualPolish();
}

// 2. HOME PAGE RENDERING
function renderHomePage(music) {
    const randomGrid = document.getElementById('most-streamed-grid');
    if (!randomGrid) return;

    // Pick 3 random tracks for the "Most Streamed" section
    const shuffled = [...music].sort(() => 0.5 - Math.random()).slice(0, 3);
    
    randomGrid.innerHTML = shuffled.map(item => `
        <div class="group text-center space-y-4">
            <div class="overflow-hidden rounded-lg border border-white/5">
                <img src="${item.cover_url}" alt="${item.title}" 
                     class="w-full aspect-square object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700">
            </div>
            <h4 class="font-bold text-[10px] uppercase tracking-[0.3em] text-gray-400 group-hover:text-cyan-400 transition-colors">
                ${item.title}
            </h4>
        </div>
    `).join('');
}

// 3. MUSIC PAGE RENDERING (CHRONOLOGICAL)
function renderMusicPage(music) {
    const albumContainer = document.getElementById('featured-album-container');
    const singlesGrid = document.getElementById('singles-grid');
    
    if (!albumContainer || !singlesGrid) return;

    // A. FEATURED ALBUM: Find "Faded 405" specifically
    const album = music.find(item => item.title.includes('Faded 405'));
    if (album) {
        albumContainer.innerHTML = `
            <div class="flex flex-col md:flex-row gap-12 p-8 border border-white/10 rounded-2xl album-card bg-white/[0.02]">
                <img src="${album.cover_url}" class="w-full md:w-1/2 aspect-square object-cover rounded-lg shadow-2xl">
                <div class="flex flex-col justify-center space-y-6">
                    <h2 class="text-6xl font-black italic tracking-tighter">${album.title}</h2>
                    <p class="text-cyan-500 uppercase tracking-[0.4em] text-[10px] font-bold">Featured Project • FEB 2026</p>
                    <p class="text-gray-400 text-sm leading-relaxed max-w-md">The definitive soul-trap sound of the 405. Melodic storytelling meets cinematic production.</p>
                    <a href="${album.path || '#'}" class="inline-block bg-white text-black text-center py-4 px-10 rounded-full font-bold uppercase tracking-widest hover:bg-cyan-400 transition-colors duration-300">Listen Now</a>
                </div>
            </div>`;
    }

    // B. SINGLES GRID: Everything else, newest first
    const singles = music.filter(item => item.type === 'Single' || !item.title.includes('Faded 405'));
    
    singlesGrid.innerHTML = singles.map(item => {
        // Date Formatting (e.g., MAR 2026)
        const dateObj = new Date(item.release_date);
        const displayDate = dateObj.toLocaleDateString('en-US', { 
            month: 'short', 
            year: 'numeric' 
        }).toUpperCase();

        return `
            <a href="${item.path || '#'}" class="group block space-y-4">
                <div class="relative aspect-square overflow-hidden rounded-lg border border-white/5 group-hover:border-cyan-500/50 transition-all duration-500">
                    <img src="${item.cover_url}" alt="${item.title}" 
                         class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
                    <div class="absolute top-3 left-3 bg-black/80 backdrop-blur-md px-2 py-1 rounded text-[7px] text-cyan-400 font-bold tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity">
                        ${displayDate}
                    </div>
                </div>
                <div class="px-1">
                    <h3 class="font-bold truncate text-[10px] uppercase tracking-widest text-gray-200 group-hover:text-white transition-colors">
                        ${item.title}
                    </h3>
                </div>
            </a>
        `;
    }).join('');
}

// 4. VISUAL POLISH (CURSOR & TRANSITIONS)
function initVisualPolish() {
    const cursor = document.getElementById('cursor');
    const transitionLayer = document.getElementById('transition-layer');

    // Custom Cursor Follow
    document.addEventListener('mousemove', (e) => {
        if (cursor) {
            cursor.style.left = e.clientX - 10 + 'px';
            cursor.style.top = e.clientY - 10 + 'px';
        }
    });

    // Handle Hover Scaling for Cursor
    document.querySelectorAll('a, button').forEach(el => {
        el.addEventListener('mouseenter', () => cursor?.classList.add('scale-150'));
        el.addEventListener('mouseleave', () => cursor?.classList.remove('scale-150'));
    });

    // Cinematic Page Transitions
    document.querySelectorAll('a').forEach(link => {
        // Only internal links and ignore hash anchors
        if (link.hostname === window.location.hostname && !link.hash) {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const target = link.href;
                
                document.body.classList.add('is-transitioning');
                
                setTimeout(() => {
                    window.location.href = target;
                }, 500); 
            });
        }
    });

    // Reset transition on page load
    window.addEventListener('pageshow', () => {
        document.body.classList.remove('is-transitioning');
    });
}

// 5. BOOTSTRAP
document.addEventListener('DOMContentLoaded', init);
