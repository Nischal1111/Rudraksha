"use client"
import { Avatar, Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from '@nextui-org/react'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { CiSearch, CiShoppingCart } from 'react-icons/ci'
import Image from 'next/image'
import { stylishFont } from '@/utils/font'
import Login from '../Login/Login'
import Signup from '../SignUp/SignUp'
import { signOut, useSession } from 'next-auth/react'
import { AuthResponse } from '@/types/types'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import { IoIosArrowDown } from 'react-icons/io'
import SearchModal from './SearchModal'

const Navbar = () => {
    const [open, setOpen] = React.useState(false)
    const [signUpOpen, setSignUpOpen] = React.useState(false)

    const { data: sessionData, status } = useSession()
    const session = sessionData as unknown as AuthResponse
    const isLoggedIn = status === "authenticated";
    const [searchOpen, setSearchOpen] = React.useState(false)

    const cartItems = useSelector((state: RootState) => state.cart.items)

   

    const nav = [
        {
            title: "Home",
            link: "/"
        },
        {
            title: "Rudraksha",
            link: "/rudraksha"
        },
        {
            title: "Mala",
            link: "/mala"
        },
        {
            title: "Bracelet",
            link: "/bracelet"
        },
        {
            title: "Consultation",
            link: "/consultation"
        }
    ]

    const dropdownItems = [
        {
            title: "About",
            link: "/about"
        },
        {
            title: "FAQs",
            link: "/faqs"
        },
        {
            title: "Privacy Policy",
            link: "/privacy-policy"
        },
        {
            title: "Terms and Conditions",
            link: "/terms-and-conditions"
        }
    ]



    const pathname = usePathname()
    const isActive = (path: string) => pathname === path

    const handleLogin = () => {
        setOpen(!open)
    }
    const handleSign = () => {
        setSignUpOpen(!signUpOpen)
    }

    return (
        <>
            <SearchModal isOpen={searchOpen} onOpenChange={setSearchOpen} />
            <div className='shadow-sm top-0 fixed flex flex-col items-center justify-between px-8 py-2 bg-white w-full z-[9999]'>
                <div className='w-full flex justify-between items-center font-medium uppercase text-sm tracking-wide'>
                    <div className='flex gap-20 items-center'>
                        <div className='flex items-center gap-4'>
                            <section className='size-16 rounded-full'>
                                <Image src={'/Logo.webp'} alt='logo' height={1000} width={1000} className='object-cover h-full w-full rounded-full' />
                            </section>
                            <div className='flex flex-col -gap-2'>
                                <h1 className={`${stylishFont.className} text-2xl leading-5`}>Khandbari</h1>
                                <p className='text-xs capitalize text-gray-500'>Rudraksha Suppliers</p>
                            </div>

                        </div>
                        <section className='flex items-center justify-center'>
                            <div className='flex gap-8'>
                                {nav.map(item => (
                                    <Link key={item.title} href={item.link!}>
                                        <div className='group relative'>
                                            <p className='font-normal text-sm text-gray-600 uppercase tracking-wider'>{item.title}</p>
                                            <span
                                                className={`${isActive(item.link!) ? "w-full" : "w-0"} bottom-[-4px] group-hover:w-full absolute bg-primary h-[2px] rounded-full transition-all duration-400`}
                                            ></span>
                                        </div>
                                    </Link>
                                ))}
                                {/* Dropdown for additional links */}
                                <Dropdown>
                                    <DropdownTrigger>
                                        <div className='group relative cursor-pointer'>
                                            <p className='font-normal text-sm text-gray-500 uppercase tracking-wider flex items-center gap-2'>More <IoIosArrowDown/></p>
                                            <span
                                                className={`${isActive("/more") ? "w-full" : "w-0"} bottom-[-4px] group-hover:w-full absolute bg-primary h-[2px] rounded-full transition-all duration-400`}
                                            ></span>
                                        </div>
                                    </DropdownTrigger>
                                    <DropdownMenu aria-label="More options">
                                        {dropdownItems.map((item) => (
                                            <DropdownItem key={item.title}>
                                                <Link href={item.link} className='w-full'>
                                                    {item.title}
                                                </Link>
                                            </DropdownItem>
                                        ))}
                                    </DropdownMenu>
                                </Dropdown>
                            </div>
                        </section>
                    </div>
                    <div className='flex items-center gap-8'>
                        <Button className='bg-primary' size='md' onPress={() => setSearchOpen(true)} isIconOnly><CiSearch size={24} className='text-white' /></Button>

                        {isLoggedIn && 
                            <div className='flex gap-8 items-center relative'>
                                <div className='bg-yellow-500 size-5 absolute top-[-4px] -right-[6px] rounded-full flex items-center justify-center p-2 text-white'>
                                    <p className='text-xs'>{cartItems.length}</p>
                                </div>
                                    <Link href={"/checkout"}>
                                        <Button variant='light' isIconOnly className='bg-transparent text-base text-primary underline underline-offset-4' startContent={<CiShoppingCart size={28} className='text-[#E8B86D]' />}></Button>
                                    </Link>
                                
                            </div>
                        }
                        {isLoggedIn ?
                        
                        <Dropdown>
                        <DropdownTrigger>
                        <div className='flex items-center gap-2 cursor-pointer'>
                            <Avatar
                                color='warning'
                                as="button"
                                size="md"
                                src={`https://ui-avatars.com/api/?name=${session?.user?.name}&background=E4C087&color=ffff`}
                            />
                            <div className='flex flex-col'>
                                <p className='text-gray-600 capitalize'>{sessionData?.user?.name}</p>
                                <p className='text-xs text-gray-400 lowercase'>{sessionData?.user?.email}</p>
                            </div>

                        </div>
                        </DropdownTrigger>
                        <DropdownMenu aria-label="More options">
                                            <DropdownItem key="Profile">
                                                <Link href="/profile" className='w-full'>
                                                    Profile
                                                </Link>
                                            </DropdownItem>
                                            <DropdownItem key="My Orders">
                                                <Link href="/my-orders" className='w-full'>
                                                    My Orders
                                                </Link>
                                            </DropdownItem>
                                        <DropdownItem onClick={() => signOut()}>
                                            Sign out
                                            </DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            :
                            <div className='flex gap-2 items-center'>
                                <Button size='sm' className='text-white rounded-2xl bg-primary px-4' onPress={() => handleLogin()}>Login</Button>
                                
                                <Button variant='light' className='text-primary hover:underline hover:underline-offset-2 cursor-pointer' onPress={() => handleSign()}>Signup</Button>
                            </div>
                        }
                    </div>
                </div>
            </div>
            <Login isOpen={open} onOpenChange={setOpen} />
            <Signup isOpen={signUpOpen} onOpenChange={setSignUpOpen} />
        </>
    )
}

export default Navbar