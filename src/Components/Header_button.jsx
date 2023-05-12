import React from "react";

function Header_button({ img, cartCounter }) {
  return (
    <div className="Header_Button">
      <div className="Header_Button_image">
        <img src={img} />
      </div>
      <div className="Header_Button_counter">{cartCounter.itemsInCart}</div>
    </div>
  );
}

export default Header_button;
