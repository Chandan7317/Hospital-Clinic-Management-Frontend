import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  return (
    <div className="text-[#ffffff] bg_colar">
      <footer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 w-[96%] mx-auto">
        <div className="mt-3 text-center sm:text-left">
          <h3 className=" text-white text-2xl font-semibold mb-3">For Patients</h3>
          <ul className="text-[#f2ece5] space-y-1  ">
            <li>
              <Link to={"/FindaDoctor"}>Find a Doctor</Link>
            </li>
            <li>
              <Link to={"/BookAppointment"}>Book Appointment</Link>
            </li>
            <li>
              <Link to={"/Treatments"}>Treatments</Link>
            </li>
            <li>
              <Link to={"/Emergency"}>Emergency</Link>
            </li>
            <li>
              <Link to={"/Technology"}>Technology</Link>
            </li>
            <li>
              <Link to={"/PatientTestimonials"}>PatientTestimonials</Link>
            </li>

            <li>
              <Link to={"Disclaimer"}>Disclaimer</Link>
            </li>

            <li>
              <Link to={"/TermsConditions"}> Terms & Conditions</Link>
            </li>
            <li>
              <Link to={"/PrivacyPolicy"}>Privacy Policy</Link>
            </li>
            <li>
              <Link to={"/RefundCancellations"}>Refund & Cancellations</Link>
            </li>
            <li>
              <Link to={"/MedicineInformation"}>Medicine Information</Link>
            </li>
            <li>
              <Link to={"/AmbulanceServices"}>Ambulance Services</Link>
            </li>
          </ul>
        </div>

        <div className="mt-3 text-center sm:text-left">
          <h3 className="text-white text-2xl font-semibold mb-3">Specialities</h3>
          <ul className="text-[#f2ece5] space-y-1">
            <li>
              <Link to={"/Cardiac Care"}>Cardiac Care</Link>
            </li>
            <li>
              <Link to={"/Cancer Care"}>Cancer Care</Link>
            </li>
            <li>
              <Link to={"/Neurosciences"}>Neurosciences</Link>
            </li>
            <li>
              <Link to={"/Gastrosciences"}>Gastrosciences</Link>
            </li>
            <li>
              <Link to={"/Orthopaedics"}>Orthopaedics</Link>
            </li>
            <li>
              <Link to={"/RenalCare"}>Renal Care</Link>
            </li>
            <li>
              <Link to={"/LiverTransplant"}>Liver Transplant</Link>
            </li>
            <li>
              <Link to={"/BoneMarrowTransplant"}>Bone Marrow Transplant</Link>
            </li>
            <li>
              <Link to={"/LungTransplant"}>Lung Transplant</Link>
            </li>
            <li>
              <Link to={"/ChestSurgery"}>Chest Surgery</Link>
            </li>
          </ul>
        </div>

        <div className="mt-3 text-center sm:text-left">
          <h3 className=" text-white text-2xl font-semibold mb-3">Corporate</h3>
          <ul className="text-[#f2ece5] space-y-1">
            <li>
              <Link to={"/Aboutus"}>Abouts us</Link>
            </li>
            <li>
              <Link to={"/Blogs"}>Blogs</Link>
            </li>
            <li>
              <Link to={"/Careers"}>Careers</Link>
            </li>
            <li>
              <Link to={"/Feedback"}>Feedback</Link>
            </li>
            <li>
              <Link to={"/ContactUs"}>Contact Us</Link>
            </li>
            <li>
              <Link to={"/NewsEvents"}>News & Events</Link>
            </li>
            <li>
              <Link to={"/InvestorRelations"}>Investor Relations</Link>
            </li>
            <li>
              <Link to={"/Policies & Forms"}></Link>
            </li>
            <li>
              <Link to={"/Web Stories"}>Web Stories</Link>
            </li>
          </ul>
        </div>

        <div className="mt-3 text-center sm:text-left">
          <h3 className=" text-white text-2xl font-semibold mb-3">Our Hospitals</h3>
          <ul className="text-[#f2ece5] space-y-1">
            <li>
              <Link to={"/HopeCarePatna"}>HopeCare Patna</Link>
            </li>
            <li>
              <Link to={"/HopeCareGurugram"}>HopeCare Gurugram</Link>
            </li>
            <li>
              <Link to={"/HopeCare Patna"}>HopeCare Patna</Link>
            </li>
            <li>
              <Link to={"/HopeCare Lucknow"}>HopeCare Lucknow</Link>
            </li>
            <li>
              <Link to={"/HopeCare Ranchi"}>HopeCare Ranchi</Link>
            </li>
            <li>
              <Link to={"/HopeCare Indore"}>HopeCare Indore</Link>
            </li>
            <li>
              <Link to={"/HopeCare Noida"}>HopeCare Noida</Link>
            </li>
            <li>
              <Link to={"/HopeCare Mediclinic, Ranchi"}>
                HopeCare Mediclinic, Ranchi
              </Link>
            </li>
          </ul>
        </div>

        <div className="mt-3 mb-3 text-center sm:text-left">
          <h3 className="text-white text-2xl font-semibold mb-5">Connect with us</h3>

          <ul className="flex items-center justify-center sm:justify-start gap-4">
            <li>
              <Link to="">
                <BsFacebook className="text-2xl sm:text-3xl" />
              </Link>
            </li>
            <li>
              <Link to="">
                <BsInstagram className="text-2xl sm:text-3xl" />
              </Link>
            </li>
            <li>
              <Link to="">
                <BsLinkedin className="text-2xl sm:text-3xl" />
              </Link>
            </li>
            <li>
              <Link to="">
                <BsTwitter className="text-2xl sm:text-3xl" />
              </Link>
            </li>
          </ul>
        </div>
      </footer>

      <div>
        {" "}
        <section className=" text-gray-300 text-center text-sm sm:text-base md:text-lg lg:text-2xl">
          <h6>@ {year} | HopeCare All rights reserved</h6>
        </section>
      </div>
    </div>
  );
};

export default Footer;
