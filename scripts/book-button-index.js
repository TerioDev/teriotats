// OPEN BOOK WINDOW 

$(".book-button").on("click",function(){
    var book = gsap.timeline({});
    
    book.to(".book-overlay", {opacity: 1, duration: 0.2}, 0)
    book.to(".shadow", {zIndex: 1, duration: 0}, 0)
    book.to(".shadow", {opacity: 1, duration: 1, ease: "power3.out"}, 0)

    window.setTimeout(function() {
        window.location.href = "book.html";
    }, 1000);
});