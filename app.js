/* =====================================================================
   BHARAT DRISHTI - Mapbox-Powered India Climate Digital Twin
   ===================================================================== */

// State Coordinates & Metadata (Identical simplified coordinates covering India)
const INDIA_STATES_DATA = [
    {
        name: "Jammu & Kashmir", code: "IN-JK",
        cities: ["Srinagar", "Jammu", "Leh"],
        center: [76.5, 34.2],
        coords: [[73.5, 34.0], [74.0, 35.5], [75.5, 36.8], [77.5, 36.8], [79.5, 35.5], [80.2, 34.0], [78.8, 32.2], [77.2, 33.2], [75.8, 32.0], [74.5, 32.5], [73.5, 34.0]],
        stats: [
            { rain: "5.2 mm", temp: "18.4°C", heat: "LOW", monsoon: "WEAK", risk: "3.2/10", flood: "12%", drought: "Low (0.15)", crop: "Healthy (NDVI: 0.78)" },
            { rain: "12.0 mm", temp: "21.5°C", heat: "NORMAL", monsoon: "NORMAL", risk: "4.5/10", flood: "28%", drought: "Low (0.18)", crop: "Healthy (NDVI: 0.75)" },
            { rain: "24.5 mm", temp: "23.2°C", heat: "MODERATE", monsoon: "ACTIVE", risk: "6.1/10", flood: "65%", drought: "Low (0.11)", crop: "Moderate (NDVI: 0.69)" }
        ]
    },
    {
        name: "Rajasthan", code: "IN-RJ",
        cities: ["Jaipur", "Jodhpur", "Udaipur"],
        center: [74.0, 26.5],
        coords: [[69.8, 26.8], [70.5, 28.5], [72.5, 29.8], [74.0, 30.2], [75.5, 29.0], [77.2, 28.0], [78.2, 26.8], [76.8, 24.5], [74.0, 24.0], [71.5, 24.5], [69.8, 26.8]],
        stats: [
            { rain: "0.2 mm", temp: "38.2°C", heat: "HIGH", monsoon: "NONE", risk: "6.8/10", flood: "5%", drought: "High (0.82)", crop: "Severe Stress (NDVI: 0.32)" },
            { rain: "1.5 mm", temp: "42.4°C", heat: "EXTREME", monsoon: "WEAK", risk: "8.5/10", flood: "8%", drought: "Critical (0.91)", crop: "Extreme Stress (NDVI: 0.25)" },
            { rain: "4.8 mm", temp: "45.8°C", heat: "CRITICAL", monsoon: "ACTIVE", risk: "9.2/10", flood: "15%", drought: "Critical (0.95)", crop: "Extreme Stress (NDVI: 0.22)" }
        ]
    },
    {
        name: "Gujarat", code: "IN-GJ",
        cities: ["Ahmedabad", "Surat", "Vadodara"],
        center: [71.5, 22.5],
        coords: [[68.5, 23.5], [69.5, 24.5], [71.5, 24.5], [73.2, 24.2], [73.5, 23.0], [73.0, 21.0], [72.0, 21.0], [72.2, 22.0], [70.5, 22.5], [69.0, 22.0], [68.5, 23.5]],
        stats: [
            { rain: "1.5 mm", temp: "33.5°C", heat: "MODERATE", monsoon: "WEAK", risk: "5.1/10", flood: "10%", drought: "Moderate (0.52)", crop: "Moderate (NDVI: 0.58)" },
            { rain: "8.2 mm", temp: "36.2°C", heat: "HIGH", monsoon: "NORMAL", risk: "6.7/10", flood: "20%", drought: "High (0.61)", crop: "Stress (NDVI: 0.48)" },
            { rain: "19.5 mm", temp: "39.8°C", heat: "EXTREME", monsoon: "ACTIVE", risk: "7.9/10", flood: "40%", drought: "High (0.65)", crop: "Stress (NDVI: 0.43)" }
        ]
    },
    {
        name: "Maharashtra", code: "IN-MH",
        cities: ["Mumbai", "Pune", "Nagpur"],
        center: [75.5, 19.5],
        coords: [[72.8, 19.0], [72.8, 20.0], [74.0, 21.0], [76.0, 21.5], [79.0, 21.5], [80.5, 19.5], [79.5, 18.0], [78.0, 17.5], [74.5, 16.0], [73.5, 16.5], [72.8, 19.0]],
        stats: [
            { rain: "12.5 mm", temp: "28.5°C", heat: "NORMAL", monsoon: "NORMAL", risk: "4.8/10", flood: "18%", drought: "Low (0.28)", crop: "Moderate (NDVI: 0.65)" },
            { rain: "28.4 mm", temp: "31.2°C", heat: "NORMAL", monsoon: "ACTIVE", risk: "6.8/10", flood: "45%", drought: "Low (0.23)", crop: "Moderate (NDVI: 0.62)" },
            { rain: "64.0 mm", temp: "34.5°C", heat: "MODERATE", monsoon: "VIGOROUS", risk: "8.2/10", flood: "85%", drought: "Low (0.15)", crop: "Healthy (NDVI: 0.70)" }
        ]
    },
    {
        name: "Karnataka", code: "IN-KA",
        cities: ["Bengaluru", "Mysore", "Hubli"],
        center: [76.0, 14.5],
        coords: [[74.0, 16.0], [74.8, 17.5], [76.0, 17.5], [77.2, 17.2], [78.0, 15.0], [78.0, 13.8], [77.0, 12.0], [76.0, 12.0], [74.8, 13.5], [74.0, 15.0], [74.0, 16.0]],
        stats: [
            { rain: "14.2 mm", temp: "26.4°C", heat: "LOW", monsoon: "NORMAL", risk: "4.2/10", flood: "15%", drought: "Low (0.24)", crop: "Healthy (NDVI: 0.72)" },
            { rain: "25.8 mm", temp: "28.9°C", heat: "NORMAL", monsoon: "ACTIVE", risk: "5.4/10", flood: "35%", drought: "Low (0.20)", crop: "Healthy (NDVI: 0.74)" },
            { rain: "48.2 mm", temp: "30.1°C", heat: "NORMAL", monsoon: "VIGOROUS", risk: "7.1/10", flood: "70%", drought: "Low (0.12)", crop: "Healthy (NDVI: 0.76)" }
        ]
    },
    {
        name: "Kerala", code: "IN-KL",
        cities: ["Kochi", "Trivandrum", "Kozhikode"],
        center: [76.0, 10.5],
        coords: [[75.0, 12.0], [75.5, 12.5], [76.5, 10.5], [77.2, 8.2], [76.8, 8.2], [75.8, 10.0], [75.0, 12.0]],
        stats: [
            { rain: "38.5 mm", temp: "25.2°C", heat: "LOW", monsoon: "ACTIVE", risk: "6.2/10", flood: "52%", drought: "None (0.05)", crop: "Vibrant (NDVI: 0.85)" },
            { rain: "72.4 mm", temp: "27.0°C", heat: "LOW", monsoon: "VIGOROUS", risk: "8.1/10", flood: "88%", drought: "None (0.02)", crop: "Vibrant (NDVI: 0.88)" },
            { rain: "128.0 mm", temp: "28.5°C", heat: "LOW", monsoon: "EXTREME", risk: "9.5/10", flood: "99%", drought: "None (0.01)", crop: "Vibrant (NDVI: 0.86)" }
        ]
    },
    {
        name: "Tamil Nadu", code: "IN-TN",
        cities: ["Chennai", "Coimbatore", "Madurai"],
        center: [78.5, 10.8],
        coords: [[77.2, 8.2], [77.5, 9.5], [78.5, 11.5], [80.2, 13.5], [79.8, 13.5], [79.0, 11.5], [79.2, 10.0], [78.2, 9.0], [77.2, 8.2]],
        stats: [
            { rain: "2.1 mm", temp: "30.4°C", heat: "NORMAL", monsoon: "WEAK", risk: "4.5/10", flood: "10%", drought: "Moderate (0.42)", crop: "Moderate (NDVI: 0.60)" },
            { rain: "5.8 mm", temp: "33.2°C", heat: "HIGH", monsoon: "NORMAL", risk: "5.9/10", flood: "18%", drought: "Moderate (0.48)", crop: "Stress (NDVI: 0.52)" },
            { rain: "14.5 mm", temp: "35.8°C", heat: "HIGH", monsoon: "ACTIVE", risk: "7.2/10", flood: "32%", drought: "Moderate (0.40)", crop: "Stress (NDVI: 0.49)" }
        ]
    },
    {
        name: "Andhra Pradesh", code: "IN-AP",
        cities: ["Visakhapatnam", "Vijayawada", "Tirupati"],
        center: [80.5, 15.8],
        coords: [[80.2, 13.5], [80.0, 14.5], [79.0, 15.0], [79.5, 16.5], [81.5, 18.5], [83.5, 18.5], [84.2, 19.2], [82.5, 17.5], [81.0, 16.0], [80.2, 13.5]],
        stats: [
            { rain: "4.5 mm", temp: "31.2°C", heat: "NORMAL", monsoon: "WEAK", risk: "4.9/10", flood: "15%", drought: "Moderate (0.38)", crop: "Moderate (NDVI: 0.63)" },
            { rain: "11.2 mm", temp: "34.5°C", heat: "HIGH", monsoon: "NORMAL", risk: "6.5/10", flood: "30%", drought: "Moderate (0.41)", crop: "Stress (NDVI: 0.54)" },
            { rain: "38.5 mm", temp: "36.8°C", heat: "EXTREME", monsoon: "ACTIVE", risk: "8.1/10", flood: "75%", drought: "Moderate (0.33)", crop: "Stress (NDVI: 0.50)" }
        ]
    },
    {
        name: "Telangana", code: "IN-TG",
        cities: ["Hyderabad", "Warangal", "Nizamabad"],
        center: [79.0, 17.8],
        coords: [[77.5, 16.0], [78.2, 17.5], [79.8, 18.5], [81.0, 18.2], [80.5, 17.0], [79.0, 16.0], [77.5, 16.0]],
        stats: [
            { rain: "3.2 mm", temp: "32.0°C", heat: "NORMAL", monsoon: "WEAK", risk: "4.8/10", flood: "12%", drought: "Moderate (0.45)", crop: "Moderate (NDVI: 0.61)" },
            { rain: "9.5 mm", temp: "35.8°C", heat: "HIGH", monsoon: "NORMAL", risk: "6.2/10", flood: "24%", drought: "Moderate (0.49)", crop: "Stress (NDVI: 0.53)" },
            { rain: "22.8 mm", temp: "38.5°C", heat: "EXTREME", monsoon: "ACTIVE", risk: "7.6/10", flood: "50%", drought: "Moderate (0.42)", crop: "Stress (NDVI: 0.49)" }
        ]
    },
    {
        name: "Madhya Pradesh", code: "IN-MP",
        cities: ["Bhopal", "Indore", "Gwalior"],
        center: [78.0, 23.5],
        coords: [[74.0, 22.0], [74.2, 24.0], [76.5, 24.5], [78.0, 26.8], [80.2, 25.5], [82.5, 24.2], [82.8, 22.0], [80.5, 21.5], [77.5, 21.5], [75.5, 22.0], [74.0, 22.0]],
        stats: [
            { rain: "8.2 mm", temp: "32.5°C", heat: "NORMAL", monsoon: "NORMAL", risk: "4.4/10", flood: "14%", drought: "Moderate (0.35)", crop: "Moderate (NDVI: 0.64)" },
            { rain: "19.8 mm", temp: "35.5°C", heat: "HIGH", monsoon: "NORMAL", risk: "5.8/10", flood: "28%", drought: "Moderate (0.38)", crop: "Stress (NDVI: 0.56)" },
            { rain: "44.5 mm", temp: "37.2°C", heat: "HIGH", monsoon: "ACTIVE", risk: "7.3/10", flood: "58%", drought: "Low (0.28)", crop: "Healthy (NDVI: 0.68)" }
        ]
    },
    {
        name: "Uttar Pradesh", code: "IN-UP",
        cities: ["Lucknow", "Kanpur", "Varanasi"],
        center: [80.5, 27.0],
        coords: [[77.2, 28.0], [78.0, 29.5], [80.2, 28.8], [83.0, 28.0], [84.0, 27.2], [83.8, 24.2], [82.5, 24.2], [80.2, 25.5], [78.2, 25.0], [77.2, 28.0]],
        stats: [
            { rain: "6.2 mm", temp: "34.0°C", heat: "HIGH", monsoon: "WEAK", risk: "5.3/10", flood: "20%", drought: "High (0.55)", crop: "Stress (NDVI: 0.50)" },
            { rain: "14.5 mm", temp: "37.8°C", heat: "HIGH", monsoon: "NORMAL", risk: "6.9/10", flood: "40%", drought: "High (0.58)", crop: "Stress (NDVI: 0.44)" },
            { rain: "38.2 mm", temp: "40.5°C", heat: "EXTREME", monsoon: "ACTIVE", risk: "8.3/10", flood: "72%", drought: "Moderate (0.42)", crop: "Moderate (NDVI: 0.58)" }
        ]
    },
    {
        name: "Bihar", code: "IN-BR",
        cities: ["Patna", "Gaya", "Muzaffarpur"],
        center: [85.5, 25.8],
        coords: [[83.8, 24.2], [84.0, 27.2], [88.0, 27.2], [88.2, 24.5], [87.2, 24.2], [85.5, 24.5], [83.8, 24.2]],
        stats: [
            { rain: "10.5 mm", temp: "30.8°C", heat: "NORMAL", monsoon: "NORMAL", risk: "5.5/10", flood: "38%", drought: "Low (0.20)", crop: "Moderate (NDVI: 0.62)" },
            { rain: "25.4 mm", temp: "33.6°C", heat: "HIGH", monsoon: "ACTIVE", risk: "7.1/10", flood: "65%", drought: "Low (0.16)", crop: "Healthy (NDVI: 0.68)" },
            { rain: "58.0 mm", temp: "35.2°C", heat: "HIGH", monsoon: "VIGOROUS", risk: "8.9/10", flood: "92%", drought: "None (0.08)", crop: "Healthy (NDVI: 0.72)" }
        ]
    },
    {
        name: "West Bengal", code: "IN-WB",
        cities: ["Kolkata", "Siliguri", "Durgapur"],
        center: [88.0, 24.0],
        coords: [[86.0, 22.0], [87.0, 22.5], [88.2, 22.8], [89.0, 21.8], [89.2, 23.2], [88.5, 24.5], [88.5, 27.2], [87.8, 27.0], [87.0, 24.0], [86.0, 22.0]],
        stats: [
            { rain: "18.5 mm", temp: "29.2°C", heat: "NORMAL", monsoon: "ACTIVE", risk: "5.8/10", flood: "40%", drought: "None (0.10)", crop: "Healthy (NDVI: 0.71)" },
            { rain: "35.6 mm", temp: "32.0°C", heat: "NORMAL", monsoon: "VIGOROUS", risk: "7.6/10", flood: "68%", drought: "None (0.05)", crop: "Healthy (NDVI: 0.74)" },
            { rain: "78.4 mm", temp: "33.5°C", heat: "MODERATE", monsoon: "EXTREME", risk: "9.1/10", flood: "95%", drought: "None (0.02)", crop: "Healthy (NDVI: 0.73)" }
        ]
    },
    {
        name: "Odisha", code: "IN-OD",
        cities: ["Bhubaneswar", "Cuttack", "Puri"],
        center: [84.5, 21.0],
        coords: [[84.2, 19.2], [82.5, 20.0], [82.8, 22.0], [84.5, 22.5], [86.5, 22.5], [87.5, 21.5], [86.0, 20.0], [84.2, 19.2]],
        stats: [
            { rain: "15.4 mm", temp: "30.0°C", heat: "NORMAL", monsoon: "ACTIVE", risk: "5.4/10", flood: "30%", drought: "Low (0.18)", crop: "Healthy (NDVI: 0.69)" },
            { rain: "28.5 mm", temp: "32.8°C", heat: "HIGH", monsoon: "VIGOROUS", risk: "7.5/10", flood: "62%", drought: "Low (0.12)", crop: "Healthy (NDVI: 0.71)" },
            { rain: "68.5 mm", temp: "34.5°C", heat: "HIGH", monsoon: "EXTREME", risk: "8.8/10", flood: "90%", drought: "Low (0.05)", crop: "Healthy (NDVI: 0.70)" }
        ]
    },
    {
        name: "Assam & Northeast", code: "IN-NE",
        cities: ["Guwahati", "Shillong", "Imphal"],
        center: [92.5, 26.0],
        coords: [[88.5, 27.2], [90.0, 28.2], [92.0, 28.2], [94.5, 29.0], [97.2, 28.5], [97.0, 26.5], [95.0, 24.0], [92.0, 22.8], [91.0, 24.2], [89.8, 25.0], [88.5, 27.2]],
        stats: [
            { rain: "32.4 mm", temp: "24.5°C", heat: "LOW", monsoon: "VIGOROUS", risk: "6.4/10", flood: "60%", drought: "None (0.02)", crop: "Vibrant (NDVI: 0.82)" },
            { rain: "64.8 mm", temp: "26.8°C", heat: "LOW", monsoon: "VIGOROUS", risk: "8.3/10", flood: "91%", drought: "None (0.01)", crop: "Vibrant (NDVI: 0.85)" },
            { rain: "112.5 mm", temp: "28.0°C", heat: "LOW", monsoon: "EXTREME", risk: "9.4/10", flood: "99%", drought: "None (0.01)", crop: "Vibrant (NDVI: 0.83)" }
        ]
    }
];

