jQuery(function($) {
    if (typeof sp_offanimation === 'undefined' || sp_offanimation === '') {
        sp_offanimation = 'default';
    }
    if (sp_offanimation == 'default') {
        $('#offcanvas-toggler').on('click', function(event) {
            event.preventDefault();
            $('.off-canvas-menu-init').addClass('offcanvas');
        });
        $('<div class="offcanvas-overlay"></div>').insertBefore('.offcanvas-menu');
        $('.close-offcanvas, .offcanvas-overlay').on('click', function(event) {
            event.preventDefault();
            $('.off-canvas-menu-init').removeClass('offcanvas');
        });
    }
    if (sp_offanimation == 'slidetop') {
        $('#offcanvas-toggler').on('click', function(event) {
            event.preventDefault();
            $('.off-canvas-menu-init').addClass('slide-top-menu');
        });
        $('<div class="offcanvas-overlay"></div>').insertBefore('.offcanvas-menu');
        $('.close-offcanvas, .offcanvas-overlay').on('click', function(event) {
            event.preventDefault();
            $('.off-canvas-menu-init').removeClass('slide-top-menu');
        });
    }
    if (sp_offanimation == 'fullscreen') {
        $('#offcanvas-toggler').on('click', function(event) {
            event.preventDefault();
            $('.off-canvas-menu-init').addClass('full-screen-off-canvas');
        });
        $(document).ready(function() {
            $('.off-canvas-menu-init').addClass('full-screen');
        });
        $('.close-offcanvas, .offcanvas-overlay').on('click', function(event) {
            event.preventDefault();
            $('.off-canvas-menu-init').removeClass('full-screen-off-canvas');
        });
    }
    if (sp_offanimation == 'fullScreen-top') {
        $('#offcanvas-toggler').on('click', function(event) {
            event.preventDefault();
            $('.off-canvas-menu-init').addClass('full-screen-off-canvas-ftop');
        });
        $(document).ready(function() {
            $('.off-canvas-menu-init').addClass('full-screen-ftop');
        });
        $('.close-offcanvas, .offcanvas-overlay').on('click', function(event) {
            event.preventDefault();
            $('.off-canvas-menu-init').removeClass('full-screen-off-canvas-ftop');
        });
    }
    if (sp_offanimation == 'drarkplus') {
        $('#offcanvas-toggler').on('click', function(event) {
            event.preventDefault();
            $('.off-canvas-menu-init').addClass('new-look-off-canvas');
        });
        $('<div class="offcanvas-overlay"></div>').insertBefore('.offcanvas-menu');
        $(document).ready(function() {
            $('.off-canvas-menu-init').addClass('new-look');
        });
        $('.close-offcanvas,.offcanvas-overlay').on('click', function(event) {
            event.preventDefault();
            $('.off-canvas-menu-init').removeClass('new-look-off-canvas');
        });
    }
    if ($("body.sticky-header").length > 0) {
        var fixedSection = $('#sp-header');
        var headerHeight = fixedSection.outerHeight();
        var stickyNavTop = fixedSection.offset().top;
        fixedSection.addClass('animated');
        fixedSection.before('<div class="nav-placeholder"></div>');
        $('.nav-placeholder').height('inherit');
        fixedSection.addClass('menu-fixed-out');
        var stickyNav = function() {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > stickyNavTop) {
                fixedSection.removeClass('menu-fixed-out').addClass('menu-fixed');
                $('.nav-placeholder').height(headerHeight);
            } else {
                if (fixedSection.hasClass('menu-fixed')) {
                    fixedSection.removeClass('menu-fixed').addClass('menu-fixed-out');
                    $('.nav-placeholder').height('inherit');
                }
            }
        };
        stickyNav();
        $(window).scroll(function() {
            stickyNav();
        });
    }
    if (typeof sp_gotop === 'undefined') {
        sp_gotop = '';
    }
    if (sp_gotop) {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
                $('.scrollup').fadeIn();
            } else {
                $('.scrollup').fadeOut(400);
            }
        });
        $('.scrollup').click(function() {
            $("html, body").animate({
                scrollTop: 0
            }, 600);
            return false;
        });
    }
    if (typeof sp_preloader === 'undefined') {
        sp_preloader = '';
    }
    if (sp_preloader) {
        $(window).on('load', function() {
            if ($('.sp-loader-with-logo').length > 0) {
                move();
            }
            setTimeout(function() {
                $('.sp-pre-loader').fadeOut();
            }, 1000);
        });
    }

    function move() {
        var elem = document.getElementById("line-load");
        var width = 1;
        var id = setInterval(frame, 10);

        function frame() {
            if (width >= 100) {
                clearInterval(id);
            } else {
                width++;
                elem.style.width = width + '%';
            }
        }
    }
    $('.sp-megamenu-wrapper').parent().parent().css('position', 'static').parent().css('position', 'relative');
    $('.sp-menu-full').each(function() {
        $(this).parent().addClass('menu-justify');
    });
    if ($("body.layout-boxed").length > 0) {
        var windowWidth = $('#sp-header').parent().outerWidth();
        $("#sp-header").css({
            "max-width": windowWidth,
            "left": "auto"
        });
    }
    $('[data-toggle="tooltip"]').tooltip();
    $(document).on('click', '.sp-rating .star', function(event) {
        event.preventDefault();
        var data = {
            'action': 'voting',
            'user_rating': $(this).data('number'),
            'id': $(this).closest('.post_rating').attr('id')
        };
        var request = {
            'option': 'com_ajax',
            'plugin': 'helix3',
            'data': data,
            'format': 'json'
        };
        $.ajax({
            type: 'POST',
            data: request,
            beforeSend: function() {
                $('.post_rating .ajax-loader').show();
            },
            success: function(response) {
                var data = $.parseJSON(response.data);
                $('.post_rating .ajax-loader').hide();
                if (data.status == 'invalid') {
                    $('.post_rating .voting-result').text('You have already rated this entry!').fadeIn('fast');
                } else if (data.status == 'false') {
                    $('.post_rating .voting-result').text('Somethings wrong here, try again!').fadeIn('fast');
                } else if (data.status == 'true') {
                    var rate = data.action;
                    $('.voting-symbol').find('.star').each(function(i) {
                        if (i < rate) {
                            $(".star").eq(-(i + 1)).addClass('active');
                        }
                    });
                    $('.post_rating .voting-result').text('Thank You!').fadeIn('fast');
                }
            },
            error: function() {
                $('.post_rating .ajax-loader').hide();
                $('.post_rating .voting-result').text('Failed to rate, try again!').fadeIn('fast');
            }
        });
    });
});
$('.s-1-content-left-news-item').hover(function() {
    $(this).css('transform', 'scale(1.1)').css("transition", ".5s");
}, function() {
    $(this).css('transform', 'scale(1.0)').css("transition", ".5s");
});
$('.slick-item').slick();
$('.slick-item-previous').slick();
$('.single-item').slick();


