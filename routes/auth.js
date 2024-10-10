const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Users = require('../models/Users');
const router = express.Router();
const dotenv = require('dotenv');
const nodemailer = require('nodemailer'); // Import Nodemailer
const { OAuth2Client } = require('google-auth-library');



dotenv.config();


// Initialize the Google OAuth2Client
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// Create transporter object for Nodemailer
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL_USER, // Env variable for email
        pass: process.env.EMAIL_PASS, // Env variable for email password
    },
    logger: true,  // Enable debug logging
    debug: true,   // Enable detailed output
});

// Function to generate a random token (placeholder function)
function generateToken() {
    return Math.random().toString(36).substring(2);
}


// Register User
router.post('/register', async (req, res) => {
    const { email, password } = req.body;

    try {
        const existingUser = await Users.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new Users({ email, password: hashedPassword });

        await newUser.save();

        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        newUser.token = token;
        await newUser.save(); // Save token in the database


        // Email options
        const mailOptions = {
            from: process.env.EMAIL_USER, // Your email
            to: email,
            subject: 'LASK.AI Registration Token',
            text: `Hello!  Welcome to LASK.AI. Your registration token is: ${token} . Please use this token to login and use the amazing features of LASK AI`,
            html: `<p>Hello!</p> <p>Welcome to LASK.AI. Your registration token for LASK.AI is: <strong>${token}</strong></p> <p>Please use this token to login and use the amazing features of LASK AI</p>`,
        };

        // Send the email
        await transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                console.error('Error sending email:', err);
                return res.status(500).json({ message: 'Error sending email' });
            }
            console.log('Email sent:', info.response);
            res.status(201).json({ token }); // Send the response here, after the email is sent successfully
        });

        // res.status(201).json({ token });
    } 
    catch (error) {
        console.error('Server error:', error);
        res.status(500).json({ message: 'Server error' });
    }
});


// Login User
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await Users.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        user.token = token;
        await user.save(); // Save new token in the database

        res.json({ token });
    } catch (error) {
        console.error('Login error:', error); // Log error details for debugging
        res.status(500).json({ message: 'Server error' });
    }
});




// Google OAuth Route
router.post('/google', async (req, res) => {
    const { token } = req.body;

    try {
        // Verify the token with Google
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: process.env.GOOGLE_CLIENT_ID,
        });

        const payload = ticket.getPayload();
        const { sub: googleId, email, name, picture } = payload;

        // Check if user already exists
        let user = await Users.findOne({ email });

        if (!user) {
            // If user doesn't exist, create a new user
            user = new Users({
                email,
                googleId, // Store Google ID
                name,
                // Password is not required for Google users
            });

            // Generate JWT token
            const jwtToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
            user.token = jwtToken;
            await user.save();

            // Optionally, send a welcome email
            const mailOptions = {
                from: process.env.EMAIL_USER,
                to: email,
                subject: 'Welcome to LASK.AI',
                text: `Hello ${name}, welcome to LASK.AI!`,
                html: `<p>Hello <strong>${name}</strong>,</p><p>Welcome to LASK.AI!</p>`,
            };

            await transporter.sendMail(mailOptions, (err, info) => {
                if (err) {
                    console.error('Error sending welcome email:', err);
                    // Not critical, so we don't fail the request
                } else {
                    console.log('Welcome email sent:', info.response);
                }
            });

            res.status(201).json({ token: jwtToken });
        } else {
            // If user exists, update Google ID if not set
            if (!user.googleId) {
                user.googleId = googleId;
                await user.save();
            }

            // Generate new JWT token
            const jwtToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
            user.token = jwtToken;
            await user.save();

            res.json({ token: jwtToken });
        }
    } catch (error) {
        console.error('Google OAuth error:', error);
        res.status(401).json({ message: 'Invalid Google token' });
    }
});


module.exports = router;
