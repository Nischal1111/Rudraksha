import React from 'react'
import { Button, Divider } from '@nextui-org/react'
import { FiFacebook } from 'react-icons/fi'
import { FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { BsArrowRight } from 'react-icons/bs'

const FooterLink = ({ children}:{children:string}) => (
  <p className="text-sm font-semibold flex items-center gap-2 group cursor-pointer text-zinc-800 hover:text-black">
    <span className="group-hover:translate-x-1 group-hover:underline transition-all duration-300">
      {children}
    </span>
    <BsArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={12} />
  </p>
)

const Footer = () => {
    const date = new Date().getFullYear()
    return (
        <>
            <main className='bg-primary/20 px-4 sm:px-8 md:px-16 lg:px-32 mt-12 py-8 pt-16 flex flex-col gap-8'>
                <main className='flex flex-col md:flex-row items-start justify-between gap-12 md:gap-8'>
                    <section className='text-black flex flex-col gap-6 w-full md:w-auto'>
                        <div className='text-black flex flex-col gap-2'>
                            <h1 className='font-semibold text-lg'>Need Help ?</h1>
                            <div className='w-24 bg-black h-[1px]'></div>
                        </div>
                        <div className='text-black'>
                            <p className='font-medium text-lg'>Call Us</p>
                            <p className='font-semibold text-sm'>Phone: 014892842</p>
                            <p className='font-semibold text-sm'>Mobile: 9843729421</p>
                        </div>
                        <div className='text-black'>
                            <p className='font-medium text-lg'>Email Us</p>
                            <p className='font-semibold text-sm'>info@khadbari.com</p>
                        </div>
                        <div className='text-black'>
                            <p className='font-medium text-lg'>Follow Us On</p>
                            <div className='flex gap-4 mt-2'>
                                <Button isIconOnly size='sm' className='bg-primary text-white'>
                                    <FiFacebook size={22} className='transition duration-300'/>
                                </Button>
                                <Button isIconOnly size='sm' className='bg-pink-400 text-white'>
                                    <FaInstagram size={20} className='transition duration-300'/>      
                                </Button>
                                <Button isIconOnly size='sm' className='bg-black text-white'>
                                    <FaXTwitter size={20} className='transition duration-300'/>
                                </Button>
                            </div>
                        </div>
                    </section>

                    <section className='text-black flex flex-col gap-6 w-full md:w-auto'>
                        <div className='text-black flex flex-col gap-2'>
                            <h1 className='font-semibold text-lg'>Quick Links</h1>
                            <div className='w-24 bg-black h-[1px]'></div>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <FooterLink>Home</FooterLink>
                            <FooterLink>Rudraksha</FooterLink>
                            <FooterLink>Categories</FooterLink>
                            <FooterLink>About Us</FooterLink>
                            <FooterLink>Consultation</FooterLink>
                        </div>
                    </section>

                    <section className='text-black flex flex-col gap-6 w-full md:w-auto'>
                        <div className='text-black flex flex-col gap-2'>
                            <h1 className='font-semibold text-lg'>Extra Links</h1>
                            <div className='w-24 bg-black h-[1px]'></div>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <FooterLink>Privacy Policy</FooterLink>
                            <FooterLink>Our Team</FooterLink>
                            <FooterLink>FAQs</FooterLink>
                            <FooterLink>Terms and Conditions</FooterLink>
                            <FooterLink>Privacy Policy</FooterLink>
                        </div>
                    </section>

                    <section className='text-black flex flex-col gap-6 w-full md:w-auto'>
                        <div className='text-black flex flex-col gap-2'>
                            <h1 className='font-semibold text-lg'>Our Services</h1>
                            <div className='w-24 bg-black h-[1px]'></div>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <FooterLink>Customized Products</FooterLink>
                            <FooterLink>Free Consulation</FooterLink>
                            <FooterLink>Social Cause</FooterLink>
                        </div>
                    </section>
                </main>
                <main className='flex flex-col w-full gap-4 mt-4 items-center justify-center'>
                    <Divider className='bg-gray-600'/>
                    <div className='flex flex-col sm:flex-row items-center w-full justify-between text-gray-700 gap-2 text-center sm:text-left'>
                        <p>Copyright © {date} by Khadbari Rudraskha Suppliers</p>
                        <p>© Developed by Nischal Neupane and Rabin Bhattarai</p>
                    </div>
                </main>
            </main>
        </>
    )
}

export default Footer