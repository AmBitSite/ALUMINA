var slideNow = 1;
var slideCount = $('#slidewrapper').children().length;
var slideInterval = 3000;
var navBtnId = 0;
var translateWidth = 0;
var indication = document.querySelector(".header-slider-control-number-block")

$(document).ready(function () {
    var switchInterval = setInterval(nextSlide, slideInterval);

    $('#viewport').hover(function () {
        clearInterval(switchInterval);
    }, function () {
        switchInterval = setInterval(nextSlide, slideInterval);
    });

    $('#next-btn').click(function () {
        nextSlide();
    });

    $('#prev-btn').click(function () {
        prevSlide();
    });

    $('.slide-nav-btn').click(function () {
        navBtnId = $(this).index();
        if (navBtnId + 1 != slideNow) {
            translateWidth = -$('#viewport').width() * (navBtnId);
            $('#slidewrapper').css({
                'transform': 'translate(' + translateWidth + 'px, 0)',
                '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
            });
            slideNow = navBtnId + 1;
            if (document.querySelector(".header-slider-control-number-block__item_active")) {
                document.querySelector(".header-slider-control-number-block__item_active").classList.remove("header-slider-control-number-block__item_active")
                indication.children[slideNow - 1].classList.add("header-slider-control-number-block__item_active")
            }
        }
    });
});


function nextSlide() {
    if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
        $('#slidewrapper').css('transform', 'translate(0, 0)');
        slideNow = 1;

    } else {
        translateWidth = -$('#viewport').width() * (slideNow);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow++;
    }
    if (document.querySelector(".header-slider-control-number-block__item_active")) {
        document.querySelector(".header-slider-control-number-block__item_active").classList.remove("header-slider-control-number-block__item_active")
        indication.children[slideNow - 1].classList.add("header-slider-control-number-block__item_active")
    }
}

function prevSlide() {
    if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
        translateWidth = -$('#viewport').width() * (slideCount - 1);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow = slideCount;
    } else {
        translateWidth = -$('#viewport').width() * (slideNow - 2);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow--;
        if (document.querySelector(".header-slider-control-number-block__item_active")) {
            document.querySelector(".header-slider-control-number-block__item_active").classList.remove("header-slider-control-number-block__item_active")
            indication.children[slideNow - 1].classList.add("header-slider-control-number-block__item_active")
        }
    }
}
var $page = $('html, body');
$('a[href*="#"]').click(function () {
    if (this !== document.querySelector(".right") && this !== document.querySelector(".left")) {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 400);
        return false;
    }
});
jQuery(document).ready(function ($) {
    $('.popup-content').magnificPopup({
        type: 'inline'
    });
});
$('.image-popup-zoom').magnificPopup({
    type: 'image',
    zoom: {
        enabled: true,
        duration: 300 // продолжительность анимации. Не меняйте данный параметр также и в CSS
    }
});