$(document).ready(function($) {
    "use strict";
    changeTieltSize();

    $(window).scroll(function () {
        if ($(document).scrollTop() > 10) {
            $(".lightnav .navbar-inner").addClass("lightnav-alt");
            $(".darknav .navbar-inner").addClass("darknav-alt");
        } else {
            $(".lightnav .navbar-inner").removeClass("lightnav-alt");
            $(".darknav .navbar-inner").removeClass("darknav-alt");
        }
    });

	$(document).ready(function($) {

		jQuery(function ($) {
			var footerHeight = $('.footer-container');
			var pdtop = $('footer').css('padding-top').replace('px','');
			var pdtopint = parseInt(pdtop);
			var heightf = footerHeight.height();
			heightf = heightf + pdtopint + 3;
			var toTop = $('#totop');
			toTop.css({
				     	'bottom': heightf + "px",
				    });
		});

		// Slidebars off-canvas menu
		$.slidebars();

		// Popovers [Hover]
		$("[data-toggle=popover]")
			.popover({
				html:true
			}
		);

		$("html").niceScroll({
			smoothscroll: true, // scroll with ease movement
			autohidemode: false,
			zindex: "100", // change z-index for scrollbar div
        	scrollspeed: 60, // scrolling speed
        	mousescrollstep: 40,
        	gesturezoom: false,
        	horizrailenabled: false,
        	cursorcolor: "#151515",
	        boxzoom: false,
	        cursorborder: "0 solid #202020",
	        cursorborderradius: "5px",
	        cursorwidth: 9,
	        enablemousewheel: true,
	        background: "rgba(255,255,255,0.7)",
		});

		// Page transitions
		$(".animsition").animsition({

			inClass               :   'fade-in',
			outClass              :   'fade-out-down-sm',
			inDuration            :    900,
			outDuration           :    800,
			linkElement           :   '.animsition-link', 
			//e.g. linkElement   :   'a:not([target="_blank"]):not([href^=#])'
			loading               :    true,
			loadingParentElement  :   'body', //animsition wrapper element
			loadingClass          :   'animsition-loading',
			unSupportCss          : [ 'animation-duration',
			                          '-webkit-animation-duration',
			                          '-o-animation-duration'
			                        ],
			//"unSupportCss" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser. 
			//The default setting is to disable the "animsition" in a browser that does not support "animation-duration".

			overlay               :   false,

			overlayClass          :   'animsition-overlay-slide',
			overlayParentElement  :   'body'
		});

		// WOW plugin settings
        var wow = new WOW(
          { animateClass: 'animated', // set our global css classT (default is animated)
            offset: 250, // set distance to content until it triggers (default is 0)
            mobile: false, // remove animations for mobiles/tablets (default is true)
            live: true }); // act on asynchronously loaded content (default is true)
        new WOW().init();

		// Functionailty constraints for mobile
		if (!Modernizr.touch) {
		    jQuery(function ($) {
		        // Hero & page-header fade-in effect
		        var divs = $('.herofade');
		        $(window).on('scroll', function () {
		            var st = $(this).scrollTop();
		            divs.css({
		                'margin-top': -(st / 0) + "px",
		                'opacity': 0.3 - st / 1600
		            });
		        });
		    });

		    jQuery(function ($) {
		        // Hero & page-header fade-in effect
		        var divs = $('.videofade');
		        $(window).on('scroll', function () {
		            var st = $(this).scrollTop();
		            divs.css({
		                'margin-top': -(st / 0) + "px",
		                'opacity': 0.8 - st / 1600
		            });
		        });
		    });

		    jQuery(function ($) {
		        // Hero & page-header fade-in effect
		        var divs = $('.headerfade');
		        $(window).on('scroll', function () {
		            var st = $(this).scrollTop();
		            divs.css({
		                'margin-top': -(st / 0) + "px",
		                'opacity': 0.9 - st / 300
		            });
		        });
		    });
		}

		var viewWidth = document.documentElement.clientWidth||document.body.clientWidth;
		var viewHeight = document.documentElement.clientHeight||document.body.clientHeight;
		if (viewWidth <= 1024) {
			jQuery(function ($) {
		        // Hero & page-header fade-in effect
		        var divs = $('.bgimg');
		        divs.css({
		                'width': viewWidth+ "px",
		                'height': viewHeight +"px"
		            });
		    });
		};

		// autohide navbar on scroll
		$("div.navbar-fixed-top").autoHidingNavbar({
			animationDuration: 200,
			hideOffset: 50,
		});

		// faq's floating sidebar (left)
	    $('#sidebar').affix({
	    	offset: {
	    		top: 500
	    	}
		});
		
	    // Scrollspy for scrollto links in floating faq sidebar
		var $body   = $(document.body);
		var navHeight = $('.navbar').outerHeight(true) + 80;

		$body.scrollspy({
			target: '#leftcol',
			offset: navHeight
		});

		// fade out map cover (contact.html)
	    $(".map-cover").click(function () {
	        $(".map-cover").fadeOut("slow");
	    });

		// Collapsible panels for faq's and careers
	    $('.collapse').on('show.bs.collapse', function() {
	        var id = $(this).attr('id');
	        $('a[href="#' + id + '"]').closest('.panel-heading').addClass('active-panel');
	        $('a[href="#' + id + '"] .panel-title span').html('<i class="glyphicon glyphicon-chevron-up"></i>');
	    });
	    $('.collapse').on('hide.bs.collapse', function() {
	        var id = $(this).attr('id');
	        $('a[href="#' + id + '"]').closest('.panel-heading').removeClass('active-panel');
	        $('a[href="#' + id + '"] .panel-title span').html('<i class="glyphicon glyphicon-chevron-down"></i>');
	    });

	    /*!
	     * IE10 viewport hack for Surface/desktop Windows 8 bug
	     * Copyright 2014 Twitter, Inc.
	     * Licensed under the Creative Commons Attribution 3.0 Unported License. For
	     * details, see http://creativecommons.org/licenses/by/3.0/.
	     */
	    // See the Getting Started docs for more information:
	    // http://getbootstrap.com/getting-started/#support-ie10-width
	    if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
	        var msViewportStyle = document.createElement('style');
	        msViewportStyle.appendChild(
	            document.createTextNode(
	                '@-ms-viewport{width:auto!important}'
	            )
	        );
	        document.querySelector('head').appendChild(msViewportStyle);
	    }

	}); // Document Ready

}(jQuery)); // End "use strict"

