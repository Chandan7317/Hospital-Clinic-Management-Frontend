import React from "react";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import LogoImg from "../assets/HopeLogo.png";

const HomeLayout = () => {
  return (
    <nav className="flex items-center justify-around w-full h-16 px-4 bg-[#013a71] fixed top-0">
      {/* Left Section */}
      <div className="flex items-center gap-3">
        <IoMenu size={"30px"} className="text-white lg:hidden " />
        <img src={LogoImg} alt="logo" className="h-10 hover:bg-amber-700" />
      </div>

      {/* Middle Menu (hidden on mobile) */}
      <ul className=" hidden lg:flex gap-6 text-white font-medium">
        <li>
          <Link to={""}>Home</Link>
        </li>
        <li>
          <Link to={"/"}>AboutUs</Link>
        </li>
        <li>
          <Link to={"/"}>Speciality</Link>
        </li>
        <li>
          <Link to={"/"}>Services</Link>
        </li>
        <li>
          <Link to={"/"}>Appointments</Link>
        </li>
        <li>
          <Link to={"/"}>Emergency</Link>
        </li>
      </ul>

      {/* Search Bar */}
      <div className="hidden md:block relative w-[300px] lg:w-[300px]">
        <input
          type="text"
          placeholder="Search..."
          className="w-full pl-10 pr-3 py-1.5 text-sm bg-white rounded-lg outline-none"
        />
        <CiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
      </div>

      {/* Right Section */}
      <ul className=" md:flex gap-4 text-white font-medium">
        <li>
          <Link to={"/"} className="hidden lg:flex">
            Contact
          </Link>
        </li>
        <li>
          <Link to={"/"} className="hidden lg:flex">
            EN
          </Link>
        </li>
        <li>
          <Link to={"/"} className="sm:flex text-white font-medium">
            Sign in
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default HomeLayout;
