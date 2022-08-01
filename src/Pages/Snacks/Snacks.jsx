import React from "react";
import Item from "../../Components/Items/Item";
import "./Snacks.css";
import pringlesPic from "./SnacksImages/Pringles.avif";
import bingoPic from "./SnacksImages/Bingo.avif";
import peppyPic from "./SnacksImages/Peppy.avif";
import tooYumPic from "./SnacksImages/TooYum.avif";
import crustiesPic from "./SnacksImages/Crusties.avif";
import parleTangyPic from "./SnacksImages/ParleTangy.avif";
import laysPic from "./SnacksImages/Lays.avif";
import parleClassicPic from "./SnacksImages/ParleClassic.avif";

function Snacks() {
  return (
    <div className="snacks_container">
      <h1>Snacks</h1>
      <div className="snacks_grid">
        <div className="snacks_grid_item_container">
          <Item
            pic={pringlesPic}
            name={"Pringles"}
            quantity={"107 g"}
            price={"106"}
          />
        </div>
        <div className="snacks_grid_item_container">
          <Item pic={bingoPic} name={"Bingo"} quantity={"100 g"} price={"40"} />
        </div>
        <div className="snacks_grid_item_container">
          <Item
            pic={peppyPic}
            name={"Peppy"}
            quantity={"2 x 60 g"}
            price={"78"}
          />
        </div>
        <div className="snacks_grid_item_container">
          <Item
            pic={tooYumPic}
            name={"Too Yum"}
            quantity={"70 g"}
            price={"24"}
          />
        </div>
        <div className="snacks_grid_item_container">
          <Item
            pic={crustiesPic}
            name={"Crusties"}
            quantity={"50 g"}
            price={"24"}
          />
        </div>
        <div className="snacks_grid_item_container">
          <Item
            pic={parleTangyPic}
            name={"Parle Tangy"}
            quantity={"70 g"}
            price={"24"}
          />
        </div>
        <div className="snacks_grid_item_container">
          <Item pic={laysPic} name={"Lays"} quantity={"50 g"} price={"20"} />
        </div>
        <div className="snacks_grid_item_container">
          <Item
            pic={parleClassicPic}
            name={"Parle Classic"}
            quantity={"70 g"}
            price={"24"}
          />
        </div>
      </div>
    </div>
  );
}

export default Snacks;
