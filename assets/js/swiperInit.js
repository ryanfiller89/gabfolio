var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: '.swiper-pagination',

    // If we need paginationClickable
    paginationClickable: true,

    // next, previous
    prevButton: '.swiper-button-prev',
    nextButton: '.swiper-button-next',
});

var homeSwiper = new Swiper ('.swiper-container--home', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: '.swiper-pagination',

    // If we need paginationClickable
    paginationClickable: true,

    // next, previous
    nextButton: '.homepage__logo',

    //autoplay
    autoplay: 3000,
    speed: 1000,
});
