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
$(document).ready(function () {
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    });
});

$(".gallery-more").click(function () {
    if ($(".gallery-more").text()==="Показать все") {
        for (i = 0; i < document.getElementsByClassName("section-grid-wrap__item").length; i++) {
            document.getElementsByClassName("section-grid-wrap__item")[i].style.display = "flex";
        }
        $(".gallery-more").text("Скрыть")
    }
    else{
        for (i = 0; i < document.getElementsByClassName("section-grid-wrap__item").length; i++) {
            if(i>8){
                document.getElementsByClassName("section-grid-wrap__item")[i].style.display = "none";
            }
            $(".gallery-more").text("Показать все")
        }
    }
})
$(window).scroll(function () {
    if ($(window).scrollTop() >= 100) {
        $(".toTop").fadeIn();   
    } else {
        $('.toTop').fadeOut();
    }
});
$('.toTop').click(function() {
    $('body,html').animate({scrollTop:0},800);
});

let arr = document.getElementsByClassName("menu__item")
for(let i = 0; i<arr.length; i++){
    arr[i].addEventListener("click", ()=>{
        document.querySelector(".menu__box").classList.toggle("menu__box_active")
        arrLine[0].classList.toggle("d-none")
        arrLine[1].classList.toggle("menu-btn__line_45deg")
        arrLine[2].classList.toggle("menu-btn__line_90deg") 
    })
}
let arrLine = document.getElementsByClassName("menu-btn__line")
document.getElementById("menu__toggle").addEventListener("click", ()=>{
        document.querySelector(".menu__box").classList.toggle("menu__box_active")
        arrLine[0].classList.toggle("d-none")
        arrLine[1].classList.toggle("menu-btn__line_45deg")
        arrLine[2].classList.toggle("menu-btn__line_90deg")
})