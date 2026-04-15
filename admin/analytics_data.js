// Analytics Data for DoubleU
const ANALYTICS_DATA = {
    totalPlays: 8000,
    monthlyListeners: 2500,
    engagementRate: 24.5,
    growthRate: 18,
    
    // Play counts by song
    songPlays: [
        { title: "Fading Out", plays: 2040, platform: "YouTube" },
        { title: "Run From The Voices", plays: 1728, platform: "YouTube" },
        { title: "Zero Sum", plays: 1560, platform: "YouTube" },
        { title: "Found You in the Rainfall", plays: 1392, platform: "YouTube" },
        { title: "Devil in the Rear View", plays: 840, platform: "Spotify" },
        { title: "Shattered Echos", plays: 720, platform: "Spotify" },
        { title: "Shadow Boxer", plays: 480, platform: "Spotify" },
        { title: "Faded Frame", plays: 360, platform: "Apple Music" },
        { title: "The Anniversary", plays: 300, platform: "Apple Music" },
        { title: "The Carpenter's Hands", plays: 240, platform: "Apple Music" },
        { title: "Finally Free", plays: 180, platform: "YouTube" },
        { title: "New Foundations", plays: 120, platform: "YouTube" },
    ],
    
    // Platform breakdown
    platformStats: [
        { platform: "YouTube", plays: 4800, percentage: 60 },
        { platform: "Spotify", plays: 2000, percentage: 25 },
        { platform: "Apple Music", plays: 1200, percentage: 15 },
    ],
    
    // Monthly trends
    monthlyTrends: [
        { month: "January", plays: 1200 },
        { month: "February", plays: 2100 },
        { month: "March", plays: 2400 },
        { month: "April", plays: 2300 },
    ],
    
    // Geographic data (simulated)
    topCountries: [
        { country: "United States", plays: 4000, percentage: 50 },
        { country: "United Kingdom", plays: 1200, percentage: 15 },
        { country: "Canada", plays: 960, percentage: 12 },
        { country: "Australia", plays: 640, percentage: 8 },
        { country: "Other", plays: 1200, percentage: 15 },
    ],
    
    // Listener demographics (simulated)
    demographics: {
        ageGroups: [
            { age: "13-17", percentage: 15 },
            { age: "18-24", percentage: 35 },
            { age: "25-34", percentage: 30 },
            { age: "35-44", percentage: 12 },
            { age: "45+", percentage: 8 },
        ],
        gender: [
            { gender: "Male", percentage: 65 },
            { gender: "Female", percentage: 30 },
            { gender: "Other", percentage: 5 },
        ]
    },
    
    // Device breakdown
    devices: [
        { device: "Mobile", plays: 4000, percentage: 50 },
        { device: "Desktop", plays: 3200, percentage: 40 },
        { device: "Tablet", plays: 800, percentage: 10 },
    ]
};

// Initialize analytics in localStorage
function initializeAnalytics() {
    localStorage.setItem('analyticsData', JSON.stringify(ANALYTICS_DATA));
}

initializeAnalytics();
