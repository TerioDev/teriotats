/* SUBMENU */
/* This turns on extended sub menu on clicking info button */

/* VARIABLE FOR SWITCHING */
var indicator = false;

var navigationOnClick = gsap.timeline({paused: true})

navigationOnClick.fromTo("#navigation", {backgroundColor: "rgb(248, 156, 25, 0)"}, {backgroundColor: "rgb(248, 156, 25, 1)", duration: 0.2}, 0)
navigationOnClick.fromTo(".sub-menu", {height: 0, opacity: 1}, {height: 140, opacity: 1, y: "0px", duration: 0.8, ease: "power4.easeOut"}, 0)

navigationOnClick.fromTo(".info-show-less", {y: -90, opacity: 1}, {y: 0, duration: 0.8, ease: "power2.easeOut"}, 0)
navigationOnClick.to(".info-text", {y: 90, duration: 0.8, ease: "power2.easeOut"}, 0)
navigationOnClick.fromTo(".info-button-sub", {y: "-80px", opacity: 0}, {y: "0px", opacity: 1, duration: 0.6, ease: "power2.easeOut"}, 0.2)

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

var navigationOnClickMobile = gsap.timeline({paused: true})

navigationOnClickMobile.to(".mobile-menu-background", {height: "100vh", duration: 1, ease: "power2.easeOut"}, 0)

navigationOnClickMobile.fromTo(".info-show-less", {y: -90, opacity: 1}, {y: 0, duration: 0.8, ease: "power2.easeOut"}, 0)
navigationOnClickMobile.to(".info-text", {y: 90, duration: 0.8, ease: "power2.easeOut"}, 0)

navigationOnClickMobile.fromTo("#sub1", {y:-40}, {y:0, opacity: 1, duration: 0.5}, 0.10)
navigationOnClickMobile.fromTo("#sub2", {y:-40}, {y:0, opacity: 1, duration: 0.5}, 0.15)
navigationOnClickMobile.fromTo("#sub3", {y:-40}, {y:0, opacity: 1, duration: 0.5}, 0.22,5)
navigationOnClickMobile.fromTo("#sub4", {y:-40}, {y:0, opacity: 1, duration: 0.5}, 0.30)
navigationOnClickMobile.fromTo("#sub5", {y:-40}, {y:0, opacity: 1, duration: 0.5}, 0.40)
navigationOnClickMobile.fromTo("#mobile-book-button", {y:-40, opacity: 0}, {y:0, opacity: 1, duration: 0.5}, 0.5,25)
/* navigationOnClickMobile.fromTo("#show-less-button", {y:-40}, {y:0, opacity: 1, duration: 0.5}, 0.8) */

navigationOnClickMobile.to(".shadow", {duration: 0}, 0)
navigationOnClickMobile.to(".shadow", {opacity: 1, duration: 1, ease: "power2.easeOut"}, 0)

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