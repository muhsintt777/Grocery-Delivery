import React from "react";
import "./Body.css";
import Catogories from "./Catogories/Catogories";
import vegetablesPic from "./Vegetables.jpg";
import fruitsPic from "./Fruits.jpg";
import snacksPic from "./Snacks.jpg";
import biscuitsPic from "./Biscuits.jpg";
import coldDrinksPic from "./ColdDrinks.jpg";
import petCarePic from "./PetCare.jpg";

function Body() {
  return (
    <div className="body">
      <h1>Categories</h1>
      <div className="grid">
        <div className="body_catogories_containers">
          <Catogories image={vegetablesPic} name={"Vegetables"} />
        </div>
        <div className="body_catogories_containers">
          <Catogories image={fruitsPic} name={"Fruits"} />
        </div>
        <div className="body_catogories_containers">
          <Catogories image={snacksPic} name={"Snacks"} />
        </div>
        <div className="body_catogories_containers">
          <Catogories image={biscuitsPic} name={"Biscuits"} />
        </div>
        <div className="body_catogories_containers">
          <Catogories image={coldDrinksPic} name={"Cold Drinks"} />
        </div>
        <div className="body_catogories_containers">
          <Catogories image={petCarePic} name={"Pet Care"} />
        </div>
      </div>
    </div>
  );
}

export default Body;
