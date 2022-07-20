var book = gsap.timeline({});

$('.book-button').click (function (e) {
        e.preventDefault(); //will stop the link href to call the blog page

        book.to(".book-overlay", {opacity: 1, duration: 0.2}, 0)
        book.to(".book-overlay", {opacity: 0, duration: 0.2}, 0.6)

        view1.timeScale(4).reverse()
        navigationOnClickMobile.timeScale(3).reverse()
     
        setTimeout(function () {
            window.location.href = "book.html"; //will redirect to your blog page (an ex: blog.html)
         }, 700); //will call the function after 2 secs.
     
});