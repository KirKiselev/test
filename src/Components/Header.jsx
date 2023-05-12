import React from "react";
import { Link } from "react-router-dom";
import Header_button from "./Header_button";

function Header({ cartCounter }) {
  return (
    <div className="Header">
      <Link to={"/"}>
        <span className="Header_logotext">QPIC</span>
      </Link>
      <div className="Header_buttons">
        <Header_button img={"../../SVG/Heart.svg"} cartCounter={0} />
        <Link to="/cart">
          <Header_button img={"../../SVG/Cart.svg"} cartCounter={cartCounter} />
        </Link>
      </div>
    </div>
  );
}

export default Header;
