import React from 'react';
import Layout from '../../components/layout/Layout';
import UserMenu from '../../components/UserMenu';

const Orders = () => {
  return (
    <Layout title="Orders - Kool kicks">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-0 md:gap-x-4 py-8 md:px-36 p-10">
        <UserMenu />
        <h1 className="md:text-lg font-josefin ">No order placed yet!! ☹️</h1>
      </div>
    </Layout>
  );
};

export default Orders;
