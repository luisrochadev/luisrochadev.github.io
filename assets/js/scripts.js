// dl-menu options
$(function() {
  $( '#dl-menu' ).dlmenu({
    animationClasses : { classin : 'dl-animate-in', classout : 'dl-animate-out' }
  });
});

 new WOW().init();

 // total revenue count animation
 $.fn.digits = function(){ 
    return this.each(function(){ 
        $(this).text( $(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") ); 
    })
}

$({countNum: 10000}).animate({countNum: 27338}, {
  duration: 800,
  easing:'linear',
  step: function() {
    $("#revenue-count").html(Math.floor(this.countNum));
  },
  complete: function() {
    $('#revenue-count').digits();
  }
});

// 
$('#photo-drop').on('click hover', function () {
    $('.dropdown-content').toggle();
});

// Need this to show animation when go back in browser
window.onunload = function() {};

// Add lightbox class to all image links
$("a[href$='.jpg'],a[href$='.jpeg'],a[href$='.JPG'],a[href$='.png'],a[href$='.gif']").addClass("image-popup");

// FitVids options
$(function() {
  $(".content").fitVids();
});


$( "#mobile-toggle" ).click(function() {
  $( "#mobile-wrapper" ).toggle( "fast" );
  if($(this).children('i').hasClass( "fa-bars" )){
           $(this).children('i').toggleClass('fa-bars');
           $(this).children('i').toggleClass('fa-times');
       } else {
           $(this).children('i').toggleClass('fa-bars');
           $(this).children('i').toggleClass('fa-times');
       }
});

$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  $("#hero-banner").css("transform","translateY(" +  (scroll/2)  + "px)");    
});

// All others
$(document).ready(function() {
    // zoom in/zoom out animations
    if ($(".container").hasClass('fadeOut')) {
        $(".container").removeClass("fadeOut").addClass("fadeIn");
    }
    if ($(".wrapper").hasClass('fadeOut')) {
        $(".wrapper").removeClass("fadeOut").addClass("fadeIn");
    }
    $(".zoombtn").click(function() {
        $(".container").removeClass("fadeIn").addClass("fadeOut");
        $(".wrapper").removeClass("fadeIn").addClass("fadeOut");
    });
    // go up button
    $.goup({
        trigger: 500,
        bottomOffset: 10,
        locationOffset: 20,
        containerRadius: 0,
        containerColor: '#fff',
        arrowColor: '#000',
        goupSpeed: 'normal'
    });
	$('.image-popup').magnificPopup({
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">Image #%curr%</a> could not be loaded.',
    },
    removalDelay: 300, // Delay in milliseconds before popup is removed
    // Class that is added to body when popup is open. 
    // make it unique to apply your CSS animations just to this exact popup
    mainClass: 'mfp-fade'
  });
});
