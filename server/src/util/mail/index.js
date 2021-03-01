const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'doantotnghiepthang9@gmail.com',
    pass: 'doantotnghiep'
  }
});
let contentMail = (ticket) => {
  console.log(ticket.image);
  return `
    <div style="padding: 10px; background-color: #003375">  
      <div style="padding: 10px; background-color: white;">
          <h4 style="color: #0085ff">Đặt vé thành công</h4>
          <span style="color: black">Mã: </br> <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHQAAAB0CAYAAABUmhYnAAAAAklEQVR4AewaftIAAAK/SURBVO3BQW7sWAwEwSxC979yjpdcPUCQuu3PYUT8wRqjWKMUa5RijVKsUYo1SrFGKdYoxRqlWKMUa5RijVKsUYo1SrFGKdYoFw8l4ZtUnkhCp3KShG9SeaJYoxRrlGKNcvEylTcl4Y4k3JGETuVE5U1JeFOxRinWKMUa5eLDknCHyh1J6FS6JHQqb0rCHSqfVKxRijVKsUa5GE7lJAmdyr+sWKMUa5RijXIxTBJOVCYr1ijFGqVYo1x8mMpvUumS0Kk8ofKXFGuUYo1SrFEuXpaE36TSJaFT6ZLQqZwk4S8r1ijFGqVYo8Qf/MOS0Kn8nxVrlGKNUqxRLh5KQqfSJeFNKp1Kl4ROpUtCp3KShDepfFKxRinWKMUaJf7gg5Jwh8odSfgmlZMkPKHyRLFGKdYoxRrl4mVJOFE5ScKJyolKl4ROpUtCp9IloUtCp3KicpKENxVrlGKNUqxR4g8+KAknKl0SOpUuCXeodEl4QuWOJNyh8kSxRinWKMUa5eKhJJyoPJGETuWOJHQqXRI6lZMkdConKl0SOpU3FWuUYo1SrFEuHlJ5k8odSehU/pIkdCqfVKxRijVKsUa5eCgJ36TSqdyRhE6lS0Kn0ql0SehU7khCp/JEsUYp1ijFGuXiZSpvSsJJEjqVTuUOlZMkPJGETuVNxRqlWKMUa5SLD0vCHSpPJOEOlS4JnUqn0iXhDpVPKtYoxRqlWKNcDKfSJaFLwkkSOpVOpUtCp/JNxRqlWKMUa5SL4ZLQqXRJ6FS6JHRJ6FQ6ld9UrFGKNUqxRrn4MJVPUumS0Kl0SThJwonKSRI6lS4JncqbijVKsUYp1igXL0vCNyXhDpUuCZ3KSRI6lU6lS0Kn8knFGqVYoxRrlPiDNUaxRinWKMUapVijFGuUYo1SrFGKNUqxRinWKMUapVijFGuUYo1SrFH+A3hBH+K/g6mJAAAAAElFTkSuQmCC">
      </span><br />
          <span style="color: black, width: 150px">Số ghế:${ticket.count} </span><br/>
          <span style="color: black, width: 150px">Ghế:${ticket.seats} </span><br/>
          <span style="color: black, width: 150px">Giá:${ticket.cost} </span><br/>
          <span style="color: black, width: 150px">Tên khách hàng:${ticket.customers} </span><br/>
          <span style="color: black, width: 150px">Số điện thoại:${ticket.phone_number} </span><br/>
          <span style="color: black, width: 150px">Loại thanh toán:${ticket.payment} </span><br/>
          <span style="color: black, width: 150px">Thời gian bắt đầu:${ticket.time_start} </span><br/>
          <span style="color: black, width: 150px">Thời gian hết phim:${ticket.time_end} </span><br/>
          <span style="color: black, width: 150px">Tên rạp:${ticket.theater} </span><br/>
        
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
