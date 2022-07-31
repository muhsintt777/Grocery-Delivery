import React from "react";
import Item from "../Components/Items/Item";
import tomatoPic from "./TomatoPic.jpg";
import "./Vegetables.css";
import carrotPic from "./VegetablesImages/Carrot.jpg";
import cucumberPic from "./VegetablesImages/Cucumber.jpg";
import gingerPic from "./VegetablesImages/Ginger.jpg";
import greenChillyPic from "./VegetablesImages/GreenChilly.jpg";
import lemonPic from "./VegetablesImages/Lemon.jpg";
import onionPic from "./VegetablesImages/Onion.jpg";

function Vegetables() {
  return (
    <div className="vegetables_container">
      <h1>vegetables</h1>
      <div className="vegetables_grid">
        <div className="grid_item_container">
          <Item
            pic={tomatoPic}
            name={"Tomato"}
            quantity={"500 g"}
            price={"36"}
          />
        </div>
        <div className="grid_item_container">
          <Item
            pic={carrotPic}
            name={"Carrot"}
            quantity={"500 g"}
            price={"51"}
          />
        </div>
        <div className="grid_item_container">
          <Item
            pic={cucumberPic}
            name={"Cucumber"}
            quantity={"400 g - 600 g"}
            price={"30"}
          />
        </div>
        <div className="grid_item_container">
          <Item
            pic={gingerPic}
            name={"Ginger"}
            quantity={"250 g"}
            price={"60"}
          />
        </div>
        <div className="grid_item_container">
          <Item
            pic={greenChillyPic}
            name={"Green Chilly"}
            quantity={"100 g"}
            price={"12"}
          />
        </div>
        <div className="grid_item_container">
          <Item pic={lemonPic} name={"Lemon"} quantity={"150 g"} price={"46"} />
        </div>
        <div className="grid_item_container">
          <Item pic={onionPic} name={"Onion"} quantity={"1 kg"} price={"21"} />
        </div>
      </div>
    </div>
  );
}

export default Vegetables;
