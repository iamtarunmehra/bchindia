import React from 'react'
import { FaLinkedin, FaLinkedinIn } from 'react-icons/fa6'
import { FaFacebookSquare } from "react-icons/fa";
import ContactUs from '../homePageComponents/ContactUs';


export default function Footer() {
    return (

        <>
            <footer className='bg-white w-full'>
                <ContactUs />
                <div className='w-full lg:py-[40px]  lg:p-0 p-3 py-[60px] bg-gradient-to-r from-gray-600 via-gray-700 to-black/90'>
                    <div className="max-w-[1170px] mx-auto border-b-2 border-white pb-7 text-white grid lg:grid-cols-5 sm:grid-cols-2 grid-cols-1 lg:gap-0 gap-3">
                        <ul>
                            <li className=' lg:mb-3 uppercase text-[20px]'>Product range</li>
                            <li className='capitalize my-[10px]'>industrial products</li>
                            <li className='capitalize my-[10px]'>motor starter</li>
                            <li className='capitalize my-[10px]'>enclosure</li>
                            <li className='capitalize my-[10px]'>industrial solutions</li>
                            <li className='lg:mt-[40px] mt-2'><img className='mb-4 lg:w-auto w-[160px]' src="https://bchindia.com/wp-content/uploads/2019/06/google-play-download.png" alt="" /></li>
                        </ul>
                        <ul>
                            <li className=' lg:mb-3 uppercase text-[20px]'>Applications</li>
                            <li className='capitalize my-[10px]'>power control</li>
                            <li className='capitalize my-[10px]'>motor control</li>
                            <li className='capitalize my-[10px]'>detection & sensing</li>
                            <li className='capitalize my-[10px]'>heavy machinery control</li>
                        </ul>
                        <ul>
                            <li className=' lg:mb-3 uppercase text-[20px]'>industries</li>
                            <li className='capitalize my-[10px]'>agriculture</li>
                            <li className='capitalize my-[10px]'>railways</li>
                            <li className='capitalize my-[10px]'>mining</li>
                            <li className='capitalize my-[10px]'>steel</li>
                        </ul>
                        <ul>
                            <li className=' lg:mb-3 uppercase text-[20px]'>other links</li>
                            <li className='capitalize my-[10px]'>download</li>
                            <li className='capitalize my-[10px]'>download enclosure drawings</li>
                            <li className='capitalize my-[10px]'>blog</li>
                            <li className='capitalize my-[10px]'>news & events</li>
                            <li className='capitalize my-[10px]'>enquiry</li>
                            <li className='capitalize my-[10px]'>resources</li>
                            <li className='capitalize my-[10px]'>privacy policy</li>
                            <li className='capitalize my-[10px]'>FAQs</li>

                        </ul>
                        <ul>
                            <li className=' lg:mb-3 uppercase text-[20px]'>company</li>
                            <li className='capitalize my-[10px]'>overview</li>
                            <li className='capitalize my-[10px]'>sales and distribution</li>
                            <li className='capitalize my-[10px]'>R&D and quality</li>
                            <li className='capitalize my-[10px]'>manufacturing</li>
                            <li className='capitalize my-[10px]'>contact</li>
                            <li className='capitalize my-[10px]'>CAREERS</li>
                            <li className='capitalize my-[10px]'>CUSTOMER CARE</li>
                        </ul>
                    </div>
                    <p className='max-w-[1170px] mx-auto flex justify-between mt-5 text-white'>

                        <p>© 2024 BCH Electric Limited | All right reserved |E-Powered by – Abacus Desk</p>
                        <div className='flex items-center gap-3'>
                            <button className='text-[25px] cursor-pointer hover:text-red-600 duration-300'><FaFacebookSquare /></button>
                            <button className='text-[25px] cursor-pointer hover:text-red-600 duration-300'><FaLinkedin /></button>
                        </div>
                    </p>
                </div>
            </footer>
        </>

    )
}
