import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex fixed top-0 bg-white w-screen h-17 border-[1px] border-b-gray-200 justify-center mb-[10vh]">
      <div className="flex w-[72%] h-[100%] justify-evenly text-center">
        <div className="flex flex-1 items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 font-medium"
                : "text-gray-700 hover:text-blue-400"
            }
          >
            <img
              src="media/images/logo.svg"
              alt="logoimg"
              className="h-[27%] w-[47%] -ml-2 "
            />
          </NavLink>
        </div>

        <div className="flex flex-3 justify-end gap-10 items-center">
          <button>
            {" "}
            <NavLink
              to="/signup"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 font-medium"
                  : "text-gray-700 hover:text-blue-400"
              }
            >
              Signup
            </NavLink>{" "}
          </button>
          <button>
            {" "}
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 font-medium"
                  : "text-gray-700 hover:text-blue-400"
              }
            >
              About
            </NavLink>{" "}
          </button>
          <button>
            {" "}
            <NavLink
              to="/product"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 font-medium"
                  : "text-gray-700 hover:text-blue-400"
              }
            >
              Product
            </NavLink>{" "}
          </button>
          <button>
            {" "}
            <NavLink
              to="/pricing"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 font-medium"
                  : "text-gray-700 hover:text-blue-400"
              }
            >
              Pricing
            </NavLink>{" "}
          </button>
          <button>
            {" "}
            <NavLink
              to="/support"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 font-medium"
                  : "text-gray-700 hover:text-blue-400"
              }
            >
              Support
            </NavLink>{" "}
          </button>
          <i className="fa-solid fa-bars ml-4 text-xl"></i>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
