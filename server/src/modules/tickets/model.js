const mongoose = require('mongoose');

let schema = new mongoose.Schema(
  {
    count: Number,
    booking_time: Date,
    cost: Number,
    customer_id: require('mongodb').ObjectID,
    film_schedule_id: require('mongodb').ObjectID,
    voucher_id: require('mongodb').ObjectID,
    email: String,
    phone_number: String,
    payment: String,
    seat_ids: [String],
    is_deleted: Boolean,
    created_at: Date,
    updated_at: Date
  },
  {versionKey: false}
);

let Collection = mongoose.model('Ticket', schema, 'tickets');

module.exports = {
  findByLambda: async function (lambda) {
    return await Collection.find(lambda.conditions, lambda.views);
  },
  createByLambda: async function (lambda) {
    return await Collection.insertMany(lambda);
  },
  updateByLambda: async function (lambda) {
    return await Collection.updateOne(lambda.conditions, lambda.params);
  }
};