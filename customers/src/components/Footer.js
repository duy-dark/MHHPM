import React from "react";
import "../styles/footer.scss";
import icFb from "../assets/facebook-logo.png";
import icZa from "../assets/zalo-logo.png";
import icArrow from "../assets/arrow-left.svg";

export default function Footer(props) {
  return (
    <div className="footer">
      <div className="footer-wrapper">
        <div className="footer-left">
          <div className="footer-title">Movie</div>
          <div className="footer-content">
            <div className="footer-li">
              <img src={icArrow} alt=""/>
              <span>FAQ</span>
            </div>
            <div className="footer-li">
              <img src={icArrow} alt=""/>
              <span>Brand Guidelines</span>
            </div>
          </div>
        </div>
        <div className="footer-between">
          <div className="footer-title">Công ty CP Movie</div>
          <div className="footer-content">
            <div className="footer-txt">Đia chỉ: 99/99 quang trung gò vấp</div>
            <div className="footer-txt">Giấy chứng nhận đăng ký kinh doanh số: 0101659783</div>
            <div className="footer-txt">Số Điện Thoại (Hotline): 1900 545 436</div>
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-title">Social</div>
          <div className="footer-content">
            <div className="footer-social">
              <img src={icFb} alt="" />
            </div>
            <div className="footer-social">
              <img src={icZa} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
