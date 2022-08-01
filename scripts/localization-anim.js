var localClick = gsap.timeline({paused: true})

localClick.to('#public', {x: 190, duration: 0.5, ease: "Power4.easeInOut"})
localClick.to('.switchlang', {x: -80, duration: 0.5, ease: "Power4.easeInOut"}, "<")
localClick.fromTo('.switch-wrap', {backgroundColor: "#c4ba1b"}, {backgroundColor: "#e3806d", duration: 0.5, ease: "Power4.easeInOut"}, "<")

jQuery(document).ready(function($){

    var switchPosition = "left";

    $(".switch-wrap").click(function() {
        if (switchPosition == "left") {
            switchPosition = "right"
            localClick.play()
        } else {
            switchPosition = "left"
            localClick.reverse()
        }
    })
    
})

