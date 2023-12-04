/*========== menu icon navbar ==========*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


/*========== scroll sections active link ==========*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });


/*========== sticky navbar ==========*/
let header = document.querySelector('.header');

header.classList.toggle('sticky', window.scrollY > 100);


/*========== remove menu icon navbar when click navbar link (scroll) ==========*/
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

};


/*========== swiper ==========*/
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});


/*========== dark light mode ==========*/
let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
};


/*========== scroll reveal ==========*/
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img img, .skill-container, .portfolio-box, .testimonial-wrapper, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });
ScrollReveal().reveal('.home-content h3, .about-content', { origin: 'right' });

/* Credits:
 * https://www.developphp.com/video/JavaScript/Circular-Progress-Loader-Canvas-JavaScript-Programming-Tutorial
 */

(function () {
    var Progress = function (element) {
      this.context = element.getContext("2d");
      this.refElement = element.parentNode;
      this.loaded = 0;
      this.start = 4.72;
      this.width = this.context.canvas.width;
      this.height = this.context.canvas.height;
      this.total = parseInt(this.refElement.dataset.percent, 10);
      this.timer = null;
  
      this.diff = 0;
  
      this.init();
    };
  
    Progress.prototype = {
      init: function () {
        var self = this;
        self.timer = setInterval(function () {
          self.run();
        }, 25);
      },
      run: function () {
        var self = this;
  
        self.diff = ((self.loaded / 100) * Math.PI * 2 * 10).toFixed(2);
        self.context.clearRect(0, 0, self.width, self.height);
        self.context.lineWidth = 10;
        self.context.fillStyle = "#000";
        self.context.strokeStyle = "#d30000";
        self.context.textAlign = "center";
  
        self.context.fillText(
          self.loaded + "%",
          self.width * 0.5,
          self.height * 0.5 + 2,
          self.width
        );
        self.context.beginPath();
        self.context.arc(
          35,
          35,
          30,
          self.start,
          self.diff / 10 + self.start,
          false
        );
        self.context.stroke();
  
        if (self.loaded >= self.total) {
          clearInterval(self.timer);
        }
  
        self.loaded++;
      }
    };
  
    var CircularSkillBar = function (elements) {
      this.bars = document.querySelectorAll(elements);
      if (this.bars.length > 0) {
        this.init();
      }
    };
  
    CircularSkillBar.prototype = {
      init: function () {
        this.tick = 25;
        this.progress();
      },
      progress: function () {
        var self = this;
        var index = 0;
        var firstCanvas = self.bars[0].querySelector("canvas");
        var firstProg = new Progress(firstCanvas);
  
        var timer = setInterval(function () {
          index++;
  
          var canvas = self.bars[index].querySelector("canvas");
          var prog = new Progress(canvas);
  
          if (index == self.bars.length) {
            clearInterval(timer);
          }
        }, self.tick * 100);
      }
    };
  
    document.addEventListener("DOMContentLoaded", function () {
      var circularBars = new CircularSkillBar("#bars .bar");
    });
  })();