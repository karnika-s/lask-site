import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/Register.css';

const Register = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState(''); // New state for confirm password
    const [errorMessage, setErrorMessage] = useState(''); // New state for error messages

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Reset error message
        // setErrorMessage('error msg in frontend');

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setErrorMessage('Invalid email format');
            return;
        }

        // Check if passwords match
        if (password !== confirmPassword) {
            setErrorMessage('Passwords do not match');
            return;
        }

        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/auth/register`, { email, password });
            // alert('Registration successful! Your token is: ' + response.data.token);
            alert('Registration successful! \n Your token has been sent to your registrered mail ID');

            localStorage.setItem('token', response.data.token); // Save token to localStorage
            navigate('/login'); // Redirect to login page
        } catch (error) {
            console.error('Registration error:', error);
            const errorMessage = error.response?.data?.message || 'Error during registration';
            alert(errorMessage);
        }
    };

    return (
        <div>
            <h1>Create an Account</h1> {/* Heading */}
            <p className="tagline">Join us to explore amazing features!</p> {/* Tagline */}
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                />
                <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm Password"
                    required
                />
                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>} {/* Display error message */}
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;
