const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true,
        required: true
    },
    year: {
        type: Number,
        min: 1888,
        required: true
    },
    director: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    genre: {type:[String],
        required: true},
    rate: {type:Number,
        required: true},
    poster: {type:String,
        required: true
    },
  
})

const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie; 

