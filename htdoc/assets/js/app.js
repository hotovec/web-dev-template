$(function () {

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

    // mega menu

    var lastMegaTab = null;

    jQuery('[mega-open]').each(function () {
        var item = jQuery(this);
        var mega = jQuery("#mega");
        var tabName = item.attr("mega-open");
        var tab = jQuery(tabName);

        item.click(function (e) {
            e.preventDefault();

            if (lastMegaTab) {
                lastMegaTab.removeClass("is-active");
                jQuery('body').removeClass("scroll-lock");
            }

            mega.addClass("is-open");
            tab.addClass("is-active");
            jQuery('body').addClass("scroll-lock");
            lastMegaTab = tab;
        });

    });

    jQuery('[mega-close]').each(function () {
        var item = jQuery(this);
        var mega = jQuery("#mega");

        item.click(function (e) {
            e.preventDefault();
            if (lastMegaTab) {
                lastMegaTab.removeClass("is-active");
                jQuery('body').removeClass("scroll-lock");
            }
            mega.removeClass("is-open");
            lastMegaTab.removeClass("is-active");
            jQuery('body').removeClass("scroll-lock");
        });

    });

    // end mega menu

    // resize Navbar

    var navbarPrimary = jQuery('#navbarPrimary');
    var navbarSecondary = jQuery('#navbarSecondary');
    var scrollDriver = jQuery('body');

    var currentTop = function () {
        return scrollDriver.scrollTop();
    }

    jQuery(window).scroll(function () {
        if (currentTop() > 40) {
            if (!navbarPrimary.hasClass("is-collapsed")) {
                navbarPrimary.addClass("is-collapsed");
            }
            if (!navbarSecondary.hasClass("is-hidden")) {
                navbarSecondary.addClass("is-hidden");
            }
        } else {
            navbarPrimary.removeClass("is-collapsed");
            navbarSecondary.removeClass("is-hidden");
        }
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

var blogSlick = $('.full-carousel').slick({
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

// chosen filters - select boxes

$(".ch-select").chosen({
    width: "95%",
    create_option: true,
    persistent_create_option: true,
    create_option_text: 'add',
    disable_search_threshold: 40,
    //allow_single_deselect: true
});
