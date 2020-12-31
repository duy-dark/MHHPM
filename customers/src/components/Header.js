import React from 'react';
import '../styles/header.scss';
import Navbar from './Navbar';
import logoWeb from '../assets/images-2.png'
import avatar from '../assets/avatar.png'
import { Link, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header(props) {
  // const [ position, setPosition ] = useState(0);
  let history = useHistory();
  const user = useSelector(state => state.users.user);
  const redirectHome = () => {
    history.push('/')
  }
  return (
    <div className="header">
      <div className="header__icon">
        <img src={logoWeb} onClick={redirectHome} alt=""/>
      </div>
      <Navbar/>
      <div className="header__info">
        <div className="header__customer">
        { user ? (<span>{user.name}</span>) : (
          <Link to="/login" className="header__login">
            <img src={avatar} alt="avatar"/>
            Đăng nhập
          </Link>)}
        </div>
        <div className="header__position">TP.Hồ Chí Minh</div>
      </div>
    </div>
  )
}
