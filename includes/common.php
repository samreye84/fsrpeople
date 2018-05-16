<!DOCTYPE html>
<?php
	/* header menu http://fsrpeople.com/ */
	$header = '  <div class="rd-navbar-wrap">
                <nav data-md-device-layout="rd-navbar-fixed" data-lg-device-layout="rd-navbar-static" data-md-stick-up-offset="90px" data-lg-stick-up-offset="75px" data-auto-height="false" class="rd-navbar rd-navbar-top-panel rd-navbar-default rd-navbar-white rd-navbar-static-fullwidth-transparent rd-navbar-simple" data-lg-auto-height="true" data-md-layout="rd-navbar-fullwidth" data-lg-layout="rd-navbar-static" data-sm-stick-up="true" data-md-stick-up="true" data-lg-stick-up="true" id="altnavtrigger">
                  <div class="rd-navbar-inner">
                    <!-- RD Navbar Panel-->
                    <div class="rd-navbar-panel">
                      <!-- RD Navbar Toggle-->
                      <button data-rd-navbar-toggle=".rd-navbar, .rd-navbar-nav-wrap" class="rd-navbar-toggle"><span></span></button>
                      <!-- Navbar Brand-->
                      <div class="rd-navbar-brand"><a href="http://fsrpeople.com/">
					 	 <img class="normal-logo" src="http://fsrpeople.com/images/fsr-logo.png">
					 	 <img class="old-logo" src="http://fsrpeople.com/images/FSRlogotenyear.png">
					  </a></div>
                    </div>
    <script language="JavaScript">
    <!--
    function fireURL(url){
        if(url != "-1")
            document.location.href=url;
    }
    function displayStatusMsg(msgStr) { 
    status=msgStr;document.returnValue = true;}
    //-->
    </script>
           <div class="mobile-menu-container">
            <select id="mobilemenu-dropdown" name="select" class="list-menu" onchange="fireURL(this.value)">
               <option value="-1">Navigate to...</option>     
                 <option value="index.php">Home</option>
                 <option value="#">Markets</option>
                   <option value="leadership-and-executive-search.php">&nbsp;&nbsp; - Leadership &amp; Executive Search</option>
                   <option value="talent-acquisition.php">&nbsp;&nbsp; - Talent Acquisition</option>
                   <option value="workforce-solutions.php">&nbsp;&nbsp; - Workforce Solutions</option>
                   <option value="services.php">&nbsp;&nbsp; - Government Services</option>
                   <option value="our-clients.php">&nbsp;&nbsp; - Clients &amp; Experience</option>
                   <option value="certifications.php">&nbsp;&nbsp; - Certifications</option>
                 <option value="search.php">Job Seekers</option> 
                   <option value="search.php">&nbsp;&nbsp; - Leadership &amp; Executive Search</option>
                   <option value="government.php">&nbsp;&nbsp; - Government</option> 
                 <option value="working-warriors.php">Working Warriors</option>     
                 <option value="our-story.php">About Us</option>                    
                   <option value="our-story.php">&nbsp;&nbsp; - Our Story</option>
                   <option value="leadership.php">&nbsp;&nbsp; - Leadership</option>
                   <option value="our-clients.php">&nbsp;&nbsp; - Clients &amp; Experience</option>
                   <option value="affiliations.php">&nbsp;&nbsp; - Affiliations &amp; Awards</option>
                   <option value="certifications.php">&nbsp;&nbsp; - Certifications</option>
                   <option value="photos.php">&nbsp;&nbsp; - Community</option>      
                 <option value="#">Resources</option>
                   <option value="blog">&nbsp;&nbsp; - Latest Posts</option>
                   <option value="search.php#featured-search">&nbsp;&nbsp; - Featured Searches</option>
                   <option value="https://fsrpeople.isolvedhire.com/jobs/" target="_blank">&nbsp;&nbsp; - Search &amp; Apply for Jobs</option>
                   <option value="https://payrollnetwork.myisolved.com/">&nbsp;&nbsp; - Employees</option>
                     <option value="https://payrollnetwork.myisolved.com/">&nbsp;&nbsp;   &nbsp;&nbsp; - Payroll/Benefits</option>
                     <option value="https://teprod05.deltekfirstessentials.com/DeltekTC/welcome.msv">&nbsp;&nbsp;   &nbsp;&nbsp; - Timekeeping</option>
                   <option value="contact-us.php">Contact Us</option>   		                     
                                           
             </select>                  
           </div>
		   					
                    <div class="rd-navbar-menu-wrap">
                      <div class="rd-navbar-nav-wrap">
                        <div class="rd-navbar-mobile-scroll">
                          <div class="form-search-wrap">
                            <!-- RD Search Form-->
                            <form action="search-results.html" method="GET" class="form-search rd-search">
                              <div class="form-group">
                                <label for="rd-navbar-form-search-widget" class="form-label form-search-label form-label-sm rd-input-label">Search</label>
                                <input id="rd-navbar-form-search-widget" type="text" name="s" autocomplete="off" class="form-search-input input-sm form-control form-control-gray-lightest input-sm">
                              </div>
                              <button type="submit" class="form-search-submit"><span class="fa fa-search"></span></button>
                            </form>
                          </div>
                          <!-- RD Navbar Nav-->
                          <ul class="rd-navbar-nav">
						  
						  
                            <li ' . (($page == 'markets') ? "class='active'" : "") . '><a href="#"><span>Markets</span></a>
                              <ul class="rd-navbar-dropdown">
                                <li><a href="http://fsrpeople.com/leadership-and-executive-search.php"><span class="text-middle">Leadership &amp; Executive Search</span></a>
                                </li>							
                                <li><a href="http://fsrpeople.com/talent-acquisition.php"><span class="text-middle">Talent Acquisition</span></a>
                                </li>		
                                <li><a href="http://fsrpeople.com/workforce-solutions.php"><span class="text-middle">Workforce Solutions</span></a>
                                </li>
								<li><a href="http://fsrpeople.com/services.php"><span class="text-middle">Government Services</span></a>
								</li>
                                <li><a href="http://fsrpeople.com/our-clients.php"><span class="text-middle">Clients &amp; Experience</span></a>
                                </li>
								<li><a href="http://fsrpeople.com/certifications.php"><span class="text-middle">Certifications</span></a>
								</li>							
                              </ul>							
							</li>						  
                            <li ' . (($page == 'candidates') ? "class='active'" : "") . '><a href="http://fsrpeople.com/search.php"><span>Job Seekers</span></a>
                              <ul class="rd-navbar-dropdown">
                                <li><a href="http://fsrpeople.com/search.php"><span class="text-middle">Leadership &amp; Executive Search</span></a>
                                </li>								
								<li><a href="http://fsrpeople.com/government.php"><span class="text-middle">Government Sector</span></a>
                                </li>
                              </ul>
                            </li>


							<li ' . (($page == 'working-warriors') ? "class='active'" : "") . '><a href="http://fsrpeople.com/working-warriors.php"><span>Working Warriors</span></a>
                            </li>
                            <li ' . (($page == 'about-us') ? "class='active'" : "") . '><a href="http://fsrpeople.com/our-story.php"><span>About Us</span></a>
                              <ul class="rd-navbar-dropdown">
                                <li><a href="http://fsrpeople.com/our-story.php"><span class="text-middle">Our Story</span></a>
                                </li>
                                <li><a href="http://fsrpeople.com/leadership.php"><span class="text-middle">Leadership</span></a>
                                </li>						
                                <li><a href="http://fsrpeople.com/our-clients.php"><span class="text-middle">Clients &amp; Experience</span></a>
                                </li>									
                                <li><a href="http://fsrpeople.com/affiliations.php"><span class="text-middle">Affiliations &amp; Awards</span></a>
                                </li>		
								<li><a href="http://fsrpeople.com/certifications.php"><span class="text-middle">Certifications</span></a>
								</li>			
								<li><a href="photos.php"><span class="text-middle">Community</span></a>
								</li>																							
																				
                              </ul>
                            </li>
                            <li ' . (($page == 'resources') ? "class='active'" : "") . '><a href="#"><span>Resources</span></a>
                              <ul class="rd-navbar-dropdown">
                                <li><a href="http://fsrpeople.com/blog"><span class="text-middle">Latest Posts</span></a>
                                </li>
                                <li><a href="http://fsrpeople.com/search.php#featured-search"><span class="text-middle">Featured Searches</span></a>
                                </li>
                                <li><a href="https://fsrpeople.isolvedhire.com/jobs/" target="_blank"><span class="text-middle">Search &amp; Apply for Jobs</span></a>
                                </li>
                                <li><a target="blank" href="https://payrollnetwork.myisolved.com/"><span class="text-middle">Employees</span></a>
								  <ul class="rd-navbar-dropdown">
									<li><a target="blank" href="https://payrollnetwork.myisolved.com/"><span class="text-middle">Payroll/Benefits</span></a>
									</li>
									<li><a target="blank" href="https://teprod05.deltekfirstessentials.com/DeltekTC/welcome.msv"><span class="text-middle">Timekeeping</span></a>
									</li>								
								  </ul>		  
							    </li>								
                              </ul>                           
                            </li>
                            <li ' . (($page == 'contact-us') ? "class='active'" : "") . '><a href="http://fsrpeople.com/contact-us.php"><span>Contact Us</span></a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <!-- RD Navbar Search-->

                    </div>
                  </div>
                </nav>
              </div>';

      /* footer to include on each page */
      $footer = '<footer class="page-footer">
        <div class="shell-fluid">
          <div class="text-left section-90 section-lg-top-111 section-lg-bottom-120 context-dark">
            <div class="range range-xs-center">
              <div class="cell-xs-10 cell-sm-8 cell-md-10 cell-lg-4">
                <div class="inset-md-right-36"><a href="index.html" class="brand"><span>FSR</span></a>
                <span class="text-bold"><br>The FSR Difference is Clear!<br><br></span>
                 <ul class="list list-marked footer-list text-matrix">
					<li> We are a people solutions company committed to the success of our clients’ mission.</li>
					<li>Our daily actions and business practices are guided by the principals of integrity and honesty.</li>
					<li>We use uncompromising quality standards and methodologies.</li>
					<li>We follow the rules and are compliant with government regulations.</li>
					<li>We build relationships for lasting partnerships.</li>
				  </ul>

               
                </div>
              </div>