// App State Management
const AppState = {
    isBypassMode: false,
    isNightMode: true,
    isSpinning: true,
    timelineStep: 1, // 0 = Past, 1 = Current, 2 = AI Forecast
    hoveredState: null,
    focusedState: null,
    layers: {
        rainfall: true,
        temperature: true,
        wind: true,
        monsoon: true,
        heatwave: false,
        flood: false,
        drought: false
    }
};

// Converters: Local Coordinate Arrays to Standard GeoJSON
const getStatesGeoJSON = () => {
    const features = INDIA_STATES_DATA.map(state => {
        // Map coordinates, closing polygon properly
        const polyCoords = [...state.coords];
        if (polyCoords[0][0] !== polyCoords[polyCoords.length-1][0] || polyCoords[0][1] !== polyCoords[polyCoords.length-1][1]) {
            polyCoords.push(polyCoords[0]);
        }
        return {
            type: "Feature",
            id: state.code,
            properties: {
                name: state.name,
                code: state.code,
                cities: state.cities,
                center: state.center,
                stats: state.stats
            },
            geometry: {
                type: "Polygon",
                coordinates: [polyCoords]
            }
        };
    });
    return {
        type: "FeatureCollection",
        features: features
    };
};

// Main Climate digital twin controller
class ClimateApp {
    constructor() {
        this.map = null;
        this.svgContainer = null;
        this.activePopup = null;
        
        // Canvas overlay for wind vectors, monsoon front waves, and cyclones
        this.canvasOverlay = null;
        this.canvasCtx = null;
        this.windParticles = [];
        this.monsoonWaves = [];
        this.cyclones = [];
        this.requestAnimFrameId = null;

        this.init();
    }

