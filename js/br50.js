/**
 * @file
 */

(function ($, Drupal) {
  Drupal.behaviors.br50 = {
    attach: function (context, settings) {

      var owl = $('.owl-carousel');
      owl.owlCarousel({
          loop: true,
          nav: true,
          autoHeight: true,
          items: 1,
          lazyLoad:true,
          autoplay: true,
          autoplayTimeout: 5000,
          autoplayHoverPause:true
      });
      $('.play').on('click',function(){
          owl.trigger('play.owl.autoplay',[1000]);
      });
      $('.stop').on('click',function(){
          owl.trigger('stop.owl.autoplay');
      });
      $('.video-embed-field-launch-modal').attr('data-video-embed-field-modal', function(i, oldSrc) {
        var isAutoPlay = oldSrc.match(/autoplay=([^&]*)/);
        if (isAutoPlay && isAutoPlay[1] == 0) {
          return oldSrc.replace('autoplay=0', 'autoplay=1');
        }
      });

    }
  };
})(jQuery, Drupal);
