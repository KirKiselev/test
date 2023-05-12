import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import AddedItem from "./AddedItem";

function Cart({ data, cartCounter, increment, decrement }) {
  return (
    <div className="Cart">
      <Header cartCounter={cartCounter} />

      <div className="Cart_observer">
        <div className="Cart_total">
          <div className="Cart_total_text">Итог</div>
          <div className="Cart_total_summ">{cartCounter.totalPrice}</div>
          <div className="Cart_orderButton">Перейти к оформлению</div>
        </div>
        {data.map((elem) => (
          <AddedItem
            data={elem}
            key={elem.id}
            increment={increment}
            decrement={decrement}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default Cart;
