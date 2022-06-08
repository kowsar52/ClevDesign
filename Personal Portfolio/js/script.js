$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        items: 3,
        loop: true,
        nav:true,
        margin: 30,
        navContainer : '.next-prev',
        navItems: ['<i class="fa-solid fa-angle-left"></i>','<i class="fa-solid fa-angle-right"></i>'],
        dotsContainer: '.scroll',
        responsive : {
            0:{
                items:1,
                nav:true
            },
            600:{
                items:2,
                nav:true
            },
            1000:{
                items:3,
                nav:true,
                loop:true
            }
        }
    })
});

$(".open").click(function(){
    $(".mobile-menu").show("slide",{direction: "left"},500)
    $("body").css('overflow','hidden')
})
$(".close").click(function(){
    $(".mobile-menu").hide("slide",{direction: "left"},500)
    $("body").css('overflow','auto')
})
