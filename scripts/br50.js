!function(l){Drupal.behaviors.br50={attach:function(a,o){var t=l(".owl-carousel");t.owlCarousel({loop:!0,nav:!0,autoHeight:!0,items:1,lazyLoad:!0,autoplay:!0,autoplayTimeout:5e3,autoplayHoverPause:!0}),l(".play").on("click",function(){t.trigger("play.owl.autoplay",[1e3])}),l(".stop").on("click",function(){t.trigger("stop.owl.autoplay")}),l(".video-embed-field-launch-modal").attr("data-video-embed-field-modal",function(a,o){var t=o.match(/autoplay=([^&]*)/);if(t&&0==t[1])return o.replace("autoplay=0","autoplay=1")})}}}(jQuery);