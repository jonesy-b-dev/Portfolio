function navBarBlock() 
{
    document.getElementById("navBar").innerHTML = `    <nav class="navbar mainColorBg fixed-top">
      <div class="container-fluid">
        <!--Buttons-->
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbarLeft" aria-controls="offcanvasNavbar">
          <i class="fa-solid fa-bars fa-2x accentColor"></i>
        </button>
        <div class="col text-start hideMobile">\\   Links</div>
        <a class="navbar-brand m-0 accentColor" href="./index.html">Jonas de Bruin</a>
        <div class="col text-end hideMobile">Menu   //</div>
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbarRight" aria-controls="offcanvasNavbar">
          <i class="fa-solid fa-bars fa-2x accentColor"></i>
        </button>

        <!--Nav bar left-->
        <div class="offcanvas offcanvas-start text-center mainColorBgBright border-0" tabindex="-1" id="offcanvasNavbarLeft" aria-labelledby="offcanvasNavbarLabel">
          <div class="offcanvas-header justify-content-end pb-0 pt-2">
            <button type="button" class="btn" data-bs-dismiss="offcanvas" aria-label="Close"><i class="fa-solid fa-xmark fa-2x accentColor"></i></button>
          </div>
          <div class="offcanvas-body text-center">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <!--GitHub-->
              <li class="nav-item">
                <a class="nav-link" target = "_blank" href="https://github.com/jonesy-b-dev"><i class="fa-brands fa-github fa-5x textColor hoverText"></i></a><br><br>
              </li>
              <!--Linkedin-->
              <li class="nav-item">
                <a class="nav-link" target = "_blank" href="https://www.linkedin.com/in/jonas-de-bruin-379aa01b9"><i class="fa-brands fa-linkedin fa-5x textColor hoverText"></i></a><br><br>
              </li> 
              <!--Stackoverflow--> 
              <li class="nav-item"> 
                <a class="nav-link" target = "_blank" href="https://stackoverflow.com/users/19786289/jonas-de-bruin"><i class="fa-brands fa-stack-overflow fa-5x textColor hoverText"></i></a><br><br>
              </li> 
              <!--Instagram--> 
              <li class="nav-item"> 
                <a class="nav-link" target = "_blank" href="https://www.instagram.com/jonas_dbruin/"><i class="fa-brands fa-instagram fa-5x textColor hoverText"></i></a><br><br>
              </li> 
              <!--YouTube--> 
              <li class="nav-item"> 
                <a class="nav-link" target = "_blank" href="https://www.youtube.com/channel/UCcYuafAsLupU_JUJ2hS4Kcw"><i class="fa-brands fa-youtube fa-5x textColor hoverText"></i></a>
              </li>
            </ul>
          </div>
        </div>

        <!--Nav bar right-->
        <div class="offcanvas offcanvas-end text-center mainColorBgBright border-0" tabindex="-1" id="offcanvasNavbarRight" aria-labelledby="offcanvasNavbarLabel" style="
        border-left-width: 0px;">
          <div class="offcanvas-header pb-0 pt-2">
            <button type="button" class="btn" data-bs-dismiss="offcanvas" aria-label="Close"><i class="fa-solid fa-xmark fa-2x accentColor"></i></button>
          </div>
          <div class="offcanvas-body text-center">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="./index.html"><h1 class="textColor hoverText">Home</h1></a><br><br>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="./pages/music.html"><h1 class="textColor hoverText">Music</h1></a><br><br>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="./pages/projects.html"><h1 class="textColor hoverText">Projects</h1></a><br><br>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="./pages/skills.html"><h1 class="textColor hoverText">Skills</h1></a><br><br>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="./pages/about.html"><h1 class="textColor hoverText">About</h1></a><br><br>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="./pages/contact.html"><h1 class="textColor hoverText">Contact</h1></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>`;
}