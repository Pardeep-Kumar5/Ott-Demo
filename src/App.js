import logo from './logo.svg';
import './App.css';
import Theme1 from './Theme1/Theme1';
import Theme2 from './Theme2/Theme2';
import Home from './Home';
import { BrowserRouter } from 'react-router-dom';
import Register from "./Components/Register"
import Login from "./Components/Login"
 import Navbar  from "./Components/NavBar"
import { Routes, Route } from "react-router-dom";
import DetectByCamera from './Face-Detaction/DetectByCamera';
import DetectFaceByFolder from './Face-Detaction/DetectFaceByFolder';

function App() {
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
   </>
  );
}

export default App;
