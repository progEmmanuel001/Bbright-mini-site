  // Sidebar toggle
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');
  const hamburger = document.getElementById('hamburger');

  function openSidebar() {
    sidebar.classList.add('open');
    overlay.classList.add('active');
    sidebar.setAttribute('aria-hidden', 'false');
  }

  function closeSidebar() {
    sidebar.classList.remove('open');
    overlay.classList.remove('active');
    sidebar.setAttribute('aria-hidden', 'true');
  }

  hamburger.addEventListener('click', () => {
    if (sidebar.classList.contains('open')) {
      closeSidebar();
    } else {
      openSidebar();
    }
  });

  overlay.addEventListener('click', closeSidebar);

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && sidebar.classList.contains('open')) {
      closeSidebar();
    }
  });

  // === Make sidebar slide in when a sidebar link is clicked ===
  const sidebarLinks = document.querySelectorAll('.sidebar-link');

  sidebarLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault(); // Prevent default link jump
      openSidebar(); // Slide in the sidebar
      setTimeout(() => closeSidebar(), 1000); // Auto-close after 1s (optional)
    });
  });

  // carousel nav
  let currentSlide = 0;
  const slides = document.querySelectorAll('.carousel-slide');
  const navLinks = document.querySelectorAll('.carousel-nav a');

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
    navLinks.forEach((link, i) => {
      link.classList.toggle('active', i === index);
    });
  }

  function goToSlide(index) {
    currentSlide = index;
    showSlide(currentSlide);
  }