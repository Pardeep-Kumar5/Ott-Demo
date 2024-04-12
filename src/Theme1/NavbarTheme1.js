import React from 'react'

function NavbarTheme1() {
  return (
    <div>  <header id="header" className="header fixed-top d-flex align-items-center">
    <div className="container-fluid d-flex align-items-center justify-content-between">
      <a
        href=""
        className="logo d-flex align-items-center me-auto me-xl-0"
      >
        {/* Uncomment the line below if you also wish to use an image logo */}
        <img src="assets/img/clients/client-3.png" alt="imag"/>
        <h1>Welcome to site</h1>
        <span>.</span>
      </a>
      {/* Nav Menu */}
      <nav id="navmenu" className="navmenu">
        <ul>
          <li>
            <a href="index.html#hero" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="index.html#services">Services</a>
          </li>
          <li>
            <a href="index.html#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="index.html#team">Team</a>
          </li>
          <li>
            <a href="blog.html">Blog</a>
          </li>
          <li className="dropdown has-dropdown">
            <a href="#">
              <span>Picture</span> <i className="bi bi-chevron-down" />
            </a>
            <ul className="dd-box-shadow">
              <li>
                <a href="/detectByFolder">Select form gallery</a>
              </li>
              {/* <li className="dropdown has-dropdown">
                <a href="#">
                  <span>Deep Dropdown</span>{" "}
                  <i className="bi bi-chevron-down" />
                </a>
                <ul className="dd-box-shadow">
                  <li>
                    <a href="#">Deep Dropdown 1</a>
                  </li>
                  <li>
                    <a href="#">Deep Dropdown 2</a>
                  </li>
                  <li>
                    <a href="#">Deep Dropdown 3</a>
                  </li>
                  <li>
                    <a href="#">Deep Dropdown 4</a>
                  </li>
                  <li>
                    <a href="#">Deep Dropdown 5</a>
                  </li>
                </ul>
              </li> */}
              <li>
                <a href="detectByCamera">Capture from camera</a>
              </li>
              
            </ul>
          </li>
          <li>
            <a href="index.html#contact">Contact</a>
          </li>
        </ul>
        <i className="mobile-nav-toggle d-xl-none bi bi-list" />
      </nav>
      {/* End Nav Menu */}
      <a className="btn-getstarted" style={{visibility:"hidden"}} href="">
        Get Started
      </a>
    </div>
  </header></div>
  )
}

export default NavbarTheme1;
