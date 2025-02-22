"use client"
import React from 'react'
import Slider, { CustomArrowProps } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SharedTitle from '@/shared/SharedTitle/SharedTitle';
import { Button } from '@nextui-org/react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Image from 'next/image';
import { useQuery } from '@tanstack/react-query';
import { getProductsSlider } from '@/services/products';
import Link from 'next/link';
import Loader from '@/shared/Loader';

interface CustomArrowComponentProps extends CustomArrowProps {
    onClick?: () => void;
}

const CustomPrevArrow: React.FC<CustomArrowComponentProps> = ({ onClick }) => (
    <Button
        isIconOnly
        onClick={onClick}
        className="absolute lg:-left-8 left-0 top-1/2 text-white -translate-y-1/2 z-10 bg-primary hover:bg-opacity-100 rounded-full p-2 transition-all duration-300"
    >
        <FaChevronLeft />
    </Button>
)

const CustomNextArrow: React.FC<CustomArrowComponentProps> = ({ onClick }) => (
    <Button
        isIconOnly
        onClick={onClick}
        className="absolute lg:-right-8 right-0 top-1/2 text-white -translate-y-1/2 z-10 bg-primary hover:bg-opacity-100 rounded-full p-2 transition-all duration-300"
    >
        <FaChevronRight/>
    </Button>
)

const ProductsHome = () => {
    const {data:productsData,isLoading}=useQuery({
        queryKey:["all-products"],
        queryFn:()=>getProductsSlider()
    })

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

    if(isLoading) return <Loader/>

    return (
        <div className='w-full relative flex flex-col lg:px-24 px-4 bg-primary/10'>
            <SharedTitle title="Top Selling Products"/>
            <p className='text-justify mb-8'>Rudraksha beads are sacred seeds revered for their spiritual and healing properties. Rooted in ancient traditions and mentioned in sacred texts, authentic rudraksha is a divine gift from nature, believed to be blessed by Lord Shiva. Each bead carries unique energies that promote mental clarity, emotional balance, and spiritual growth.</p>
            <div className='w-full  pb-12'>
                <Slider {...settings}>
                    {productsData?.products?.map((item:any)=>{ //eslint-disable-line @typescript-eslint/no-explicit-any
                        return(
                            <div className='px-4' key={item._id}>
                                <div className=' w-full bg-white flex flex-col shadow-sm'>
                                    <Link href={`/rudraksha/${item._id}`} className='flex w-full items-center justify-center cursor-pointer'>
                                    <div className='h-[200px] w-full'>
                                            <Image src={item?.img?.[0]} alt='rud' height={1000} width={1000} className='object-cover w-full h-full'/>
                                    </div>
                                    </Link>
                                    <div className='px-4 py-4 flex items-center gap-2 justify-between'>
                                        <h1 className=' font-semibold'>{item.title}</h1>
                                        <div className='bg-primary text-sm rounded-2xl text-white px-4 py-1'>
                                            <p>{item.size}</p>
                                        </div>
                                    </div>
                                        <Link href={`/rudraksha/${item._id}`} className='flex w-full items-center justify-center cursor-pointer'>
                                            <h1 className='font-medium text-primary text-sm underline underline-offset-2 mb-4'>View Details</h1>
                                        </Link>
                                </div>
                            </div>
                        )
                    })}
                </Slider>
            </div>
            <Link href={"/rudraksha"} className='self-center'>
                <Button className='w-fit px-12 mb-8 bg-primary rounded-sm text-white self-center'>Explore More</Button>
            </Link>
        </div>
    )
}

export default ProductsHome