//--------------resize----------------------------------------------------------------
var resizeHero = function () {
        var hero = $(".cover,.heightblock"),
            window1 = $(window);
        hero.css({
            "height": window1.height()
        });
    };

resizeHero();

$(window).resize(function() {
	jQuery(function ($) {
			var footerHeight = $('.footer-container');
			var pdtop = $('footer').css('padding-top').replace('px','');
			var pdtopint = parseInt(pdtop);
			var heightf = footerHeight.height();
			heightf = heightf + pdtopint + 3;
			var toTop = $('#totop');
			toTop.css({
				     	'bottom': heightf + "px",
				    });
		});
	var viewWidth = document.documentElement.clientWidth||document.body.clientWidth;
	var viewHeight = document.documentElement.clientHeight||document.body.clientHeight;
	//console.log(ismobile);
	if (!browser()) {
		resizeHero();
		if (viewWidth <= 1024) {
			jQuery(function ($) {
			    var divs = $('.bgimg');
			    divs.css({
			     	'width': viewWidth+ "px",
			        'height': viewHeight +"px"
			    });
			});
		}else{
			jQuery(function ($) {
			    var divs = $('.bgimg');
			    divs.css({
			     	'width': "100%",
			        'height': "100%"
			    });
			});
		}
	};
	
});

$(window).on("orientationchange",function(){
	var viewWidth = document.documentElement.clientWidth||document.body.clientWidth;
	var viewHeight = document.documentElement.clientHeight||document.body.clientHeight;
	jQuery(function ($) {
		    var divs = $('.bgimg');
		    divs.css({
		     	'width': viewWidth+ "px",
		        'height': viewHeight +"px"
		    });
		});
});

// Enable dropdown sub-menus in off-canvas navigation
$(document).ready(function($) {
	$('.sb-toggle-submenu').off('click') // Stop submenu toggle from closing Slidebars.
		.on('click', function() {
			$submenu = $(this).parent().children('.sb-submenu');
			$(this).add($submenu).toggleClass('sb-submenu-active'); // Toggle active class.

			if ($submenu.hasClass('sb-submenu-active')) {
			$submenu.slideDown(200);
			} else {
			$submenu.slideUp(200);
		}
	});
}(jQuery));