<div class="cell-xs-10 cell-sm-8 cell-md-5 cell-lg-4 offset-top-70 offset-lg-top-0">
                <div class="inset-lg-left-15 inset-lg-right-30">
                  <h6 class="text-bold">Knowledge Library</h6>
                  <hr class="divider">
                 <div id="footer-posts-get">
                </div>
<!--

<div class="post-mini unit unit-middle unit-horizontal post-widget unit-xs-top">
                    <div class="unit-left"><img src="images/blog/blog-1-160x120.jpg" width="160" height="120" alt="" class="img-responsive">
                    </div>
                    <div class="unit-body">
                      <div class="post-meta"><span class="text-middle icon icon-sm-size-1 mdi mdi-calendar text-silver"></span>
                        <time datetime="2016-04-30" class="text-middle post-meta-time text-italic reveal-inline"> 2 days ago</time>
                      </div>
                      <h6 class="text-bold"><a href="post-single.html">Finding Your Goals When You\'re 40</a></h6>
                    </div>
                  </div>

                  <div class="post-mini unit unit-middle unit-horizontal post-widget unit-xs-top">
                    <div class="unit-left"><img src="images/blog/blog-2-160x120.jpg" width="160" height="120" alt="" class="img-responsive">
                    </div>
                    <div class="unit-body">
                      <div class="post-meta"><span class="text-middle icon icon-sm-size-1 mdi mdi-calendar text-silver"></span>
                        <time datetime="2016-04-30" class="text-middle post-meta-time text-italic reveal-inline"> 2 days ago</time>
                      </div>
                      <h6 class="text-bold"><a href="post-single.html">Finding a Job of Your Dreams is Easy!</a></h6>
                    </div>
                  </div>
                  <div class="post-mini unit unit-middle unit-horizontal post-widget unit-xs-top">
                    <div class="unit-left"><img src="images/blog/blog-3-160x120.jpg" width="160" height="120" alt="" class="img-responsive">
                    </div>
                    <div class="unit-body">
                      <div class="post-meta"><span class="text-middle icon icon-sm-size-1 mdi mdi-calendar text-silver"></span>
                        <time datetime="2016-04-30" class="text-middle post-meta-time text-italic reveal-inline"> 2 days ago</time>
                      </div>
                      <h6 class="text-bold"><a href="post-single.html">The Biggest Differences Between an Introvert and Narcissist</a></h6>
                    </div>
