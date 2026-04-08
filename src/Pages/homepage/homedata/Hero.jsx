import React from "react";
import HomeLogo from "../../../assets/HomeLogo.jpg";
const Hero = () => {
  return (
    <div className="hero bg_colar_purple h-full sm:h-full md:w-full  lg:w-[96%] mx-auto ga-10">
      <div className="hero-content flex flex-col-reverse lg:flex-row">
        <div>
          <h1 className="text-3xl py-2 font-bold">Smart HopeCare Simplified</h1>
          <h5 className="font-medium">
            Next-generation Hospital Management System to manage patients,
            doctors, appointments, and medical records — all in one secure
            platform.
          </h5>
          <p className="py-6 font-serif ">
            Experience a smarter way to run your hospital or clinic. Our HMS
            solution streamlines workflows, reduces manual effort, and improves
            patient care with real-time data access, secure records, and
            seamless coordination between staff and patients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start lg:gap-10">
            <button className="bg-[#013a71] text-white font-semibold px-8 py-3 rounded hover:bg-green-600 hover:text-white   cursor-pointer">
              Get Started
            </button>
            <button className="bg-[#013a71] text-white font-semibold px-8 py-3 rounded hover:bg-green-600 hover:text-white transition  cursor-pointer">
              Book Appointment
            </button>
          </div>
        </div>

        <div>
          <img
            src={HomeLogo}
            alt="HomeLogo"
            className="rounded Home_Logo_size"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
