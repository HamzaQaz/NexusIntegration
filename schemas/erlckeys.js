const mongoose = require('mongoose')

const erlcSchema = new mongoose.Schema({
    serverID: Number,
    Key: String
});

exports.keys = mongoose.model('keys', erlcSchema)
