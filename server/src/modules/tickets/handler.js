let Model = require('./model');
const resSuccess = require('../../responses/res-success');
const {omitBy, isNil} = require('lodash');
const moment = require('moment');
const {transporter, contentMail, contentCode} = require('../../util/mail');

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
        film_schedule_id: 1,
        voucher_id: 1,
        seat_ids: 1,
        email: 1,
        phone_number: 1,
        payment: 1
      }
    };
    let data = await Model.findByLambda(lambda);
    return resSuccess(data[0]);
  } catch (error) {
    throw {status: 400, detail: error};
  }
};

const postCreate = async (params) => {
  try {
    let lambda = {
      count: params.count || undefined,
      booking_time: params.booking_time || undefined,
      cost: params.cost || undefined,
      customer_id: require('mongodb').ObjectId(params.customer_id) || undefined,
      film_schedule_id:
        require('mongodb').ObjectId(params.film_schedule_id) || undefined,
      voucher_id: require('mongodb').ObjectId(params.voucher_id) || undefined,
      seat_ids: require('mongodb').ObjectId(params.seat_ids) || undefined,
      email: params.email || undefined,
      phone_number: params.phone_number || undefined,
      payment: params.payment || undefined,
      is_deleted: false,
      created_at: moment.now(),
      updated_at: moment.now()
    };
    console.log('lambda:', lambda);

    let mainOptions = {
      // thiết lập đối tượng, nội dung gửi mail
      from: 'example@example.com',
      to: params.email,
      subject: 'Đặt vé thành công',
      html: contentMail(user.insertId) //Nội dung html mình đã tạo trên kia :))
    };
    await transporter.sendMail(mainOptions, (err, info) => {
      if (err) {
        throw {
          status: 203,
          detail: 'send mail error'
        };
      }
    });

    let data = await Model.createByLambda(lambda);
    return resSuccess(data[0]);
  } catch (error) {
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
        seat_ids: require('mongodb').ObjectId(params.seat_ids) || undefined,
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
