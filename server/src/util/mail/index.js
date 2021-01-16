const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "5b9a4665af6a4a",
    pass: "6993d4bb6fde16"
  }
});
let contentMail = (id) => {
  return `
    <div style="padding: 10px; background-color: #003375">
      <div style="padding: 10px; background-color: white;">
          <h4 style="color: #0085ff">Đăng ký account thành công</h4>
          <span style="color: black">Vui lòng nhấn link dưới để xác nhận tài khoản</span><br/>
          <a href="http://localhost:3000/register_check?check=${id}" target="_blank">Link to here</a>
      </div>
    </div> 
  `
};

let contentCode = (code) => {
  return `
    <div style="padding: 10px; background-color: #003375">
      <div style="padding: 10px; background-color: white;">
          <h4 style="color: #0085ff">Mã code change password</h4>
          <span style="color: black; font-weight: bold; font-size: 16px;">${code}</span><br/>
      </div>
    </div> 
  `
};

module.exports = {
  transporter, contentMail, contentCode
}