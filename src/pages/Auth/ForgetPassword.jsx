import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Layout from '../../components/layout/Layout';
import { useNavigate } from 'react-router-dom';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [answer, setAnswer] = useState('');

  const navigate = useNavigate();

  const handleResetPassword = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_API}/api/v1/auth/forget-password`,
        {
          email,
          answer,
          newPassword,
        }
      );

      console.log(response);

      if (response && response?.data.success) {
        toast.success('Reset Password Successful');

        setTimeout(() => {
          navigate('/login');
        }, 1000);
      } else {
        console.error(response.data.message);
      }
    } catch (error) {
      console.error('Catching error');
      toast.error(error);
    }
  };

  return (
    <Layout title="Forget Password - Book Hive">
      <section className=" mt-8 py-8 w-full">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0 w-full">
          <div className="w-full rounded-lg shadow-lg md:mt-0 sm:max-w-md xl:p-0 bg-mid dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl font-josefin">
                Reset your Password
              </h1>
              <form
                className="space-y-4 md:space-y-6"
                onSubmit={handleResetPassword}
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 font-josefin"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 font-josefin"
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
                    htmlFor="new-password"
                    className="block mb-2 text-sm font-medium text-gray-900 font-josefin"
                  >
                    New Password
                  </label>
                  <input
                    type="password"
                    name="newPassword"
                    id="new-password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 font-josefin"
                    required
                    onChange={(event) => {
                      const value = event.target.value;
                      setNewPassword(value);
                    }}
                    value={newPassword}
                  />
                </div>

                <div>
                  <label
                    htmlFor="security-question"
                    className="block mb-2 text-sm font-bold text-gray-900 font-josefin"
                  >
                    Security question
                  </label>
                  <input
                    type="text"
                    name="answer"
                    id="security-question"
                    placeholder="What's your fav sport?"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 font-josefin"
                    required
                    value={answer}
                    onChange={(event) => {
                      const value = event.target.value;
                      setAnswer(value);
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-dark text-mid bg-brand focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 font-josefin font-semibold hover:scale-105 transition-all duration-200"
                >
                  Reset Password
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ForgetPassword;
