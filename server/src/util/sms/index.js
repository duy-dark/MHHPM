const Nexmo = require('nexmo');

const nexmo = new Nexmo({
  apiKey: '023dea62',
  apiSecret: 'w4eXN8dbIu96kaAT'
});
const sendSMS = (objectSms) => {
  const from = 'Vonage APIs';
  const to = '84838263357';
  const text = `Đặt vé thành công`;
  // Mã: ${objectSms.id}
  // Số ghế:${objectSms.count}
  // Ghế:${objectSms.seats}
  // Giá:${objectSms.cost}
  // Tên khách hàng:${objectSms.customers}
  // Số điện thoại:${objectSms.phone_number}
  // Loại thanh toán:${objectSms.payment}
  // Thời gian bắt đầu:${objectSms.time_start}
  // Thời gian hết phim:${objectSms.time_end}
  // Tên rạp:${objectSms.theater}
  // Tên phòng:${objectSms.room}
  nexmo.message.sendSms(from, to, text);
};
module.exports = {nexmo, sendSMS};
