const Movie= require('../models/Movie');
module.exports = { 
    getMovies: async () => {
        const allMovies = await Movie.find();
        return allMovies        
    },
    //  postMovie: async (movie) => {
    //     const savedMovie = await newMovie.save();
    //     return savedMovie;
    postMovie: async (movie) => {
        const newMovie = new Movie(movie);
        const savedMovie = await newMovie.save();
        return savedMovie;

     
    }
 };
