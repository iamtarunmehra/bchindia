import Link from 'next/link';
import React from 'react'
import { IoSearchOutline } from "react-icons/io5";

export default function Header() {
    let menu = [
        'Contact', 'customer care', 'downloads', 'news & events', 'blog', 'careers'
    ]
    return (
        <header className='relative z-50'>

            {/* enquiry button */}
            <Link href={'/enquiry'}><button className='fixed top-1/2 -right-[72px] -rotate-90 uppercase hover:bg-gray-800 duration-300 px-[45px] py-[11px] cursor-pointer text-[18px] font-semibold bg-[#D53332] text-white'>
                contact us
            </button></Link>
            {/* header for pc */}
            <div className='w-[100%] lg:block hidden'>
                <div className='max-w-[1170px] mx-auto py-[8px] grid grid-cols-[30%_auto] items-center justify-between'>
                    <img className='w-[228px] h-[85px] object-cover' src='https://bchindia.com/wp-content/uploads/2025/01/2019-12-18.webp' />
                    <nav>
                        <ul className='flex items-center gap-5'>
                            <Link href={'/contact'}><li className='uppercase text-[13px] cursor-pointer hover:text-red-600 font-[500] tracking-widest border-b-2 border-b-transparent hover:border-b-red-600 pb-1 duration-300'>contact</li></Link>
                            <li className='uppercase text-[13px] cursor-pointer hover:text-red-600 font-[500] tracking-widest border-b-2 border-b-transparent hover:border-b-red-600 pb-1 duration-300'>customer care</li>
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

        </header>
    )
}
