var calendar =  gsap.timeline({})

calendar.fromTo('#calendar-overlay', {y: 120}, {y: 0, duration: 0.8, ease: "elastic.out(0.8, 0.8)"}, 0)
calendar.to('#calendar-overlay', {y: 120, duration: 0.8, ease: "elastic.in(0.8, 0.8)"}, 4)
