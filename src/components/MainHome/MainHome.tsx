import { Button, Input } from '@nextui-org/react'
import React from 'react'
import { CiSearch } from 'react-icons/ci'
import ProductsHome from './ProductsHome'
import Categories from './Categories'
import CountryBeads from './CountryBeads'
import WhyUs from './Benefits'
import Reviews from './Reviews'
import ChooseUs from './ChooseUs'

const MainHome = () => {
    return (
        <>
        <div className='w-full h-[50vh] flex relative'>
            <div className='w-full h-full'>
                <div className='bg-zinc-200 h-full flex relative px-24'>
                    <div className='h-full absolute inset-0 w-full opacity-[.2]' style={{backgroundImage:"url('/bg.png')",backgroundPosition:"top -200px center",backgroundSize:"cover"}}>
                    </div>
                    <div className='relative top-16'>
                        <h1 className='font-medium text-4xl'>
                            Discover the Power of Authentic Rudraksha Beads
                        </h1>
                        <p className='text-lg my-4'>Handpicked, spiritually enriched, and rooted in tradition—our collection of sacred rudraksha beads brings you closer to tranquility, health, and prosperity. Experience the divine energy and unlock your spiritual potential today.
                        </p>
                        <div className='flex items-center justify-center w-full'>
                            <Input classNames={{input:"placeholder:text-gray-500 !text-black",inputWrapper: "!text-black",base:"border-b-[.5px] border-white"}} type="text" size='lg' placeholder="Search what you are looking for..." className='rounded-sm mt-20 w-3/5' radius='sm' startContent={<CiSearch size={32} className='text-black mr-2'/>} endContent={<><Button className='bg-primary rounded-sm px-8 py-0 text-white' size='sm'>Search</Button></>} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="space-y-12">
                <ProductsHome />
                <Categories />
                <CountryBeads/>
                <WhyUs/>
                <Reviews/>
                <ChooseUs/>
            </div>
        </>
    )
}

export default MainHome
