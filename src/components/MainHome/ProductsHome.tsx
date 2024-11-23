"use client"
import React from 'react'
import Slider, { CustomArrowProps } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SharedTitle from '@/shared/SharedTitle/SharedTitle';
import { Button } from '@nextui-org/react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Image from 'next/image';

interface CustomArrowComponentProps extends CustomArrowProps {
    onClick?: () => void;
}

const CustomPrevArrow: React.FC<CustomArrowComponentProps> = ({ onClick }) => (
    <Button
        isIconOnly
        onClick={onClick}
        className="absolute -left-8 top-1/2 text-white -translate-y-1/2 z-10 bg-primary hover:bg-opacity-100 rounded-full p-2 transition-all duration-300"
    >
        <FaChevronLeft />
    </Button>
)

const CustomNextArrow: React.FC<CustomArrowComponentProps> = ({ onClick }) => (
    <Button
        isIconOnly
        onClick={onClick}
        className="absolute -right-8 top-1/2 text-white -translate-y-1/2 z-10 bg-primary hover:bg-opacity-100 rounded-full p-2 transition-all duration-300"
    >
        <FaChevronRight/>
    </Button>
)

const ProductsHome = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        autoplay:true,
        pauseOnHover: true,
        autoplaySpeed:4000,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className='w-full relative flex flex-col px-24 bg-primary/10'>
            <SharedTitle title="Top Selling Products"/>
            <p className='text-justify mb-8'>Rudraksha beads are sacred seeds revered for their spiritual and healing properties. Rooted in ancient traditions and mentioned in sacred texts, authentic rudraksha is a divine gift from nature, believed to be blessed by Lord Shiva. Each bead carries unique energies that promote mental clarity, emotional balance, and spiritual growth.</p>
            <div className='w-full  pb-12'>
                <Slider {...settings}>
                    <div className='px-4'>
                        <div className=' w-full bg-white flex flex-col shadow-sm'>
                            <div className='h-[200px] w-full'>
                                <Image src={"https://cdn.dhanshreegems.com/wysiwyg/gemstones/2_mukhi_Rudraksha_.jpg"} alt='rud' height={1000} width={1000} className='object-cover w-full h-full'/>
                            </div>
                            <div className='px-4 py-4 flex items-center justify-between'>
                                <h1 className=' font-semibold'>12 Faced Rudraksha</h1>
                                <div className='bg-primary text-sm rounded-2xl text-white px-4 py-1'>
                                    <p>Big</p>
                                </div>
                            </div>
                            <div className='flex items-center justify-center cursor-pointer'>
                                <h1 className='font-medium text-primary text-sm underline underline-offset-2 mb-4'>View Details</h1>
                            </div>
                        </div>
                    </div>
                    <div className='px-4'>
                        <div className=' w-full bg-white flex flex-col shadow-sm'>
                            <div className='h-[200px] w-full'>
                                <Image src={"https://cdn.dhanshreegems.com/wysiwyg/gemstones/GARBH_GAURI_RUDRAKSHA.jpg"} alt='rud' height={1000} width={1000} className='object-cover w-full h-full'/>
                            </div>
                            <div className='px-4 py-4 flex items-center justify-between'>
                                <h1 className=' font-semibold'>11 Faced Rudraksha</h1>
                                <div className='bg-primary text-sm rounded-2xl text-white px-4 py-1'>
                                    <p>Medium</p>
                                </div>
                            </div>
                            <div className='flex items-center justify-center cursor-pointer'>
                                <h1 className='font-medium text-primary text-sm underline underline-offset-2 mb-4'>View Details</h1>
                            </div>
                        </div>
                    </div>
                    <div className='px-4'>
                        <div className=' w-full bg-white flex flex-col shadow-sm'>
                            <div className='h-[200px] w-full'>
                                <Image src={"https://cdn.dhanshreegems.com/wysiwyg/gemstones/RUDRAKSHA_PENDENT.jpg"} alt='rud' height={1000} width={1000} className='object-cover w-full h-full'/>
                            </div>
                            <div className='px-4 py-4 flex items-center justify-between'>
                                <h1 className=' font-semibold'>12 Faced Rudraksha</h1>
                                <div className='bg-primary text-sm rounded-2xl text-white px-4 py-1'>
                                    <p>Big</p>
                                </div>
                            </div>
                            <div className='flex items-center justify-center cursor-pointer'>
                                <h1 className='font-medium text-primary text-sm underline underline-offset-2 mb-4'>View Details</h1>
                            </div>
                        </div>
                    </div>
                    <div className='px-4'>
                        <div className=' w-full bg-white flex flex-col shadow-sm'>
                            <div className='h-[200px] w-full'>
                                <Image src={"https://cdn.dhanshreegems.com/wysiwyg/gemstones/2_mukhi_Rudraksha_.jpg"} alt='rud' height={1000} width={1000} className='object-cover w-full h-full'/>
                            </div>
                            <div className='px-4 py-4 flex items-center justify-between'>
                                <h1 className=' font-semibold'>9 Faced Rudraksha</h1>
                                <div className='bg-primary text-sm rounded-2xl text-white px-4 py-1'>
                                    <p>Small</p>
                                </div>
                            </div>
                            <div className='flex items-center justify-center cursor-pointer'>
                                <h1 className='font-medium text-primary text-sm underline underline-offset-2 mb-4'>View Details</h1>
                            </div>
                        </div>
                    </div>
                    <div className='px-4'>
                        <div className=' w-full bg-white flex flex-col shadow-sm'>
                            <div className='h-[200px] w-full'>
                                <Image src={"https://cdn.dhanshreegems.com/wysiwyg/gemstones/4_mukhi_Rudraksha_.jpg"} alt='rud' height={1000} width={1000} className='object-cover w-full h-full'/>
                            </div>
                            <div className='px-4 py-4 flex items-center justify-between'>
                                <h1 className=' font-semibold'>7 Faced Rudraksha</h1>
                                <div className='bg-primary text-sm rounded-2xl text-white px-4 py-1'>
                                    <p>Big</p>
                                </div>
                            </div>
                            <div className='flex items-center justify-center cursor-pointer'>
                                <h1 className='font-medium text-primary text-sm underline underline-offset-2 mb-4'>View Details</h1>
                            </div>
                        </div>
                    </div>
                    <div className='px-4'>
                        <div className=' w-full bg-white flex flex-col shadow-sm'>
                            <div className='h-[200px] w-full'>
                                <Image src={"https://cdn.dhanshreegems.com/wysiwyg/gemstones/7_mukhi_Rudraksha_.jpg"} alt='rud' height={1000} width={1000} className='object-cover w-full h-full'/>
                            </div>
                            <div className='px-4 py-4 flex items-center justify-between'>
                                <h1 className=' font-semibold'>11 Faced Rudraksha</h1>
                                <div className='bg-primary text-sm rounded-2xl text-white px-4 py-1'>
                                    <p>Big</p>
                                </div>
                            </div>
                            <div className='flex items-center justify-center cursor-pointer'>
                                <h1 className='font-medium text-primary text-sm underline underline-offset-2 mb-4'>View Details</h1>
                            </div>
                        </div>
                    </div>
                    
                </Slider>
            </div>
            <Button className='w-fit px-12 mb-8 bg-primary rounded-sm text-white self-center'>Explore More</Button>
        </div>
    )
}

export default ProductsHome
