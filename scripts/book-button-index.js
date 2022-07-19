$('.book-button').click (function (e) {
        e.preventDefault(); //will stop the link href to call the blog page

        gsap.to(".wrapper", {opacity: 0, duration: 0.7})
        navigationOnClickMobile.reverse(0.7)
     
        setTimeout(function () {
            window.location.href = "book.html"; //will redirect to your blog page (an ex: blog.html)
         }, 700); //will call the function after 2 secs.
     
});