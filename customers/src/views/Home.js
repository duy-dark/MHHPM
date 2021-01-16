import React, { useState, useEffect } from "react";
import "../styles/home.scss";
import { useSelector, useDispatch } from "react-redux";
import { getUserInfo, updateHeaderFooter } from "../redux/users/actions";
import { useHistory } from "react-router-dom";
import SliderMovies from "../components/SliderMovies";
import CardFilm from "../components/CardFilm";
import Select, { components } from "react-select";
import ModalTrailer from "../components/ModalTrailer";

export default function Home(props) {
  let history = useHistory();

  const [selectFilm, setSelectFilm] = useState();
  const [selectThreater, setSelectThreater] = useState();
  const [selectDate, setSelectDate] = useState();
  const [selectTime, setSelectTime] = useState();
  const dispatch = useDispatch();
  const optionsFilm = [
    { value: 1, label: "Nữ Thần Chiến Binh 1984 - Wonder Woman 1984 (C13)" },
    {
      value: 2,
      label:
        "Thanh Gươm Diệt Quỷ: Chuyến Tàu Vô Tận - Demon Slayer The Movie: Mugen Train (P)",
    },
    { value: 3, label: "Chị Mười Ba: 3 Ngày Sinh Tử (C18)" },
    {
      value: 4,
      label: `Doraemon: Nobita và Những Bạn Khủng Long Mới - Doraemon the Movie: Nobita's New Dinosaurs (P)`,
    },
  ];
  const optionsThreater = selectFilm
    ? [
        {
          value: 1,
          label: "BHD Star Bitexco",
          address: "L5-Vincom 3/2, 3C Đường 3/2, Q.10",
        },
        {
          value: 2,
          label: "BHD Star Vincom 3/2",
          address: "Tầng 5, TTTM Vincom 3/2, 3C Đường 3/2, Quận 10, TPHCM",
        },
        {
          value: 3,
          label: "BHD Star Vincom Lê Văn Việt",
          address:
            "Tầng 4, toà nhà Vincom Plaza Lê Văn Việt, số 50 Lê Văn Việt, Quận 9, TP.HCM",
        },
        {
          value: 4,
          label: `BHD Star Vincom Quang Trung`,
          address:
            "Tầng B1&B2, TTTM Vincom, số 190 Quang Trung, Gò Vấp, Tp.HCM",
        },
      ]
    : [{ label: "vui lòng chọn phim", isDisabled: true }];
  const optionsDate = selectFilm
    ? [
        { value: 1, label: "Thứ 2", date: "2020/01/01" },
        { value: 2, label: "Thứ 3", date: "2020/01/02" },
        { value: 3, label: "Thứ 4", date: "2020/01/03" },
        { value: 4, label: "Thứ 5", date: "2020/01/04" },
        { value: 5, label: "Thứ 6", date: "2020/01/05" },
        { value: 6, label: "Thứ 7", date: "2020/01/06" },
        { value: 7, label: "Chủ nhật", date: "2020/01/07" },
      ]
    : [{ label: "vui lòng chọn rạp", isDisabled: true }];
  const optionsTime =
    selectDate && selectThreater
      ? [
          { value: 1, label: "17:55~19:25", room: "rap-1" },
          { value: 2, label: "20:55~22:25", room: "rap-2" },
        ]
      : [{ label: "vui lòng chọn ngày", isDisabled: true }];
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

  const list = useSelector((state) => state.films.films);
  const listSlider = useSelector((state) => {
    let arr = state.films.films.slice(0, 4);
    return arr;
  });
  const BookingTicketFast = () => {
    history.push({
      pathname: "/booking/" + selectFilm.label,
      state: {
        threater: selectThreater.label,
        address: selectThreater.address,
        room: selectTime.room,
        name: selectFilm.label,
        timeStart: selectTime.label,
        date: selectDate.date,
        day: selectDate.label,
        typeThreater: selectThreater.label,
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
    console.log(listSlider);
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
