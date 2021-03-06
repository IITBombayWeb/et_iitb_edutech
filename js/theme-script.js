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
