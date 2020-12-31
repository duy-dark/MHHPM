import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { updateHeaderFooter } from "../redux/users/actions";
import '../styles/complete.scss';
import bg from '../assets/complete-bg.png';

export default function Completed(props) {
  const dispatch = useDispatch();

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
    </div>
  )
}