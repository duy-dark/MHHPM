import React, { useEffect, useState } from "react";
import "../styles/login/login.scss";
import logo from "../assets/images-2.png";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signIn, signTest, updateHeaderFooter } from "../redux/users/actions";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import GoogleLogin from "react-google-login";
export default function Login(props) {
  const history = useHistory();
  const dispatch = useDispatch();

  const login = () => {};
  const responseFacebook = (response) => {
    const user = {
      facebook_id: response.id,
      name: response.name,
      email: response.email,
      avatar: response.picture.data.url,
      account_type: "facebook",
    };
    dispatch(signIn(user, history));
  };

  const responseGoogle = (response) => {
    const user = {
      google_id: response.googleId,
      name: response.profileObj.name,
      email: response.profileObj.email,
      avatar: response.profileObj.imageUrl,
      account_type: "facebook",
    };
    dispatch(signIn(user, history));
  };
  useEffect(() => {
    dispatch(
      updateHeaderFooter({
        header: false,
        footer: false,
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="login">
      <div className="login-background">
        <p className="login-title">WM Hub</p>
        <div className="login-form">
          <div className="login-form__logo">
            <img src={logo} alt="" />
          </div>
          <div className="login-form__groups">
            <div className="groups-btn">
              <FacebookLogin
                appId="409505490301267"
                callback={responseFacebook}
                fields="name,email,picture"
                render={(renderProps) => (
                  <button
                    onClick={renderProps.onClick}
                    className="btn btn-facebook"
                  >
                    Login with Facebook
                  </button>
                )}
              />

              <button onClick={login} className="btn btn-zalo">
                Login with Zalo
              </button>
              <GoogleLogin
                clientId="827380774255-d0ksdk40jlq25n7g7okdgdl7hm073iip.apps.googleusercontent.com"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={"single_host_origin"}
                fetchBasicProfile={true}
                render={(renderProps) => (
                  <button
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                    className="btn btn-google"
                  >
                    Login with Google
                  </button>
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
