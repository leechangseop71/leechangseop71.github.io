// ---
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
const headerHamMenuCloseBtn = document.querySelector(
  '.header__main-ham-menu-close'
)
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')
hamMenuBtn.addEventListener('click', () => {
  if (smallMenu.classList.contains('header__sm-menu--active')) {
    smallMenu.classList.remove('header__sm-menu--active')
  } else {
    smallMenu.classList.add('header__sm-menu--active')
  }
  if (headerHamMenuBtn.classList.contains('d-none')) {
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  } else {
    headerHamMenuBtn.classList.add('d-none')
    headerHamMenuCloseBtn.classList.remove('d-none')
  }
})
for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active')
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  })
}
// ---
const headerLogoConatiner = document.querySelector('.header__logo-container')
headerLogoConatiner.addEventListener('click', () => {
  location.href = 'index.html'

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
