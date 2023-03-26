import React from 'react';
import Layout from '../components/layout/Layout';

const About = () => {
  return (
    <Layout title="About Creators - kool kicks">
      <div className="flex flex-col space-x-0 space-y-10 md:space-y-0 md:flex-row md:space-x-10 py-10 md:items-center md:justify-center">
        {/* //Priyansh Profile detail */}
        <div className=" font-sans flex flex-row justify-center items-center md:pl-32">
          <div className=" w-80 mx-auto lg:w-96 transition-all duration-150 mt-32  bg-white shadow-xl hover:shadow rounded-md">
            <img
              className="w-32 mx-auto rounded-full -mt-20 border-8 border-white"
              src="https://github.com/PriyanshShrivastava.png"
              alt="Priyans Shrivastava Profile"
            />
            <div className="text-center mt-2 text-3xl font-medium">
              Priyansh Shrivastava
            </div>
            <div className="text-center mt-2 font-light text-sm">
              @shadow_priyansh
            </div>
            <div className="text-center font-normal text-lg">Hyderabad</div>
            <div className="px-6 text-center mt-2 font-light text-sm">
              <p className="text-xs font-josefin">
                Full stack Developer, avid reader. Love to write and play
                Basketball. Currently building scalable and responsive web
                applications using this MERN stack
              </p>
            </div>

            <div className="flex p-4 w-full">
              <div className="flex space-x-6 mx-auto">
                <a href="https://twitter.com/shadow_priyansh" target="_blank">
                  <i className="fa-brands fa-twitter text-2xl cursor-pointer"></i>
                </a>
                <a
                  href="https://github.com/PriyanshShrivastava"
                  target="_blank"
                >
                  <i className="fa-brands fa-github text-2xl cursor-pointer"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/priyansh-shrivastava-184355145/"
                  target="_blank"
                >
                  <i className="fa-brands fa-linkedin text-2xl cursor-pointer"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* //Aditya Profile detail */}
        <div className=" font-sans  flex flex-row justify-center items-center md:pr-32 mt-32">
          <div className=" w-80 lg:w-96 transition-all duration-150 mx-auto bg-white shadow-xl hover:shadow mt-32 rounded-md">
            <img
              className="w-32 mx-auto rounded-full -mt-20 border-8 border-white"
              src="https://github.com/imaditya05.png"
              alt="Priyans Shrivastava Profile"
            />
            <div className="text-center mt-2 text-3xl font-medium">
              Aditya Gupta
            </div>
            <div className="text-center mt-2 font-light text-sm">
              @imaditya_gupta
            </div>
            <div className="text-center font-normal text-lg">Hyderabad</div>
            <div className="px-6 text-center mt-2 font-light text-sm">
              <p className="text-xs font-josefin">
                Full Stack Web Developer proficient in the MERN stack. My love
                for programming and technology has driven me to learn and grow
                as a developer every day.
              </p>
            </div>

            <div className="flex p-4 w-full">
              <div className="flex space-x-6 mx-auto">
                <a href="https://twitter.com/imaditya_gupta" target="_blank">
                  <i className="fa-brands fa-twitter text-2xl cursor-pointer"></i>
                </a>
                <a href="https://github.com/imaditya05" target="_blank">
                  <i className="fa-brands fa-github text-2xl cursor-pointer"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/aditya-gupta05/"
                  target="_blank"
                >
                  <i className="fa-brands fa-linkedin text-2xl cursor-pointer"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
