// Navbar scroll behavior
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}, { passive: true });

// Scroll-reveal using IntersectionObserver
// Uses classList and textContent — no innerHTML usage
const revealEls = document.querySelectorAll('.reveal, .timeline-item, .achievement-card');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const delay = Number(el.dataset.delay) || 0;
      setTimeout(() => {
        el.classList.add('visible');
      }, delay);
      revealObserver.unobserve(el);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

revealEls.forEach((el, idx) => {
  if (el.classList.contains('achievement-card')) {
    el.dataset.delay = String((idx % 3) * 100);
  }
  revealObserver.observe(el);
});

// Contact form — safe DOM manipulation, no innerHTML
const contactForm = document.getElementById('contact-form');
const formSuccess = document.getElementById('form-success');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const nameEl = document.getElementById('contact-name');
  const emailEl = document.getElementById('contact-email-field');
  const messageEl = document.getElementById('contact-message');

  const name = nameEl.value.trim();
  const email = emailEl.value.trim();
  const message = messageEl.value.trim();

  // Remove any prior error message safely
  const existingErr = document.getElementById('form-error-msg');
  if (existingErr) existingErr.remove();

  if (!name || !email || !message) {
    // TODO(security): Use a modal component in production instead of inline DOM error
    const errMsg = document.createElement('p');
    errMsg.textContent = 'Please fill in all required fields.';
    errMsg.id = 'form-error-msg';
    errMsg.setAttribute('role', 'alert');
    errMsg.style.cssText = 'color:#b91c1c;font-size:0.875rem;font-weight:500;margin-top:0.5rem;';
    contactForm.appendChild(errMsg);
    return;
  }

  const btn = document.getElementById('contact-submit');
  btn.disabled = true;
  const btnSpan = btn.querySelector('span');
  if (btnSpan) btnSpan.textContent = 'Sending…';

  // Simulate API call (replace with real fetch/XHR in production)
  setTimeout(() => {
    formSuccess.style.display = 'block';
    contactForm.reset();
    btn.disabled = false;
    if (btnSpan) btnSpan.textContent = 'Send Message';
  }, 1200);
});
