$(function(){
   $('#goBottom').click(function(){
    $('html , body').animate({scrollTop: $(document).height()}, 1200)
    return false;
    });
    $('#goTop').click(function(){
        $('html , body').animate({scrollTop: 0}, 1200)
        return false;
    });

    $(document).contexmenu(function(){
        return false;
    });
});