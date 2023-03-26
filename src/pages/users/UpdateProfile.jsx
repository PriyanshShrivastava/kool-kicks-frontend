import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/layout/Layout';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useAuth } from '../../contexts/Auth';

const UpdateProfile = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [auth, setAuth] = useAuth();

  const navigate = useNavigate();

  const hadleUserUpdate = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.put(
        `${import.meta.env.VITE_BACKEND_API}/api/v1/auth/edit-profile`,
        { name, phone, address, auth }
      );

      if (data?.success) {
        toast.success('Profile updated successfully');
        setAuth({ ...auth, user: data?.userUpdatedDetail });

        let locaUser = JSON.parse(localStorage.getItem('auth'));
        locaUser.user = data?.userUpdatedDetail;
        localStorage.setItem('auth', JSON.stringify(locaUser));
        setTimeout(() => {
          navigate('/dashboard/user');
        }, 1500);
      } else {
        console.log(updatedUser?.userUpdatedDetail);
        toast.error(updatedUser?.data?.message);
      }
      console.log(name, address, phone);
    } catch (error) {
      console.error('caught an error');
      navigate('/dashboard/user');
    }
  };
  return (
    <Layout title="Update User Profile - Kool Kicks">
      <section className="bg-lightGray py-8 w-full font-josefin">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0 w-full">
          <div className="w-full rounded-lg shadow-lg md:mt-0 sm:max-w-md xl:p-0 bg-mid dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                Update Profile
              </h1>
              <form
                className="space-y-4 md:space-y-6"
                onSubmit={hadleUserUpdate}
              >
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
                    placeholder={auth?.user?.name}
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
                    className="bg-gray-300 border-2 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 font-semibold"
                    placeholder={auth?.user?.email}
                    disabled
                  />
                </div>
                <div>
                  <label
                    htmlFor="address"
                    className="block mb-2 text-sm font-bold text-gray-900 "
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Sec 9 , Bhilai"
                    required
                    onChange={(event) => {
                      const value = event.target.value;
                      setAddress(value);
                    }}
                    value={address}
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block mb-2 text-sm font-bold text-gray-900 "
                  >
                    Phone
                  </label>
                  <input
                    type="number"
                    name="phone"
                    id="phone"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="99999999"
                    required
                    onChange={(event) => {
                      const value = event.target.value;
                      setPhone(value);
                    }}
                    value={phone}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand text-mid hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Update Profile
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default UpdateProfile;
