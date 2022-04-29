import React, { Component } from "react";
import Slider from "react-slick";

export default class CardCarousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 500,
      autoplaySpeed: 500,
      cssEase: "linear"
    };
    return (
      <div>
        <h2>Auto Play</h2>
        <Slider {...settings}>
          <div>
            <img src='https://res.cloudinary.com/dunnzyptg/image/upload/v1651173450/samples/visa-debit-card_odl2qg.png' alt='card' />
          </div>
          <div>
          <img src='https://res.cloudinary.com/dunnzyptg/image/upload/v1651173445/samples/prepaidvisa-with-text_z2bfbs.png' alt='card' />
          </div>
          <div>
          <img src='https://res.cloudinary.com/dunnzyptg/image/upload/v1651173443/samples/visagolddebit-400x225_xbgczb.jpg' alt='card' />
          </div>
          <div>
          <img src='https://res.cloudinary.com/dunnzyptg/image/upload/v1651173441/samples/visaclassicdebit-400x225_aznevw.jpg' alt='card' />
          </div>
        </Slider>
      </div>
    );
  }
}