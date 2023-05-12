import "./App.css";
import Cart from "./Components/Cart";
import NotFound from "./Components/NotFound";
import Shop from "./Components/Shop";
import Headphones from "./Headphones";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(Headphones);
  const [addedToCart, setAddedToCart] = useState([]);
  const [cartCounter, setCartCounter] = useState({
    totalPrice: 0,
    itemsInCart: 0,
  });

  useEffect(
    (cartCounter) => {
      let totalPrice = 0;
      let itemsInCart = 0;
      for (let elem of addedToCart) {
        totalPrice += elem.price * elem.quantity;
        itemsInCart += elem.quantity;
      }
      setCartCounter({ totalPrice, itemsInCart });
    },
    [addedToCart]
  );
  //___add_item_ to_cart____
  function f_addToCart(item) {
    let isItemExist = false;
    let quantity;
    let tmpArr = [];

    if (addedToCart.length == 0) {
      setAddedToCart([{ ...item, quantity: 1 }]);
    } else {
      for (let elem of addedToCart) {
        if (item.id == elem.id) {
          isItemExist = true;
          quantity = elem.quantity + 1;
          tmpArr.push({ ...elem, quantity });
        } else {
          if (elem.quantity != undefined) {
            tmpArr.push({ ...elem });
          } else {
            tmpArr.push({ ...elem, quantity: 1 });
          }
        }
      }

      if (!isItemExist) {
        tmpArr.push({ ...item, quantity: 1 });
      }

      setAddedToCart(tmpArr);
    }
    console.log(addedToCart);
  }
  //____increase_quantity_of_added_items____
  function addItem(item) {
    let quantity;
    let tmpArr = [];

    for (let elem of addedToCart) {
      if (item.id == elem.id) {
        quantity = elem.quantity + 1;
        tmpArr.push({ ...elem, quantity });
      } else {
        tmpArr.push({ ...elem });
      }
    }

    setAddedToCart(tmpArr);

    console.log(addedToCart);
  }
  //____decrease_quantitu_of_added_items____
  function removeItem(item) {
    let quantity;
    let tmpArr = [];

    for (let elem of addedToCart) {
      if (item.id == elem.id) {
        if (elem.quantity > 1) {
          quantity = elem.quantity - 1;
          tmpArr.push({ ...elem, quantity });
        }
      } else {
        tmpArr.push({ ...elem });
      }
    }

    setAddedToCart(tmpArr);

    console.log(addedToCart);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Shop
                data={data}
                cartCounter={cartCounter}
                addToCart={f_addToCart}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                data={addedToCart}
                cartCounter={cartCounter}
                increment={addItem}
                decrement={removeItem}
              />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
