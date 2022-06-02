/*
 *
 * ABOUT MAIN SLIDER
 *
 * */

var owl = $('#home4Slide');
owl.owlCarousel({
    loop: true,
    nav: true,
    margin: 0,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        960: {
            items: 1
        },
        1200: {
            items: 1
        }
    }
});

owl.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY > 0) {
        owl.trigger('next.owl');
    } else {
        owl.trigger('prev.owl');
    }
    e.preventDefault();
});


/*
 *
 * ABOUT MAIN SLIDER
 *
 * */

function aboutSlider() {
    var am = $("#aboutMain");
    am.owlCarousel({
        dots: true,
        items: 1,
        smartSpeed: 3000,
        thumbs: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        thumbsPrerendered: true
    });

    am.owlCarousel();
    am.on('changed.owl.carousel', function (event) {
        // console.log('test');
    });
    $('.ab-next').on('click mouseenter', function () {
        am.trigger('next.owl.carousel');
        $('.owl-dot').find('span').css({'left': 'calc(100% - 10px)'})
    });
    $('.ab-prev').on('click mouseenter', function () {
        $('.owl-dot').find('span').css({'left': '0'})
        am.trigger('prev.owl.carousel');
    });
}
aboutSlider();


/*
 *
 *   HOME PAGE2 ANIMATION
 *
 * */
function home2Animation() {
    var home2Items = $('.home2 .col-1, .home2 .col-2');
    $(window).on('load resize scroll', function () {
        /* THERE WE WAS USE JQUERY VISIBLE FUNCTION*/
        $(home2Items).each(function () {
            var visible = $(this).visible(home2Items);

            // Set the visible status into the span.
            $(this).toggleClass('visible', visible);

            /* RIGHT ELEMENTS SELECT */
            var topCheck = $(this).position();
            var positionLeft = Math.floor(topCheck.left)
            var RightElementWidth = $(this).width();
            var windowWidth = $('.home2').width();
            var ResetWidth = windowWidth - positionLeft;

            /* BOTTOM ELEMENTS SELECT */
            var positionBottom = Math.floor(topCheck.top)
            var ElementHeight = $(this).height();
            var windowHeight = $('#aboutM').height();
            var ResetHeight = windowHeight - positionBottom;

            if (topCheck.top < $(this).height()) {
                $(this).addClass('originTop')
            } else if (topCheck.left < 90) {
                $(this).addClass('originLeft')
            } else if (ResetHeight < ElementHeight) {
                $(this).addClass('originBottom')
            } else if (ResetWidth === RightElementWidth) {
                $(this).addClass('originRight')
            }
        });


        /* RANDOM FUNCTION */
        var visibleC = $('.visible');
        setInterval(function () {
            if ($(home2Items).hasClass('active')) {
                $(home2Items).removeClass('active')
            } else {
                var min = 1;
                var max = visibleC.length;
                // console.log(max);
                var random = Math.random() * (+max - +min) + +min;
                var value = Math.trunc(random);
                $(visibleC).eq(value).addClass('active')
            }

        }, 1000)
    })
}
home2Animation();

/*
 *
 * M.CUSTOM SCROLL
 *
 * */
function Rotation(e, b) {
    $(e).mCustomScrollbar({
        scrollEasing: "easeOut",
        axis: b,
        theme: "dark-thin",
        autoExpandScrollbar: true,
        advanced: {autoExpandHorizontalScroll: true},
        callbacks: {
            moveDragger: true,
            whileScrolling: function () {
                var sItems = $('.skill, .milestone-counter');
                var counter = 0;
                $(sItems).each(function () {
                    // Is this element visible onscreen?
                    var visible = $(this).visible(sItems);
                    // Set the visible status into the span.
                    var pNumber = $(this).find('.stat-count').text();

                    $(this).toggleClass('visible', visible);


                });


                home2Animation();
                if ('#content-5' == e) {
                    $('.singlePost').removeClass('active')
                }
                $(".cScrollBar").css('width', this.mcs.leftPct + '%');
                $(".hScrollBar").css('height', this.mcs.topPct + '%');
                var contentArea = $('.contentArea');
                if (contentArea.length > 0) {
                    contentArea.css('backgroundPosition', 0 + 'px' + ' ' + ($('.aboutContentContainer').offset().top / 40) + 'px');

                    if (window.pageYOffset < 80) {
                        contentArea.addClass('active')
                    }
                    if ($('.aboutContentContainer').offset().top > 80) {

                        contentArea.removeClass('active')
                    }
                }
            },
        }
    });
}

