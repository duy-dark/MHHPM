import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/film-detail.scss';
import DetailTabs from '../components/DetailTabs'
import { useDispatch } from "react-redux";
import { updateHeaderFooter } from "../redux/users/actions";
import ImagePlay from "../assets/slider/play-video.png";
import ModalTrailer from '../components/ModalTrailer';

export default function FilmDetail(props) {
  // let history = useHistory();
  const dispatch = useDispatch();
  const location = useLocation();
  const [modalShow, setModalShow] = React.useState(false);

  const [detail, setDetail] = useState(location.state);
  useEffect(() => {
    dispatch(updateHeaderFooter({
      header: true,
      footer: true
    }))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="detail">
      <div className="detail-slider">
        <div className="detail-image">
          <img src={detail.poster} alt=""/>
        </div>
        <div className="detail-bg"></div>
        <div className="detail-slider__wrapper">
          <div className="detail-slider__image">
            <img className="detail-slider__image__movie" src={detail.image} alt=""/>
            <img className="detail-slider__image__play" src={ImagePlay} alt=""/>
          </div>
          <div className="detail-slider__content">
            <div className="detail-slider__date">{detail.date}</div>
            <div className="detail-slider__name">{detail.name}</div>
            <div className="detail-slider__time">{detail.time}</div>
          </div>
        </div>
      </div>
      <div className="detail-wrapper">
        <DetailTabs name={detail.name}/>
      </div>
      <ModalTrailer
        show={modalShow}
        onHide={() => setModalShow(false)}
        id="5ff13d58c377292934d208df"
      />
    </div>
  )
}