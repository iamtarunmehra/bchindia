"use client"
import Link from 'next/link';
import React from 'react'
import { FaAngleRight } from "react-icons/fa6";


export default function AboutUs() {
    const data = [
        { title: 'motor starter and SUBMERSIBLE PUMP STARTERS', image: 'https://bchindia.com/wp-content/uploads/2016/12/Moter-Starters-Submersible-Pump-Starters-Thumb.png' },
        { title: 'industrial products', image: 'https://bchindia.com/wp-content/uploads/2016/12/Moter-Starters-Submersible-Pump-Starters-Thumb.png' },
        { title: 'industrial enclosures', image: 'https://bchindia.com/wp-content/uploads/2016/12/Moter-Starters-Submersible-Pump-Starters-Thumb.png' },
        { title: 'industrial solutions', image: 'https://bchindia.com/wp-content/uploads/2016/12/Moter-Starters-Submersible-Pump-Starters-Thumb.png' },
    ]
    return (
        <div className='w-[100%]'>
            <div className="max-w-[1170px] mx-auto lg:p-0 p-3 lg:my-[40px] my-[20px]">
                <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-10">
                    {data.map((item, index) => {
                        return (
                            <Link href={`/product-category/${item.title.toLowerCase().replace(/[^a-zA-Z0-9]/g, "-")}`}><div key={index} className='bg-[#E3E3E3] w-[100%] h-[350px] px-5 pt-5 cursor-pointer group'>
                                <div className='grid grid-cols-[95%_auto] items-center'>
                                    <h2 className='text-[18px] font-semibold group-hover:text-red-600 duration-300 uppercase'>{item.title}</h2>
                                    <p className='text-red-600 text-[18px]'><FaAngleRight /></p>
                                </div>
                                <div className='h-[70%] flex items-center'>
                                    <img src={item.image} />
                                </div>
                            </div></Link>
                        )
                    })}
                </div>
                <div className='grid md:grid-cols-2 items-start gap-10 lg:my-[40px] my-[20px]'>
                    <div className="">
                        <h2 className='text-red-600 text-[22px] uppercase font- mb-2'>ABOUT BCH ELECTRIC LIMITED</h2>
                        <p className='tracking-wide leading-[25px]'>An ISO 9001:2015 & ISO 14001:2015 Company, is one of today&#39;s well recognized Switchgear & Low Voltage Panel manufacturer of low voltage electrical and electronic controls in India. The Company was established in 1965 as a joint venture between Cutler-Hammer, USA, and Indian partners. Since 1977, it is a wholly owned Indian company with global business connections</p>
                        <button className='text-red-600 flex items-center gap-2 cursor-pointer hover:underline mt-1'>know more <FaAngleRight /></button>
                        <img className='w-[100%] h-[300px] object-cover' src="https://bchindia.com/wp-content/uploads/2016/12/Moter-Starters-Submersible-Pump-Starters-Thumb.png" alt="" />
                    </div>
                    <div>
                        <div className="w-[100%] mb-[25px] grid md:grid-cols-[40%_45%] gap-5">
                            <img className='w-[100%] h-[180px] object-cover' src="https://bchindia.com/wp-content/uploads/2016/12/Moter-Starters-Submersible-Pump-Starters-Thumb.png" alt="" />
                            <div className='py-[25px] px-10 bg-[#F8F8F8]'>
                                <h2 className='uppercase text-red-600 text-[18px]'>50 Years of <br /> reliability</h2>
                                <p>
                                    completed 50 years of customer services in years 2015-16
                                </p>
                            </div>
                        </div>
                        <div className="w-[100%] mb-[25px] grid md:grid-cols-[40%_45%] gap-5">
                            <img className='w-[100%] h-[180px] object-cover' src="https://bchindia.com/wp-content/uploads/2016/12/Moter-Starters-Submersible-Pump-Starters-Thumb.png" alt="" />
                            <div className='py-[25px] px-10 bg-[#F8F8F8]'>
                                <h2 className='uppercase text-red-600 text-[18px]'>50 Years of <br /> reliability</h2>
                                <p>
                                    completed 50 years of customer services in years 2015-16
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}
