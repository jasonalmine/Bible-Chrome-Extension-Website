// Bible Verse New Tab - Landing Page Scripts

/**
 * Smooth scroll for anchor links
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

/**
 * Fade in elements on scroll
 */
function initScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  );

  document.querySelectorAll('.feature-card, .privacy-card, .browser-mockup').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
  });
}

/**
 * Add fade-in styles dynamically
 */
function addAnimationStyles() {
  const style = document.createElement('style');
  style.textContent = `
    .fade-in {
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.6s ease, transform 0.6s ease;
    }
    .fade-in.visible {
      opacity: 1;
      transform: translateY(0);
    }
    @media (prefers-reduced-motion: reduce) {
      .fade-in {
        opacity: 1;
        transform: none;
        transition: none;
      }
    }
  `;
  document.head.appendChild(style);
}

/**
 * Track CTA clicks (placeholder for analytics)
 */
function initCTATracking() {
  document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', () => {
      // Placeholder for analytics
      console.log('CTA clicked:', button.textContent.trim());
    });
  });
}

/**
 * Initialize all scripts
 */
function init() {
  addAnimationStyles();
  initSmoothScroll();
  initScrollAnimations();
  initCTATracking();
}

// Run on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
