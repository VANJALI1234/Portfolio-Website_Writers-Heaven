import React, { useState } from 'react';
import './Auth.css'; // Import the unified CSS file
import { useAuth } from '../AuthContext';
import { useNavigate } from 'react-router-dom';

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate successful login
    login({ email });
    console.log('Logged in with', { email, password });
    navigate('/Quotes'); 
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>LOGIN</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
        <div className="link">
          <p >Don't have an account? <a href="/signup">Create an account</a></p>
        </div>
      </form>
    </div>
  );
}

export default Login;
