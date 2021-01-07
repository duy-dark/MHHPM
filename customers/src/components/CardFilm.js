import React from 'react';
import clock from '../assets/img-clock.png';
import starLight from '../assets/star-light.svg';
import starDark from '../assets/star-dark.svg';
import ImagePlay from "../assets/slider/play-video.png";
import { Link, useHistory } from 'react-router-dom';
import '../styles/card-film.scss';

export default function CardFilm(props) {
  let history = useHistory();
  const detail = () => {
    history.push({
      pathname: '/film/' + props.name,
      state: props
    })
  }
  return (
    <div className="card-film" onClick={detail}>
      <div className="card-film__image">
        <img className="card-film__other" src={props.image} alt=""/>
        <img className="card-film__play" src={ImagePlay} alt=""/>
      </div>
      <div className="card-film__bg">
      </div>
      <div className="card-film__content">
        <div className="card-film__detail">
          <div className="card-film__name">{props.name}</div>
          <div className="card-film__time">
            <img src={clock} alt=""/> <span>{props.long} min</span>
          </div>
          <div className="card-film__des">Adventure | Fantasy | Drama</div>
        </div>
        <Link className="card-film__buy" to="/film/wonder-women-2">Mua Vé</Link>
        <div className="card-film__judge">
          <div className="card-film__rate">
            <img src={starLight} alt=""/>
            <img src={starLight} alt=""/>
            <img src={starLight} alt=""/>
            <img src={starLight} alt=""/>
            <img src={starDark} alt=""/>
          </div>
        </div>
      </div>
    </div>
  )
}