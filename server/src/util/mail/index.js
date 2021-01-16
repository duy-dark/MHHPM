const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: '5b9a4665af6a4a',
    pass: '6993d4bb6fde16'
  }
});
let contentMail = (ticket) => {
  return `
    <div style="padding: 10px; background-color: #003375">  
      <div style="padding: 10px; background-color: white;">
          <h4 style="color: #0085ff">Đặt vé thành công</h4>
          <span style="color: black, width: 150px">Mã: ${ticket.id}</span><br/>
          <span style="color: black, width: 150px">Số ghế:${ticket.count} </span><br/>
          <span style="color: black, width: 150px">Ghế:${ticket.seat_ids} </span><br/>
          <span style="color: black, width: 150px">Giá:${ticket.cost} </span><br/>
          <span style="color: black, width: 150px">Số điện thoại:${ticket.phone_number} </span><br/>
          <span style="color: black, width: 150px">Hình thức thành toán:${ticket.payment} </span><br/>
      </div>
    </div> 
  `;
};

let contentCode = (code) => {
  return `
    <div style="padding: 10px; background-color: #003375">
      <div style="padding: 10px; background-color: white;">
          <h4 style="color: #0085ff">Mã code change password</h4>
          <span style="color: black; font-weight: bold; font-size: 16px;">${code}</span><br/>
      </div>
    </div> 
  `;
};

module.exports = {
  transporter,
  contentMail,
  contentCode
};
