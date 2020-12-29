import React from "react";
import "../styles/footer.scss";
import icFb from "../assets/facebook-logo.png";
import icZa from "../assets/zalo-logo.png";

export default function Footer(props) {
  return (
    <div className="footer">
      <div className="footer-wrapper">
        <div className="footer-left">
          <div className="footer-title">Movie</div>
          <div className="footer-content">
            <div className="footer-li">
              <svg
                width="12"
                height="15"
                viewBox="0 0 12 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d)">
                  <path d="M4 0L7.125 3.75L4 7.5L4 0Z" fill="white" />
                </g>
                <defs>
                  <filter
                    id="filter0_d"
                    x="0"
                    y="0"
                    width="11.125"
                    height="15.5"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
              <span>FAQ</span>
            </div>
            <div className="footer-li">
            <svg
                width="12"
                height="15"
                viewBox="0 0 12 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d)">
                  <path d="M4 0L7.125 3.75L4 7.5L4 0Z" fill="white" />
                </g>
                <defs>
                  <filter
                    id="filter0_d"
                    x="0"
                    y="0"
                    width="11.125"
                    height="15.5"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
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
