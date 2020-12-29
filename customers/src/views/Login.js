import React from "react";
import "../styles/login/login.scss";
import logo from "../assets/images-2.png";
export default function Login(props) {
  return (
    <div className="login">
      <div className="login-background">
        <p className="login-title">LOGIN</p>
        <div className="login-form">
          <div className="login-form__logo">
            <img src={logo} alt="" />
          </div>
          <div className="login-form__groups">
            <div className="groups-btn">
              <a href="https://www.facebook.com/" className="btn btn-facebook">
                Login with Facebook
              </a>
              <a href="https://www.facebook.com/" className="btn btn-zalo">
                Login with Zalo
              </a>
              <a href="https://www.facebook.com/" className="btn btn-google">
                Login with Google
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
