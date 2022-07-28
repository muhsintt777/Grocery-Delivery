import React from "react";
import "./Catogories.css";

function Catogories(props) {
  return (
    <div className="body_catogories">
      <img src={props.image} alt="" />
      <p className="body_catogories_name">{props.name}</p>
    </div>
  );
}

export default Catogories;
