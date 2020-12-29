import React, { useState, useEffect } from 'react';
import '../styles/home.scss';
// import { useSelector, useDispatch } from "react-redux";
// import { getListFriend, getUserInfo, updateStatusFriend } from '../redux/users/actions';
// import { useLocation } from "react-router-dom";
// import { useHistory } from 'react-router-dom';
import SliderMovies from '../components/SliderMovies';
import CardFilm from '../components/CardFilm';
import Select, { components } from 'react-select';

export default function Home(props) {
  
  const [selectFilm, setSelectFilm] = useState();
  const [selectThreater, setSelectThreater] = useState();
  const [selectDate, setSelectDate] = useState();
  const [selectTime, setSelectTime] = useState();
  const optionsFilm = [
    { value: 1, label: 'Nữ Thần Chiến Binh 1984 - Wonder Woman 1984 (C13)'},
    { value: 2, label: 'Thanh Gươm Diệt Quỷ: Chuyến Tàu Vô Tận - Demon Slayer The Movie: Mugen Train (P)'},
    { value: 3, label: 'Chị Mười Ba: 3 Ngày Sinh Tử (C18)'},
    { value: 4, label: `Doraemon: Nobita và Những Bạn Khủng Long Mới - Doraemon the Movie: Nobita's New Dinosaurs (P)`},
  ]
  const optionsThreater = selectFilm ? [
    { value: 1, label: 'BHD Star Bitexco'},
    { value: 2, label: 'BHD Star Vincom 3/2'},
    { value: 3, label: 'BHD Star Vincom Lê Văn Việt'},
    { value: 4, label: `BHD Star Vincom Quang Trung`},
  ] : [{ label: 'vui lòng chọn phim', isDisabled: true}]
  const optionsDate = selectFilm ? [
    { value: 1, label: 'Thứ 2', date: '2020/01/01'},
    { value: 2, label: 'Thứ 3', date: '2020/01/02'},
    { value: 3, label: 'Thứ 4', date: '2020/01/03'},
    { value: 4, label: 'Thứ 5', date: '2020/01/04'},
    { value: 5, label: 'Thứ 6', date: '2020/01/05'},
    { value: 6, label: 'Thứ 7', date: '2020/01/06'},
    { value: 7, label: 'Chủ nhật', date: '2020/01/07'},
  ] : [{ label: 'vui lòng chọn rạp', isDisabled: true}]
  const optionsTime = selectDate ? [
    { value: 1, label: 'Nữ Thần Chiến Binh 1984 - Wonder Woman 1984 (C13)'},
    { value: 2, label: 'Thanh Gươm Diệt Quỷ: Chuyến Tàu Vô Tận - Demon Slayer The Movie: Mugen Train (P)'},
    { value: 3, label: 'Chị Mười Ba: 3 Ngày Sinh Tử (C18)'},
    { value: 4, label: `Doraemon: Nobita và Những Bạn Khủng Long Mới - Doraemon the Movie: Nobita's New Dinosaurs (P)`},
  ] : [{ label: 'vui lòng chọn ngày', isDisabled: true}]
  const disabledBtn = selectFilm && selectThreater && selectDate && selectTime
  const OptionComponent = (props) => {
    return (
      <components.Option {...props}>
        <div styles={{display: 'flex', flexDirection: 'column'}}>
          <div>{props.data.label}</div>
          <div style={{ marginTop: "5px", color: "#ccc" }}>{props.data.date}</div>
        </div>
      </components.Option>
    )
  }
  return (
    <>
      <SliderMovies />
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
            components={{OptionComponent}}
            placeholder="Ngày xem"
          />
          <Select
            className="select"
            value={selectTime}
            options={optionsTime}
            onChange={setSelectTime}
            placeholder="Suất chiếu"
          />
          <button className={"btn btn-booking" + (disabledBtn ? '' : ' btn-disabled')}>MUA VÉ NGAY</button>
        </div>
        <div className="list-film">
          <CardFilm/>
        </div>
      </div>
    </>
  )
}