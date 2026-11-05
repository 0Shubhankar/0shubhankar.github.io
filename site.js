const desktopQuery = window.matchMedia("(min-width: 921px)");
let activeObservers = [];
let projectScrollCleanup = null;

const disconnectObservers = () => {
  activeObservers.forEach((observer) => observer.disconnect());
  activeObservers = [];
  if (projectScrollCleanup) {
    projectScrollCleanup();
    projectScrollCleanup = null;
  }
};

const setActive = (items, activeItem) => {
  items.forEach((item) => item.classList.toggle("is-active", item === activeItem));
};

const createStepObserver = (items, onActive) => {
  const observer = new IntersectionObserver(
    (entries) => {
      const active = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (active) onActive(active.target);
    },
    {
      rootMargin: "-28% 0px -34% 0px",
      threshold: [0.35, 0.65],
    },
  );

  items.forEach((item) => observer.observe(item));
  activeObservers.push(observer);
};

const createProjectScrollSpy = (projectSteps, projectCategories, onActive) => {
  let activeIndex = -1;
  let ticking = false;

  const update = () => {
    ticking = false;
    const targetY = window.innerHeight * 0.42;
    let nextIndex = 0;
    let nextDistance = Number.POSITIVE_INFINITY;

    projectSteps.forEach((step, index) => {
      const rect = step.getBoundingClientRect();
      const anchor = Math.max(rect.top, Math.min(targetY, rect.bottom));
      const distance = Math.abs(anchor - targetY);

      if (distance < nextDistance) {
        nextDistance = distance;
        nextIndex = index;
      }
    });

    if (nextIndex === activeIndex) return;

    activeIndex = nextIndex;
    const step = projectSteps[activeIndex];
    setActive(projectSteps, step);
    projectCategories.forEach((item, index) =>
      item.classList.toggle("is-active", index === activeIndex),
    );
    onActive(step);
  };

  const requestUpdate = () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  };

  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate);
  update();

  return () => {
    window.removeEventListener("scroll", requestUpdate);
    window.removeEventListener("resize", requestUpdate);
  };
};

const setupScrollStories = () => {
  disconnectObservers();

  const storySteps = [...document.querySelectorAll(".story-step")];
  const projectSteps = [...document.querySelectorAll(".projects-story-step")];
  const projectCategories = [...document.querySelectorAll(".projects-category-list li")];

  if (!desktopQuery.matches || !("IntersectionObserver" in window)) {
    storySteps.forEach((item) => item.classList.add("is-active"));
    projectSteps.forEach((item) => item.classList.add("is-active"));
    projectCategories.forEach((item, index) => item.classList.toggle("is-active", index === 0));
    return;
  }

  const story = document.querySelector(".scroll-story");
  const eyebrow = document.getElementById("story-eyebrow");
  const panelTitle = document.getElementById("story-panel-title");
  const panelMeta = document.getElementById("story-panel-meta");
  const sceneMap = {
    "Urban computing": "urban",
    Simulation: "simulation",
    "Spatial interfaces": "interfaces",
    "Quant research": "quant",
  };

  if (story && storySteps.length && eyebrow && panelTitle && panelMeta) {
    createStepObserver(storySteps, (step) => {
      setActive(storySteps, step);
      eyebrow.textContent = step.dataset.eyebrow || "";
      panelTitle.textContent = step.dataset.title || "";
      panelMeta.textContent = step.dataset.meta || "";
      story.dataset.scene = sceneMap[step.dataset.eyebrow] || "urban";
    });
  }

  const projectEyebrow = document.getElementById("projects-story-eyebrow");
  const projectTitle = document.getElementById("projects-story-title");
  const projectMeta = document.getElementById("projects-story-meta");

  if (projectSteps.length && projectEyebrow && projectTitle && projectMeta) {
    projectScrollCleanup = createProjectScrollSpy(projectSteps, projectCategories, (step) => {
      projectEyebrow.textContent = step.dataset.eyebrow || "Research Portfolio";
      projectTitle.textContent = step.dataset.title || "";
      projectMeta.textContent = step.dataset.meta || "";
    });
  }
};

setupScrollStories();
desktopQuery.addEventListener("change", setupScrollStories);

const projectDestinations = {
  "Multi-City A* Route-Finding System": "portfolio/4/allinone/city-pathfinding-analysis.html",
  "Dead-End Street Network Analysis": "portfolio/8/dead-end-roads-analysis.html",
  "Shibuya School Accessibility Mapping": "portfolio/3/shibuya-school-accessibility.html",
  "Green Space Accessibility and Park Usability Index": "portfolio/14/park-accessibility.html",
  "Global Air Pollution Globe": "portfolio/24/air-pollution-visualization.html",
  "Global Energy Production and Consumption Map": "portfolio/27/energy-map.html",
  "Temperature and Climate Globe Visualization": "portfolio/26/global-temperature-visualization.html",
  "Manhattan Event Congestion Analysis": "portfolio/2/index.html",
  "Ambulance Dispatch and Emergency Vehicle Simulation": "portfolio/22/emergency-response-comparison.html",
  "Global Parking Supply and CBD Parking Analysis": "portfolio/15/city-parking-analysis.html",
  "Congestion Pricing and Road Pricing Study": "portfolio/9/road-pricing-simulation.html",
  "Taxi and Commercial Center Simulation": "portfolio/34/taxi-commercial-centre.html",
  "Vehicle Waiting Time Visualization": "portfolio/17/waiting-time-visualization.html",
  "Gentrification and Neighborhood Change Model": "portfolio/11/gentrification-simulation.html",
  "Central Business District Activity Analysis": "portfolio/16/city-centre-activity.html",
  "Metro Crowd Evacuation Simulation": "portfolio/37/metro-crowd-simulation.html",
  "Honking Behavior and Urban Traffic Noise Simulation": "portfolio/18/traffic-honking-simulation.html",
  "Social Belonging Simulation": "portfolio/40/belonging-simulation.html",
  "Echo Chamber and Polarization Simulation": "portfolio/35/echo-chamber-polarization.html",
  "Free Bus Ride and Public Goods Simulation": "portfolio/33/free-public-transit-simulation.html",
  "Social Unrest and Dissent Simulation": "portfolio/39/dissent-simulation.html",
  "Misinformation Spread Simulation": "portfolio/38/misinformation-spread.html",
  "Green City Generator": "portfolio/31/green-city-generator.html",
  "City Image Classification and Urban Identity": "portfolio/12/image-classification.html",
  "Coffee Shop Density and Location Analysis": "portfolio/5/coffee-shop-analysis.html"
};

document.addEventListener("click", (event) => {
  const heading = event.target.closest(".project-card h3");
  if (heading) {
    const destination = projectDestinations[heading.textContent.trim()];
    window.location.href = destination || "archived.html";
  }
});

const copyrightYear = document.getElementById("copyright-year");
if (copyrightYear) {
  copyrightYear.textContent = new Date().getFullYear();
}
