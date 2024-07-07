document.addEventListener('DOMContentLoaded', function () {
  const dropdownLinks = document.querySelectorAll('.burger-dropdown > .burger-menu__navigation-links');

  dropdownLinks.forEach(function (link) {
    const dropdownContent = link.nextElementSibling;
    let isOpen = false; // Variable that tracks the status of menu openings

    link.addEventListener('click', function (e) {
      e.preventDefault();

      closeAllDropdowns();

      // Toggle class 'show' for dropdownContent
      isOpen = !isOpen;
      dropdownContent.classList.toggle('show', isOpen);
      link.classList.toggle('open', isOpen);
    });

    //Close the menu when click anywhere outside of it
    document.addEventListener('click', function (e) {
      if (!link.contains(e.target) && !dropdownContent.contains(e.target)) {
        isOpen = false;
        dropdownContent.classList.remove('show');
        link.classList.remove('open');
      }
    });

    // Prevent the menu from closing when clicking on dropdownContent
    dropdownContent.addEventListener('click', function (e) {
      e.stopPropagation();
    });
  });

  //Fn to clise all open menu
  function closeAllDropdowns() {
    dropdownLinks.forEach(function (link) {
      const dropdownContent = link.nextElementSibling;
      dropdownContent.classList.remove('show');
      link.classList.remove('open');
    });
  }
});
