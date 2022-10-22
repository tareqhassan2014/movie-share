const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const movieSchema = new Schema(
    {
        Title: {
            type: String,
            required: true,
        },
        year: {
            type: Number,
            required: true,
        },
        Rating: {
            type: Number,
            required: true,
        },
        Genre: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;
