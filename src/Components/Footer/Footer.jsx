import React from "react";
import FacebookIcon from "../../assets/icons/FacebookIcon";
import InstagramIcon from "../../assets/icons/InstagramIcon";
import LinkedInIcon from "../../assets/icons/LinkedInIcon";
import TwitterIcon from "../../assets/icons/TwitterIcon";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_description">
        <p>&#169; Green Commerce Private Limited 2016-2022</p>
      </div>
      <div className="footer_icons">
        <div className="footer_icon_container">
          <FacebookIcon />
        </div>
        <div className="footer_icon_container">
          <TwitterIcon />
        </div>
        <div className="footer_icon_container">
          <InstagramIcon />
        </div>
        <div className="footer_icon_container">
          <LinkedInIcon />
        </div>
      </div>
    </div>
  );
}

export default Footer;
