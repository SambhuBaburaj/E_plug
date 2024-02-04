import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion, useAnimation } from "framer-motion";
// import DropDown from "./DropDown";
import { useLocation, useNavigate } from "react-router-dom";
// import TeleMedicine from "../../Pages/Admin/TeleMedicine";
import {
  pharmacyNav,
  telemedicine,
  homecare,
  cleartopNav,
  openSidebar,
} from "../../Redux/Features/NavbarSlice";

function SideBar() {
  const dispatch = useDispatch();
  const { toggleSidebar } = useSelector((state) => {
    return state.navbar;
  });
  const controls = useAnimation();
  const dropdown = useAnimation();
  const [currentRoute, setCurrentRoute] = useState(useLocation().pathname);
  const navigate = useNavigate();
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  console.log(window.location.pathname, "path name");
  const [droping, setDroping] = useState(false);

  return (
    <aside
      id="logo-sidebar"
      className={`fixed top-0 left-0 z-30 w-64 h-screen pt-20 transition-transform  
      ${toggleSidebar ? "translate-x-0" : "-translate-x-full"} 
        border-r sm:translate-x-0 bg-black  border-gray-700`}
      aria-label="Sidebar"
    >
      <div class="h-full px-3 pb-4 overflow-y-auto  bg-black">
        <ul class="space-y-9 font-medium">
          <li>
            <a
              onClick={() => {
                setCurrentRoute("/dashboard");
                navigate("/dashboard");
                dispatch(openSidebar());
              }}
              href="#"
              className={`flex pl-12 items-center p-2 rounded-lg group ${
                window.location.pathname === "/dashboard"
                  ? "bg-white text-black "
                  : "text-white"
              } `}
            >
              <svg
                width="24px"
                height="24px"
                viewBox="0 -0.5 25 25"
                fill="#FFFFFF"
                className={`svg-icon ${
                  window.location.pathname === "/dashboard"
                    ? "svg-icon-active"
                    : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0" />

                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />

                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.918 10.0005H7.082C6.66587 9.99708 6.26541 10.1591 5.96873 10.4509C5.67204 10.7427 5.50343 11.1404 5.5 11.5565V17.4455C5.5077 18.3117 6.21584 19.0078 7.082 19.0005H9.918C10.3341 19.004 10.7346 18.842 11.0313 18.5502C11.328 18.2584 11.4966 17.8607 11.5 17.4445V11.5565C11.4966 11.1404 11.328 10.7427 11.0313 10.4509C10.7346 10.1591 10.3341 9.99708 9.918 10.0005Z"
                    stroke="#000000"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />{" "}
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.918 4.0006H7.082C6.23326 3.97706 5.52559 4.64492 5.5 5.4936V6.5076C5.52559 7.35629 6.23326 8.02415 7.082 8.0006H9.918C10.7667 8.02415 11.4744 7.35629 11.5 6.5076V5.4936C11.4744 4.64492 10.7667 3.97706 9.918 4.0006Z"
                    stroke="#000000"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />{" "}
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.082 13.0007H17.917C18.3333 13.0044 18.734 12.8425 19.0309 12.5507C19.3278 12.2588 19.4966 11.861 19.5 11.4447V5.55666C19.4966 5.14054 19.328 4.74282 19.0313 4.45101C18.7346 4.1592 18.3341 3.9972 17.918 4.00066H15.082C14.6659 3.9972 14.2654 4.1592 13.9687 4.45101C13.672 4.74282 13.5034 5.14054 13.5 5.55666V11.4447C13.5034 11.8608 13.672 12.2585 13.9687 12.5503C14.2654 12.8421 14.6659 13.0041 15.082 13.0007Z"
                    stroke="#000000"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />{" "}
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.082 19.0006H17.917C18.7661 19.0247 19.4744 18.3567 19.5 17.5076V16.4936C19.4744 15.6449 18.7667 14.9771 17.918 15.0006H15.082C14.2333 14.9771 13.5256 15.6449 13.5 16.4936V17.5066C13.525 18.3557 14.2329 19.0241 15.082 19.0006Z"
                    stroke="#000000"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />{" "}
                </g>
              </svg>

              <span className="ms-3 ">Dashboard</span>
            </a>
          </li>
          {/* <DropDown
            title="Booking"
            dropdowndata={[
              { title: "all Booking", link: "/all-booking" },
              { title: "add Booking", link: "/add-booking" },
              { title: "Edit Booing", link: "/edit-booking" },
            ]}
            setCurrentRoute={setCurrentRoute}
            currentRoute={currentRoute}
          /> */}

          <li>
            <a
              onClick={() => {
                // dispatch(telemedicine());
                setCurrentRoute("/accepted-list");
                navigate("/accepted-list");
                dispatch(openSidebar());
              }}
              href="#"
              className={`flex items-center p-2 pl-12 rounded-lg group ${
                window.location.pathname === "/accepted-list"
                  ? "bg-white text-black "
                  : "text-white"
              } `}
            >
              <svg
                width="23px"
                height="23px"
                viewBox="0 0 24 24"
                fill={
                  window.location.pathname === "/accepted-list"
                    ? "#your-active-color"
                    : "#FFFFFF"
                }
                className={`svg-icon ${
                  window.location.pathname === "/accepted-list"
                    ? "svg-icon-active"
                    : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M17.5 12C20.5376 12 23 14.4624 23 17.5C23 20.5376 20.5376 23 17.5 23C14.4624 23 12 20.5376 12 17.5C12 14.4624 14.4624 12 17.5 12ZM20.1465 15.1464L16.0541 19.2388L14.9 17.7C14.7343 17.4791 14.4209 17.4343 14.2 17.6C13.9791 17.7657 13.9343 18.0791 14.1 18.3L15.6 20.3C15.7826 20.5434 16.1384 20.5687 16.3536 20.3535L20.8536 15.8535C21.0488 15.6583 21.0488 15.3417 20.8536 15.1464C20.6583 14.9512 20.3417 14.9512 20.1465 15.1464Z"
                    fill="#0F0F0F"
                  ></path>{" "}
                  <path
                    d="M11.0189 17H3L2.88338 17.0067C2.38604 17.0645 2 17.4872 2 18C2 18.5523 2.44772 19 3 19H11.1739C11.0602 18.5185 11 18.0163 11 17.5C11 17.3318 11.0064 17.165 11.0189 17Z"
                    fill="#0F0F0F"
                  ></path>{" "}
                  <path
                    d="M11.4982 15H3C2.44772 15 2 14.5523 2 14C2 13.4872 2.38604 13.0645 2.88338 13.0067L3 13H12.8096C12.2573 13.5755 11.8099 14.2524 11.4982 15Z"
                    fill="#0F0F0F"
                  ></path>{" "}
                  <path
                    d="M3 11C2.44772 11 2 10.5523 2 10C2 9.48716 2.38604 9.06449 2.88338 9.00673L3 9H21C21.5523 9 22 9.44772 22 10C22 10.5128 21.614 10.9355 21.1166 10.9933L21 11H3Z"
                    fill="#0F0F0F"
                  ></path>{" "}
                  <path
                    d="M21 5H3L2.88338 5.00673C2.38604 5.06449 2 5.48716 2 6C2 6.55228 2.44772 7 3 7H21L21.1166 6.99327C21.614 6.93551 22 6.51284 22 6C22 5.44772 21.5523 5 21 5Z"
                    fill="#0F0F0F"
                  ></path>{" "}
                </g>
              </svg>

              {/* <svg
                fill={
                  window.location.pathname === "/accepted-list"
                    ? "#your-active-color"
                    : "#ede8e8"
                }
                width="25"
                height="30"
                viewBox="-7.5 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                className={`svg-icon ${
                  window.location.pathname === "/accepted-list"
                    ? "svg-icon-active"
                    : ""
                }`}
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <title>stethoscope</title>
                  <path d="M16.56 13c0-1.32-1.080-2.4-2.4-2.4s-2.4 1.080-2.4 2.4c0 1.040 0.64 1.92 1.56 2.24v4.92c0 2.84-2.88 3.040-3.76 3.040s-3.76-0.2-3.76-3.040v-1.88c2.28-0.36 4.16-2.080 4.16-3.92v-4.96c0-0.84-0.48-1.6-1.2-1.96-0.64-0.32-1.24-0.4-1.72-0.2-0.44 0.16-0.64 0.6-0.48 1.040s0.64 0.68 1.040 0.52c0.040 0 0.16 0 0.44 0.12 0.16 0.080 0.28 0.28 0.28 0.48v4.92c0 0.92-1.4 2.32-3.32 2.32s-3.32-1.4-3.32-2.32v-4.92c0-0.2 0.12-0.4 0.28-0.48 0.24-0.12 0.4-0.12 0.44-0.12 0.44 0.16 0.92-0.080 1.080-0.52s-0.080-0.92-0.52-1.080c-0.52-0.2-1.12-0.12-1.72 0.2-0.76 0.36-1.2 1.12-1.2 1.96v4.92c0 1.88 1.88 3.56 4.16 3.92v1.88c0 3.24 2.72 4.72 5.4 4.72s5.4-1.44 5.4-4.72v-4.84c0.88-0.32 1.56-1.2 1.56-2.24zM14.16 12.24c0.4 0 0.76 0.32 0.76 0.76 0 0.4-0.32 0.76-0.76 0.76-0.4 0-0.76-0.32-0.76-0.76 0-0.4 0.32-0.76 0.76-0.76z"></path>
                </g>
              </svg> */}

              <span className="ms-2">Accepted List</span>
            </a>
          </li>

          <li>
            <a
              onClick={() => {
                setCurrentRoute("/added-food");
                navigate("/added-food");
                dispatch(openSidebar());
              }}
              href="#"
              className={`flex items-center p-2 pl-12 rounded-lg group ${
                window.location.pathname === "/added-food"
                  ? "bg-white text-black "
                  : "text-white"
              } `}
            >
              <svg
                fill={
                  window.location.pathname === "/added-food"
                    ? "#your-active-color"
                    : "#ede8e8"
                }
                height="24px"
                width="24px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                // xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 512 512"
                // xml:space="preserve"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0" />

                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />

                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g>
                    {" "}
                    <g>
                      {" "}
                      <path d="M487.489,361.123h-10.404c1.474-8.065,2.234-16.27,2.234-24.511c0-75.383-61.33-136.712-136.715-136.712h-75.311 c-72.649,0-132.237,56.965-136.465,128.575l-21.399,0.066L93.12,312.325c-6.688-6.688-15.578-10.371-25.035-10.371 c-9.458,0-18.348,3.683-25.035,10.371c-6.686,6.686-10.37,15.577-10.37,25.034c0,8.87,3.239,17.24,9.159,23.763h-17.33 C10.996,361.123,0,372.118,0,385.634c0,13.516,10.996,24.511,24.511,24.511h10.451l5.959,17.878 c6.839,20.518,29.139,36.591,50.768,36.591h328.623c21.628,0,43.927-16.072,50.768-36.591l5.959-17.878h10.451 c13.515,0,24.511-10.995,24.511-24.511C512,372.118,501.004,361.123,487.489,361.123z M462.979,336.613 c0,8.258-0.863,16.475-2.541,24.511h-16.74c1.939-7.989,2.941-16.191,2.941-24.511c0-57.365-46.669-104.034-104.034-104.034 c-21.589,0-42.313,6.584-59.931,19.04c-3.684,2.605-4.56,7.704-1.954,11.388c2.605,3.684,7.701,4.561,11.388,1.954 c14.844-10.495,32.305-16.042,50.496-16.042c48.355,0,87.694,39.339,87.694,87.694c0,8.361-1.191,16.578-3.506,24.511H258.416 c-2.315-7.933-3.506-16.15-3.506-24.511c0-18.192,5.547-35.654,16.042-50.497c2.606-3.684,1.73-8.782-1.954-11.388 c-3.688-2.606-8.782-1.73-11.388,1.954c-12.456,17.617-19.04,38.341-19.04,59.931c0,8.319,1.002,16.521,2.941,24.511h-16.74 c-1.679-8.035-2.541-16.252-2.541-24.511c0-66.373,54-120.371,120.374-120.371S462.979,270.24,462.979,336.613z M146.919,336.621 c0-66.378,54.001-120.38,120.374-120.38h10.546c-42.803,23.121-71.95,68.404-71.95,120.371c0,8.241,0.761,16.446,2.234,24.511 h-61.205V336.621z M54.605,323.879c3.6-3.6,8.387-5.584,13.48-5.584s9.879,1.983,13.497,5.6l18.725,18.622 c1.536,1.529,3.617,2.415,5.787,2.377l24.486-0.076v16.306H64.894l-10.29-10.284c-3.6-3.6-5.583-8.388-5.583-13.481 C49.021,332.267,51.004,327.48,54.605,323.879z M487.489,393.804h-16.17c-0.026,0-365.106,0-365.106,0 c-4.513,0-8.17,3.658-8.17,8.17s3.657,8.17,8.17,8.17h353.6l-4.237,12.711c-4.593,13.777-20.741,25.417-35.265,25.417H91.688 c-14.523,0-30.672-11.64-35.265-25.417l-4.237-12.711h21.345c4.513,0,8.17-3.658,8.17-8.17s-3.657-8.17-8.17-8.17H40.709 c-0.029,0-16.199,0-16.199,0c-4.506,0-8.17-3.665-8.17-8.17c0-4.506,3.665-8.17,8.17-8.17h462.979c4.506,0,8.17,3.665,8.17,8.17 C495.66,390.14,491.995,393.804,487.489,393.804z" />{" "}
                    </g>{" "}
                  </g>{" "}
                  <g>
                    {" "}
                    <g>
                      {" "}
                      <path d="M342.604,295.762c-22.526,0-40.851,18.325-40.851,40.851c0,4.512,3.657,8.17,8.17,8.17s8.17-3.658,8.17-8.17 c0-13.516,10.996-24.511,24.511-24.511c13.515,0,24.511,10.995,24.511,24.511c0,4.512,3.657,8.17,8.17,8.17s8.17-3.658,8.17-8.17 C383.455,314.087,365.13,295.762,342.604,295.762z" />{" "}
                    </g>{" "}
                  </g>{" "}
                  <g>
                    {" "}
                    <g>
                      {" "}
                      <path d="M228.767,145.431c0-12.895,3.324-18.99,7.172-26.046c4.296-7.878,9.168-16.808,9.168-33.869 c0-17.028-4.852-25.954-9.144-33.82c-1.378-2.564-4.085-4.308-7.2-4.308c-4.512,0-8.17,3.658-8.17,8.17 c0,1.424,0.366,2.762,1.007,3.927c3.847,7.051,7.167,13.144,7.167,26.031c0,12.895-3.324,18.99-7.172,26.046 c-4.296,7.878-9.168,16.808-9.168,33.869s4.871,25.99,9.167,33.868c1.483,2.719,4.287,4.259,7.18,4.259 c1.321,0,2.662-0.321,3.904-0.999c3.962-2.16,5.422-7.123,3.26-11.084C232.091,164.418,228.767,158.326,228.767,145.431z" />{" "}
                    </g>{" "}
                  </g>{" "}
                  <g>
                    {" "}
                    <g>
                      {" "}
                      <path d="M283.235,145.431c0-12.895,3.324-18.99,7.172-26.046c4.296-7.878,9.168-16.808,9.168-33.869 c0-17.028-4.852-25.954-9.144-33.82c-1.378-2.564-4.085-4.308-7.2-4.308c-4.512,0-8.17,3.658-8.17,8.17 c0,1.424,0.366,2.762,1.007,3.927c3.847,7.051,7.167,13.144,7.167,26.031c0,12.895-3.324,18.99-7.172,26.046 c-4.296,7.878-9.168,16.808-9.168,33.869s4.871,25.99,9.167,33.868c1.483,2.719,4.287,4.259,7.18,4.259 c1.321,0,2.662-0.321,3.904-0.999c3.962-2.16,5.422-7.123,3.26-11.084C286.559,164.418,283.235,158.326,283.235,145.431z" />{" "}
                    </g>{" "}
                  </g>{" "}
                </g>
              </svg>

              <span className="ms-3">Added Food</span>
            </a>
          </li>

          <li>
            <a
              onClick={() => {
                // dispatch(pharmacyNav());
                setCurrentRoute("/close-time");
                navigate("/close-time");
                dispatch(openSidebar());
              }}
              href="#"
              class={`flex items-center p-2 pl-12 rounded-lg group ${
                window.location.pathname === "/close-time"
                  ? "bg-white text-black "
                  : "text-white"
              } `}
            >
              <svg
                fill={
                  window.location.pathname === "/close-time"
                    ? "#your-active-color"
                    : "#ede8e8"
                }
                height="23px"
                width="23px"
                version="1.1"
                id="Layer_1"
                className={`svg-icon ${
                  window.location.pathname === "/close-time"
                    ? "svg-icon-active"
                    : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                // xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 512 512"
                // xml:space="preserve"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0" />

                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />

                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g>
                    {" "}
                    <g>
                      {" "}
                      <polygon points="308.256,262.651 308.256,246.921 290.943,246.921 290.943,262.651 275.424,262.651 297.277,219.474 279.33,219.474 256.106,264.34 256.106,276.797 290.943,276.797 290.943,292.948 308.256,292.948 308.256,276.797 318.285,276.797 318.285,262.651 " />{" "}
                    </g>{" "}
                  </g>{" "}
                  <g>
                    {" "}
                    <g>
                      {" "}
                      <path d="M218.735,278.169l14.991-15.835c7.917-8.234,13.829-16.469,13.829-24.492c0-11.612-10.557-19.108-25.125-19.108 c-10.451,0-20.586,4.012-29.77,10.979l7.073,13.407c6.651-5.806,14.04-9.29,19.952-9.29c5.278,0,8.34,2.428,8.34,6.651 c0,3.378-2.956,8.34-7.073,12.563l-26.181,27.87v12.035h55v-14.779H218.735z" />{" "}
                    </g>{" "}
                  </g>{" "}
                  <g>
                    {" "}
                    <g>
                      {" "}
                      <path d="M437.025,74.976C388.676,26.627,324.386,0,256,0S123.324,26.627,74.975,74.976C26.627,123.324,0,187.614,0,256 s26.627,132.676,74.975,181.024C123.324,485.373,187.614,512,256,512s132.676-26.627,181.025-74.976 C485.373,388.676,512,324.386,512,256S485.373,123.324,437.025,74.976z M425.828,425.828 C380.469,471.185,320.156,496.165,256,496.165s-124.469-24.98-169.828-70.337C40.814,380.47,15.835,320.157,15.835,256 S40.814,131.53,86.172,86.172C131.531,40.815,191.844,15.835,256,15.835s124.469,24.98,169.828,70.337 c45.358,45.358,70.337,105.67,70.337,169.828S471.186,380.47,425.828,425.828z" />{" "}
                    </g>
                  </g>
                  <g>
                    <g>
                      <path d="M415.17,113.257c-40.604-45.14-98.619-71.03-159.17-71.03C138.125,42.227,42.227,138.125,42.227,256 S138.125,469.773,256,469.773S469.773,373.875,469.773,256C469.773,203.137,450.383,152.445,415.17,113.257z M408.765,381.732 l-31.042-31.042l-11.198,11.196l31.665,31.665c-34.298,35.441-81.678,58.134-134.273,60.214v-44.694h-15.835v44.694 c-52.595-2.08-99.975-24.773-134.272-60.214l31.665-31.665l-11.198-11.196l-31.042,31.042 c-26.642-32.312-43.237-73.19-45.002-117.815h44.694v-15.835H58.234c1.765-44.625,18.36-85.503,45.001-117.815l31.042,31.042 l11.197-11.196l-31.665-31.665c34.298-35.441,81.678-58.134,134.273-60.214v44.694h15.835v-44.69 c50.695,2.043,98.912,23.622,134.345,60.137l-31.738,31.738l11.197,11.196l31.123-31.123 c27.464,33.295,43.21,74.614,44.926,117.896h-44.699v15.835h44.694C452.001,308.543,435.406,349.421,408.765,381.732z" />{" "}
                    </g>
                  </g>
                  <g>
                    <g>
                      <path d="M334.276,153.072h22.013v-15.835h-55.423v55.423h15.835v-32.528c32.686,20.737,52.784,56.974,52.784,95.869 c0,62.576-50.91,113.485-113.485,113.485S142.515,318.576,142.515,256S193.425,142.515,256,142.515V126.68 c-71.307,0-129.32,58.012-129.32,129.32S184.693,385.32,256,385.32S385.32,327.307,385.32,256 C385.32,215.404,366.119,177.34,334.276,153.072z" />{" "}
                    </g>{" "}
                  </g>{" "}
                </g>
              </svg>

              <span class="ms-3">Close Time</span>
            </a>
          </li>

          {/* <li>
            <a
              onClick={() => {
                setCurrentRoute("/food/categories");
                navigate("/food/categories");
                dispatch(openSidebar());
              }}
              href="#"
              class={`flex items-center p-2 pl-12   rounded-lg       group ${
                window.location.pathname === "/food/categories" ||
                window.location.pathname === "/food/product" ||
                window.location.pathname === "/food/review" ||
                window.location.pathname === "/food/order"
                  ? "bg-white text-black "
                  : "text-white"
              } `}
            >
              <svg
                className={`svg-icon `}
                width="20"
                height="25"
                viewBox="0 0 24 24"
                id="Layer_1"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <g id="SVGRepo_iconCarrier">
                  <defs>
                    <style
                      dangerouslySetInnerHTML={{
                        __html: `.cls-1{fill:none;
            
              ${
                window.location.pathname === "/food/categories" ||
                window.location.pathname === "/food/product" ||
                window.location.pathname === "/food/review" ||
                window.location.pathname === "/food/order"
                  ? "stroke:#202124; "
                  : "  stroke:#ede8e8;"
              }
              
              stroke-miterlimit:10;stroke-width:1.92px;}`,
                      }}
                    />
                  </defs>
                  <path
                    className="cls-1"
                    d="M3.38,1.46h0A5.75,5.75,0,0,1,9.13,7.21v8.63a0,0,0,0,1,0,0H3.38a0,0,0,0,1,0,0V1.46A0,0,0,0,1,3.38,1.46Z"
                  />
                  <polyline
                    className="cls-1"
                    points="3.38 23.5 3.38 15.83 7.21 15.83 7.21 23.5"
                  />
                  <polyline
                    className="cls-1"
                    points="14.88 23.5 14.88 11.04 18.71 11.04 18.71 23.5"
                  />
                  <path
                    className="cls-1"
                    d="M13,7.21h7.67a0,0,0,0,1,0,0v1A2.87,2.87,0,0,1,17.75,11H15.83A2.88,2.88,0,0,1,13,8.17v-1A0,0,0,0,1,13,7.21Z"
                  />
                  <line
                    className="cls-1"
                    x1="16.79"
                    y1="0.5"
                    x2="16.79"
                    y2="7.21"
                  />
                  <line
                    className="cls-1"
                    x1="12.96"
                    y1="0.5"
                    x2="12.96"
                    y2="7.21"
                  />
                  <line
                    className="cls-1"
                    x1="20.63"
                    y1="0.5"
                    x2="20.63"
                    y2="7.21"
                  />
                </g>
              </svg>

              <span class="ms-3">Food</span>
            </a>
          </li>

          <li>
            <a
              onClick={() => {
                setCurrentRoute("/transaction");
                navigate("/transaction");
                dispatch(openSidebar());
              }}
              href="#"
              class={`flex items-center p-2 pl-12   rounded-lg       group ${
                currentRoute === "/transaction"
                  ? "bg-white text-black "
                  : "text-white"
              } `}
            >
              {currentRoute === "/transaction" ? (
                <svg
                  fill="#"
                  width="30"
                  height="25"
                  viewBox="0 0 24 24"
                  id="exchange-dollar"
                  data-name="Flat Line"
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon flat-line"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <g id="SVGRepo_iconCarrier">
                    <path
                      id="primary"
                      d="M20,12a7.91,7.91,0,0,0-.35-2.35,8,8,0,0,0-14.35-2"
                      style={{
                        fill: "none",
                        stroke: "black", // Changed to black
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                      }}
                    />
                    <path
                      id="primary-2"
                      data-name="primary"
                      d="M4,12a7.91,7.91,0,0,0,.35,2.35,8,8,0,0,0,14.35,2"
                      style={{
                        fill: "none",
                        stroke: "black", // Changed to black
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                      }}
                    />
                    <polyline
                      id="primary-3"
                      data-name="primary"
                      points="19 11 20 12 21 11"
                      style={{
                        fill: "none",
                        stroke: "black", // Changed to black
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                      }}
                    />
                    <polyline
                      id="primary-4"
                      data-name="primary"
                      points="5 13 4 12 3 13"
                      style={{
                        fill: "none",
                        stroke: "black", // Changed to black
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                      }}
                    />
                    <path
                      id="primary-5"
                      data-name="primary"
                      d="M10,15h2.5A1.5,1.5,0,0,0,14,13.5h0A1.5,1.5,0,0,0,12.5,12h-1A1.5,1.5,0,0,1,10,10.5h0A1.5,1.5,0,0,1,11.5,9H14"
                      style={{
                        fill: "none",
                        stroke: "black", // Changed to black
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                      }}
                    />
                    <path
                      id="primary-6"
                      data-name="primary"
                      d="M12,9V8m0,8V15"
                      style={{
                        fill: "none",
                        stroke: "black", // Changed to black
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                      }}
                    />
                  </g>
                </svg>
              ) : (
                <svg
                  fill="#"
                  width="30"
                  height="25"
                  viewBox="0 0 24 24"
                  id="exchange-dollar"
                  data-name="Flat Line"
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon flat-line"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <g id="SVGRepo_iconCarrier">
                    <path
                      id="primary"
                      d="M20,12a7.91,7.91,0,0,0-.35-2.35,8,8,0,0,0-14.35-2"
                      style={{
                        fill: "none",
                        stroke: "#ede8e8",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                      }}
                    />
                    <path
                      id="primary-2"
                      data-name="primary"
                      d="M4,12a7.91,7.91,0,0,0,.35,2.35,8,8,0,0,0,14.35,2"
                      style={{
                        fill: "none",
                        stroke: "#ede8e8",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                      }}
                    />
                    <polyline
                      id="primary-3"
                      data-name="primary"
                      points="19 11 20 12 21 11"
                      style={{
                        fill: "none",
                        stroke: "#ede8e8",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                      }}
                    />
                    <polyline
                      id="primary-4"
                      data-name="primary"
                      points="5 13 4 12 3 13"
                      style={{
                        fill: "none",
                        stroke: "#ede8e8",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                      }}
                    />
                    <path
                      id="primary-5"
                      data-name="primary"
                      d="M10,15h2.5A1.5,1.5,0,0,0,14,13.5h0A1.5,1.5,0,0,0,12.5,12h-1A1.5,1.5,0,0,1,10,10.5h0A1.5,1.5,0,0,1,11.5,9H14"
                      style={{
                        fill: "none",
                        stroke: "#ede8e8",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                      }}
                    />
                    <path
                      id="primary-6"
                      data-name="primary"
                      d="M12,9V8m0,8V15"
                      style={{
                        fill: "none",
                        stroke: "#ede8e8",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                      }}
                    />
                  </g>
                </svg>
              )}

              <span class="ms-1">Transaction</span>
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                dispatch(cleartopNav());
                setCurrentRoute("/coupons");
                navigate("/coupons");
                dispatch(openSidebar());
              }}
              href="#"
              class={`flex items-center p-2 pl-12 rounded-lg group ${
                window.location.pathname === "/coupons"
                  ? "bg-white text-black "
                  : "text-white"
              } `}
            >
              <svg
                fill={
                  window.location.pathname === "/coupons"
                    ? "#your-active-color"
                    : "#ede8e8"
                }
                width="20"
                height="25"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className={`svg-icon ${
                  window.location.pathname === "/coupons"
                    ? "svg-icon-active"
                    : ""
                }`}
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M9.426,6.3,7.57,8.156l2.137,2.137a1,1,0,0,1-1.414,1.414L6.156,9.57,4.3,11.425a4.437,4.437,0,0,0,4.413,7.388,1,1,0,0,1,.574,1.916,6.437,6.437,0,0,1-6.4-10.718L8.012,4.885a6.442,6.442,0,0,1,9.8.829,1,1,0,1,1-1.63,1.159A4.44,4.44,0,0,0,9.426,6.3ZM23,15a6,6,0,1,1-6-6A6.008,6.008,0,0,1,23,15Zm-6-4a3.947,3.947,0,0,0-2.019.567l5.452,5.452A3.957,3.957,0,0,0,21,15,4,4,0,0,0,17,11Zm0,8a3.947,3.947,0,0,0,2.019-.567l-5.452-5.452A3.957,3.957,0,0,0,13,15,4,4,0,0,0,17,19Z"></path>
                </g>
              </svg>

              <span class="ms-3">coupons</span>
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                dispatch(cleartopNav());
                setCurrentRoute("/push-notification");
                navigate("/push-notification");
                dispatch(openSidebar());
              }}
              href="#"
              class={`flex items-center p-2 pl-12 rounded-lg group ${
                window.location.pathname === "/push-notification"
                  ? "bg-white text-black "
                  : "text-white"
              } `}
            >
              <svg
                fill={
                  window.location.pathname === "/push-notification"
                    ? "#your-active-color"
                    : "#ede8e8"
                }
                width="23px"
                height="23px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className={`svg-icon ${
                  window.location.pathname === "/push-notification"
                    ? "svg-icon-active"
                    : ""
                }`}
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M9 11H15M12 8V14M21 20L17.6757 18.3378C17.4237 18.2118 17.2977 18.1488 17.1656 18.1044C17.0484 18.065 16.9277 18.0365 16.8052 18.0193C16.6672 18 16.5263 18 16.2446 18H6.2C5.07989 18 4.51984 18 4.09202 17.782C3.71569 17.5903 3.40973 17.2843 3.21799 16.908C3 16.4802 3 15.9201 3 14.8V7.2C3 6.07989 3 5.51984 3.21799 5.09202C3.40973 4.71569 3.71569 4.40973 4.09202 4.21799C4.51984 4 5.0799 4 6.2 4H17.8C18.9201 4 19.4802 4 19.908 4.21799C20.2843 4.40973 20.5903 4.71569 20.782 5.09202C21 5.51984 21 6.0799 21 7.2V20Z"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="#FFFFFF"
                  ></path>{" "}
                </g>
              </svg>

              <span class="ms-1">Push Notification</span>
            </a>
          </li>
          <li className="">
            <a
              onClick={() => {
                localStorage.removeItem("sophwe_token");
                localStorage.removeItem("sophwe_fcm");
                dispatch(cleartopNav());

                navigate("/login");
                dispatch(openSidebar());
              }}
              href="#"
              class={`flex items-center p-2 pl-12   rounded-lg       group ${
                currentRoute === "" ? "bg-white text-black " : "text-red-500"
              } `}
            >
              <svg
                width="30"
                height="25"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M15 12L2 12M2 12L5.5 9M2 12L5.5 15"
                    stroke="#d41633"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                  <path
                    d="M9.00195 7C9.01406 4.82497 9.11051 3.64706 9.87889 2.87868C10.7576 2 12.1718 2 15.0002 2L16.0002 2C18.8286 2 20.2429 2 21.1215 2.87868C22.0002 3.75736 22.0002 5.17157 22.0002 8L22.0002 16C22.0002 18.8284 22.0002 20.2426 21.1215 21.1213C20.3531 21.8897 19.1752 21.9862 17 21.9983M9.00195 17C9.01406 19.175 9.11051 20.3529 9.87889 21.1213C10.5202 21.7626 11.4467 21.9359 13 21.9827"
                    stroke="#d41633"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  ></path>{" "}
                </g>
              </svg>

              <span class="ms-3 ">logout</span>
            </a>
          </li> */}
        </ul>
      </div>
    </aside>
  );
}

export default SideBar;
