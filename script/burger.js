document.addEventListener('DOMContentLoaded', function () {
  const menuLinks = document.querySelectorAll('.burger-menu__navigation-link');
  const burgerOpenIcon = document.querySelector('.burger-menu__open-icon');
  const burgerCloseIcon = document.querySelector('.burger-menu__close-icon');
  const menu = document.querySelector('.burger-menu');
  const menuLink = document.querySelector('.header-top__menu-burger-link');

  menuLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      closeMenu();
      
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }

      e.preventDefault(); //Prevent default action
    });
  });

  //Burger menu click
  menuLink.addEventListener('click', function (e) {
    e.preventDefault();
    toggleMenu();
  });

  document.addEventListener('click', function (e) {
    if (!menu.contains(e.target) && !menuLink.contains(e.target)) {
      closeMenu();
    }
  });

  //Fn to open/close menu
  function toggleMenu() {
    menu.classList.toggle('visible');
    burgerOpenIcon.style.display = menu.classList.contains('visible') ? 'none' : 'block';
    burgerCloseIcon.style.display = menu.classList.contains('visible') ? 'block' : 'none';
  }

  //Fn to close
  function closeMenu() {
    menu.classList.remove('visible');
    burgerOpenIcon.style.display = 'block';
    burgerCloseIcon.style.display = 'none';
  }
});
