"use client"
import { Button} from '@nextui-org/react'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {FaFacebookF, FaInstagram} from "react-icons/fa"
import {FaXTwitter} from "react-icons/fa6"
import { CiShoppingCart } from 'react-icons/ci'

const Navbar = () => {
    const nav=[
        {
            title:"Home",
            link:"/"
        },
        {
            title:"Rudraksha",
            link:"/trip-types"
        },
        {
            title:"Categories",
            link:"/tailor-made"
        },
        {
            title:"Combinations",
            link:"/tailor-made"
        },
        {
            title:"About",
            link:"/about"
        },
        {
            title:"Consultation",
            link:"/contact"
        }
    ]
    const pathname=usePathname()
    const isActive=(path:string)=>pathname===path
    return (
        <>
        <div className='shadow-sm top-0  flex flex-col items-center justify-between px-16 py-2 bg-primary/5 w-full z-[9999]'>
            <div className='w-full flex justify-between items-center font-medium uppercase text-sm tracking-wide'> 
                <section className='flex gap-4'>
                    <Button isIconOnly className='h-10 w-10 border border-gray-200 hover:border-primary bg-white text-primary hpver:border-primary p-2 rounded-full flex items-center justify-center hover:bg-primary transition duration-300 hover:text-white'>
                        <FaFacebookF size={20}/>
                    </Button>
                    <Button isIconOnly className='h-10 w-10 border border-gray-200 hover:border-primary bg-white text-primary hpver:border-primary p-2 rounded-full flex items-center justify-center hover:bg-primary transition duration-300 hover:text-white'>
                        <FaInstagram size={20}/>
                    </Button>
                    <Button isIconOnly className='h-10 w-10 border border-gray-200 hover:border-primary bg-white text-primary hpver:border-primary p-2 rounded-full flex items-center justify-center hover:bg-primary transition duration-300 hover:text-white'>
                        <FaXTwitter size={20}/>
                    </Button>
                </section>    
                <section className='size-20 rounded-full bg-primary'>

                </section>
                <div className='flex gap-8 items-center relative'>
                    <div className='bg-yellow-500 size-5 absolute top-[-4px] right-[6rem] rounded-full flex items-center justify-center p-2 text-white'>
                        <p className='text-xs'>0</p>
                    </div>
                    <Button variant='light' className='bg-transparent text-base text-primary underline underline-offset-4' startContent={<CiShoppingCart size={28} className='text-[#E8B86D]'/>}>View Cart</Button>
                </div>
                
            </div>
            
            
        </div>
        <section className='w-full flex items-center justify-center pt-4 pb-4 bg-primary/20'>
                <div className='flex gap-8'>
                    {nav.map(item => (
                        <Link key={item.title} href={item.link!}>
                            <div className='group relative'>
                            <p className='font-normal text-sm text-gray-600 uppercase tracking-wider'>{item.title}</p>
                            <span
                                className={` ${isActive(item.link!) ? "w-full" : "w-0"} bottom-[-4px] group-hover:w-full absolute bg-primary h-[2px] rounded-full transition-all duration-400`}
                            ></span>
                            </div>
                        </Link>
                        )
                    )}
                    </div>

                </section>
        </>
    )
}

export default Navbar
