gsap.registerPlugin(CSSPlugin);

//! DESKTOP

//! Variable for switching 
var indicator = false;

var navigationOnClick = gsap.timeline({paused: true})

navigationOnClick.to("#navigation", {zIndex: 12, duration: 0}, 0)
navigationOnClick.fromTo("#navigation", {backgroundColor: "rgb(248, 156, 25, 0)"}, {backgroundColor: "rgb(248, 156, 25, 1)", duration: 0.2}, 0)
navigationOnClick.fromTo(".sub-menu", {height: 0, opacity: 1}, {height: 140, opacity: 1, y: "0px", duration: 0.8, ease: "power4.easeOut"}, 0)
navigationOnClick.fromTo(".info-show-less", {y: -90, opacity: 1}, {y: 0, duration: 0.8, ease: "power2.easeOut"}, 0)
navigationOnClick.to(".info-text", {y: 90, duration: 0.8, ease: "power2.easeOut"}, 0)
navigationOnClick.fromTo(".info-button-sub", {y: "-80px", opacity: 0}, {y: "0px", opacity: 1, duration: 0.6, ease: "power2.easeOut"}, 0.2)

//! This turns on extended sub menu on clicking info button
$("#info").click(function() {

    if (indicator === false) { 

    navigationOnClick.play()

    console.log('expanding menu')

    indicator = true;

    } else if (indicator === true) {

    navigationOnClick.reverse()

    console.log('hiding menu')

    indicator = false;

}})

/* MOBILE*/

var navigationOnClickMobile = gsap.timeline({paused: true})

navigationOnClickMobile.to('#mobile-navigation-wrap', {zIndex: 13, duration: 0}, 0)
navigationOnClickMobile.to(".mobile-menu-background", {opacity: 1, duration: 0}, 0)
navigationOnClickMobile.to(".mobile-menu-background", {height: "100vh", duration: 1, ease: "power2.easeOut"}, 0)
navigationOnClickMobile.fromTo("#sub1", {y:-40}, {y:0, opacity: 1, duration: 0.5}, 0.10)
navigationOnClickMobile.fromTo(".switch-wrap", {y:-40}, {y:0, opacity: 1, duration: 0.5}, 0.17)
navigationOnClickMobile.fromTo("#sub3", {y:-40}, {y:0, opacity: 1, duration: 0.5}, 0.22)
navigationOnClickMobile.fromTo("#sub4", {y:-40}, {y:0, opacity: 1, duration: 0.5}, 0.30)
navigationOnClickMobile.fromTo("#sub5", {y:-40}, {y:0, opacity: 1, duration: 0.5}, 0.40)
navigationOnClickMobile.fromTo("#mobile-book-button", {y:-40, opacity: 0}, {y:0, opacity: 1, duration: 0.5}, 0.22)
/* navigationOnClickMobile.fromTo("#show-less-button", {y:-40}, {y:0, opacity: 1, duration: 0.5}, 0.8) */

navigationOnClickMobile.to(".shadow", {duration: 0, PointerEvents: "none"}, 0)
navigationOnClickMobile.to(".shadow", {opacity: 1, PointerEvents: "none", duration: 1, ease: "power2.easeOut"}, 0)

/* HEIGHT DEPENDENT ANIMATIONS */
const mediaQuery = window.matchMedia('(min-height: 661px)')

if (mediaQuery.matches) {
    navigationOnClickMobile.fromTo(".info-show-less", {y: -90, opacity: 1}, {y: 0, duration: 0.8, ease: "power2.easeOut"}, 0)
    navigationOnClickMobile.to(".info-text", {y: 90, duration: 0.8, ease: "power2.easeOut"}, 0)
  } else {
    navigationOnClickMobile.fromTo(".info-show-less", {y: -90, opacity: 1}, {y: -15, duration: 0.8, ease: "power2.easeOut"}, 0)
    navigationOnClickMobile.to(".info-text", {y: 90, duration: 0.8, ease: "power2.easeOut"}, 0)
  }

/* This turns on mobile sub menu on clicking info button */
$("#menu").click(function() {

    if (indicator === false) { 

    navigationOnClickMobile.play()

    console.log('expanding mobile menu')

    indicator = true;

    } else if (indicator === true) {

    navigationOnClickMobile.reverse()

    console.log('hiding mobile menu')

    indicator = false;

}})

//! LINKS
$('#home').on('click', function() { location.href = 'index.html' });

// $('#home').on('click', function() { location.href = 'https://terio.ink/' });

// $('#home').on('click', function() { location.href = 'https://terio.ink/'});