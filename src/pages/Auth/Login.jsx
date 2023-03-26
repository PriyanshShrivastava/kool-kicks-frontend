import React, { useState } from 'react';
import Layout from '../../components/layout/Layout';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/Auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [auth, setAuth] = useAuth('');
  const location = useLocation();

  const navigate = useNavigate();
  const handleLogin = async (event) => {
    event.preventDefault();
    setEmail('');
    setPassword('');
    try {
      const sendData = await axios.post(
        `${import.meta.env.VITE_BACKEND_API}/api/v1/auth/login`,
        { email, password }
      );

      if (sendData.data.success) {
        toast.success('Logging... ');
        setAuth({
          ...auth,
          user: sendData.data.user,
          token: sendData.data.token,
        });

        localStorage.setItem('auth', JSON.stringify(sendData.data));
        setTimeout(() => {
          navigate(location.state || '/');
        }, 1000);
      } else {
        toast.error('Invalid username or password');
      }
      console.log(email, password);
    } catch (error) {
      console.error(error);
      toast.error('Invalid username or password');
    }
  };
  return (
    <Layout title="Login - Kool kicks">
      <section className="py-10 w-full font-josefin">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0 w-full">
          <div className="w-full rounded-lg shadow-lg md:mt-0 sm:max-w-md xl:p-0 bg-mid dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl font-josefin">
                Log in
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleLogin}>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-md font-medium text-gray-900 "
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm md:text-md rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required
                    onChange={(event) => {
                      const value = event.target.value;
                      setEmail(value);
                    }}
                    value={email}
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-md font-medium text-gray-900 "
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm md:text-md  rounded-lg focus:ring-gray-900 focus:border-gray-900 block w-full p-2.5 "
                    required
                    onChange={(event) => {
                      const value = event.target.value;
                      setPassword(value);
                    }}
                    value={password}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand text-mid hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 font-semibold hover:scale-105 transition-all duration-200"
                >
                  Login
                </button>
                <p className=" text-xs sm:text-sm md:text-md font-light text-zinc-800 ">
                  Trouble Signing in?{' '}
                  <Link
                    to="/forget-password"
                    className="font-bold text-xs sm:text-sm md:text-md text-primary-600 hover:underline "
                  >
                    Forgot Password
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Login;
