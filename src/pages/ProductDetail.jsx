import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Layout from "../components/layout/Layout";
import { useCart } from "../contexts/Cart";
import Loading from "./Loading";

const ProductDetail = () => {
  const params = useParams();
  const [product, setProduct] = useState({});
  const [isFullDescription, setIsFullDescription] = useState(false);
  const [cart, setCart] = useCart();
  const [cartOrder, setCartOrder] = useState([]);
  const [count, setCount] = useState(4);
  const [isLoading, setIsLoading] = useState(true);
  const [isSizeSelected, setisSizeSelected] = useState(false);

  useEffect(() => {
    const cartProduct = cart?.map((product) => product._id);
    setCartOrder(cartProduct);
  }, [cart.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev - 1);
      console.log(img);
    }, 1000);

    count === 0 && setIsLoading(false);

    return clearInterval(interval);
  }, []);

  //   getting product and blob colours
  let getColBg, blobColBg;
  const bgArray = ["#e8f5de", "#f7ecee", "#ffffe1", "#e9f5ff"];
  const blobArray = ["#d9eec8", "#f2e0e2", "#ffffc2", "#b5deff"];
  const randomNumber = Math.trunc(Math.random() * 4);
  getColBg = bgArray[randomNumber];
  blobColBg = blobArray[randomNumber];

  //getting product
  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_BACKEND_API}/api/v1/product/specific-product/${
          params.slug
        }`
      );
      if (data?.success) {
        setIsLoading(false);
      }
      setProduct(data?.product);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (params?.slug) {
      getProduct();
    }
  }, [params?.slug]);

  return (
    <Layout title={`${product?.name} Page - Kool Kicks`}>
      <div className="py-16">
        <div
          className="flex flex-col px-4 py-6 md:py-18 space-y-6 shadow-md w-full sm:w-9/12 md:w-2/3 lg:w-1/2 mx-auto rounded-lg transition-all duration-200"
          style={{ backgroundColor: `${getColBg}` }}
        >
          {isLoading ? (
            <Loading />
          ) : (
            <>
              <div className="flex space-y-10 md:space-y-0 flex-col sm:flex-row pl-2 md:pl-12 md:space-x-6 w-full py-2 md:py-8 transition-all duration-200">
                <div
                  className="w-2/3 md:w-1/2 rotate-12 rounded-xl transition-all duration-200 mx-auto sm:mx-0"
                  style={{ backgroundColor: `${blobColBg}` }}
                >
                  <img
                    src={`${
                      import.meta.env.VITE_BACKEND_API
                    }/api/v1/product/product-image/${product._id}`}
                    alt={product?.name}
                    className="w-full relative z-20 -rotate-12"
                  />
                </div>
                <div className="flex flex-col space-y-6 items-center sm:items-start justify-center w-full pr-2 font-josefin md:px-8">
                  <div className="flex justify-between items-center md:items-start">
                    <div className="w-2/3 flex-col items-start space-y-4 px-8 md:px-4">
                      <div className="text-md md:text-md font-semibold w-full ">
                        {product?.name}
                      </div>
                      <div className="text-sm md:text-sm font-semibold w-full ">
                        Category:{" "}
                        <span className="font-medium">
                          {product?.category?.name}
                        </span>
                      </div>
                      <div className="text-sm md:text-md w-full flex-col space-y-2">
                        <span className="font-semibold">Description:</span>
                        <p className="font-medium">
                          {isFullDescription
                            ? product?.description?.substring(0, 150)
                            : product?.description?.substring(0, 60)}{" "}
                          ...
                          <a
                            className="font-semibold underline underline-offset-2"
                            onClick={() =>
                              setIsFullDescription((prev) => {
                                return !prev;
                              })
                            }
                          >
                            {isFullDescription ? "Show less" : "Read More"}
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-between w-1/3 ">
                      <p className="text-sm md:text-md font-semibold font-josefin tracking-wider mx-auto">
                        ₹{product?.price}
                      </p>
                    </div>
                  </div>
                  <fieldset class="mt-4 w-full md:px-4 px-8">
                    <legend class="mb-1 text-sm font-medium">Size</legend>

                    <div class="flex flex-wrap gap-1">
                      <label for="size-5" class="cursor-pointer">
                        <input
                          type="radio"
                          name="size"
                          id="size-5"
                          class="peer sr-only"
                          onClick={() => {
                            setisSizeSelected(true);
                            localStorage.setItem("size", 5);
                          }}
                        />

                        <span class="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                          5
                        </span>
                      </label>

                      <label for="size-6" class="cursor-pointer">
                        <input
                          type="radio"
                          name="size"
                          id="size-6"
                          class="peer sr-only"
                          onClick={() => {
                            setisSizeSelected(true);
                            localStorage.setItem("size", 6);
                          }}
                        />

                        <span class="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                          6
                        </span>
                      </label>

                      <label for="size-7" class="cursor-pointer">
                        <input
                          type="radio"
                          name="size"
                          id="size-7"
                          class="peer sr-only"
                          onClick={() => {
                            setisSizeSelected(true);
                            localStorage.setItem("size", 7);
                          }}
                        />

                        <span class="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                          7
                        </span>
                      </label>

                      <label for="size-8" class="cursor-pointer">
                        <input
                          type="radio"
                          name="size"
                          id="size-8"
                          class="peer sr-only"
                          onClick={() => {
                            setisSizeSelected(true);
                            localStorage.setItem("size", 8);
                          }}
                        />

                        <span class="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                          8
                        </span>
                      </label>

                      <label for="size-9" class="cursor-pointer">
                        <input
                          type="radio"
                          name="size"
                          id="size-9"
                          class="peer sr-only"
                          onClick={() => {
                            setisSizeSelected(true);
                            localStorage.setItem("size", 9);
                          }}
                        />

                        <span class="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                          9
                        </span>
                      </label>

                      <label for="size-10" class="cursor-pointer">
                        <input
                          type="radio"
                          name="size"
                          id="size-10"
                          class="peer sr-only"
                          onClick={() => {
                            setisSizeSelected(true);
                            localStorage.setItem("size", 10);
                          }}
                        />

                        <span class="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                          10
                        </span>
                      </label>
                    </div>
                  </fieldset>
                </div>
              </div>

              <div className=" px-4 w-full md:w-2/3  text-center mx-auto">
                <button
                  className="text-xs md:text-md px-2 md:px-5 py-2 md:py-3 bg-brand rounded-md text-mid font-semibold font-josefin hover:scale-105 transition-all duration-150 w-full  md:mx-0 "
                  onClick={(event) => {
                    event.stopPropagation();
                    if (isSizeSelected) {
                      if (cartOrder.includes(product?._id)) {
                        setCart([...cart]);
                        localStorage.setItem("cart", JSON.stringify([...cart]));
                        toast.info("Already in your cart");
                      } else {
                        localStorage.setItem(
                          "cart",
                          JSON.stringify([...cart, product])
                        );
                        setCart([...cart, product]);
                        toast.success("Item added to cart successfully");
                      }
                    } else {
                      toast.info("Please select a size");
                    }
                  }}
                >
                  Add to cart
                </button>
              </div>
              <div className="text-xs w-full text-right font-josefin">
                <span className="font-semibold">*</span>
                {` Hurry only ${product?.quantity} left in stock `}
              </div>
            </>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
