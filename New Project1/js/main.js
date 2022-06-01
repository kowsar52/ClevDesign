$(document).ready(function(){
    trigger();
    dropdown();
    activeButtonGroup();
    navs();
    navDropdown();
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





function activeButtonGroup(){
    $('.btn-group .btn').on('click',function(){
        
        if($('.btn-group .btn').hasClass('active')){
            $('.btn-group').find('.active').removeClass('active')
        }

        $(this).toggleClass('active')
    })
}

function navs(){
    $('.nav-list .nav-list-item').on('click',function(){
        var target = $(this).data('target')
        $('.AllTab').find('.active').removeClass('active')

        $(this).addClass('active')
        $(target).addClass('active')
    })
}

function navDropdown(){
    $('.dropdown-trigger').on('click',function(){


        
       if($('.nav-list').hasClass('active')){
           $('.nav-list').find('.nav-dropdown.dropdown-show').removeClass('dropdown-show')
       }
        
        $(this).hasClass('active')
        $('.nav-list').find('.nav-dropdown').toggleClass('dropdown-show')
        
    })
}