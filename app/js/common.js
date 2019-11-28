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
        nextArrow: '<button type="button" class="slick-next"></button>'
    });

    // interactive maps
    $('.icon-location').click(function (e) {
        e.preventDefault();

        $(this).closest('.section-contacts').find('.location-info').removeClass('active');

        var selectTab = $(this).attr("href");

        $(selectTab).addClass('active');
    });

    $('.location-info .btn-close').click(function () {
        $('.location-info').fadeOut();
    });

    $('[data-fancybox="images"]').fancybox();


});

