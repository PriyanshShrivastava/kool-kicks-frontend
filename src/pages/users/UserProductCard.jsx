import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../Loading";

const UserProductCard = ({ product, cart, setCart, cartOrder }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isSizeSelected, setisSizeSelected] = useState(false);

  const navigate = useNavigate();

  let getColBg, blobColBg;
  const bgArray = ["#e8f5de", "#f7ecee", "#ffffe1", "#e9f5ff"];
  const blobArray = ["#d9eec8", "#f2e0e2", "#ffffc2", "#b5deff"];
  const randomNumber = Math.trunc(Math.random() * 4);
  getColBg = bgArray[randomNumber];
  blobColBg = blobArray[randomNumber];

  return (
    <div
      className="flex w-full flex-col space-y-6 md:space-y-4 py-4 rounded-md shadow-md font-josefin items-center cursor-pointer"
      style={{
        backgroundColor: `${getColBg}`,
      }}
      onClick={() => {
        navigate(`/product/${product?.slug}`);
      }}
    >
      <div className=" flex space-x-4 w-10/12 item-center md:items-start ">
        <div
          className=" w-36 md:w-52 rounded-2xl rotate-12 "
          style={{
            backgroundColor: `${blobColBg}`,
          }}
        >
          <img
            src={` 
            ${import.meta.env.VITE_BACKEND_API}/api/v1/product/product-image/${
              product._id
            }`}
            alt={product?.name}
            className="w-full relative z-20 -rotate-12"
          />
        </div>
        <div className="flex flex-col space-y-2 items-start justify-center w-full px-2">
          <div className="text-sm md:text-md font-semibold w-full">
            {product?.name}
          </div>
          <div className="text-xs w-full">
            {" "}
            {`*Hurry only ${product?.quantity} left in stock `}
          </div>
          <div className="flex justify-between items-center w-full">
            <span className="text-sm md:text-md font-semibold font-josefin tracking-wider">
              ₹{product?.price}
            </span>
          </div>
        </div>
      </div>
      <span className="text-xs">*Click on this cart to get product info</span>
      <div className=" px-4 w-full text-center">
        <button
          className="text-xs md:text-md px-2 md:px-5 py-2 md:py-3 bg-brand rounded-md text-mid font-semibold font-josefin hover:scale-105 transition-all duration-150 w-full sm:w-10/12 md:mx-0 md:w-full z-30"
          onClick={(event) => {
            event.stopPropagation();
            if (cartOrder.includes(product?._id)) {
              setCart([...cart]);
              localStorage.setItem("cart", JSON.stringify([...cart]));
              toast.info("Already in your cart");
            } else {
              localStorage.setItem("cart", JSON.stringify([...cart, product]));
              setCart([...cart, product]);
              toast.success("Item added to cart successfully");
            }
          }}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default UserProductCard;
