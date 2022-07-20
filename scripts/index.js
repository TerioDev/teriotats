gsap.registerPlugin(ScrollTrigger);

var view1 = gsap.timeline({});

    view1.fromTo('.typ1', {opacity: 0}, {opacity: 1, duration: 0.4})
    view1.to(".typ2", {opacity: 1, duration: 1.9, ease: "power2.in"}, 0.4)
    view1.to(".typ2r", {opacity: 1, duration: 1.9,  ease: "power2.in"}, 0.4)
    view1.to(".typ1", {opacity: 0, duration: 0.1}, 2.3)
    
    view1.fromTo(".divider", {width: 0}, {width: "100%", duration: 1.5, ease: "power3.out"}, 0.8)
    
var view1Navigation = gsap.timeline({});

view1Navigation.fromTo("#navigation", {y: -160}, {y:0, duration: 1.5, ease: "elastic.out(0.8, 0.5)"}, 0.8)
view1Navigation.fromTo("#mobile-navigation-wrap", {y: -160}, {y:0, duration: 1.5, ease: "elastic.out(0.8, 0.5)"}, 0.8)