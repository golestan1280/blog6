const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const tmpUser = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        unique: true,
        required: true,
    }, 
    email: {
        type: String,
        unique: true
    },
    role: {
         type: String,
         unique: true,
         default: 'user'
     },
     code: {
         type: String,
         unique: true,
         required: true
     }
});

module.exports = mongoose.model('tmpUser', tmpUser);