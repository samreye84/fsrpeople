/**
 * Global variables
 */
 "use strict";

 var userAgent = navigator.userAgent.toLowerCase(),
 initialDate = new Date(),

 $document = $(document),
 $window = $(window),
 $html = $("html"),

 isDesktop = $html.hasClass("desktop"),
 isIE = userAgent.indexOf("msie") != -1 ? parseInt(userAgent.split("msie")[1]) : userAgent.indexOf("trident") != -1 ? 11 : userAgent.indexOf("edge") != -1 ? 12 : false,
 isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
 isTouch = "ontouchstart" in window,

 plugins = {
  pointerEvents: isIE < 11 ? "js/pointer-events.min.js" : false,
  bootstrapTooltip: $("[data-toggle='tooltip']"),
  bootstrapModalDialog: $('.modal'),
  bootstrapTabs: $(".tabs"),
  rdNavbar: $(".rd-navbar"),
  rdParallax: $(".rd-parallax"),
  rdGoogleMaps: $(".rd-google-map"),
  rdMailForm: $(".rd-mailform"),
  rdInputLabel: $(".form-label"),
  regula: $("[data-constraints]"),
  responsiveTabs: $(".responsive-tabs"),
  owl: $(".owl-carousel"),
  swiper: $(".swiper-slider"),
  search: $(".rd-search"),
  searchResults: $('.rd-search-results'),
  statefulButton: $('.btn-stateful'),
  isotope: $(".isotope"),
  popover: $('[data-toggle="popover"]'),
  viewAnimate: $('.view-animate'),
  photoSwipeGallery: $("[data-photo-swipe-item]"),
  radio: $("input[type='radio']"),
  checkbox: $("input[type='checkbox']"),
  customToggle: $("[data-custom-toggle]"),
  facebookWidget: $('#fb-root'),
  progressBar: $(".progress-linear"),
  counter: $(".counter"),
  circleProgress: $(".progress-bar-circle"),
  stacktable: $("[data-responsive=true]"),
  calendar: $(".rd-calendar"),
  dateCountdown: $('.DateCountdown'),
  stepper: $("input[type='number']"),
  twitterfeed: $(".twitter"),  
  flickrfeed: $(".flickr"),
};

