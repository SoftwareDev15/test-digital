class MyHeader extends HTMLElement{
    connectedCallback(){
      this.innerHTML =`
     
      <div class="container d-flex align-items-center">
  
        <!-- <h1 class="logo me-auto"><a href="index.html">Rapid</a></h1> -->
        <!-- Uncomment below if you prefer to use an image logo -->
        <a href="index.html" class="logo me-auto"><img src="assets/img/LOGO Digital.png" alt="" class="img-fluid"></a>
  
        <nav id="navbar" class="navbar order-last order-lg-0">
          <ul>
            <li><a class="nav-link scrollto active" href="index.html">Home</a></li>
            <li><a class="nav-link scrollto" href="about.html">About Us</a></li>
            <li class="dropdown"><a href="#"><span>Service & Solutions</span> <i class="bi bi-chevron-down"></i></a>
              <ul>
                <li><a href="erp-system.html">ERP System</a></li>
                <li><a href="scada.html">Scada</a></li>
                <li><a href="service.html">Service</a></li>
                <li><a href="market-platform.html">Marketplace Platform</a></li>
                <li><a href="ar.html">AR (Augmented Reality)</a></li>
                <li><a href="ai.html">AI (Artificial Intelligent)</a></li>
              </ul>
            </li>
            <li><a class="nav-link scrollto" href="blogs.html">Blogs</a></li>
            <li><a class="nav-link scrollto" href="join-us.html">Join Us</a></li>
            <li><a class="nav-link scrollto " href="portfolio.html">Portfolio</a></li>
            <li><a class="nav-link scrollto" href="contact-us">Contact Us</a></li>
            <li><a class="nav-link scrollto" href="helps.html">Helps</a></li>
          </ul>
          <i class="bi bi-list mobile-nav-toggle"></i>
        </nav><!-- .navbar -->
  
        <div class="social-links">
          <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
          <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
          <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
          <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
        </div>
  
      </div>
      
    ` 
  }
}

customElements.define('my-header', MyHeader)