/*
 *
 * CUSTOM SCROLL RESIZE LOAD ENEVT CALL
 *
 * */
$(window).on('resize load', function () {
    if ($(window).width() > 768) {
        Rotation("#content-5", 'x')
        Rotation(".miniCart", 'y')
        Rotation(".slideCol", 'y')
        Rotation("#aboutM", 'y')
        Rotation(".singlePostContainer", 'y')
    } else {
        Rotation("#content-5", 'x')
        Rotation(".slideCol", 'y')
        Rotation(".miniCart", 'y')
        Rotation("#aboutM", 'y')
        Rotation(".singlePostContainer", 'y')
    }
});
/*
 *
 * DYNAMIC HEIGHT GET AND PUT IN ELEMTNS
 *
 * */
$(window).resize(function () {
    var containerHeight = $(window).height() - 130;
    var FeaturItems = $('.featured-items');
    if($('.home1').length > 0){
        $(FeaturItems).css('height', containerHeight + 'px')
    }

    $('#mCSB_1_container').css('height', containerHeight + 'px')
    $('.portfolio_area').css('height', containerHeight + 'px')
    if($(window).width() < 892){
        Rotation(".navbar-nav", 'y');
        $('.navbar-nav').css({'display': 'block','height': containerHeight + 'px'})
    }else{
    }
}).resize();

$(window).on('load resize',function () {

    $('#navbar-menu').toggleClass('MenuHeight');
    setTimeout(function () {

        if($('#navbar-menu').hasClass('MenuHeight')){

        }

    },500)
})
var containerHeight = $('.container-section').height();
$('.closeBoxArea, .loadBoxArea, #aboutMain').css('height', containerHeight + 'px');
$('.closeBoxArea,.loadBoxArea').css('width', containerHeight + 'px');
$('.portfolio_area').css('height', (containerHeight - 160) + 'px');
$(document).on("click mousemove", "body", function (e) {
    CursorFunction(e);
});


/*
 *
 * MENU HOVER ANIMATION
 *
 * */
var cCursor = $('.circle-cursor'); // CIRCLE CURSOR SELECTOR
var mouseAnimation;
var menuItems = $('#navbar-menu ul li a');
$(menuItems).on('mouseenter', function () {
    var menuTxt = $(this).text().charAt(0);
    $(cCursor).text(menuTxt);
    $(cCursor).css({'width': '40px', 'height': '40px'});
    var strr = $(this).text();
    var str = strr.replace(/\s/g, '');
    var current = 0;
    mouseAnimation = setInterval(function () {
        if (current <= str.length) {
            var txt = str.charAt(current);
            $(cCursor).html(txt);
        } else {
            $(cCursor).html(str.charAt(0));
        }
        current++;
    }, 100)
});


$('#closeArea').on('mouseenter mousemove', function () {
    $(cCursor).html('<i class="fas fa-times"></i>');
    $(cCursor).css({'width': '80px', 'height': '80px'});
});

$('#closeArea').on('mouseout', function () {
    $(cCursor).html('');
    $(cCursor).css({'width': '20px', 'height': '20px'});
});

$(menuItems).on('mouseout', function () {
    clearInterval(mouseAnimation);
    $(cCursor).html('');
    $(cCursor).css({'width': '20px', 'height': '20px'});
})

function menuHover(selector, menuIcon) {
    $(selector).on('mouseenter mousemove', function () {
        $(cCursor).html(menuIcon);
        $(cCursor).css({'width': '80px', 'height': '80px'});
    });

}
function menuOut(selector, menuIcon) {
    $(selector).on('mouseout', function () {
        $(cCursor).html(menuIcon);
        $(cCursor).css({'width': '20px', 'height': '20px'});
    });
}

menuHover('.owl-item', '<i class="ion-arrow-swap"></i>');
menuHover('.ab-prev', '<i class="ion-ios-arrow-back"></i>');
menuHover('.home1', '<i class="ion-arrow-swap"></i>');
menuHover('.ab-next', '<i class="ion-ios-arrow-forward"></i>');
menuOut('.home1, .owl-item, .ab-prev, .ab-next', '')
/*
 *
 * BUTTON AND CONTAINER SELECTOR
 *
 * */
var searchBTN = $('li.search a'), cartBTN = $('.cartBtn'), sideBTN = $('.cartBtn a'), socialBTN = $('.socialBTn'),
    shareBTN = $('.shareBTN'),
    featuredBTN = $(''), closeBTN = $('#closeArea, .close-search'), sCloseBTN = $('.close-search');
