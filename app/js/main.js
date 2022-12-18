$(function(){
    
    $('.menu__btn').on('click', function() {
        $('.menu__list').toggleClass('menu__list--active')
    });


    $('.heroes__lider-img').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.heroes__slider-text',
        prevArrow: '<button class="slick__btn slick-prev"><img src="/app/images/arrow-left.png" alt="prev"></button>',
        nextArrow: '<button class="slick__btn slick-next"><img src="/app/images/arrow-rigth.png" alt="next"></button>'
    });
    $('.heroes__slider-text').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        asNavFor: '.heroes__lider-img',
        arrows: false
      });
});
