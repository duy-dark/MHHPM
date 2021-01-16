import React, { useEffect } from "react";
import "../styles/header.scss";
import Navbar from "./Navbar";
import logoWeb from "../assets/images-2.png";
import avatar from "../assets/avatar.png";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfo, signOut } from "../redux/users/actions";
import Dropdown from "react-bootstrap/Dropdown";

export default function Header(props) {
  // const [ position, setPosition ] = useState(0);
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.user);
  const redirectHome = () => {
    history.push("/");
  };

  const logout = () => {
    dispatch(signOut(history));
  };
  return (
    <div className="header">
      <div className="header__icon">
        <img src={logoWeb} onClick={redirectHome} alt="" />
      </div>

      <Navbar />
      <div className="header__info">
        <div className="header__customer">
          {user ? (
            <Dropdown className="dropdownUser ">
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                {user.name}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={logout}>Đăng xuất</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          ) : (
            <Link to="/login" className="header__login">
              <img src={avatar} alt="avatar" />
              Đăng nhập
            </Link>
          )}
        </div>
        <div className="header__position">TP.Hồ Chí Minh</div>
      </div>
    </div>
  );
}
