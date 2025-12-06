/**
 * Eastend - Visa Consulting HTML Template
 *
 * This file contains all theme JS functions
 *
 * @package 
--------------------------------------------------------------
				   Contents
--------------------------------------------------------------
* 01 - Owl Caserol
        - Home Slider
        - Testimonial Slider
        - Patners Slider
        - Tweet-Slider-Block 
        - Blog Slider
* 02 - Video Play
* 03 - Facts Count
* 04 - Navigation / Menu
* 05 - Smooth Scroll
* 06 - Mailchimp Form
* 07 - Preloader

--------------------------------------------------------------*/

(function($) {
  "use strict";
  
 var $window = $( window )
 

/* ================================= */
  /*===== Owl Caserol =====*/
/* ================================= */
// Home Slider  
    $("#home-slider").owlCarousel({
      loop: true,
      items: 1,
      dots: false,
      nav: true,      
      autoplayTimeout: 10000,
      smartSpeed: 2000,
      autoHeight: false,
      touchDrag: true,
      mouseDrag: true,
      margin: 0,
      autoplay: true,
      slideSpeed: 600,
      navText: ['<i class="flaticon-back" aria-hidden="true"></i>', '<i class="flaticon-next-1" aria-hidden="true"></i>'],
      responsive: {
        0: {
            items: 1,
            nav: false,
            dots: false,
        },
        600: {
            items: 1,
            nav: false,
            dots: false,
        },
        768: {
            items: 1,
            nav: false,
            dots: false,
        },
        1100: {
            items: 1,
            nav: true,
            dots: false,
        }
      }
    });

// Testimonial Slider    
    $("#testimonial-block-slider").owlCarousel({
      loop: true,
      items: 1,
      dots: true,
      nav: true,      
      autoplayTimeout: 10000,
      smartSpeed: 2000,
      autoHeight: false,
      touchDrag: true,
      mouseDrag: true,
      margin: 0,
      autoplay: true,
      slideSpeed: 600,
      navText: ['<i class="flaticon-back-1" aria-hidden="true"></i>', '<i class="flaticon-next" aria-hidden="true"></i>'],
      responsive: {
        0: {
            items: 1,
            nav: false,
            dots: true,
        },
        600: {
            items: 1,
            nav: false,
            dots: true,
        },
        768: {
            items: 1,
            nav: true,
            dots: true,
        },
        1100: {
            items: 1,
            nav: true,
            dots: true,
        }
      }
    });

// Patners Slider    
    $("#patners-slider").owlCarousel({
      loop: true,
      items: 5,
      dots: false,
      nav: false,      
      autoplayTimeout: 10000,
      smartSpeed: 2000,
      autoHeight: false,
      touchDrag: true,
      mouseDrag: true,
      margin: 30,
      autoplay: true,
      slideSpeed: 600,
      navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
      responsive: {
        0: {
            items: 1,
            nav: false,
            dots: false,
        },
        600: {
            items: 1,
            nav: false,
            dots: false,
        },
        768: {
            items: 3,
            nav: false,
            dots: false,
        },
        1100: {
            items: 5,
            nav: false,
            dots: false,
        }
      }
    });
    
// Tweet-Slider-Block  
    $("#tweet-slider").owlCarousel({
      loop: true,
      items: 1,
      dots: true,
      nav: false,      
      autoplayTimeout: 10000,
      smartSpeed: 2000,
      autoHeight: false,
      touchDrag: true,
      mouseDrag: true,
      margin: 30,
      autoplay: true,
      slideSpeed: 600,
      navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
      responsive: {
        0: {
            items: 1,
            nav: false,
            dots: true,
        },
        600: {
            items: 1,
            nav: false,
            dots: true,
        },
        768: {
            items: 1,
            nav: false,
            dots: true,
        },
        1100: {
            items: 1,
            nav: false,
            dots: true,
        }
      }
    });
      
// Blog Slider    
    $("#blog-slider").owlCarousel({
      loop: true,
      items: 1,
      dots: false,
      nav: true,
      autoplayTimeout: 10000,
      smartSpeed: 5000,
      autoHeight: false,
      touchDrag: true,
      mouseDrag: true,
      margin: 0,
      autoplay: true,
      slideSpeed: 600,
      navText: ['<i class="flaticon-back" aria-hidden="true"></i>', '<i class="flaticon-next-1" aria-hidden="true"></i>'],
      responsive: {
        0: {
            items: 1,
            nav: false,
            dots: false,
        },
        600: {
            items: 1,
            nav: false,
            dots: false,
        },
        768: {
            items: 1,
            nav: true,
            dots: false,
        },
        1100: {
            items: 1,
            nav: true,
            dots: false,
        }
      }
    });

/* ================================= */
    /*===== Video Play =====*/
/* ================================= */    
    $('.btn-video-play').on('click',function() {
      $('.video-item .video-preview').append(video_url);
      $(this).hide();
    });  

/* ================================= */
    /*===== Facts Count  =====*/
/* ================================= */ 
    if ($('.counter').length) {   
      $('.counter').counterUp({
        delay: 20,
        time: 2000
      });
    }

/* ================================= */
    /*===== Navigation / Menu  =====*/
/* ================================= */ 
    $("#cssmenu").menumaker({
      title: "Menu",
      format: "multitoggle"
    });

/* ================================= */
    /*===== Smooth Scroll =====*/
/* ================================= */ 
    smoothScroll.init();

/* ================================= */
    /*===== Mailchimp Form =====*/
/* ================================= */   
    $('#subscribe-form').ajaxChimp({
        url: 'http://blahblah.us1.list-manage.com/subscribe/post?u=5afsdhfuhdsiufdba6f8802&id=4djhfdsh9'
    });

/* ================================= */
  /*===== Preloader =====*/
/* ================================= */ 
  $window.on('load', function()  { 
    $('.status').fadeOut();
    $('.preloader').delay(350).fadeOut('slow'); 
  }); 


})(jQuery);