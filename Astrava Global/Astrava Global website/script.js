/**
 * Astrava Global — Interactive Enhancements
 */

document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll offset handling for dynamic navigation
  const navLinks = document.querySelectorAll('.nav-links a, .btn-primary');

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      
      if (targetId.startsWith('#')) {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          const navHeight = document.querySelector('.navbar').offsetHeight;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });

  // Ensure video background plays cleanly on mobile or low-power modes
  const heroVideo = document.querySelector('.hero-video');
  if (heroVideo) {
    heroVideo.play().catch(() => {
      // Auto-play was prevented; video will remain ready on user interaction
    });
  }
});