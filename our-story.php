<!DOCTYPE html>
<?php $page = 'about-us'; require_once('includes/common.php'); ?>
<html lang="en" class="wow-animation">
  <head>
    <!-- Site Title-->
    <title>Our Story</title>
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
        <div class="section-height-800 breadcrumb-modern bg-story-2 context-dark text-center breadcrumbs-center">
          <div class="shell section-bottom-30">
            <div class="veil reveal-md-block">
              <h1 class="text-bold">Our Story</h1>
            </div>
            <ul class="list-inline list-inline-with-arrows p">
              <li><a href="index.php" class="text-white">Home</a></li>
              <li>About Us</li>
              <li>Our Story
              </li>
            </ul>
          </div>
        </div>
      </header>
      <!-- 4 Colunms Layout-->

      <section class="section-60">
        <div class="shell-fluid">
          <div class="range range-xs-center range-md-left text-left">
            <div class="cell-xs-10 cell-sm-8 cell-md-6 cell-lg-5">
              <h2 class="header-preffix text-bold">Our Story</h2>
              <div class="inset-md-left-36 inset-xl-left-110 offset-top-20">
                <p>FSR is an award winning human resources and workforce solutions company that serves clients in both the public and private sector nationwide. We believe that <span class="focus-bold-italic">anyone can fill a job, but it takes talent to make a team!</span> So, we focus on matching talented individuals to organizations to create mutually beneficial, sustainable partnerships.  </p>
                <h5>The 4 Cs of FSR's Success</h5>
                <p class="offset-top-15">When you are seeking new talent, it is critical that the people you are considering are well matched for your organization’s mission, culture, and values.  To accomplish this goal, we have established a process that incorporates the 4 Cs of Success. With over a decade of experience, we know that assessing our talent for these factors is critical to finding the perfect match!</p>
                  <ul class="list list-marked text-matrix offset-top-15">
                    <li>Competency</li>
                    <li>Capabilities</li>
                    <li>Chemistry</li>
                    <li>Company Cultural Compatibility</li>
                  </ul>
                  <p class="offset-top-15">By evaluating these factors, we are able to achieve our mission of dedication to the success of people and building relationships that last a lifetime. </p>
              </div>
            </div>
            <div class="cell-xs-10 cell-sm-8 cell-md-6 cell-lg-preffix-1">
              <h5>Values Are Part of Our Success</h5>
              <ul class="list list-marked text-matrix offset-top-15">
                <li>Honesty and integrity are the foundation of our daily actions and business practices.</li>
                <li>We are committed to creating and maintaining mutually beneficial relationships with our business partners and our employees.</li>
                <li>We believe that each organization's culture is unique and contributes to the success and happiness of its employees and the organization itself.</li>
                <li>We strive to be a good steward of resources by making sound financial decisions and focusing on the bottom line.</li>
              </ul>
              <h5 class="offset-top-15">The FSR Difference is Clear</h5>
              <ul class="list list-marked text-matrix offset-top-15">
                <li>We are a people solutions company committed to the success of our clients’ mission.</li>
                <li>We are guided by honesty and integrity.</li>
                <li>We use uncompromising quality standards and methodologies.</li>
                <li>We follow the rules and are compliant with government regulations.</li>
                <li>We build upon the relationships we create today to last long into the future.</li>
              </ul>
            </div>
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