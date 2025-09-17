import React from 'react'
import { FaLinkedin, FaLinkedinIn } from 'react-icons/fa6'
import { FaFacebookSquare } from "react-icons/fa";
import ContactUs from '../homePageComponents/ContactUs';
import Link from 'next/link';


export default function Footer() {
    return (

        <>
            <footer className='bg-white w-full'>
                <ContactUs />
                <div className='w-full lg:py-[40px]  lg:p-0 p-3 py-[60px] bg-gradient-to-r from-gray-600 via-gray-700 to-black/90'>
                    <div className="max-w-[1170px] mx-auto border-b-2 border-white pb-7 text-white grid lg:grid-cols-5 sm:grid-cols-2 grid-cols-1 lg:gap-0 gap-3">
                        <ul>
                            <li className=' cursor-pointer border-b border-transparent   w-fit hover:border-red-600 duration-500  lg:mb-3 uppercase text-[20px]'>Product range</li>
                            <li className=' cursor-pointer border-b border-transparent   w-fit hover:border-red-600 duration-500 capitalize my-[10px] text-gray-400 hover:text-white '>industrial products</li>
                            <li className=' cursor-pointer border-b border-transparent   w-fit hover:border-red-600 duration-500 capitalize my-[10px] text-gray-400 hover:text-white '>motor starter</li>
                            <li className=' cursor-pointer border-b border-transparent   w-fit hover:border-red-600 duration-500 capitalize my-[10px] text-gray-400 hover:text-white '>enclosure</li>
                            <li className=' cursor-pointer border-b border-transparent   w-fit hover:border-red-600 duration-500 capitalize my-[10px] text-gray-400 hover:text-white '>industrial solutions</li>
                            <li className=' cursor-pointer border-b border-transparent  w-fit hover:border-red-600 duration-500 lg:mt-[40px] mt-2'><img className='mb-4 lg:w-auto w-[160px]' src="https://bchindia.com/wp-content/uploads/2019/06/google-play-download.png" alt="" /></li>
                        </ul>
                        <ul>
                            <li className=' cursor-pointer border-b border-transparent   w-fit hover:border-red-600 duration-500  lg:mb-3 uppercase text-[20px]'>Applications</li>
                            <li className=' cursor-pointer border-b border-transparent   w-fit hover:border-red-600 duration-500 capitalize my-[10px] text-gray-400 hover:text-white '>power control</li>
                            <li className=' cursor-pointer border-b border-transparent   w-fit hover:border-red-600 duration-500 capitalize my-[10px] text-gray-400 hover:text-white '>motor control</li>
                            <li className=' cursor-pointer border-b border-transparent   w-fit hover:border-red-600 duration-500 capitalize my-[10px] text-gray-400 hover:text-white '>detection & sensing</li>
                            <li className=' cursor-pointer border-b border-transparent   w-fit hover:border-red-600 duration-500 capitalize my-[10px] text-gray-400 hover:text-white '>heavy machinery control</li>
                        </ul>
                        <ul>
                            <li className=' cursor-pointer border-b border-transparent   w-fit hover:border-red-600 duration-500  lg:mb-3 uppercase text-[20px]'>industries</li>
                            <li className=' cursor-pointer border-b border-transparent   w-fit hover:border-red-600 duration-500 capitalize my-[10px] text-gray-400 hover:text-white '>agriculture</li>
                            <li className=' cursor-pointer border-b border-transparent   w-fit hover:border-red-600 duration-500 capitalize my-[10px] text-gray-400 hover:text-white '>railways</li>
                            <li className=' cursor-pointer border-b border-transparent   w-fit hover:border-red-600 duration-500 capitalize my-[10px] text-gray-400 hover:text-white '>mining</li>
                            <li className=' cursor-pointer border-b border-transparent   w-fit hover:border-red-600 duration-500 capitalize my-[10px] text-gray-400 hover:text-white '>steel</li>
                        </ul>
                        <ul>
                            <li className=' cursor-pointer border-b border-transparent   w-fit hover:border-red-600 duration-500  lg:mb-3 uppercase text-[20px]'>other links</li>
                            <li className=' cursor-pointer border-b border-transparent   w-fit hover:border-red-600 duration-500 capitalize my-[10px] text-gray-400 hover:text-white '>download</li>
                            <li className=' cursor-pointer border-b border-transparent   w-fit hover:border-red-600 duration-500 capitalize my-[10px] text-gray-400 hover:text-white '>download enclosure drawings</li>
                            <li className=' cursor-pointer border-b border-transparent   w-fit hover:border-red-600 duration-500 capitalize my-[10px] text-gray-400 hover:text-white '>blog</li>
                            <li className=' cursor-pointer border-b border-transparent   w-fit hover:border-red-600 duration-500 capitalize my-[10px] text-gray-400 hover:text-white '>news & events</li>
                            <Link href={'/enquiry'}><li className=' cursor-pointer border-b border-transparent   w-fit hover:border-red-600 duration-500 capitalize my-[10px] text-gray-400 hover:text-white '>enquiry</li></Link>
                            <li className=' cursor-pointer border-b border-transparent   w-fit hover:border-red-600 duration-500 capitalize my-[10px] text-gray-400 hover:text-white '>resources</li>
                            <li className=' cursor-pointer border-b border-transparent   w-fit hover:border-red-600 duration-500 capitalize my-[10px] text-gray-400 hover:text-white '>privacy policy</li>
                            <li className=' cursor-pointer border-b border-transparent   w-fit hover:border-red-600 duration-500 capitalize my-[10px] text-gray-400 hover:text-white '>FAQs</li>
                        </ul>
                        <ul>
                            <li className=' cursor-pointer border-b border-transparent   w-fit hover:border-red-600 duration-500  lg:mb-3 uppercase text-[20px]'>company</li>
                            <Link href={'/company'}><li className=' cursor-pointer border-b border-transparent   w-fit hover:border-red-600 duration-500 capitalize my-[10px] text-gray-400 hover:text-white '>overview</li></Link>
                            <li className=' cursor-pointer border-b border-transparent   w-fit hover:border-red-600 duration-500 capitalize my-[10px] text-gray-400 hover:text-white '>sales and distribution</li>
                            <li className=' cursor-pointer border-b border-transparent   w-fit hover:border-red-600 duration-500 capitalize my-[10px] text-gray-400 hover:text-white '>R&D and quality</li>
                            <li className=' cursor-pointer border-b border-transparent   w-fit hover:border-red-600 duration-500 capitalize my-[10px] text-gray-400 hover:text-white '>manufacturing</li>
                            <Link href={'/contact'}><li className=' cursor-pointer border-b border-transparent   w-fit hover:border-red-600 duration-500 capitalize my-[10px] text-gray-400 hover:text-white '>contact</li></Link>
                            <li className=' cursor-pointer border-b border-transparent   w-fit hover:border-red-600 duration-500 capitalize my-[10px] text-gray-400 hover:text-white '>CAREERS</li>
                            <Link href={'/customer-care'}><li className=' cursor-pointer border-b border-transparent   w-fit hover:border-red-600 duration-500 capitalize my-[10px] text-gray-400 hover:text-white '>CUSTOMER CARE</li></Link>
                        </ul>
                    </div>
                    <p className='max-w-[1170px] mx-auto flex justify-between mt-5 text-white'>

                        <p>© 2024 BCH Electric Limited | All right reserved |E-Powered by – Abacus Desk</p>
                        <div className='flex items-center gap-3'>
                            <button className='text-[25px] cursor-pointer hover:text-red-600 duration-500'><FaFacebookSquare /></button>
                            <button className='text-[25px] cursor-pointer hover:text-red-600 duration-500'><FaLinkedin /></button>
                        </div>
                    </p>
                </div>
            </footer>
        </>

    )
}
