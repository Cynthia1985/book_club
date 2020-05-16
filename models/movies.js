
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create Schema
const movieSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    img: {type: String, required: true},
    rating: {type: Number},
    genre: {type: String, required: true},
    yearReleased: {type: Number},
    price: {type: Number, min: 0},
    qty: {type: Number, min: 0}
}, {timestamps: true});

// create model from our Schema
const Movie = mongoose.model('Movie', movieSchema);

// export model
module.exports = Movie;