import React, { useEffect, useState } from 'react';
import AdminMenu from './AdminMenu';
import Layout from '../../components/layout/Layout';
import { Select } from 'antd';
import axios from 'axios';
import { toast } from 'react-toastify';

const { Option } = Select;

const CreateProduct = () => {
  const [categories, setCategories] = useState([{}]);
  const [category, setCategory] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [image, setImage] = useState('');

  useEffect(() => {
    getAllCategories();
  }, []);
  // getting all category
  const getAllCategories = async () => {
    try {
      console.log(`${import.meta.env.VITE_BACKEND_API}`);
      const { data } = await axios.get(
        `${import.meta.env.VITE_BACKEND_API}/api/v1/category/categories`
      );

      if (data?.success) {
        setCategories(() => [...data?.allCategory]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const clearState = () => {
    setName('');
    setDescription('');
    setCategory('');
    setImage('');
    setPrice('');
    setQuantity('');
  };
  //handling create product

  const handleCreateProduct = async (event) => {
    event.preventDefault();
    try {
      // creating a form data to get the images
      const productDetail = new FormData();

      productDetail.append('name', name);
      productDetail.append('quantity', quantity);
      productDetail.append('price', price);
      productDetail.append('description', description);
      productDetail.append('image', image);
      productDetail.append('category', category);

      console.log(productDetail);
      const { data } = await axios.post(
        `${import.meta.env.VITE_BACKEND_API}/api/v1/product/create-product`,
        productDetail
      );

      if (data?.success) {
        toast.success(`${data?.product?.name} addded successfully`);
        clearState();
      } else {
        toast.error(`${data?.product?.name} can't be added `);
      }
    } catch (error) {
      console.error(error);
      toast.error(`Something went wrong when creating product`);
    }
  };

  return (
    <Layout title="Admin Create Product- kool kicks">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-0 md:gap-x-4 px-10 md:px-36 py-10 ">
        <AdminMenu width="full" />
        <div>
          <h1 className="text-md py-3 md:text-xl font-medium font-josefin md:pl-6 md:py-2">
            Create Product
          </h1>
          <form className="bg-mid p-6 rounded-md shadow-lg">
            <div className="flex flex-col space-y-6">
              <Select
                bordered={true}
                placeholder="Select a Category"
                style={{ width: '100%' }}
                showSearch
                onChange={(value) => {
                  setCategory(value);
                }}
              >
                {categories.map((category, index) => {
                  return (
                    <Option
                      key={index}
                      value={category._id}
                      className="bg-gray-50"
                      name="category"
                    >
                      {category.name}
                    </Option>
                  );
                })}
              </Select>
              <div className="flex justify-between w-full items-center md:pr-10 flex-wrap ">
                <label className="px-2 py-1 md:px-4 md:py-2 rounded-md shadow-md bg-teal-300 text-gray-800 text-sm md:text-md font-josefin cursor-pointer">
                  {image ? `${image.name.substring(0, 9)} ...` : 'Upload Image'}
                  <input
                    type="file"
                    name="image"
                    accept="image/*"
                    onChange={(event) => {
                      const [value] = event.target.files;
                      setImage(value);
                    }}
                    required
                    hidden
                  />
                </label>
                <div
                  id="img-container"
                  className="rounded-md border-none shadow-sm w-16 h-16 md:w-24 md:h-24 overflow-hidden transition-all duration-100"
                >
                  {image && (
                    <img
                      src={URL.createObjectURL(image)}
                      alt={`${image?.name} Product`}
                      className="w-full"
                    />
                  )}
                </div>
              </div>
              <input
                type="text"
                className="w-full rounded-md h-8 border-2 px-4  font-josefin text-md placeholder:font-josefin text-gray-800 placeholder:text-gray-400 bg-gray-50 "
                placeholder="Add a product name"
                value={name}
                required
                onChange={(event) => {
                  const value = event.target.value;
                  setName(value);
                }}
              />
              <textarea
                type="text"
                name="description"
                className="w-full rounded-md border-2 px-4 py-4 font-josefin text-md placeholder:font-josefin text-gray-800 placeholder:text-gray-400 bg-gray-50 "
                placeholder="Add Product description"
                value={description}
                required
                onChange={(event) => {
                  const value = event.target.value;
                  setDescription(value);
                }}
              />
              <input
                type="number"
                name="price"
                className="w-full rounded-md h-8 border-2 px-4  font-josefin text-md placeholder:font-josefin text-gray-800 placeholder:text-gray-400 bg-gray-50 "
                placeholder="Add product price "
                value={price}
                required
                onChange={(event) => {
                  const value = event.target.value;
                  setPrice(value);
                }}
              />
              <input
                type="number"
                name="quantity"
                className="w-full rounded-md h-8 border-2 px-4  font-josefin text-md placeholder:font-josefin text-gray-800 placeholder:text-gray-400 bg-gray-50 "
                placeholder="Add Quantity"
                value={quantity}
                required
                onChange={(event) => {
                  const value = event.target.value;
                  setQuantity(value);
                }}
              />

              <button
                className="px-2 py-1 md:px-4 md:py-2 bg-brand text-sm md:text-md rounded-md shadow-md text-mid font-josefin mx-auto"
                type="submit"
                onClick={handleCreateProduct}
              >
                {' '}
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default CreateProduct;