-->
                  </div>
                
              </div>
<div class="cell-xs-10 cell-sm-8 cell-md-5 cell-lg-4 offset-top-70 offset-lg-top-0">
                <div class="inset-lg-left-30 inset-lg-right-30">
                  <h6 class="text-bold">Contact Information</h6>
                  <hr class="divider">
                  <div class="unit unit-middle unit-horizontal unit-spacing-xs unit-xs-top">
                    <div class="unit-left"><span class="icon icon-sm-size-1 mdi mdi-phone"></span></div>
                    <div class="unit-body">
                      <div class="text-bold">Phone Numbers</div>
                      <div class="p offset-top-5">
                      <a href="calltp:8668862300" class="text-alto">866-886-2300</a><br>
                      <a href="callto:14109900795" class="text-alto">410-990-0795</a>
                    </div>
                    </div>
                  </div>
                  <div class="unit unit-middle unit-horizontal unit-spacing-xs unit-xs-top offset-top-20">
                    <div class="unit-left"><span class="icon icon-sm-size-1 mdi mdi-map-marker"></span></div>
                    <div class="unit-body">
                      <div class="text-bold">Corporate Office</div>
                      <div class="p offset-top-5"><a href="contacts.html" class="text-alto">2200 Somerville Road, Suite 300  Annapolis, MD 21401</a></div>
                    </div>
                  </div>
                  <div class="unit unit-middle unit-horizontal unit-spacing-xs unit-xs-top offset-top-20">
                    <div class="unit-left"><span class="icon icon-sm-size-1 mdi mdi-email-outline"></span></div>
                    <div class="unit-body">
                      <div class="text-bold">E-mail Address</div>
                      <div class="p offset-top-5"><a href="mailto:fsrpoc@fsrpeople.com" class="text-primary reveal-block">fsrpoc@fsrpeople.com</a></div>
                    </div>
                  </div>
                  <div class="offset-top-25">
                          <ul class="list-inline">
                            <li><a href="https://www.facebook.com/FSRpeople" class="icon icon-gray-light icon-circle fa fa-facebook"></a></li>
                            <li><a href="https://twitter.com/FSRpeople" class="icon icon-gray-light icon-circle fa fa-twitter"></a></li>
                            <li><a href="https://www.linkedin.com/company/federal-staffing-resources" class="icon icon-gray-light icon-circle fa fa-linkedin"></a></li>
							<li><a href="https://www.instagram.com/FSRpeople/" class="icon icon-gray-light icon-circle fa fa-instagram"></a></li>
                          </ul>
