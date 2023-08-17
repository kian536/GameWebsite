# GameWebsite
<!doctype html>
<html class="no-js" lang="">
    <head>
        <meta charset="utf-8">
        <title>Nightbright  | Student Supplies</title>
        <style>
          body{
            background-image: url(Nightbright.png);
            height: 165vh;
            width: 170vh;
            background-size: cover;
            background-position: center;
          }
        </style>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
      
        <meta property="og:title" content="">
        <meta property="og:type" content="">
        <meta property="og:url" content="">
        <meta property="og:image" content="">
      
        <link rel="manifest" href="site.webmanifest">
        <link rel="apple-touch-icon" href="icon.png">
        <link rel="stylesheet" href="css/style.css">
        <!-- Place favicon.ico in the root directory -->
      
        <link rel="stylesheet" href="css/normalize.css">
        <link rel="stylesheet" href="css/main.css">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700&display=swap" rel="stylesheet">
      
        <script src="https://kit.fontawesome.com/d756f3c4c9.js" crossorigin="anonymous"></script>
      
        <meta name="theme-color" content="#fafafa">
      </head>
      <body>
        <div class="header">
          <div class="container">
            <div class="navbar">
              <div class="logo">
              </div>
              <nav>
                <ul id="MenuItems">
                  <a href="Home.html">Home</a>
                  <a href="products.html">Products</a>
                  <a href="Special offter.html">Special offer</a>
                  <a href="About us.html">About Us</a>
                  <a href="contact us.html">Contact Us</a>
                  <img src="images/basket.webp" alt="Cart" align-right="500" width="70px" height="50px" onclick=cart()>
                </ul>
              </nav>
                  </div>
                </div>
              </div>
                </head>
            </body>
        <!----- footer ----->
        <footer>
          <div class="container">
            <div class="row">
              <div class="footer-col-1">
                <h3>Download our app</h3>
                <p>Download App for Android and iOs</p>
                <div class="app-logo">
                  <img src="images/play-store.png" alt="Get it on Android">
                  <img src="images/app-store.png" alt="Get it on Apple">
                </div>
              </div>
              <div class="footer-col-2">
                <img src="images/NightbrightLogo.png" alt="Logo">
                <p>Students Essentials</p>
              </div>
              <div class="footer-col-3">
                <h3>Useful Links</h3>
                <ul>
                  <li>Return Policy</li>
                  <li>Contact Us</li>
                  <li>Back to top ⤒</li>
                </ul>
              </div>
              <div class="footer-col-4">
                <h3>Follow Us</h3>
                <ul>
                  <li>Facebook</li>
                  <li>Twitter</li>
                  <li>Instagram</li>
                </ul>
              </div>
            </div>
            <hr>
            <p class="copyright">©Copyright 2023 - CampusMart</p>
          </div>
        </div>
      </footer>
        <script>
          var MenuItems = document.getElementById("MenuItems");
        
          MenuItems.style.maxHeight = "0px";
        
          function menutoggle(){
            if(MenuItems.style.maxHeight === "0px"){
              MenuItems.style.maxHeight = "200px";
            }
            else{
              MenuItems.style.maxHeight = "0px";
            }
          }
        
          function product_view(id){
            var product_id = id;
        
            window.location.href = "product_view.php?product_id=" + product_id;
          }
        
          function cart(){
            window.location.href = "addtocart.html";
          }
        </script>
          <script src="js/vendor/modernizr-3.11.2.min.js"></script>
          <script src="js/plugins.js"></script>
          <script src="js/main.js"></script>
      </body>
      </html>
