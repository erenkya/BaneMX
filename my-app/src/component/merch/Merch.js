import React from "react";
import Item from "./Item";
import style from "./Merch.module.css";

const Merch = () => {
  return (
    <React.Fragment>
      <div className={style.merch}>
        <div className={style.merchContainer}>
          <Item
            name="GTM"
            photoUrl="https://www.customriders.com/images/cbfi_nastazio_trl_black_Left.jpg"
            info={{
              color: "Gloss Black",
              frame: "21” TT (XL) Cro-Mo Front Tri",
              geometry: "Trail w/74.5° HA",
              hedset: "Integrated",
            }}
            color="1B1B1D"
            scale="1.05"
            price="1099.99$"
          />
          <Item
            name="Darko"
            photoUrl="https://st3.myideasoft.com/idea/cc/42/myassets/products/888/basliksiz-1.png?revision=1641384376"
            price="1659.99$"
            color="B13740"
            info={{
              color: "GLOSSY RAW (LSD)",
              frame: "BATTLESHIP FRAME, 4130 FULL CRMO",
              geometry: "ÉCLAT `STRANGLER` BAR, ",
              hedset: "ÉCLAT `WAVE 16 INT`. HEADSET",
            }}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Merch;
