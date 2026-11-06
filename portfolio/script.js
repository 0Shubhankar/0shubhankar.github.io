document.addEventListener('DOMContentLoaded', () => {
    const portfolioFeed = document.getElementById('portfolio-grid');
const portfolioItems = [
    {
        projectType: "Geospatial Analysis", //  
        smallTitle: "Comparative Crime Mapping", //  
        title: "Comparative Crime Mapping: New York, Los Angeles, and Chicago",
        titleLink: "1/crime-heatmaps.html",
        tags: ["Crime", "Urban Crime", "Data", "JavaScript", "Python", "Leaflet", "OpenStreetMap", "Interactive", "Mapping", "New York", "Los Angeles", "Chicago"],
        image: "images/previews/01.webp",
    },
    {
        projectType: "Dynamic Information Visualization", //  
        smallTitle: "Navigating Manhattan", //  
        title: "Navigating Manhattan: Traffic Insights Around Major Event Venues",
        titleLink: "2/index.html",
        tags: ["Traffic", "Urban Mobility", "Event Impact", "JavaScript", "Leaflet", "GSAP", "ScrollMagic", "Interactive", "Mapping", "Event Spaces", "Vehicle Density", "Day-Night Patterns"],
        image: "images/previews/02.webp",
    },
    {
        projectType: "Data-Driven Insights", //  
        smallTitle: "A-star Algorithm", //  
        title: "A-star Algorithm in Action: Visualizing the Path from Manhattan to JFK",
        titleLink: "4/allinone/city-pathfinding-analysis.html",
        tags: ["Pathfinding", "A* Algorithm", "Visualization", "heapq", "JavaScript", "Python", "Leaflet", "OSMnx", "NetworkX", "Shortest Path", "Mapping", "Manhattan to JFK"],
        image: "images/previews/03.webp",
    },
    {
        projectType: "Civic Data Innovation", //  
        smallTitle: "School Accessibility", //  
        title: "Exploring School Accessibility in Shibuya, Japan",
        titleLink: "3/shibuya-school-accessibility.html",
        tags: ["School Accessibility", "Isochrone Maps", "Pedestrian Safety", "Data Analysis", "JavaScript", "OSMnx", "OpenStreetMap", "GSAP", "ScrollMagic", "Interactive Visualization", "Mapping", "Shibuya"],
        image: "images/previews/04.webp",
    },
    {
        projectType: "Interactive Data Experience", //  
        smallTitle: "Urban Dynamics", //  
        title: "Urban Dynamics and Coffee Shops: A Visual Exploration through Cluster and Density Maps",
        titleLink: "5/coffee-shop-analysis.html",
        tags: ["Urban Dynamics", "Coffee Shops", "Social Hubs", "Gentrification", "Community Engagement", "JavaScript", "Leaflet", "OpenStreetMap", "Density Maps", "Cluster Maps", "Retail Impact", "Third Places"],
        image: "images/previews/05.webp",
    },
    {
        projectType: "Visual Data Exploration", //  
        smallTitle: "Mapping Sentiment Analysis", //  
        title: "Mapping Sentiment Analysis of DC Pedestrian Comments with Machine Learning Models",
        titleLink: "6/dc-sentiment-analysis.html",
        tags: ["Sentiment Analysis", "Public Comments", "Pedestrian Safety", "Matrix Rain", "Hugging Face Transformers", "Sentence-Transformers", "Scikit-learn", "Voronoi", "Pandas", "Leaflet", "OpenStreetMap", "KMeans Clustering"],
        image: "images/previews/06.webp",
    },
    {
        projectType: "Civic Data Innovation", //  
        smallTitle: "Urban Safety", //  
        title: "Urban Safety and Spatial Dynamics: A Comprehensive Analysis of Crime Correlation with Urban Attributes in Washington D.C",
        titleLink: "7/dc-urban-safety-analysis.html",
        tags: ["Urban Safety", "Crime Analysis", "Spatial Dynamics", "R-tree", "D3.js", "Pandas", "Overpass API", "Maplibre", "Three.js", "Leaflet", "OpenStreetMap", "Word Cloud"],
        image: "images/previews/07.webp",
    },
    {
        projectType: "Geospatial Analysis", //  
        smallTitle: "NoExit Nexus", //  
        title: "NoExit Nexus: Why Are Indian Cities Plagued with Dead-End Streets?",
        titleLink: "8/dead-end-roads-analysis.html",
        tags: ["Transport Planning", "Dead-End Streets", "Traffic Congestion", "NetworkX", "Folium", "Geopandas", "OSMnx", "Map Visualization", "MapLibre","Infrastructure", "Mumbai", "Delhi", "Bengaluru"],
        image: "images/previews/08.webp",
    },
    {
        projectType: "Dynamic Information Visualization", //  
        smallTitle: "Congestion Pricing", //  
        title: "Congestion Pricing ",
        titleLink: "9/road-pricing-simulation.html",
        tags: ["Congestion Pricing", "Transportation Planning", "ERP System", "Leaflet", "Map Visualization", "JavaScript", "Traffic Simulation", "Heatmap", "OpenStreetMap", "Dynamic Controls", "Singapore", "Revenue Tracking"],
        image: "images/previews/09.webp",
    },
    {
        projectType: "Interactive Data Experience", //  
        smallTitle: "City Elements", //  
        title: "City Elements",
        titleLink: "10/urban-network-visualization.html",
        tags: ["3D Visualization", "Interactive Network", "City Connectivity", "THREE.js", "OrbitControls", "Python", "Graph Simulation", "Similarity Mapping", "JavaScript", "Dynamic Controls", "dat.GUI", "Interactive Graph"],
        image: "images/previews/10.webp",
    },
    {
        projectType: "Data-Driven Insights", //  
        smallTitle: "Gentrification", //  
        title: "Gentrification",
        titleLink: "11/gentrification-simulation.html",
        tags: ["Urban Simulation", "3D Visualization", "THREE.js", "OrbitControls", "dat.GUI", "Gentrification", "Real-Time Interaction", "City Planning", "Economic Indicators", "Infrastructure Simulation", "Demographic Analysis", "Building Density"],           
        image: "images/previews/11.webp",
    },
    {
        projectType: "Visual Data Exploration", //  
        smallTitle: "CityScape Classifier", //  
        title: "CityScape Classifier",
        titleLink: "12/image-classification.html",
        tags: ["Image Gallery", "Highcharts", "Places365 ResNet50", "Radar Chart", "Tweakpane", "Image Classification", "Model training", "Interactive Visualization", "python", "Indian Cities", "Image Classification", "Wikipedia Images"],
        image: "images/previews/12.webp",
    },
    {
        projectType: "Interactive Data Experience", //  
        smallTitle: "Urban Ad Evolution", //  
        title: "Urban Ad Evolution",
        titleLink: "13/urban-poetry.html",
        tags: ["Scroll Animation", "Interactive Story", "Background Transition", "JavaScript", "CSS Animation", "Urban Advertising", "Image-based Animation", "Dynamic Content", "Text and Image Sync", "History of Advertising", "Interactive Visuals", "User Engagement"],
        image: "images/previews/13.webp",
    },
    {
        projectType: "Civic Data Innovation", //  
        smallTitle: "Park Accessibility Score", //  
        title: "Park Accessibility Score",
        titleLink: "14/park-accessibility.html",
        tags: ["Park Analysis","Interactive Map", "Isochrone Analysis", "Decay Scores", "Maplibre", "Highcharts", "OpenStreetMap", "OSMnx", "NetworkX", "Python", "Dynamic Chart", "Park Accessibility"],
        image: "images/previews/14.webp",
    },
    {
        projectType: "Dynamic Information Visualization", //  
        smallTitle: "Parking Print", //  
        title: "Parking Print",
        titleLink: "15/city-parking-analysis.html",
        tags: ["City Parking", "Maplibre", "OpenStreetMap", "City Infrastructure", "Parking Area Analysis", "Urban Transport", "Parking Density", "Interactive Maps", "Parking Space Allocation", "Car Density Mapping", "Parking Infrastructure", "Dynamic Maps"],
        image: "images/previews/15.webp",
    },
    {
        projectType: "Geospatial Analysis", //  
        smallTitle: "CBD Spectrum", //  
        title: "CBD Spectrum",
        titleLink: "16/city-centre-activity.html",
        tags: ["City Visualization", "Activity Ratings", "MapLibre", "Interactive Charts", "Urban Districts", "Business District Analysis", "Doughnut Charts", "Central Business Districts", "Public Spaces Evaluation", "User Preferences", "Data Sorting", "Map Integration"],
        image: "images/previews/16.webp",
    },
    {
        projectType: "Data-Driven Insights", //  
        smallTitle: "Dynamic Traffic Simulation", //  
        title: "Dynamic Traffic Simulation at Connaught Place: Insights from the Krauss Car-Following Model",
        titleLink: "17/waiting-time-visualization.html",
        tags: ["Krauss Car-Following Model", "Traffic Flow Simulation", "Connaught Place Simulation", "SUMO", "Python", "TraCI", "Netedit", "Waiting Time Visualization", "Vehicle Speed Calculation", "Traffic Management", "Acceleration/Deceleration Dynamics", "Urban Mobility Analysis"],
        image: "images/previews/17.webp",
    },
    {
        projectType: "Dynamic Information Visualization", //  
        smallTitle: "Honk If You’re Impatient", //  
        title: "Honk If You’re Impatient: A Mumbai Traffic Simulation Saga",
        titleLink: "18/traffic-honking-simulation.html",
        tags: ["SUMO Simulation", "Urban Traffic Modeling", "TraCI Integration", "Python", "Traffic Scenario Analysis", "Vehicle Honking Behavior", "Chhatrapati Shivaji Maharaj Terminus", "Traffic Management Strategies", "Proximity Threshold Simulation", "Driver Patience Sensitivity", "Traffic Flow Dynamics", "Scenario-Based Simulation"],
        image: "images/previews/18.webp",
    },
    {
        projectType: "Civic Data Innovation", //  
        smallTitle: "Gotham City Housing Crisis", //  
        title: "Gotham City Housing Crisis: A Planner’s Gamble",
        titleLink: "19/housing-policy-game.html",
        tags: ["Housing Policy Game", "Urban Housing Crisis", "Decision-Making Game", "Gentrification Challenges", "Affordable Housing Policies", "Rent Control Strategies", "High-Density Development", "Homelessness Solutions", "City Management Simulation", "Inclusionary Zoning Policies", "Community Development Initiatives", "Player Choices"],
        image: "images/previews/19.webp",
    },
    {
        projectType: "Civic Data Innovation", //  
        smallTitle: "Greenville Green", //  
        title: "Greenville Green: Balancing Parks and Progress",
        titleLink: "20/green-space-policy-game.html",
        tags: ["Green Policy Game", "Environmental Justice", "Green Space Development", "Urban Planning Simulation", "Economic Development Balance", "Community Engagement", "Sustainable City Planning", "Park Maintenance Challenges", "Volunteer Programs", "Public-Private Partnerships", "Equitable Resource Allocation", "Urban Green Infrastructure"],
        image: "images/previews/20.webp",
    },
    {
        projectType: "Data-Driven Insights", //  
        smallTitle: "Spudsville Under Siege", //  
        title: "Spudsville Under Siege: A Crime Prevention Dilemma",
        titleLink: "21/crime-policy-game.html",
        tags: ["Crime Policy Game", "Crime Prevention", "Public Safety", "Civil Liberties", "Law Enforcement Strategies", "Surveillance and Privacy", "Community Policing", "Media and Public Perception", "Political Leadership", "Social Programs for Crime Reduction", "Ethics in Policing", "Public Policy Simulation"],
        image: "images/previews/21.webp",
    },
    {
        projectType: "Civic Data Innovation", //  
        smallTitle: "Green Lights & Quick Rides", //  
        title: "Green Lights & Quick Rides: Optimizing Emergency Response",
        titleLink: "22/emergency-response-comparison.html",
        tags: ["SUMO", "TraCI", "Emergency Vehicle Simulation", "Traffic Signal Preemption", "Dijkstra's Algorithm", "Python", "Urban Mobility", "Traffic Optimization", "Simulation", "Emergency Response Routing", "Krauss Car-Following Model", "New York City"],
        image: "images/previews/22.webp",
    },
    {
        projectType: "Civic Data Innovation", //  
        smallTitle: "Revitalize Central", //  
        title: "Revitalize Central: A Mayor's Dilemma",
        titleLink: "23/downtown-policy-game.html",
        tags: ["Urban Revitalization", "Downtown Development", "Public-Private Partnerships", "Economic Incentives", "Mixed-Use Development", "Zoning Reforms", "Affordable Housing", "Economic Development Zones", "Sustainable Growth", "Stakeholder Management", "Urban Planning", "Infrastructure Improvements"],
        image: "images/previews/23.webp",
    },
    {
        projectType: "Geospatial Analysis", //  
        smallTitle: "Air Quality Globe", //  
        title: "Visualizing Urban Air Pollution Patterns through a 3D Globe Representation",
        titleLink: "24/air-pollution-visualization.html",
        tags: ["3D Visualization", "Air Pollution", "Data Representation", "Environmental Impact", "WebGL", "Geospatial Analysis", "Interactive Globe", "Sustainability", "Three.js", "Dynamic Visualization", "Public Health", "Environmental Awareness"],
        image: "images/previews/24.webp",
    },
    {
        projectType: "Geospatial Analysis", //  
        smallTitle: "Global Threads", //  
        title: "Global Threads: Mapping the Migration and Remittance Pathways of the Indian Diaspora",
        titleLink: "25/indian-migration.html",
        tags: ["3D Visualization", "Data Representation", "Globe Visualization", "Particle Animation", "Geospatial Analysis", "Cultural Exchange", "Migration Patterns", "Remittance Flow", "Socio-Economic Dynamics", "User Interaction", "Arcs", "Three.js"],
        image: "images/previews/25.webp",
    },
    {
      projectType: "Interactive Simulation",
      smallTitle: "The Mayor Is Broke!",
      title: "The Mayor Is Broke! — A City-Finance Game",
      titleLink: "41/index.html",
      tags: ["Municipal Finance", "City Simulation", "Municipal Bonds", "Urban Economics", "Fiscal Policy", "Debt Management", "Interactive Game", "JavaScript"],
      image: "images/previews/41.webp",
    },
    {
      projectType: "Interactive Research Essay",
      smallTitle: "Planning, Psychology and the Human City",
      title: "The Human City",
      titleLink: "53/index.html",
      tags: ["Urban Planning", "Human Psychology", "Environmental Psychology", "Delhi", "Research", "Visual Storytelling", "Human Needs", "Public Space"],
      image: "images/previews/53.webp",
    },
    {
      projectType: "Interactive Material Exhibit",
      smallTitle: "The Secret Life of a Brick",
      title: "The Secret Life of a Brick",
      titleLink: "52/index.html",
      tags: ["Urban Materials", "Interactive Visualization", "Embodied Carbon", "Circular Economy", "Material Lifecycle", "Architecture", "Sustainability", "Canvas"],
      image: "images/previews/52.webp",
    },
    {
      projectType: "Interactive Sound Installation",
      smallTitle: "The City Is an Instrument",
      title: "The City Is an Instrument",
      titleLink: "51/index.html",
      tags: ["Urban Design", "Soundscapes", "Generative Audio", "Web Audio", "Interactive Art", "Creative Coding", "Data Visualization", "Canvas"],
      image: "images/previews/51.webp",
    },
    {
      projectType: "Urban Finance Strategy Game",
      smallTitle: "The Parallel Cities Experiment",
      title: "The Parallel Cities Experiment",
      titleLink: "50/index.html",
      tags: ["Municipal Finance", "Blockchain", "Digital Bonds", "Capital Budgeting", "Urban Economics", "Housing Affordability", "Financial Modeling", "Scenario Analysis", "Strategy Game"],
      image: "images/previews/50.webp",
    },
    {
      projectType: "Financial Science Game",
      smallTitle: "The Interest Rate Roller Coaster",
      title: "The Interest Rate Roller Coaster",
      titleLink: "49/index.html",
      tags: ["Fixed Income", "Yield Curve", "Bond Valuation", "Duration", "Convexity", "Municipal Bonds", "Interest Rate Derivatives", "Real Estate Finance", "Financial Simulation"],
      image: "images/previews/49.webp",
    },
    {
      projectType: "Transit Strategy Simulation",
      smallTitle: "Move the City",
      title: "Move the City — Metro, Money & Opportunity",
      titleLink: "48/index.html",
      tags: ["Urban Transit", "Metro Simulation", "Municipal Bonds", "Land Value Capture", "Accessibility", "Infrastructure Finance", "Urban Economics", "Strategy Game"],
      image: "images/previews/48.webp",
    },
    {
      projectType: "Financial Detective Game",
      smallTitle: "Follow the Money!",
      title: "Follow the Money! — A Civic Finance Mystery",
      titleLink: "47/index.html",
      tags: ["Municipal Finance", "Financial Investigation", "Blockchain", "Fixed Income", "Forensic Accounting", "Smart Contracts", "Financial Storytelling", "Interactive Game"],
      image: "images/previews/47.webp",
    },
    {
      projectType: "Real Estate Finance Game",
      smallTitle: "The Property Machine",
      title: "The Property Machine",
      titleLink: "46/index.html",
      tags: ["Real Estate", "Asset Valuation", "Mortgage Finance", "Capital Structure", "Private Equity", "Securitization", "Portfolio Risk", "Financial Simulation"],
      image: "images/previews/46.webp",
    },
    {
      projectType: "Disaster Finance Strategy Game",
      smallTitle: "One Storm Away from Default",
      title: "One Storm Away from Default",
      titleLink: "45/index.html",
      tags: ["Municipal Finance", "Climate Risk", "Disaster Simulation", "Municipal Bonds", "Insurance", "Debt Management", "Resilience", "Strategy Game"],
      image: "images/previews/45.webp",
    },
    {
      projectType: "Real Estate Strategy Game",
      smallTitle: "The Developer's Dilemma",
      title: "The Developer's Dilemma",
      titleLink: "44/index.html",
      tags: ["Real Estate Development", "Investment Game", "Project Finance", "Asset Valuation", "Construction Loans", "Financial Modeling", "Urban Development", "Strategy"],
      image: "images/previews/44.webp",
    },
    {
      projectType: "Interactive Finance Game",
      smallTitle: "Buy a Piece of the City",
      title: "Buy a Piece of the City",
      titleLink: "43/index.html",
      tags: ["Municipal Bonds", "Blockchain", "Tokenization", "Bond Valuation", "Duration", "Fixed Income", "Financial Markets", "Interactive Game"],
      image: "images/previews/43.webp",
    },
    {
      projectType: "Investment Simulation",
      smallTitle: "The $100 Million Mistake!",
      title: "The $100 Million Mistake!",
      titleLink: "42/index.html",
      tags: ["Investment Game", "Asset Valuation", "Project Finance", "DCF", "Portfolio Risk", "Municipal Bonds", "Financial Modeling", "JavaScript"],
      image: "images/previews/42.webp",
    },
    {
        projectType: "Geospatial Analysis", //  
        smallTitle: "World Temperature", //  
        title: "A Warming Planet: Visualizing Global Temperature Change",
        titleLink: "26/global-temperature-visualization.html",
        tags: ["Global Warming", "Climate Change", "Temperature Anomalies", "Interactive Globe", "Climate Research", "Urban Heat", "Three.js", "WebGL", "Data Visualization", "Environmental Science"],
        image: "images/previews/26.webp",
    },
    {
        projectType: "Visual Data Exploration", //  
        smallTitle: "Global Energy Dynamics", //  
        title: "Global Energy Dynamics: Production and Consumption Patterns",
        titleLink: "27/energy-map.html",
        tags: ["Energy Visualization", "Carto", "Leaflet", "Mapping", "Energy Production", "Energy Consumption", "Data Analysis", "Environmental Science", "Interactive Map", "Socio-Economic Factors", "Geographical Distribution", "Data Representation"],
        image: "images/previews/27.webp",
    },
    {
        projectType: "Data-Driven Insights", //  
        smallTitle: "Evolving Cityscapes", //  
        title: "Evolving Cityscapes: A Migration Simulation",
        titleLink: "28/income-inequality-simulation.html",
        tags: ["Urban Migration", "Income Distribution", "Population Movement", "Cluster Analysis", "Socio-Economic Dynamics", "City Infrastructure", "Ease of Living", "Economic Factors", "Income Inequality", "Housing Affordability", "Urban Simulation", "Population Dynamics"],
        image: "images/previews/28.webp",
    },
    {
        projectType: "Civic Data Innovation", //  
        smallTitle: "Socio-economic impacts", //  
        title: "Socio-economic impacts on different neighborhood classes",
        titleLink: "29/housing-economic-impact.html",
        tags: ["Urban Economics", "Scenario Analysis", "Leaflet", "Map Visualization", "Neighborhood Classification", "Economic Boom", "Economic Recession", "Rent Control", "Housing Affordability", "GeoJSON", "Dynamic Map", "Urban Simulation"],
        image: "images/previews/29.webp",
    },
    {
        projectType: "Civic Data Innovation", //  
        smallTitle: "Workplace Proximity Impact", //  
        title: "Workplace Proximity Impact on Housing",
        titleLink: "30/workplace-housing-impact.html",
        tags: ["Leaflet", "Map Visualization", "Urban Economics", "Housing Prices", "Transportation Planning", "Workplace Proximity AN", "Congestion Factor", "Public Transport", "Interactive Map", "Neighborhood Classification", "Elasticity", "Workplace Proximity", "Urban Simulation"],
        image: "images/previews/30.webp",
    },
    {
        projectType: "Dynamic Information Visualization", //  
        smallTitle: "Green Urbanism Simulator", //  
        title: "Green Space and Urban Dynamics Simulation: Exploring Environmental Impact and Sustainability.",
        titleLink: "31/green-city-generator.html",
        tags: ["Green Dynamics", "3D Visualization", "Population Metrics", "Carbon Emissions", "Green Space", "Sustainable Development", "Three.js", "Simulation", "Data Visualization", "Environment", "City Planning", "Interactive Design"],
        image: "images/previews/31.webp",
    },
    {
        projectType: "Geospatial Analysis", //  
        smallTitle: "Sprawl v/s High Density", //  
        title: "Urban Simulation with Environmental Impact: Analyzing Sustainability and Resource Management",
        titleLink: "32/urban-sprawl-density.html",
        tags: ["Sprawl Simulation", "Environmental Impact", "3D Visualization", "Sustainable Development", "Carbon Emissions", "Population Density", "Three.js", "Data Visualization", "Resource Management", "Interactive Design", "Energy Usage", "Resource Planning"],
        image: "images/previews/32.webp",
    },
    {
        projectType: "Interactive Data Experience", //  
        smallTitle: "Public Goods Payoff Simulator", //  
        title: "Public Goods Payoff Simulator: The Free Bus Ride Dilemma",
        titleLink: "33/free-public-transit-simulation.html",
        tags: ["Three.js", "Simulation", "Public Goods", "Free Bus Ride", "Cooperation", "Defection", "Loners", "Agent-based Modeling", "Data Visualization", "Interactive Simulation", "Game Theory", "Social Behavior"],
        image: "images/previews/33.webp",
    },
    {
        projectType: "Civic Data Innovation", //  
        smallTitle: "Urban Flow Simulator", //  
        title: "Urban Flow Simulator",
        titleLink: "34/taxi-commercial-centre.html",
        tags: ["Taxi Simulation", "Transportation", "Urban Dynamics", "Commercial Centers", "Traffic Patterns", "Real Estate", "Traffic Patterns", "Interactive Simulation", "GUI", "Urban Mobility", "Dynamic Movement", "Transportation Networks"],
        image: "images/previews/34.webp",
    },
    {
        projectType: "Data-Driven Insights", //  
        smallTitle: "Echo Chambers and Polarization", //  
        title: "Echo Chambers and Polarization",
        titleLink: "35/echo-chamber-polarization.html",
        tags: ["Social Dynamics", "Echo Chambers", "Polarization", "Agent-Based Simulation", "Social Connections", "Behavioral Patterns", "Political Affiliation", "Interactive Visualization", "Network Analysis", "Community Formation", "Personal Traits", "Dynamic Clustering"],
        image: "images/previews/35.webp",
    },
    {
        projectType: "Civic Data Innovation", //  
        smallTitle: "Affordability & Migration Simulator", //  
        title: "Affordability & Migration Simulator",
        titleLink: "36/urban-3d-visualization.html",
        tags: ["Housing Affordability", "Socio-Economic Dynamics", "Urban Simulation", "Affordability Index", "Population Density", "Real Estate Prices", "Dynamic Interaction", "Particle Movement", "Data Visualization", "Urban Migration", "Interactive GUI","3D Visualization"],
        image: "images/previews/36.webp",
    },
    {
        projectType: "Dynamic Information Visualization", //  
        smallTitle: "Passenger Flow Visualization", //  
        title: "Passenger Flow Visualization on the Metro Platform",
        titleLink: "37/metro-crowd-simulation.html",
        tags: ["Crowd Simulation", "Train Station", "Passenger Flow", "Dynamic Animation", "Real-time Metrics", "Crowd Density", "Platform Congestion", "Interactive Visualization", "Behavioral Modeling", "Public Transport", "Movement Patterns", "Transit Dynamics"],
        image: "images/previews/37.webp",
    },
    {
        projectType: "Data-Driven Insights", //  
        smallTitle: "Misinformation Network", //  
        title: "Misinformation Network",
        titleLink: "38/misinformation-spread.html",
        tags: ["Information Spread", "Network Simulation", "Misinformation Dynamics", "Node Interaction", "Social Dynamics", "Data Visualization", "Real-Time Metrics", "User Interaction", "Susceptibility Modeling", "Network Analysis", "Particle Movement", "Influence Tracking"],
        image: "images/previews/38.webp",
    },
    {
        projectType: "Civic Data Innovation", //  
        smallTitle: "Insurgency Dynamics Simulator", //  
        title: "Insurgency Dynamics Simulator",
        titleLink: "39/dissent-simulation.html",
        tags: ["Insurgency Simulation", "Agent-Based Modeling", "Socio-Political Dynamics", "Population Dynamics", "Visual Simulation", "User Interaction", "Real-Time Data", "Dynamic Feedback", "Messaging Impact", "Group Transition", "Socio-Economic Factors", "Stickman Visualization"],
        image: "images/previews/39.webp",
    },
    {
        projectType: "Data-Driven Insights", //  
        smallTitle: "Belonging Dynamics", //  
        title: "Belonging Dynamics",
        titleLink: "40/belonging-simulation.html",
        tags: ["Belonging Simulation", "Social Dynamics", "Agent-Based Modeling", "Group Behavior", "Real-Time Visualization", "User Interaction", "Socio-Economic Factors", "Diversity and Inclusion", "Community Engagement", "Dynamic Movement", "Stickman Visualization", "Data-Driven Insights"],
        image: "images/previews/40.webp",
    },
];

    

    portfolioItems.forEach((item, index) => {
    const portfolioItem = document.createElement('div');
    portfolioItem.className = 'grid--cell';
    portfolioItem.dataset.tags = item.tags.join(' ');
    portfolioItem.innerHTML = `
        <article class="grid--item">
            <div class="preview--container">
                <a href="${item.titleLink}" class="preview-image--container">
                    <img class="preview-image" src="${item.image}" alt="${item.smallTitle}" loading="${index < 4 ? 'eager' : 'lazy'}" decoding="async" width="960" height="720">
                </a>
                <div class="meta--container">
                    <a href="#" class="issue">${item.projectType}</a>
                    <a href="#" class="page">${item.smallTitle}</a>
                </div>
            </div>
            <div class="content--container">
                <div class="title--container">
                    <a class="title--text" href="${item.titleLink}">${item.title}</a>
                </div>
                <div class="tags--overflow-container">
                    <ul class="tags--container">
                        ${item.tags.map(tag => `<li><a href="#" class="tag">${tag}</a></li>`).join('')}
                    </ul>
                </div>
            </div>
        </article>
    `;
    portfolioFeed.appendChild(portfolioItem);
});


    // Add event listener to each tag
    document.querySelectorAll('.tag').forEach(tag => {
        tag.addEventListener('click', (e) => {
            e.preventDefault();
            const selectedTag = e.target.textContent;
            filterPortfolioItems(selectedTag);
        });
    });

    function filterPortfolioItems(tag) {
        document.querySelectorAll('.grid--cell').forEach(item => {
            if (item.dataset.tags.includes(tag)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }
});
