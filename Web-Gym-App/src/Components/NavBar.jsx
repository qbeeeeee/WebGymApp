// src/components/Navbar.jsx
import React, { useState } from "react";
import "./../assets/css/NavBar.css";
import "./../assets/css/Custom.css";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signoutSuccess } from "../redux/user/userSlice";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const currentPath = window.location.pathname;

  const handleSignout = async () => {
    try {
      const res = await fetch("/api/auth/signout", {
        method: "POST",
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutSuccess());
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="bg-custom-yellow shadow-lg h-[75px]">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-black text-2xl font-bold">
          <a href="/">GymPro</a>
        </div>

        {/* Hamburger Menu - Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Links - Mobile */}
        <div
          className={`fixed top-0 right-0 h-full w-[70%] z-10 bg-custom-yellow shadow-lg transition-transform duration-300 ease-in-out transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } md:hidden`}
        >
          <div className="absolute right-0 items-end mr-5 mt-5 ">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-col items-start mt-20 space-y-6 px-6">
            <a href="/" className="text-black text-xl">
              Home
            </a>
            <a href="/trackmyworkout" className="text-black text-xl">
              Track My Workout
            </a>
            <a href="/classes" className="text-black text-xl">
              Classes
            </a>
            <a href="/about" className="text-black text-xl">
              About Us
            </a>
            <a href="/pricing" className="text-black text-xl">
              Pricing
            </a>
            <a href="/contact" className="text-black text-xl">
              Contact Us
            </a>
            {currentUser ? (
              <button
                onClick={handleSignout}
                className="bg-yellow-500 hover:brightness-105 text-black px-4 py-2 rounded-lg"
              >
                Sign Out
              </button>
            ) : (
              <button
                onClick={() => {
                  navigate("/signin");
                  setIsOpen(false);
                }}
                className="bg-yellow-500 hover:brightness-105 text-black px-4 py-2 rounded-lg"
              >
                Join Now
              </button>
            )}
          </div>
        </div>

        {/* Links - Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="/"
            className={`hover:text-red-700 transition duration-300  ${
              currentPath === "/" ? "border-b-4 border-red-500" : ""
            }`}
          >
            Home
          </a>
          <a
            href="/trackmyworkout"
            className={`hover:text-red-700 transition duration-300  ${
              currentPath === "/trackmyworkout"
                ? "border-b-4 border-red-500"
                : ""
            }`}
          >
            Track My Workout
          </a>
          <a
            href="/addworkout"
            className={`hover:text-red-700 transition duration-300  ${
              currentPath === "/addworkout" ? "border-b-4 border-red-500" : ""
            }`}
          >
            Add Workout
          </a>
          <a
            href="/about"
            className={`hover:text-red-700 transition duration-300  ${
              currentPath === "/about" ? "border-b-4 border-red-500" : ""
            }`}
          >
            About Us
          </a>
          <a
            href="/pricing"
            className={`hover:text-red-700 transition duration-300  ${
              currentPath === "/pricing" ? "border-b-4 border-red-500" : ""
            }`}
          >
            Pricing
          </a>
          <a
            href="/contact"
            className={`hover:text-red-700 transition duration-300  ${
              currentPath === "/contact" ? "border-b-4 border-red-500" : ""
            }`}
          >
            Contact Us
          </a>
          {currentUser ? (
            <button
              onClick={handleSignout}
              className="bg-yellow-500 hover:brightness-105 text-black px-4 py-2 rounded-lg"
            >
              Sign Out
            </button>
          ) : (
            <button
              onClick={() => navigate("/signin")}
              className="bg-yellow-500 hover:brightness-105 text-black px-4 py-2 rounded-lg"
            >
              Join Now
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
