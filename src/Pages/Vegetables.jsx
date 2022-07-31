import React from "react";
import Item from "../Components/Items/Item";
import tomatoPic from "./TomatoPic.jpg";

function Vegetables() {
  return (
    <div>
      <h1>vegetables</h1>
      <Item pic={tomatoPic} name={"Tomato"} quantity={"200 g"} price={"36"} />
    </div>
  );
}

export default Vegetables;
