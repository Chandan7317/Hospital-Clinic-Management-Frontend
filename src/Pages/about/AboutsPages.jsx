import React from "react";
import HomeLayout from "../../Layouts/HomeLayout/HomeLayout";
import { FaUsers, FaUserMd, FaFileMedical, FaShieldAlt } from "react-icons/fa";

const AboutPage = () => {
  return (
    <HomeLayout>
      <div className=" sm:w-full md:w-full lg:w-[96%]  mx-auto min-h-screen">
        {/* Hero Section */}
        <section className="bg-[#ece4f4] text-black py-20 px-6 text-center">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">
            About Hospital Management System
          </h1>
          <p className="text-lg font-serif md:text-xl max-w-2xl mx-auto">
            Efficient, Secure, and Comprehensive Healthcare Solution for
            Hospitals and Clinics.
          </p>
        </section>

        {/* Overview */}
        <section className="bg-[#e0e0e0] mt-2 py-16 px-6 text-center">
          <h2 className="text-3xl font-semibold mb-6">Overview</h2>
          <p className="text-black text-lg md:text-xl">
            The Hospital Management System (HMS) is designed to streamline
            healthcare operations by providing a unified platform for managing
            patients, doctors, appointments, and medical records. Our system
            ensures accuracy, security, and efficiency, reducing administrative
            workload while improving patient care and operational performance.
          </p>
        </section>

        {/* Mission & Vision */}
        <section className="bg-[#e0e0e0] py-8 px-6 mt-2 grid md:grid-cols-2 gap-12">
          <div className="text-center bg-white p-5 rounded md:text-left">
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-black">
              To empower hospitals and clinics with a modern, secure, and
              easy-to-use platform that enhances patient care, improves workflow
              efficiency, and simplifies healthcare management.
            </p>
          </div>
          <div className="text-center bg-white p-5 rounded md:text-left">
            <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
            <p className="text-black">
              To revolutionize healthcare management through digital
              transformation, ensuring hospitals operate smoothly and patients
              receive timely and efficient medical services.
            </p>
          </div>
        </section>

        {/* Features / Highlights */}
        <section className="py-16 mt-2 px-6 bg-[#e0e0e0]">
          <h2 className="text-3xl font-semibold text-center mb-12">
            Why Choose Our HMS
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <FaUsers className="text-blue-600 text-4xl mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Streamlined Operations</h4>
              <p className="text-black text-sm">
                Simplifies patient registration, appointments, and record
                keeping.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <FaUserMd className="text-blue-600 text-4xl mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Role-Based Access</h4>
              <p className="text-black text-sm">
                Secure login for Admin, Doctor, and Patient with controlled
                access.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <FaFileMedical className="text-blue-600 text-4xl mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Accurate Data</h4>
              <p className="text-black text-sm">
                Maintain comprehensive patient and doctor records efficiently.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <FaShieldAlt className="text-blue-600 text-4xl mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Secure & Compliant</h4>
              <p className="text-black text-sm">
                Ensures patient data confidentiality and safety at all times.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-[#ece4f4] text-black py-16 px-6 text-center">
          <h2 className="text-3xl font-semibold mb-6">
            Ready to Improve Your Hospital Management?
          </h2>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <button
              className="bg-[#013a71]  text-white font-semibold px-8 py-3 rounded transition 
                   hover:bg-green-600 hover:text-white  cursor-pointer"
            >
              Get Started
            </button>
            <button className="bg-[#013a71] text-white font-semibold px-8 py-3 rounded hover:bg-green-600 hover:text-white transition  cursor-pointer">
              Request a Demo
            </button>
          </div>
        </section>
      </div>
    </HomeLayout>
  );
};

export default AboutPage;
