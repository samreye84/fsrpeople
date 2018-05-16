<!DOCTYPE html>
<?php $page = 'clients'; require_once('includes/common.php'); ?>
<html lang="en" class="wow-animation">
  <head>
    <!-- Site Title-->
    <title>Clients</title>
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
  </head>
  <body>
    <!-- Page-->
    <div class="page text-center">
      <!-- Page Head-->
      <header class="page-header slider-menu-position">
              <!-- RD Navbar Transparent-->
               <?php echo $header; ?>
        <!-- Modern Breadcrumbs-->
        <div class="section-height-800 breadcrumb-modern bg-client context-dark text-center breadcrumbs-center">
          <div class="shell section-bottom-30">
            <div class="veil reveal-md-block">
              <h1 class="text-bold">Clients</h1>
            </div>
            <ul class="list-inline list-inline-with-arrows p">
              <li><a href="index.php" class="text-white">Home</a></li>
              <li>Clients</li>
              <li>Clients
              </li>
            </ul>
          </div>
        </div>
      </header>
      <!-- 4 Colunms Layout-->

 <section class="section-90 section-md-top-120 section-md-bottom-111">
        <div class="shell">
          <div class="range range-xs-center">
            <div class="cell-sm-10 cell-lg-8">
              <div>
                <h2 class="text-bold">I, JordanTurner, Will Make<br class="veil reveal-md-inline-block">You Proud of Yourself!</h2>
              </div>
              <div class="offset-top-30">
                <p>Believe me, just as tens of thousands of people who've already attended my motivational speaking events!</p>
              </div>
            </div>
          </div>
          <div class="offset-top-60">
            <div class="isotope-wrap">
              <div class="row">
                <!-- Isotope Filters-->
                <div class="col-lg-3">
                  <div class="isotope-filters isotope-filters-vertical">
                    <h4 class="text-uppercase isotope-filters-title offset-top-34"> </h4>
                    <ul class="list-inline list-inline-sm">
                      <li class="veil-md">
                        <p>Choose your category:</p>
                      </li>
                      <li class="section-relative">
                        <button data-custom-toggle="isotope-1" data-custom-toggle-disable-on-blur="true" class="isotope-filters-toggle btn btn-sm btn-default">Filter<span class="caret"></span></button>
                        <ul id="isotope-1" class="list-sm-inline isotope-filters-list">
                          <li><a data-isotope-filter="Books" data-isotope-group="gallery" href="#" class="active">Books</a></li>
                          <li><a data-isotope-filter="1-on-1 Coaching" data-isotope-group="gallery" href="#">1-on-1 Coaching</a></li>
                          <li><a data-isotope-filter="Events" data-isotope-group="gallery" href="#">Events</a></li>
                          <li><a data-isotope-filter="Podcasts &amp; Audio" data-isotope-group="gallery" href="#">Podcasts &amp; Audio</a></li>
                          <li><a data-isotope-filter="Personal Development Articles" data-isotope-group="gallery" href="#">Personal Development Articles</a></li>
                          <li><a data-isotope-filter="Business Coaching" data-isotope-group="gallery" href="#">Business Coaching</a></li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
                <!-- Isotope Content-->
                <div class="col-lg-9 offset-lg-top-0 offset-top-34">
                  <div data-isotope-layout="fitRows" data-isotope-group="gallery" class="isotope">
                    <div class="row text-sm-left">
                      <div data-filter="Books" class="col-md-12 isotope-item"><img src="images/pages/coaching-1-870x280.jpg" width="870" height="280" alt="" class="img-responsive"/>
                        <h4 class="offset-top-30 text-bold">Books</h4>
                        <p class="offset-md-top-20">Being a highly acclaimed life motivational speaker for over a decade, Mike has more than 12 books already under his belt and he's working on 2 more as of now!</p>
                        <p>These include books on organizing a perfect life/work balance, some family relationships advice notes, books on marriage and love, just as well as a collection of life philosophy and ethics, developed and popularized by Mr. Turner!</p><a href="contacts.html" class="btn btn-circle btn-matrix offset-top-15">books</a>
                      </div>
                      <div data-filter="1-on-1 Coaching" class="col-md-12 isotope-item"><img src="images/pages/coaching-2-870x280.jpg" width="870" height="280" alt="" class="img-responsive"/>
                        <h4 class="offset-top-30 text-bold">1-on-1 Coaching</h4>
                        <p class="offset-md-top-20">This type of coaching proved to be not just the most effective one, but also the most popular! No wonder that due to a lot of bookings, there's currently a waiting list in order to get to the meeting...</p>
                        <p>Despite that fact, I always try to free up as much of my own personal time as possible, just to have an opportunity to sit down with one more listener, who's ready to get his life changed for good!</p><a href="contacts.html" class="btn btn-circle btn-matrix offset-top-15">get in touch</a>
                      </div>
                      <div data-filter="Events" class="col-md-12 isotope-item"><img src="images/pages/coaching-3-870x280.jpg" width="870" height="280" alt="" class="img-responsive"/>
                        <h4 class="offset-top-30 text-bold">Events</h4>
                        <p class="offset-md-top-20">Yearly Jordan goes out to an average of 100 speaking events! That's an average of 1 every 3 days, each accommodating more than 5000 people! Thousands of people cannot be wrong!</p>
                        <p>The fact that my events get overbooked regardless of which state does the event occurs in says it all! People just know from their personal experience or from the recommendations of their friends, colleagues or relatives, that my life coaching works and motivates to be and achieve more!</p><a href="contacts.html" class="btn btn-circle btn-matrix offset-top-15">get in touch</a>
                      </div>
                      <div data-filter="Podcasts &amp; Audio" class="col-md-12 isotope-item">
                        <div class="soundcloud-player-classic">
                          <iframe height="166" width="100" src="//w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/149065581&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>
                        </div>
                        <h4 class="offset-top-30 text-bold">Podcasts & Audio Books</h4>
                        <p class="offset-md-top-20">All of Jordan’s speaking events, just as well as his audio books and exclusive podcast series are available here, up for a purchase to make your life better!</p>
                        <p>Some of the audios here are not mere copies off my events' speeches or excerpts from my books... Many of those are actually special episodes that I use during my original podcast series broadcast!</p><a href="contacts.html" class="btn btn-circle btn-matrix offset-top-15">get in touch</a>
                      </div>
                      <div data-filter="Personal Development Articles" class="col-md-12 isotope-item"><img src="images/pages/coaching-4-870x280.jpg" width="870" height="280" alt="" class="img-responsive"/>
                        <h4 class="offset-top-30 text-bold">Personal Development Articles</h4>
                        <p class="offset-md-top-20">I tend to think of my blog as about yet another medium (besides the public speaking events, podcasts, and books) that I am blessed to use to provide my knowledge and my life outlook to help people.</p>
                        <p>Just sign up for a newsletter of the most recent articles (which is completely FREE of charge) and you will see yourself, how being exposed to the universal principles of a positive life outlook your behavior (hence your life) changes for good!</p><a href="blog-classic.html" class="btn btn-circle btn-matrix offset-top-15">view blog posts</a>
                      </div>
                      <div data-filter="Business Coaching" class="col-md-12 isotope-item"><img src="images/pages/coaching-5-870x280.jpg" width="870" height="280" alt="" class="img-responsive"/>
                        <h4 class="offset-top-30 text-bold">Business Coaching</h4>
                        <p class="offset-md-top-20">Successful life coaching and inspiring people to lead a better personal life is one thing, while helping the wellbeing of the commercial companies to get back on track is a whole another story!</p>
                        <p>While most of my time is dedicated towards helping thousands of individuals with their pursuit of life and happiness, sometimes I also help businesses to get a new work outlook!</p><a href="contacts.html" class="btn btn-circle btn-matrix offset-top-15">get in touch</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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