var searchArea = $('.top-search'), socialBox = $('.socialBox '), shareBox = $('.shareBox'),
    singlePost = $('.singlePost'), miniCart = $('.mini-cart-con'), sideInfo = $('.sideInfo');
var activeBox = $('.top-search, .socialBox, .shareBox, .singlePost, .mini-cart-con, .sideInfo');
var aBTN = $('.searchBTN, .cartBtn, .cartBtn a, .socialBTn, .shareBTN, #closeArea, .sideinfoBTN');


/*
 *
 * SEARCH, CART, INFOBAR, SOCIAL, ANIMATION FUNCTION
 *
 * */
var tA = new TimelineMax();
function topBottomAnimation(selector, derection, position) {
    if (derection === 'top') {
        tA
            .to(
                selector, 1.5, {
                    top: '100%',
                    ease: Bounce.easeOut
                },
                '-=1.5'
            )
    } else if (derection === 'bottom') {
        tA
            .to(
                selector, 1.5, {
                    bottom: '50px',
                    ease: Bounce.easeOut
                },
                '-=1.5'
            )
    } else if (derection === 'left') {
        tA
            .to(
                selector, 1.5, {
                    right: position,
                    bottom: '50px',
                    ease: Bounce.easeOut
                },
                '-=1.5'
            )
    } else if (derection === 'right') {
        tA
            .to(
                selector, 1.5, {
                    right: position,
                    bottom: '50px',
                    ease: Bounce.easeOut
                },
                '-=1.5'
            )
    }

}
// ANIMATION RESET
function topBottomAnimationReset(rselector, derection, position) {
    if (derection === 'top') {
        tA
            .add('side')
            .to(
                rselector, 1.5, {
                    bottom: '-100%',
                    ease: Bounce.easeOut
                }, 'side'
            )
            .to('.rSide', 1.5, {
                    bottom: '50',
                    right: '-300px',
                    ease: Bounce.easeOut
                }, 'side'
            )
    } else if (derection === 'bottom') {
        tA
            .add('side')
            .to(
                rselector, 1.5, {
                    bottom: '-100%',
                    ease: Bounce.easeOut
                }, 'side'
            )
            .to('.rSide', 1.5, {
                    bottom: '50',
                    right: '-300px',
                    ease: Bounce.easeOut
                }, 'side'
            )
            .to('.tbar', 1.5, {
                    top: '-100%',
                    ease: Bounce.easeOut
                }, 'side'
            )
    } else if (derection === 'left') {

    } else if (derection === 'right') {
        tA
            .add('bbar')
            .to(
                rselector, 1.5, {
                    right: '-300px',
                    ease: Bounce.easeOut
                }, 'bbar'
            )
            .to('.bbar', 1.5, {
                    bottom: '-100%',
                    ease: Bounce.easeOut
                }, 'bbar'
            )
            .to('.tbar', 1.5, {
                    top: '-100%',
                    ease: Bounce.easeOut
                }, 'bbar'
            )
    }

}

/*
 *
 * SEARCH, CART, INFOBAR, SOCIAL,
 * CLICK FUNCTION
 *
 * */
function clickFuntion(btn, container) {
    $(btn).on('click', function (e) {
        e.preventDefault();
        if ($(this).hasClass('socialBTn')) {
            $(container).removeClass('active');
            $(closeBTN).addClass('active');
            $(socialBox).toggleClass('active');
            topBottomAnimationReset(container, 'bottom', '-100%')
            if ($(socialBox).hasClass('active')) {
                topBottomAnimation(socialBox, 'bottom', '50');
            }

        } else if ($(this).hasClass('shareBTN')) {
            $(container).removeClass('active');
            $(closeBTN).addClass('active');
            $(shareBox).toggleClass('active');
            topBottomAnimationReset(container, 'bottom', '-100%')
            if ($(shareBox).hasClass('active')) {
                topBottomAnimation(shareBox, 'bottom', '50');
            }
        } else if ($(this).hasClass('searchBTN')) {
            $(container).removeClass('active');
            $(closeBTN).addClass('active');
            $(searchArea).toggleClass('active');
            topBottomAnimationReset(container, 'top', '100%')
            if ($(searchArea).hasClass('active')) {
                topBottomAnimation(searchArea, 'top', '50');
            }
            // console.log('Hi');
        } else if ($(this).hasClass('singlePostBTN')) {
            $(container).removeClass('active');
            $(closeBTN).addClass('active');
            $(singlePost).toggleClass('active');
            topBottomAnimationReset(container, 'bottom', '-100%')
            if ($(singlePost).hasClass('active')) {
                topBottomAnimation(singlePost, 'bottom', '50');

            }
        } else if ($(this).hasClass('cartBtn')) {
            $(container).removeClass('active');
            $(closeBTN).addClass('active');
            $(miniCart).toggleClass('active');
            topBottomAnimationReset(container, 'right', '-300px')
            if ($(miniCart).hasClass('active')) {
                topBottomAnimation(miniCart, 'right', '0');
            }
        } else if ($(this).hasClass('sideinfoBTN')) {
            $(container).removeClass('active');
            $(closeBTN).addClass('active');
            $(sideInfo).toggleClass('active');
            topBottomAnimationReset(container, 'right', '-300px')
            if ($(sideInfo).hasClass('active')) {
                topBottomAnimation(sideInfo, 'right', '0');
            }
        } else {

        }
    })
}

