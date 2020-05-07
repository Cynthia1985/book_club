
const mongoose = require('mongoose');

// create Schema
const userSchema = new mongoose.Schema({
    title: {type: String, required: true},
    shoppingCart: {type: []}
}, {timestamps: true});

// create model from Schema
const User = mongoose.model('User', userSchema);

// export Model
module.exports = User;