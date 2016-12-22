let $ = window.$;
let $naviconWrap = $('.navicon').closest('.navicon--wrap');
let $mobileNavWrap = $('.site-wrap');
let $trayWrap = $('.tray-wrap');
let overlay;
let isOpen = false;
let $sidebarSelectorWrap = $('.sidebar__selector-wrap');
let $mobileNavSelectorWrap = $('.mobile-nav__selector-wrap');

$(() => {
    function toggleOpen() {
        isOpen = !isOpen;
    }

    function addOverlay() {
        overlay = $('<div class="mobile-nav-overlay"></div>');
        $trayWrap.prepend(overlay);
        overlay.on('click', toggleMenuOpen);
    }

    function removeOverlay() {
        overlay.remove();
        overlay.off('click');
    }

    function toggleMenuOpen() {
        $naviconWrap.toggleClass('open');
        toggleOpen();
        if (isOpen) {
            $mobileNavWrap.addClass('open');
            addOverlay();
        } else {
            removeOverlay();
            $mobileNavWrap.removeClass('open');
        }
    }


    function openActive() {
        $mobileNavWrap.find('.active').children('ul').show();
    }

    $sidebarSelectorWrap.on('click', function(){
        $(this).toggleClass('active');
        $(this).parent().siblings('.sidebar').slideToggle();
    });

    $mobileNavSelectorWrap.on('click', function(){
        $(this).toggleClass('active');
        $(this).parent().siblings('ul').toggleClass('active');
    });

    $naviconWrap.on('click', toggleMenuOpen);
    $(window).on('nav.mobile-nav-loaded', openActive);
});