clickFuntion(aBTN, activeBox);
var closeB = closeBTN + sCloseBTN;
$(closeBTN).on('click', function () {
    $(this).removeClass('active')
    $(closeBTN).removeClass('active')
    $(activeBox).removeClass('active')
    if (!$(socialBox).hasClass('active')) {
        topBottomAnimationReset(activeBox);
        activeBox.attr("style", "");
    }
})

/*
 *
 * CURSOR ANIMATION
 *
 * */
function CursorFunction(e) {
    var x = e.clientX;
    var y = e.clientY;
    var newposX = x - -10;
    var newposY = y - 0;
    $(cCursor).css({"transform": "translate3d(" + newposX + "px," + newposY + "px,0px)", "opacity": "1"});
}


/*
 *
 * ABOUT CLIENT SECTION
 *
 * */
var clCar0 = '.client-carousel';
$(clCar0).owlCarousel({
    loop: true,
    center: true,
    margin: 30,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 4
        }
    }

})
var owl = $(clCar0);
owl.owlCarousel();
$('.owl-next').click(function () {
    owl.trigger('next.owl.carousel');
});
$('.owl-prev').click(function () {
    owl.trigger('prev.owl.carousel');
});

/*
 *
 * PORTFOLIO FUNCTION
 *
 * */
function portFolioFun() {
    var protfolioItem = $('.pItem');
    var portNumber = protfolioItem.length;
    var portAreaW = $('.portfolio_area').width();
    var perItemWidth = portAreaW / portNumber;
    $(protfolioItem).css('width', Math.floor(perItemWidth))
    var pAreaWH = $('.portfolio_area').width() - 300;
    var perItemWidthHover = pAreaWH / (portNumber - 1);


    $(protfolioItem).on('load click mouseenter', function () {
        $(protfolioItem).css('width', Math.floor(perItemWidthHover));
        $(this).css('width', '300px');
        var imgs = $(this).find('img').attr('src');
        var Phead = $(this).find('h3').text();
        $(".contentArea").css("background-image", "url(" + imgs + ")");
        var pHeadArry = Phead.split("");
        var current = 0;

        $("#dHeading").html('');
        setInterval(function () {

            if (current <= pHeadArry.length) {
                var tt = [];
                // var ttt = [];
                var txt = pHeadArry[current];
                tt.push(txt)
                $("#dHeading").text(tt)
                setTimeout(function () {
                    $("#dHeading").text(Phead)
                }, 500)
                // console.log(tt)
            } else {
            }
            current++;

        }, 0)


    })

    $(protfolioItem).on('mouseout', function () {
        $('.pItem').removeClass('active');
        // $("#dHeading").html('')
    })
}

$(window).on('resize load', function () {
    portFolioFun();
})
/*
 *
 * ISOTOPE IN BLOG PAGE
 *
 * */


function filter() {
    var $grid = $('.grid').isotope({
        itemSelector: '.bItems'
    });
    var filters = {};
    $('.filters').on('click', '.button', function (event) {
        var $button = $(event.currentTarget);
        // get group key
        var $buttonGroup = $button.parents('.button-group');
        var filterGroup = $buttonGroup.attr('data-filter-group');
        // set filter for group
        filters[filterGroup] = $button.attr('data-filter');
        // combine filters
        var filterValue = concatValues(filters);
        // set filter for Isotope
        $grid.isotope({filter: filterValue});
    });

    // change is-checked class on buttons
    $('.button-group').each(function (i, buttonGroup) {
        var $buttonGroup = $(buttonGroup);
        $buttonGroup.on('click', 'button', function (event) {
            $buttonGroup.find('.is-checked').removeClass('is-checked');
            var $button = $(event.currentTarget);
            $button.addClass('is-checked');
        });
    });

    // flatten object by concatting values
    function concatValues(obj) {
        var value = '';
        for (var prop in obj) {
            value += obj[prop];
        }
        return value;
    }

}
//CHECK THE GRID
if ($('.grid').length > 0) {
    filter();
}

