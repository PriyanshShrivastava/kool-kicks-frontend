import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/Auth';
import { Outlet } from 'react-router-dom';
import axios from 'axios';
import Redirect from '../Redirect';

const PrivateRoute = () => {
  const [ok, setOk] = useState(false);
  const [auth, setAuth] = useAuth();

  useEffect(() => {
    const authCheck = async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_API}/api/v1/auth/user-auth`
      );

      if (response.data.ok) {
        setOk(true);
      } else {
        setOk(false);
      }
    };

    if (auth?.token) authCheck();
  }, [auth?.token, ok]);
  return <>{ok ? <Outlet /> : <Redirect />}</>;
};

export default PrivateRoute;
