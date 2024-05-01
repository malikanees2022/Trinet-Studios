import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaGreaterThan } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaBehance } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#1B1B1D] px-4 md:px-8 py-10 lg:py-14 text-white">
      <div className="flex flex-col md:flex-row px-4 md:px-6 lg:px-8 gap-8  md:gap-20 lg:gap-40 font-medium md:mt-4 lg:mt-8">
        <div>
          <h1 className="font-bold text-lg mt-4">Contact Information</h1>
          <h1 className="flex items-center gap-4 mt-4">
            {" "}
            <span>
              <FaMapMarkerAlt />
            </span>{" "}
            <span>
              Office #411 3rd floor, Al Khalil Center, Kashmir Road, Sialkot,
            </span>
          </h1>
          <h1 className="flex items-center gap-4 mt-2">
            {" "}
            <span>
              <FaMapMarkerAlt />
            </span>{" "}
            <span>30 N Gould St Ste R Sheridan, WY 82801</span>
          </h1>
          <h1 className="flex items-center gap-4 mt-2">
            {" "}
            <span>
              <FaMapMarkerAlt />
            </span>{" "}
            <span>
              Trinet Studios, 124 City Road, London, United Kingdom, EC1V 2NX
            </span>
          </h1>
          <h1 className="flex items-center gap-4 mt-2">
            {" "}
            <span>
              <FaMapMarkerAlt />
            </span>{" "}
            <span>
              Muroor road, Ghalah street building number 4, Office-205.
            </span>
          </h1>
          <h1 className="flex items-center gap-4 mt-2">
            {" "}
            <span>
              <IoMdMail />
            </span>{" "}
            <span>info@trinetstudios.com</span>
          </h1>
          <h1 className="flex items-center gap-4 mt-2">
            {" "}
            <span>
              <FaPhoneAlt />
            </span>{" "}
            <span>+92 (326) 2575000</span>
          </h1>
        </div>

        <div>
          <h1 className="font-bold text-lg mt-4">Services</h1>
          <h1 className="flex items-center gap-4 mt-4">
            {" "}
            <span className="text-xs">
              <FaGreaterThan />
            </span>{" "}
            <span>Video Commercials</span>
          </h1>
          <h1 className="flex items-center gap-4 mt-2">
            {" "}
            <span className="text-xs">
              <FaGreaterThan />
            </span>{" "}
            <span>Product Shoot</span>
          </h1>
          <h1 className="flex items-center gap-4 mt-2">
            {" "}
            <span className="text-xs">
              <FaGreaterThan />
            </span>{" "}
            <span>Graphics Design</span>
          </h1>
          <h1 className="flex items-center gap-4 mt-2">
            {" "}
            <span className="text-xs">
              <FaGreaterThan />
            </span>{" "}
            <span>Digital Marketing</span>
          </h1>
          <h1 className="flex items-center gap-4 mt-2">
            {" "}
            <span className="text-xs">
              <FaGreaterThan />
            </span>{" "}
            <span>Amazon Services</span>
          </h1>
          <h1 className="flex items-center gap-4 mt-2">
            {" "}
            <span className="text-xs">
              <FaGreaterThan />
            </span>{" "}
            <span>Website Designing</span>
          </h1>
        </div>
        

        <div>
          <h1 className="font-bold text-lg mt-4">Important Links</h1>
          <h1 className="flex items-center gap-4 mt-4">
            {" "}
            <span className="text-xs">
              <FaGreaterThan />
            </span>{" "}
            <span>Company Profile</span>
          </h1>
          <h1 className="flex items-center gap-4 mt-2">
            {" "}
            <span className="text-xs">
              <FaGreaterThan />
            </span>{" "}
            <span>Case Studies</span>
          </h1>
          <h1 className="flex items-center gap-4 mt-2">
            {" "}
            <span className="text-xs">
              <FaGreaterThan />
            </span>{" "}
            <span>FAQ's</span>
          </h1>
          <h1 className="flex items-center gap-4 mt-2">
            {" "}
            <span className="text-xs">
              <FaGreaterThan />
            </span>{" "}
            <span>Career</span>
          </h1>
          <h1 className="flex items-center gap-4 mt-2">
            {" "}
            <span className="text-xs">
              <FaGreaterThan />
            </span>{" "}
            <span>Sitemap</span>
          </h1>
        
        </div>
      </div>


       <div className="flex mt-16 items-center flex-wrap justify-center text-2xl md:gap-10 sm:gap-8 gap-6">
        <span><FaFacebookF /></span>
        <span><FaInstagram /></span>
        <span><FaTwitter /></span>
        <span><FaLinkedinIn /></span>
        <span><FaYoutube /></span>
        <span><FaBehance /></span>
        <span><FaPinterestP /></span>
        <span><FaDribbble /></span>
        <FaWhatsapp />
       </div>
       <h1 className="font-medium text-center px-2 mt-16">Copyright © TriNet Studios 2023. All rights reserved.</h1>
       <div className="flex flex-col sm:flex-row px-4 flex-wrap mt-10 items-center font-medium justify-center text-sm gap-2 sm:gap-4 md:gap-12">
        <h1>TERMS AND CONDITIONS</h1>
        <h1>PRIVACY POLICY</h1>
        <h1>REFUND POLICY</h1>
       </div>
    </div>
  );
};

export default Footer;
