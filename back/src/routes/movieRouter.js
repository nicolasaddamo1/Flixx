const express = require('express');
const {getMovies,postMovie} = require('../controllers/movieController');
const routerMovie = express.Router();

routerMovie.get('/', getMovies);
routerMovie.post('/', postMovie);

module.exports = routerMovie; //routerMovie
