import React from "react";
import style from "./testimon.module.css";

const testimon = (props) => {
  return (
    <div className={style.container}>
      <div className={style.imageContainer}>
        <img src={props.image} alt="" />
        <div>{props.name}</div>
      </div>
      <div className={style.otherContainer}>
        <div className={style.comment}>{props.comment}</div>
        <div>
          <div className={style.score}>{props.score}/5 ⭐</div>
        </div>
      </div>
    </div>
  );
};

export default testimon;
