import React, { useState, useEffect } from "react";
import "../styles/home.scss";
import { useSelector, useDispatch } from "react-redux";
import { getUserInfo, updateHeaderFooter } from "../redux/users/actions";
import { getListFilm } from "../redux/films/actions";
import { useHistory } from "react-router-dom";
import SliderMovies from "../components/SliderMovies";
import CardFilm from "../components/CardFilm";
import Select, { components } from "react-select";
import ModalTrailer from "../components/ModalTrailer";
import * as moment from 'moment';

export default function Home(props) {
  let history = useHistory();

  const [selectFilm, setSelectFilm] = useState();
  const [selectThreater, setSelectThreater] = useState();
  const [selectDate, setSelectDate] = useState();
  const [selectTime, setSelectTime] = useState();
  const dispatch = useDispatch();


  const list = useSelector((state) => state.films.films);
  const listSlider = useSelector((state) => {
    let arr = state.films.films.slice(0, 4);
    return arr;
  });

  const arrOptionFilm = useSelector(state => {
    let films = state.films.films
    return films.map(film => ({ ...film, label: film.name, value: film._id}));
  })

  const arrOptionTheater = useSelector(state => {
    let theaters = state.films.theaters
    return theaters.map(theater => ({ ...theater, label: theater.name, value: theater._id }));
  })

  const arrOptionDate = useSelector(state => {
    let film = state.films.films[0]
    if (film && film.listday) {
      return film.listday.map((day, index) => ({ ...day, label: day.name, value: index }));
    }
  })

  const arrOptionTime = useSelector(state => {
    if (selectFilm) {
      let films = state.films.films
      let film = films.filter(film => film._id === selectFilm._id)[0]
      if (selectDate) {
        let dates = film.film_schedules.filter(date => moment(date.time_start).format('DD/MM/YYYY') === selectDate.date)
        return dates.map(date => ({ ...date, label: moment(date.start_date).format('hh:mm') + '~' + moment(date.end_date).format('hh:mm')}))
      }
    }
  })

  useEffect(() => {
    dispatch(getListFilm())
    dispatch(updateHeaderFooter({
      header: true,
      footer: true
    }))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  const optionsFilm = arrOptionFilm;
  const optionsThreater = selectFilm ? arrOptionTheater : [{ label: "vui lòng chọn phim", isDisabled: true }];
  const optionsDate = selectFilm ? arrOptionDate : [{ label: "vui lòng chọn rạp", isDisabled: true }];
  const optionsTime = selectDate && selectThreater ? arrOptionTime : [{ label: "vui lòng chọn ngày", isDisabled: true }];
  const disabledBtn = selectFilm && selectThreater && selectDate && selectTime;
  const OptionComponent = (props) => {
    return (
      <components.Option {...props}>
        <div styles={{ display: "flex", flexDirection: "column" }}>
          <div>{props.data.label}</div>
          <div style={{ marginTop: "5px", color: "#ccc" }}>
            {props.data.date}
          </div>
        </div>
      </components.Option>
    );
  };

  const BookingTicketFast = () => {
    history.push({
      pathname: "/booking/" + selectFilm.label,
      state: {
        threater: selectThreater.name,
        address: selectThreater.address,
        room: selectTime.room,
        name: selectFilm.name,
        timeStart: moment(selectTime.start_date).format('hh:mm'),
        date: selectDate.date,
        day: selectDate.name,
        typeThreater: selectThreater.name,
        scheduleId: selectDate._id
      },
    });
  };

  useEffect(() => {
    dispatch(
      updateHeaderFooter({
        header: true,
        footer: true,
      })
    );
    const token = localStorage.getItem("token");
    const userID = localStorage.getItem("userID");
    if (token && userID) {
      dispatch(getUserInfo({ token, userID }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [modalShow, setModalShow] = React.useState(false);
  const [modalId, setModalId] = React.useState("");
  const showTrailerSlider = (id) => {
    setModalId(id);
    setModalShow(true);
  };
  return (
    <>
      <SliderMovies
        listSlider={listSlider}
        clickTrailer={(id) => showTrailerSlider(id)}
      />
      <div className="container">
        <div className="filter-film">
          <Select
            className="select"
            value={selectFilm}
            options={optionsFilm}
            onChange={setSelectFilm}
            placeholder="Phim"
          />
          <Select
            className="select"
            value={selectThreater}
            options={optionsThreater}
            onChange={setSelectThreater}
            placeholder="Rạp"
          />
          <Select
            className="select"
            value={selectDate}
            options={optionsDate}
            onChange={setSelectDate}
            components={{ OptionComponent }}
            placeholder="Ngày xem"
          />
          <Select
            className="select"
            value={selectTime}
            options={optionsTime}
            onChange={setSelectTime}
            placeholder="Suất chiếu"
          />
          <button
            className={"btn btn-booking" + (disabledBtn ? "" : " btn-disabled")}
            onClick={BookingTicketFast}
          >
            MUA VÉ NGAY
          </button>
        </div>
        <div className="list-film">
          {list.map((movie) => (
            <CardFilm key={movie._id} {...movie} />
          ))}
        </div>
        <ModalTrailer
          show={modalShow}
          onHide={() => setModalShow(false)}
          id={modalId}
        />
      </div>
    </>
  );
}
