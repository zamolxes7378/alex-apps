// Sliding nav indicator
(function() {
  const nav = document.querySelector('.desktop-nav');
  if (!nav) return;

  // Create the indicator element
  const indicator = document.createElement('span');
  indicator.classList.add('nav-indicator');
  nav.style.position = 'relative';
  nav.appendChild(indicator);

  const links = nav.querySelectorAll('.nav-link');
  const activeLink = nav.querySelector('.nav-link.active');

  function moveIndicator(el) {
    indicator.style.left = el.offsetLeft + 'px';
    indicator.style.width = el.offsetWidth + 'px';
    indicator.style.bottom = '-6px';
  }

  function init() {
    if (activeLink) moveIndicator(activeLink);
  }

  // Initialize after fonts load
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(init);
  }
  window.addEventListener('load', init);
  init();

  // Slide on hover
  links.forEach(link => {
    link.addEventListener('mouseenter', () => moveIndicator(link));
  });

  // Return to active on mouse leave
  nav.addEventListener('mouseleave', () => {
    if (activeLink) moveIndicator(activeLink);
  });

  // Recalculate on resize
  window.addEventListener('resize', () => {
    if (activeLink) moveIndicator(activeLink);
  });
})();
