// Shared: set current year and highlight active nav
document.addEventListener('DOMContentLoaded', () => {
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  
    const path = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
    const map = {
      'index.html': 'home',
      'about.html': 'about',
      'resume.html': 'resume',
      'projects.html': 'projects',
      'contact.html': 'contact',
      'thankyou.html': 'home'
    };
    const key = map[path] || '';
    document.querySelectorAll(`[data-nav="${key}"]`).forEach(a => a.classList.add('active'));
  
    // Contact form validation and redirect
    const form = document.getElementById('contactForm');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const errs = [];
  
        const firstName = document.getElementById('firstName');
        const lastName = document.getElementById('lastName');
        const email = document.getElementById('email');
        const password = document.getElementById('password');
        const confirmPassword = document.getElementById('confirmPassword');
        const message = document.getElementById('message');
  
        // helper to set error text and aria-invalid
        const setErr = (el, msg) => {
          const msgEl = document.getElementById(`${el.id}-error`);
          el.setAttribute('aria-invalid', msg ? 'true' : 'false');
          if (msgEl) msgEl.textContent = msg || '';
          if (msg) errs.push(el);
        };
  
        // Clear prior errors
        [firstName,lastName,email,password,confirmPassword,message].forEach(el => setErr(el, ''));
  
        if (!firstName.value.trim()) setErr(firstName, 'First name is required.');
        if (!lastName.value.trim()) setErr(lastName, 'Last name is required.');
  
        const emailVal = email.value.trim();
        const emailOk = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(emailVal);
        if (!emailVal) setErr(email, 'Email is required.');
        else if (!emailOk) setErr(email, 'Enter a valid email address.');
  
        if (!password.value) setErr(password, 'Password is required.');
        else if (password.value.length < 8) setErr(password, 'Password must be at least 8 characters.');
  
        if (!confirmPassword.value) setErr(confirmPassword, 'Confirm your password.');
        else if (confirmPassword.value !== password.value) setErr(confirmPassword, 'Passwords must match.');

        if (!message.value.trim()) setErr(message, 'Please enter a message.');
  
        if (errs.length) {
          errs[0].focus();
          return;
        }
        // Success: simulate submit and redirect
        location.href = 'thankyou.html';
      });
    }
    // Header shadow on scroll
    const header = document.querySelector('.site-header');
    if (header) {
      const setShadow = () => header.classList.toggle('scrolled', window.scrollY > 4);
      setShadow();
      window.addEventListener('scroll', setShadow, { passive: true });
    }

    // Auto-expanding textarea
    const textarea = document.getElementById('message');
    if (textarea) {
      const adjustHeight = () => {
        textarea.style.height = 'auto';
        textarea.style.height = textarea.scrollHeight + 'px';
      };
      textarea.addEventListener('input', adjustHeight);
      adjustHeight(); // Initial adjustment
    }

    // Reveal-on-scroll
    const revealEls = Array.from(document.querySelectorAll('.reveal'));
    if (revealEls.length && 'IntersectionObserver' in window) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15 });
      revealEls.forEach(el => io.observe(el));
    } else {
      // Fallback: show immediately
      revealEls.forEach(el => el.classList.add('show'));
    }
  });
  