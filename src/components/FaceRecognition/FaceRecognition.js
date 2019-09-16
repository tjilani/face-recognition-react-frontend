import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({ urlPic, boxProp }) => {
  return (
    <div className="center ma" style={{ "marginTop": "2rem" }}>
      <div className="relative">
        <img id="inputImage" src={urlPic} alt="" width="500px" height="auto" />
        <div
          className="bounding-box"
          style={{
            top: boxProp.topRow,
            right: boxProp.rightCol,
            left: boxProp.leftCol,
            bottom: boxProp.bottomRow
          }}
        />
      </div>
    </div>
  );
};

export default FaceRecognition;
