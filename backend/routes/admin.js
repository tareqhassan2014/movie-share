const router = require('express').Router();
let Movie = require('../models/movie_model');
let MovieOrder = require('../models/movie_order_model');

// adds a new movie

router.route('/add').post((req, res) => {
    const { title, year, rating, genre } = req.body;

    const newMovie = new Movie({
        title,
        year,
        rating,
        genre,
    });

    console.log({ title, year, rating, genre });

    newMovie
        .save()
        .then(() => res.json('Movie added!'))
        .catch((err) => res.status(400).json('Error: ' + err));
});

//edit a movie

router.route('/update/:id').post((req, res) => {
    Movie.findById(req.params.id)
        .then((movie) => {
            movie.id = Number(req.body.Id);
            movie.title = Date.parse(req.body.Title);
            movie.year = Number(req.body.year);
            movie.date = Date.parse(req.body.date);
            movie.year = Number(req.body.year);
            movie.rating = Number(req.body.Rating);
            movie.genre = req.body.Genre;

            movie
                .save()
                .then(() => res.json('Movie updated!'))
                .catch((err) => res.status(400).json('Error: ' + err));
        })
        .catch((err) => res.status(400).json('Error: ' + err));
});

//delete a movie

router.route('/:id').delete((req, res) => {
    Movie.findByIdAndDelete(req.params.id)
        .then(() => res.json('Movie deleted.'))
        .catch((err) => res.status(400).json('Error: ' + err));
});

//view movies

router.route('/').get((req, res) => {
    Movie.find()
        .then((movies) => res.json(movies))
        .catch((err) => res.status(400).json('Error: ' + err));
});

//view orders

router.route('/view').get((req, res) => {
    MovieOrder.find()
        .then((moviesorder) => res.json(moviesorder))
        .catch((err) => res.status(400).json('Error: ' + err));
});

//confirm orders
router.route('/confirm').post((req, res) => {
    const id = req.body.Id;
    const date = Date.parse(req.body.date);
    const orderid = Number(req.body.Orderid);
    const newOrder = new MovieOrder({
        date,
        orderid,
        Id,
    });

    newOrder
        .save()
        .then(() => res.json('Order added!'))
        .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
