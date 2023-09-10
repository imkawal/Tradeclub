// test.js

// Wrap your code in a self-invoking function to use $ as an alias for jQuery
(function ($) {
    // Wait for the document to be ready
    $(document).ready(function () {
        var mydir = document.documentElement.getAttribute("dir");

        var rtlVal = mydir === 'rtl';

        var tb_manufacture = document.querySelector('#tb-manufacture .swiper-wrapper');

        if (tb_manufacture) {
            $(tb_manufacture).owlCarousel({
                items: 5, // 1 item above 1000px browser width
                nav: true,
                dots: false,
                loop: false,
                center: false,
                autoplayHoverPause: true,
                autoplay: true,
                rtl: rtlVal,
                responsive: {
                    0: {
                        items: 2
                    },
                    481: {
                        items: 3
                    },
                    992: {
                        items: 3
                    },
                    1200: {
                        items: 5
                    }
                }
            });
        }
    });
})(jQuery);
