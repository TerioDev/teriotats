var book = gsap.timeline({});

var current = "index"

$('.book-button').click (function (e) {
        e.preventDefault(); //will stop the link href to call the blog page

        book.to(".book-overlay", {opacity: 1, duration: 0.2}, 0)
        book.to(".book-overlay", {opacity: 0, duration: 0.2}, 0.6)

        view1.timeScale(3.5).reverse()
        navigationOnClickMobile.timeScale(3).reverse()
});
