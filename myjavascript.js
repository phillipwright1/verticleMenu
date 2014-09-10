$(document).ready(function() {
    $('#toggle-child').click(function() {
        $('.child-menu').toggle("fast");
    });

    function animateIcon(){
        $('.number-icon').fadeIn(400).delay(400).fadeOut(400, animateIcon);
    }
    animateIcon();


});