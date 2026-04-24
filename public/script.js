/* ==========================================================================
   DAIFOLIO — Script
   Theme toggle, Search modal (Ctrl+K), Sign interactivity
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // ========================================
  // Theme Toggle
  // ========================================
  const html = document.documentElement;
  const themeBtn = document.getElementById('theme-toggle');

  const savedTheme = localStorage.getItem('daifolio-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    html.setAttribute('data-theme', 'dark');
  } else {
    html.setAttribute('data-theme', 'light');
  }

  themeBtn.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    const next = current === 'light' ? 'dark' : 'light';
    html.setAttribute('data-theme', next);
    localStorage.setItem('daifolio-theme', next);
  });

  // ========================================
  // Search Modal (Ctrl + K)
  // ========================================
  const searchBtn = document.getElementById('search-btn');
  const searchOverlay = document.getElementById('search-overlay');
  const searchInput = document.getElementById('search-input');
  const searchModal = document.getElementById('search-modal');

  function openSearch() {
    searchOverlay.classList.add('active');
    setTimeout(() => searchInput.focus(), 100);
  }

  function closeSearch() {
    searchOverlay.classList.remove('active');
    searchInput.value = '';
    searchInput.blur();
  }

  searchBtn.addEventListener('click', openSearch);

  searchOverlay.addEventListener('click', (e) => {
    if (!searchModal.contains(e.target)) closeSearch();
  });

  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      searchOverlay.classList.contains('active') ? closeSearch() : openSearch();
    }
    if (e.key === 'Escape' && searchOverlay.classList.contains('active')) {
      closeSearch();
    }
  });

  // ========================================
  // 3D Sign Subtle Mouse Interaction
  // ========================================
  const sign3d = document.getElementById('sign3d');
  const signBody = sign3d ? sign3d.querySelector('.sign-3d__body') : null;

  if (sign3d && signBody) {
    sign3d.addEventListener('mousemove', (e) => {
      const rect = sign3d.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;   // 0 to 1
      const y = (e.clientY - rect.top) / rect.height;    // 0 to 1

      const rotateY = (x - 0.5) * 3;    // subtle left-right tilt
      const rotateX = (0.5 - y) * 2 + 2; // subtle up-down tilt, base 2deg

      signBody.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    sign3d.addEventListener('mouseleave', () => {
      signBody.style.transform = 'rotateX(2deg) rotateY(0deg)';
    });
  }

  // ========================================
  // Sign UI: Micro Toggle
  // ========================================
  const modeToggle = document.getElementById('signModeToggle');
  if (modeToggle) {
    modeToggle.addEventListener('click', () => {
      const isChecked = modeToggle.getAttribute('aria-checked') === 'true';
      modeToggle.setAttribute('aria-checked', (!isChecked).toString());

      // Update label
      const label = modeToggle.querySelector('.sign-micro-toggle__label');
      if (label) {
        label.textContent = isChecked ? 'USR' : 'SYS';
      }
    });

    modeToggle.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        modeToggle.click();
      }
    });
  }

  // ========================================
  // Sign UI: Badge Click Feedback
  // ========================================
  document.querySelectorAll('.sign-badge').forEach(badge => {
    badge.addEventListener('click', () => {
      badge.style.opacity = '0.5';
      setTimeout(() => { badge.style.opacity = '1'; }, 150);
    });
  });

  // ========================================
  // Sign UI: Arrow Button
  // ========================================
  document.querySelectorAll('.sign-ui-arrow').forEach(arrow => {
    arrow.addEventListener('click', () => {
      arrow.style.transform = 'scale(0.9)';
      setTimeout(() => { arrow.style.transform = 'scale(1)'; }, 120);
    });
  });

});
