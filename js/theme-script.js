/**
 * DO NOT EDIT THIS FILE.
 * See the following change record for more information,
 * https://www.drupal.org/node/2815083
 * @preserve
 **/

(function ($, Drupal) {
  $(document).ready(function () {
    $('.news-slider-wrapper').append('<div class="next-prev-wrap"><span><a href="#" class="custom-prev">Previous</a></span><span><a href="#" class="custom-next">Next</a></span></div>');

    // $('.news-slider').cycle({
    //   // fx:    'scrollLeft',
    //   // delay: -1000
    // });

    $('.custom-prev').click(function (e) {
      e.preventDefault();
      $(this).parents('.news-slider-wrapper').find('.news-slider').cycle('prev');
      // $('.news-slider').cycle('prev');
    });

    // $('.custom-next').click(function (event) {
    //   event.preventDefault();
    //   // $('.news-slider').cycle('next');
    //   $(this).parents('.news-slider-wrapper').find('.news-slider').cycle('next');
    // });

    if ($('.collapse.in').length) {
        $('.collapse.in').addClass('show');
    }


    $(".navbar-nav .dropdown").hover(
    function(){
      $(this).addClass("show");
      $("ul.dropdown-menu", this).addClass("show");
    },function(){
      $(this).removeClass("show");
      $("ul.dropdown-menu", this).removeClass("show");
    });

    $(".region-content-above .has-nolink .navbar-nav li:first-of-type").addClass("col-12 col-lg-2");

    if ($('.region-sidebar-first .has-nolink').length) {
        if ($('.region-content-above .has-nolink').length) {
            $('.region-content-above .has-nolink .navbar-nav .nav-item.col-12.col-lg-2').hide();
        }
    }

    // Scroll to top
    var totop = $('#totop');

    if (totop.length > 0) {
        totop.hide();

        $(window).scroll(function(){
            if ($(this).scrollTop() > 100) {
                totop.fadeIn();
            } else {
                totop.fadeOut();
            }
        });

        totop.click(function(){
            $("html, body").animate({ scrollTop: 0 }, 660);
            return false;
        });
    }

    //Scroll to section
    $('.link-scroll').on('click', function(event) {
        var src = $(this).attr('href');
        var scrollPosition = $(src).offset().top;

        // @todo:: Need to call this explicit
        // for header--solid
        var $solidHeader = $('header');
        if ($solidHeader.length)  {
            var scrollPosition = scrollPosition - ($solidHeader.outerHeight() + 20);
        }

        $('html, body').animate({
            scrollTop: scrollPosition
        }, 1500);

        event.preventDefault();
    });


  });
})(jQuery, Drupal);

// (function ($, Drupal) {

// $("#big-slider").carousel({
//   interval: 2000,
//   ride: true
// });

// $('.bsp').on('click', function (e) {
//   e.preventDefault();
//   var sliderId = $(this).attr('href');
//   $(sliderId).carousel('prev');
//   console.log('prev');
// });

// $('.bsn').on('click', function (e) {
//   e.preventDefault();
//   var sliderId = $(this).attr('href');
//   $(sliderId).carousel('next');
//   console.log('next');
// });
// })(jQuery, Drupal);
