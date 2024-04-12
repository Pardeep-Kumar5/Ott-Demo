import React from 'react'
import { useNavigate } from "react-router-dom"

function NavbarTheme1() {
  const navigate = useNavigate();
  return (
    <div>  <header id="header" className="header fixed-top d-flex align-items-center">
      <div className="container-fluid d-flex align-items-center justify-content-between">
        <a
          href="/theme1"
          className="logo d-flex align-items-center me-auto me-xl-0"
        >
          {/* Uncomment the line below if you also wish to use an image logo */}
          <img src="assets/img/clients/client-3.png" alt="imag" />
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
            <li className="dropdown has-dropdown">
              <a >
                <span>Picture</span> <i className="bi bi-chevron-down" />
              </a>
              <ul className="dd-box-shadow">
                <li>
                  <a href="/detectByFolder">Select form gallery</a>
                </li>
                <li>
                  <a href="detectByCamera">Capture from camera</a>
                </li>

              </ul>
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
            <li>
              <a href="index.html#contact">Contact</a>
            </li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list" />
        </nav>
        {/* End Nav Menu */}

        <div>

          <div class="btn-group" style={{ paddingRight: "10px" }}>
            <img src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg" width="50" height="50" data-bs-toggle="dropdown" aria-haspopup="true" />
            {/* <button type="button" class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Action
  </button> */}
            <div class="dropdown-menu">
              <a class="dropdown-item" style={{ display: "disabled" }}>Hello, Guest</a>
              {localStorage.getItem("IsloggedIn") == "true" ? <>
                <a href="/login" className='dropdown-item' onClick={() => (localStorage.clear())}>Sign Out</a>
              </> : <>
                <a href="/login" className='dropdown-item' >Sign In</a>
                <a className='dropdown-item' href="/register">Sign Up</a>
              </>}
            </div>
          </div>
        </div>


      </div>
    </header></div>
  )
}

export default NavbarTheme1