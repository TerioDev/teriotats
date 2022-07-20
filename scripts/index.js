gsap.registerPlugin(ScrollTrigger);

var view1 = gsap.timeline({});

document.addEventListener('DOMContentLoaded', function() {

    view1.fromTo('.typ1', {opacity: 0}, {opacity: 1, duration: 0.4})
    view1.to(".typ2", {opacity: 1, duration: 1.9, ease: "power2.in"}, 0.4)
    view1.to(".typ2r", {opacity: 1, duration: 1.9,  ease: "power2.in"}, 0.4)
    view1.to(".typ1", {opacity: 0, duration: 1}, 1.9)
    
    view1.fromTo(".divider", {width: 0}, {width: "100%", duration: 1.5, ease: "power3.out"}, 0.8)
    
    view1.fromTo("#navigation", {y: -160}, {y:0, duration: 1.5, ease: "elastic.out(0.8, 0.5)"}, 0.8)
    view1.fromTo("#mobile-navigation-wrap", {y: -160}, {y:0, duration: 1.5, ease: "elastic.out(0.8, 0.5)"}, 0.8)

}, false);


var book = gsap.timeline({});

$(".book-button").on("click",function(){

    book.to(".book-overlay", {opacity: 1, duration: 0.2}, 0)
    book.to(".book-overlay", {opacity: 0, duration: 0.2}, 0.6)

});