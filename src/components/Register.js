// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate,Link } from 'react-router-dom';
// import '../styles/Register.css';

// const Register = () => {
//     const navigate = useNavigate();
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState(''); // New state for confirm password
//     const [errorMessage, setErrorMessage] = useState(''); // New state for error messages

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         // Reset error message
//         // setErrorMessage('error msg in frontend');

//         // Validate email format
//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         if (!emailRegex.test(email)) {
//             setErrorMessage('Invalid email format');
//             return;
//         }

//         // Check if passwords match
//         if (password !== confirmPassword) {
//             setErrorMessage('Passwords do not match');
//             return;
//         }

//         try {
//             const response = await axios.post(`${process.env.REACT_APP_API_URL}/auth/register`, { email, password });
//             // alert('Registration successful! Your token is: ' + response.data.token);
//             alert('Registration successful! \n Your token has been sent to your registrered mail ID');

//             localStorage.setItem('token', response.data.token); // Save token to localStorage
//             navigate('/login'); // Redirect to login page
//         } catch (error) {
//             console.error('Registration error:', error);
//             const errorMessage = error.response?.data?.message || 'Error during registration';
//             alert(errorMessage);
//         }
//     };

//     return (
//         <div>
//             <h1>Create an Account</h1> {/* Heading */}
//             <p className="tagline">Join us to explore amazing features!</p> {/* Tagline */}
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     placeholder="Email"
//                     required
//                 />
//                 <input
//                     type="password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     placeholder="Password"
//                     required
//                 />
//                 <input
//                     type="password"
//                     value={confirmPassword}
//                     onChange={(e) => setConfirmPassword(e.target.value)}
//                     placeholder="Confirm Password"
//                     required
//                 />
//                 {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>} {/* Display error message */}
//                 <button type="submit">Register</button>

//                  {/* Add link to login page */}
//             <p className="login-link">
//                  <Link to="/login">Already an existing user? Login</Link>
//             </p>
//             </form>
//         </div>
//     );
// };

// export default Register;



import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom'; // Import Link for the login link
import '../styles/Register.css';
// import Video from "../assets/features-river-4.mp4";

import { GoogleLogin } from '@react-oauth/google';
import {jwtDecode} from 'jwt-decode'; // To decode Google token
import Video from "../assets/extension.mp4";


const Register = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState(''); // New state for confirm password
    const [errorMessage, setErrorMessage] = useState(''); // New state for error messages

    const handleSubmit = async (e) => {
        e.preventDefault();

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
            alert('Registration successful! \n Your token has been sent to your registered mail ID');

            localStorage.setItem('token', response.data.token); // Save token to localStorage
            navigate('/login'); // Redirect to login page
        }
        catch (error) {
            console.error('Registration error:', error);
            const errorMessage = error.response?.data?.message || 'Error during registration';
            alert(errorMessage);
        }
    };



    // Handle Google OAuth response
    const handleGoogleSuccess = async (credentialResponse) => {
        try {
            const decoded = jwtDecode(credentialResponse.credential);
            const { email, sub: googleId, name, picture } = decoded;

            // Send Google token to backend for verification and registration/login
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/auth/google`, {
                token: credentialResponse.credential,
            });

            // Assuming backend returns a JWT
            localStorage.setItem('token', response.data.token);
            navigate('/success'); // Redirect to dashboard or desired page
        } catch (error) {
            console.error('Google OAuth error:', error);
            alert('Google authentication failed. Please try again.');
        }
    };

    const handleGoogleFailure = (error) => {
        console.error('Google OAuth failed:', error);
        alert('Google authentication failed. Please try again.');
    };



    return (
        <div className="register-container">
            {/* Large Heading at the top */}
            <h1 className="main-heading">Join us to explore amazing features!</h1>

            <div className="content-wrapper">
                <div className="form-section">

                    {/* <h1>Create an Account</h1> Heading */}

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



                        {/* <div className="google-login-button">
                            <GoogleLogin
                                onSuccess={handleGoogleSuccess}
                                onError={handleGoogleFailure}
                            />
                        </div> */}

                          {/* Custom Google Login Button */}
                          <button
                            type="button"
                            className="google-login-button custom-google-button"
                            // onClick={() => login()}
                            >
                                <GoogleLogin
                                onSuccess={handleGoogleSuccess}
                                onError={handleGoogleFailure}
                            />
                                {/* <img
                                src="https://developers.google.com/identity/images/g-logo.png"
                                alt="Google Logo"
                                className="google-logo"
                            /> */}
                            {/* <span className="google-button-text">Sign up with Google</span> */}
                        </button>




                        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>} {/* Display error message */}
                        <button type="submit">Register</button>


                        <p className="login-link">
                            <Link to="/login">Already an existing user? Login</Link>
                        </p>

                    </form>


                </div>

                <div className="video-section">

                    <video autoPlay loop muted className="background-video">
                        <source src={Video} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </div>

    );
};

export default Register;
