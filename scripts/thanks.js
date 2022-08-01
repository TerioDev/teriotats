var thanksOnLoad = gsap.timeline({})

thanksOnLoad.to('.book-window', {height: 800, width: 1100, ease: 'power2.out', duration: 1}, 0.2)
thanksOnLoad.fromTo('.thanku1', {opacity: 0}, {opacity: 1, duration: 0.8}, 0.4)
thanksOnLoad.fromTo('.thanku2', {opacity: 0}, {opacity: 1, duration: 0.8}, 0.4)
thanksOnLoad.fromTo('.thanku3', {opacity: 0}, {opacity: 1, duration: 0.8}, 0.4)
thanksOnLoad.fromTo('.back-home-btn', {opacity: 0}, {opacity: 1, duration: 0.8}, 0.4)