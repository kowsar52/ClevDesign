$(document).ready(function(){
    trigger();
    dropdown();

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
        }else{
            $(document).find('.rotate_90_deg').removeClass('rotate_90_deg')
            $(this).find('rotate-icon').addClass('rotate_90_deg')

            
            if( $(".dropdown-trigger").next().hasClass('dropdown-show')){
                $(document).find('.dropdown-menu.dropdown-show').removeClass('dropdown-show')
            }
    
             $(this).next('.dropdown-menu').toggleClass('dropdown-show')
                
        }
    
    })

}

