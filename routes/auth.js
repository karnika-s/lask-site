const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Users = require('../models/Users');
const router = express.Router();
const dotenv = require('dotenv');

dotenv.config();

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

        res.status(201).json({ token });
    } catch (error) {
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
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
