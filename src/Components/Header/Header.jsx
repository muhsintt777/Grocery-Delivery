import React, { useState } from "react";
import "./Header.css";

import SearchIcon from "../../assets/icons/SearchIcon";

function Header() {
  const [user, setUser] = useState(false);
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
        <button>
          <SearchIcon />
        </button>
      </div>
      {user ? <p>TRUE</p> : <p>FALSE</p>}
      {user && <p>Not Logged In</p>}
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
