(function mobileNav($) {
    var navicon = $('.js-navicon');
    var mobileNavSelector = $('.js-mobile-nav-selector');
    var mobileSubnav = $('.js-mobile-subnav');

    function naviconTap () {
        $(this).closest('.site-wrap').toggleClass('open')
        $(this).toggleClass('open')
    }

    function mobileSunav () {
        $(this).toggleClass('open')
        $(this).siblings(mobileSubnav).toggleClass('open');
    }

    navicon.on('click', naviconTap)
    mobileNavSelector.on('click', mobileSunav)

})(window.jQuery);


(function mobileDropdown($) {
    var button = $('.js-subnav-mobile-button');

    function onButtonClick () {
        $(this).closest('.js-subnav-mobile').toggleClass('open')
    }

    button.on('click', onButtonClick)
})(window.jQuery);