(function($){
  /*toTop start*/
  // When to show the scroll link
  // higher number = scroll link appears further down the page
  var upperLimit = 666;
  // Our scroll link element
  var scrollElem = $('#totop');
  // Scroll to top speed
  var scrollSpeed = 500;
  // Show and hide the scroll to top link based on scroll position
  $(window).scroll(function() {
    var scrollTop = $(document).scrollTop();
    if (scrollTop > upperLimit) {
      $(scrollElem).stop().fadeTo(300, 1); // fade back in
    } else {
      $(scrollElem).stop().fadeTo(300, 0); // fade out
    }
  });

  // Scroll to top animation on click
  $(scrollElem).click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, scrollSpeed);
    return false;
  });
  /*toTop end*/

  // Share
  $('body').on('click', function(){
    $('.article-share-box.on').removeClass('on');
  }).on('click', '.article-share-link', function(e){
    e.stopPropagation();

    var $this = $(this),
      type = $this.attr('data-share'),
      offset = $this.offset();

    if (type == 'baidu') {
    	
      var box = $('#article-share-box');

      if (box.hasClass('on')){
        box.removeClass('on');
        return;
      }

      $('.article-share-box.on').hide();

      box.css({
        top: offset.top + 25,
        left: offset.left - 25
      }).addClass('on');
    } else{
      var url = $this.attr('data-url'),
      encodedUrl = encodeURIComponent(url),
      id = 'article-share-box-' + $this.attr('data-id');

      if ($('#' + id).length){
        var box = $('#' + id);

        if (box.hasClass('on')){
          box.removeClass('on');
          return;
        }
      } else {
        var html = [
          '<div id="' + id + '" class="article-share-box">',
            '<input class="article-share-input" value="' + url + '">',
            '<div class="article-share-links">',
              '<a href="https://twitter.com/intent/tweet?url=' + encodedUrl + '" class="article-share-twitter" target="_blank" title="Twitter"></a>',
              '<a href="https://www.facebook.com/sharer.php?u=' + encodedUrl + '" class="article-share-facebook" target="_blank" title="Facebook"></a>',
              '<a href="http://pinterest.com/pin/create/button/?url=' + encodedUrl + '" class="article-share-pinterest" target="_blank" title="Pinterest"></a>',
              '<a href="https://plus.google.com/share?url=' + encodedUrl + '" class="article-share-google" target="_blank" title="Google+"></a>',
            '</div>',
          '</div>'
        ].join('');

        var box = $(html);

        $('body').append(box);
      }

      $('.article-share-box.on').hide();

      box.css({
        top: offset.top + 25,
        left: offset.left
      }).addClass('on');
    };
  }).on('click', '.article-share-box', function(e){
    e.stopPropagation();
  }).on('click', '.article-share-box-input', function(){
    $(this).select();
  }).on('click', '.article-share-box-link', function(e){
    e.preventDefault();
    e.stopPropagation();

    window.open(this.href, 'article-share-box-window-' + Date.now(), 'width=500,height=450');
  });
})(jQuery);

function browser(){
	var u = navigator.userAgent.toLowerCase(), app = navigator.appVersion;
	//console.log(u);
	var trident=u.indexOf('trident') > -1; //IE内核
	var presto= u.indexOf('presto') > -1; //opera内核
	var webKit= u.indexOf('applewebkit') > -1; //苹果、谷歌内核
	var gecko= u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1; //火狐内核
	var mobile= !!u.match(/applewebkit.*mobile.*/); //是否为移动终端
	var ios= !!u.match(/\(i[^;]+;( U;)? cpu.+mac os x/); //ios终端
	var android= u.indexOf('android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器
	var iPhone= u.indexOf('iphone') > -1 || u.indexOf('Mac') > -1; //是否为iPhone或者QQHD浏览器
	var iPad= u.indexOf('ipad') > -1; //是否iPad
	var webApp= u.indexOf('safari') == -1; //是否web应该程序，没有头部与底部  
	var language= (navigator.browserLanguage || navigator.language).toLowerCase();
	if (mobile || ios || iPhone || android || iPad ) {
		return true;
	}
	else{
		return false;
	}
}

function changeTieltSize(){
	if(browser()){
		var divs = $('.text-center');
	    divs.css({
	     	'font-size:': "1.5em",
	    });
	}
}