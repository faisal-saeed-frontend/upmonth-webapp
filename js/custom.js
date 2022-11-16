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
            freeMode: false,
            watchSlidesProgress: true,
            breakpoints: {
              640: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 5,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
              1920: {
                slidesPerView: 6,
                spaceBetween: 10,
              },
            },
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
            loop:false,
            mousewheel: true,
            centeredSlides: true,

            breakpoints: {
              640: {
                slidesPerView: 1,
                spaceBetween: 10,
                centeredSlides: false,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 5,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
            },

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
            slidesPerView: 1,
            mousewheel: true,
            centeredSlides: false,
            pagination: {
                el: ".pagination-c",
                type: "progressbar",
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });

        /*pricing sliding elements */
        var swiper = new Swiper(".pricing-sliding-elements", {
          spaceBetween: 30,
          slidesPerView: 1,
          mousewheel: false,
          centeredSlides: false,
          pagination: {
              el: ".pagination-d",
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
                $("header").addClass("header-primary-scroll");
            } else {
                $("header").removeClass("header-primary-scroll");
            }
        });



    });
});