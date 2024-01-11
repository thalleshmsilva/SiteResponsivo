$(function() {
    // Menu - INÍCIO
    $('nav.mobile i').click(function(){
        var el = $(this).parent().find('ul');
        if (el.is(':visible'))
            el.fadeOut();
        else
            el.fadeIn();
    })

    function scroll(href) {
        var offSetTop = $(href).offset().top;
        $('html, body').animate({scrollTop: offSetTop});
        return false;
    }

    $('nav a, .header-box a').click(function() {
        var href = $(this).attr('href');
        scroll(href);
    })
    // Menu - FIM
});