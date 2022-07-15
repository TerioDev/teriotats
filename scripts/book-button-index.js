// OPEN BOOK WINDOW 

$(".book-button").on("click",function(){
    var book = gsap.timeline({});
    
    book.to(".book-overlay", {opacity: 1, duration: 0.2}, 0)
    book.to(".shadow", {zIndex: 1, duration: 0}, 0)
    book.fromTo(".book-window", {y: "-100vh"}, {y:0, duration: 1.5, ease: "power3.out"}, 0)
    book.to(".shadow", {opacity: 1, duration: 1.8, ease: "power3.out"}, 0)
    book.fromTo(".x", {opacity: 0}, {opacity:1, duration: 0.6, ease: "power3.out"}, 1.2)

    window.setTimeout(function() {
        window.location.href = "book.html";
    }, 2000);
});