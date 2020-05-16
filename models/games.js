
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create Schema
const gameSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    img: {type: String, required: true},
    founded: {type: Number},
    price: {type: Number, min: 0},
    qty: {type: Number, min: 0}
}, {timestamps: true});

// create model from our Schema
const Game = mongoose.model('Game', gameSchema);

// export model
module.exports = Game;