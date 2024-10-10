const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true, // Trim whitespace from the email
    },
    password: {
        type: String,
        minlength: 6, // Enforce a minimum length for passwords
        required: function () {
            return !this.googleId;  // Only require password if not using Google OAuth
        },
       
    },
    token: {  // Add token field
        type: String,
    },
    googleId: { 
        type: String, // Google OAuth ID
        unique: true,
        sparse: true, // Allow for null values in unique field
    }, // Store Google ID
    name: { 
        type: String 
    },

    
    // projectToken: {
    //     type: String,
    //     required: false, // Project token for the team
    // },
    // userToken: {
    //     type: String,
    //     required: false, // Unique user ID token
    // },
}, {
    timestamps: true, // Automatically create createdAt and updatedAt fields
});

module.exports = mongoose.model('Users', UserSchema);

