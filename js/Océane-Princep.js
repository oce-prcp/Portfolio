$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.bar').addClass("sticky");
        }else{
            $('.bar').removeClass("sticky");
        }
    });

    //typing animation script
    var typed = new Typed(".typing", {
        strings: ["étudiante", "développeuse", "programmeuse"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["étudiante", "développeuse", "programmeuse"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-3", {
        strings: ["créative.", "ayant l'esprit d'équipe.", "à l'écoute.", "organisée.", "agréable."],
        typeSpeed: 100,
        backSpeed: 80,
        loop: true
    });

    //toggle menu/bar script
    $('.menu-btn').click(function(){
        $('.bar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    //owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});