const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const user = new Schema({
    firstName: {
        type: String,
        // required: true,
    },
    lastName:{
        type: String,
        // required: true,
    },
    userName: {
        type: String,
        // unique: true,
        // required: true,
    },
    password: {
        type: String,
        // unique: true,
        // required: true,
    },
    // sex: {
    //     type: Boolean,
    // },
    // avatar: {
    //     type: String,
    //     // unique: true,
    //     // required: true,
    // },
    mobile: {
        type: Number,
        // unique: true,
        // required: true,
    },
    // role: {
    //      type: String,
    //      unique: true,
    //      required: true,
    //  }
});

module.exports = mongoose.model('user', user);