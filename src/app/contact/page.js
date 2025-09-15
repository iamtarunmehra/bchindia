"use client";
import Link from "next/link";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaAngleRight, FaBlenderPhone } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";

export default function Page() {
  return (
    <div className="w-full">
      <div className="w-full shadow-md">
        <p className="max-w-[1170px] mx-auto uppercase  flex items-center text-[15px] gap-2 py-[15px] cursor-pointer">
          <Link href={"/"}>
            <span>Home</span>
          </Link>{" "}
          <FaAngleRight className="text-[#D53332] cursor-default" /> Contact
        </p>
      </div>
      <div className="max-w-[1170px] mx-auto   lg:py-[40px] py-[20px]">
        <div className="grid grid-cols-3 gap-10">
          <div className="bg-white min-h-[250px] border border-gray-300 p-7 flex flex-col items-center justify-center">
            <h2 className="text-[30px] mb-3">Toll Free</h2>
            <FaPhoneAlt className="w-[60px] h-[60px] p-3 rounded-full bg-[#D53332] text-white" />
            <p className="mt-3 text-[25px] cursor-pointer hover:text-[#D53332] duration-300">
              1800 103 9262
            </p>
          </div>
          <div className="bg-white min-h-[250px] border border-gray-300 p-7 flex flex-col items-center justify-center">
            <h2 className="text-[30px] mb-3">Email</h2>
            <FaPhoneAlt className="w-[60px] h-[60px] p-3 rounded-full bg-[#D53332] text-white" />
            <p className="mt-3 text-[25px] cursor-pointer hover:text-[#D53332] duration-300">
              marketing@bchindia.com
            </p>
          </div>
          <div className="bg-white min-h-[250px] border border-gray-300 p-7 flex flex-col items-center justify-center">
            <h2 className="text-[30px] mb-3">Contact Us</h2>
            <FaPhoneAlt className="w-[60px] h-[60px] p-3 rounded-full bg-[#D53332] text-white" />
            <p className="mt-3 text-[25px] cursor-pointer hover:text-[#D53332] duration-300">
              Submit your query
            </p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-10 lg:my-[30px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3501.9875244760415!2d77.223643!3d28.630136!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd3238090bd3%3A0xbb6169fca4c793bb!2sBCH%20ELECTRIC%20LIMITED!5e0!3m2!1sen!2sus!4v1757864684137!5m2!1sen!2sus"
            width="100%"
            height="330"
            loading="lazy"
          ></iframe>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3501.9875244760415!2d77.223643!3d28.630136!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd3238090bd3%3A0xbb6169fca4c793bb!2sBCH%20ELECTRIC%20LIMITED!5e0!3m2!1sen!2sus!4v1757864684137!5m2!1sen!2sus"
            width="100%"
            height="330"
            loading="lazy"
          ></iframe>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3501.9875244760415!2d77.223643!3d28.630136!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd3238090bd3%3A0xbb6169fca4c793bb!2sBCH%20ELECTRIC%20LIMITED!5e0!3m2!1sen!2sus!4v1757864684137!5m2!1sen!2sus"
            width="100%"
            height="330"
            loading="lazy"
          ></iframe>
        </div>
        <div className="grid grid-cols-3 gap-10 lg:my-[30px]">
          <div className="w-[100%] p-5 bg-[#F7F7F7]">
            <h3 className="text-[25px] text-red-600 mb-3 tracking-wider">
              Corporate Office
            </h3>
            <ul>
              <li className="my-[10px] text-[18px] grid grid-cols-[8%_auto]">
                <IoLocationSharp className="text-[20px]" />
                1105, New Delhi House, 27, Barakhamba Road, New Delhi - 110 001
              </li>
              <li className="my-[10px] text-[18px] grid grid-cols-[8%_auto]">
                <FaPhoneAlt />
                011-43673100
              </li>
              <li className="my-[10px] text-[18px] grid grid-cols-[8%_auto]">
                <FaBlenderPhone /> 91-11-23715247
              </li>
            </ul>
          </div>
          <div className="w-[100%] p-5 bg-[#F7F7F7]">
            <h3 className="text-[25px] text-red-600 mb-3 tracking-wider">
              Work 1
            </h3>
            <ul>
              <li className="my-[10px] text-[18px] grid grid-cols-[8%_auto]">
                <IoLocationSharp className="text-[20px]" />
                1105, New Delhi House, 27, Barakhamba Road, New Delhi - 110 001
              </li>
              <li className="my-[10px] text-[18px] grid grid-cols-[8%_auto]">
                <FaPhoneAlt />
                011-43673100
              </li>
              <li className="my-[10px] text-[18px] grid grid-cols-[8%_auto]">
                <FaBlenderPhone /> 91-11-23715247
              </li>
            </ul>
          </div>
          <div className="w-[100%] p-5 bg-[#F7F7F7]">
            <h3 className="text-[25px] text-red-600 mb-3 tracking-wider">
              Work 2
            </h3>
            <ul>
              <li className="my-[10px] text-[18px] grid grid-cols-[8%_auto]">
                <IoLocationSharp className="text-[20px]" />
                1105, New Delhi House, 27, Barakhamba Road, New Delhi - 110 001
              </li>
              <li className="my-[10px] text-[18px] grid grid-cols-[8%_auto]">
                <FaPhoneAlt />
                011-43673100
              </li>
              <li className="my-[10px] text-[18px] grid grid-cols-[8%_auto]">
                <FaBlenderPhone /> 91-11-23715247
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center w-full">
          <Link href={'/sales-offices'}><button className="bg-[#D53332] text-white cursor-pointer hover:bg-transparent border border-transparent hover:border-red-600 hover:text-red-600 duration-300 uppercase px-14 py-3 rounded">
            View our sales offices
          </button></Link>
        </div>
      </div>
    </div>
  );
}
