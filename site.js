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

document.addEventListener("click", (event) => {
  if (event.target.closest(".project-card h3")) {
    window.location.href = "archived.html";
  }
});

const copyrightYear = document.getElementById("copyright-year");
if (copyrightYear) {
  copyrightYear.textContent = new Date().getFullYear();
}
