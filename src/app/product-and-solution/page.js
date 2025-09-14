"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { FaAngleRight } from 'react-icons/fa6'
import { ProductSolutionData } from '../ApiData/ProductSolutionData'

export default function page() {
    let [activeTab, setActiveTab] = useState('pump controllers')
    const specificCategoryData = ProductSolutionData.filter((item) => item.categoryName == activeTab)[0]

    return (
        <div>
            <div className='w-full shadow-md'>
                <p className='max-w-[1170px] mx-auto uppercase  flex items-center text-[15px] gap-2 py-[15px] cursor-pointer'><Link href={'/'}><span>Home</span></Link> <FaAngleRight className='text-[#D53332] cursor-default' /> Enquiry</p>
            </div>
            <div>
                <img className='w-[100%] h-[60vh] object-cover object-center' src='https://bchindia.com/wp-content/uploads/2017/06/BCh.jpg' />
            </div>
            <div className='bg-white max-w-[1170px] mx-auto lg:py-[40px] py-[30px]'>
                <div className='grid md:grid-cols-[23%_auto] gap-10'>
                    <ul>
                        {ProductSolutionData.map((item, index) => {
                            return (
                                <li key={index} onClick={() => setActiveTab(item.categoryName)} className={`py-[20px] hover:text-white hover:bg-[#D53332] duration-300 font-semibold capitalize flex items-center justify-between w-[100%] cursor-pointer text-[17px] tracking-wider mb-1 px-3 ${activeTab === item.categoryName ? 'bg-[#D53332] text-white' : 'bg-gray-200 text-black'} `}>{item.categoryName} <FaAngleRight /></li>
                            )
                        })}
                    </ul>
                    <div className='w-[100%]'>
                        <h3 className='text-[28px] text-red-600 hover:text-black duration-300 cursor-pointer'>{specificCategoryData?.categoryHeading}</h3>
                        <img className='w-[100%] h-[120px] my-5 object-cover' src={specificCategoryData?.categoryImage} />
                        <ul className='grid grid-cols-3 gap-5'>
                            {specificCategoryData?.subCategory.map((subCat, index) => {
                                return (
                                    <div>
                                        <li className='w-[100%] bg-[#D53332] text-white px-3 py-3 cursor-pointer uppercase relative hover:bg-black duration-300'>{subCat.subCategoryName}
                                        </li>

                                        <div className={`${subCat.subSubCategory.length >= 1 ? 'block h-auto' : 'hidden h-0'} border-[1px] border-gray-400 p-3`}>
                                            <ul>
                                                {subCat.subSubCategory.map((subSubCat, subSubCatIndex) => {
                                                    return (
                                                        <p className='hover:text-red-600 duration-300 cursor-pointer'>{subSubCat}</p>
                                                    )
                                                })}

                                            </ul>
                                        </div>


                                    </div>

                                )
                            })}

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
