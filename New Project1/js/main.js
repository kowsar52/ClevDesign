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
        }else{

            if( $(".dropdown-trigger").next().hasClass('dropdown-show')){
                $(document).find('.dropdown-menu.dropdown-show').removeClass('dropdown-show')
            }
    
             $(this).next('.dropdown-menu').toggleClass('dropdown-show')
                
        }
    
    })

}

