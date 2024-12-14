import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

function Login() {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const { login } = useContext(AuthContext);

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await login(credentials);
    } catch (err) {
      console.error("Login failed", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">Login</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={credentials.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={credentials.password}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </main>
  );
}

export default Login;
