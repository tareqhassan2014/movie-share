const {
    createMovie,
    updateMovie,
    deleteMovie,
    viewMovies,
    allMovies,
    movieDetails,
} = require('../controller/movie.controller');
let Movie = require('../models/movie_model');
let MovieOrder = require('../models/movie_order_model');
const router = require('express').Router();

router.route('/').post(createMovie).put(updateMovie).get(allMovies);
router.route('/:id').put(updateMovie).delete(deleteMovie).get(movieDetails);

module.exports = router;