/*
 *
 * GOOGLE MAP SCRIPT
 *
 * */
if ($('#map').length > 0) {
    google.maps.event.addDomListener(window, 'load', init);
    function init() {
        // Basic options for a simple Google Map
        // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
        var mapOptions = {
            // How zoomed in you want the map to start at (always required)
            zoom: 11,
            scrollwheel: false,
            navigationControl: false,
            mapTypeControl: false,
            scaleControl: false,
            draggable: true,

            // The latitude and longitude to center the map (always required)
            center: new google.maps.LatLng(40.6700, -73.9400), // New York

            // How you would like to style the map.
            // This is where you would paste any style found on Snazzy Maps.
            styles: [{
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [{"color": "#193341"}]
            }, {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [{"color": "#2c5a71"}]
            }, {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [{"color": "#29768a"}, {"lightness": -37}]
            }, {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [{"color": "#406d80"}]
            }, {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [{"color": "#406d80"}]
            }, {
                "elementType": "labels.text.stroke",
                "stylers": [{"visibility": "on"}, {"color": "#3e606f"}, {"weight": 2}, {"gamma": 0.84}]
            }, {"elementType": "labels.text.fill", "stylers": [{"color": "#ffffff"}]}, {
                "featureType": "administrative",
                "elementType": "geometry",
                "stylers": [{"weight": 0.6}, {"color": "#1a3541"}]
            }, {"elementType": "labels.icon", "stylers": [{"visibility": "off"}]}, {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [{"color": "#2c5a71"}]
            }]
        };

        // Get the HTML DOM element that will contain your map
        // We are using a div with id="map" seen below in the <body>
        var mapElement = document.getElementById('map');

        // Create the Google Map using our element and options defined above
        var map = new google.maps.Map(mapElement, mapOptions);

        // Let's also add a marker while we're at it
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(40.6700, -73.9400),
            map: map,
            title: 'Snazzy!'
        });
    }
}

/*
 *
 * lC LIGHTBOX FUNCTION
 *
 * */
function lcLightBox() {
    lc_lightbox('.elem', {
        wrap_class: 'home2',
        gallery: true,
        thumb_attr: 'data-lcl-thumb',
        skin: 'dark',
        fullscreen: true,
        radius: 0,
        padding: 0,
        border_w: 0,
    });
}
function lcLightBox2() {
    lc_lightbox('.singlePostBTN', {
        wrap_class: 'home1',
        gallery: true,
        thumb_attr: 'data-lcl-thumb',
        skin: 'dark',
        fullscreen: true,
        radius: 0,
        padding: 0,
        border_w: 0,
    });
}

//CHECK THE LC LIGHTBOX
if ($('.home2').length > 0) {
    lcLightBox();
}
if ($('.home1').length > 0) {
    lcLightBox2();
}

$(window).load(function() {
    $('#loadArea').hide();
});


// ====================================
//  Contact form
// ====================================
$('#contact-form').on("submit", function () {
    var action = $(this).attr('action');
    // console.log('top');
    $("#message").slideUp(750, function () {
        $('#message').hide();
        $('#submit')
            .after('<img src="images/ajax-loader.gif" class="loader" />')
            .attr('disabled', 'disabled');
        // console.log('Attr');
        $.post(action, {
                name: $('#name').val(),
                email: $('#email').val(),
                subject: $('#subject').val(),
                comments: $('#comments').val()
            },
            function (data) {
                document.getElementById('message').innerHTML = data;
                $('#message').slideDown('slow');
                setTimeout(function () {
                    $('#message').slideUp('slow');
                    console.log('SetTime');
                }, 2000)

                $('#contact-form img.loader').fadeOut('slow', function () {
                    $(this).remove()
                });
                $('#submit').removeAttr('disabled');
                if (data.match('success') != null)
                    $('#contact-form').show('slow');
                // console.log('Down');
            }
        );

    });
    // console.log('outside');
    return false;
});