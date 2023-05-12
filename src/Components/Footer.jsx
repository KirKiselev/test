import React from "react";

function Footer() {
  return (
    <div className="Footer">
      <div className="Footer_column1">
        <span className="Footer_logotext">QPIC</span>
      </div>
      <div className="Footer_column2">
        <span>Избранное</span>
        <span>Корзина</span>
        <span>Контакты</span>
      </div>
      <div className="Footer_column3">
        <span>Условия сервиса</span>
        <div className="Footer_column3_language">
          <div>
            <img src={"../../SVG/Globe.svg"} alt="Globe"></img>
          </div>
          <div>
            <span>Каз</span>
          </div>
          <div>
            <span style={{ color: "#FFA542" }}>Рус</span>
          </div>
          <div>
            <span>Eng</span>
          </div>
        </div>
      </div>
      <div className="Footer_column4">
        <a href="www.vk.ru">
          <img src={"../../SVG/VK.svg"} alt="VK_logo" width={"30px"}></img>
        </a>
        <a href="www.whatsapp.com">
          <img
            src={"../../SVG/Whatsapp.svg"}
            alt="Whatsapp_logo"
            width={"30px"}
          ></img>
        </a>
        <a href="www.t.me">
          <img
            src={"../../SVG/Telegram.svg"}
            alt="TG_logo"
            width={"30px"}
          ></img>
        </a>
      </div>
    </div>
  );
}

export default Footer;
