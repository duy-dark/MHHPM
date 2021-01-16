import React, { useEffect } from "react";
import "../styles/login/login.scss";
import logo from "../assets/images-2.png";
import { useHistory } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { signTest, updateHeaderFooter } from "../redux/users/actions";

export default function Login(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = {
    name: 'Phạm Quang Duy',
    email: 'example@example.com'
  }
  const login = () => {
    dispatch(signTest(user, history))
  }

  useEffect(() => {
    dispatch(updateHeaderFooter({
      header: false,
      footer: false
    }))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div className="login">
      <div className="login-background">
        <p className="login-title">WEEKEND FILM</p>
        <div className="login-form">
          <div className="login-form__logo">
            <img src={logo} alt="" />
          </div>
          <div className="login-form__groups">
            <div className="groups-btn">
              <button onClick={login} className="btn btn-facebook">
                Login with Facebook
              </button>
              <button onClick={login} className="btn btn-zalo">
                Login with Zalo
              </button>
              <button onClick={login} className="btn btn-google">
                Login with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
