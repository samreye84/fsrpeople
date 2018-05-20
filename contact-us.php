<!DOCTYPE html>
<?php $page = 'contact-us'; require_once('includes/common.php'); ?>
<html lang="en" class="wow-animation">
  <head>
    <!-- Site Title-->
    <title>Contact Us</title>
    <meta name="format-detection" content="telephone=no">
    <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta charset="utf-8">
    <link rel="icon" href="images/favicon.ico" type="image/x-icon">
    <!-- Stylesheets-->
    <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Montserrat:400,700%7CMerriweather:300,400,400i,700,700i%7CLato:400,400i,700,900">
    <link rel="stylesheet" href="css/style.css">
		<!--[if lt IE 10]>
    <div style="background: #212121; padding: 10px 0; box-shadow: 3px 3px 5px 0 rgba(0,0,0,.3); clear: both; text-align:center; position: relative; z-index:1;"><a href="http://windows.microsoft.com/en-US/internet-explorer/"><img src="images/ie8-panel/warning_bar_0000_us.jpg" border="0" height="42" width="820" alt="You are using an outdated browser. For a faster, safer browsing experience, upgrade for free today."></a></div>
    <script src="js/html5shiv.min.js"></script>
		<![endif]-->
        <style>
.section-height-800.breadcrumb-modern.context-dark.text-center.breadcrumbs-center {
    background-image: url(images/backgrounds/FSR_Contact_Banner.jpg);
    background-position: 0 -408px;
}
</style>
        
  <!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-113036929-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-113036929-1');
</script> 
</head>
  <body>
    <!-- Page-->
    <div class="page text-justify">
      <!-- Page Head-->
      <header class="page-header slider-menu-position">
              <!-- RD Navbar Transparent-->
              <?php echo $header; ?>
        <!-- Modern Breadcrumbs-->
        <div class="section-height-800 breadcrumb-modern context-dark text-center breadcrumbs-center">
          <div class="shell section-bottom-30">
            <div class="veil reveal-md-block">
              <h1 class="text-bold">Contact Us</h1>
            </div>
            <ul class="list-inline list-inline-with-arrows p">
              <li><a href="index.html" class="text-white">Home</a></li>
              <li>Contact Us
              </li>
            </ul>
          </div>
        </div>
      </header>
      <!-- Get in Touch-->
      <section>
        <div class="range range-condensed">
          <div class="cell-xl-12">
            <div class="shell-fluid section-90 section-md-top-120 section-md-bottom-111">
              <div class="range range-xs-center range-md-left text-md-left">
                <div class="cell-xs-10 cell-sm-8 cell-md-8">
                  <h2 class="header-preffix text-bold">Get in Touch</h2>
                  <div class="inset-lg-left-30 inset-xl-left-110 inset-lg-right-30">
                    <p>Please feel free to inquire about new opportunities to work with us or join our team. FSR is always looking for new partnerships and talent. We hope to hear from you soon!</p>
                    <!-- RD Mailform-->
                    <form data-form-output="form-output-global" data-form-type="contact" method="post" action="bat/rd-mailform.php" class="range rd-mailform text-left">
                      <div class="cell-md-6">
                        <div class="form-group">
                          <label for="contact-name" class="form-label form-label-outside">First Name</label>
                          <input id="contact-name" type="text" name="name" data-constraints="@Required" class="form-control">
                        </div>
                      </div>
                      <div class="cell-md-6 offset-top-20 offset-md-top-5">
                        <div class="form-group">
                          <label for="contact-last-name" class="form-label form-label-outside">Last Name</label>
                          <input id="contact-last-name" type="text" name="lastname" data-constraints="@Required" class="form-control">
                        </div>
                      </div>
                      <div class="cell-md-6 offset-top-20 offset-md-top-5">
                        <div class="form-group">
                          <label for="contact-email1" class="form-label form-label-outside">E-Mail</label>
                          <input id="contact-email1" type="email" name="email" data-constraints="@Email @Required" class="form-control">
                        </div>
                      </div>
                      <div class="cell-md-6 offset-top-20 offset-md-top-5">
                        <div class="form-group">
                          <label for="contact-phone" class="form-label form-label-outside">Phone</label>
                          <input id="contact-phone" type="text" name="phone" data-constraints="@Required @IsNumeric" class="form-control">
                        </div>
                      </div>
                      <div class="cell-md-12 offset-top-20 offset-md-top-5">
                        <div class="form-group">
                          <label for="contact-message" class="form-label form-label-outside">Message</label>
                          <textarea id="contact-message" name="message" data-constraints="@Required" class="form-control"></textarea>
                        </div>
                      </div>
                      <div class="cell-md-12 offset-top-20">
                        <button type="submit" class="btn btn-primary">Send</button>
                      </div>
                    </form>
                  </div>
                </div>
                <div class="cell-xs-10 cell-sm-8 cell-md-4 offset-top-60 offset-md-top-0 text-left">
                  <h6 class="text-bold">Social</h6>
                  <hr class="divider">
                  <ul class="list-inline">
                    <li><a href="https://www.facebook.com/FSRpeople" class="icon icon-gray-light icon-circle fa fa-facebook"></a></li>
                    <li><a href="https://twitter.com/FSRpeople" class="icon icon-gray-light icon-circle fa fa-twitter"></a></li>
                    <li><a href="https://www.linkedin.com/company/federal-staffing-resources" class="icon icon-gray-light icon-circle fa fa-linkedin"></a></li>
