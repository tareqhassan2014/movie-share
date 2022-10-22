// create new movie

const catchAsync = require('../util/catchAsync');

exports.createMovie = catchAsync(async (req, res) => {
    const { id, title, year, rating, genre } = req.body;

    // create new movie
    const newMovie = Movie.create({
        id,
        title,
        year,
        rating,
        genre,
    });

    // send response
    res.status(201).json({
        success: true,
        data: newMovie,
    });
});

// update movie

exports.updateMovie = catchAsync(async (req, res) => {
    const { id, title, year, rating, genre } = req.body;

    // update movie
    const movie = await Movie.findByIdAndUpdate(
        req.params.id,
        {
            id,
            title,
            year,
            rating,
            genre,
        },
        {
            new: true,
            runValidators: true,
        }
    );

    // send response
    res.status(200).json({
        success: true,
        data: movie,
    });
});

// delete movie

exports.deleteMovie = catchAsync(async (req, res) => {
    await Movie.findByIdAndDelete(req.params.id);

    // send response
    res.status(204).json({
        success: true,
        data: null,
    });
});

// view movies

exports.viewMovies = catchAsync(async (req, res) => {
    const movies = await Movie.find();

    // send response
    res.status(200).json({
        success: true,
        data: movies,
    });
});

// view orders

exports.viewOrders = catchAsync(async (req, res) => {
    const orders = await MovieOrder.find();

    // send response
    res.status(200).json({
        success: true,
        data: orders,
    });
});

// confirm order

exports.confirmOrder = catchAsync(async (req, res) => {
    const order = await MovieOrder.findByIdAndUpdate(
        req.params.id,
        {
            status: 'confirmed',
        },
        {
            new: true,
            runValidators: true,
        }
    );

    // send response
    res.status(200).json({
        success: true,
        data: order,
    });
});
