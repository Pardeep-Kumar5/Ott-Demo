import React, { useEffect, useState } from 'react'
import Theme1 from './Theme1/Theme1';
import Theme2 from './Theme2/Theme2';
import { Link } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Theme1Img from "./Images/theme1img.png"
import Theme2Img from "./Images/theme2img.png"
const Home = () => {

  const [selectedTheme, setSelectedTheme] = useState();
  const [isApplyTheme, setIsApplyTheme] = useState(true);

  
  const handleThemeChange = (theme) => {
    debugger;
    setSelectedTheme(theme);
  };

  const HandleSetTheme = () => {
    setIsApplyTheme(false);
  };
  useEffect(() => {

  }, [])
  return (
    <>
      <NavBar />
      <div className='text-center' style={{ paddingTop: "110px" }}>
        <h1 style={{ fontWeight: "bold", color: "#024077" }}>Here are some CS Templates 👇</h1>
        <span style={{ fontSize: "19px", color: "#024077" }}>Discover an exceptional collection of our CS Templates & Themes crafted with finesse.</span><br />
        <span style={{ fontSize: "19px", color: "#024077" }}> Explore our  templates, designed to elevate your web presence.</span>
      </div>
      <div className='container' style={{ paddingTop: "90px" }}>
        <div className='row' >
          <img src={Theme1Img} style={{ borderRadius: "5%" }} className='col-4' alt="image" />
          <div className='col-8'>
            <h2 className='' style={{ fontWeight: "bold", fontSize: "19px", color: "#024077", paddingTop: "40px", paddingBottom: "20px" }}>Append - Modern CS Template for Startups and IT Services</h2>
            <span className='' style={{ fontSize: "18px" }}>Append is a cutting-edge website template meticulously crafted to cater to the needs of startups, apps, and IT service providers. With its sleek and contemporary design, this template offers a perfect blend of functionality and aesthetiCS, empowering your online presence and captivating your audience.</span>
            <div className='row' style={{ padding: "30px" }}>
              {localStorage.getItem("IsloggedIn") ? (
                <Link className="col-4" to="/theme1" onClick={()=>(localStorage.setItem("Theme","1"))}>
                  <button className='get-started-btn scrollto form-control' style={{ margin: "5px" }}>Apply</button>
                </Link>
              ) : (
                <Link className="col-4" to="/login">
                   <button className='get-started-btn scrollto form-control' style={{ margin: "5px" }}>Apply</button>
                </Link>
              )}

              {/* <button className='btn btn-info col-4' style={{margin:"5px"}}> Apply</button> */}
            </div>
          </div>
        </div>
        <div className='row' style={{ borderRadius: "50%", paddingTop: "40px" }}>
          <img src={Theme2Img} style={{ borderRadius: "5%" }} className='col-4' alt="image" />
          <div className='col-8'>
            <h2 className='' style={{ fontWeight: "bold", fontSize: "19px", color: "#024077", paddingTop: "40px", paddingBottom: "20px" }}>Gp - Free Multipurpose HTML CS Template</h2>
            <span className='' style={{ fontSize: "18px" }}>Gp is a clean and modern website template created with CS framework. It's a professional and powerful business consulting template carefully crafted for designer, artists, company, photographer, videographer, architect etc. Gp also could easily be</span>
            <div className='row' style={{ padding: "30px" }}>
              {/* <button className='btn btn-info col-4' style={{margin:"5px"}}>Live Demo</button> */}
              {localStorage.getItem("IsloggedIn") ? (
                <Link className="col-4" to="/theme2">
                  <button className='get-started-btn scrollto form-control' style={{ margin: "5px" }} onClick={()=>(localStorage.setItem("Theme","2"))}>Apply</button>
                </Link>
              ) : (
                <Link className="col-4" to="/login">
                   <button className='get-started-btn scrollto form-control' style={{ margin: "5px" }}>Apply</button>
                </Link>
              )}
              {/* <button className='btn btn-info col-4' style={{margin:"5px"}}> Apply</button> */}
            </div>
          </div>
        </div>
        {/* <label>
          Theme 1
          <input
            type="radio"
            value="theme1"
            checked={selectedTheme === "theme1"}
            onChange={() => handleThemeChange("theme1")}
          />
          <br />
          <img src="https://CSmade.com/content/templatefiles/Append/Append-CS-website-template.webp" height={200} width={250} alt="image" />
        </label>
        &emsp; &emsp; &emsp; &emsp; */}
        {/* <label>
          Theme 2
          <input
            type="radio"
            value="theme2"
            checked={selectedTheme === "theme2"}
            onChange={() => handleThemeChange("theme2")}
          />
          <br />
          <img src="https://CSmade.com/content/templatefiles/Gp/Gp-CS-website-template.webp" height={200} width={250} alt="image" />
        </label> */}
     
      </div>
    </>
  )
}

export default Home
