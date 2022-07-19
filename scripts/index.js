gsap.registerPlugin(ScrollTrigger);

$(".book-button").on("click",function(){

    var book = gsap.timeline({});
    
    book.to(".book-overlay", {opacity: 1, duration: 0.2}, 0)
    book.to(".book-overlay", {opacity: 0, duration: 0.2}, 0.6)

});

/* $('.grid').animate({ opacity: 0 }, 0).css("background-image", "url(design/sq.png)").delay(800).animate({ opacity: 0.8 }, 1600); */

var view1 = gsap.timeline({});

view1.delay(0.1)

view1.to(".typ2", {opacity: 1, duration: 2, ease: "power1.out"}, 0)
view1.to(".typ2r", {opacity: 1, duration: 2,  ease: "power1.out"}, 0)
view1.to(".typ1", {opacity: 0, duration: 1}, 1)

view1.fromTo(".divider", {width: 0}, {width: "100%", duration: 1.5, ease: "power3.out"}, 0.8)

view1.fromTo("#navigation", {y: -160}, {y:0, duration: 1.5, ease: "elastic.out(0.8, 0.5)"}, 0.8)
view1.fromTo("#mobile-navigation-wrap", {y: -160}, {y:0, duration: 1.5, ease: "elastic.out(0.8, 0.5)"}, 0.8)