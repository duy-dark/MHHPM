import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/film-detail.scss';
import DetailTabs from '../components/DetailTabs'
import { useDispatch } from "react-redux";
import { updateHeaderFooter } from "../redux/users/actions";

export default function FilmDetail(props) {
  // let history = useHistory();
  const dispatch = useDispatch();
  const location = useLocation();

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
            <img src={detail.image} alt=""/>
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
    </div>
  )
}