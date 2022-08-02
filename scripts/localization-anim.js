var localClick = gsap.timeline({paused: true})

localClick.to('.public-wrap', {width: "100%", duration: 0.5, ease: "Power4.easeInOut"})
localClick.to('.switchlang', {x: -80, duration: 0.5, ease: "Power4.easeInOut"}, "<")
localClick.fromTo('.switch-wrap', {backgroundColor: "#e3806d"}, {backgroundColor: "#8aa218", duration: 0.5, ease: "Power4.easeInOut"}, "<")

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

