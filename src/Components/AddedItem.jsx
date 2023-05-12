import React from "react";

function AddedItem({ data, cart, increment, decrement }) {
  return (
    <div className="AddedItem">
      <img className="AddedItem_image" src={data.img}></img>
      <div className="AddedItem_title">{data.title}</div>

      <div className="AddedItem_price">{data.price}</div>
      <div
        className="AddedItem_decrement"
        onClick={() => {
          decrement(data);
        }}
      >
        -
      </div>
      <div className="AddedItem_quantity">{data.quantity}</div>
      <div
        className="AddedItem_increment"
        onClick={() => {
          increment(data);
        }}
      >
        +
      </div>
    </div>
  );
}

export default AddedItem;
