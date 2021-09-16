$(document).ready(function(){
    trigger();
    dropdown();
    btnDropdown();

})


function trigger(){
    $(".trigger").on('click',function(){
        $("body").toggleClass("hide-sidebar")
    })
}


function dropdown(){
    $(".dropdown-trigger").on('click',function(){

        
        if( $(this).next().hasClass('dropdown-show')){
            $(document).find('.dropdown-menu.dropdown-show').removeClass('dropdown-show')
            $(document).find('.rotate_90_deg').removeClass('rotate_90_deg')
            $(document).find('.dropddown-trigger.active').removeClass('active')
        }else{
            $(document).find('.rotate_90_deg').removeClass('rotate_90_deg')
            $(this).find('.rotate-icon').addClass('rotate_90_deg')

            
            if( $(".dropdown-trigger").next().hasClass('dropdown-show')){
                $(document).find('.dropdown-menu.dropdown-show').removeClass('dropdown-show')
            }

            if( $(".dropdown-trigger").hasClass('active')){
                $(document).find('.dropdown-trigger.active').removeClass('active')
            }

    
             $(this).next('.dropdown-menu').toggleClass('dropdown-show')
             $(this).toggleClass('active')
                
        }
    
    })

}

function btnDropdown(){
    $('.dropdown-toggle').on('click',function(){
        $('#dropdown-btn').toggleClass('dropdown-show')
    })
}