/**
 * Initialize All Scripts
 */
 $document.ready(function () {
  var isNoviBuilder = window.xMode;
  /**
   * Is Mac os
   * @description  add additional class on html if mac os.
   */
   if (navigator.platform.match(/(Mac)/i)) $html.addClass("mac-os");
   
  /**
   * getSwiperHeight
   * @description  calculate the height of swiper slider basing on data attr
   */
   function getSwiperHeight(object, attr) {
    var val = object.attr("data-" + attr),
    dim;

    if (!val) {
      return undefined;
    }

    dim = val.match(/(px)|(%)|(vh)$/i);

    if (dim.length) {
      switch (dim[0]) {
        case "px":
        return parseFloat(val);
        case "vh":
        return $(window).height() * (parseFloat(val) / 100);
        case "%":
        return object.width() * (parseFloat(val) / 100);
      }
    } else {
      return undefined;
    }
  }

  /**
   * toggleSwiperInnerVideos
   * @description  toggle swiper videos on active slides
   */
   function toggleSwiperInnerVideos(swiper) {
    var prevSlide = $(swiper.slides[swiper.previousIndex]),
    nextSlide = $(swiper.slides[swiper.activeIndex]),
    videos;

    prevSlide.find("video").each(function () {
      this.pause();
    });

    videos = nextSlide.find("video");
    if (videos.length) {
      videos.get(0).play();
    }
  }

  /**
   * toggleSwiperCaptionAnimation
   * @description  toggle swiper animations on active slides
   */
   function toggleSwiperCaptionAnimation(swiper) {
    var prevSlide = $(swiper.container),
    nextSlide = $(swiper.slides[swiper.activeIndex]);

    prevSlide
    .find("[data-caption-animate]")
    .each(function () {
      var $this = $(this);
      $this
      .removeClass("animated")
      .removeClass($this.attr("data-caption-animate"))
      .addClass("not-animated");
    });

    nextSlide
    .find("[data-caption-animate]")
    .each(function () {
      var $this = $(this),
      delay = $this.attr("data-caption-delay");


      if (!isNoviBuilder) {
        setTimeout(function () {
          $this
          .removeClass("not-animated")
          .addClass($this.attr("data-caption-animate"))
          .addClass("animated");
        }, delay ? parseInt(delay) : 0);
      } else {
        $this
        .removeClass("not-animated")
      }
    });
  }

  /**
   * makeParallax
   * @description  create swiper parallax scrolling effect
   */
   function makeParallax(el, speed, wrapper, prevScroll) {
    var scrollY = window.scrollY || window.pageYOffset;

    if (prevScroll != scrollY) {
      prevScroll = scrollY;
      el.addClass('no-transition');
      el[0].style['transform'] = 'translate3d(0,' + -scrollY * (1 - speed) + 'px,0)';
      el.height();
      el.removeClass('no-transition');

      if (el.attr('data-fade') === 'true') {
        var bound = el[0].getBoundingClientRect(),
        offsetTop = bound.top * 2 + scrollY,
        sceneHeight = wrapper.outerHeight(),
        sceneDevider = wrapper.offset().top + sceneHeight / 2.0,
        layerDevider = offsetTop + el.outerHeight() / 2.0,
        pos = sceneHeight / 6.0,
        opacity;
        if (sceneDevider + pos > layerDevider && sceneDevider - pos < layerDevider) {
          el[0].style["opacity"] = 1;
        } else {
          if (sceneDevider - pos < layerDevider) {
            opacity = 1 + ((sceneDevider + pos - layerDevider) / sceneHeight / 3.0 * 5);
          } else {
            opacity = 1 - ((sceneDevider - pos - layerDevider) / sceneHeight / 3.0 * 5);
          }
          el[0].style["opacity"] = opacity < 0 ? 0 : opacity > 1 ? 1 : opacity.toFixed(2);
        }
      }
    }

    requestAnimationFrame(function () {
      makeParallax(el, speed, wrapper, prevScroll);
    });
  }

  /**
   * isScrolledIntoView
   * @description  check the element whas been scrolled into the view
   */
   function isScrolledIntoView(elem) {
    var $window = $(window);
    return elem.offset().top + elem.outerHeight() >= $window.scrollTop() && elem.offset().top <= $window.scrollTop() + $window.height();
  }

  /**
   * initOnView
   * @description  calls a function when element has been scrolled into the view
   */
   function lazyInit(element, func) {
    var $win = jQuery(window);
    $win.on('load scroll', function () {
      if ((!element.hasClass('lazy-loaded') && (isScrolledIntoView(element)))) {
        func.call();
        element.addClass('lazy-loaded');
      }
    });
  }

  /**
   * Live Search
   * @description  create live search results
   */
   function liveSearch(options) {
    $('#' + options.live).removeClass('cleared').html();
    options.current++;
    options.spin.addClass('loading');
    $.get(handler, {
      s: decodeURI(options.term),
      liveSearch: options.live,
      dataType: "html",
      liveCount: options.liveCount,
      filter: options.filter,
      template: options.template
    }, function (data) {
      options.processed++;
      var live = $('#' + options.live);
      if (options.processed == options.current && !live.hasClass('cleared')) {
        live.find('> #search-results').removeClass('active');
        live.html(data);
        setTimeout(function () {
          live.find('> #search-results').addClass('active');
        }, 50);
      }
      options.spin.parents('.rd-search').find('.input-group-addon').removeClass('loading');
    })
  }

  /**
   * attachFormValidator
   * @description  attach form validation to elements
   */
   function attachFormValidator(elements) {
    for (var i = 0; i < elements.length; i++) {
      var o = $(elements[i]), v;
      o.addClass("form-control-has-validation").after("<span class='form-validation'></span>");
      v = o.parent().find(".form-validation");
      if (v.is(":last-child")) {
        o.addClass("form-control-last-child");
      }
    }

    elements
    .on('input change propertychange blur', function (e) {
      var $this = $(this), results;

      if (e.type != "blur") {
        if (!$this.parent().hasClass("has-error")) {
          return;
        }
      }

      if ($this.parents('.rd-mailform').hasClass('success')) {
        return;
      }

      if ((results = $this.regula('validate')).length) {
        for (i = 0; i < results.length; i++) {
          $this.siblings(".form-validation").text(results[i].message).parent().addClass("has-error")
        }
      } else {
        $this.siblings(".form-validation").text("").parent().removeClass("has-error")
      }
    })
    .regula('bind');
  }

  /**
   * isValidated
   * @description  check if all elemnts pass validation
   */
   function isValidated(elements) {
    var results, errors = 0;
    if (elements.length) {
      for (j = 0; j < elements.length; j++) {

        var $input = $(elements[j]);

        if ((results = $input.regula('validate')).length) {
          for (k = 0; k < results.length; k++) {
            errors++;
            $input.siblings(".form-validation").text(results[k].message).parent().addClass("has-error");
          }
        } else {
          $input.siblings(".form-validation").text("").parent().removeClass("has-error")
        }
      }

      return errors == 0;
    }
    return true;
  }

  /**
   * Init Bootstrap tooltip
   * @description  calls a function when need to init bootstrap tooltips
   */
   function initBootstrapTooltip(tooltipPlacement) {
    if (window.innerWidth < 599) {
      plugins.bootstrapTooltip.tooltip('destroy');
      plugins.bootstrapTooltip.tooltip({
        placement: 'bottom'
      });
    } else {
      plugins.bootstrapTooltip.tooltip('destroy');
      plugins.bootstrapTooltip.tooltipPlacement;
      plugins.bootstrapTooltip.tooltip();
    }
  }

  /**
   * Copyright Year
   * @description  Evaluates correct copyright year
   */
   var o = $("#copyright-year");
   if (o.length) {
    o.text(initialDate.getFullYear());
  }

  /**
   * IE Polyfills
   * @description  Adds some loosing functionality to IE browsers
   */
   if (isIE) {
    if (isIE < 10) {
      $html.addClass("lt-ie-10");
    }

    if (isIE < 11) {
      if (plugins.pointerEvents) {
        $.getScript(plugins.pointerEvents)
        .done(function () {
          $html.addClass("ie-10");
          PointerEventsPolyfill.initialize({});
        });
      }
    }

    if (isIE === 11) {
      $("html").addClass("ie-11");
    }

    if (isIE === 12) {
      $("html").addClass("ie-edge");
    }
  }

  /**
   * Bootstrap Tooltips
   * @description Activate Bootstrap Tooltips
   */
   if (plugins.bootstrapTooltip.length) {
    var tooltipPlacement = plugins.bootstrapTooltip.attr('data-placement');
    initBootstrapTooltip(tooltipPlacement);
    $(window).on('resize orientationchange', function () {
      initBootstrapTooltip(tooltipPlacement);
    })
  }

  /**
   * bootstrapModalDialog
   * @description Stap vioeo in bootstrapModalDialog
   */
   if (plugins.bootstrapModalDialog.length > 0) {
    var i = 0;

    for (i = 0; i < plugins.bootstrapModalDialog.length; i++) {
      var modalItem = $(plugins.bootstrapModalDialog[i]);

      modalItem.on('hidden.bs.modal', $.proxy(function () {
        var activeModal = $(this),
        rdVideoInside = activeModal.find('video'),
        youTubeVideoInside = activeModal.find('iframe');

        if (rdVideoInside.length) {
          rdVideoInside[0].pause();
        }

        if (youTubeVideoInside.length) {
          var videoUrl = youTubeVideoInside.attr('src');

          youTubeVideoInside
          .attr('src', '')
          .attr('src', videoUrl);
        }
      }, modalItem))
    }
  }

  /**
   * RD Google Maps
   * @description Enables RD Google Maps plugin
   */
   if (plugins.rdGoogleMaps.length) {
    var i;

    $.getScript("//maps.google.com/maps/api/js?key=AIzaSyAFeB0kVA6ouyJ_gEvFbMaefLy3cBCyRwo&sensor=false&libraries=geometry,places&v=3.7", function () {
      var head = document.getElementsByTagName('head')[0],
      insertBefore = head.insertBefore;

      head.insertBefore = function (newElement, referenceElement) {
        if (newElement.href && newElement.href.indexOf('//fonts.googleapis.com/css?family=Roboto') != -1 || newElement.innerHTML.indexOf('gm-style') != -1) {
          return;
        }
        insertBefore.call(head, newElement, referenceElement);
      };

      for (i = 0; i < plugins.rdGoogleMaps.length; i++) {

        var $googleMapItem = $(plugins.rdGoogleMaps[i]);

        lazyInit($googleMapItem, $.proxy(function () {
          var $this = $(this),
          styles = $this.attr("data-styles");

          $this.googleMap({
            styles: styles ? JSON.parse(styles) : [],
            onInit: function (map) {
              var inputAddress = $('#rd-google-map-address');

              if (inputAddress.length) {
                var input = inputAddress;
                var geocoder = new google.maps.Geocoder();
                var marker = new google.maps.Marker(
                {
                  map: map,
                  icon: "images/gmap_marker.png",
                }
                );
                var autocomplete = new google.maps.places.Autocomplete(inputAddress[0]);
                autocomplete.bindTo('bounds', map);
                inputAddress.attr('placeholder', '');
                inputAddress.on('change', function () {
                  $("#rd-google-map-address-submit").trigger('click');
                });
                inputAddress.on('keydown', function (e) {
                  if (e.keyCode == 13) {
                    $("#rd-google-map-address-submit").trigger('click');
                  }
                });


                $("#rd-google-map-address-submit").on('click', function (e) {
                  e.preventDefault();
                  var address = input.val();
                  geocoder.geocode({'address': address}, function (results, status) {
                    if (status == google.maps.GeocoderStatus.OK) {
                      var latitude = results[0].geometry.location.lat();
                      var longitude = results[0].geometry.location.lng();

                      map.setCenter(new google.maps.LatLng(
                        parseFloat(latitude),
                        parseFloat(longitude)
                        ));
                      marker.setPosition(new google.maps.LatLng(
                        parseFloat(latitude),
                        parseFloat(longitude)
                        ))
                    }
                  });
                });
              }
            }
          });
        }, $googleMapItem));
      }
    });
  }

  /**
   * Responsive Tabs
   * @description Enables Responsive Tabs plugin
   */
   if (plugins.responsiveTabs.length > 0) {
    var i;

    for (i = 0; i < plugins.responsiveTabs.length; i++) {
      var responsiveTabsItem = $(plugins.responsiveTabs[i]);

      responsiveTabsItem.easyResponsiveTabs({
        type: responsiveTabsItem.attr("data-type") === "accordion" ? "accordion" : "default"
      });

      //If have owl carousel inside tab - resize owl carousel on click
      if (responsiveTabsItem.find('.owl-carousel').length) {
        var respTabsArr = ['.resp-accordion', '.resp-tab-item'],
        j;

        for(j = 0; j < respTabsArr.length; j++) {
          responsiveTabsItem.find(respTabsArr[j].toString()).on('click', $.proxy(function (event) {
            var $this = $(this),
            carouselObj = ($this.find('.resp-tab-content-active .owl-carousel').owlCarousel()).data('owlCarousel');

            if (carouselObj && typeof carouselObj.onResize === "function") {
              carouselObj.onResize();
            }
          }, responsiveTabsItem));
        }
      }

      //If have slick carousel inside tab - resize slick carousel on click
      if (responsiveTabsItem.find('.slick-slider').length) {
        responsiveTabsItem.find('.resp-tab-item').on('click', $.proxy(function (event) {
          var $this = $(this);

          $this.find('.resp-tab-content-active .slick-slider').slick('setPosition');
        }, responsiveTabsItem));
      }
    }
  }

     /**
      * Facebook widget
      * @description  Enables official Facebook widget
      */
     if (plugins.facebookWidget.length) {
         lazyInit(plugins.facebookWidget, function () {
             (function (d, s, id) {
                 var js, fjs = d.getElementsByTagName(s)[0];
                 if (d.getElementById(id)) return;
                 js = d.createElement(s);
                 js.id = id;
                 js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.8";
                 fjs.parentNode.insertBefore(js, fjs);
             }(document, 'script', 'facebook-jssdk'));
         });
     }


     /**
   * Radio
   * @description Add custom styling options for input[type="radio"]
   */
   if (plugins.radio.length) {
    var i;
    for (i = 0; i < plugins.radio.length; i++) {
      var $this = $(plugins.radio[i]);
      $this.addClass("radio-custom").after("<span class='radio-custom-dummy'></span>")
    }
  }

  /**
   * Checkbox
   * @description Add custom styling options for input[type="checkbox"]
   */
   if (plugins.checkbox.length) {
    var i;
    for (i = 0; i < plugins.checkbox.length; i++) {
      var $this = $(plugins.checkbox[i]);
      $this.addClass("checkbox-custom").after("<span class='checkbox-custom-dummy'></span>")
    }
  }

  /**
   * Popovers
   * @description Enables Popovers plugin
   */
   if (plugins.popover.length) {
    if (window.innerWidth < 767) {
      plugins.popover.attr('data-placement', 'bottom');
      plugins.popover.popover();
    }
    else {
      plugins.popover.popover();
    }
  }

  /**
   * Bootstrap Buttons
   * @description  Enable Bootstrap Buttons plugin
   */
   if (plugins.statefulButton.length) {
    $(plugins.statefulButton).on('click', function () {
      var statefulButtonLoading = $(this).button('loading');

      setTimeout(function () {
        statefulButtonLoading.button('reset')
      }, 2000);
    })
  }

  /**
   * UI To Top
   * @description Enables ToTop Button
   */
   if (isDesktop && !isNoviBuilder) {
    $().UItoTop({
      easingType: 'easeOutQuart',
      containerClass: 'ui-to-top fa fa-angle-up'
    });
  }

  /**
   * RD Navbar
   * @description Enables RD Navbar plugin
   */

   /*
   * Old Version 
   */
   if (plugins.rdNavbar.length) {
    plugins.rdNavbar.RDNavbar({
      stickUpClone: (plugins.rdNavbar.attr("data-stick-up-clone") && !isNoviBuilder) ? plugins.rdNavbar.attr("data-stick-up-clone") === 'true' : false,
      responsive: {
        0: {
          stickUp: (!isNoviBuilder) ? plugins.rdNavbar.attr("data-stick-up") === 'true' : false
        },
        768: {
          stickUp: (!isNoviBuilder) ? plugins.rdNavbar.attr("data-sm-stick-up") === 'true' : false
        },
        992: {
          stickUp: (!isNoviBuilder) ? plugins.rdNavbar.attr("data-md-stick-up") === 'true' : false
        },
        1200: {
          stickUp: (!isNoviBuilder) ? plugins.rdNavbar.attr("data-lg-stick-up") === 'true' : false
        }
      },
    });
    if (plugins.rdNavbar.attr("data-body-class")) {
      document.body.className += ' ' + plugins.rdNavbar.attr("data-body-class");
    }
  }

  /**
   * ViewPort Universal
   * @description Add class in viewport
   */
   if (plugins.viewAnimate.length) {
    var i;
    for (i = 0; i < plugins.viewAnimate.length; i++) {
      var $view = $(plugins.viewAnimate[i]).not('.active');
      $document.on("scroll", $.proxy(function () {
        if (isScrolledIntoView(this)) {
          this.addClass("active");
        }
      }, $view))
      .trigger("scroll");
    }
  }

  /**
   * Swiper 3.1.7
   * @description  Enable Swiper Slider
   */
   if (plugins.swiper.length) {
    var i;
    for (i = 0; i < plugins.swiper.length; i++) {
      var s = $(plugins.swiper[i]);
      var pag = s.find(".swiper-pagination"),
      next = s.find(".swiper-button-next"),
      prev = s.find(".swiper-button-prev"),
      bar = s.find(".swiper-scrollbar"),
      parallax = s.parents('.rd-parallax').length,
      swiperSlide = s.find(".swiper-slide");

      for (j = 0; j < swiperSlide.length; j++) {
        var $this = $(swiperSlide[j]),
        url;

        if (url = $this.attr("data-slide-bg")) {
          $this.css({
            "background-image": "url(" + url + ")",
            "background-size": "cover"
          })
        }
      }

      swiperSlide.end()
      .find("[data-caption-animate]")
      .addClass("not-animated")
      .end()

      var sliderSwiper = new Swiper(s,{
        autoplay: isNoviBuilder ? null : s.attr('data-autoplay') ? s.attr('data-autoplay') === "false" ? undefined : s.attr('data-autoplay') : 5000,
        direction: s.attr('data-direction') ? s.attr('data-direction') : "horizontal",
        effect: s.attr('data-slide-effect') ? s.attr('data-slide-effect') : "slide",
        speed: s.attr('data-slide-speed') ? s.attr('data-slide-speed') : 600,
        keyboardControl: s.attr('data-keyboard') === "true",
        mousewheelControl: s.attr('data-mousewheel') === "true",
        mousewheelReleaseOnEdges: s.attr('data-mousewheel-release') === "true",
        nextButton: next.length ? next.get(0) : null,
        prevButton: prev.length ? prev.get(0) : null,
        pagination: pag.length ? pag.get(0) : null,
        paginationClickable: pag.length ? pag.attr("data-clickable") !== "false" : false,
        paginationBulletRender: pag.length ? pag.attr("data-index-bullet") === "true" ? function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        } : null : null,
        scrollbar: bar.length ? bar.get(0) : null,
        scrollbarDraggable: bar.length ? bar.attr("data-draggable") !== "false" : true,
        scrollbarHide: bar.length ? bar.attr("data-draggable") === "false" : false,
        loop: isNoviBuilder ? false : s.attr('data-loop') !== "false",
        simulateTouch: s.attr('data-simulate-touch') && !isNoviBuilder ? s.attr('data-simulate-touch') === "true" : false,
        onTransitionStart: function (swiper) {
          toggleSwiperInnerVideos(swiper);
        },
        onTransitionEnd: function (swiper) {
          toggleSwiperCaptionAnimation(swiper);
        },
        onInit: function (swiper) {
          toggleSwiperInnerVideos(swiper);
          toggleSwiperCaptionAnimation(swiper);

          var swiperParalax = s.find(".swiper-parallax");

          for (var k = 0; k < swiperParalax.length; k++) {
            var $this = $(swiperParalax[k]),
            speed;

            if (parallax && !isIEBrows && !isMobile) {
              if (speed = $this.attr("data-speed")) {
                makeParallax($this, speed, s, false);
              }
            }
          }
          $(window).on('resize', function () {
            swiper.update(true);
          })
        }
      });

      var thumbsGallery = $('.gallery-thumbs'),
      galleryThumbs;

      if(thumbsGallery.length) {
        galleryThumbs = new Swiper(thumbsGallery, {
          spaceBetween: 10,
          centeredSlides: true,
          slidesPerView: 'auto',
          touchRatio: 0.2,
          slideToClickedSlide: true,
          loop: false
        });

        sliderSwiper.params.control = galleryThumbs;
        galleryThumbs.params.control = sliderSwiper;
      }

      $(window)
      .on("resize", function () {
        var mh = getSwiperHeight(s, "min-height"),
        h = getSwiperHeight(s, "height");
        if (h) {
          s.css("height", mh ? mh > h ? mh : h : h);
        }
      })
      .trigger("resize");
    }
  }

  /**
   * RD Search
   * @description Enables search
   */
   if (plugins.search.length || plugins.searchResults) {
    var handler = "bat/rd-search.php";
    var defaultTemplate = '<h4 class="search_title"><a target="_top" href="#{href}" class="search_link">#{title}</a></h4>' +
    '<p>...#{token}...</p>' +
    '<p class="match"><em>Terms matched: #{count} - URL: #{href}</em></p>';
    var defaultFilter = '*.html';

    if (plugins.search.length) {

      for (i = 0; i < plugins.search.length; i++) {
        var searchItem = $(plugins.search[i]),
        options = {
          element: searchItem,
          filter: (searchItem.attr('data-search-filter')) ? searchItem.attr('data-search-filter') : defaultFilter,
          template: (searchItem.attr('data-search-template')) ? searchItem.attr('data-search-template') : defaultTemplate,
          live: (searchItem.attr('data-search-live')) ? searchItem.attr('data-search-live') : false,
          liveCount: (searchItem.attr('data-search-live-count')) ? parseInt(searchItem.attr('data-search-live')) : 4,
          current: 0, processed: 0, timer: {}
        };

        if ($('.rd-navbar-search-toggle').length) {
          var toggle = $('.rd-navbar-search-toggle');
          toggle.on('click', function () {
            if (!($(this).hasClass('active'))) {
              searchItem.find('input').val('').trigger('propertychange');
            }
          });
        }

        if (options.live) {
          var clearHandler = false;

          searchItem.find('input').on("keyup input propertychange", $.proxy(function () {
            this.term = this.element.find('input').val().trim();
            this.spin = this.element.find('.input-group-addon');

            clearTimeout(this.timer);

            if (this.term.length > 2) {
              this.timer = setTimeout(liveSearch(this), 200);

              if (clearHandler == false) {
                clearHandler = true;

                $("body").on("click", function (e) {
                  if ($(e.toElement).parents('.rd-search').length == 0) {
                    $('#rd-search-results-live').addClass('cleared').html('');
                  }
                })
              }

            } else if (this.term.length == 0) {
              $('#' + this.live).addClass('cleared').html('');
            }
          }, options, this));
        }

        searchItem.submit($.proxy(function () {
          $('<input />').attr('type', 'hidden')
          .attr('name', "filter")
          .attr('value', this.filter)
          .appendTo(this.element);
          return true;
        }, options, this))
      }
    }

    if (plugins.searchResults.length) {
      var regExp = /\?.*s=([^&]+)\&filter=([^&]+)/g;
      var match = regExp.exec(location.search);

      if (match != null) {
        $.get(handler, {
          s: decodeURI(match[1]),
          dataType: "html",
          filter: match[2],
          template: defaultTemplate,
          live: ''
        }, function (data) {
          plugins.searchResults.html(data);
        })
      }
    }
  }

  /**
   * Owl carousel
   * @description Enables Owl carousel plugin
   */
   if (plugins.owl.length) {
    var i;
    for (i = 0; i < plugins.owl.length; i++) {
      var c = $(plugins.owl[i]),
      responsive = {};

      var aliaces = ["-", "-xs-", "-sm-", "-md-", "-lg-", "-lp-", "-xl-"],
      values = [0, 480, 768, 992, 1200, 1440, 1800],
      j, k;

      for (j = 0; j < values.length; j++) {
        responsive[values[j]] = {};
        for (k = j; k >= -1; k--) {
          if (!responsive[values[j]]["items"] && c.attr("data" + aliaces[k] + "items")) {
            responsive[values[j]]["items"] = k < 0 ? 1 : parseInt(c.attr("data" + aliaces[k] + "items"));
          }
          if (!responsive[values[j]]["stagePadding"] && responsive[values[j]]["stagePadding"] !== 0 && c.attr("data" + aliaces[k] + "stage-padding")) {
            responsive[values[j]]["stagePadding"] = k < 0 ? 0 : parseInt(c.attr("data" + aliaces[k] + "stage-padding"));
          }
          if (!responsive[values[j]]["margin"] && responsive[values[j]]["margin"] !== 0 && c.attr("data" + aliaces[k] + "margin")) {
            responsive[values[j]]["margin"] = k < 0 ? 30 : parseInt(c.attr("data" + aliaces[k] + "margin"));
          }
        }
      }

      c.owlCarousel({
        autoplay: c.attr("data-autoplay") === "true",
        loop: isNoviBuilder ? false : c.attr("data-loop") !== "false",
        items: 1,
        dotsContainer: c.attr("data-pagination-class") || false,
        navContainer: c.attr("data-navigation-class") || false,
        mouseDrag: isNoviBuilder ? false : c.attr("data-mouse-drag") !== "false",
        nav: c.attr("data-nav") === "true",
        dots: c.attr("data-dots") === "true",
        dotsEach: c.attr("data-dots-each") ? parseInt(c.attr("data-dots-each")) : false,
        animateIn: c.attr('data-animation-in') ? c.attr('data-animation-in') : 'slide',
        animateOut: c.attr('data-animation-out') ? c.attr('data-animation-out') : false,
        responsive: responsive,
        navText: []
      });
    }
  }

  /**
   * Isotope
   * @description Enables Isotope plugin
   */
   if (plugins.isotope.length) {
    var i, isogroup = [];
    for (i = 0; i < plugins.isotope.length; i++) {
      var isotopeItem = plugins.isotope[i]
      , iso = new Isotope(isotopeItem, {
        itemSelector: '.isotope-item',
        layoutMode: isotopeItem.getAttribute('data-isotope-layout') ? isotopeItem.getAttribute('data-isotope-layout') : 'masonry',
        filter: '*'
      });

      isogroup.push(iso);
    }

    $(window).on('load', function () {
      setTimeout(function () {
        var i;
        for (i = 0; i < isogroup.length; i++) {
          isogroup[i].element.className += " isotope--loaded";
          isogroup[i].layout();
        }
      }, 600);
    });

    var resizeTimout;

    $("[data-isotope-filter]").on("click", function (e) {
      e.preventDefault();
      var filter = $(this);
      clearTimeout(resizeTimout);
      filter.parents(".isotope-filters").find('.active').removeClass("active");
      filter.addClass("active");
      var iso = $('.isotope[data-isotope-group="' + this.getAttribute("data-isotope-group") + '"]');
      iso.isotope({
        itemSelector: '.isotope-item',
        layoutMode: iso.attr('data-isotope-layout') ? iso.attr('data-isotope-layout') : 'masonry',
        filter: this.getAttribute("data-isotope-filter") == '*' ? '*' : '[data-filter*="' + this.getAttribute("data-isotope-filter") + '"]'
      });
    }).eq(0).trigger("click")
  }

  /**
   * WOW
   * @description Enables Wow animation plugin
   */
   if (isDesktop && $html.hasClass("wow-animation") && $(".wow").length) {
    new WOW().init();
  }

  /**
   * Bootstrap tabs
   * @description Activate Bootstrap Tabs
   */
   if (plugins.bootstrapTabs.length) {
    var i;
    for (i = 0; i < plugins.bootstrapTabs.length; i++) {
      var bootstrapTabsItem = $(plugins.bootstrapTabs[i]);

      //If have owl carousel inside tab - resize owl carousel on click
      if (bootstrapTabsItem.find('.owl-carousel').length) {
        // init first open tab
        var carouselObj = bootstrapTabsItem.find('.tab-content .tab-pane.active .owl-carousel');
        var setTimeOutTime = isNoviBuilder ? 1500 : 300;
        initOwlCarousel(carouselObj);

        //init owl carousel on tab change
        bootstrapTabsItem.find('.tabs-custom-list > li > a').on('click', $.proxy(function () {
          var $this = $(this);

          setTimeout(function () {
            var carouselObj = $this.find('.tab-content .tab-pane.active .owl-carousel').not('.owl-initialised');

            if (carouselObj.length) {
              for (var j = 0; j < carouselObj.length; j++) {
                var carouselItem = $(carouselObj[j]);
                initOwlCarousel(carouselItem);
                carouselItem.addClass('owl-initialised');
              }
            }
          }, setTimeOutTime);

        }, bootstrapTabsItem));
      }

      //If have slick carousel inside tab - resize slick carousel on click
      if (bootstrapTabsItem.find('.slick-slider').length) {
        bootstrapTabsItem.find('.tabs-custom-list > li > a').on('click', $.proxy(function () {
          var $this = $(this);
          var setTimeOutTime = isNoviBuilder ? 1500 : 300;

          setTimeout(function () {
            $this.find('.tab-content .tab-pane.active .slick-slider').slick('setPosition');
          }, setTimeOutTime);
        }, bootstrapTabsItem));
      }
    }
  }

  /**
   * RD Input Label
   * @description Enables RD Input Label Plugin
   */
   if (plugins.rdInputLabel.length) {
    plugins.rdInputLabel.RDInputLabel();
  }

  /**
   * Regula
   * @description Enables Regula plugin
   */
   if (plugins.regula.length) {
    attachFormValidator(plugins.regula);
  }


  /**
   * RD Mailform
   */
   if (plugins.rdMailForm.length) {
    var i, j, k,
    msg = {
      'MF000': 'Successfully sent!',
      'MF001': 'Recipients are not set!',
      'MF002': 'Form will not work locally!',
      'MF003': 'Please, define email field in your form!',
      'MF004': 'Please, define type of your form!',
      'MF254': 'Something went wrong with PHPMailer!',
      'MF255': 'Aw, snap! Something went wrong.'
    };

    for (i = 0; i < plugins.rdMailForm.length; i++) {
      var $form = $(plugins.rdMailForm[i]);

      $form.attr('novalidate', 'novalidate').ajaxForm({
        data: {
          "form-type": $form.attr("data-form-type") || "contact",
          "counter": i
        },
        beforeSubmit: function () {
          if (!isNoviBuilder) {
            var form = $(plugins.rdMailForm[this.extraData.counter]);
            var inputs = form.find("[data-constraints]");
            if (isValidated(inputs)) {
              var output = $("#" + form.attr("data-form-output"));

              if (output.hasClass("snackbars")) {
                output.html('<p><span class="icon text-middle fa fa-circle-o-notch fa-spin icon-xxs"></span><span>Sending</span></p>');
                output.addClass("active");
              }
            } else {
              return false;
            }
          }
        },
        error: function (result) {
          if (!isNoviBuilder) {
            var output = $("#" + $(plugins.rdMailForm[this.extraData.counter]).attr("data-form-output"));
            output.text(msg[result]);
          }
        },
        success: function (result) {
          if (!isNoviBuilder) {
            var form = $(plugins.rdMailForm[this.extraData.counter]),
            output = $("#" + form.attr("data-form-output")),
            $select = form.find('select');

            // Clear select2 after submit form
            if ($select.length) {
              for (j = 0; j < $select.length; j++) {
                var $selectitem = $($select[j]);
                $selectitem.select2('val', null);
              }
            }

            form.addClass('success');
            result = result.length == 5 ? result : 'MF255';
            output.text(msg[result]);

            if (result === "MF000") {
              if (output.hasClass("snackbars")) {
                output.html('<p><span class="icon text-middle fa-check icon-xxs"></span><span>' + msg[result] + '</span></p>');
              }
              output.addClass("success active");
            } else {
              if (output.hasClass("snackbars")) {
                output.html(' <p class="snackbars-left"><span class="icon icon-xxs fa-exclamation-triangle text-middle"></span><span>' + msg[result] + '</span></p>');
              }
              output.addClass("error active");
            }

            form.clearForm();
            form.find('input, textarea').blur();

            setTimeout(function () {
              output.removeClass("active error success");
              form.removeClass('success');
            }, 5000);
          }
        }
      });
    }
  }

  /**
   * PhotoSwipe Gallery
   * @description Enables PhotoSwipe Gallery plugin
   */
   if (plugins.photoSwipeGallery.length && !isNoviBuilder) {

    // init image click event
    $document.delegate("[data-photo-swipe-item]", "click", function (event) {
      event.preventDefault();

      var $el = $(this),
      $galleryItems = $el.parents("[data-photo-swipe-gallery]").find("a[data-photo-swipe-item]"),
      pswpElement = document.querySelectorAll('.pswp')[0],
      encounteredItems = {},
      pswpItems = [],
      options,
      pswpIndex = 0,
      pswp;

      if ($galleryItems.length == 0) {
        $galleryItems = $el;
      }

      // loop over the gallery to build up the photoswipe items
      $galleryItems.each(function () {
        var $item = $(this),
        src = $item.attr('href'),
        size = $item.attr('data-size').split('x'),
        pswdItem;

        if ($item.is(':visible')) {

          // if we have this image the first time
          if (!encounteredItems[src]) {
            // build the photoswipe item
            pswdItem = {
              src: src,
              w: parseInt(size[0], 10),
              h: parseInt(size[1], 10),
              el: $item // save link to element for getThumbBoundsFn
            };

            // store that we already had this item
            encounteredItems[src] = {
              item: pswdItem,
              index: pswpIndex
            };

            // push the item to the photoswipe list
            pswpItems.push(pswdItem);
            pswpIndex++;
          }
        }
      });

      options = {
        index: encounteredItems[$el.attr('href')].index,

        getThumbBoundsFn: function (index) {
          var $el = pswpItems[index].el,
          offset = $el.offset();

          return {
            x: offset.left,
            y: offset.top,
            w: $el.width()
          };
        }
      };

      // open the photoswipe gallery
      pswp = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, pswpItems, options);
      pswp.init();
    });
  }

  /**
   * Custom Toggles
   */
   if (plugins.customToggle.length) {
    var i;
    for (i = 0; i < plugins.customToggle.length; i++) {
      var $this = $(plugins.customToggle[i]);
      $this.on('click', function (e) {
        e.preventDefault();
        $("#" + $(this).attr('data-custom-toggle')).add(this).toggleClass('active');
      });

      if ($this.attr("data-custom-toggle-disable-on-blur") === "true") {
        $("body").on("click", $this, function (e) {
          if (e.target !== e.data[0] && $("#" + e.data.attr('data-custom-toggle')).find($(e.target)).length == 0 && e.data.find($(e.target)).length == 0) {
            $("#" + e.data.attr('data-custom-toggle')).add(e.data[0]).removeClass('active');
          }
        })
      }
    }
  }

  /**
   * jQuery Count To
   * @description Enables Count To plugin
   */
   if (plugins.counter.length) {
    var i;
    for (i = 0; i < plugins.counter.length; i++) {
      var counterItem = $(plugins.counter[i]);

      $window.on("scroll load", $.proxy(function () {
        var counter = $(this);
        if ((!counter.hasClass("animated-first")) && (isScrolledIntoView(counter))) {
          counter.countTo({
            refreshInterval: 40,
            speed: counter.attr("data-speed") || 1000
          });
          counter.addClass('animated-first');
        }
      }, counterItem))
    }
  }

  /**
   * TimeCircles
   * @description  Enable TimeCircles plugin
   */
   if (plugins.dateCountdown.length) {
    var i;
    for (i = 0; i < plugins.dateCountdown.length; i++) {
      var dateCountdownItem = $(plugins.dateCountdown[i]),
      time = {
        "Days": {
          "text": "Days",
          "color": "#be996f",
          "show": true
        },
        "Hours": {
          "text": "Hours",
          "color": "#be996f",
          "show": true
        },
        "Minutes": {
          "text": "Minutes",
          "color": "#be996f",
          "show": true
        },
        "Seconds": {
          "text": "Seconds",
          "color": "#be996f",
          "show": true
        }
      };
      dateCountdownItem.TimeCircles({
        fg_width: 0.025,
        circle_bg_color: "#47484a",
        bg_width: 0.4
      });
      $(window).on('load resize orientationchange', function () {
        if (window.innerWidth < 479) {
          dateCountdownItem.TimeCircles({
            time: {
              "Days": {
                "text": "Days",
                "color": "#be996f",
                "show": true
              },
              "Hours": {
                "text": "Hours",
                "color": "#be996f",
                "show": true
              },
              "Minutes": {
                "text": "Minutes",
                "color": "#be996f",
                "show": true
              },
              "Seconds": {
                "show": false
              }
            }
          }).rebuild();
        } else if (window.innerWidth < 767) {
          dateCountdownItem.TimeCircles({
            time: {
              "Days": {
                "text": "Days",
                "color": "#be996f",
                "show": true
              },
              "Hours": {
                "text": "Hours",
                "color": "#be996f",
                "show": true
              },
              "Minutes": {
                "text": "Minutes",
                "color": "#be996f",
                "show": true
              },
              "Seconds": {
                "show": false
              }
            }
          }).rebuild();
        } else {
          dateCountdownItem.TimeCircles({time: time}).rebuild({
            time: {
              "Days": {
                "text": "Days",
                "color": "#be996f",
                "show": true
              },
              "Hours": {
                "text": "Hours",
                "color": "#be996f",
                "show": true
              },
              "Minutes": {
                "text": "Minutes",
                "color": "#be996f",
                "show": true
              },
              "Seconds": {
                "show": false
              }
            }
          });
        }
      });
    }
  }

  /**
   * Progress bar
   * @description  Enable progress bar
   */
   if (plugins.progressBar.length) {
    for (i = 0; i < plugins.progressBar.length; i++) {
      var progressBar = $(plugins.progressBar[i]);
      $window
      .on("scroll load", $.proxy(function () {
        var bar = $(this);
        if (!bar.hasClass('animated-first') && isScrolledIntoView(bar)) {
          var end = bar.attr("data-to");
          bar.find('.progress-bar-linear').css({width: end + '%'});
          bar.find('.progress-value').countTo({
            refreshInterval: 40,
            from: 0,
            to: end,
            speed: 500
          });
          bar.addClass('animated-first');
        }
      }, progressBar));
    }
  }


  /**
   * Circle Progress
   * @description Enable Circle Progress plugin
   */
   if (plugins.circleProgress.length) {
    var i;
    for (i = 0; i < plugins.circleProgress.length; i++) {
      var circleProgressItem = $(plugins.circleProgress[i]);
      $document
      .on("scroll", function () {
        if (!circleProgressItem.hasClass('animated')) {

          var arrayGradients = circleProgressItem.attr('data-gradient').split(",");

          circleProgressItem.circleProgress({
            value: circleProgressItem.attr('data-value'),
            size: circleProgressItem.attr('data-size') ? circleProgressItem.attr('data-size') : 175,
            fill: {gradient: arrayGradients, gradientAngle: Math.PI / 4},
            startAngle: -Math.PI / 4 * 2,
            emptyFill: $(this).attr('data-empty-fill') ? $(this).attr('data-empty-fill') : "rgb(245,245,245)"

          }).on('circle-animation-progress', function (event, progress, stepValue) {
            $(this).find('span').text(String(stepValue.toFixed(2)).replace('0.', '').replace('1.', '1'));
          });
          circleProgressItem.addClass('animated');
        }
      })
      .trigger("scroll");
    }
  }

  /**
   * Stacktable
   * @description Enables Stacktable plugin
   */
   if (plugins.stacktable.length) {
    var i;
    for (i = 0; i < plugins.stacktable.length; i++) {
      var stacktableItem = $(plugins.stacktable[i]);
      stacktableItem.stacktable();
    }
  }


  /**
   * RD Calendar
   * @description Enables RD Calendar plugin
   */
   if (plugins.calendar.length) {
    for (i = 0; i < plugins.calendar.length; i++) {
      var calendarItem = $(plugins.calendar[i]);

      calendarItem.rdCalendar({
        days: calendarItem.attr("data-days") ? c.attr("data-days").split(/\s?,\s?/i) : ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        month: calendarItem.attr("data-months") ? c.attr("data-months").split(/\s?,\s?/i) : ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
      });
    }
  }

  /**
   * Enable witter standard  plugin
   */
  //  if (plugins.twitterWidget.length) {
  //   lazyInit(plugins.twitterWidget, function () {
  //     window.twttr = (function (d, s, id) {
  //       var t, js, fjs = d.getElementsByTagName(s)[0];
  //       if (d.getElementById(id)) return;
  //       js = d.createElement(s);
  //       js.id = id;
  //       js.src = "https://platform.twitter.com/widgets.js";
  //       fjs.parentNode.insertBefore(js, fjs);
  //       return window.twttr || (t = {
  //         _e: [],
  //         ready: function (f) {
  //           t._e.push(f)
  //         }
  //       });
  //     }(document, "script", "twitter-wjs"));
  //   });
  // }



   /**
   * RD Twitter Feed
   * @description Enables RD Twitter Feed plugin
   */
  if (plugins.twitterfeed.length > 0) {
    var i;
    for (i = 0; i < plugins.twitterfeed.length; i++) {
      var twitterfeedItem = plugins.twitterfeed[i];
      $(twitterfeedItem).RDTwitter({});
    }
  }

  /**
   * Stepper
   * @description Enables Stepper Plugin
   */
   if (plugins.stepper.length) {
    plugins.stepper.stepper({
      labels: {
        up: "",
        down: ""
      }
    });
  }

  /**
   * RD Flickr Feed
   * @description Enables RD Flickr Feed plugin
   */
   if (plugins.flickrfeed.length > 0) {
    var i;
    for (i = 0; i < plugins.flickrfeed.length; i++) {
      var flickrfeedItem = $(plugins.flickrfeed[i]);
      flickrfeedItem.RDFlickr({
        callback: function () {
          var items = flickrfeedItem.find("[data-photo-swipe-item]");

          if (items.length) {
            for (var j = 0; j < items.length; j++) {
              var image = new Image();
              image.setAttribute('data-index', j);
              image.onload = function () {
                items[this.getAttribute('data-index')].setAttribute('data-size', this.naturalWidth + 'x' + this.naturalHeight);
              };
              image.src = items[j].getAttribute('href');
            }
          }
        }
      });
    }
  }

  /**
   * Gel Custom Scroll
   * @description Enables Gel Custom Scroll
   */

   $("#menu").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top - 46}, 800);
  });


  /**
   * RD Parallax
   * @description Enables RD Parallax plugin
   */
   if (plugins.rdParallax.length && !isMobile) {
    var i;
    $.RDParallax();

    if (isNoviBuilder) {
      for (i = 0; i < plugins.rdParallax.length; i++) {
        var parallax = $(plugins.rdParallax[i]);
        var imgPath = parallax.find(".rd-parallax-layer" + "[data-type=media]").first().attr("data-url");
        parallax.css({
          "background-image": 'url(' + imgPath + ')',
          "background-attachment": "fixed",
          "background-size": "cover"
        });
      }
    }


    if (!isIE && !isMobile && !isNoviBuilder) {
      $(window).on("scroll", function () {
        for (i = 0; i < plugins.rdParallax.length; i++) {
          var parallax = $(plugins.rdParallax[i]);
          if (isScrolledIntoView(parallax)) {
            parallax.find(".rd-parallax-inner").css("position", "fixed");
          } else {
            parallax.find(".rd-parallax-inner").css("position", "absolute");
          }
        }
      });
    }


    $("a[href='#'], a[href^='#']").on("click", function (event) {
      setTimeout(function () {
        $(window).trigger("resize");
      }, 300);
    });
  }


    if($('#featured-posts').length){
        $.get( "http://fsrpeople.com/blog/wp-json/wp/v2/posts?per_page=3", function( data ) {

            // console.log(data);

            var articleHtml = '';

            for(var i = 0; i < data.length; i++) {
                // console.log(data[i].title.rendered);

                if(i !== 0){
                    var articleClass = 'offset-top-60 offset-md-top-0';
                } else {
                    var articleClass = '';
                }

                 var newDate = moment(data[i].date).startOf('day').fromNow();


                articleHtml += '<article class="post post-masonry cell-md-4 post-masonry-variant-1 '+articleClass+'">'+
                                '<div class="post-wrap">'+
                                    
                                    '<a href="' + data[i].link + '">'+
                                        '<span class="aspect-ratio-img" style="background-image: url('+ data[i].better_featured_image.media_details.sizes.large.source_url +');"></span>'+
                                    '</a>'+

                                    '<div class="post-body">'+
                                        '<div class="post-meta">'+
                                            '<ul class="list-inline list-inline-lg">'+
                                              '<li>'+
                                                '<span class="text-middle icon text-primary mdi mdi-calendar"></span>'+
                                                '<span class="text-middle">'+
                                                    newDate +
                                                '</span>'+
                                              '</li>'+
                               
                                            '</ul>'+
                                          '</div>'+

                                        '<h4 class="text-bold inset-lg-right-15">'+
                                            '<a href="'+ data[i].link +'">'+
                                                data[i].title.rendered +
                                            '</a>'+
                                        '</h4>'+

                                        '<div class="inset-lg-right-30">'+
                                            data[i].excerpt.rendered +
                                        '</div>'+

                                    '</div>'+

                                '</div>'+
                        '</article>';


            }
                $('#featured-posts').append(articleHtml);


        }, "json" );
    }


    if($('#footer-posts-get').length){
        $.get( "http://fsrpeople.com/blog/wp-json/wp/v2/posts?per_page=3", function( data ) {

            // console.log(data);

            var articlePreviewHtml = '';

            for(var i = 0; i < data.length; i++) {
                // console.log(data[i].title.rendered);
                var newPreviewData = moment(data[i].date).startOf('day').fromNow(); 

                articlePreviewHtml += '<div class="post-mini unit unit-middle unit-horizontal post-widget unit-xs-top">'+
                                '<div class="unit-left">'+
                                    '<img src="'+ data[i].better_featured_image.media_details.sizes.thumbnail.source_url +'" width="160" height="120" alt="" class="img-responsive">'+
                                '</div>'+
                                '<div class="unit-body">'+
                                    '<div class="post-meta">'+
                                        '<span class="text-middle icon icon-sm-size-1 mdi mdi-calendar text-silver"></span>'+
                                        '<time datetime="2016-04-30" class="text-middle post-meta-time text-italic reveal-inline">'+
                                            newPreviewData +
                                        '</time>'+
                                    '</div>'+
                                    '<h6 class="text-bold">'+
                                        '<a href="'+ data[i].link +'">'+
                                            data[i].title.rendered +
                                        '</a>'+
                                    '</h6>'+
                                '</div>'+
                            '</div>';


            }
                $('#footer-posts-get').append(articlePreviewHtml);


        }, "json" );
    }




});

