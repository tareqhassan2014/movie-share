const {
    createMovie,
    updateMovie,
    deleteMovie,
    viewMovies,
    allMovies,
    movieDetails,
} = require('../controller/movie.controller');
const upload = require('../lib/multer');
let Movie = require('../models/movie_model');
let MovieOrder = require('../models/movie_order_model');
const router = require('express').Router();

router
    .route('/')
    .post(upload.single('poster'), createMovie)
    .put(updateMovie)
    .get(allMovies);

router
    .route('/:id')
    .put(upload.single('poster'), updateMovie)
    .delete(deleteMovie)
    .get(movieDetails);

module.exports = router;
