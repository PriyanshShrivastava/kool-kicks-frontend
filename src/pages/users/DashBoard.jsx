import React from 'react';
import Layout from '../../components/layout/Layout';
import ProfileView from '../../components/ProfileView';
import UserMenu from '../../components/UserMenu';
import { useAuth } from '../../contexts/Auth';

const DashBoard = () => {
  const [auth] = useAuth();
  return (
    <Layout title={`${auth?.user?.name || 'User'}'s Dashboard - kool kicks`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-0 md:gap-x-4 py-8 md:px-36 p-10">
        <UserMenu />
        <ProfileView />
      </div>
    </Layout>
  );
};

export default DashBoard;
