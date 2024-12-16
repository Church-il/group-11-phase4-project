import React, { createContext, useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Use useCallback to memoize the validateToken function
  const validateToken = useCallback(async (token) => {
    try {
      const response = await fetch('http://localhost:5000/validate-token', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      const data = await response.json();
      if (data.valid) {
        setUser(data.user);
      } else {
        logout();
      }
    } catch (error) {
      logout();
    }
  }, []); // Empty dependency array as it doesn't depend on external variables

  useEffect(() => {
    // Check for existing token on initial load
    const token = localStorage.getItem('token');
    if (token) {
      validateToken(token);
    }
  }, [validateToken]);

  const login = async (credentials) => {
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      });
      
      if (!response.ok) {
        throw new Error('Login failed');
      }
      
      const data = await response.json();
      setUser(data.user);
      localStorage.setItem('token', data.token);
      navigate('/profile');
    } catch (error) {
      console.error('Login error:', error);
      alert('Login failed. Please check your credentials.');
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};