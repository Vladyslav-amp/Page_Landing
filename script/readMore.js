document.addEventListener('DOMContentLoaded', function() {
  const moreLink = document.querySelector('.about-content__more-link');
  const hiddenText = document.querySelector('.about-content__box-text--hidden');
  const dot = document.querySelector('.about-content__box-text--dot');

  moreLink.addEventListener('click', function(event) {
      event.preventDefault();
      hiddenText.classList.toggle('show');
      dot.style.display = hiddenText.classList.contains('show') ? 'none' : 'inline';
      moreLink.textContent = hiddenText.classList.contains('show') ? 'Сховати' : 'Читати повністю';
  });
});
