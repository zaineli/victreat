import React from "react";
import { FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";
import { BsEnvelope } from "react-icons/bs";

function Footer() {
  return (
    <>
      <div className="bg-gradient-to-br from-[#DDF4D0] to-[#AADE8D] py-12 lg:py-20 relative">
        <div className="flex flex-col md:flex-row justify-around items-start max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-center items-start md:items-start mb-8 md:mb-0">
            <h2 className="text-gray-900 text-xl font-bold mb-4">Connect with Us</h2>
            <div className="flex gap-6">
              <a href="#" className="text-gray-700 hover:text-yellow-600">
                <FaInstagram className="text-2xl" />
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600">
                <FaTwitter className="text-2xl" />
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600">
                <FaLinkedin className="text-2xl" />
              </a>
              <a href="#" className="text-gray-700 hover:text-red-600">
                <FaYoutube className="text-2xl" />
              </a>
            </div>
          </div>
          <div className="flex flex-col justify-center items-start mb-8 md:mb-0">
            <h2 className="text-gray-900 text-xl font-bold mb-4">Contact Us</h2>
            <div className="flex gap-4 items-center">
              <BsEnvelope className="text-gray-700 text-xl" />
              <p className="text-gray-700">info@victreat.com</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-start mb-8 md:mb-0">
            <h2 className="text-gray-900 text-xl font-bold mb-4">Location</h2>
            <p className="text-gray-700">Office 1303 Victreat, NSTP, Islamabad</p>
          </div>
        </div>
      <div className="absolute bottom-0 left-[50%] translate-x-[-50%] py-4">
        <p className="text-gray-900 text-sm md:text-base font-semibold">
          © 2024-2025 All rights reserved | Built by{" "}
          <span className="hover:text-blue-600 cursor-pointer">Victreat </span>
        </p>
      </div>
      </div>
    </>
  );
}

export default Footer;
