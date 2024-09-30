const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    Ptoken: {
        type: String,
        required: false,    // project token is for the team 
    }, 
    Utoken: {
        type: String,
        required: false,
    },              //unique user id
   
});

module.exports = mongoose.model('User', UserSchema);
