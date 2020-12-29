import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../styles/slider.scss";
import ImagePlay from "../assets/slider/play-video.png";

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
    />
  );
}

export default class SliderMovies extends Component {
  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
  }
  play() {
    this.slider.slickPlay();
  }
  pause() {
    this.slider.slickPause();
  }
  render() {
    const settings = {
      customPaging: function(i) {
        return (
          <Link className="adot__link" to="/movies/details">
            <img src={`/assets/slider/adot-${i + 1}.png`} alt=""/>
          </Link>
        );
      },
      dots: true,
      dotsClass: "slick-dots slick-thumb",
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
    return (
      <div className="block-slider">
        <Slider className="slider" ref={slider => (this.slider = slider)} {...settings}>
          <div className="slider__list">
            <img className="slider__image" src={"/assets/slider/slider1.png"}  alt=""/>
            <img className="play" src={ImagePlay} alt=""/>
          </div>
          <div className="slider__list">
            <img className="slider__image" src={"/assets/slider/slider2.png"}  alt=""/>
            <img className="play" src={ImagePlay} alt=""/>
          </div>
          <div className="slider__list">
            <img className="slider__image" src={"/assets/slider/slider3.png"}  alt=""/>
            <img className="play" src={ImagePlay} alt=""/>
          </div>
          <div className="slider__list">
            <img className="slider__image" src={"/assets/slider/slider4.png"}  alt=""/>
            <img className="play" src={ImagePlay} alt=""/>
          </div>
        </Slider>
      </div>
    );
  }
}