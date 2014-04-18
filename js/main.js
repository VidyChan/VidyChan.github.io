$(document).ready(function () {
    var $act, $wid;

    function setStuff(varia) {
        $act = $(window).height();
        $wid = $(window).width();

        $('.home').css('height', $act).css('width', $wid);
        $('.home .bg').css('height', $act).css('width', $wid);


        if ($(window).height() < ($('nav').offset().top + 50)) {
            $('.home').css('height', $('nav').offset().top + 200);
            $('.home .bg').css('height', $('nav').offset().top + 200);
        }
        if ($(window).height() < 424) {
            $('.home').css('min-height', 500);
            $('.home .bg').css('min-height', 500);
        }
    }


    setStuff($act);
    $(window).resize(function () {
        //var $act = $(window).height();
        setStuff($act)
    });

    $('.namee span').mouseover(function (e) {
        e.preventDefault();
        var tooltip = $(this).attr('data-title');
        console.log(tooltip);
        $(this).css('position', 'relative');
        $(this).append('<span class="tooltip">' + tooltip + '</span>');
    });
    $('.namee span').mouseout(function () {
        $(this).find('span.tooltip').hide().remove();
    });

});