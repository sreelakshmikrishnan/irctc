var mongoose = require('mongoose');
// Setup schema
var irctcSchema = mongoose.Schema({
    pnrNumber:Number,
    phoneNumber:Number,
});

module.exports = mongoose.model('irctc', irctcSchema);