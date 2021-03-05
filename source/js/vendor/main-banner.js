export {ShowBanner};

document.querySelector('.left-side').onclick = () => modalToggle('.right-side');
document.querySelector('.right-side').onclick = () => modalToggle('.right-side');

function ShowBanner () {
  gsap.to('.main-text__string', {duration: 2.2, delay: 0.5, ease: "power4", opacity: 1, stagger: 0.35})
  document.querySelector('.main-banner').style.display = "block";

  if (window.matchMedia("min-width: 1024px")) {
    gsap.to('.right-side', {duration: 0, delay: 0, opacity: 1});
    gsap.to('.main-banner__text', {duration: 0.3, delay: 2, opacity: 1});
    gsap.from('.svg-rex', {duration: 0.5, delay: 2.2, ease: "power4", opacity: 0, y: -100});
    gsap.from('.svg-flag', {duration: 0.5, delay: 2.2, ease: "power4", opacity: 0, y: -100});
    gsap.from('.svg-lighter--purple-2', {duration: 0.6, delay: 2.8, ease: "back.out(1)", opacity: 0, scale: 0, y: "120%", x: "0%"});
    gsap.from('.svg-lighter--red', {duration: 0.6, delay: 3.1, ease: "back.out(1)", opacity: 0, scale: 0, y: "230%", x: "100%"});
    gsap.from('.svg-lighter--purple-1', {duration: 0.6, delay: 3.4, ease: "back.out(1)", opacity: 0, scale: 0, y: "100%", x: "170%"});
    gsap.from('.svg-lighter--blue', {duration: 0.6, delay: 3.7, ease: "back.out(1)", opacity: 0, scale: 0, y: "120%", x: "0%"});

  }
}

function modalToggle(elem) {
  document.querySelector(elem).classList.toggle('modal--active');
}
