import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../contexts/Auth';

const AdminMenu = ({ width }) => {
  const [auth, setAuth] = useAuth();
  const handleLogout = () => {
    try {
      setAuth((prev) => {
        return { ...prev, user: null, token: '' };
      });
      toast.success('Logged out successfully');
      localStorage.removeItem('auth');
    } catch (error) {
      toast.error('Something went wrong');
    }
  };
  return (
    <div className={`flex-col space-y-4 md:w-${width}`}>
      <h2 className="text-xl font-josefin md:pl-8 text-justify">
        {' '}
        Admin Panel
      </h2>
      <div className="flex md:flex-col space-x-3 md:space-x-0 md:space-y-4">
        <NavLink
          to="/dashboard/admin/create-category"
          className="w-1/2 bg-brand text-mid hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-xs md:text-sm px-2 py-2 md:px-5 md:py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 font-josefin hover:scale-105 transition-all duration-150"
        >
          Create Category
        </NavLink>
        <NavLink
          to="/dashboard/admin/create-product"
          className="w-1/2 bg-brand text-mid hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-xs md:text-sm px-2 py-2 md:px-5 md:py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 font-josefin hover:scale-105 transition-all duration-150"
        >
          Create Product
        </NavLink>

        <NavLink
          to="/dashboard/admin/products"
          className="w-1/2 bg-brand text-mid hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-xs md:text-sm px-2 py-2 md:px-5 md:py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 font-josefin hover:scale-105 transition-all duration-150"
        >
          Show all Products
        </NavLink>
        <NavLink
          className="w-1/2 bg-red-400 text-mid hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-xs md:text-sm px-2 py-2 md:px-5 md:py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 hover:scale-105 transition-all duration-150"
          onClick={handleLogout}
          to="/login"
        >
          Logout
        </NavLink>
      </div>
    </div>
  );
};

export default AdminMenu;
