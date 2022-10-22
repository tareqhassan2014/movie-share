const e = require('express');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const movieOrderSchema = new Schema(
    {
        status: {
            type: String,
            default: 'pending',
            enum: {
                values: ['pending', 'confirmed'],
                message: 'Status is either: pending or confirmed',
            },
        },
        movie: {
            type: Schema.Types.ObjectId,
            ref: 'Movie',
        },
    },
    {
        timestamps: true,
    }
);

const MovieOrder = mongoose.model('MovieOrder', movieOrderSchema);
module.exports = MovieOrder;
