import React, { useState } from "react";

const NavBar = () => {
  // const [isHomePage, setIsHomePage] = useState(true);
  var IsloggedIn = localStorage.getItem("IsloggedIn");

  const handleSignout = () => {
    localStorage.setItem("IsloggedIn", false);
  };

  const handleHomeMethodCalled = () => {
    localStorage.setItem("IsHomePageOpen", true);
  };
  const handleAnotherMethodCalled = () => {
    localStorage.setItem("IsHomePageOpen", false);
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark" style={{height:"60px"}}>
        <div className="container-fluid">
          {/* Toggle button */}
          <button
            data-mdb-collapse-init=""
            className="navbar-toggler"
            type="button"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars" />
          </button>
          {/* Collapsible wrapper */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* Left links */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/home"
                  onClick={() => handleHomeMethodCalled()}
                >
                  Home
                </a>
              </li>
              {/* <li className="dropdown">
            <a href="#">
              <span>Picture</span> <i className="bi bi-chevron-down" />
            </a>
            <ul>
              <li>
                <a href="/detectByFolder">Select form gallery</a>
              </li>
              <li>
                <a href="/detectByCamera">Capture from camera</a>
              </li>      
            </ul>
          </li> */}
              
            </ul>
          </div>
          <div className="d-flex align-items-center">
            {/* Icon */}

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {IsloggedIn == "true" ? (
                  <a
                    className="nav-link"
                    href="/login" onClick={()=>(localStorage.clear())}
                  >
                    Sign Out
                  </a>
                ) : (
                  <a
                    className="nav-link"
                    href="/login"
                  >
                    Sign In
                  </a>
                )}
              </li>

              {IsloggedIn == "false" && (
                <li className="nav-item">
                  <a className="nav-link" href="/register">
                    Sign Up
                  </a>
                </li>
              )}
            </ul>
          </div>
          {/* Right elements */}
        </div>
        {/* Container wrapper */}
      </nav>
      {/* Navbar */}
    </>
  );
};

export default NavBar;
