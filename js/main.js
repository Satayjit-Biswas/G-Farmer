(function ($) {
    "use strict";

    $(window).on('load', function () {
        //===== Prealoder
        $('.preloader').delay(500).fadeOut(500);

        //02. Isotope Initialize
        function isotopeInit() {
            $('.project_items').isotope({
                itemSelector: '.item',
                masonry: {
                    columnWidth: '.item'
                }
            });
            $('.project_filter_menu ul li').on('click', function () {
                $('.project_filter_menu ul li').removeClass('active');
                $(this).addClass('active');
                var selector = $(this).attr('data-filter');
                $('.project_items').isotope({
                    filter: selector
                });
                return false;
            });
        }
        isotopeInit();
    });

    $(document).ready(function () {
        //05. sticky header
        function sticky_header() {
            var wind = $(window);
            var sticky = $('header');
            wind.on('scroll', function () {
                var scroll = wind.scrollTop();
                if (scroll < 100) {
                    sticky.removeClass('sticky');
                } else {
                    sticky.addClass('sticky');
                }
            });
        }
        sticky_header();
        //===== Back to top

        // Show or hide the sticky footer button
        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 600) {
                $('.back-to-top').fadeIn(200)
            } else {
                $('.back-to-top').fadeOut(200)
            }
        });

        //Animate the scroll to yop
        $('.back-to-top').on('click', function (event) {
            event.preventDefault();

            $('html, body').animate({
                scrollTop: 0,
            }, 1500);
        });

        // Hamburger-menu
        $('.hamburger-menu').on('click', function () {
            $('.hamburger-menu .line-top, .ofcavas-menu').toggleClass('current');
            $('.hamburger-menu .line-center').toggleClass('current');
            $('.hamburger-menu .line-bottom').toggleClass('current');
        });


        //06. magnific Popup Initialize
        function magnificPopupInit() {
            $('.content a').magnificPopup({
                type: 'image',
                gallery: {
                    enabled: true
                }
            });
        }
        magnificPopupInit();

        //10. Client Slider Initialize
        function client_carouselInit() {
            $('.owl-carousel.client_carousel').owlCarousel({
                loop: true,
                animateOut: 'fadeOut',
                margin: 0,
                items: 1,
                autoplay: true,
                autoplayTimeout: 2500,
                autoplayHoverPause: false,
                nav: false,
                dots: false,
                responsive: false,
                // responsive: {
                //     0: {
                //         items: 1
                //     },
                //     390: {
                //         items: 2
                //     },
                //     575:{
                //         items: 3
                //     },
                //     768: {
                //         items: 4
                //     },
                //     992: {
                //         items: 5
                //     }
                // }
            });
        }
        client_carouselInit();

        //10. Client Slider Initialize
        function testimonial() {
            $('.owl-carousel.testimonial_carousel').owlCarousel({
                loop: true,
                margin: 0,
                items: 1,
                autoplay: true,
                autoplayTimeout: 5000, // Slows down the time between slides (5 seconds)
                autoplayHoverPause: true, // Pauses on hover for better control
                smartSpeed: 2000, // Slows the transition speed (1 second)
                nav: true,
                navText: ["<i class='fas fa-arrow-left'></i>", "<i class='fas fa-arrow-right'></i>"],
                dots: false,
                // responsive: {
                //     0: {
                //         items: 1
                //     },
                //     390: {
                //         items: 2
                //     },
                //     575:{
                //         items: 3
                //     },
                //     768: {
                //         items: 4
                //     },
                //     992: {
                //         items: 5
                //     }
                // }
            });
        }
        testimonial();

        //11. Video Popup Initialize
        function videoPopupInit() {
            $('#play-video').magnificPopup({
                type: 'iframe',
                iframe: {
                    patterns: {
                        youtube: {
                            index: 'youtube.com/',

                            id: 'v=',
                            src: 'https://www.youtube.com/embed/%id%?autoplay=1'
                        },
                    },

                    srcAction: 'iframe_src',
                }
            });
        }
        videoPopupInit();
    });

})(jQuery);

document.addEventListener("DOMContentLoaded", () => {
    const textElement = document.getElementById("text");
    const texts = ["Supply Chain", "Agriculture", "Financing"];
    let currentIndex = 0;

    function changeText() {
        // Step 1: Fade in
        textElement.style.opacity = "1";

        // Step 2: Wait while visible (hold at full opacity)
        setTimeout(() => {
            // Step 3: Fade out after holding
            textElement.style.opacity = "0";
        }, 3500); // Wait 3 seconds before starting fade out

        // Step 4: Change text after fading out is complete
        setTimeout(() => {
            currentIndex = (currentIndex + 1) % texts.length;
            textElement.textContent = texts[currentIndex];
        }, 8000); // Total of 6 seconds: 3s fade in + 3s fade out
    }

    // Start the first change and loop every 6 seconds
    changeText();
    setInterval(changeText, 8000); // Repeat every 6 seconds
});




