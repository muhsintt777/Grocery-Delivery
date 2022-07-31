import React from "react";
import FacebookIcon from "../../assets/icons/FacebookIcon";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_description">
        <p>&#169; Green Commerce Private Limited 2016-2022</p>
      </div>
      <div className="footer_icons">
        <FacebookIcon />
      </div>
    </div>
  );
}

export default Footer;
