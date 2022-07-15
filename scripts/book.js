gsap.registerPlugin(ScrollTrigger)

// ON LOAD

gsap.fromTo(".book-wrapper", {opacity: 0}, {opacity: 1, duration: 2})

// MINIMIZE TIMELINE

$(".x").on("click",function(){
    $('.info, .form').animate({scrollTop:0}, 'slow');
    $('.book-window').animate({scrollTop:0}, 'slow');
});

// FOR MOBILE 

ScrollTrigger.create({
    scroller: '.book-window',
    trigger: ".info-header",
    start: "top top",
    onEnter: () => showX(),
    onEnterBack: () => showX(),
    onLeaveBack: () => hideX()
})

function showX() {
gsap.to(".x", {opacity: 1, pointerEvents: "auto", zIndex: 6, duration: 1})
}

function hideX() {
    gsap.to(".x", {opacity: 0, pointerEvents: "none", duration: 1})
}

// EXPAND TIMELINE
var expand = gsap.timeline({});

expand.to(".book-wrapper", {zIndex: 2, duration: 0}, 0)
expand.to(".book-wrapper", {height: "100%", paddingTop: "20px"}, 0)

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
        onEnter: () => activeLeft(),
        onEnterBack: () => activeLeft(),
        onLeaveBack: () => checkLeft()
    })

    ScrollTrigger.create({
        scroller: '.form',
        animation: expand,
        trigger: ".form",
        start: "top top",
        toggleActions: "play none none none",
        onEnter: () => activeRight(),
        onEnterBack: () => activeRight(),
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

function activeLeft() {
    showX();
    left = false;
}

function activeRight() {
    showX();
    right = false;
}

function checkLeft() {
    left = true;

    if (left == true && right == true) {
        console.log("playing");
        
        hideX();
        expand.reverse();
    }
}

function checkRight() {
    right = true;

    if (left == true && right == true) {
        console.log("playing");
        
        hideX();
        expand.reverse();
    }
}

$('.grid').animate({ opacity: 0 }, 0).css("background-image", "url(design/sq.png)").delay(800).animate({ opacity: 0.8 }, 1600);

// Run it initially
handleDeviceChange(smallDevice);