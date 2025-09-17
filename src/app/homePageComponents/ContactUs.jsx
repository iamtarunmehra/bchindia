"use client"
import React, { useEffect, useState } from 'react'

export default function ContactUs() {

    const [captcha, setCaptcha] = useState("");
    const [userInput, setUserInput] = useState("");
    const [message, setMessage] = useState("");


    const generateCaptcha = () => {
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let result = "";
        for (let i = 0; i < 6; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        setCaptcha(result);
    };

    // Generate captcha on component mount
    useEffect(() => {
        generateCaptcha();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (userInput === captcha) {
            setMessage("Captcha matched ✅");
        } else {
            setMessage("Captcha does not match ❌");
            generateCaptcha(); // regenerate captcha on failure
        }
        setUserInput("");
    };
    return (
        <div className='w-[100%] py-[40px] overflow-hidden'>
            <div className="max-w-[1170px] mx-auto lg:p-0 lg:pt-12 p-3 border-t pt-12 border-red-600 grid md:grid-cols-2 gap-12">

                <div className='text-[18px]'>
                    <h2 className='text-[24px] text-[#D53332]  uppercase mb-3'>get in touch</h2>
                    <p className='mb-3 text-[20px]'>Corporate & Registered Office</p>
                    <p>1105, New Delhi House, 27, Barakhamba Road, New Delhi - 110 001</p>
                    <p>Tel. : <span className='text-blue-700 hover:text-[#D53332] duration-200 cursor-pointer underline'>91-11-436815514</span></p>
                    <p>Toll Free. : <span className='text-blue-700 hover:text-[#D53332] duration-200 cursor-pointer underline'>1800 103 9262</span></p>
                    <p>E-mail : <span className='text-blue-700 hover:text-[#D53332] duration-200 cursor-pointer underline'>marketing@bchindia.com</span></p>

                    <h2 className='my-3 text-[20px]'>Careers</h2>
                    <p>Please share your Resume or Profile at <span className='text-blue-700 hover:text-[#D53332] duration-200 cursor-pointer underline'>working@bchindia.com</span>. We will contact you in case we have any job opening matching your profile.</p>

                    <button>our sales offices</button>
                </div>

                <div className='w-[100%]'>
                    <div className='max-w-[1170px] mx-auto'>
                        <h2 className='text-[24px] text-[#D53332]  uppercase mb-3'>contact us</h2>
                        <p className='font-semibold mb-2'>Get a response within maximum 2 days</p>
                        <form className='w-[100%]' action="">
                            <div className='grid md:grid-cols-2 mb-7 gap-10'>
                                <input className='border-[1px] w-[100%] placeholder:text-gray-400 rounded-[5px] border-gray-500 py-[10px] px-4' type="text" placeholder='NAME*' />
                                <input className='border-[1px] w-[100%] placeholder:text-gray-400 rounded-[5px] border-gray-500 py-[10px] px-4' type="text" placeholder="COMPANY NAME" />
                            </div>
                            <div className='grid md:grid-cols-2 my-7 gap-10'>
                                <input className='border-[1px] w-[100%] placeholder:text-gray-400 rounded-[5px] border-gray-500 py-[10px] px-4' type="text" placeholder='YOUR BUSINESS EMAIL*' />
                                <input className='border-[1px] w-[100%] placeholder:text-gray-400 rounded-[5px] border-gray-500 py-[10px] px-4' type="text" placeholder="PHONE NUMBER*" />
                            </div>
                            <div className='grid md:grid-cols-2 my-7 gap-10'>
                                <input className='border-[1px] w-[100%] placeholder:text-gray-400 rounded-[5px] border-gray-500 py-[10px] px-4' type="text" placeholder='CITY*' />
                                <select className='border-[1px] rounded-[5px] border-gray-500 py-[10px] px-4' name="" id="">
                                    <option value="">India</option>
                                    <option value="">Australia</option>
                                    <option value="">New York</option>
                                    <option value="">England</option>
                                    <option value="">Australia</option>
                                    <option value="">Australia</option>
                                    <option value="">Australia</option>
                                    <option value="">Australia</option>
                                    <option value="">Australia</option>
                                </select>

                            </div>
                            <textarea className='border-[1px] w-full placeholder:text-gray-400 rounded-[5px] border-gray-500 py-[10px] px-4' type="text" placeholder="TYPE YOUR QUERY HERE" />
                            <div className="w-full mt-7 h-[150px] flex flex-col items-center justify-center gap-2 border p-4">
                                <div className="w-full h-[50px] flex items-center justify-center bg-gray-200 text-xl font-bold tracking-widest">
                                    {captcha}
                                </div>
                                <form onSubmit={handleSubmit} className="flex gap-2">
                                    <input
                                        type="text"
                                        value={userInput}
                                        onChange={(e) => setUserInput(e.target.value)}
                                        placeholder="Enter captcha"
                                        className="border px-2 py-1"
                                    />
                                    <button type="submit" className="bg-blue-500 text-white px-3 py-1">
                                        Verify
                                    </button>
                                    <button
                                        type="button"
                                        onClick={generateCaptcha}
                                        className="bg-gray-500 text-white px-3 py-1"
                                    >
                                        Refresh
                                    </button>
                                </form>
                                {message && <p className="mt-2">{message}</p>}
                            </div>
                            <button className='w-full py-[10px] text-center uppercase hover:bg-[#D53332] hover:text-white duration-300  text-[#D53332] border hover:border-transparent border-gray-700 mt-2 rounded-[5px] cursor-pointer'>Submit your query</button>
                        </form>

                    </div>

                </div>

            </div>
        </div>
    )
}
