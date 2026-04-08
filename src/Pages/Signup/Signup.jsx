import React, { useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
import { Link } from "react-router-dom";

const Signup = () => {
  const [previewImage, setPreviewImage] = useState("");

  return (
    <div className="flex overflow-x-auto items-center justify-center h-screen">
      <form
        noValidate
        className="flex flex-col justify-center gap-3 rounded-lg p-4 text-black w-96 shadow-[0_0_10px_black]"
      >
        <h1 className="text-center text-2xl font-bold">Create an account</h1>

        <label htmlFor="image_uploads" className="cursor-pointer">
          {previewImage ? (
            <img className="w-24 h-24 rounded-full m-auto" src={previewImage} />
          ) : (
            <BsPersonCircle className="w-24 h-24 rounded-full m-auto" />
          )}
        </label>
        <input
          className="hidden"
          type="file"
          name="image_uploads"
          id="image_uploads"
          accept=".jpg, .jpeg, .png, .svg"
        />
        <div className="flex flex-col gap-1">
          <label htmlFor="fullName" className="font-semibold">
            {" "}
            Name{" "}
          </label>
          <input
            type="text"
            required
            name="fullName"
            id="fullName"
            placeholder="Enter your name.."
            className="bg-transparent px-2 py-1 border"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="font-semibold">
            {" "}
            Email{" "}
          </label>
          <input
            type="email"
            required
            name="email"
            id="email"
            placeholder="Enter your email.."
            className="bg-transparent px-2 py-1 border"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="password" className="font-semibold">
            {" "}
            Password{" "}
          </label>
          <input
            type="password"
            required
            name="password"
            id="password"
            placeholder="Enter your password.."
            className="bg-transparent px-2 py-1 border"
          />
        </div>

        <button
          type="submit"
          className="bg-[#013a71]  text-white font-semibold px-8 py-3 rounded transition 
                   hover:bg-green-600 hover:text-white  cursor-pointer"
        >
          Create account
        </button>

        <p className="text-center">
          Already have an account ?{" "}
          <Link to="/login" className="link text-[#013a71] cursor-pointer">
            {" "}
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
