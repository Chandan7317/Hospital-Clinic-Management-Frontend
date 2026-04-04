import React from "react";
import HomeLayout from "../../Layouts/HomeLayout/HomeLayout";
import HomeLogo from "../../assets/HomeLogo.jpg";
import { Card } from "../../utils/Constants/homepages/card";

const HomePage = () => {
  return (
    <HomeLayout>
      <div className="hero bg_colar_purple h-full w-[90%] mx-auto ga-10">
        <div className="hero-content flex flex-col-reverse lg:flex-row">
          <div>
            <h1 className="text-3xl py-2 font-bold">
              Smart HopeCare Simplified
            </h1>
            <h5 className="font-medium">
              Next-generation Hospital Management System to manage patients,
              doctors, appointments, and medical records — all in one secure
              platform.
            </h5>
            <p className="py-6 font-serif ">
              Experience a smarter way to run your hospital or clinic. Our HMS
              solution streamlines workflows, reduces manual effort, and
              improves patient care with real-time data access, secure records,
              and seamless coordination between staff and patients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start lg:gap-10">
              <button className="btn">Get Started</button>
              <button className="btn ">Book Appointment</button>
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

      {/* Card */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 w-[90%] mx-auto my-5">
        {Card.map((ele) => {
          // console.log(ele);
          const { id, heading, content, icon: Icon, bgc } = ele; // icon as component

          return (
            <div
              key={id}
              className={`card w-full shadow-sm  text-black ${bgc}`}
            >
              <div className="card-body flex flex-col items-start gap-3">
                <figure className="w-full flex justify-center mb-3">
                  {" "}
                  {Icon && <Icon size={35} className="text-blue-600" />}
                </figure>
                <h2 className="card-title text-lg font-bold">{heading}</h2>
                <p className="font-serif ">{content}</p>
              </div>
            </div>
          );
        })}
      </div>

    
    </HomeLayout>
  );
};

export default HomePage;
