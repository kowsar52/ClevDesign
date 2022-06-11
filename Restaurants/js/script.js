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

