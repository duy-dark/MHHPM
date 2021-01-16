import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/film-detail.scss';
import DetailTabs from '../components/DetailTabs'
import { useSelector, useDispatch } from "react-redux";
import { updateHeaderFooter } from "../redux/users/actions";
import { getFilmDetails } from "../redux/films/actions";
import ImagePlay from "../assets/slider/play-video.png";
import ModalTrailer from '../components/ModalTrailer';
import * as moment from 'moment';

export default function FilmDetail(props) {
  // let history = useHistory();
  const dispatch = useDispatch();
  const location = useLocation();
  const [modalShow, setModalShow] = useState(false);
  const theaters = useSelector(state => state.films.theaters);
  const [detail, setDetail] = useState(location.state)
  const scheduleTime = theaters.map(threater => {
    return {
      ...threater,
      listDate: detail.listday,
      listTime: detail.listday.map(date => {
        let arr = detail.film_schedules.map(schedule => {
          if (date.date === moment(schedule.time_start).format('DD/MM/YYYY')) {
            return schedule
          }
        })
        return arr.filter(item => {
          if (item) {
            return item
          }
        })
      })
    }
  })
  useEffect(() => {
    dispatch(updateHeaderFooter({
      header: true,
      footer: true
    }))
    dispatch(getFilmDetails({ id: location.state._id}))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const data = {
    filmDetail: detail,
    filmSchedule: scheduleTime
  }
  const [modalId, setModalId] = React.useState("");
  const showTrailerSlider = (id) => {
    setModalId(id);
    setModalShow(true);
  };
  return (
    <div className="detail">
      <div className="detail-slider">
        <div className="detail-image">
          <img src={detail.url_background} alt=""/>
        </div>
        <div className="detail-bg"></div>
        <div className="detail-slider__wrapper">
          <div className="detail-slider__image">
            <img className="detail-slider__image__movie" src={detail.url_avatar} alt=""/>
            <img className="detail-slider__image__play" onClick={() => showTrailerSlider(detail._id)} src={ImagePlay} alt=""/>
          </div>
          <div className="detail-slider__content">
            <div className="detail-slider__date">{moment(detail.start_date).format('DD-MM-YYYY')}</div>
            <div className="detail-slider__name">{detail.name}</div>
            <div className="detail-slider__time">{detail.long_time} min</div>
          </div>
        </div>
      </div>
      <div className="detail-wrapper">
        <DetailTabs {...data}/>
      </div>
      <ModalTrailer
        show={modalShow}
        onHide={() => setModalShow(false)}
        id={modalId}
      />
    </div>
  )
}