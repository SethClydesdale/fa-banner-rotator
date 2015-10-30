(function() {
  var BannerRotator = {
    images : [
      'http://i21.servimg.com/u/f21/18/21/60/73/free10.png',
      'http://i21.servimg.com/u/f21/18/21/60/73/logo10.png'
    ],

    start_delay : 5000,
    duration : 5000,
    height : 'auto',

    fade_image : true,
    fade_speed : 1200,
    
    keep_initial : true,
    remember_position : true,

    // technical data below
    index : -1,
    logo : null,
    
    // increment the index and display the next image in rotation after a small delay
    next : function(ms) {
      if (ms === undefined) ms = FA.BannerRotator.duration;

      window.setTimeout(function() {
        if (++FA.BannerRotator.index >= FA.BannerRotator.images.length) FA.BannerRotator.index = 0; // reset index when it exceeds "images" length
        if (FA.BannerRotator.remember_position) my_setcookie('fa_banner_index', FA.BannerRotator.index); // remember the last banner shown
        
        // fade banner in and out
        if (FA.BannerRotator.fade_image) {
          $(FA.BannerRotator.logo).fadeOut(FA.BannerRotator.fade_speed, function() {
            FA.BannerRotator.logo.src = FA.BannerRotator.images[FA.BannerRotator.index]; // set next banner
            $(this).fadeIn(FA.BannerRotator.fade_speed, FA.BannerRotator.next); // fade it in
          });
        } 

        // default rotation
        else {
          FA.BannerRotator.logo.src = FA.BannerRotator.images[FA.BannerRotator.index];
          FA.BannerRotator.next();
        }
      }, ms);
    },
    
    // initial start up to get the correct logo node and setup some other settings
    init : function() {
      var logo = document.getElementById('i_logo') || document.getElementById('logo') || document.getElementById('pun-logo'),
          index = my_getcookie('fa_banner_index');
          
      if (logo) {
        FA.BannerRotator.logo = logo.tagName == 'IMG' ? logo : logo.firstChild;
        FA.BannerRotator.logo.style.height = FA.BannerRotator.height;
        
        if (FA.BannerRotator.keep_initial) FA.BannerRotator.images[FA.BannerRotator.images.length] = FA.BannerRotator.logo.src;
        if (FA.BannerRotator.remember_position && index) {
          FA.BannerRotator.index = +index;
          FA.BannerRotator.logo.src = FA.BannerRotator.images[FA.BannerRotator.index] || FA.BannerRotator.images[0];
        }
        
        FA.BannerRotator.next(FA.BannerRotator.start_delay);
      } else if (window.console && window.console.warn) {
        console.warn('Your forum version is not optimized for this plugin');
      }
    }
  };
  
  if (!window.FA) FA = {};
  if (!FA.BannerRotator) {
    FA.BannerRotator = BannerRotator;
    $(FA.BannerRotator.init);
  }
}());
