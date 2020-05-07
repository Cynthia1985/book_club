
const mongoose = require('mongoose');

// create Schema
const bookSchema = new mongoose.Schema({
    title: {type: String, required: true},
    author: {type: String, required: true},
    description: {type: String, required: true},
    img: {type: String, required: true},
    rating: {type: Number},
    genre: {type: String, required: true},
    pages: {type: Number},
    price: {type: Number, min: 0},
    qty: {type: Number, min: 0}
}, {timestamps: true});

// create model from our Schema
const Book = mongoose.model('Book', bookSchema);

// export model
module.exports = Book;