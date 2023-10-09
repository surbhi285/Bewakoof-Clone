
import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'
import bewakoof1 from '../Images/bewakoof1.png';
import bewakoof2 from '../Images/bewakoof2.png';
import bewakoof3 from '../Images/bewakoof3.png';
import bewakoof4 from '../Images/bewakoof4.png'

const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  
  function LargerCarousel() {
    const carouselOptions = {
      responsive: responsive,
      autoPlay: true,
      infinite: true,
      autoPlaySpeed: 2000,
      keyBoardControl: true,
      customTransition: "transform 500ms ease-in-out",
      removeArrowOnDeviceType: ["tablet", "mobile"],
    };
  
    return (
      <div className="largerCarousel">
        <Carousel {...carouselOptions}>
          <div>
            <img className="large-slider-img" src={bewakoof1} alt="" />
          </div>
          <div>
            <img className="large-slider-img" src={bewakoof2} alt="" />
          </div>
          <div>
            <img className="large-slider-img" src={bewakoof3} alt="" />
          </div>
          <div>
            <img className="large-slider-img" src={bewakoof4} alt="" />
          </div>
        </Carousel>
      </div>
    );
  }
  
  export default LargerCarousel;