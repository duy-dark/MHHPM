import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { updateHeaderFooter } from "../redux/users/actions";
import '../styles/complete.scss';
import bg from '../assets/complete-bg.png';
import { useLocation } from 'react-router-dom';

export default function Completed(props) {
  const dispatch = useDispatch();
  const location = useLocation();
  const [formBooking, setFormBooking] = useState(location.state);
  useEffect(() => {
    dispatch(updateHeaderFooter({
      header: true,
      footer: true
    }))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return (
    <div className="complete">
      <img src={bg} alt="" className="complete-bg"/>
      <div className="complete-content">
        <h1>Đặt vé thành công</h1>
        {/* <h3>Xin kiểm tra email {formBooking.email}</h3>
        <h3>Xin kiểm tra tin nhắn {formBooking.phone_number} </h3> */}
        <h3>Xin kiểm tra</h3>
        <h3>email { formBooking.email }</h3>
        <h3>tin nhắn số điện thoại { formBooking.phone_number }</h3>
        <h3>Cám ơn bạn đã sử dụng dịch vụ của chúng tôi</h3>
      </div>
    </div>
  )
}