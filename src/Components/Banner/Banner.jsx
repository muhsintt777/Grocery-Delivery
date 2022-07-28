import React from "react";
import "./Banner.css";
import bannerPic from "./Bannerr.jpg";

function Banner() {
  return (
    <div className="banner">
      <img src={bannerPic} alt="Banner" />
    </div>
  );
}

export default Banner;
