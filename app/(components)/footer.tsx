import React from "react";
import { Instagram, Twitter, Linkedin, Facebook, Mail } from "lucide-react";
import Link from "next/link";

function Footer() {
  return (
    <div className="bg-gradient-to-br from-background to-accent py-12 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h2 className="text-gray-900 text-xl font-bold">Links</h2>
            <div className="flex flex-col text-gray-700 space-y-2">
              <Link href="/">
                <div className="transition-all ease-in after:h-[2px] after:w-full after:absolute after:bg-green-500 after:bottom-0 after:left-0 relative w-min hover:after:scale-x-100 after:scale-x-0 after:origin-right duration-1000 hover:after:origin-left after:transition-transform">
                  Home
                </div>
              </Link>
              <Link href="/careers">
                <div className="transition-all ease-in after:h-[2px] after:w-full after:absolute after:bg-green-500 after:bottom-0 after:left-0 relative w-min hover:after:scale-x-100 after:scale-x-0 after:origin-right duration-1000 hover:after:origin-left after:transition-transform">
                  Careers
                </div>
              </Link>
              <Link href="/about">
                <div className="transition-all ease-in after:h-[2px] after:w-full after:absolute after:bg-green-500 after:bottom-0 after:left-0 relative w-min hover:after:scale-x-100 after:scale-x-0 after:origin-right duration-1000 hover:after:origin-left after:transition-transform">
                  About
                </div>
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-gray-900 text-xl font-bold">Connect with Us</h2>
            <div className="flex gap-6">
              <a href="https://www.instagram.com/victreat.official?igsh=MTlrZTFvMXltZnYxOQ%3D%3D&utm_source=qr" className="text-gray-700 hover:text-yellow-600">
                <Instagram className="text-2xl" />
              </a>
              <a href="https://x.com/victreat" className="text-gray-700 hover:text-blue-600">
                <Twitter className="text-2xl" />
              </a>
              <a target="_blank" href="https://www.linkedin.com/company/victreat/" className="text-gray-700 hover:text-blue-600">
                <Linkedin className="text-2xl" />
              </a>
              <a href="https://www.facebook.com/victreat" className="text-gray-700 hover:text-red-600">
                <Facebook className="text-2xl" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-gray-900 text-xl font-bold">Contact Us</h2>
            <div className="flex items-center gap-4">
              <Mail className="text-gray-700 text-xl" />
              <p className="text-gray-700">info@victreat.com</p>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-gray-900 text-xl font-bold">Location</h2>
            <p className="text-gray-700">Office 1303 Victreat, NSTP, Islamabad</p>
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <p className="text-gray-900 text-sm md:text-base font-semibold">
          © 2024-2025 All rights reserved | Built by{" "}
          <span className="hover:text-blue-600 cursor-pointer">Victreat</span>
        </p>
      </div>
    </div>
  );
}

export default Footer;
