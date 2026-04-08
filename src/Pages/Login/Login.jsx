import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex overflow-x-auto items-center justify-center h-screen">
      <form
        noValidate
        className="flex flex-col justify-center gap-3 rounded-lg p-4 text-black w-96 shadow-[0_0_10px_black]"
      >
        <h1 className="text-center text-2xl font-bold">
          Login to your account
        </h1>
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
          Login
        </button>

        <p className="text-center">
          Donot hanve an account ?{" "}
          <Link to="/signup" className="link text-accent cursor-pointer">
            {" "}
            Signup
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
