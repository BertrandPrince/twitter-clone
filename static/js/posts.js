////////////////////////
////javascript
////////////////////

$(function() {
    // Executed when js-menu-icon is clicked
    $('.js-menu-icon').click(function(){
        //$(this): self element, namely div.js-menu-icon
        //next(): next to div.js-menu-icon, namely div.menu
        //toggle(): Switch show and hide
        $(this).next().toggle();
    })

})

