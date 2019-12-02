$(document).ready(function () {
    // input search
    function checkInput() {
        if ($(this).val() === "") {
            $(this).parents('.form-search__wrapper').find('.form-result').fadeOut();
            $(this).parents('.form-search__wrapper').find('.btn-reset').fadeOut();
        } else {
            $(this).parents('.form-search__wrapper').find('.form-result').fadeIn();
            $(this).parents('.form-search__wrapper').find('.btn-reset').fadeIn();
        }
    }

    $(function () {
        $('.form-search input').keydown(checkInput).keyup(checkInput);
    });


    // btn click top
    $("body").on("click", "#btn-top", function () {
        $("html, body").animate({
            scrollTop: 0
        }, "slow");
    });

    // slider
    $('.lookbook-slider__one').slick({
        slidesToShow: 1,
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>'
    });

    $('.lookbook-slider__two').slick({
        slidesToShow: 1,
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>'
    });

    $('.lookbook-slider__three').slick({
        slidesToShow: 1,
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>'
    });

    $('.lookbook-slider__four').slick({
        slidesToShow: 1,
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>'
    });

    $('.lookbook-slider__five').slick({
        slidesToShow: 1,
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>'
    });

    $('.top-breeds__slider').slick({
        slidesToShow: 4,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 3,
                    arrows: false
                }
            }

        ]
    });

    $('.dates-slider').owlCarousel({
        items: 5,
        center: true,
        loop: true,
        nav: true,
        navText: [''],
        dots: false,
        margin: 0
    });

    // interactive maps
    $('.icon-location').click(function (e) {
        e.preventDefault();
        $('.icon-location').removeClass('click');
        $(this).addClass('click');

        $(this).closest('.section-contacts, .location-maps').find('.location-info').removeClass('active');

        var selectTab = $(this).attr("href");

        $(selectTab).addClass('active');
    });

    $('.location-info .btn-close').click(function () {
        $('.location-info').fadeOut();
    });

    $('[data-fancybox="images"]').fancybox();

    $('.selected-positions__title').click(function () {
        $(this).parents('.selected-positions').toggleClass('open').find('.selected-positions__dropdown').slideToggle();
    });

    $('.btn-burger').click(function () {
        $('.mobile-menu__wrapper').fadeToggle();
    });

    $('.btn-close-menu').click(function () {
        $('.mobile-menu__wrapper').fadeOut();
    });


});

