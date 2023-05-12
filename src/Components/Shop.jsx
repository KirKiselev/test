import React from "react";
import Header from "./Header";
import Item from "./Item";
import Footer from "./Footer";

function Shop({ data, cartCounter, addToCart }) {
  return (
    <div className="Shop">
      <Header cartCounter={cartCounter} />
      <div className="Shop_items">
        {data.map((elem) => (
          <Item data={elem} key={elem.id} addToCart={addToCart} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Shop;
