import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Navbar from "./Components/NavBar";
import Theme1 from "./Theme1/Theme1";
import Theme2 from "./Theme2/Theme2";
import Home from "./Home";
import "./App.css"
import DetectByCamera from "./Face-Detaction/DetectByCamera";
import DetectFaceByFolder from "./Face-Detaction/DetectFaceByFolder";
import FixedPlugin from "./Components/FixedPlugin";
import sidebarImage from "./Images/sidebar-5.jpg";

function App() {
  const [hasImage, setHasImage] = useState(true);
  const [image, setImage] = useState(sidebarImage);
  const [color, setColor] = useState("White");

  return (
   <>
   
<BrowserRouter>
    <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/theme1" element={<Theme1 />} />
        <Route path="/theme2" element={<Theme2 />} />
        <Route path="*" element={<Home />} />
        <Route path="/detectByCamera" element={<DetectByCamera />} />
        <Route path="/detectByFolder" element={<DetectFaceByFolder />} />
      </Routes>
      </BrowserRouter>
      <FixedPlugin
        hasImage={hasImage}
        setHasImage={() => setHasImage(!hasImage)}
        color={color}
        setColor={(color) => setColor(color)}
        image={image}
        setImage={(image) => setImage(image)}
      />
   </>
  );
}

export default App;
