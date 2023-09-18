
import LocomotiveScroll from 'locomotive-scroll';
import {gsap} from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger.js';

const locomotiveScroll = new LocomotiveScroll();

let navMain = document.querySelector('.header-nav');
let navToggle = document.querySelector('.header-nav__toggle');
let newsButton = document.querySelector('.news__button');
let newsCloseButton = document.querySelector('.news__close-button');
let newsWindow = document.querySelector('.news__frame');
let page = document.querySelector('.page');

navMain.classList.add('header-nav--closed');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('header-nav--closed')) {
    navMain.classList.remove('header-nav--closed');
    navMain.classList.add('header-nav--opened');
  } else {
    navMain.classList.add('header-nav--closed');
    navMain.classList.remove('header-nav--opened');
  }
});

newsButton.addEventListener('click', function () {
  newsWindow.classList.add('news__frame--opened');
  page.classList.add('page--fixed');
});

newsCloseButton.addEventListener('click', function () {
  newsWindow.classList.remove('news__frame--opened');
  page.classList.remove('page--fixed');
});

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.matchMedia({
  '(min-width: 900px)': function () {

    ScrollTrigger.create({
      trigger: '.info__section--red',
      start: 'top 20%',
      end: 'bottom 20%',
      toggleClass: {targets: '.info__logo-svg', className: 'red'},
    });

    ScrollTrigger.create({
      trigger: '.info__section--blue',
      start: 'top 20%',
      end: 'bottom 20%',
      toggleClass: {targets: '.info__logo-svg', className: 'blue'},
    });

    ScrollTrigger.create({
      trigger: '.info__section--yellow',
      start: 'top 20%',
      end: 'bottom 20%',
      toggleClass: {targets: '.info__logo-svg', className: 'yellow'},
    });

    const textBlocks = gsap.utils.toArray('.info__text-holder');
    textBlocks.forEach((text) => {
      gsap.from(text, {
        scrollTrigger: {
          start: 'top bottom',
          end: 'bottom 20%',
          trigger: text,
          toggleClass: 'visible',
        },
      });
    });
  },
});

ScrollTrigger.create({
  trigger: '.page-main',
  start: '10% 100%',
  end: '103% 100%',
  toggleClass: {targets: '.page-main__button', className: 'visible'},
});


const tiles = gsap.utils.toArray('.tile__line');
tiles.forEach((tile) => {
  gsap.from(tile, {
    scrollTrigger: {
      trigger: tile,
      start: 'top bottom',
      end: 'bottom bottom',
      scrub: true,
    },
    opacity: 0,
  });
});


const textLines = gsap.utils.toArray('.news__text');
textLines.forEach((line) => {
  gsap.to(line, {
    scrollTrigger: {
      trigger: line,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    },
    x: -200,
  });
});

ScrollTrigger.matchMedia({
  '(min-width: 900px)': function () {
    const projects = gsap.utils.toArray('.project:not(:last-child)');
    projects.forEach((project) => {
      ScrollTrigger.create({
        trigger: project,
        start: 'top 800',
        end: 'bottom 500',
        toggleClass: 'visible',
      });
    });

    ScrollTrigger.create({
      trigger: '.projects__title',
      start: 'top 108',
      endTrigger: '.project:last-child .project__info',
      end: 'top 250',
      pin: true,
      pinSpacing: false,
    });
  },
});
