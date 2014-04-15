$(document).ready(function () {
    var $act, $wid;

    function setStuff(varia) {
        $act = $(window).height();
        $wid = $(window).width();

        $('.home').css('height', $act).css('width', $wid);
        $('.home .bg').css('height', $act).css('width', $wid);
    }


    setStuff($act);
    $(window).resize(function () {
        //var $act = $(window).height();
        setStuff($act)
    });

});