import React from "react";
import LottieImage from "./LottieImage";
import NotFoundImage from "../../assets/notFound/NotFoundImage.json";

// NotFoundImage.json.js
function NotFound() {
  return (
    <div>
      <div style={{ marginTop: "200px" }}>
        <LottieImage
          width="300px"
          height="200px"
          animationData={NotFoundImage}
        />

        <div>
          <h1 style={{ color: "#005ce6", textAlign: "center" }}>
            Page Not Found
          </h1>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
