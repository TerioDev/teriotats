gsap.registerPlugin(ScrollTrigger);

// SHADOW CAST

var view1 = gsap.timeline({});

view1.to(".typ2", {opacity: 1, duration: 2,  ease: "power1.out"})
view1.to(".typ2r", {opacity: 1, duration: 2,  ease: "power1.out"}, "<")
view1.to(".typ1", {opacity: 0, duration: 1}, "<50%")

view1.fromTo(".divider", {width: 0}, {width: "100%", duration: 1.5, ease: "power3.out"}, 0.8)

view1.fromTo("#navigation", {y: -160}, {y:0, duration: 1.5, ease: "elastic.out(0.8, 0.5)"}, 0.8)