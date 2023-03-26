import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/Auth';
import { Outlet } from 'react-router-dom';
import axios from 'axios';
import Redirect from '../Redirect';

// Private Routes
const PrivateAdminRoute = () => {
  const [ok, setOk] = useState(false);
  const [auth, setAuth] = useAuth();

  useEffect(() => {
    const authCheck = async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_API}/api/v1/auth/admin-auth`
      );

      if (response.data.ok) {
        setOk(true);
      } else {
        setOk(false);
      }
    };

    if (auth?.token) authCheck();
  }, [auth?.token]);
  return <>{ok ? <Outlet /> : <Redirect path="" />}</>;
};

export default PrivateAdminRoute;