<li><a href="https://www.instagram.com/FSRpeople/" class="icon icon-gray-light icon-circle fa fa-instagram"></a></li>                    
                    
                  </ul>
                  <h6 class="offset-top-60 text-bold">Phone Numbers</h6>
                  <hr class="divider">
                  <div class="unit unit-xl-horizontal unit-lg-horizontal unit-md-horizontal unit-sm-horizontal unit-xs-horizontal unit-spacing-xs">
                    <div class="unit-left"><span class="icon icon-sm-size-1 mdi mdi-phone text-matrix"></span></div>
                    <div class="unit-body"><a href="calltp:18668862300" class="text-gray-light">1-866-886-2300</a><br>
                    <a href="callto:14109900795" class="text-gray-light">410-990-0795</a><br>

                  </div>
                  </div>
                  <h6 class="offset-top-60 text-bold">Address</h6>
                  <hr class="divider"> 
                  <div class="unit unit-xl-horizontal unit-lg-horizontal unit-md-horizontal unit-sm-horizontal unit-xs-horizontal unit-spacing-xs">
                    <div class="unit-left"><span class="icon icon-sm-size-1 mdi mdi-map-marker text-matrix"></span></div>
                    <div class="unit-body">
                      <address><a href="contacts.html" class="text-gray-light">2200 Somerville Road, Suite 300 Annapolis, MD 21401</a></address>
                    </div>
                  </div>
                  <h6 class="offset-top-60 text-bold">E-mail</h6>
                  <hr class="divider">
                  <div class="unit unit-xl-horizontal unit-lg-horizontal unit-md-horizontal unit-sm-horizontal unit-xs-horizontal unit-spacing-xs">
                    <div class="unit-left"><span class="icon icon-sm-size-1 mdi mdi-email-outline text-matrix"></span></div>
                    <div class="unit-body"><a href="mailto:fsrpoc@fsrpeople.com" class="text-gray-light"> fsrpoc@fsrpeople.com</a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="cell-xl-12">
            <!-- RD Google Map-->
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3101.4149025811444!2d-76.54124458464715!3d38.98302617955754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7f6d0238dad7d%3A0x8153e74266263905!2s2200+Somerville+Rd+%23300%2C+Annapolis%2C+MD+21401!5e0!3m2!1sen!2sus!4v1497905161878" width="100%" height="350px" frameborder="0" style="border:0" allowfullscreen=""></iframe>
          </div>
        </div>
      </section>
      <!-- Page Footer-->
      <?php echo $footer ?>
    </div>
    <!-- Global Mailform Output-->
    <div id="form-output-global" class="snackbars"></div>
    <!-- PhotoSwipe Gallery-->
    <div tabindex="-1" role="dialog" aria-hidden="true" class="pswp">
      <div class="pswp__bg"></div>
      <div class="pswp__scroll-wrap">
        <div class="pswp__container">
          <div class="pswp__item"></div>
          <div class="pswp__item"></div>
          <div class="pswp__item"></div>
        </div>
        <div class="pswp__ui pswp__ui--hidden">
          <div class="pswp__top-bar">
            <div class="pswp__counter"></div>
            <button title="Close (Esc)" class="pswp__button pswp__button--close"></button>
            <button title="Share" class="pswp__button pswp__button--share"></button>
            <button title="Toggle fullscreen" class="pswp__button pswp__button--fs"></button>
            <button title="Zoom in/out" class="pswp__button pswp__button--zoom"></button>
            <div class="pswp__preloader">
              <div class="pswp__preloader__icn">
                <div class="pswp__preloader__cut">
                  <div class="pswp__preloader__donut"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
            <div class="pswp__share-tooltip"></div>
          </div>
          <button title="Previous (arrow left)" class="pswp__button pswp__button--arrow--left"></button>
          <button title="Next (arrow right)" class="pswp__button pswp__button--arrow--right"></button>
          <div class="pswp__caption">
            <div class="pswp__caption__cent"></div>
          </div>
        </div>
      </div>
    </div>
    <!-- Java script-->
    <script src="js/core.min.js"></script>
    <script src="js/script.js"></script>
  </body>
</html>