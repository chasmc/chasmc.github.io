
$(document).ready(function(){

    var block = $('.logo-container a img');

    block.each(function(){
        $(this).on('mouseenter', function(){
            $(this).parent().siblings().children('img').css("opacity", ".5");
        });
        $(this).on('mouseleave', function(){
            $(this).parent().siblings().children('img').css("opacity", "1");
        });
    });
});