import React, { useState } from "react";
import * as faceapi from "face-api.js";
import { MetroSpinner } from "react-spinners-kit";

const DetectByCamera = ({ clickedImage }) => {
  const [matchingImages, setMatchingImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleImageUpload = async () => {
    debugger;
    setLoading(true);
    setMatchingImages([]);

    try {
      await loadModels();
      const imagesResponse = await fetch("http://localhost:5000/images");
      const images = await imagesResponse.json();
      const clickedDescriptor = await getSingleFaceDescriptor(clickedImage);
      const matchedFaces = [];

      for (const image of images) {
        debugger;
        if (image.startsWith("data:image/jpeg;base64,/9j/")) {
          const descriptors = await getAllFacesDescriptors(image);
          if (descriptors.length > 0) {
            const faceMatcher = new faceapi.FaceMatcher(descriptors);
            const bestMatch = faceMatcher.findBestMatch(clickedDescriptor);
            if (bestMatch.distance < 0.4) {
              matchedFaces.push(image);
            }
          }
        }
      }
      setMatchingImages(matchedFaces);
    } catch (error) {
      console.error("Error in handleImageUpload:", error);
    } finally {
      setLoading(false);
    }
  };

  const loadModels = async () => {
    debugger;
    await Promise.all([
      faceapi.nets.ssdMobilenetv1.loadFromUri("/models"),
      faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
      faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
      faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
    ]);
  };

  const getAllFacesDescriptors = async (imagePath) => {
    debugger;
    const imgElement = new Image();
    imgElement.src = imagePath;
    const detections = await faceapi
      .detectAllFaces(imgElement)
      .withFaceLandmarks()
      .withFaceDescriptors();
    return detections
      ? detections.map((detection) => detection.descriptor)
      : [];
  };

  const getSingleFaceDescriptor = async (imagePath) => {
    debugger;
    const imgElement = new Image();
    imgElement.src = imagePath;
    const detection = await faceapi
      .detectSingleFace(imgElement)
      .withFaceLandmarks()
      .withFaceDescriptor();
    return detection ? detection.descriptor : null;
  };

  return (
    <>
      <div>
        {clickedImage && (
          <>
            <button
              type="button"
              className="btn btn-success"
              onClick={handleImageUpload}
            >
              Match Pictures
            </button>
          </>
        )}
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
            <MetroSpinner size={200} color="#66ffff" loading={loading} />
          </div>
        ) : matchingImages.length > 0 ? (
          <div>
            <h2>Matching Images</h2>
            <div className="image-container">
              {matchingImages.map((match, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                  }}
                >
                  {index % 5 === 0 && (
                    <div
                      style={{
                        width: "100%",
                        marginBottom: "10px",
                      }}
                    >
                      {matchingImages
                        .slice(index, index + 4)
                        .map((image, innerIndex) => (
                          <img
                            key={innerIndex}
                            src={image}
                            height={300}
                            width={350}
                            alt={`Matching Image ${index + innerIndex + 1}`}
                            style={{
                              // objectFit: "cover",
                              margin: "5px",
                            }}
                          />
                        ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ) : (
          <h2>No matching images found</h2>
        )}
      </div>
    </>
  );
};

export default DetectByCamera;
