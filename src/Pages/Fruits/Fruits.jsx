import React from "react";
import Item from "../../Components/Items/Item";
import "./Fruits.css";
import applePic from "./FruitsImages/Apple.jpg";
import greenApplePic from "./FruitsImages/GreenApple.jpg";
import avocadoPic from "./FruitsImages/Avocado.jpg";
import mangoPic from "./FruitsImages/Mango.webp";
import rawMangoPic from "./FruitsImages/RawMango.webp";
import bananaPic from "./FruitsImages/Banana.webp";
import watermelonPic from "./FruitsImages/Watermelon.webp";

function Fruits() {
  return (
    <div className="fruits_container">
      <h1>Fruits</h1>
      <div className="fruits_grid">
        <div className="fruits_grid_item_container">
          <Item
            pic={applePic}
            name={"Apple"}
            quantity={"500 g"}
            price={"170"}
          />
        </div>
        <div className="fruits_grid_item_container">
          <Item
            pic={greenApplePic}
            name={"Green Apple"}
            quantity={"500 g"}
            price={"270"}
          />
        </div>
        <div className="fruits_grid_item_container">
          <Item
            pic={avocadoPic}
            name={"Avocado"}
            quantity={"250 g"}
            price={"217"}
          />
        </div>
        <div className="fruits_grid_item_container">
          <Item pic={mangoPic} name={"Mango"} quantity={"1 kg"} price={"120"} />
        </div>
        <div className="fruits_grid_item_container">
          <Item
            pic={rawMangoPic}
            name={"Raw Mango"}
            quantity={"500 g"}
            price={"59"}
          />
        </div>
        <div className="fruits_grid_item_container">
          <Item
            pic={bananaPic}
            name={"Banana"}
            quantity={"500 g"}
            price={"26"}
          />
        </div>
        <div className="fruits_grid_item_container">
          <Item
            pic={watermelonPic}
            name={"Watermelon"}
            quantity={"2 kg"}
            price={"45"}
          />
        </div>
      </div>
    </div>
  );
}

export default Fruits;
