document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('main[id], section[id]');
  const navLinks = document.querySelectorAll('.navbar nav a[href^="#"]');
  const navbar = document.querySelector('.navbar');
  const offset = navbar.offsetHeight;

  function activateNavLink() {
    let currentSectionId = '';
    const scrollY = window.scrollY + offset + 1;

    sections.forEach((section) => {
      const top = section.offsetTop;
      const bottom = top + section.offsetHeight;

      if (scrollY >= top && scrollY < bottom) {
        currentSectionId = section.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      const href = link.getAttribute('href').substring(1);
      if (href === currentSectionId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  const eduToggleBtn = document.querySelector('.toggle-btn');
  const eduCertSection = document.getElementById('eduCertSection');

  window.toggleEduCert = function () {
    const isHidden = eduCertSection.style.display === 'none';
    eduCertSection.style.display = isHidden ? 'flex' : 'none';

    const arrowIcon = eduToggleBtn.querySelector('.arrow-icon');
    if (arrowIcon) {
      arrowIcon.className = isHidden
        ? 'fas fa-chevron-up arrow-icon'
        : 'fas fa-chevron-down arrow-icon';
    }

    setTimeout(() => {
      activateNavLink();
    }, 300);
  };

  window.addEventListener('scroll', activateNavLink);
  activateNavLink();
});

$( '.js-input' ).keyup(function() {
  if( $(this).val() ) {
     $(this).addClass('not-empty');
  } else {
     $(this).removeClass('not-empty');
  }
});
