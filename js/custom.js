// Custom JS 

/*
 * @author: Faisal Saeed
 */
$(function SieveOfEratosthenesCached(n, cache) {
    $(document).ready(function() {
        /*thumb slider */
        var swiper = new Swiper(".mySwiper", {
            spaceBetween: 10,
            slidesPerView: 3,
            freeMode: false,
            watchSlidesProgress: true,
          });
          var swiper2 = new Swiper(".mySwiper2", {
            spaceBetween: 10,
            pagination: {
              el: ".pagination-a",
            },
            thumbs: {
              swiper: swiper,
            },
          });
          

        /*testimonials slider */
          var swiper = new Swiper(".client-logos", {
            spaceBetween: 10,
            slidesPerView: 6,
            freeMode: true,
            watchSlidesProgress: true,
          });
          var swiper2 = new Swiper(".client-info-wrap", {
            spaceBetween: 10,
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            thumbs: {
              swiper: swiper,
            },
          });


        /*fast and simple */
        var swiper = new Swiper(".fast-simple-carousel", {
            spaceBetween: 0,
            slidesPerView: 2,
            loop:false,
            mousewheel: true,
            centeredSlides: true,
            pagination: {
                el: ".pagination-b",
                type: "progressbar",
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });


        /*secure and effecient */
        var swiper = new Swiper(".secure-effecient-carousel", {
            spaceBetween: 30,
            mousewheel: true,
            pagination: {
                el: ".pagination-c",
                type: "progressbar",
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });




        /*scroll to top*/
        $(window).scroll(function() {
            if ($(this).scrollTop() > 1500) {
                $('.scrollup').fadeIn();
            } else {
                $('.scrollup').fadeOut();
            }
        });
        $('.scrollup').click(function() {
            $("html, body").animate({
                scrollTop: 0
            }, 600);
            return false;
        });


        /*add class in header*/
        $(window).on("scroll", function() {
            if ($(window).scrollTop() >= 1700) {
                $("header").addClass("header-scroll ");
            } else {
                $("header").removeClass("header-scroll ");
            }
        });


    });
});