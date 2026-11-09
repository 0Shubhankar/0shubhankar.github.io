
(() => {
  const chapters = [["Capital Markets & Investment Analysis", "INVESTMENT · BONDS · MARKET RISK · FOLLOWING THE MONEY", [42, 43, 47, 49]], ["Municipal Finance & Infrastructure Investment", "PUBLIC CAPITAL · INFRASTRUCTURE · CLIMATE RISK · FUTURE CITIES", [41, 45, 48, 50]], ["Urban Economics & Value Creation", "REAL ESTATE · DEVELOPMENT · PUBLIC GOODS · CAPITAL AND PLACE", [33, 36, 44, 46]], ["Urban Systems & Computational Modelling", "CONNECTIONS · ECOLOGY · URBAN FORM · EMERGENT BEHAVIOUR", [10, 31, 32, 39]], ["Social Networks & Collective Behaviour", "SOCIAL NETWORKS · BELONGING · MOVEMENT · COLLECTIVE CHANGE", [30, 35, 38, 40]], ["Transportation Systems & Traffic Simulation", "TRAFFIC FLOWS · CROWD BEHAVIOUR · VEHICLES · MOVING SYSTEMS", [17, 18, 34, 37]], ["Urban Analytics & Spatial Evidence", "PATTERNS IN PLACE · HIDDEN GEOGRAPHIES · READING THE URBAN FABRIC", [1, 6, 7, 8]], ["Accessibility & Spatial Optimization", "ROUTES · REACHABILITY · OPPORTUNITY · THE DISTANCE BETWEEN PEOPLE AND PLACES", [3, 4, 14, 22]], ["Urban Mobility & Street Networks", "MOVEMENT · CONGESTION · STREET SPACE · EVERYDAY URBAN LIFE", [2, 9, 15, 16]], ["Urban Governance & Policy Simulation", "POLICY CHOICES · COMPETING NEEDS · THE CONSEQUENCES OF DECISIONS", [19, 20, 21, 23]], ["Housing Markets & Neighbourhood Change", "HOUSING · MIGRATION · GENTRIFICATION · THE ECONOMICS OF PLACE", [5, 11, 28, 29]], ["Climate, Energy & Global Systems", "CLIMATE · ENERGY · MIGRATION · THE WORLD THROUGH DATA", [24, 25, 26, 27]], ["Computational Design & Interactive Media", "MACHINE VISION · CULTURE · SOUND · THE MATERIAL LIFE OF CITIES", [12, 13, 51, 52]]];

  document.addEventListener("DOMContentLoaded", () => {
    const grid = document.getElementById("portfolio-grid");
    if (!grid) return;

    const cards = [...grid.querySelectorAll(".grid--cell")];
    const byId = new Map();

    cards.forEach(card => {
      const href = card.querySelector(".title--text")
        ?.getAttribute("href") || "";
      const match = href.match(/^(\d+)\//);
      if (match) byId.set(Number(match[1]), card);
    });

    if (byId.size !== 52) {
      console.error("Expected 52 distinct cards; found", byId.size);
      return;
    }

    const filterNotice = document.createElement("div");
    filterNotice.className = "editorial-filter-notice";
    filterNotice.hidden = true;
    filterNotice.innerHTML =
      '<span class="editorial-filter-label"></span>' +
      '<button type="button">Show all projects</button>';

    grid.parentNode.insertBefore(filterNotice, grid);

    const rendered = [];

    chapters.forEach(([title, ticker, ids]) => {
      const chapter = document.createElement("header");
      chapter.className = "editorial-chapter";

      const heading = document.createElement("h2");
      heading.dataset.fullText = title;
      heading.innerHTML =
        '<span class="editorial-heading-text"></span><span class="editorial-heading-cursor">|</span>';
      chapter.appendChild(heading);

      const motion = document.createElement("div");
      motion.className = "editorial-motion";
      motion.setAttribute("aria-label", ticker);

      const track = document.createElement("div");
      track.className = "editorial-motion-track";
      track.setAttribute("aria-hidden", "true");

      for (let i = 0; i < 4; i++) {
        const span = document.createElement("span");
        span.textContent = ticker + "  ✳  ";
        track.appendChild(span);
      }

      motion.appendChild(track);
      chapter.appendChild(motion);
      grid.appendChild(chapter);

      const groupCards = ids.map(id => byId.get(id));
      if (groupCards.some(card => !card)) {
        console.error("Missing card in chapter:", title);
        return;
      }

      groupCards.forEach(card => grid.appendChild(card));
      rendered.push({chapter, cards: groupCards});
    });

    let selectedTag = "";

    function typeHeading(heading) {
      const textEl = heading.querySelector(".editorial-heading-text");
      const cursor = heading.querySelector(".editorial-heading-cursor");
      const fullText = heading.dataset.fullText || "";

      // Respect accessibility settings.
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        textEl.textContent = fullText;
        if (cursor) cursor.style.display = "none";
        return;
      }

      const millisecondsPerCharacter = 42;
      let startTime = null;
      let lastCount = -1;

      textEl.textContent = "";

      function animate(timestamp) {
        if (startTime === null) startTime = timestamp;

        const elapsed = timestamp - startTime;
        const count = Math.min(
          fullText.length,
          Math.floor(elapsed / millisecondsPerCharacter)
        );

        if (count !== lastCount) {
          textEl.textContent = fullText.slice(0, count);
          lastCount = count;
        }

        if (count < fullText.length) {
          requestAnimationFrame(animate);
        } else if (cursor) {
          cursor.style.display = "none";
        }
      }

      requestAnimationFrame(animate);
    }

    function setupTypewriter() {
      const headings = [...document.querySelectorAll(".editorial-chapter h2")];

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const heading = entry.target;
          if (heading.dataset.typed === "1") return;

          heading.dataset.typed = "1";
          typeHeading(heading);
          observer.unobserve(heading);
        });
      }, {
        threshold: 0.45
      });

      headings.forEach((heading, index) => {
        if (index === 0) {
          heading.dataset.typed = "1";
          typeHeading(heading);
        } else {
          observer.observe(heading);
        }
      });
    }

    function update() {
      let visibleCount = 0;

      rendered.forEach(group => {
        let groupCount = 0;

        group.cards.forEach(card => {
          const matches = !selectedTag ||
            card.dataset.tags.toLowerCase()
              .includes(selectedTag.toLowerCase());

          card.style.display = matches ? "" : "none";

          if (matches) {
            groupCount++;
            visibleCount++;
          }
        });

        group.chapter.hidden = groupCount === 0;
      });

      filterNotice.hidden = !selectedTag;
      filterNotice.querySelector(".editorial-filter-label")
        .textContent = selectedTag
          ? `Showing projects tagged “${selectedTag}” · ${visibleCount} found`
          : "";
    }

    // Preserve the existing tag-based browsing behavior, while
    // keeping chapter headings synchronized with visible cards.
    document.addEventListener("click", event => {
      const tag = event.target.closest(".grid--cell .tag");
      if (!tag) return;

      event.preventDefault();
      event.stopPropagation();

      selectedTag = tag.textContent.trim();
      update();

      filterNotice.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }, true);

    filterNotice.querySelector("button")
      .addEventListener("click", () => {
        selectedTag = "";
        update();
      });

    update();
    setupTypewriter();
  });
})();
