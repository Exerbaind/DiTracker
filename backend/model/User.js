const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String
    },
    lastName: {
        type: String,
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    number: {
        type: String,
    },

    date: {
        type: Date,
        default: Date.now
    },
    notes: {
        type: Array
    },
});

module.exports = User = mongoose.model('users', UserSchema);