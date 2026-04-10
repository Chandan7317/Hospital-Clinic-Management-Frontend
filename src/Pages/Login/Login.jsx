import React, { useState } from "react";
import { Link } from "react-router-dom";
import Signup from "../Signup/Signup";

const Login = ({ showLogin, setShowLogin }) => {
  if (!showLogin) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 px-4">
      <div className="bg-white w-full max-w-md rounded-xl flex relative shadow-lg">
        {/* Close Button */}
        <button
          onClick={() => setShowLogin(false)}
          className="absolute top-3 right-3 text-xl font-bold hover:text-red-500"
        >
          ✕
        </button>

        <div className="w-full flex items-center justify-center">
          <form
            noValidate
            className="flex flex-col justify-center gap-4 w-full p-6 text-black"
          >
            <h1 className="text-center text-xl sm:text-2xl font-bold">
              Login to your account
            </h1>

            {/* Email */}
            <div className="flex flex-col gap-1">
              <label
                htmlFor="email"
                className="font-semibold text-sm sm:text-base"
              >
                Email
              </label>
              <input
                type="email"
                required
                name="email"
                id="email"
                placeholder="Enter your email.."
                className="bg-transparent px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Password */}
            <div className="flex flex-col gap-1">
              <label
                htmlFor="password"
                className="font-semibold text-sm sm:text-base"
              >
                Password
              </label>
              <input
                type="password"
                required
                name="password"
                id="password"
                placeholder="Enter your password.."
                className="bg-transparent px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="bg-[#013a71] text-white font-semibold py-2 rounded-md transition 
          hover:bg-green-600"
            >
              Login
            </button>

            {/* Signup */}
            <p className="text-center text-sm sm:text-base">
              Don’t have an account?{" "}
              <Link
                className="text-blue-600 font-semibold hover:underline"
              >
                Signup
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
