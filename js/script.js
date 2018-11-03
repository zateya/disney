(function () {
    $('.discover__items').slick({
        infinite: false,
        slidesToShow: 7,
        slidesToScroll: 7,
        speed: 1000,
        responsive: [
            {
                breakpoint: 1800,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 6
                }
            },
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5
                }
            }
         ]
    });
})();