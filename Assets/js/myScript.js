$(function () {
    $('#remonter').click(function () {
        $('html, body').animate({
            scrollTop: '0px'
        },
            1500);
        return false;
    });
});