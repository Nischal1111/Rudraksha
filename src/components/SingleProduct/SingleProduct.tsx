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
import { IoBagAddOutline } from 'react-icons/io5';
import { IoMdCall } from 'react-icons/io';
import { useQuery } from '@tanstack/react-query';
import { getSingleProduct } from '@/services/products';
import Loader from '@/shared/Loader';
import { useParams } from 'next/navigation';

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
  const id=useParams().id as string

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

  const {data:singleProduct,isLoading}=useQuery({
    queryKey: ['singleProduct',id],
    queryFn:()=>getSingleProduct(id),
    enabled:!!id
  })
  const details=[
    {
      title:"Size",
      value:`${singleProduct?.product?.size}`
    },
    {
      title:"Weight",
      value:`${singleProduct?.product?.weight}`
      },
      {
        title:"Country",
        value:`${singleProduct?.product?.country}`
        },
        {
          title:"Faces",
          value:`${singleProduct?.product?.faces} faces`
          },
          {
            title:"Price",
            value:`$${singleProduct?.product?.price}`
          }
  ]

  useEffect(() => {
    if (sliderRef1.current && sliderRef2.current) {
      setNav1(sliderRef1.current);
      setNav2(sliderRef2.current);
    }
  }, []);

  if(isLoading)return <Loader/>

  return (
    <div className='flex flex-col px-32 py-4'>
        <Breadcrumbs 
          itemClasses={{
            item: "text-gray-600 data-[current=true]:text-black",
            separator: "text-black/40",
          }}
        >
          <BreadcrumbItem href='/'>Home</BreadcrumbItem>
          <BreadcrumbItem href='/rudraksha'>Products</BreadcrumbItem>
          <BreadcrumbItem className='text-primary opacity-[1]'>{singleProduct?.product?.title}</BreadcrumbItem>
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
              {singleProduct?.product?.img.map((image:string,index:number)=>(     
                <div className='px-0' key={index}>
                  <div className='h-[400px]'>
                    <Image src={image} alt='rud' height={1000} width={1000} className='object-cover w-full h-full'/>
                  </div>
                </div>
              ))}
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
              {singleProduct?.product?.img.map((image:string,index:number)=>(
                <div className='px-1' key={index}>
                  <div className='h-[120px]'>
                    <Image src={image} alt='rud' height={1000} width={1000} className='object-cover w-full h-full'/>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <div className='w-1/2 py-4'>
              <h1 className={`${josefin.className} text-4xl`}>{singleProduct?.product?.title}</h1>
              <p className='my-6 text-3xl text-primary'>${singleProduct?.product?.price}</p>
              <p className='text-justify text-sm'><span className='text-sm font-medium mb-2'>Description:</span><br />
              {singleProduct?.product?.description}
              </p>
              <p className='flex gap-2 items-center my-4'><CiCircleCheck className='text-primary' size={25}/>In stock - 56 left - Ready to ship</p>
              <Button startContent={<IoBagAddOutline className='text-white' size={20}/>} className='bg-primary flex items-center rounded-sm px-8 py-0 my-8 text-white'>Add to cart</Button>
              <div className="w-full relative shadow-md flex items-center justify-between py-8 px-6 rounded-sm bg-gray-100">
                <div className="absolute inset-0">
                  <Image 
                    src="https://images.unsplash.com/photo-1650809652935-2e5002ba40bf?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="bg-image" 
                    layout="fill" 
                    objectFit="cover" 
                    className="z-0"
                  />
                  <div className="absolute inset-0 bg-black opacity-40"></div>
                </div>
                <div className="relative z-10 flex items-center justify-between w-full">
                  <h1 className={`${josefin.className} text-white text-2xl font-semibold`}>Need help in selection?</h1>
                  <Button startContent={<IoMdCall className='text-white' size={20}/>} className="bg-primary rounded-sm text-sm px-6 py-4 text-white ml-4">Consult with us</Button>
                </div>
              </div>
          </div>
        </div>

        <div className='my-2 w-full flex items-center justify-between bg-primary/10 px-20 py-6'>
              <div className='border border-primary  rounded-3xl px-4 py-2 text-sm'>
                <h1>Originated in Nepal</h1>
              </div>
              <div className='border border-primary  rounded-3xl px-6 py-2 text-sm'>
                <h1>IRL Certificate</h1>
              </div>
              <div className='border border-primary rounded-3xl px-6 py-2 text-sm'>
                <h1>Authenticity Guaranteed</h1>
              </div>
              <div className='border border-primary rounded-3xl px-6 py-2 text-sm'>
                <h1>Expert Rating</h1>
              </div>
              <div className='border border-primary rounded-3xl px-6 py-2 text-sm'>
                <h1>100% Secured Payment</h1>
              </div>
        </div>

        <div className='my-4 w-full bg-primary/10 px-32 pb-12'>
              <div className='flex items-center justify-center w-full'>
                <SharedTitle title='Product Specifications' classname='text-3xl'/>
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