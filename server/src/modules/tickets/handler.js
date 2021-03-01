let Model = require('./model');
const resSuccess = require('../../responses/res-success');
const {omitBy, isNil} = require('lodash');
const moment = require('moment');
const {transporter, contentMail, contentCode} = require('../../util/mail');
const {nexmo, sendSMS} = require('../../util/sms');
var QRCode = require('qrcode');
var HTMLParser = require('node-html-parser');

const getList = async (params) => {
  try {
    let lambda = {
      conditions: {...params, is_deleted: false},
      views: {
        _id: 1,
        count: 1,
        booking_time: 1,
        cost: 1,
        customer_id: 1,
        film_schedule_id: 1,
        voucher_id: 1,
        seat_ids: 1,
        email: 1,
        phone_number: 1,
        payment: 1
      }
    };
    let data = await Model.findByLambda(lambda);
    return resSuccess(data);
  } catch (error) {
    throw {status: 400, detail: error};
  }
};

const findById = async (id) => {
  try {
    let lambda = {
      conditions: {_id: id, is_deleted: false},
      views: {
        _id: 1,
        count: 1,
        booking_time: 1,
        cost: 1,
        customer_id: 1,
        seat_ids: 1,
        email: 1,
        voucher_id: 1,
        phone_number: 1,
        payment: 1,
        film_schedules: 1,
        customers: 1
      }
    };
    let data = await Model.getDetail(lambda);

    let theater = await require('../theaters/model').findByLambda({
      conditions: {_id: data[0].film_schedules[0].theater}
    });
    data[0].film_schedules[0].theater = theater[0].name;

    return resSuccess(data[0]);
  } catch (error) {
    throw {status: 400, detail: error};
  }
};

const postCreate = async (params) => {
  try {
    let img = await QRCode.toDataURL('123456');
    let html = HTMLParser.parse(`</br> <img src="` + img + `">`);
    // let img = QRCode.toFile('foo.png', [
    //   {data: new Uint8ClampedArray([253, 254, 255]), mode: 'byte'}
    // ]);
    console.log('html', html.toString());
    params.image = img;

    let mainOptions = {
      // thiết lập đối tượng, nội dung gửi mail
      from: 'example@example.com',
      to: params.email,
      subject: 'Đặt vé thành công',
      // html: contentMail(params) //Nội dung html mình đã tạo trên kia :))
      html: `<div style="padding: 10px; background-color: #003375">  
      <div style="padding: 10px; background-color: white;">
          <h4 style="color: #0085ff">Đặt vé thành công</h4>
          <span style="color: black">Mã: </br> <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHQAAAB0CAYAAABUmhYnAAAAAklEQVR4AewaftIAAAK/SURBVO3BQW7sWAwEwSxC979yjpdcPUCQuu3PYUT8wRqjWKMUa5RijVKsUYo1SrFGKdYoxRqlWKMUa5RijVKsUYo1SrFGKdYoFw8l4ZtUnkhCp3KShG9SeaJYoxRrlGKNcvEylTcl4Y4k3JGETuVE5U1JeFOxRinWKMUa5eLDknCHyh1J6FS6JHQqb0rCHSqfVKxRijVKsUa5GE7lJAmdyr+sWKMUa5RijXIxTBJOVCYr1ijFGqVYo1x8mMpvUumS0Kk8ofKXFGuUYo1SrFEuXpaE36TSJaFT6ZLQqZwk4S8r1ijFGqVYo8Qf/MOS0Kn8nxVrlGKNUqxRLh5KQqfSJeFNKp1Kl4ROpUtCp3KShDepfFKxRinWKMUaJf7gg5Jwh8odSfgmlZMkPKHyRLFGKdYoxRrl4mVJOFE5ScKJyolKl4ROpUtCp9IloUtCp3KicpKENxVrlGKNUqxR4g8+KAknKl0SOpUuCXeodEl4QuWOJNyh8kSxRinWKMUa5eKhJJyoPJGETuWOJHQqXRI6lZMkdConKl0SOpU3FWuUYo1SrFEuHlJ5k8odSehU/pIkdCqfVKxRijVKsUa5eCgJ36TSqdyRhE6lS0Kn0ql0SehU7khCp/JEsUYp1ijFGuXiZSpvSsJJEjqVTuUOlZMkPJGETuVNxRqlWKMUa5SLD0vCHSpPJOEOlS4JnUqn0iXhDpVPKtYoxRqlWKNcDKfSJaFLwkkSOpVOpUtCp/JNxRqlWKMUa5SL4ZLQqXRJ6FS6JHRJ6FQ6ld9UrFGKNUqxRrn4MJVPUumS0Kl0SThJwonKSRI6lS4JncqbijVKsUYp1igXL0vCNyXhDpUuCZ3KSRI6lU6lS0Kn8knFGqVYoxRrlPiDNUaxRinWKMUapVijFGuUYo1SrFGKNUqxRinWKMUapVijFGuUYo1SrFH+A3hBH+K/g6mJAAAAAElFTkSuQmCC">
      </span><br />
 
        111111111111
      </div>
    </div> `

      // html body
    };

    let p1 = await transporter.sendMail(mainOptions);
    await Promise.all([p1]).then((row) => {
      let {err, info} = row[0];
      if (err) {
        throw {
          status: 203,
          detail: 'send mail error'
        };
      }
    });

    return resSuccess(p1);
  } catch (error) {
    console.log('error booking', error);
    throw {status: 400, detail: error};
  }
};

const putUpdate = async (id, params) => {
  try {
    let lambda = {
      conditions: {_id: id, is_deleted: false},
      params: {
        count: params.count || undefined,
        booking_time: params.booking_time || undefined,
        cost: params.cost || undefined,
        customer_id:
          require('mongodb').ObjectId(params.customer_id) || undefined,
        film_schedule_id:
          require('mongodb').ObjectId(params.film_schedule_id) || undefined,
        voucher_id: require('mongodb').ObjectId(params.voucher_id) || undefined,
        seat_ids: params.seat_ids || undefined,
        email: params.email || undefined,
        phone_number: params.phone_number || undefined,
        payment: params.payment || undefined,
        updated_at: moment.now()
      }
    };
    lambda.params = omitBy(lambda.params, isNil);
    let data = await Model.updateByLambda(lambda);
    return resSuccess(data);
  } catch (error) {
    throw {status: 400, detail: error};
  }
};

const deleteData = async (id) => {
  try {
    let lambda = {
      conditions: {_id: id, is_deleted: false},
      params: {
        is_deleted: true,
        updated_at: moment.now()
      }
    };
    let data = await Model.updateByLambda(lambda);
    return resSuccess(data);
  } catch (error) {
    throw {status: 400, detail: error};
  }
};

module.exports = {
  getList,
  findById,
  postCreate,
  putUpdate,
  deleteData
};
