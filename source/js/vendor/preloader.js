import {ShowBanner} from './main-banner';

gsap.from('.logo__cap-letter', {duration: 1, delay: 0.5, ease: "power4", opacity: 0});
gsap.from('.logo__shield', {duration: 0.6, delay: 1.0, ease: "back.out(1)", opacity: 0, scale: 4, y: "-160%", x: "-160%" });
gsap.from('.logo__a', {duration: 0.6, delay: 1.1, ease: "back.out(1)", opacity: 0, scale: 1.5, y: "-30%", x: "-30%" });
gsap.from('.logo__small-letter', {duration: 0.2, delay: 1.9, ease: "steps(15)", onComplete: animComplete, opacity: 0, stagger: 0.05});

let animLoaded = false;
let pageLoaded = false;
let tl = gsap.timeline();

window.onload = () => {
  pageLoaded = true;
  loaderState ();
}

function animComplete () {
  animLoaded = true;
  loaderState ();
}

function loaderState () {
  if ( animLoaded == true && pageLoaded == true ) {
    gsap.to('.loader__enter', {duration: 1.9, ease: "circ", opacity: 1 });
    tl.to('.loader__enter', 0.8, {repeat: -1, yoyo: true, ease: "power1.inOut", delay: 0.7, opacity: 0.5, scale: 0.99});
    return true;
  }
}

function hideLoader () {
  document.querySelector('.loader').style.display = "none"
  gsap.to('.header', {duration: 0, opacity: 1})

  if(window.matchMedia('(max-width: 1024px)').matches) {
    gsap.to('.header__toggle', {duration: 0.3, ease: "power1", opacity: 1})
  }
  else {
    gsap.from('.header__list', {duration: 0.3, ease: "power1", y: -80, opacity: 0})
  }
}

function closeLoaderAnim () {
  gsap.to('.logo', {duration: 0.5, ease: "power4", width:  192, height: 24});
  tl.kill();
  gsap.to('.loader__enter', {duration: 0.3, ease: "circ", opacity: 0, y: 70 });
  setTimeout( hideLoader , 250 );
  document.querySelector('.logo').classList.add('logo--loaded');
  ShowBanner ();
}

window.addEventListener ("keypress", function (e) {
  if (e.keyCode !== 13) return;
  else if ( loaderState () && !document.querySelector('.logo').classList.contains('logo--loaded') ) {
    closeLoaderAnim ();
  }
});

window.addEventListener ("click", function (e) {
  if ( loaderState () && !document.querySelector('.logo').classList.contains('logo--loaded') ) {
    closeLoaderAnim ();
  }
});


if(window.matchMedia('(min-width: 1024px)').matches) {
  document.querySelector('.loader__enter').innerHTML = "Нажмите на Enter";
}
