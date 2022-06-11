$(".open").click(function(){
    $(".menu").show("slide",{direction: "left"}, 500)
})
$(".close").click(function(){
    $(".menu").hide("slide",{direction: "left"}, 500)
})


$(".dropdown-trigger").click(function(){
    if($(this).next().is(":visible")){
        $(".sub-menu").slideUp()
        $(this).find("i").removeClass("rotate")
    }
    else{
        $(".sub-menu").slideUp()
        $('.rotate').removeClass("rotate")
         $(this).find("i").addClass("rotate")
        $(this).next().slideDown()
    }
    
})

var StickyNav = $(".sticky-navbar").offset().top //navbar top height ex:44

$(window).scroll(function(){ //scroll event

    var scrollTop = $(window).scrollTop() //scroll top value
    if(scrollTop >= StickyNav){ // jokhon 44 theke boro ba somob hobe > greater than  = equal
        $(".sticky-navbar").addClass("sticky")
    }
    else{
        $(".sticky-navbar").removeClass("sticky")
    }
})


