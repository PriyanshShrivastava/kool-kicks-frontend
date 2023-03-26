import React, { useState } from "react";
import { useCart } from "../contexts/Cart";

let getColBg, blobColBg;
const bgArray = ["#e8f5de", "#f7ecee", "#ffffe1", "#e9f5ff"];
const blobArray = ["#d9eec8", "#f2e0e2", "#ffffc2", "#b5deff"];
const randomNumber = Math.trunc(Math.random() * 4);
getColBg = bgArray[randomNumber];
blobColBg = blobArray[randomNumber];

const ProductListedCart = ({
  name,
  price,
  _id,
  handleDelete,
  setAmountToAdd,
}) => {
  const [counter, setCounter] = useState(1);
  const [cart, setCart] = useCart();

  return (
    <div
      className="flex w-full flex-col space-y-4 px-4 py-4 rounded-md shadow-md bg-slate-100 font-josefin h-52 sm:h-62 md:h-60 transition-all duration-150"
      style={{
        backgroundColor: `${getColBg}`,
      }}
    >
      <div className=" flex space-x-4 w-full">
        <div
          className="w-40 h-28  rounded-full"
          style={{
            backgroundColor: `${blobColBg}`,
          }}
        >
          <img
            src={`${
              import.meta.env.VITE_BACKEND_API
            }/api/v1/product/product-image/${_id}`}
            alt={name}
            className="w-full "
          />
        </div>
        <div className="flex flex-col space-y-2 items-start justify-center w-full pr-2">
          <div className="text-sm md:text-lg font-semibold">{name}</div>

          <div className="flex justify-between items-center w-full">
            <span className="text-xs md:text-sm tracking-wider">
              Price :₹{price}
            </span>
          </div>
          <div className="text-xs flex space-x-2">
            <i className="fa-solid fa-truck-fast text-gray-500"></i>
            <span>Usually ships in 6 - 9 days</span>
          </div>
          {localStorage.getItem("size") && (
            <div className="flex justify-between items-center w-full">
              <span className="text-xs md:text-sm tracking-wider">
                Size :{localStorage.getItem("size")}
              </span>
            </div>
          )}
        </div>
      </div>
      <div className="flex justify-between px-4 w-full items-center">
        <div className="h-8 w-24">
          <div className="flex flex-row h-8 w-full rounded-lg relative bg-transparent ">
            <button
              data-action="decrement"
              className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
              onClick={() => {
                if (counter > 1) {
                  setCounter((prev) => prev - 1);

                  setAmountToAdd((prev) => eval(prev - price));
                } else {
                  handleDelete(_id);
                }
              }}
            >
              <span className="m-auto text-2xl font-thin">−</span>
            </button>
            <div className=" h-8 focus:outline-none mx-auto flex justify-center items-center w-full text-center bg-gray-50 font-semibold text-md hover:text-black focus:text-black  outline-none">
              {counter}
            </div>
            <button
              data-action="increment"
              className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
              onClick={() => {
                setCounter((prev) => prev + 1);
                setAmountToAdd((prev) => eval(prev + Number(price)));
              }}
            >
              <span className="m-auto text-2xl font-thin">+</span>
            </button>
          </div>
        </div>
        <button
          className="text-xs md:text-md px-2 md:px-5 py-2 md:py-3 bg-red-300 rounded-md text-gray-700 font-semibold font-josefin hover:scale-105 transition-all duration-150"
          onClick={() => {
            handleDelete(_id);
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default ProductListedCart;
