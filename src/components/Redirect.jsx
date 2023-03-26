import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Redirect = ({ path = 'login' }) => {
  const [count, setCount] = useState(5);
  const location = useLocation();
  const navigate = useNavigate(`${import.meta.env.VITE_BACKEND_API}`);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);

    count === 0 &&
      navigate(`/${path}`, {
        state: location.pathname,
      });
    return () => clearInterval(interval);
  }, [count, navigate, location, path]);

  return (
    <div className="flex flex-col gap-4 w-full h-screen items-center justify-center">
      <h1 className="text-sm md:text-xl font-josefin">
        {' '}
        Checking for Authorization 🔎 and Redirecting to!!
      </h1>
      <div>
        <div className="w-12 h-12 rounded-full animate-pulse bg-brand transition-all duration-75 ease-in-out"></div>
      </div>
    </div>
  );
};

export default Redirect;
