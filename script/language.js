document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".header-bottom__languages-button");

  buttons.forEach(button => {
    if (button.textContent === 'UA') {
      button.classList.add("active");
    }
  });

  buttons.forEach(button => {
    button.addEventListener("click", function () {
      document.querySelector(".header-bottom__languages-button.active").classList.remove("active");
      button.classList.add("active");

      // Switch language based on button text
      if (button.textContent === 'UA') {
        switchLanguage('ua');
      } else if (button.textContent === 'RU') {
        switchLanguage('ru');
      }
    });
  });

  buttons.forEach(button => {
    button.addEventListener("click", function () {
      document.querySelector(".header-bottom__languages-button.active").classList.remove("active");
      button.classList.add("active");

      // Switch language based on button text
      if (button.textContent === 'UA') {
        switchLanguage('ua');
      } else if (button.textContent === 'RU') {
        switchLanguage('ru');
      }
    });
  });
});

function switchLanguage(language) {
  const headerElements = document.querySelectorAll('.header-content [data-ua], .header-content [data-ru]');

  headerElements.forEach(element => {
    const text = language === 'ua' ? element.getAttribute('data-ua') : element.getAttribute('data-ru');

    if (element.tagName === 'H1' || element.tagName === 'P' || element.tagName === 'A' || element.tagName === 'span') {
      element.textContent = text;
    }
  });

  //Products
  const titleElement = document.querySelector('.header-content__block-title');
  if (titleElement) {
    const mainText = language === 'ua' ? titleElement.getAttribute('data-ua') : titleElement.getAttribute('data-ru');
    titleElement.innerHTML = mainText;

    //Header lightgreen
    const lightGreenSpan = titleElement.querySelector('.header-content__block-title--lightgreen');
    if (lightGreenSpan) {
      const lightGreenText = language === 'ua' ? lightGreenSpan.getAttribute('data-ua') : lightGreenSpan.getAttribute('data-ru');
      lightGreenSpan.textContent = lightGreenText;
      lightGreenText.color = 'green';
    }
  }

  //Product text
  const productTextElements = document.querySelectorAll('.products-content__product-text');
  productTextElements.forEach(element => {
    const text = language === 'ua' ? element.parentElement.getAttribute('data-ua') : element.parentElement.getAttribute('data-ru');
    element.textContent = text;
  });

  //Product title
  const productsTitleElement = document.querySelector('.products-content__title');
  if (productsTitleElement) {
    const titleText = language === 'ua' ? productsTitleElement.getAttribute('data-ua') : productsTitleElement.getAttribute('data-ru');
    productsTitleElement.textContent = titleText;
  }

  //Adress
  const addressElement = document.querySelector('.header-top__locate-adress');
  if (addressElement) {
    const addressText = language === 'ua' ? addressElement.getAttribute('data-ua') : addressElement.getAttribute('data-ru');
    addressElement.innerHTML = addressText;
  }

  //Head title
  const headerMenuElements = document.querySelectorAll('.header-top__menu [data-ua], .header-top__menu [data-ru]');
  headerMenuElements.forEach(element => {
    const text = language === 'ua' ? element.getAttribute('data-ua') : element.getAttribute('data-ru');
    element.textContent = text;
  });

  //Text in burger
  const burgerMenuElements = document.querySelectorAll('.burger-menu [data-ua], .burger-menu [data-ru]');
  burgerMenuElements.forEach(element => {
    const text = language === 'ua' ? element.getAttribute('data-ua') : element.getAttribute('data-ru');
    element.textContent = text;
  });

  //Element <a> with class header-top__button-call
  const buttonCallElement = document.querySelector('.header-top__button-call');

  if (buttonCallElement && buttonCallElement.hasAttribute('data-ua') && buttonCallElement.hasAttribute('data-ru')) {
    const newText = language === 'ua' ? buttonCallElement.getAttribute('data-ua') : buttonCallElement.getAttribute('data-ru');
    buttonCallElement.textContent = newText;
  }

  //Text in main menu
  const headerMenuElement = document.querySelectorAll('.header-bottom__menu-link');
  headerMenuElement.forEach(element => {
    const text = language === 'ua' ? element.getAttribute('data-ua') : element.getAttribute('data-ru');
    element.textContent = text;
  });

  //Text in main submenu
  const headerSubMenuElement = document.querySelectorAll('.header-bottom__menu-dropdown_link');
  headerSubMenuElement.forEach(element => {
    const text = language === 'ua' ? element.getAttribute('data-ua') : element.getAttribute('data-ru');
    element.textContent = text;
  });
}