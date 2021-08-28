$(document).ready(function(){
    triggerButton();
    dropdown();
})


function triggerButton(){
    $(".triggerButton").on('click',function(){
        $("body").toggleClass("hide-sidebar")
    })
}


function dropdown(){
    $(".dropdown-trigger").on('click',function(){

        if( $(".dropdown-trigger").next().hasClass('dropdown-show')){
            $(document).find('.dropdown-menu.dropdown-show').removeClass('dropdown-show')
        }

            $(this).next('.dropdown-menu').toggleClass('dropdown-show')
            
        


        
    })
}


// function dropdown(){
//     $(".dropdown-trigger").on('click',function(){
//         $(".notification").toggleClass("dropdown-show")
//     })
// }