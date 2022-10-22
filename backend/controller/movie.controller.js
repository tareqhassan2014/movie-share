// create new movie

const Movie = require('../models/movie_model');
const MovieOrder = require('../models/movie_order_model');
const AppError = require('../util/AppError');
const catchAsync = require('../util/catchAsync');

// view movies

exports.allMovies = catchAsync(async (req, res, next) => {
    const movies = await Movie.find();

    // send response
    res.status(200).json({
        success: true,
        data: movies,
    });
});

// create new movie
exports.createMovie = catchAsync(async (req, res, next) => {
    const { title, year, rating, genre } = req.body;
    const poster = req.file?.filename;

    // create new movie
    const newMovie = await Movie.create({
        title,
        year,
        rating,
        genre,
        poster,
    });

    // send response
    res.status(201).json({
        success: true,
        data: newMovie,
    });
});

// update movie

exports.updateMovie = catchAsync(async (req, res, next) => {
    const { title, year, rating, genre } = req.body;
    const poster = req.file?.filename;

    // find  movie
    const movie = await Movie.findById(req.params.id);

    if (!movie) return next(new AppError('Movie not found', 404));

    // update movie
    await Movie.findByIdAndUpdate(
        req.params.id,
        {
            title,
            year,
            rating,
            genre,
            poster,
        },
        { new: true, runValidators: true }
    );

    // send response
    res.status(200).json({
        success: true,
        data: movie,
    });
});

// delete movie

exports.deleteMovie = catchAsync(async (req, res, next) => {
    const movie = await Movie.findById(req.params.id);

    if (!movie) return next(new AppError('Movie not found', 404));

    await movie.remove();

    // send response
    res.status(204).json({});
});

// movie details

exports.movieDetails = catchAsync(async (req, res, next) => {
    const movie = await Movie.findById(req.params.id);

    if (!movie) return next(new AppError('Movie not found', 404));

    // send response
    res.status(200).json({
        success: true,
        data: movie,
    });
});
