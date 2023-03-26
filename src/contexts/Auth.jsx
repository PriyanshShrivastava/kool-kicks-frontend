import React, { useState, useEffect, useContext, createContext } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    token: '',
  });

  // default authorization
  axios.defaults.headers.common['Authorization'] = auth?.token;

  useEffect(() => {
    const parsedData = JSON.parse(localStorage.getItem('auth'));
    if (parsedData) {
      setAuth((prev) => {
        return { ...prev, user: parsedData.user, token: parsedData.token };
      });
    }
  }, []);

  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};

// custom hook
export const useAuth = () => useContext(AuthContext);
