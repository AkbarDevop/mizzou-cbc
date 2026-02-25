// ===== Navbar scroll effect =====
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ===== Mobile menu toggle =====
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
});

// Close mobile menu on link click
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
  });
});

// ===== Dark mode toggle =====
const allDarkToggles = document.querySelectorAll('.dark-toggle');
const savedTheme = localStorage.getItem('theme');

function updateToggles() {
  const isDark = document.body.classList.contains('dark');
  allDarkToggles.forEach(btn => btn.textContent = isDark ? '☀️' : '🌙');
}

if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.body.classList.add('dark');
}
updateToggles();

allDarkToggles.forEach(btn => {
  btn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateToggles();
  });
});

// ===== FAQ Accordion =====
document.querySelectorAll('.faq-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const wasOpen = item.classList.contains('open');

    // Close all
    document.querySelectorAll('.faq-item.open').forEach(openItem => {
      openItem.classList.remove('open');
    });

    // Toggle clicked
    if (!wasOpen) {
      item.classList.add('open');
    }
  });
});

// ===== Scroll Animations =====
const observerOptions = { threshold: 0.15 };

const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      fadeObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.fade-up').forEach(el => fadeObserver.observe(el));

// Staggered items
const staggerObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const items = entry.target.querySelectorAll('.stagger-item');
      items.forEach((item, i) => {
        setTimeout(() => item.classList.add('visible'), i * 100);
      });
      staggerObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.stagger-container').forEach(el => staggerObserver.observe(el));

// ===== Animated Number Counter =====
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const target = parseInt(el.dataset.target, 10);
      const finalText = el.dataset.final;

      if (!target || target === 0) {
        el.textContent = finalText;
        counterObserver.unobserve(el);
        return;
      }

      const duration = 1500;
      const steps = 40;
      const stepTime = duration / steps;
      let step = 0;

      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(target * eased);
        el.textContent = current.toLocaleString() + (finalText.includes('+') ? '+' : '');
        if (step >= steps) {
          clearInterval(timer);
          el.textContent = finalText;
        }
      }, stepTime);

      counterObserver.unobserve(el);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.counter').forEach(el => counterObserver.observe(el));

// ===== Hero entrance animation =====
window.addEventListener('load', () => {
  document.querySelectorAll('.hero-anim').forEach((el, i) => {
    setTimeout(() => el.classList.add('visible'), i * 150);
  });
});
