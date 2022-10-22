const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const movieeorderSchema = new Schema({
  date: { type: Date, required: true },
  Orderid: {type: Number, required: true},
  Id: { type: Number, required: true },
}, {
  timestamps: true,
});

const MovieOrder = mongoose.model('MovieOrder', movieeorderSchema);
module.exports = MovieOrder;