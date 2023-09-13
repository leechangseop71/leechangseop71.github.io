$(document).ready(function() {
  const hamMenuBtn = $('.header__main-ham-menu-cont');
  const smallMenu = $('.header__sm-menu');
  const headerHamMenuBtn = $('.header__main-ham-menu');
  const headerHamMenuCloseBtn = $('.header__main-ham-menu-close');
  const headerSmallMenuLinks = $('.header__sm-menu-link');

  hamMenuBtn.click(function() {
    smallMenu.toggleClass('header__sm-menu--active');
    headerHamMenuBtn.toggleClass('d-none');
    headerHamMenuCloseBtn.toggleClass('d-none');
  });

  headerSmallMenuLinks.click(function() {
    smallMenu.removeClass('header__sm-menu--active');
    headerHamMenuBtn.removeClass('d-none');
    headerHamMenuCloseBtn.addClass('d-none');
  });

  const headerLogoContainer = $('.header__logo-container');

  headerLogoContainer.click(function() {
    window.location.href = 'index.html';
  });

  // GSAP 코드 추가
  gsap.registerPlugin(ScrollTrigger);

  const skillElements = document.querySelectorAll('.skills__skill');

  skillElements.forEach((element, index) => {
    gsap.to(element, {
      scrollTrigger: {
        trigger: element,
        start: 'top center',
        end: 'bottom center',
        markers: true,
        toggleActions: 'play none none none',
      },
      opacity: 1,
      x: 0,
      duration: 0.5,
      delay: index * 0.2,
    });
  });
});
