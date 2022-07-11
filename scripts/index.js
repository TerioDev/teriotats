gsap.registerPlugin(ScrollTrigger);

// SHADOW CAST

var view1 = gsap.timeline({});

view1.to(".typ2", {opacity: 1, duration: 2,  ease: "power1.out"})
view1.to(".typ1", {opacity: 0, duration: 1}, "<50%")

view1.fromTo(".divider", {width: 0}, {width: "100%", duration: 1.5, ease: "power3.out"}, 0.8)

view1.fromTo(".navigation", {y: -160}, {y:0, duration: 1.5, ease: "elastic.out(0.8, 0.5)"}, 0.8)

// OPEN BOOK WINDOW 

$(".book-button").on("click",function(){
    var book = gsap.timeline({});
    
    book.to(".book-wrapper", {zIndex: 2, duration: 0}, 0)
    book.to(".book-overlay", {opacity: 1, duration: 0.5}, 0)
    book.to(".book-wrapper", {opacity: 1, duration: 0.5}, 0)
    book.fromTo(".book-window", {scaleX:0.4, scaleY:0.4}, {scaleX:1, scaleY:1, duration: 0.5, ease: "elastic.out(0.8, 1.4)"}, 0)
    book.fromTo(".x", {opacity: 0}, {opacity:1, duration: 0.6, ease: "power2.out"}, 0.5)
});

// CLOSE BOOK WINDOW

$(".x").on("click",function(){
    var x = gsap.timeline({});

    x.to(".book-wrapper", {opacity: 0, duration: 0.3}, 0)
    x.fromTo(".book-window", {scaleX:1}, {scaleX:0.95, scaleY:0.95, duration: 0.3}, 0)
    x.to(".book-overlay", {opacity: 0, duration: 0.3}, 0.3)
    x.to(".book-window", {borderRadius: "60px"}, 0)
    x.to(".info", {borderTopLeftRadius: "55px", borderBottomLeftRadius: "55px", duration: 0.3}, 0)
    x.to(".form", {borderBottomRightRadius: "55px", borderTopRightRadius: "55px", duration: 0.3}, 0)
    x.to(".book-wrapper", {zIndex: 0, duration: 0}, 0.3)
});

$(".x").on("click",function(){
    $(".info").animate({
        scrollTop: 0
    }, 1000, 'swing');
});

// EXPAND TIMELINE
var expand = gsap.timeline({});

expand.to(".book-window", {border: 0, borderRadius: 0, duration: 0.5, width: "100vw", height: "100vh", margin: 0, padding: 0, bottom: 0}, 0)
expand.to(".info", {borderRadius: 0}, 0)
expand.to(".form", {borderRadius: 0}, 0)

// EXPAND BOOK WINDOW
// media query
const outputElement = document.getElementById("info");

// for less than x px
const smallDevice = window.matchMedia("(min-width: 800px)");

smallDevice.addListener(handleDeviceChange);

// state variables
let left = true;
let right = true;

// expand functions
function handleDeviceChange(e) {
  if (e.matches) {
    ScrollTrigger.create({
        scroller: '.info',
        animation: expand,
        trigger: ".info-header",
        start: "top top",
        toggleActions: "play none none none",
        onEnter: () => left = false,
        onEnterBack: () => left = false,
        onLeaveBack: () => checkLeft()
    })

    ScrollTrigger.create({
        scroller: '.form',
        animation: expand,
        trigger: ".form",
        start: "top top",
        toggleActions: "play none none none",
        onEnter: () => right = false,
        onEnterBack: () => right = false,
        onLeaveBack: () => checkRight()
    })
  } else {
    ScrollTrigger.create({
        scroller: '.book-window',
        animation: expand,
        trigger: ".info-header",
        start: "top top",
        toggleActions: "play none none reverse",
    })
  }
}

function checkLeft() {
    left = true;

    if (left == true && right == true) {
        console.log("playing");
        expand.reverse();
    }
}

function checkRight() {
    right = true;

    if (left == true && right == true) {
        console.log("playing");
        expand.reverse();
    }
}

// Run it initially
handleDeviceChange(smallDevice);