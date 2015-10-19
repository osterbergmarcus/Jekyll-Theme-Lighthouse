var whereScroll = 500;
$(window).scroll(function(){

    var position = $(window).scrollTop();

    if(position > whereScroll)
    {
        $('.backtotop').fadeIn();
    }
    else
    {
        $('.backtotop').fadeOut();
    }
});

$('.backtotop').on('click', function(){
    $(window).scrollTop(0);
    $(this).fadeOut();
});
