import React from 'react';
import { useAuth } from '../contexts/Auth';
const ProfileView = () => {
  const [auth] = useAuth();
  return (
    <div className="flex flex-col space-y-4">
      <h2 className="text-xl font-josefin md:pl-6 ">
        Hello, {auth?.user?.name}!{' '}
      </h2>
      <div className=" flex-col space-y-12 px-6 py-8 w-full rounded-lg shadow-lg md:mt-0 sm:max-w-md  bg-mid dark:border-gray-700 font-raleway">
        <p>
          {' '}
          Email : <span className="font-semibold">{auth?.user?.email}</span>
        </p>
        <p>
          {' '}
          Contact :{' '}
          <span className="font-semibold">
            {auth?.user?.phone || '987654321'}
          </span>
        </p>
        <p>
          {' '}
          Your address :{'   '}
          <span className="font-semibold">
            {auth?.user?.address || ' Sec9 118/37 Madhapur, Hyderabad , IND'}
          </span>
        </p>
      </div>
    </div>
  );
};

export default ProfileView;
