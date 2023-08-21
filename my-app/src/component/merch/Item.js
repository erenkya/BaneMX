import React from "react";
import style from "./Item.module.css";

const Item = (props) => {
  const imageStyles = {
    transform: `scale(${props.scale || 1})`,
  };

  return (
    <div className={style.container}>
      <marquee className={style.marquee}>
        <div>
          <div>
            <p>🔥NEW MERCH </p>
            <p>🎖️BRAND NEW </p>
            <p>🌟HIGH QUALITY </p>
            <p>🌍SHIPPING ALL OVER THE WORLD</p>
            <p>🔥NEW MERCH </p>
            <p>🎖️BRAND NEW </p>
            <p>🌟HIGH QUALITY </p>
            <p>🌍SHIPPING ALL OVER THE WORLD</p>
            <p>🔥NEW MERCH </p>
            <p>🎖️BRAND NEW </p>
            <p>🌟HIGH QUALITY </p>
            <p>🌍SHIPPING ALL OVER THE WORLD</p>
            <p>🔥NEW MERCH </p>
            <p>🎖️BRAND NEW </p>
            <p>🌟HIGH QUALITY </p>
            <p>🌍SHIPPING ALL OVER THE WORLD</p>
            <p>🔥NEW MERCH </p>
            <p>🎖️BRAND NEW </p>
            <p>🌟HIGH QUALITY </p>
            <p>🌍SHIPPING ALL OVER THE WORLD</p>
            <p>🔥NEW MERCH </p>
            <p>🎖️BRAND NEW </p>
            <p>🌟HIGH QUALITY </p>
            <p>🌍SHIPPING ALL OVER THE WORLD</p>
            <p>🔥NEW MERCH </p>
            <p>🎖️BRAND NEW </p>
            <p>🌟HIGH QUALITY </p>
            <p>🌍SHIPPING ALL OVER THE WORLD</p>
            <p>🔥NEW MERCH </p>
            <p>🎖️BRAND NEW </p>
            <p>🌟HIGH QUALITY </p>
            <p>🌍SHIPPING ALL OVER THE WORLD</p>
            <p>🔥NEW MERCH </p>
            <p>🎖️BRAND NEW </p>
            <p>🌟HIGH QUALITY </p>
            <p>🌍SHIPPING ALL OVER THE WORLD</p>
          </div>
        </div>
      </marquee>
      <div className={style.name}>
        <p>Limited Edition</p>
        <h1>{props.name}</h1>
      </div>
      <div className={style.photo}>
        <img src={props.photoUrl} alt="" style={imageStyles} />
      </div>
      <div className={style.info}>
        <ul>
          <li>
            <b>Color:</b> {props.info.color}
          </li>
          <li>
            <b>Frame:</b> {props.info.frame}
          </li>
          <li>
            <b>Geometry:</b> {props.info.geometry}
          </li>
          <li>
            <b>Hedset:</b> {props.info.hedset}
          </li>
        </ul>
        <div className={style.purchase}>
          <p className={style.price}>{props.price}</p>
          <button className={style.purchaseButton}>Purchase</button>
        </div>
      </div>
    </div>
  );
};

export default Item;
