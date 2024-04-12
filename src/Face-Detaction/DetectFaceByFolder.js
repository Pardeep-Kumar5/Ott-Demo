import React, { useEffect, useState } from "react";
import axios from "axios";
import * as faceapi from "face-api.js";
import { MetroSpinner } from "react-spinners-kit";
import NavbarTheme1 from "../Theme1/NavbarTheme1";
import { useNavigate } from "react-router-dom";
import NavbarTheme2 from "../Theme2/NavbarTheme2";
import "./Face.css"

const DetectFaceByFolder = () => {
  const [uniqueFaces, setUniqueFaces] = useState([]);
  const [images, setImages] = useState([]);
  const [sImage, setSImage] = useState([]);
  const [selectedFace, setSelectedFace] = useState();
  const [loading, setLoading] = useState(false);
  const [loading1, setLoading1] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    // if (!localStorage.getItem("IsloggedIn")) {
    //   navigate("/login");
    //   return;
    // }
    getAllImages();
    loadModels();
  }, []);

  const loadModels = async () => {
    try {
      debugger;
      await Promise.all([
        faceapi.nets.ssdMobilenetv1.loadFromUri("/models"),
        faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
        faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
        faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
      ]);
    } catch (error) {
      console.error("Error loading face detection models:", error);
    }
    setLoading(false);
  };

  const getAllImages = async () => {
    debugger;
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:5000/images");
      setImages(response.data);
      detectAndSaveFaces(response.data);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  const detectAndSaveFaces = async (images) => {
    debugger;
    setLoading(true);

    try {
      const uniqueFaces = [];
      for (const imageData of images) {
        if (imageData.startsWith("data:image/jpeg;base64,/9j/")) {
          const imgElement = new Image();
          imgElement.src = imageData;
          const detections = await faceapi
            .detectAllFaces(
              imgElement,
              await new faceapi.SsdMobilenetv1Options({ minConfidence: 0.6 })
            )
            .withFaceLandmarks()
            .withFaceDescriptors();
          for (const detection of detections) {
            const faceCanvas = drawFace(imgElement, detection);
            const faceBlob = await canvasToBlob(faceCanvas);
            const faceDataUrl = await blobToBase64(faceBlob);
            uniqueFaces.push({
              imgSrc: faceDataUrl,
              descriptor: detection.descriptor,
            });
          }
        }
      }
      const uniqueFacesFiltered = filterUniqueFaces(uniqueFaces);
      setUniqueFaces(uniqueFacesFiltered);
      setLoading(false);
    } catch (error) {
      console.error("Error while detecting and saving faces:", error);
    }
  };

  const drawFace = (img, detection) => {
    debugger;
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const { width, height, _x, _y } = detection.alignedRect.box;
    canvas.width = width;
    canvas.height = height;
    ctx.drawImage(img, _x, _y, width, height, 0, 0, width, height);
    return canvas;
  };

  const canvasToBlob = async (canvas) => {
    return new Promise((resolve) => {
      canvas.toBlob((blob) => {
        resolve(blob);
      });
    });
  };

  const blobToBase64 = async (blob) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = () => {
        resolve(reader.result);
      };
    });
  };

  const filterUniqueFaces = (faces) => {
    const uniqueFaces = [];
    faces.forEach((currentFace) => {
      const isUnique = !uniqueFaces.some((uniqueFace) => {
        const distance = faceapi.euclideanDistance(
          currentFace.descriptor,
          uniqueFace.descriptor
        );
        return distance < 0.5;
      });
      if (isUnique) {
        uniqueFaces.push(currentFace);
      }
    });
    return uniqueFaces;
  };

  const handleFaceClick = async (clickedImage) => {
    debugger;
    try {
      setLoading1(true);
      var similarImages = [];
      for (const image of images) {
        if (image.startsWith("data:image/jpeg;base64,/9j/")) {
          const img = await faceapi.fetchImage(image);
          const localDetections = await faceapi
            .detectAllFaces(img)
            .withFaceLandmarks()
            .withFaceDescriptors();

          if (localDetections.length > 0) {
            const fetchMatcher = new faceapi.FaceMatcher(localDetections);
            const bestmatch = fetchMatcher.findBestMatch(clickedImage);
            if (bestmatch.distance < 0.5) {
              similarImages.push(image);
            }
          }
        }
      }
      setSImage(similarImages);
      setLoading1(false);
      console.log(sImage);
    } catch (error) {
      console.error("Error finding similar faces:", error);
    }
  };
  return (
    // #hero {
    //   width: 100%;
    //   min-height: 100vh;
    //   background: url("../../commonImages/ThemeBackgroundImage.jpg") top center;
    //   background-size: cover;
    //   position: relative;
    // }
    <div className="face">
      {/* {localStorage.getItem("Theme") == 1 ? <NavbarTheme1 /> : <NavbarTheme2 />} */}
      <NavbarTheme1/>
      <div style={{ paddingTop: "100px" }}>
        <h3>Unique Faces:</h3>
        <div className="face-container text-center">
          {loading ? (
            <div
              style={{
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 9999,
              }}
            >
              {/* <MetroSpinner size={200} color="#66ffff" loading={loading} /> */}
              <img className="text-center" style={{paddingRight:"70px",paddingTop:"-50px"}} src="https://i.pinimg.com/originals/3d/6a/a9/3d6aa9082f3c9e285df9970dc7b762ac.gif" />
            </div>
          ) : (
            <>
              {uniqueFaces.map((face, index) => (
                <img
                  style={{ borderRadius: "50%", padding: "10px" }}
                  key={index}
                  src={face.imgSrc}
                  height={160}
                  width={160}
                  alt={`Face ${index}`}
                  onClick={() => handleFaceClick(face.descriptor)}
                  className={
                    selectedFace && face.descriptor === selectedFace
                      ? "selected"
                      : ""
                  }
                />
              ))}
            </>
          )}
        </div>  
      </div>
      <div>
        <div className="image-container text-center">
          {loading1 ?
            <>
            <img className="text-center" style={{paddingRight:"70px",paddingTop:"-150px"}} src="https://i.pinimg.com/originals/3d/6a/a9/3d6aa9082f3c9e285df9970dc7b762ac.gif" />
            </>
            : <>
              <div className="text-center">
              {sImage.map((image, index) => (
                <>
                  <img
                    style={{ padding: "7px", borderRadius: "10%" }}
                    key={index}
                    src={image}
                    height={250}
                    width={250}
                    alt={`Image ${index}`}
                  />
                </>
              ))}
              </div>
            </>}

        </div>
      </div>
    </div>
  );
};

export default DetectFaceByFolder;
