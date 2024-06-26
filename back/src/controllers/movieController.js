const {getMovies, postMovie} = require('../services/serviceMovies');
module.exports = {

  getMovies: async (req, res) => {
    try {
      const movies = await getMovies();
      res
        .status(200)
        .send(movies);
    } catch (error) {
      res
        .status(500)
        .json({
           message: 'Error al obtener los datos de la API externa',
           error: error.message
           });
    }

  },
  postMovie: async (req, res) => {
    try {
      const {title, year, director, duration, genre, rate, poster} = req.body;
      const savedMovie = await postMovie({title, year, director, duration, genre, rate, poster});
      res
        .status(201)
        .json(savedMovie);
    }
    catch (error) {
      res
      .status(500)
      .json({message: 'Error al crear la película', error: error.message});
    }
  }

}