import React from "react";
import Testimon from "./testimon";
import style from "./testimonial.module.css";

const testimonial = () => {
  return (
    <div className={style.container}>
      <div className={style.testimonialContainer}>
        <Testimon image="" name="" comment="" score="" />
        <Testimon image="" name="" comment="" score="" />
        <Testimon image="" name="" comment="" score="" />
        <Testimon image="" name="" comment="" score="" />
      </div>
      <div className={style.backgroundImage}>Photo</div>
    </div>
  );
};

export default testimonial;
