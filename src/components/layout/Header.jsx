import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/Auth";
import { toast } from "react-toastify";
import { useCart } from "../../contexts/Cart";

const Header = () => {
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
  const [cart] = useCart();

  const FullName = auth?.user?.name.split(" ");
  const handleLogout = (event) => {
    try {
      setAuth((prev) => {
        return { ...prev, user: null, token: "" };
      });
      localStorage.removeItem("auth");
      localStorage.setItem("size", "Not Selected");
      toast.success("Logged out successfully");
      setTimeout(() => {
        navigate("/login");
      }, 100);
    } catch (error) {
      toast.error("Something went wrong");
    }
  };
  return (
    <>
      <header className="flex justify-between w-full bg-mid items-center px-4 md:px-10 py-1 font-josefin">
        <NavLink
          className="w-40 h-20 flex items-center focus:outline-none"
          to="/"
        >
          <img
            src="/assets/Koolkicks-logo.png"
            alt="logo"
            className="w-3/5 md:w-1/2"
          />
        </NavLink>
        <div className="space-x-4 flex items-center relative px-4 md:px-0">
          <div
            className="hidden md:flex flex-col gap-1 group"
            style={{
              marginTop: `${!auth.user ? "0px" : "0.5rem"}`,
            }}
          >
            <NavLink to="/">Home</NavLink>
            <div className="scale-0 group-hover:scale-100 bg-black h-[2px] w-full transition-all duration-300"></div>
          </div>
          {!auth.user && (
            <div className="flex flex-col gap-1 group">
              <NavLink to="/register" className="transition-all duration-750">
                Register
              </NavLink>
              <div className="scale-0 group-hover:scale-100 bg-black h-[2px] w-full transition-all duration-300"></div>
            </div>
          )}
          {!auth.user && (
            <div className="flex flex-col gap-1 group ">
              <NavLink to="/login" className="transition-all duration-750 ">
                Login
              </NavLink>
              <div className="scale-0 group-hover:scale-100 bg-black h-[2px] w-full transition-all duration-300"></div>
            </div>
          )}
          {!auth.user || (
            <div className="relative group">
              <Link className="inline-flex gap-x-2 w-full justify-center rounded-md bg-transparent px-3 py-1 text-sm font-semibold text-gray-900 border-none peer ">
                {FullName[0]}
                <svg
                  className="-mr-1 h-5 w-5 text-black"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <div className="flex-col hidden  group-hover:flex absolute border-2 border-dark rounded-md z-10">
                <NavLink
                  className="bg-gray-100 p-2 hover:bg-brand hover:text-mid rounded-t-md"
                  to={`/dashboard/${auth?.user?.role === 1 ? "admin" : "user"}`}
                >
                  Dashboard
                </NavLink>
                <NavLink
                  className="bg-gray-100 p-2 hover:bg-brand hover:text-mid rounded-b-md"
                  onClick={handleLogout}
                >
                  Log out
                </NavLink>
              </div>
            </div>
          )}
          <div className="flex flex-col gap-1 group">
            <NavLink to="/cart" className="relative">
              <i
                className="fa-solid fa-cart-shopping text-brand text-xl"
                style={{
                  marginTop: `${!auth.user ? "-0.25rem" : "0.25rem"}`,
                }}
              ></i>{" "}
              <span className="w-4 h-4 rounded-full bg-zinc-600 absolute -right-3 -top-2 text-mid text-xs text-center font-raleway">
                {cart?.length}
              </span>
            </NavLink>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
