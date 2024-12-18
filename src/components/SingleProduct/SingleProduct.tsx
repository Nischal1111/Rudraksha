"use client"
import { BreadcrumbItem, Breadcrumbs, Button } from '@nextui-org/react'
import React, { useEffect, useRef, useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Slider, { CustomArrowProps } from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import { josefin } from '@/utils/font';
import { CiCircleCheck } from 'react-icons/ci';
import SharedTitle from '@/shared/SharedTitle/SharedTitle';

interface CustomArrowComponentProps extends CustomArrowProps {
    onClick?: () => void;
}

const CustomPrevArrow: React.FC<CustomArrowComponentProps> = ({ onClick }) => (
    <Button
        isIconOnly
        onClick={onClick}
        className="absolute left-2 top-1/2 text-white -translate-y-1/2 z-10 bg-primary/40 hover:bg-opacity-100 rounded-full p-2 transition-all duration-300"
    >
        <FaChevronLeft />
    </Button>
)

const CustomNextArrow: React.FC<CustomArrowComponentProps> = ({ onClick }) => (
    <Button
        isIconOnly
        onClick={onClick}
        className="absolute right-2 top-1/2 text-white -translate-y-1/2 z-10 bg-primary/40 hover:bg-opacity-100 rounded-full p-2 transition-all duration-300"
    >
        <FaChevronRight/>
    </Button>
)

const SingleProduct = () => {
  const [nav1, setNav1] = useState<Slider | null>(null);
  const [nav2, setNav2] = useState<Slider | null>(null);
  const sliderRef1 = useRef<Slider | null>(null);
  const sliderRef2 = useRef<Slider | null>(null);

  const settings = {
        infinite: true,
        speed: 500,
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
  const settings2 = {
        infinite: true,
        speed: 500,
        arrows: false,
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

  const details=[
    {
      title:"Size",
      value:"20-25mm"
    },
    {
      title:"Weight",
      value:"0.5-0.7g"
      },
      {
        title:"Color",
        value:"Brown"
        },
        {
          title:"Faces",
          value:"6 mukhis"
          },
          {
            title:"Price",
            value:"$1200"
          }
  ]

  useEffect(() => {
    if (sliderRef1.current && sliderRef2.current) {
      setNav1(sliderRef1.current);
      setNav2(sliderRef2.current);
    }
  }, []);

  return (
    <div className='flex flex-col px-44 py-4'>
        <Breadcrumbs 
          itemClasses={{
            item: "text-gray-600 data-[current=true]:text-black",
            separator: "text-black/40",
          }}
        >
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem>Products</BreadcrumbItem>
          <BreadcrumbItem className='text-primary opacity-[1]'>12 Mukhi Rudraksha</BreadcrumbItem>
        </Breadcrumbs>
        <div className='w-full flex my-6 gap-8'>
          <div className='w-1/2'>
            <Slider 
              {...settings}
              asNavFor={nav2 || undefined} 
              ref={(slider) => {
                sliderRef1.current = slider;
              }}
            >
              <div className='px-0'>
                <div className='h-[400px]'>
                  <Image src={"https://cdn.dhanshreegems.com/wysiwyg/gemstones/2_mukhi_Rudraksha_.jpg"} alt='rud' height={1000} width={1000} className='object-cover w-full h-full'/>
                </div>
              </div>
              <div className='px-0'>
                <div className='h-[400px]'>
                  <Image src={"https://cdn.dhanshreegems.com/wysiwyg/gemstones/GARBH_GAURI_RUDRAKSHA.jpg"} alt='rud' height={1000} width={1000} className='object-cover w-full h-full'/>
                </div>
              </div>
              <div className='px-0'>
                <div className='h-[400px]'>
                  <Image src={"https://cdn.dhanshreegems.com/wysiwyg/gemstones/RUDRAKSHA_PENDENT.jpg"} alt='rud' height={1000} width={1000} className='object-cover w-full h-full'/>
                </div>
              </div>
              <div className='px-0'>
                <div className='h-[400px]'>
                  <Image src={"https://cdn.dhanshreegems.com/wysiwyg/gemstones/2_mukhi_Rudraksha_.jpg"} alt='rud' height={1000} width={1000} className='object-cover w-full h-full'/>
                </div>
              </div>
            </Slider>
            <Slider
              asNavFor={nav1 || undefined}
              ref={(slider) => {
                sliderRef2.current = slider;
              }}
              {...settings2}
              slidesToShow={4}
              swipeToSlide={true}
              focusOnSelect={true}
            >
              <div className='px-1'>
                <div className='h-[120px]'>
                  <Image src={"https://cdn.dhanshreegems.com/wysiwyg/gemstones/2_mukhi_Rudraksha_.jpg"} alt='rud' height={1000} width={1000} className='object-cover w-full h-full'/>
                </div>
              </div>
              <div className='px-1'>
                <div className='h-[120px]'>
                  <Image src={"https://cdn.dhanshreegems.com/wysiwyg/gemstones/GARBH_GAURI_RUDRAKSHA.jpg"} alt='rud' height={1000} width={1000} className='object-cover w-full h-full'/>
                </div>
              </div>
              <div className='px-1'>
                <div className='h-[120px]'>
                  <Image src={"https://cdn.dhanshreegems.com/wysiwyg/gemstones/RUDRAKSHA_PENDENT.jpg"} alt='rud' height={1000} width={1000} className='object-cover w-full h-full'/>
                </div>
              </div>
              <div className='px-1'>
                <div className='h-[120px]'>
                  <Image src={"https://cdn.dhanshreegems.com/wysiwyg/gemstones/2_mukhi_Rudraksha_.jpg"} alt='rud' height={1000} width={1000} className='object-cover w-full h-full'/>
                </div>
              </div>
            </Slider>
          </div>
          <div className='w-1/2 py-4'>
              <h1 className={`${josefin.className} text-4xl`}>12 Mukhi Rudraksha</h1>
              <p className='my-6 text-3xl text-primary'>$1200.00</p>
              <p className='text-justify text-sm'><span className='text-sm font-medium mb-2'>Description:</span><br />
                The Seventeen Mukhi Rudraksha represents Lord Vishwakarma who represents crafting and creativity. It is said that with the blessings of 17 Mukhi, an individual&apos;s life is crafted for better and materialistic fulfillment is granted. This Rudraksha is famous because it fulfills the wearer&apos;s desire in a short span of time and grants sudden wealth.
              </p>
              <p className='flex gap-2 items-center my-4'><CiCircleCheck className='text-primary' size={25}/>In stock - 56 left - Ready to ship</p>
              <Button className='bg-primary rounded-sm px-12 py-0 my-4 text-white'>Add to cart</Button>
              <div className='w-full bg-zinc-100 px-6 rounded-sm shadow-md flex items-center justify-between py-8'>
                  <h1>Need help in selection ?</h1>
                  <Button className='bg-primary rounded-sm px-12 py-0 text-white ml-4'>Consult with us</Button>
              </div>
          </div>
        </div>

        <div className='my-4 w-full bg-primary/10 px-32 pb-12'>
              <div className='flex items-center justify-center w-full'>
                <SharedTitle title='Product Specifications'/>
              </div>
              <div className='grid grid-cols-2 gap-x-20 gap-y-4'>
                  {
                    details.map((item)=>{
                      return(
                          <div key={item.value} className='w-full flex items-center justify-between font-semibold'>
                            <h1 className='font-normal'>{item.title}</h1>
                            <h1>{item.value}</h1>
                        </div>
                      )
                    })
                  }
                  
              </div>
        </div>
    </div>
  )
}

export default SingleProduct