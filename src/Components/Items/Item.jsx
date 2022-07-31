import React from "react";
import "./Item.css";

function Item(props) {
  return (
    <div className="item_container">
      <div className="item_image">
        <img src={props.pic} alt="Item Pic" />
      </div>
      <div className="item_name">
        <p>{props.name}</p>
      </div>
      <div className="item_quantity">
        <p>{props.quantity}</p>
      </div>
      <div className="item_priceAndButton_container">
        <div className="item_price">
          <p>&#8377; {props.price}</p>
        </div>
        <div className="item_button">
          <button className="item_button_btn">ADD</button>
        </div>
      </div>
    </div>
  );
}

export default Item;
