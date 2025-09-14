"use client"
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

export default function BannerSlider() {

    const sliderData = [
        { image: 'https://bchindia.com/wp-content/uploads/2020/02/safe-and-protect-2.jpg' },
        { image: 'https://bchindia.com/wp-content/uploads/2020/02/safe-and-protect-2.jpg' },
        { image: 'https://bchindia.com/wp-content/uploads/2020/02/safe-and-protect-2.jpg' },
    ]

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
    };
    
    return (
        <div className='w-[100%]'>
            <Slider {...settings}>
                {sliderData.map((item, index) => {
                    return (
                        <div key={index}>
                            <div style={{ backgroundImage: `url(${item.image})` }} className='w-[100%] h-[60vh] bg-no-repeat bg-cover bg-center'></div>
                        </div>
                    )
                })}

            </Slider>
        </div>
    )
}
