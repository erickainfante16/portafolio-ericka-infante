document.addEventListener('DOMContentLoaded', () => {
  // Navegación entre vistas independientes (detecta navbar, logo y botones internos)
  const navTriggers = document.querySelectorAll('[data-page]');
  const sections = document.querySelectorAll('.page-section');
  const navLinks = document.getElementById('navLinks');
  const menuToggle = document.getElementById('menuToggle');

  function switchPage(pageName) {
    sections.forEach((sec) => {
      sec.classList.toggle('active', sec.id === `page-${pageName}`);
    });

    document.querySelectorAll('.nav-btn').forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.page === pageName);
    });

    if (navLinks) navLinks.classList.remove('open');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  navTriggers.forEach((el) => {
    el.addEventListener('click', (e) => {
      const page = el.dataset.page;
      if (page) {
        e.preventDefault();
        switchPage(page);
      }
    });
  });

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
  }

  // Información de proyectos
  const projectsCatalog = {
    autoflow: {
      context: 'Desarrolladora Full Stack & Scrum Master • Proyecto Integrador Generation México',
      title: 'AutoFlow — Plataforma de Automatización',
      image: 'assets/proyecto-autoflow.png',
      fallback: 'https://placehold.co/900x520/ECD0EC/461D3A?text=AutoFlow+%E2%80%94+Plataforma+Full+Stack',
      purpose:
        'Plataforma web integral diseñada para automatizar flujos de atención y ventas empresariales con integración a WhatsApp, centralizando servicios digitales para negocios.',
      challenge:
        'Conectar una interfaz responsiva con una API REST en Java/Spring Boot y base de datos relacional en MySQL, coordinando sprints ágiles bajo Scrum y control de versiones en GitHub.',
      tech: ['Java', 'Spring Boot', 'MySQL', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'Git/GitHub'],
      github: 'https://github.com/erickainfante16',
      demo: 'https://github.com/erickainfante16'
    },
    merchf1: {
      context: 'Desarrolladora Frontend • Hackathon Generation México',
      title: 'MERCH F1 — Landing Page E-Commerce',
      image: 'assets/proyecto-merch-f1.png',
      fallback: 'https://placehold.co/900x520/461D3A/ECD0EC?text=MERCH+F1+%E2%80%94+Landing+Page',
      purpose:
        'Tienda web promocional creada en un hackathon de 6 horas para exhibir mercancía oficial de Fórmula 1 con navegación intuitiva y diseño responsivo.',
      challenge:
        'Construir la sección Hero y coordinar ramas simultáneas de un equipo de 5 desarrolladores en GitHub sin conflictos de integración, desplegando el sitio en vivo en GitHub Pages.',
      tech: ['HTML5', 'CSS3', 'Bootstrap 5', 'JavaScript', 'Git/GitHub Pages'],
      github: 'https://github.com/erickainfante16/Hackaton-Landing-Page-F1',
      demo: 'https://erickainfante16.github.io/Hackaton-Landing-Page-F1/'
    }
  };

  // Modal interactivo al hacer clic en cada proyecto
  const modal = document.getElementById('projectModal');
  const closeModalBtn = document.getElementById('closeModal');
  const projectCards = document.querySelectorAll('.visual-project-card');

  function openModal(key) {
    const item = projectsCatalog[key];
    if (!item || !modal) return;

    document.getElementById('modalContext').textContent = item.context;
    document.getElementById('modalTitle').textContent = item.title;

    const imgEl = document.getElementById('modalImage');
    imgEl.src = item.image;
    imgEl.onerror = () => { imgEl.src = item.fallback; };

    document.getElementById('modalPurpose').textContent = item.purpose;
    document.getElementById('modalChallenge').textContent = item.challenge;

    const techList = document.getElementById('modalTech');
    techList.innerHTML = item.tech.map((tech) => `<span>${tech}</span>`).join('');

    document.getElementById('modalGithub').href = item.github;
    document.getElementById('modalDemo').href = item.demo;

    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
  }

  projectCards.forEach((card) => {
    card.addEventListener('click', () => openModal(card.dataset.project));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openModal(card.dataset.project);
      }
    });
  });

  if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('open')) closeModal();
  });
});