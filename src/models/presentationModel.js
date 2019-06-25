var mongoose = require('mongoose');

var Presentation = new mongoose.Schema({
    firstName: String,
    lastName: String,
    summary: String,
    country: String
}, { timestamps: true });

module.exports = mongoose.model('Presentation', Presentation);