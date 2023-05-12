import React from "react";

function Item({ data, addToCart }) {
  return (
    <div className="Item">
      <img className="Item_Img" src={data.img} />
      <div className="Item_Title">{data.title}</div>
      <div className="Item_Rate">
        <img src={"../../SVG/Star.png"} alt="star" /> {data.rate}
      </div>
      <div className="Item_Price">{data.price}</div>
      <div
        className="Item_buy"
        onClick={() => {
          addToCart(data);
        }}
      >
        Купить
      </div>
    </div>
  );
}

export default Item;
