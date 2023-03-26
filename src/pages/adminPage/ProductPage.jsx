import Layout from '../../components/layout/Layout';
import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import AdminMenu from './AdminMenu';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Loading from '../Loading';

const ProductPage = () => {
  const [products, setProducts] = useState([{}]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_BACKEND_API}/api/v1/product/products`
      );
      console.log(data);
      if (data?.success) {
        setProducts(() => {
          return [...data.products];
        });
        setIsLoading(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAllProducts();
    console.log(products);
  }, []);

  // handling delete product
  const handleDelete = async (id) => {
    try {
      const { data } = await axios.delete(
        `${
          import.meta.env.VITE_BACKEND_API
        }/api/v1/product/delete-product/${id}`
      );

      toast.success(`Product deleted successfully`);
      getAllProducts();
    } catch (error) {
      console.log(error);
      toast.error(`Soemthing went wrong while deleting `);
    }
  };
  return (
    <Layout title="Admin Product Page - Kool kicks">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 md:gap-y-0 px-4 md:px-20 py-10">
        <AdminMenu width="2/3" />
        <div className="md:col-start-2 md:row-start-1 md:col-span-2">
          <h1 className=" text-md py-3 md:text-xl font-medium font-josefin md:pl-6 md:py-2">
            {' '}
            All Products{' '}
          </h1>
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-4 h-96 overflow-y-scroll"
            id="scroll"
          >
            {isLoading ? (
              <Loading />
            ) : (
              products?.map((product, index) => {
                return (
                  <ProductCard
                    key={index}
                    {...product}
                    handleDelete={handleDelete}
                  />
                );
              })
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductPage;
