import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/barrelLogo.webp";

export default function Footer() {
  return (
    <footer className="border-t-5 border-t-yellow-500 px-10 bg-gray-800 text-white py-8">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="footer-section about mb-8">
          <h2 className="text-xl font-bold mb-2 text-yellow-500">
            Barrel Organization
          </h2>
          <p className="text-lg">
            We are a California-based organization committed to providing
            knowledge on self-defense and urban survival.
          </p>
        </div>
        <div className="flex sm:flex-row flex-col justify-between">
            <div className="overflow-hidden w-25 border-2 border-yellow-500 h-fit">
              <img src={logo} alt="Logo" />
            </div>
          <div className="sm:pr-10 mb-8">
            <h1 className="text-4xl font-bold">
              Ba<span className="text-yellow-500">rr</span>el
            </h1>
            <p className="text-lg sm:max-w-1/2">
              Empowering through knowledge and skills
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-bold mb-2 text-yellow-500">
              Quick Links
            </h2>
            <ul>
              <li className="mb-2">
                <p className="text-lg">
                  <Link
                    to="/home"
                    className="text-yellow-500 hover:border-b-4 hover:border-slate-500"
                  >
                    Home
                  </Link>
                </p>
              </li>
              <li className="mb-2">
                <p className="text-lg">
                  <Link
                    to="/about"
                    className="text-yellow-500 hover:border-b-4 hover:border-slate-500"
                  >
                    About
                  </Link>
                </p>
              </li>
              <li className="mb-2">
                <p className="text-lg">
                  <Link
                    to="/contact"
                    className="text-yellow-500 hover:border-b-4 hover:border-slate-500"
                  >
                    Contact
                  </Link>
                </p>
              </li>
            </ul>
          </div>
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-2 text-yellow-500">
              Contact Us
            </h2>
            <p className="text-lg">
              Email:{" "}
              <a
                href="mailto:info@company.com"
                className="text-yellow-500 hover:border-b-4 hover:border-slate-500"
              >
                info@company.com
              </a>
            </p>
            <p className="text-lg">
              Phone:{" "}
              <a
                href="tel:+1234567890"
                className="text-yellow-500 hover:border-b-4 hover:border-slate-500"
              >
                (123) 456-7890
              </a>
            </p>
          </div>
        </div>
        <div className="footer-bottom text-center">
          <p className="text-lg">
            &copy; {new Date().getFullYear()} Barrel Organization. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
