gsap.registerPlugin(ScrollTrigger);

//! ceate a timeline for view1
var view1 = gsap.timeline({onReverseComplete: reverseFunction});

    view1.fromTo('.typ1', {opacity: 0}, {opacity: 1, duration: 0.3}, 0.1)
    view1.to(".typ2", {opacity: 1, duration: 1.9, ease: "power2.in"}, 0.4)
    view1.to(".typ2r", {opacity: 1, duration: 1.9,  ease: "power2.in"}, 0.4)
    view1.to(".typ1", {opacity: 0, duration: 0.1}, 2.3)
    
    view1.fromTo(".divider", {width: 0}, {width: "100%", duration: 1.5, ease: "power3.out"}, 0.8)

//! separate timeline for navigation so it doesn't reverse on reload
var view1Navigation = gsap.timeline({});

view1Navigation.fromTo("#navigation", {y: -160, opacity: 1}, {y:0, duration: 1.5, ease: "elastic.out(0.8, 0.5)"}, 0.8)
view1Navigation.fromTo("#mobile-navigation-wrap", {y: -160, opacity: 1}, {y:0, duration: 1.5, ease: "elastic.out(0.8, 0.5)"}, 0.8)

//! function for callback from view1 timeline
function reverseFunction()
{
    view1.restart()
    window.location.href = "book.html"; //* redirects
}

//! resets timelines on page leave