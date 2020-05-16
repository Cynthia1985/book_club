
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const indexSchema = new Schema ({
    type: String,
}, {timestamps: true});

const Index = mongoose.model('Index', indexSchema);

module.exports = Index;