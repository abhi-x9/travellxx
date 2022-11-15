import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Fragment } from "react";
import './SliderMain.css';
import { NavLink } from "react-router-dom";
import { useAboutContext } from "../../contextApi/clientContext";
import { Loading } from "../UI/Loading";

const  SliderMain = () => {

  const { slider, isLoading, isError} = useAboutContext();

  if(isLoading) {
    return <div className='centered'><Loading /></div>
  }
  if(isError) {
    return <h1>There was an ERROR</h1>
  }
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      cssEase: "linear",
      arrows: false,
    };

    return (
        <div className="slider-container">
        <Slider {...settings}>
         { slider.map((item) => {
          return (
           <Fragment key={item._id}>
              <img src={`/uploads/${item.pic}`} className="slider-img" alt="no"/>
              <h1 className="slider-h1">{item.title}</h1>
              <NavLink className='slider-button' to={item.go}>Know More!!</NavLink>
    
            </Fragment>      
         )
         })}
        </Slider>
        </div>
     
    );
  }

export default SliderMain;
