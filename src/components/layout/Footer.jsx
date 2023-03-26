import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-mid flex justify-between py-4 px-4 md:py-6 md:px-10 w-full text-dark items-center mt-3">
      <div className="flex flex-col font-josefin">
        <p className="mb-2"> Socials :</p>
        <div className=" flex gap-4">
          <Link to="/about">
            <i className="fa-brands fa-twitter text-xl cursor-pointer"></i>
          </Link>
          <Link to="/about">
            <i className="fa-brands fa-instagram text-xl cursor-pointer"></i>
          </Link>
          <Link to="/about">
            <i className="fa-brands fa-linkedin text-xl cursor-pointer"></i>
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-2 md:gap-4 items-end font-raleway">
        <div className="flex gap-4">
          <Link
            to="/about"
            className="text-sm md:text-md font-semibold text-right"
          >
            About Creators
          </Link>
          <div className="w-[2px] h-75 bg-gray-500"></div>
          <Link to="/about" className="text-sm md:text-md font-semibold">
            Contact us
          </Link>
        </div>
        <p className="text-sm md:text-md text-right">
          {" "}
          All right reserved &copy; Kool kicks
        </p>
      </div>
    </footer>
  );
};

export default Footer;
