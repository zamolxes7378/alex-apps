/* ============================================
   ANNE-CHANTAL MEYER — INTERACTIONS
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ---------- SCROLL REVEAL ANIMATIONS ----------
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // ---------- STICKY NAVIGATION ----------
  const nav = document.getElementById('mainNav');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;

    if (currentScroll > 80) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
  }, { passive: true });

  // ---------- MOBILE MENU ----------
  const navToggle = document.getElementById('navToggle');
  const mobileMenu = document.getElementById('mobileMenu');

  if (navToggle && mobileMenu) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('open');
      mobileMenu.classList.toggle('open');
      document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
    });

    // Close on link click
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('open');
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // ---------- SMOOTH SCROLL ----------
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const navHeight = nav.offsetHeight;
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight - 20;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // ---------- ACTIVE NAV LINK (URL-based for multi-page) ----------
  const navLinks = document.querySelectorAll('.nav-links a:not(.btn)');
  const currentPath = window.location.pathname;

  // Map page paths to their nav link href
  const pageMap = {
    'about.html': 'about.html',
    'approche.html': 'approche.html',
    'blog.html': 'blog.html',
    'tarifs.html': 'tarifs.html',
    'contact.html': 'contact.html'
  };

  // Blog sub-pages also highlight "Blog" link
  const isBlogArticle = currentPath.includes('/blog/');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    // Remove any pre-set active class (from HTML) first
    link.classList.remove('active');

    if (isBlogArticle && href.includes('blog.html')) {
      link.classList.add('active');
    } else {
      // Check if current page ends with the link href
      for (const [page, navHref] of Object.entries(pageMap)) {
        if (currentPath.endsWith(page) && href.includes(navHref)) {
          link.classList.add('active');
          break;
        }
      }
    }
  });

  // Also update mobile menu links
  const mobileLinks = document.querySelectorAll('.mobile-menu a:not(.btn)');
  mobileLinks.forEach(link => {
    const href = link.getAttribute('href');
    link.classList.remove('active');

    if (isBlogArticle && href.includes('blog.html')) {
      link.classList.add('active');
    } else {
      for (const [page, navHref] of Object.entries(pageMap)) {
        if (currentPath.endsWith(page) && href.includes(navHref)) {
          link.classList.add('active');
          break;
        }
      }
    }
  });

  // ---------- FORM HANDLING ----------
  const bookingForm = document.getElementById('bookingForm');

  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const formData = new FormData(bookingForm);
      const data = Object.fromEntries(formData.entries());

      // Basic validation
      if (!data.name || !data.email) {
        showNotification('Veuillez remplir les champs obligatoires.', 'error');
        return;
      }

      // Simulate submission
      const submitBtn = bookingForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = '<span class="material-symbols-outlined" style="font-size:1.1rem;animation:spin 1s linear infinite;">progress_activity</span> Envoi en cours...';
      submitBtn.disabled = true;

      setTimeout(() => {
        showNotification('Merci ! Votre demande a bien été envoyée. Je vous recontacterai dans les 24h.', 'success');
        bookingForm.reset();
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
      }, 1500);
    });
  }

  // ---------- NOTIFICATION SYSTEM ----------
  function showNotification(message, type = 'success') {
    // Remove existing
    const existing = document.querySelector('.notification');
    if (existing) existing.remove();

    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
      <span class="material-symbols-outlined" style="font-size:1.2rem;">${type === 'success' ? 'check_circle' : 'error'}</span>
      <span>${message}</span>
    `;

    // Styles
    Object.assign(notification.style, {
      position: 'fixed',
      bottom: '2rem',
      left: '50%',
      transform: 'translateX(-50%) translateY(20px)',
      background: type === 'success' ? '#e0e5d2' : '#ffdad6',
      color: type === 'success' ? '#2d3328' : '#93000a',
      padding: '1rem 2rem',
      borderRadius: '9999px',
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      fontFamily: 'Manrope, sans-serif',
      fontSize: '0.85rem',
      fontWeight: '500',
      zIndex: '200',
      opacity: '0',
      transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
      boxShadow: '0 12px 32px rgba(27,28,25,0.1)',
      maxWidth: '90vw',
      textAlign: 'center'
    });

    document.body.appendChild(notification);

    // Animate in
    requestAnimationFrame(() => {
      notification.style.opacity = '1';
      notification.style.transform = 'translateX(-50%) translateY(0)';
    });

    // Auto-remove
    setTimeout(() => {
      notification.style.opacity = '0';
      notification.style.transform = 'translateX(-50%) translateY(20px)';
      setTimeout(() => notification.remove(), 400);
    }, 4000);
  }

  // ---------- PARALLAX SUBTLE EFFECTS ----------
  const heroGlow = document.querySelector('.hero-glow');

  if (heroGlow) {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      if (scrollY < window.innerHeight) {
        heroGlow.style.transform = `translateY(${scrollY * 0.3}px)`;
      }
    }, { passive: true });
  }

  // ---------- COUNTER ANIMATION ----------
  const counterElements = document.querySelectorAll('.hero-badge-number');

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const text = target.textContent;
        const number = parseInt(text);
        const suffix = text.replace(number, '');
        let current = 0;
        const duration = 1500;
        const step = Math.ceil(number / (duration / 30));

        const timer = setInterval(() => {
          current += step;
          if (current >= number) {
            current = number;
            clearInterval(timer);
          }
          target.textContent = current + suffix;
        }, 30);

        counterObserver.unobserve(target);
      }
    });
  }, { threshold: 0.5 });

  counterElements.forEach(el => counterObserver.observe(el));
});

// Spin animation for loading state
const style = document.createElement('style');
style.textContent = `
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;
document.head.appendChild(style);
