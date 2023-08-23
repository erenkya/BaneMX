import React from "react";
import OldMerchData from "./oldMerchData.js";
import style from "./oldMerchPage.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
        <p>Explore Our Previous Merch Collections</p>
      </div>

      <div className={style.sliderCont}>
        <Slider {...settings}>
          {OldMerchData.map((item) => (
            <div className={style.card}>
              <div className={style.cardContainer}>
                <div className={style.cardTop}>
                  <img src={item.image} alt="" />
                </div>
                <div className={style.cardBottom}>
                  <div className={style.info}>
                    <span>{item.name}</span>
                    <p>{item.price}</p>
                  </div>
                  <div className={style.buttonContainer}>
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
