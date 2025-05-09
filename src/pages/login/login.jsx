import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);

    navigate('/');
  };

  return (
    <div className="login-page flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-10">
        <h2 className="text-2xl font-semibold text-center mb-8">Sign In</h2>
        <form onSubmit={handleSubmit} className="grid grid-rows-4 gap-4">
          <p className="block mb-1">Email</p>
          <input
            type="email"
            placeholder="Email@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 bg-gray-200 rounded"
            required
          />

          <p className="block mb-1">Password</p>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 bg-gray-200 rounded"
            required
          />

          <button
            type="submit"
            onClick={handleSubmit}
            className="mt-4 w-1/2 bg-sky-500 text-white py-2 rounded hover:bg-blue-500 transition mx-auto"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
