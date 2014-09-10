$(document).ready(function() {
    $('#toggle-child').click(function() {
        $('.child-menu').slideToggle("fast");
    });

    function animateIcon(){
        $('.number-icon').fadeIn(400).delay(400).fadeOut(400, animateIcon);
    }
    animateIcon();


});