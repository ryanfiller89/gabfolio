

(function mobileDropdownOpen($) {
    var button = $('.js-subnav-mobile-button');

    function onButtonClick () {
        $(this).closest('.js-subnav-mobile').toggleClass('open')
    }

    button.on('click', onButtonClick)
})(window.jQuery);
