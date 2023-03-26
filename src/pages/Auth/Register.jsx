import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Layout from '../../components/layout/Layout';
import { toast } from 'react-toastify';
import axios from 'axios';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [answer, setAnswer] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const hadleSubmit = async (event) => {
    event.preventDefault();
    setName('');
    setEmail('');
    setPassword('');
    setAnswer('');
    try {
      const sendData = await axios.post(
        `${import.meta.env.VITE_BACKEND_API}/api/v1/auth/register`,
        { name, email, password, answer }
      );

      if (sendData.data.success) {
        toast.success('Registered successfully ');
        setTimeout(() => {
          navigate('/login');
        }, 1500);
      } else {
        toast.error(sendData.data.message);
      }
      console.log(name, email, password, answer);
    } catch (error) {
      console.error('caught an error');
      toast.error('Something went wrong');
    }
  };
  return (
    <Layout title="Register - Kool Kicks">
      <section className="bg-lightGray py-8 w-full font-josefin">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0 w-full">
          <div className="w-full rounded-lg shadow-lg md:mt-0 sm:max-w-md xl:p-0 bg-mid dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                Create an account
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={hadleSubmit}>
                <div>
                  <label
                    htmlFor="fullName"
                    className="block mb-2 font-bold text-gray-900 text-md  "
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="fullName"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Full Name"
                    required
                    onChange={(event) => {
                      const value = event.target.value;
                      setName(value);
                    }}
                    value={name}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-bold text-gray-900 "
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@anything.com"
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
                    className="block mb-2 text-sm font-bold text-gray-900 "
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                    onChange={(event) => {
                      const value = event.target.value;
                      setPassword(value);
                    }}
                    value={password}
                  />
                </div>
                <div>
                  <label
                    htmlFor="security-question"
                    className="block mb-2 text-sm font-bold text-gray-900 "
                  >
                    Security question
                  </label>
                  <input
                    type="text"
                    name="security-question"
                    id="security-question"
                    placeholder="What's your fav sport?"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                    value={answer}
                    onChange={(event) => {
                      const value = event.target.value;
                      setAnswer(value);
                    }}
                  />
                </div>
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      aria-describedby="terms"
                      type="checkbox"
                      className="w-4 h-4 accent-lightBlue rounded-sm border-2 border-black focus:ring-3 focus:ring-black "
                      required
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="terms"
                      className="font-light text-gray-500 "
                    >
                      I accept the{' '}
                      <Link className="font-bold text-primary-600 hover:underline dark:text-primary-500">
                        Terms and Conditions
                      </Link>
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-brand text-mid hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Create an account
                </button>
                <p className="text-sm font-light text-zinc-800 ">
                  Already have an account?{' '}
                  <Link
                    to="/login"
                    className="font-bold text-primary-600 hover:underline "
                  >
                    Login here
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

export default Register;
