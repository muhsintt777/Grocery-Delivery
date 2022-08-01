import React from "react";
import Item from "../../Components/Items/Item";
import "./Snacks.css";
import pringlesPic from "./SnacksImages/Pringles.avif";

function Snacks() {
  return (
    <div className="snacks_container">
      <h1>Snacks</h1>
      <div className="snack_grid">
        <div className="snacks_grid_item_container">
          <Item
            pic={pringlesPic}
            name={"Pringles"}
            quantity={"107 g"}
            price={"106"}
          />
        </div>
      </div>
    </div>
  );
}

export default Snacks;
