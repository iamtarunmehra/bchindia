'use client'
import Link from 'next/link';
import React, { useState } from 'react'
import { HiBars3 } from "react-icons/hi2";
import { IoCloseSharp, IoSearchOutline } from "react-icons/io5";

export default function Header() {
    let menu = [
        'Contact', 'customer care', 'downloads', 'news & events', 'blog', 'careers'
    ]
    const [mobileMenu, setMobileMenu] = useState(false)
    return (
        <header className='relative z-50'>

            {/* enquiry button */}
            <Link href={'/enquiry'}><button className='lg:block hidden fixed lg:top-1/2 -right-[72px] -rotate-90 uppercase hover:bg-gray-800 duration-300 px-[45px] lg:py-[11px] py-[15px] cursor-pointer text-[18px] font-semibold bg-[#D53332] text-white'>
                contact us
            </button></Link>

            <Link href={'/enquiry'}><button className='lg:hidden block fixed lg:top-1/2 bottom-0 right-0 lg:-rotate-90 w-full uppercase hover:bg-gray-800 duration-300 px-[45px] py-[12px] cursor-pointer text-[18px] font-semibold bg-[#D53332] text-white'>
                contact us
            </button></Link>
            {/* header for pc */}
            <div className='w-[100%] lg:block hidden overflow-hidden'>
                <div className='max-w-[1170px] mx-auto py-[8px] grid grid-cols-[30%_auto] items-center justify-between'>
                    <img className='w-[228px] h-[85px] object-cover' src='https://bchindia.com/wp-content/uploads/2025/01/2019-12-18.webp' />
                    <nav>
                        <ul className='flex items-center gap-5'>
                            <Link href={'/contact'}><li className='uppercase text-[13px] cursor-pointer hover:text-red-600 font-[500] tracking-widest border-b-2 border-b-transparent hover:border-b-red-600 pb-1 duration-300'>contact</li></Link>
                            <Link href={'/customer-care'}><li className='uppercase text-[13px] cursor-pointer hover:text-red-600 font-[500] tracking-widest border-b-2 border-b-transparent hover:border-b-red-600 pb-1 duration-300'>customer care</li></Link>
                            <li className='uppercase text-[13px] cursor-pointer hover:text-red-600 font-[500] tracking-widest border-b-2 border-b-transparent hover:border-b-red-600 pb-1 duration-300'>downloads</li>
                            <li className='uppercase text-[13px] cursor-pointer hover:text-red-600 font-[500] tracking-widest border-b-2 border-b-transparent hover:border-b-red-600 pb-1 duration-300'>news & events</li>
                            <li className='uppercase text-[13px] cursor-pointer hover:text-red-600 font-[500] tracking-widest border-b-2 border-b-transparent hover:border-b-red-600 pb-1 duration-300'>blog</li>
                            <li className='uppercase text-[13px] cursor-pointer hover:text-red-600 font-[500] tracking-widest border-b-2 border-b-transparent hover:border-b-red-600 pb-1 duration-300'>careers</li>
                        </ul>
                    </nav>
                </div>
                <div className='bg-[#D53332]'>
                    <div className='max-w-[1170px] mx-auto flex justify-between'>
                        <nav>
                            <ul className='text-white flex items-center gap-10'>
                                <Link href={'/product-and-solution'}><li className='uppercase hover:border-b-white border-2 border-transparent duration-500 origin-center py-[15px] font-semibold cursor-pointer tracking-widest '>products & Enclosures</li></Link>
                                <li className='uppercase hover:border-b-white border-2 border-transparent duration-500 origin-center py-[15px] font-semibold cursor-pointer tracking-widest '>Power Solutions</li>
                                <li className='uppercase hover:border-b-white border-2 border-transparent duration-500 origin-center py-[15px] font-semibold cursor-pointer tracking-widest '>Accessories</li>
                                <Link href={'/company'}><li className='uppercase hover:border-b-white border-2 border-transparent duration-500 origin-center py-[15px] font-semibold cursor-pointer tracking-widest '>company</li></Link>
                            </ul>
                        </nav>
                        <div className='w-[300px] flex items-center  '>
                            <input placeholder='Search here...' className='basis-[90%] focus:outline-none text-[14px] px-2 bg-white py-[8px]' type="text" />
                            <IoSearchOutline className='bg-white text-red-600 h-[37px] w-[30px] px-2' />
                        </div>

                    </div>

                </div>
            </div>


            {/* header for mobile */}
            <div className='lg:hidden block w-full z-50 relative'>
                <div className='p-3 flex justify-between items-center '>
                    <img className='w-[150px] object-cover' src='https://cdn-emlhe.nitrocdn.com/MkgNpkZvYKVwPmbOimyJmEkqNYyWtMye/assets/images/optimized/rev-cf616e1/bchindia.com/wp-content/uploads/2025/01/2019-12-18.webp' />
                    <button onClick={() => setMobileMenu(true)} className='text-[35px] text-red-600'><HiBars3 /></button>
                </div>
                <div className=' p-3 m-3 bg-[#D53433] '>
                    <div className='w-full flex items-center  '>
                        <input placeholder='Search here...' className='basis-[90%] focus:outline-none text-[14px] px-2 bg-white py-[8px]' type="text" />
                        <IoSearchOutline className='bg-white text-red-600 h-[37px] w-[30px] px-2' />
                    </div>
                </div>

                <div className={`${mobileMenu ? 'left-0 opacity-100' : 'left-[-100%] opacity-0'} w-[100%] h-[100vh] overflow-y-scroll duration-300 bg-white fixed z-[50] transition-all top-0 ease-in-out`}>
                    <div className='p-3 flex justify-between items-center'>
                        <img className='w-[150px] object-cover' src='https://cdn-emlhe.nitrocdn.com/MkgNpkZvYKVwPmbOimyJmEkqNYyWtMye/assets/images/optimized/rev-cf616e1/bchindia.com/wp-content/uploads/2025/01/2019-12-18.webp' />
                        <button onClick={() => setMobileMenu(false)} className='text-[35px] text-red-600'><IoCloseSharp /></button>
                    </div>
                    <div className=' p-3 m-3 bg-[#D53433] '>
                        <div className='w-full flex items-center  '>
                            <input placeholder='Search here...' className='basis-[90%] focus:outline-none text-[14px] px-2 bg-white py-[8px]' type="text" />
                            <IoSearchOutline className='bg-white text-red-600 h-[37px] w-[30px] px-2' />
                        </div>

                    </div>
                    <ul className='text-[17px]'>
                        <Link href={'/'}><li onClick={() => setMobileMenu(false)} className='capitalize px-3 py-[12px] border-b border-gray-300'>home</li></Link>
                        <Link href={'/product-and-solution'}><li onClick={() => setMobileMenu(false)} className='capitalize px-3 py-[12px] border-b border-gray-300'>Product & Enclosures</li></Link>
                        <li onClick={() => setMobileMenu(false)} className='capitalize px-3 py-[12px] border-b border-gray-300'>power solutions</li>
                        <li onClick={() => setMobileMenu(false)} className='capitalize px-3 py-[12px] border-b border-gray-300'>accessories</li>
                        <Link href={'/company'}><li onClick={() => setMobileMenu(false)} className='capitalize px-3 py-[12px] border-b border-gray-300'>company</li></Link>
                        <Link href={'/contact'}><li onClick={() => setMobileMenu(false)} className='capitalize px-3 py-[12px] border-b border-gray-300'>contact</li></Link>
                        <Link href={'/enquiry'}><li onClick={() => setMobileMenu(false)} className='capitalize px-3 py-[12px] border-b border-gray-300'>enquiry</li></Link>
                        <Link href={'/customer-care'}><li onClick={() => setMobileMenu(false)} className='capitalize px-3 py-[12px] border-b border-gray-300'>customer care</li></Link>
                        <li onClick={() => setMobileMenu(false)} className='capitalize px-3 py-[12px] border-b border-gray-300'>news & events</li>
                        <li onClick={() => setMobileMenu(false)} className='capitalize px-3 py-[12px] border-b border-gray-300'>blog</li>
                        <Link href={'/sales-offices'}><li onClick={() => setMobileMenu(false)} className='capitalize px-3 py-[12px] border-b border-gray-300'>sales offices</li></Link>
                        <li onClick={() => setMobileMenu(false)} className='capitalize px-3 py-[12px] border-b border-gray-300'>downloads</li>
                        <li onClick={() => setMobileMenu(false)} className='capitalize px-3 py-[12px] bg-[#D53332] text-white text-center text-[18px]'>contact us</li>
                    </ul>
                </div>

            </div>

        </header>
    )
}
