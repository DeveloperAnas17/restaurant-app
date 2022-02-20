import React from "react";

import { SubHeading } from "../components";
import { images } from "../constants";

const Header = () => (
  <div
    className="app__header flex flex-col md:flex-row justify-between items-center min-h-screen py-5 px-8 bg-black"
    id="home"
  >
    <div className="flex-1 w-full flex flex-col items-start justify-center">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1 text-yellow-600 font-bold capitalize text-3xl sm:text-4xl  md:text-5xl">
        The Key To Fine Dining
      </h1>
      <p className="p__opensans text-white" style={{ margin: "2rem 0" }}>
        Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat
        morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet
        tellus{" "}
      </p>
      <button
        type="button"
        className=" bg-pink-500 text-black font-bold text-xl bottom-0 cursor-pointer outline-none px-3 py-2 capitalize"
      >
        Explore Menu
      </button>
    </div>

    <div className="app__wrapper_img flex-1 w-full flex justify-center items-center md:ml-8">
      <img className=" w-4/5" src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;