    init() {
        // Default token provided by the user
        const defaultToken = import.meta.env.VITE_MAPBOX_TOKEN;
        let savedToken = null;
        try {
            savedToken = localStorage.getItem('mapbox_access_token');
        } catch (e) {
            console.warn("Storage access restricted. Defaulting to pre-set key.", e);
        }
        const tokenToUse = savedToken || defaultToken;

        const tokenPrompt = document.getElementById('token-prompt-overlay');
        const overlayInput = document.getElementById('overlay-mapbox-token');
        const sidebarInput = document.getElementById('sidebar-mapbox-token');

        // Automatically hide the key request overlay completely
        if (tokenPrompt) tokenPrompt.style.display = 'none';
        if (overlayInput) overlayInput.value = tokenToUse;
        if (sidebarInput) sidebarInput.value = tokenToUse;

        this.initializeMapbox(tokenToUse);

        // Set up event listeners for manual updates
        document.getElementById('overlay-btn-save').addEventListener('click', () => {
            const tok = overlayInput.value.trim();
            if (tok) {
                try {
                    localStorage.setItem('mapbox_access_token', tok);
                } catch(e) {}
                sidebarInput.value = tok;
                if (tokenPrompt) tokenPrompt.style.display = 'none';
                this.initializeMapbox(tok);
            }
        });

        document.getElementById('sidebar-btn-save').addEventListener('click', () => {
            const tok = sidebarInput.value.trim();
            if (tok) {
                try {
                    localStorage.setItem('mapbox_access_token', tok);
                } catch(e) {}
                overlayInput.value = tok;
                if (tokenPrompt) tokenPrompt.style.display = 'none';
                this.initializeMapbox(tok);
            }
        });

        // Bypass Button (Mockup Vector Graphics Fallback)
        document.getElementById('btn-bypass-prompt').addEventListener('click', () => {
            AppState.isBypassMode = true;
            if (tokenPrompt) tokenPrompt.style.display = 'none';
            document.getElementById('sys-status-badge').innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> MOCKUP MODE`;
            document.getElementById('sys-status-badge').className = "value text-amber";
            this.initializeBypassSVG();
        });
    }

    /* ==========================================================
       1. Mapbox Globe View Engine Setup
       ========================================================== */
    initializeMapbox(token) {
        mapboxgl.accessToken = token;
        
        // Load Mapbox GL JS map (globe projection centered on India)
        this.map = new mapboxgl.Map({
            container: 'map',
            style: AppState.isNightMode ? 'mapbox://styles/mapbox/dark-v11' : 'mapbox://styles/mapbox/satellite-v9',
            projection: 'globe',
            center: [78.9629, 20.5937],
            zoom: 3.8,
            minZoom: 3.0,
            maxZoom: 7.0,
            maxBounds: [[52.0, 4.0], [105.0, 40.0]], // Bounding limits focusing camera on India
            pitch: 15
        });

        this.map.on('style.load', () => {
            // Enable detailed atmospheric glow
            this.updateMapAtmosphere();
            this.addMapLayers();
        });

        this.map.on('load', () => {
            this.setupMapEvents();
            this.initializeCanvasOverlay();
        });

        this.map.on('error', (e) => {
            console.warn("Mapbox load failed, dropping back to SVG vector mode. Error:", e);
            AppState.isBypassMode = true;
            document.getElementById('token-prompt-overlay').classList.remove('hidden');
            document.getElementById('overlay-mapbox-token').placeholder = "Invalid Token! Retry...";
        });
    }

    updateMapAtmosphere() {
        if (!this.map) return;
        this.map.setFog({
            color: AppState.isNightMode ? 'rgb(4, 9, 20)' : 'rgb(186, 210, 235)',
            'high-color': AppState.isNightMode ? 'rgb(3, 7, 16)' : 'rgb(36, 92, 223)',
            'horizon-blend': 0.15,
            'space-color': 'rgb(2, 4, 9)',
            'star-intensity': AppState.isNightMode ? 0.6 : 0.0
        });
    }

    addMapLayers() {
        if (!this.map) return;

        const geojson = getStatesGeoJSON();

        // Safe checks: verify source and layers do not exist before adding
        if (!this.map.getSource('india-states')) {
            this.map.addSource('india-states', {
                type: 'geojson',
                data: geojson
            });
        }

        if (!this.map.getLayer('states-fill')) {
            this.map.addLayer({
                id: 'states-fill',
                type: 'fill',
                source: 'india-states',
                paint: {
                    'fill-color': [
                        'case',
                        ['boolean', ['feature-state', 'hover'], false],
                        'rgba(0, 243, 255, 0.25)',
                        'rgba(0, 243, 255, 0.03)'
                    ],
                    'fill-opacity': 1.0
                }
            });
        }

        if (!this.map.getLayer('states-borders')) {
            this.map.addLayer({
                id: 'states-borders',
                type: 'line',
                source: 'india-states',
                paint: {
                    'line-color': '#00f3ff',
                    'line-width': 1.5,
                    'line-opacity': 0.8
                }
            });
        }

        if (!this.map.getLayer('states-hover-borders')) {
            this.map.addLayer({
                id: 'states-hover-borders',
                type: 'line',
                source: 'india-states',
                paint: {
                    'line-color': '#39ff14',
                    'line-width': 3,
                    'line-opacity': [
                        'case',
                        ['boolean', ['feature-state', 'hover'], false],
                        1.0,
                        0.0
                    ]
                }
            });
        }
        
        this.updateStatesColorOverlay();
    }

    // Dynamic layer styling based on active parameters
    updateStatesColorOverlay() {
        if (!this.map || !this.map.getLayer('states-fill')) return;

        let colorExpr = 'rgba(0, 243, 255, 0.03)'; // Default transparent
        
        // Build map paint expressions based on active layers and timeline forecasts
        if (AppState.layers.rainfall) {
            // Gradient: higher forecast rainfall = deep blue
            colorExpr = [
                'case',
                ['boolean', ['feature-state', 'hover'], false],
                'rgba(0, 243, 255, 0.25)',
                'rgba(10, 132, 255, 0.12)'
            ];
        } else if (AppState.layers.temperature) {
            // Gradient: higher temp = glowing red/orange
            colorExpr = [
                'case',
                ['boolean', ['feature-state', 'hover'], false],
                'rgba(255, 159, 10, 0.35)',
                'rgba(255, 59, 48, 0.12)'
            ];
        } else if (AppState.layers.drought) {
            // Crop drought stress = orange/amber
            colorExpr = [
                'case',
                ['boolean', ['feature-state', 'hover'], false],
                'rgba(255, 149, 0, 0.35)',
                'rgba(255, 149, 0, 0.12)'
            ];
        } else if (AppState.layers.flood) {
            // Flood saturation risk = purple
            colorExpr = [
                'case',
                ['boolean', ['feature-state', 'hover'], false],
                'rgba(191, 90, 242, 0.35)',
                'rgba(191, 90, 242, 0.12)'
            ];
        }

        this.map.setPaintProperty('states-fill', 'fill-color', colorExpr);
    }

    setupMapEvents() {
        let hoveredStateId = null;

        // Hover detection
        this.map.on('mousemove', 'states-fill', (e) => {
            if (e.features.length > 0) {
                this.map.getCanvas().style.cursor = 'pointer';
                
                const feat = e.features[0];
                const stateData = feat.properties;

                if (hoveredStateId !== feat.id) {
                    if (hoveredStateId !== null) {
                        this.map.setFeatureState(
                            { source: 'india-states', id: hoveredStateId },
                            { hover: false }
                        );
                    }
                    hoveredStateId = feat.id;
                    this.map.setFeatureState(
                        { source: 'india-states', id: hoveredStateId },
                        { hover: true }
                    );

                    // Reconstruct properties parsed back from Mapbox
                    const parsedData = {
                        name: stateData.name,
                        code: stateData.code,
                        stats: JSON.parse(stateData.stats)
                    };
                    UIController.showHolographicCard(e.point.x, e.point.y, parsedData);
                } else {
                    UIController.updateHolographicCardPos(e.point.x, e.point.y);
                }
            }
        });

        this.map.on('mouseleave', 'states-fill', () => {
            this.map.getCanvas().style.cursor = '';
            if (hoveredStateId !== null) {
                this.map.setFeatureState(
                    { source: 'india-states', id: hoveredStateId },
                    { hover: false }
                );
            }
            hoveredStateId = null;
            UIController.hideHolographicCard();
        });

        // Click detection: flies to bounds and opens mapbox popup
        this.map.on('click', 'states-fill', (e) => {
            const feat = e.features[0];
            const stateData = {
                name: feat.properties.name,
                code: feat.properties.code,
                cities: JSON.parse(feat.properties.cities),
                center: JSON.parse(feat.properties.center),
                stats: JSON.parse(feat.properties.stats)
            };

            this.openStatePopup(stateData, e.lngLat);
        });

        // Setup simple rendering spin state
        // (Delegated directly to rendering animation loop for performance)
    }

    // Centered zoom and popup spawn
    openStatePopup(stateData, clickLngLat) {
        if (this.activePopup) {
            this.activePopup.remove();
        }

        AppState.focusedState = stateData;
        
        // 1. Calculate boundaries of state polygon to fly map camera
        const coords = stateData.center;
        
        // Smoothly fly camera centered on coordinates
        this.map.flyTo({
            center: coords,
            zoom: 5.2,
            pitch: 35,
            duration: 1200
        });

        // 2. Generate customized glassmorphic popup containing all state info
        const popupHTML = UIController.generatePopupHTML(stateData);

        this.activePopup = new mapboxgl.Popup({ closeOnClick: false })
            .setLngLat(clickLngLat || coords)
            .setHTML(popupHTML)
            .addTo(this.map);

        // Reset camera centering when user closes popup
        this.activePopup.on('close', () => {
            this.activePopup = null;
            AppState.focusedState = null;
            this.resetMapCamera();
        });
    }

    resetMapCamera() {
        if (!this.map) return;
        this.map.flyTo({
            center: [78.9629, 20.5937],
            zoom: 3.8,
            pitch: 15,
            bearing: 0,
            duration: 1200
        });
    }

    focusMapIndia() {
        if (this.activePopup) this.activePopup.remove();
        this.resetMapCamera();
    }

    /* ==========================================================
       2. SVG Vector Fallback Mode Setup (No Token Bypassed)
       ========================================================== */
    initializeBypassSVG() {
        const mapDiv = document.getElementById('map');
        mapDiv.innerHTML = ''; // Clear container

        // Set up Canvas Overlay overlaying SVG
        this.initializeCanvasOverlay();

        // Create SVG container
        this.svgContainer = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        this.svgContainer.setAttribute("viewBox", "0 0 600 600");
        this.svgContainer.setAttribute("class", "svg-india-map");
        this.svgContainer.style.width = "100%";
        this.svgContainer.style.height = "100%";
        this.svgContainer.style.background = AppState.isNightMode ? "#02050e" : "#e0e7ff";
        this.svgContainer.style.transition = "background 0.4s ease";
        mapDiv.appendChild(this.svgContainer);

        // Add graticule grid lines
        for (let i = 1; i < 6; i++) {
            const gridY = i * 100;
            const lineY = document.createElementNS("http://www.w3.org/2000/svg", "line");
            lineY.setAttribute("x1", "0"); lineY.setAttribute("y1", gridY.toString());
            lineY.setAttribute("x2", "600"); lineY.setAttribute("y2", gridY.toString());
            lineY.setAttribute("stroke", "rgba(255,255,255,0.03)");
            this.svgContainer.appendChild(lineY);

            const gridX = i * 100;
            const lineX = document.createElementNS("http://www.w3.org/2000/svg", "line");
            lineX.setAttribute("x1", gridX.toString()); lineX.setAttribute("y1", "0");
            lineX.setAttribute("x2", gridX.toString()); lineX.setAttribute("y2", "600");
            lineX.setAttribute("stroke", "rgba(255,255,255,0.03)");
            this.svgContainer.appendChild(lineX);
        }

        // Map coordinates helper [India Bounds: 68-98 Lng, 8-38 Lat]
        const mapSvgCoords = (lng, lat) => {
            const x = ((lng - 67.0) / (98.0 - 67.0)) * 500 + 50;
            const y = 600 - (((lat - 6.0) / (38.0 - 6.0)) * 500 + 50); // Invert Y
            return [x, y];
        };

        // Draw State Polygons
        INDIA_STATES_DATA.forEach(state => {
            let pathD = "";
            state.coords.forEach((pt, index) => {
                const svgPt = mapSvgCoords(pt[0], pt[1]);
                if (index === 0) pathD += `M ${svgPt[0]} ${svgPt[1]}`;
                else pathD += ` L ${svgPt[0]} ${svgPt[1]}`;
            });
            pathD += " Z";

            const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
            path.setAttribute("d", pathD);
            path.setAttribute("class", "svg-state-polygon");
            
            // Set base styles
            path.setAttribute("fill", "rgba(0, 243, 255, 0.03)");
            path.setAttribute("stroke", "#00f3ff");
            path.setAttribute("stroke-width", "1.2");
            path.style.cursor = "pointer";
            path.style.transition = "all 0.2s ease";

            // Hover effects
            path.addEventListener("mousemove", (e) => {
                path.setAttribute("fill", "rgba(0, 243, 255, 0.25)");
                path.setAttribute("stroke", "#39ff14");
                path.setAttribute("stroke-width", "2.2");
                UIController.showHolographicCard(e.clientX, e.clientY, state);
            });

            path.addEventListener("mouseleave", () => {
                this.updateBypassSVGColors();
                UIController.hideHolographicCard();
            });

            // Click Popup trigger
            path.addEventListener("click", (e) => {
                this.openBypassSVGPopup(state, e.clientX, e.clientY);
            });

            this.svgContainer.appendChild(path);
        });

        this.updateBypassSVGColors();
    }

    updateBypassSVGColors() {
        if (!this.svgContainer) return;
        const paths = this.svgContainer.querySelectorAll("path");
        
        let fillColor = "rgba(0, 243, 255, 0.03)";
        if (AppState.layers.rainfall) fillColor = "rgba(10, 132, 255, 0.12)";
        else if (AppState.layers.temperature) fillColor = "rgba(255, 59, 48, 0.12)";
        else if (AppState.layers.drought) fillColor = "rgba(255, 149, 0, 0.12)";
        else if (AppState.layers.flood) fillColor = "rgba(191, 90, 242, 0.12)";

        paths.forEach(p => {
            p.setAttribute("fill", fillColor);
            p.setAttribute("stroke", "#00f3ff");
            p.setAttribute("stroke-width", "1.2");
        });
    }

    openBypassSVGPopup(stateData, mouseX, mouseY) {
        // Destroy existing popup if any
        const existing = document.getElementById('svg-custom-popup');
        if (existing) existing.remove();

        AppState.focusedState = stateData;

        // Render popup overlay
        const popup = document.createElement("div");
        popup.id = "svg-custom-popup";
        popup.className = "mapboxgl-popup mapboxgl-popup-anchor-bottom";
        
        // CSS position absolute positioned near click
        popup.style.position = "absolute";
        popup.style.left = `${mouseX - 160}px`; // Centered
        popup.style.top = `${mouseY - 260}px`;
        popup.style.zIndex = "200";
        popup.style.pointerEvents = "auto";

        const innerHTML = `
            <div class="mapboxgl-popup-tip"></div>
            <div class="mapboxgl-popup-content">
                <button class="mapboxgl-popup-close-button" onclick="document.getElementById('svg-custom-popup').remove()">&times;</button>
                ${UIController.generatePopupHTML(stateData)}
            </div>
        `;
        popup.innerHTML = innerHTML;
        document.getElementById('map').appendChild(popup);
    }

    /* ==========================================================
       3. Dynamic Canvas Overlays (Wind Particles, Waves, Cyclones)
       ========================================================== */
    initializeCanvasOverlay() {
        const mapDiv = document.getElementById('map');
        
        this.canvasOverlay = document.createElement('canvas');
        this.canvasOverlay.id = "overlay-canvas";
        this.canvasOverlay.style.position = "absolute";
        this.canvasOverlay.style.top = "0";
        this.canvasOverlay.style.left = "0";
        this.canvasOverlay.style.width = "100%";
        this.canvasOverlay.style.height = "100%";
        this.canvasOverlay.style.zIndex = "2";
        this.canvasOverlay.style.pointerEvents = "none";
        mapDiv.appendChild(this.canvasOverlay);
        
        this.canvasCtx = this.canvasOverlay.getContext('2d');
        
        this.resizeOverlayCanvas();
        window.addEventListener('resize', () => this.resizeOverlayCanvas());

        // Initialize structures
        this.setupWindParticles();
        this.setupMonsoonWaves();
        this.setupCyclones();

        // Begin canvas frame render loop
        this.renderCanvasFrame();
    }

    resizeOverlayCanvas() {
        if (!this.canvasOverlay) return;
        this.canvasOverlay.width = window.innerWidth;
        this.canvasOverlay.height = window.innerHeight;
    }

    setupWindParticles() {
        this.windParticles = [];
        // India bounds
        const minLng = 68.0, maxLng = 97.0;
        const minLat = 8.0, maxLat = 36.0;

        for (let i = 0; i < 400; i++) {
            this.windParticles.push({
                lng: minLng + Math.random() * (maxLng - minLng),
                lat: minLat + Math.random() * (maxLat - minLat),
                speed: 0.05 + Math.random() * 0.07,
                life: Math.random() * 80,
                maxLife: 60 + Math.random() * 50
            });
        }
    }

    setupMonsoonWaves() {
        this.monsoonWaves = [
            { radius: 4, opacity: 0.6 },
            { radius: 10, opacity: 0.4 },
            { radius: 16, opacity: 0.2 }
        ];
    }

    setupCyclones() {
        this.cyclones = [
            { name: "Cyclone Asani", lng: 88.5, lat: 14.5, speed: 0.04, angle: 0, color: '#ff3b30' },
            { name: "Depression", lng: 69.0, lat: 17.5, speed: 0.02, angle: 0, color: '#ff9f0a' }
        ];
    }

    projectGeoToScreen(lng, lat) {
        if (AppState.isBypassMode) {
            // Project SVG 2D layout coordinates
            const x = ((lng - 67.0) / (98.0 - 67.0)) * 500 + 50;
            const y = 600 - (((lat - 6.0) / (38.0 - 6.0)) * 500 + 50);
            
            // Map relative SVG viewport coordinates to screen pixels
            const svgRect = this.svgContainer.getBoundingClientRect();
            const scaleX = svgRect.width / 600;
            const scaleY = svgRect.height / 600;

            return {
                x: svgRect.left + x * scaleX,
                y: svgRect.top + y * scaleY
            };
        } else if (this.map) {
            // Project directly using Mapbox project API
            try {
                // If in 3D globe view, do not render points positioned on the backside (non-visible hemisphere)
                if (this.map.getProjection().name === 'globe') {
                    const center = this.map.getCenter();
                    let dLng = Math.abs(lng - center.lng);
                    if (dLng > 180) dLng = 360 - dLng;
                    const dLat = Math.abs(lat - center.lat);
                    // Standard visual hemisphere radius constraint is approx 80-85 degrees
                    if (Math.sqrt(dLng * dLng + dLat * dLat) > 82) {
                        return null; 
                    }
                }
                return this.map.project([lng, lat]);
            } catch (err) {
                return null;
            }
        }
        return null;
    }

    renderCanvasFrame() {
        this.requestAnimFrameId = requestAnimationFrame(() => this.renderCanvasFrame());

        const ctx = this.canvasCtx;
        ctx.clearRect(0, 0, this.canvasOverlay.width, this.canvasOverlay.height);

        // 1. Auto spin 3D globe
        if (AppState.isSpinning && !AppState.focusedState && this.map && !this.activePopup && !AppState.isBypassMode) {
            try {
                const zoom = this.map.getZoom();
                if (zoom < 5.0) { // only spin when zoomed out to globe
                    const center = this.map.getCenter();
                    center.lng += 0.08;
                    this.map.setCenter(center, { animate: false });
                }
            } catch (e) {}
        }

        // 2. Draw wind vector particles (SW to NE flow)
        if (AppState.layers.wind) {
            ctx.fillStyle = AppState.isNightMode ? "rgba(57, 255, 20, 0.85)" : "rgba(42, 157, 143, 0.85)";
            this.windParticles.forEach(p => {
                p.lng += p.speed * 0.9;
                p.lat += p.speed * 0.7;
                p.life++;

                if (p.life > p.maxLife || p.lng > 98.0 || p.lat > 37.0) {
                    p.lng = 68.0 + Math.random() * 25;
                    p.lat = 6.0 + Math.random() * 10;
                    p.life = 0;
                }

                const screenPos = this.projectGeoToScreen(p.lng, p.lat);
                if (screenPos) {
                    ctx.beginPath();
                    ctx.arc(screenPos.x, screenPos.y, 1.8, 0, Math.PI * 2);
                    ctx.fill();
                }
            });
        }

        // 3. Draw monsoon wavefront curves
        if (AppState.layers.monsoon) {
            ctx.strokeStyle = AppState.isNightMode ? "rgba(0, 243, 255, 0.4)" : "rgba(0, 119, 182, 0.4)";
            ctx.lineWidth = 1.8;
            
            const originLng = 60.0, originLat = 0.0;
            this.monsoonWaves.forEach(w => {
                w.radius += 0.04;
                if (w.radius > 26.0) w.radius = 4.0;
                
                // Draw curve arc projecting SW segments
                ctx.beginPath();
                for (let angle = 20; angle <= 70; angle += 4) {
                    const angRad = angle * (Math.PI / 180);
                    const l = originLng + w.radius * Math.cos(angRad);
                    const lt = originLat + w.radius * Math.sin(angRad);
                    const pt = this.projectGeoToScreen(l, lt);
                    
                    if (pt) {
                        if (angle === 20) ctx.moveTo(pt.x, pt.y);
                        else ctx.lineTo(pt.x, pt.y);
                    }
                }
                ctx.stroke();
            });
        }

        // 4. Draw pulsating cyclone symbols (only in active forecasting timelines)
        if (AppState.timelineStep > 0) {
            this.cyclones.forEach(cy => {
                cy.angle += cy.speed;
                const pos = this.projectGeoToScreen(cy.lng, cy.lat);
                if (pos) {
                    // Pulsating ring
                    const pulse = 1.0 + Math.sin(Date.now()*0.005) * 0.15;
                    ctx.strokeStyle = cy.color;
                    ctx.lineWidth = 1.5;
                    ctx.beginPath();
                    ctx.arc(pos.x, pos.y, 14 * pulse, 0, Math.PI*2);
                    ctx.stroke();

                    // Spinning spiral core
                    ctx.fillStyle = cy.color;
                    ctx.beginPath();
                    ctx.arc(pos.x, pos.y, 4, 0, Math.PI*2);
                    ctx.fill();

                    // Spiral tails
                    ctx.strokeStyle = cy.color;
                    ctx.beginPath();
                    ctx.arc(pos.x, pos.y, 10, cy.angle, cy.angle + Math.PI/2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.arc(pos.x, pos.y, 10, cy.angle + Math.PI, cy.angle + Math.PI*1.5);
                    ctx.stroke();
                }
            });
        }
    }
}

// Static HTML Renderer and telemetry updater
class UIController {
    static init() {
        this.tooltip = document.getElementById('holographic-tooltip');
        this.playBtn = document.getElementById('btn-play-pause');
        
        // Modules loader meters
        this.aiLoadFill = document.querySelector('.left-sidebar .meter-group:nth-child(2) .meter-fill');
        this.aiLoadPct = document.getElementById('ai-load');
        this.terrainLoadFill = document.querySelector('.left-sidebar .meter-group:nth-child(3) .meter-fill');
        this.terrainLoadPct = document.getElementById('terrain-load');
        this.vectorLoadFill = document.querySelector('.left-sidebar .meter-group:nth-child(4) .meter-fill');
        this.vectorLoadPct = document.getElementById('vector-load');

        this.bindEvents();
        this.startTelemetrySimulations();
    }

    static bindEvents() {
        // Toggle Day/Night modes
        document.getElementById('btn-night').addEventListener('click', (e) => {
            document.body.classList.remove('day-mode');
            document.body.classList.add('night-mode');
            AppState.isNightMode = true;
            document.getElementById('btn-day').classList.remove('active');
            e.target.classList.add('active');
            
            if (AppState.isBypassMode) {
                window.app.svgContainer.style.background = "#02050e";
            } else if (window.app.map) {
                window.app.map.setStyle('mapbox://styles/mapbox/dark-v11');
                window.app.updateMapAtmosphere();
            }
        });

        document.getElementById('btn-day').addEventListener('click', (e) => {
            document.body.classList.remove('night-mode');
            document.body.classList.add('day-mode');
            AppState.isNightMode = false;
            document.getElementById('btn-night').classList.remove('active');
            e.target.classList.add('active');
            
            if (AppState.isBypassMode) {
                window.app.svgContainer.style.background = "#e0e7ff";
            } else if (window.app.map) {
                window.app.map.setStyle('mapbox://styles/mapbox/satellite-v9');
                window.app.updateMapAtmosphere();
            }
        });

        // Config buttons
        document.getElementById('spin-toggle').addEventListener('change', (e) => {
            AppState.isSpinning = e.target.checked;
        });

        document.getElementById('atmosphere-toggle').addEventListener('change', (e) => {
            if (window.app.map) {
                window.app.map.setFog(e.target.checked ? {
                    color: AppState.isNightMode ? 'rgb(4, 9, 20)' : 'rgb(186, 210, 235)',
                    'star-intensity': AppState.isNightMode ? 0.6 : 0.0
                } : {});
            }
        });

        document.getElementById('btn-reset-view').addEventListener('click', () => {
            if (AppState.isBypassMode) {
                const existing = document.getElementById('svg-custom-popup');
                if (existing) existing.remove();
            } else {
                window.app.focusMapIndia();
            }
        });

        document.getElementById('btn-zoom-india').addEventListener('click', () => {
            if (AppState.isBypassMode) {
                const existing = document.getElementById('svg-custom-popup');
                if (existing) existing.remove();
            } else {
                window.app.focusMapIndia();
            }
        });

        // Layer selection checkbox bindings
        document.querySelectorAll('.layer-item').forEach(item => {
            const chk = item.querySelector('input');
            const layer = item.dataset.layer;
            
            chk.addEventListener('change', (e) => {
                AppState.layers[layer] = e.target.checked;
                if (e.target.checked) {
                    item.classList.add('active');
                } else {
                    item.classList.remove('active');
                }
                
                // Update map fills
                if (AppState.isBypassMode) {
                    window.app.updateBypassSVGColors();
                } else {
                    window.app.updateStatesColorOverlay();
                }
            });
        });

        // Timeline Slider
        const slider = document.getElementById('timeline-slider');
        slider.addEventListener('input', (e) => {
            this.setTimelineStep(parseInt(e.target.value));
        });

        // Play/Pause simulation
        let isPlaying = false;
        let playInterval = null;
        this.playBtn.addEventListener('click', () => {
            isPlaying = !isPlaying;
            if (isPlaying) {
                this.playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
                playInterval = setInterval(() => {
                    let next = (AppState.timelineStep + 1) % 3;
                    slider.value = next;
                    this.setTimelineStep(next);
                }, 4000);
            } else {
                this.playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
                clearInterval(playInterval);
            }
        });
    }

    static setTimelineStep(step) {
        AppState.timelineStep = step;
        
        // Update slider track labels
        document.querySelectorAll('.timeline-marker-labels span').forEach((span, idx) => {
            if (idx === step) span.classList.add('active');
            else span.classList.remove('active');
        });

        // Update Tick circles
        document.getElementById('tick-0').className = step >= 0 ? "tick active" : "tick";
        document.getElementById('tick-1').className = step >= 1 ? "tick active" : "tick";
        document.getElementById('tick-2').className = step >= 2 ? "tick active" : "tick";

        // Update titles and headers
        const statusText = document.getElementById('timeline-status-text');
        const timeVal = document.getElementById('current-time');
        
        const rainIndex = document.getElementById('telemetry-rain');
        const tempIndex = document.getElementById('telemetry-temp');
        const humidityIndex = document.getElementById('telemetry-humidity');
        const riskIndex = document.getElementById('telemetry-risk');

        if (step === 0) {
            statusText.innerText = "PAST CLIMATE DATA (2000-2015)";
            timeVal.innerText = "2012-08-15 12:00:00";
            rainIndex.innerText = "242 mm";
            tempIndex.innerText = "28.5 °C";
            humidityIndex.innerText = "72 %";
            riskIndex.innerText = "MODERATE (4.8)";
            riskIndex.className = "val text-green";
        } else if (step === 1) {
            statusText.innerText = "LIVE OBSERVATION DATA";
            timeVal.innerText = "2026-06-28 01:50:00";
            rainIndex.innerText = "284 mm";
            tempIndex.innerText = "31.2 °C";
            humidityIndex.innerText = "78 %";
            riskIndex.innerText = "HIGH (6.8)";
            riskIndex.className = "val text-red";
        } else if (step === 2) {
            statusText.innerText = "7-DAY PROBABILITY AI FORECAST";
            timeVal.innerText = "2026-07-05 08:30:00";
            rainIndex.innerText = "318 mm";
            tempIndex.innerText = "34.8 °C";
            humidityIndex.innerText = "85 %";
            riskIndex.innerText = "CRITICAL (8.4)";
            riskIndex.className = "val text-purple pulse-fast";
        }
    }

    static showHolographicCard(x, y, stateData) {
        const stats = stateData.stats[AppState.timelineStep];

        document.getElementById('tooltip-state-name').innerText = stateData.name;
        document.getElementById('tooltip-state-code').innerText = stateData.code;
        document.getElementById('tooltip-rain').innerText = stats.rain;
        document.getElementById('tooltip-temp').innerText = stats.temp;
        document.getElementById('tooltip-heat').innerText = stats.heat;
        document.getElementById('tooltip-monsoon').innerText = stats.monsoon;
        
        const riskSpan = document.getElementById('tooltip-risk-val');
        riskSpan.innerText = stats.risk;
        
        const val = parseFloat(stats.risk);
        const riskBar = document.getElementById('tooltip-risk-bar');
        
        if (val < 5.0) {
            riskSpan.className = "val text-green";
            riskBar.className = "fill bg-green";
        } else if (val < 7.5) {
            riskSpan.className = "val text-amber";
            riskBar.className = "fill bg-amber";
        } else {
            riskSpan.className = "val text-red";
            riskBar.className = "fill bg-red";
        }
        riskBar.style.width = `${val * 10}%`;

        this.tooltip.style.left = `${x + 15}px`;
        this.tooltip.style.top = `${y - 120}px`;
        this.tooltip.classList.add('visible');
    }

    static updateHolographicCardPos(x, y) {
        this.tooltip.style.left = `${x + 15}px`;
        this.tooltip.style.top = `${y - 120}px`;
    }

    static hideHolographicCard() {
        this.tooltip.classList.remove('visible');
    }

    // Custom Glassmorphism HTML generation for Mapbox popup display card
    static generatePopupHTML(stateData) {
        const stats = stateData.stats[AppState.timelineStep];
        const baseTemp = parseFloat(stats.temp);

        // Generate procedural forecast trend bar tags
        let chartHTML = "";
        for (let i = 0; i < 7; i++) {
            const variance = Math.sin(i * 0.9) * 2.5 + (AppState.timelineStep * 1.8);
            const calculatedTemp = (baseTemp + variance).toFixed(1);
            const pct = Math.min((calculatedTemp / 48) * 100, 100);
            const dayLabel = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][i];
            
            const isRed = calculatedTemp > 38.0;
            const barClass = isRed ? "popup-bar-fill text-red" : "popup-bar-fill";
            
            chartHTML += `
                <div class="popup-bar-item">
                    <div class="${barClass}" style="height: ${pct}%; width: 10px;">
                        <span>${calculatedTemp}°</span>
                    </div>
                    <span class="day-lbl">${dayLabel}</span>
                </div>
            `;
        }

        // Advisory string
        let advisoryText = "";
        if (AppState.timelineStep === 0) {
            advisoryText = "Archive observations active. Climate parameters indicate typical seasonal fluctuations. Soil moisture coefficients nominal.";
        } else if (AppState.timelineStep === 1) {
            advisoryText = `Active storm alerts in adjacent seas. Saturation indices rise to **${stats.flood}** risk. Crop stress indices are within typical baselines.`;
        } else if (AppState.timelineStep === 2) {
            advisoryText = `**AI ALERT WARNING**: Evapotranspiration indices will rise 25% due to heat dome. Low-lying riverbeds warning active for sudden flash surges.`;
        }

        return `
            <div class="mapbox-popup-inner">
                <div class="popup-header">
                    <h3>${stateData.name}</h3>
                    <span class="popup-sub">FOCUSED STATE DATA twin</span>
                </div>
                
                <div class="popup-indicators-list">
                    <div class="popup-ind-item"><span class="lbl">Primary Cities</span><span class="val">${stateData.cities.slice(0, 2).join(', ')}</span></div>
                    <div class="popup-ind-item"><span class="lbl">Rainfall Forecast</span><span class="val text-cyan">${stats.rain}</span></div>
                    <div class="popup-ind-item"><span class="lbl">Flood Probability</span><span class="val text-purple">${stats.flood}</span></div>
                    <div class="popup-ind-item"><span class="lbl">Drought Risk Index</span><span class="val text-orange">${stats.drought}</span></div>
                    <div class="popup-ind-item"><span class="lbl">Crop stress Index</span><span class="val text-green">${stats.crop.split(' ')[0]}</span></div>
                </div>

                <div class="popup-forecast-title">7-DAY AI TEMPERATURE FORECAST</div>
                <div class="popup-bars">
                    ${chartHTML}
                </div>

                <div class="popup-advisor">
                    ${advisoryText}
                </div>
            </div>
        `;
    }

    // Simulated dashboard processes indicator loops
    static startTelemetrySimulations() {
        setInterval(() => {
            const ai = Math.floor(35 + Math.sin(Date.now() * 0.001) * 8 + Math.random() * 5);
            const terr = Math.floor(60 + Math.cos(Date.now() * 0.0008) * 6 + Math.random() * 4);
            const vect = Math.floor(75 + Math.sin(Date.now() * 0.0015) * 5 + Math.random() * 3);

            this.aiLoadFill.style.width = `${ai}%`;
            this.aiLoadPct.innerText = `${ai}%`;
            this.terrainLoadFill.style.width = `${terr}%`;
            this.terrainLoadPct.innerText = `${terr}%`;
            this.vectorLoadFill.style.width = `${vect}%`;
            this.vectorLoadPct.innerText = `${vect}%`;
        }, 1500);
    }
}

// Window load trigger
window.addEventListener('DOMContentLoaded', () => {
    window.app = new ClimateApp();
    UIController.init();
});
