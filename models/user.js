var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('user', new Schema({
    path: String,
    device: String,
    time: String,
    hour: String,
    network: String,
    score: Number
}));