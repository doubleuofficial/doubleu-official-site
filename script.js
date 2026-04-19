document.addEventListener('DOMContentLoaded', async () => {
    const grid = document.getElementById('discography-grid');
    if (!grid) return;

    try {
        const response = await fetch('/music.json');
        const data = await response.json();

        // Sort by Release Date (Newest first)
        data.sort((a, b) => new Date(b.release_date) - new Date(a.release_date));

        // Filter for Main Releases only
        const mainReleases = data.filter(item => item.type === "Single" || item.type === "Album");

        grid.innerHTML = mainReleases.map(item => `
            <a href="${item.site_path}" class="group block bg-[#0a0a0a] border border-white/5 p-4 hover:border-cyan-400/50 transition-all duration-500">
                <div class="aspect-square overflow-hidden mb-6 relative">
                    <img src="${item.image_path}" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 transform group-hover:scale-110">
                </div>
                <div class="space-y-1">
                    <h3 class="font-black italic uppercase tracking-tighter text-2xl group-hover:text-cyan-400 transition-colors">${item.title}</h3>
                    <div class="flex justify-between items-center text-[9px] tracking-[0.2em] font-bold uppercase text-gray-500">
                        <span>${item.type}</span>
                        <span class="text-[#FF5F1F]">${item.release_date.split('-')[0]}</span>
                    </div>
                </div>
            </a>
        `).join('');
    } catch (err) {
        console.error("Catalog loading failed:", err);
    }
});
