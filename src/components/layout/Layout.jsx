import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from './Footer';
import Header from './Header';
import { ToastContainer, Bounce } from 'react-toastify';
const Layout = ({ children, title, description, keywords }) => {
  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <title>{title}</title>
      </Helmet>
      <div>
        <Header />
        <main style={{ minHeight: '75vh' }} className="bg-slate-100">
          <ToastContainer
            draggablePercent={60}
            transition={Bounce}
            autoClose={1000}
            position="top-center"
          />
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

Layout.defaultProps = {
  title: 'Kool Kicks',
  description: 'Book hive is a one stop destination for your next read ',
  keywords: 'books project book react novel fiction romantic',
};

export default Layout;
