$(document).ready(function() {
    $('.toggler').click(function(){
        $(this).toggleClass('toggler-on white-background');
        $('body').toggleClass('dark-background');
        $('.dark-mode-button').toggleClass('grey-background');
    })
})