$(".item-7").on("click", function() {
    $(this).toggleClass("collapsed");
    $("#collapse-menu-115").toggleClass("menu_none");

});
    $(".item-1").on("click", function() {
    $(this).toggleClass("collapsed");
    $("#collapse-menu-105").toggleClass("menu_none");

});
$(".item-2").on("click", function() {
    $(this).toggleClass("collapsed");
    $("#collapse-menu-106").toggleClass("menu_none");

});
$(".item-3").on("click", function() {
    $(this).toggleClass("collapsed");
    $("#collapse-menu-107").toggleClass("menu_none");

});
$(".item-4").on("click", function() {
    $(this).toggleClass("collapsed");
    $("#collapse-menu-108").toggleClass("menu_none");

});
$(".item-5").on("click", function() {
    $(this).toggleClass("collapsed");
    $("#collapse-menu-109").toggleClass("menu_none");

});
$(".item-6").on("click", function() {
    $(this).toggleClass("collapsed");
    $("#collapse-menu-110").toggleClass("menu_none");

});


$('#n1').hover(function() {
    $(this).find("img").css('width', '60%').css("transition", ".4s");
}, function() {
    $(this).find("img").css('width', '50%').css("transition", ".4s");
});

$('#n2').hover(function() {
    $(this).find("img").css('width', '60%').css("transition", ".4s");
}, function() {
    $(this).find("img").css('width', '50%').css("transition", ".4s");
});

$('#n3').hover(function() {
    $(this).find("img").css('width', '60%').css("transition", ".4s");
}, function() {
    $(this).find("img").css('width', '50%').css("transition", ".4s");
});