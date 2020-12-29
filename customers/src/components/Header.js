import React from 'react';
import '../styles/header.scss';
import Navbar from './Navbar';
import logoWeb from '../assets/images-2.png'
import avatar from '../assets/avatar.png'
// import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
export default function Header(props) {
  // const [ position, setPosition ] = useState(0);

  return (
    <div className="header">
      <div className="header__icon">
        <img src={logoWeb} alt=""/>
      </div>
      <Navbar/>
      <div className="header__info">
        <div className="header__customer">
          <Link to="/login" className="header__login">
            <img src={avatar} alt="avatar"/>
            Đăng nhập
          </Link>
        </div>
        <div className="header__position">TP.Hồ Chí Minh</div>
      </div>
    </div>
  )
}
