import axios from "axios";
import React, { useState } from "react";
import NavbarTheme1 from "../Theme1/NavbarTheme1";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = async () => {
      const URL = "https://localhost:7093/Register";
      const data = {
        Name: name,
        Email: email,
        Address: address,
        Password: password,
      };
      const response = await axios.post(URL, data).then((result) => {
        debugger;
        if (result) {
          debugger;
          console.log(result.data);
          window.location.href = "/login";
        }
      });
    
  };

  return (
    <>
      {/* <section className="vh-100" style={{ backgroundColor: "#eee" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: 25 }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Sign up
                      </p>
                      <form className="mx-1 mx-md-4">
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="form3Example1c"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              className="form-control"
                              name="name"
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example1c"
                            >
                              Your Name
                            </label>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="form3Example3c"
                              value={address}
                              onChange={(e) => setAddress(e.target.value)}
                              className="form-control"
                              name="address"
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example3c"
                            >
                              Your Address
                            </label>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="email"
                              id="form3Example3c"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              className="form-control"
                              name="email"
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example3c"
                            >
                              Your Email
                            </label>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              id="form3Example4c"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              className="form-control"
                              name="password"
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example4c"
                            >
                              Password
                            </label>
                          </div>
                        </div>
                  
                        <div className="form-check d-flex justify-content-center mb-5">
                          <label
                            className="form-check-label"
                            htmlFor="form2Example3"
                          >
                           
                            <a href="/login"> You already have an account</a>
                          </label>
                        </div>
                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="button"
                            onClick={() => handleRegister()}
                            className="btn btn-primary btn-lg"
                          >
                            Register
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        className="img-fluid"
                        alt="Sample image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <NavbarTheme1/>
      <section className="vh-100" style={{ backgroundColor: "#9A616D" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card" style={{ borderRadius: "1rem" }}>
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                      alt="login form"
                      className="img-fluid"
                      style={{ borderRadius: "1rem 0 0 1rem" }}
                    />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
                      <form>
                        <div className="d-flex align-items-center mb-3 pb-1">
                          <i
                            className="fas fa-cubes fa-2x me-3"
                            style={{ color: "#ff6219" }}
                          />
                          {/* <span className="h1 fw-bold mb-0">Logo</span> */}
                        </div>
                        <h5
                          className="fw-normal mb-3 pb-3"
                          style={{ letterSpacing: 1 }}
                        >
                          Create your account
                        </h5>
                        <div className="form-outline mb-4">
                          <input
                            type="text"
                            id="form2Example17"
                            className="form-control form-control-lg"
                            //value={email}
                            onChange={(e) => setName(e.target.value)}
                          />
                          <label
                            className="form-label"
                            htmlFor="form2Example17"
                            
                          >
                            Your Name
                          </label>
                        </div>
                        <div className="form-outline mb-4">
                          <input
                            type="text"
                            id="form2Example17"
                            className="form-control form-control-lg"
                            //value={email}
                            onChange={(e) => setAddress(e.target.value)}
                          />
                          <label
                            className="form-label"
                            htmlFor="form2Example17"
                            
                          >
                          Your Address
                          </label>
                        </div>
                        <div className="form-outline mb-4">
                          <input
                            type="email"
                            id="form2Example17"
                            className="form-control form-control-lg"
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                          />
                          <label
                            className="form-label"
                            htmlFor="form2Example17"
                            
                          >
                            Email address
                          </label>
                        </div>
                        <div className="form-outline mb-4">
                          <input
                            type="password"
                            id="form2Example27"
                            className="form-control form-control-lg"
                            //value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                          />
                          <label
                            className="form-label"
                            htmlFor="form2Example27"
                          
                          >
                            Password
                          </label>
                        </div>
                        <div className="pt-1 mb-4">
                          <button
                            className="btn btn-dark btn-lg btn-block"
                            type="button"
                           onClick={()=>handleRegister()}
                          >
                            Register
                          </button>
                        </div>
                        <p
                          className="mb-5 pb-lg-2"
                          style={{ color: "#393f81" }}
                        >
                          You already have an account?{" "}
                          <a href="/login" style={{ color: "#393f81" }}>
                            Login here
                          </a>
                        </p>
                        <a href="" className="small text-muted">
                          Terms of use.
                        </a>
                        <a href="" className="small text-muted">
                          Privacy policy
                        </a>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
