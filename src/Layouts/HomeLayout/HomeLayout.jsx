import React, { Children, useEffect, useRef, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import LogoImg from "../../assets/HopeLogo.png";
import { IoCloseSharp } from "react-icons/io5";
import { IoMdArrowDropdown, IoMdArrowDropright } from "react-icons/io";
import Footer from "../Footer/Footer";
import Login from "../../Pages/Login/Login";

const HomeLayout = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [specialityDropdown, setSpecialityDropdown] = useState(false);
  const [serviceDropdown, setServiceDropdown] = useState(false);
  const [contactusDropdown, setcontactUsDropdown] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const dropdownRef = useRef();

  //! Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServiceDropdown(false);
        setSpecialityDropdown(false);
        setcontactUsDropdown(false);

      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  //! Lock/unlock background scroll when login modal opens/closes
  // useEffect(() => {
  //   document.body.style.overflow = showLogin ?   "hidden" : "auto";

  //   return () => {
  //     document.body.style.overflow = "auto";
  //   };
  // }, [showLogin]);

  return (
    <div className="flex flex-col min-h-screen">
      {/*  Header Navbar*/}
      <nav className="flex items-center justify-around w-full h-16 px-4 bg-[#013a71] fixed top-0 drawer left-0 z-50 ">
        {/* Left Section */}
        <div className="flex items-center gap-10">
          <IoMenu
            size={"30px"}
            className="text-white lg:hidden "
            onClick={() => setOpen(true)}
          />
          <img src={LogoImg} alt="logo" className="h-10 hover:bg-amber-700" />
        </div>

        {/* Desktop Menu */}
        <ul
          className=" hidden lg:flex gap-6 text-white font-medium"
          ref={dropdownRef}
        >
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/abouts"}>AboutUs</Link>
          </li>

          {/* Speciality and Dropdown list*/}
          <li
            className="relative group"
            onClick={() => {
              setSpecialityDropdown(!specialityDropdown);
              setServiceDropdown(false);
              setcontactUsDropdown(false);
            }}
          >
            <Link to={""} className="flex items-center gap-1">
              Speciality{" "}
              <IoMdArrowDropdown
                className={`hover:rotate-180 ${specialityDropdown ? "rotate-90" : ""}`}
              />
            </Link>

            {/* Dropdown list */}
            <ul
              className={`absolute w-52 font-normal rounded-md d- bg_colar group-hover:block z-50   ${specialityDropdown ? "block" : "hidden"} md:group-hover:block`}
            >
              <li className="mt-5">
                <Link to={"/cardiaccare"}>Cardiac Care</Link>
              </li>
              <hr />
              <li>
                <Link to={"/cancercare"}>Cancer Care</Link>
              </li>
              <hr />
              <li>
                <Link to={"/neurosciences"}>Neurosciences</Link>
              </li>
              <hr />
              <li>
                <Link to={"/gastrosciences"}>Gastrosciences</Link>
              </li>
              <hr />
              <li>
                <Link to={"/orthopaedics"}>Orthopaedics</Link>
              </li>
              <hr />
              <li>
                <Link to={"/renalcare"}>Renal Care</Link>
              </li>
              <hr />
              <li>
                <Link to={"/viewallspecialities"}>View All Specialities</Link>
              </li>
            </ul>
          </li>

          {/* Services and Dropdown list */}
          <li
            className="relative group"
            onClick={() => {
              setServiceDropdown(!serviceDropdown);
              setSpecialityDropdown(false);
              setcontactUsDropdown(false);
            }}
          >
            <Link to={""} className="flex items-center gap-1">
              Services{" "}
              <IoMdArrowDropdown
                className={`hover:rotate-180 ${specialityDropdown ? "rotate-90" : ""}`}
              />
            </Link>

            {/* Dropdown list*/}
            <ul
              className={`absolute w-52 font-normal rounded-md d- bg_colar group-hover:block z-50 ${serviceDropdown ? "block" : "hidden"}  md:group-hover:block `}
            >
              <li className="mt-5">
                <Link to={"/secondopinion"}>Second Opinion</Link>
              </li>
              <hr />
              <li>
                <Link to={"/LabTestDiagnostic"}>Lab Test & Diagnostic</Link>
              </li>
              <hr />
              <li>
                <Link to={"/Homecare"}>Homecare</Link>
              </li>
              <hr />
              <li>
                <Link to={"/buyMedicine"}>Buy Medicine</Link>
              </li>
              <hr />
              <li>
                <Link to={"/Telemedicine"}>Telemedicine</Link>
              </li>
              <hr />
              <li>
                <Link to={"/AirAmbulance"}> Air Ambulance</Link>
              </li>
              <hr />
              <li>
                <Link to={"/Emergency"}>Emergency 1068</Link>
              </li>
              <hr />
              <li>
                <Link to={"/HopeCareICU"}> HopeCare e-ICU</Link>
              </li>
              <hr />
              <li>
                <Link to={"/HealthCheckup"}> Health Checkup</Link>
              </li>
              <hr />
              <li>
                <Link to={"/EdlerCare"}>Edler Care </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to={""}>Appointments</Link>
          </li>
          <li>
            <Link to={""}>Emergency</Link>
          </li>
        </ul>

        {/* Search Bar */}
        <div className="hidden md:block relative w-2xs lg:w-2xs">
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-3 py-1.5 text-sm bg-white rounded-lg outline-none"
          />
          <CiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
        </div>

        {/* Right Section */}
        <ul className=" md:flex gap-4 text-white font-medium  items-center ">
          <li
            className="relative group"
            onClick={() => {
              setcontactUsDropdown(!contactusDropdown);
              setSpecialityDropdown(false);
              setServiceDropdown(false);
            }}
          >
            {/* Contact Us */}
            <Link to={""} className="hidden lg:flex items-center">
              Contact{" "}
              <IoMdArrowDropdown
                className={`hover:rotate-180 ${contactusDropdown ? "rotate-90" : ""}`}
              />
            </Link>
            {/* Dorpdown list */}
            <ul
              className={`absolute w-45 font-normal rounded-b-sm d- bg_colar group-hover:block z-50 ${contactusDropdown ? "block" : "hidden"}  md:group-hover:block `}
            >
              <li className="mt-5">
                <Link to={"/contactus"}>Contact Us</Link>
              </li>
              <hr />
              <li>
                <Link to={"/phoneNumber"}>+91 80-0000-11-77</Link>
              </li>
              <hr />
              <li>
                <Link to={"/hopecare@gamil.com"}>hopecare@gmail.com</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to={""} className="hidden lg:flex">
              En
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setShowLogin(true)}
              className="sm:flex text-white font-medium items-center"
            >
              Sign in
            </Link>
          </li>
        </ul>

        {/* Mobile menu */}

        {open && (
          <div className="absolute top-16 left-0 bg-[#013a71] text-white lg:hidden ">
            <div className="flex  ">
              <ul className="flex flex-col ml-10">
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link to={"/abouts"}>AboutUs</Link>
                </li>

                {/* Speciality Mobile */}
                <li>
                  <Link
                    to={""}
                    onClick={() => {
                      setSpecialityDropdown(!specialityDropdown);
                      setServiceDropdown(false);
                      setcontactUsDropdown(false);
                    }}
                    className="flex items-center justify-between cursor-pointer"
                  >
                    Speciality
                    <IoMdArrowDropright
                      className={`${specialityDropdown ? "rotate-90" : ""}`}
                    />
                  </Link>

                  {specialityDropdown && (
                    <ul className="ml-4 mt-2 flex flex-col gap-1 text-sm">
                      <li className="mt-1">
                        <Link to={"/cardiaccare"}>Cardiac Care</Link>
                      </li>
                      <hr />
                      <li>
                        <Link to={"/cancercare"}>Cancer Care</Link>
                      </li>
                      <hr />
                      <li>
                        <Link to={"/neurosciences"}>Neurosciences</Link>
                      </li>
                      <hr />
                      <li>
                        <Link to={"/gastrosciences"}>Gastrosciences</Link>
                      </li>
                      <hr />
                      <li>
                        <Link to={"/orthopaedics"}>Orthopaedics</Link>
                      </li>
                      <hr />
                      <li>
                        <Link to={"/renalcare"}>Renal Care</Link>
                      </li>
                      <hr />
                      <li>
                        <Link to={"/ViewAllSpecialities"}>
                          View All Specialities
                        </Link>
                      </li>
                      <hr />
                    </ul>
                  )}
                </li>

                {/* Services Mobile */}
                <li>
                  <Link
                    to={""}
                    onClick={() => {
                      setServiceDropdown(!serviceDropdown);
                      setSpecialityDropdown(false);
                      setcontactUsDropdown(false);
                    }}
                    className="flex items-center justify-between cursor-pointer"
                  >
                    Services
                    <IoMdArrowDropright
                      className={`${serviceDropdown ? "rotate-90" : ""}`}
                    />
                  </Link>

                  {serviceDropdown && (
                    <ul className="ml-4 mt-2 flex flex-col gap-1 text-sm">
                      <li className="mt-1">
                        <Link to={"/secondopinion"}>Second Opinion</Link>
                      </li>
                      <hr />
                      <li>
                        <Link to={"/LabTestDiagnostic"}>
                          Lab Test & Diagnostic
                        </Link>
                      </li>
                      <hr />
                      <li>
                        <Link to={"/homecare"}>Homecare</Link>
                      </li>
                      <hr />
                      <li>
                        <Link to={"/buyMedicine"}>Buy Medicine</Link>
                      </li>
                      <hr />
                      <li>
                        <Link to={"/telemedicine"}>Telemedicine</Link>
                      </li>
                      <hr />
                      <li>
                        <Link to={"/AirAmbulance"}> Air Ambulance</Link>
                      </li>
                      <hr />
                      <li>
                        <Link to={"/emergency"}>Emergency 1068</Link>
                      </li>
                      <hr />
                      <li>
                        <Link to={"/HopeCareICU"}> HopeCare e-ICU</Link>
                      </li>
                      <hr />
                      <li>
                        <Link to={"/HealthCheckup"}> Health Checkup</Link>
                      </li>
                      <hr />
                      <li>
                        <Link to={"/EdlerCare "}>Edler Care </Link>
                      </li>
                      <hr />
                    </ul>
                  )}
                </li>

                <li>
                  <Link to={"/Appointments"}>Appointments</Link>
                </li>
                <li>
                  <Link to={"/Emergency"}>Emergency</Link>
                </li>
                {/* Contact us Dropdown list */}
                <li>
                  <Link
                    to={""}
                    onClick={() => {
                      setcontactUsDropdown(!contactusDropdown);
                      setServiceDropdown(false);
                      setSpecialityDropdown(false);
                    }}
                    className="flex items-center justify-between cursor-pointer"
                  >
                    Contact
                    <IoMdArrowDropright
                      className={`${contactusDropdown ? "rotate-90" : ""}`}
                    />
                  </Link>
                  {contactusDropdown && (
                    <ul className="ml-4 mt-2 flex flex-col gap-1 text-sm">
                      <li className="mt-1">
                        <Link to={"/contactus"}>Contact Us</Link>
                      </li>
                      <hr />
                      <li>
                        <Link to={"/phoneNumber"}>+91 80-0000-11-77</Link>
                      </li>
                      <hr />
                      <li>
                        <Link to={"/hopecare@gamil.com"}>
                          hopecare@gmail.com
                        </Link>
                      </li>
                      <hr />
                    </ul>
                  )}
                </li>
                <li>
                  <Link to={"/en"}>English</Link>
                </li>
              </ul>
              <div>
                <button onClick={() => setOpen(false)}>
                  <IoCloseSharp />
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="grow pt-16">{children}</main>
      {/* Footer */}
      <Footer />

      {/* Sigin in */}

      <Login showLogin={showLogin} setShowLogin={setShowLogin} />
    </div>
  );
};

export default HomeLayout;
