// BOOK ANIMATION

$(".book-button").on("click",function(){
    var book = gsap.timeline({});
    
    book.to(".book-overlay", {opacity: 1, duration: 0.2}, 0)
    book.to(".book-overlay", {opacity: 0, duration: 0.2}, 0.6)

});