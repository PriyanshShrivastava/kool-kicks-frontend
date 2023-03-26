import React from 'react';
import AdminMenu from './AdminMenu';
import Layout from '../../components/layout/Layout';
import ProfileView from '../../components/ProfileView';

const AdminDashboard = () => {
  return (
    <Layout title="Admin Dashboard - Kool kicks">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-0 md:gap-x-4 py-8 md:px-36 p-10">
        <AdminMenu />
        <ProfileView />
      </div>
    </Layout>
  );
};

export default AdminDashboard;
