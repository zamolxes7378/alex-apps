/* =================================================================
   KOTECH ENGINEERING — interactions
   ================================================================= */
(function () {
  "use strict";

  const prefersReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  /* ---------- Current year ---------- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  /* ---------- Header scrolled state + scroll progress ---------- */
  const header = document.getElementById("site-header");
  const progressBar = document.getElementById("progress-bar");

  function onScroll() {
    const y = window.scrollY || window.pageYOffset;
    if (header) header.classList.toggle("scrolled", y > 24);

    if (progressBar) {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      const pct = max > 0 ? (y / max) * 100 : 0;
      progressBar.style.width = pct + "%";
    }
  }

  let ticking = false;
  window.addEventListener(
    "scroll",
    function () {
      if (!ticking) {
        window.requestAnimationFrame(function () {
          onScroll();
          ticking = false;
        });
        ticking = true;
      }
    },
    { passive: true }
  );
  onScroll();

  /* ---------- Mobile menu ---------- */
  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("mobile-menu");

  function closeMenu() {
    if (!toggle || !menu) return;
    toggle.classList.remove("open");
    menu.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    menu.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  function openMenu() {
    if (!toggle || !menu) return;
    toggle.classList.add("open");
    menu.classList.add("open");
    toggle.setAttribute("aria-expanded", "true");
    menu.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      if (menu.classList.contains("open")) closeMenu();
      else openMenu();
    });
    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeMenu();
    });
  }

  /* ---------- Reveal on scroll ---------- */
  const revealEls = Array.prototype.slice.call(
    document.querySelectorAll(".reveal")
  );

  if (prefersReduced || !("IntersectionObserver" in window)) {
    revealEls.forEach(function (el) {
      el.classList.add("is-visible");
    });
  } else {
    const observer = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    // Stagger siblings within the same grid/group for an editorial cascade
    const groups = new Map();
    revealEls.forEach(function (el) {
      const parent = el.parentElement;
      if (!groups.has(parent)) groups.set(parent, 0);
      const idx = groups.get(parent);
      el.style.transitionDelay = Math.min(idx * 90, 450) + "ms";
      groups.set(parent, idx + 1);
      observer.observe(el);
    });
  }

  /* ---------- Animated counters ---------- */
  const counters = Array.prototype.slice.call(
    document.querySelectorAll(".stat-num[data-count]")
  );

  function animateCounter(el) {
    const target = parseInt(el.getAttribute("data-count"), 10) || 0;
    const suffix = el.getAttribute("data-suffix") || "";
    if (prefersReduced) {
      el.textContent = target + suffix;
      return;
    }
    const duration = 1400;
    const start = performance.now();
    function tick(now) {
      const p = Math.min((now - start) / duration, 1);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(eased * target) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  if (counters.length) {
    if (!("IntersectionObserver" in window)) {
      counters.forEach(animateCounter);
    } else {
      const cObserver = new IntersectionObserver(
        function (entries, obs) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              animateCounter(entry.target);
              obs.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.6 }
      );
      counters.forEach(function (c) {
        cObserver.observe(c);
      });
    }
  }

  /* ---------- Active nav link by section ---------- */
  const navLinks = Array.prototype.slice.call(
    document.querySelectorAll(".nav-link")
  );
  const linkById = {};
  navLinks.forEach(function (link) {
    const id = link.getAttribute("href").replace("#", "");
    linkById[id] = link;
  });

  const sections = Array.prototype.slice
    .call(document.querySelectorAll("main section[id]"))
    .filter(function (s) {
      return linkById[s.id];
    });

  if (sections.length && "IntersectionObserver" in window) {
    const navObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            navLinks.forEach(function (l) {
              l.classList.remove("active");
            });
            const active = linkById[entry.target.id];
            if (active) active.classList.add("active");
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach(function (s) {
      navObserver.observe(s);
    });
  }
})();
