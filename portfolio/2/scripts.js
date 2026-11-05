// Define sections array once
var sections = [
    { id: "#section1", lat: 40.7580, lon: -73.9855 }, // Times Square
    { id: "#section2", lat: 40.7505, lon: -73.9934 }, // Madison Square Garden
    { id: "#section3", lat: 40.7730, lon: -73.9820 },  // Lincoln Center
    { id: "#section4", lat: 40.7851, lon: -73.9683 },  // Central Park
    { id: "#section5", lat: 40.7587, lon: -73.9787 }, // Rockefeller Center 
    { id: "#section6", lat: 40.7577, lon: -74.0025 }, // Javits Center
    { id: "#section7", lat: 40.7590, lon: -73.9845 }  // Broadway Theaters
];

const zoomLevel = 16; // Set zoom level to 16 for all sections

// Function to set up the interactive map with dark mode and GeoJSON styling
function setupInteractiveMap(mapId, geojsonFile, center, zoomLevel) {
    var map = L.map(mapId).setView(center, zoomLevel);

    // Add dark mode tile layer
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>',
        subdomains: 'abcd',
        maxZoom: 19
    }).addTo(map);

    // Load GeoJSON from an external file
    fetch(geojsonFile)
        .then(response => response.json())
        .then(data => {
            // Add GeoJSON layer to the map once the file is loaded
            L.geoJSON(data, {
                style: function (feature) {
                    return { color: 'white' }; // Set the color for the GeoJSON features
                }
            }).addTo(map);
        })
        .catch(err => console.error('Error loading the GeoJSON data: ', err));

    return map;
}

// Function to animate the map to different locations
function animateMap(map, lat, lon, zoom) {
    gsap.to(map, {
        duration: 1,
        ease: "power1.inOut",
        onUpdate: function() {
            map.setView([lat, lon], zoom);
        }
    });
}

// Initialize the main map
var mainMap = L.map('map').setView([40.7580, -73.9855], zoomLevel); // Default to Times Square with zoom level 16

// Add dark mode tile layer to the main map
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>',
    subdomains: 'abcd',
    maxZoom: 19
}).addTo(mainMap);

// Load combined GeoJSON data into the main map
fetch('combined_geojson.geojson')
    .then(response => response.json())
    .then(data => {
        addAnimatedPolylinesFromGeoJSON(mainMap, data);
    })
    .catch(err => console.error('Error loading the GeoJSON data: ', err));

// Add animated polylines from GeoJSON
function addAnimatedPolylinesFromGeoJSON(map, data) {
    data.features.forEach(feature => {
        if (feature.geometry.type === "LineString") {
            var coordinates = feature.geometry.coordinates.map(coord => [coord[1], coord[0]]);
            var polyline = L.polyline(coordinates, {
                color: 'white',
                weight: 2,
                dashArray: '10, 20',
                dashOffset: '0'
            }).addTo(map);
            animateDash(polyline);
        }
    });
}

function animateDash(polyline) {
    var offset = 0;
    setInterval(function () {
        offset -= 1; // Move the dash
        polyline.setStyle({
            dashOffset: offset
        });
    }, 100); // Adjust speed
}

// ScrollMagic controller
var controller = new ScrollMagic.Controller();

// Create ScrollMagic scenes for each section
sections.forEach(function(section) {
    new ScrollMagic.Scene({
        triggerElement: section.id,
        duration: "70%", // Increased duration for more visibility of the map
        triggerHook: 0.5
    })
    .on("enter", function () {
        animateMap(mainMap, section.lat, section.lon, zoomLevel); // Use fixed zoom level 16
        fadeInContent(section.id);
    })
    .addTo(controller);
});

// Fade in animation for each section
sections.forEach(function(section) {
    var fadeInTween = gsap.fromTo(section.id, { opacity: 0 }, { opacity: 1, duration: 2, delay: 1 });
    new ScrollMagic.Scene({
        triggerElement: section.id,
        duration: "90%", // Increased duration for more visibility of the map
        triggerHook: 0.5
    })
    .setTween(fadeInTween)
    .addTo(controller);
});

function fadeInContent(sectionId) {
    gsap.to(sectionId, { opacity: 1, duration: 2, delay: 1 });
}

// Add pulsing icons to the map
sections.forEach(function(section) {
    var pulsingIcon = L.divIcon({
        className: 'pulsing-icon',
        html: '<div class="pulse"></div>',
        iconSize: [20, 10]
    });

    L.marker([section.lat, section.lon], { icon: pulsingIcon }).addTo(mainMap);
});

// Day and Time Slider Logic
document.addEventListener('DOMContentLoaded', function () {
    var daySlider = document.getElementById('daySlider');
    var timeSlider = document.getElementById('timeSlider');
    var dayLabel = document.getElementById('dayLabel');
    var timeLabel = document.getElementById('timeLabel');

    var daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    var timesOfDay = ["morning", "afternoon", "evening", "night"];

    daySlider.addEventListener('input', function () {
        dayLabel.textContent = daysOfWeek[this.value];
        updateMap();
    });

    timeSlider.addEventListener('input', function () {
        timeLabel.textContent = timesOfDay[this.value];
        updateMap();
    });

    function updateMap() {
        var selectedDay = daysOfWeek[daySlider.value];
        var selectedTime = timesOfDay[timeSlider.value];
        clearPolylines(mainMap);
        addAnimatedPolylinesFromGeoJSON(mainMap, selectedDay, selectedTime);
    }

    function clearPolylines(map) {
        map.eachLayer(function (layer) {
            if (layer instanceof L.Polyline) {
                map.removeLayer(layer);
            }
        });
    }

    function addAnimatedPolylinesFromGeoJSON(map, day, time) {
        fetch('combined_geojson.geojson')
            .then(response => response.json())
            .then(data => {
                data.features.forEach(feature => {
                    if (feature.geometry.type === "LineString" && feature.properties.trafficData[day] && feature.properties.trafficData[day][time]) {
                        var trafficInfo = feature.properties.trafficData[day][time];
                        var coordinates = feature.geometry.coordinates.map(coord => [coord[1], coord[0]]);
                        var polylineColor = trafficInfo.eventInfluence > 1.1 ? 'red' : 'white';
                        var polyline = L.polyline(coordinates, {
                            color: polylineColor,
                            weight: 2,
                            dashArray: '10, 20',
                            dashOffset: '0'
                        }).addTo(map);
                        polyline.bindPopup(
                            `Road: ${feature.properties.name}<br>` +
                            `Traffic Flow: ${trafficInfo.trafficFlow}<br>` +
                            `Congestion Level: ${trafficInfo.congestionLevel}<br>` +
                            `Average Speed: ${trafficInfo.averageSpeed} km/h<br>` +
                            `Event Influence: ${trafficInfo.eventInfluence}`
                        );
                        animateDash(polyline);
                    }
                });
            });
    }

    updateMap(); // Initial map update
});
