$(document).ready(function() {
    $('.hat__burger').click(function(event){
        $('.hat__burger,.hat__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});