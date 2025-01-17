import React from "react";
import OldMerchData from "./oldMerchData.js";
import style from "./oldMerchPage.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slick-slide.css";

const oldMerchPage = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className={style.container}>
      <div className={style.titleContainer}>
        <marquee className={style.marquee}>
          <div>
            <div>
              <p>⌛Previous Collections </p>
              <p>⌛Previous Collections </p>
              <p>⌛Previous Collections </p>
              <p>⌛Previous Collections </p>
              <p>⌛Previous Collections </p>
              <p>⌛Previous Collections </p>
              <p>⌛Previous Collections </p>
              <p>⌛Previous Collections </p>
              <p>⌛Previous Collections </p>
              <p>⌛Previous Collections </p>
              <p>⌛Previous Collections </p>
              <p>⌛Previous Collections </p>
              <p>⌛Previous Collections </p>
              <p>⌛Previous Collections </p>
              <p>⌛Previous Collections </p>
              <p>⌛Previous Collections </p>
              <p>⌛Previous Collections </p>
              <p>⌛Previous Collections </p>
              <p>⌛Previous Collections </p>
              <p>⌛Previous Collections </p>
              <p>⌛Previous Collections </p>
              <p>⌛Previous Collections </p>
              <p>⌛Previous Collections </p>
              <p>⌛Previous Collections </p>
              <p>⌛Previous Collections </p>
              <p>⌛Previous Collections </p>
              <p>⌛Previous Collections </p>
              <p>⌛Previous Collections </p>
              <p>⌛Previous Collections </p>
              <p>⌛Previous Collections </p>
            </div>
          </div>
        </marquee>
      </div>

      <div className={style.sliderCont}>
        <Slider {...settings}>
          {OldMerchData.map((item) => (
            <div className={style.card}>
              <div className={style.cardContainer}>
                <div className={style.headTitle}>
                  <div className={style.red}>a</div>
                  <span>{item.name}</span>
                  <div className={style.blue}>a</div>
                </div>
                <div className={style.cardTop}>
                  <img src={item.image} alt="" />
                </div>
                <div className={style.cardBottom}>
                  <div className={style.buttonContainer}>
                    <div className={style.subButtonContainer}>
                      <p>{item.price}</p>
                      <span>{`Last ${item.stock} item left`}</span>
                    </div>
                    <button>Purchase</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default oldMerchPage;
