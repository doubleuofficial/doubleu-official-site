document.addEventListener('DOMContentLoaded', async () => {
    const grid = document.getElementById('discography-grid');
    if (!grid) {
        console.error("Grid container not found");
        return;
    }

    try {
        // Use a relative path to ensure it works on Vercel
        const response = await fetch('/music.json');
        if (!response.ok) throw new Error("Could not fetch music.json");
        
        const data = await response.json();

        // Robust sorting: Handles MMDDYYYY format
        data.sort((a, b) => {
            const dateA = a.release_date.slice(4, 8) + a.release_date.slice(0, 2) + a.release_date.slice(2, 4);
            const dateB = b.release_date.slice(4, 8) + b.release_date.slice(0, 2) + b.release_date.slice(2, 4);
            return dateB.localeCompare(dateA);
        });

        // Filter to only show main releases (Singles and Albums)
        const catalogItems = data.filter(item => 
            item.release_type === "Single" || item.release_type === "Album"
        );

        if (catalogItems.length === 0) {
            grid.innerHTML = `<p class="text-gray-500 uppercase text-[10px] tracking-widest">No releases found.</p>`;
            return;
        }

        grid.innerHTML = catalogItems.map(item => `
            <a href="${item.site_url}" class="group block border border-white/5 p-4 bg-[#111] hover:border-cyan-400 transition-all duration-500">
                <div class="aspect-square overflow-hidden mb-4 relative">
                    <img src="${item.cover_url}" 
                         alt="${item.title}"
                         class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                         onerror="this.src='/assets/placeholder.webp'">
                </div>
                <h3 class="font-black italic uppercase tracking-tighter text-xl group-hover:text-cyan-400 transition-colors">${item.title}</h3>
                <div class="flex justify-between items-center mt-1">
                    <p class="text-[9px] text-gray-500 uppercase tracking-widest">${item.release_type}</p>
                    <p class="text-[9px] text-[#FF5F1F] font-bold">${item.release_date.slice(0,2)}/${item.release_date.slice(4)}</p>
                </div>
            </a>
        `).join('');

    } catch (err) {
        console.error("Discography Error:", err);
        grid.innerHTML = `<p class="text-red-500 uppercase text-[10px]">Error loading catalog.</p>`;
    }
});
