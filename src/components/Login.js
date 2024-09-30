import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [token, setToken] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password) {
      setErrorMessage('Please enter both email and password');
      return;
    }

    try {
        console.log("in try");
      const response = await axios.post('http://localhost:5000/auth/login', {
        email,
        password,
      });

      console.log("host connect");

      // Assuming the response contains the token
      setToken(response.data.token);
      setErrorMessage(''); // Clear any previous errors

      console.log('Login successful! Token:', response.data.token);

      // Optionally store the token in local storage for authentication
      localStorage.setItem('authToken', response.data.token);
    } 
    catch (error) 
    {
      if (error.response && error.response.status === 400) {
        setErrorMessage('Invalid credentials');
      } 
      else 
      {
        setErrorMessage('Server error. Please try again later.');
      }
      console.error('Login error:', error);
    }
  };

  return (
    <div className="login-container">
      <h2>Login to LASK.AI</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter your password"
          />
        </div>
        {errorMessage && <p className="error">{errorMessage}</p>}
        <button type="submit">Login</button>
      </form>

      {/* Display the token after successful login */}
      {token && (
        <div className="token-display">
          <h3>Login Successful</h3> <br /> <h3>Token:</h3>
          <p>{token}</p>
        </div>
      )}
    </div>
  );
};

export default Login;
