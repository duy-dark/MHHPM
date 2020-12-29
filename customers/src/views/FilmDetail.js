import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../styles/film-detail.scss';

export default function FilmDetail(props) {
  let history = useHistory();
  
  return (
    <div className="detail">
      <div className="detail-bg">
        <img src="" alt=""/>
      </div>
    </div>
  )
}