<div class="text-bold"><br>
    <hr class="divider" style="margin-bottom: 17px;">
    <a target="blank"  href="https://payrollnetwork.myisolved.com/UserLogin.aspx?ReturnUrl=%2f ">Employees</a> &nbsp; |  &nbsp; <a target="blank" href="https://fsrpeople.isolvedhire.com/jobs/">Job Seekers</a> 
</div>                          						  
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="range range-xs-center offset-top-0">
            <div class="cell-sm-10 cell-md-10 cell-lg-12">
              <p class="footer-text-grey text-white-04">Federal Staffing Resources dba FSR is an Equal Opportunity Employer: disability/veteran/military spouse. This contractor and subcontractor shall abide by the requirements of 41 CFR §§ 60-1.4(a), 60-300.5(a) and 60-741.5(a). These regulations prohibit discrimination against qualified individuals based on their status as protected veterans or individuals with disabilities, and prohibit discrimination against all individuals based on their race, color, religion, sex, sexual orientation, gender identity or national origin. Moreover, these regulations require that covered prime contractors and subcontractors take affirmative action to employ and advance in employment individuals without regard to race, color, religion, sex, sexual orientation, gender identity, national origin, protected veteran status or disability.<br></p><hr>
            </div>
          </div>

            <div class="cell-xs-10 cell-md-12 cell-lg-3 tex-lg-right offset-top-15 offset-lg-top-0 text-lg-right">
              
<p class="text-white-05 footer-bottom-left"> FSR participates in E-Verify.</p>
                    <p class="text-white-05">
                
                © <span id="copyright-year">2017</span> Federal Staffing Resources LLC. All Rights Reserved    
                    
                  
              </p>
            </div>
          </div>
        </div>
      </footer>';

?>