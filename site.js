// HERO STORY
const story = document.querySelector(".scroll-story");
const steps = document.querySelectorAll(".story-step");
const eyebrow = document.getElementById("story-eyebrow");
const panelTitle = document.getElementById("story-panel-title");
const panelMeta = document.getElementById("story-panel-meta");

if (story && steps.length && eyebrow && panelTitle && panelMeta) {
  const sceneMap = {
    "Urban computing": "urban",
    "Simulation": "simulation",
    "Spatial interfaces": "interfaces",
    "Quant research": "quant",
  };

  const heroObserver = new IntersectionObserver(
    (entries) => {
      const active = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!active) return;

      const step = active.target;

      steps.forEach((item) => item.classList.toggle("is-active", item === step));

      eyebrow.textContent = step.dataset.eyebrow || "";
      panelTitle.textContent = step.dataset.title || "";
      panelMeta.textContent = step.dataset.meta || "";
      story.dataset.scene = sceneMap[step.dataset.eyebrow] || "urban";
    },
    {
      root: null,
      rootMargin: "-28% 0px -34% 0px",
      threshold: [0.2, 0.45, 0.7],
    }
  );

  steps.forEach((step) => heroObserver.observe(step));
}

// PROJECT STORY
const projectStorySteps = document.querySelectorAll(".projects-story-step");
const projectEyebrow = document.getElementById("projects-story-eyebrow");
const projectTitle = document.getElementById("projects-story-title");
const projectMeta = document.getElementById("projects-story-meta");

if (projectStorySteps.length && projectEyebrow && projectTitle && projectMeta) {
  const projectObserver = new IntersectionObserver(
    (entries) => {
      const active = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!active) return;

      const step = active.target;

      projectStorySteps.forEach((item) =>
        item.classList.toggle("is-active", item === step)
      );

      projectEyebrow.textContent = step.dataset.eyebrow || "Research Portfolio";
      projectTitle.textContent = step.dataset.title || "";
      projectMeta.textContent = step.dataset.meta || "";
    },
    {
      root: null,
      rootMargin: "-28% 0px -34% 0px",
      threshold: [0.2, 0.45, 0.7],
    }
  );

  projectStorySteps.forEach((step) => projectObserver.observe(step));
}

// PROJECT TITLE CLICK TO ARCHIVE
document.querySelectorAll(".project-card h3").forEach((title) => {
  title.addEventListener("click", () => {
    window.location.href = "archived.html";
  });
});