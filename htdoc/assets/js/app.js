$(function () {


    function digestCard() {
        console.log("card diggest");
        $('[keep-height]').each(function () {
            var root = $(this);

            var maxHeight = -1;
            root.children('div').each(function () {
                $(this).children('article').removeClass("mm-auto");
                var h = $(this).children('article').height();
                maxHeight = Math.max(maxHeight, h);
            });
            // update height
            root.children('div').each(function () {
                $(this).css("height", maxHeight);
                $(this).children('article').addClass("mm-auto");
            });
        });
    }

    $(window).setBreakpoints({
        // use only largest available vs use all available
        distinct: true,

        // array of widths in pixels where breakpoints should be triggered
        breakpoints: [0, 640, 960, 1330, 1600]
    });

    $(window).bind('enterBreakpoint640', function () {
        diggest(640);
    });

    $(window).bind('enterBreakpoint960', function () {
        diggest(960);
    });

    /*$(window).bind('exitBreakpoint768',function() {
     ...
     });*/

    $(window).bind('enterBreakpoint1330', function () {
        diggest(1330);
    });

    $(window).bind('enterBreakpoint1600', function () {
        diggest(1600);
    });

    /*$(window).bind('exitBreakpoint1024',function() {
     ...
     });*/


    function diggest(bpw) {
        console.log("Digest: " + bpw);
        digestCard();
    }

    //
    $('[slick]').each(function () {
        var SlickWrapper = $(this);
        var carousel = SlickWrapper.find('[carousel]');
        var oldActive = null;

        var nav = SlickWrapper.find('[carouselnav]');

        if (carousel) {
            carousel.slick({
                dots: false,
                infinite: true,
                //fade: true,
                //cssEase: 'linear',
                draggable: false,
                speed: 300,
                slidesToShow: 1,
                adaptiveHeight: true
            })
        }

        if (nav) {
            console.log("nav");
            var count = 0;
            var items = nav.find('[slick-to]');
            for (var i = 0; i < items.length; i++) {
                var item = $(items[i]);

                if (nav.attr("slick-method") == "mouseenter") {
                    item.mouseenter(function (e) {

                        if (oldActive) {
                            oldActive.removeClass("active");
                        }

                        e.preventDefault();
                        carousel.slick('slickGoTo', $(this).attr('slick-to'));
                        $(this).addClass("active");
                        oldActive = $(this);
                    });
                } else {
                    item.click(function (e) {

                        if (oldActive) {
                            oldActive.removeClass("active");
                        }

                        e.preventDefault();
                        carousel.slick('slickGoTo', $(this).attr('slick-to'));
                        $(this).addClass("active");
                        oldActive = $(this);
                    });
                }


            }
        }

    });


    // sticky navbar

    var stickyBorder = 500;
    var navbar = $('.l-sticky');
    var scrollDriver = $(window);
    var lastScrollTop = 0;

    var currentTop = function () {
        return scrollDriver.scrollTop();
    }
    navbar.addClass("is-hidden");

    $(window).scroll(function (event) {

        var st = $(this).scrollTop();
        if (st > lastScrollTop) {
            //console.log("down");

            if (currentTop() > stickyBorder) {
                if (!navbar.hasClass("is-hidden")) {
                    navbar.addClass("is-hidden");
                }
            }

        } else {
            //console.log("up");
            if (currentTop() > stickyBorder) {
                if (navbar.hasClass("is-hidden")) {
                    navbar.removeClass("is-hidden");
                }
            } else {
                navbar.addClass("is-hidden");
            }

        }
        lastScrollTop = st;

    });

});


// block feed JS

var blogSlick = $('.block-feed-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 2,
    adaptiveHeight: true,
    responsive: [
        {
            breakpoint: 960,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

// full size carousel

var blogSlick = $('[slick-full]').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true
});


// script


$('[collapsible]').each(function () {
    var el = $(this);

    if (el.data('target') == "parent") {
        el.click(function () {
            el.parent().toggleClass("is-open");
        });
    } else if (el.data('target')) {
        el.click(function () {
            var tgt = $(el.data('target'));
            tgt.toggleClass("is-open");
        });
    } else {
        el.click(function () {
            el.toggleClass("is-open");
        });
    }

});

$('[close-section]').each(function () {
    var el = $(this);
    el.click(function () {
        el.parent().css("display", "none");
    });
});

// chosen filters - select boxes

$(".ch-select").chosen({
    width: "95%",
    create_option: true,
    persistent_create_option: true,
    create_option_text: 'add',
    disable_search_threshold: 40,
    //allow_single_deselect: true
});


