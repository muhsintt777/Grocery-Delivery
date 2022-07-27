import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header_logo">
        <h1>ABCDEF</h1>
      </div>
      <div className="header_address">
        <p>adress</p>
      </div>
      <div className="header_searchBar">
        <input type="text" placeholder="Search" />
        <button>Sea</button>
      </div>
      <div className="header_login">
        <p>login</p>
      </div>
      <div className="header_myCart">
        <button>My Cart</button>
      </div>
    </div>
  );
}

export default Header;
