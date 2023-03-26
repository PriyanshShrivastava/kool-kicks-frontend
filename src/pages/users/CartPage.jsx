import Layout from "../../components/layout/Layout";
import React, { useEffect, useState } from "react";
import { useCart } from "../../contexts/Cart";
import { useAuth } from "../../contexts/Auth";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ProductListedCart from "../ProductListedCart";
import axios from "axios";

const CartPage = () => {
  const [auth, setAuth] = useAuth();
  const [cart, setCart] = useCart();
  const [amountToAdd, setAmountToAdd] = useState(0);

  const navigate = useNavigate();

  //handling delete from cart
  const handleDelete = (id) => {
    try {
      let userCart = [...cart];
      let removedIndex = userCart.findIndex((item) => item.id === id);
      userCart.splice(removedIndex, 1);
      setCart(userCart);
      localStorage.setItem("cart", JSON.stringify(userCart));
    } catch (error) {
      console.error(error);
    }
  };

  const totalCartValue = () => {
    try {
      let totalMRP = 0;
      cart?.map((item) => (totalMRP += Number(item.price)));
      totalMRP += amountToAdd;
      return totalMRP;
    } catch (error) {}
  };

  const paymenthandler = async (amount) => {
    try {
      const {
        data: { key },
      } = await axios.get(`${import.meta.env.VITE_BACKEND_API}/api/getkey`);

      const { data } = await axios.post(
        `${import.meta.env.VITE_BACKEND_API}/api/checkout`,
        {
          amount,
        }
      );

      const options = {
        key,
        amount: data?.order?.amount,
        currency: "INR",
        name: "Kool kicks",
        description: "One stop sneaker shop",
        image: "https://i.postimg.cc/tJ48Lpvw/Koolkicks-logo.png",
        order_id: data?.order?.id,
        callback_url: `${
          import.meta.env.VITE_BACKEND_API
        }/api/paymentverification`,

        handler: function () {
          toast.success("Payment Done, Redirecting ..");
          setTimeout(() => {
            navigate("/");
            setCart([]);
            localStorage.setItem("cart", JSON.stringify([]));
            localStorage.setItem("size", "Not Selected");
          }, 1500);
        },
        prefill: {
          name: "Kool kicks",
          email: "payments@koolkicks.com",
          contact: "9999999999",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#ffd966",
        },
      };

      const razor = new window.Razorpay(options);
      razor.open();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Layout title="Checkout  - Kool kicks">
      <div className="py-6 px-4 md:py-10 md:px-6 xl:px-16">
        <h1 className="text-md md:text-2xl font-josefin w-10/12 px-6 md:mx-auto flex flex-col items-start md:flex-row md:justify-between md:items-center">
          <p>
            <span>Hello,</span>
            <span className="font-semibold">
              {auth?.user?.name || "SneakerHead"}👋
            </span>
          </p>
          <div className="text-xs md:text-sm">
            {" "}
            {cart.length >= 1
              ? `You have ${cart.length} items in your cart. ${
                  auth?.token ? "" : "Please login to continue."
                }`
              : "Your cart is Empty ☹️ "}
          </div>
        </h1>
        <div className="w-full md:w-full lg:w-10/12 px-6 py-6 bg-mid grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto relative rounded-md">
          <div
            className="overflow-y-scroll h-96 grid grid-cols-1 md:grid-cols-2 w-full md:col-start-1 md:col-span-2 gap-4 "
            id="scroll"
          >
            {cart?.map((cartEl, index) => {
              return (
                <ProductListedCart
                  key={index}
                  {...cartEl}
                  handleDelete={handleDelete}
                  totalCartValue={totalCartValue}
                  setAmountToAdd={setAmountToAdd}
                />
              );
            })}
          </div>

          {cart.length >= 1 ? (
            <div className="bg-slate-50 font-josefin row-start-1 md:col-start-3 rounded-md shadow-sm ">
              <h1 className="text-left pl-6 md:pl-0 md:text-center font-josefin text-sm md:text-lg py-2 ">
                {" "}
                Shopping bag{" "}
                <i className="fa-solid fa-bag-shopping text-brand"></i>{" "}
              </h1>
              <div className="flex flex-col w-full px-6 py-6 space-y-6 md:space-y-8 ">
                <h2 className="text-md font-semibold w-full ">
                  {" "}
                  Price Details💰
                </h2>
                <p className="text-xs md:text-sm flex justify-between">
                  <span>Total MRP: </span>
                  <span>{`₹ ${totalCartValue()}`}</span>
                </p>
                <div className="text-xs md:text-sm flex justify-between w-full items-center">
                  <span>Shipping :</span>
                  <div className="flex space-x-1">
                    <span className="line-through">₹159</span>
                    <span className="font-semibold font-sm text-green-400">
                      Free
                    </span>
                  </div>
                </div>
                <p className="text-xs md:text-sm flex justify-between">
                  <span>You pay: </span>
                  <span>{`₹ ${totalCartValue()}`}</span>
                </p>
                <div className="w-full text-center">
                  <button
                    className="text-xs md:text-md px-2 md:px-5 py-2 md:py-3 bg-brand rounded-md text-mid font-semibold font-josefin hover:scale-105 transition-all duration-150 w-full sm:w-10/12 md:mx-0 md:w-full"
                    onClick={() => {
                      if (!auth?.user) {
                        toast.info("Redirecting to login..");
                        setTimeout(() => {
                          navigate("/login", {
                            state: "/cart",
                          });
                        }, 2000);
                      } else {
                        paymenthandler(totalCartValue());
                      }
                    }}
                  >
                    {`${
                      auth?.user
                        ? "Proceed to Checkout"
                        : "Please login to proceed"
                    }`}
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2 flex flex-col space-y-6 xs:w-full md:w-2/5 xs:w-full transition-all duration-150">
              <div className="xs:w-40 sm:w-52 xs-left-0 sm:left-12 md:left-0 md:w-60 relative mx-auto">
                <img
                  src="/assets/EmptyCart.png"
                  alt="Empty cart"
                  className="w-full md:w-full relative mx-auto"
                />
              </div>
              <h2 className="text-sm md:text-md font-josefin text-center">
                Your bag is empty ☹️
              </h2>
              <p className="text-xs md:text-sm font-josefin text-center">
                This feels too light!! Go bag some sneakers for yourself.
              </p>
              <Link
                type="submit"
                className="w-full md:w-10/12 lg:w-3/5 mx-auto bg-brand text-mid hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 font-josefin"
                to="/"
              >
                Start Shopping
              </Link>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;
