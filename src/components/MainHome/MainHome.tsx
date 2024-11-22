import { Button, Input } from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'
import { CiSearch } from 'react-icons/ci'
import ProductsHome from './ProductsHome'
import Categories from './Categories'

const MainHome = () => {
    return (
        <>
        <div className='w-full h-[90vh] flex relative'>
            <div className='h-[220px] w-[250px] p-2 rouned-sm bg-white absolute z-[10] left-[38%] top-12'>
                <Image src={"https://images.unsplash.com/photo-1650809652995-85581c240f19?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt='Home' height={1000} width={1000} className='object-cover h-full w-full'/>
            </div>
            <div className='w-1/2 h-full'>
                <Image src={"https://images.unsplash.com/photo-1650809652935-2e5002ba40bf?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt='home' height={1000} width={1000} className='object-cover h-full w-full'/>
            </div>
            <div className='w-1/2 h-full'>
                <div className='bg-zinc-200 h-full flex relative px-12 pl-24'>
                    <div className='h-full absolute inset-0 w-full opacity-[.1]' style={{backgroundImage:"url('/bg.png')",backgroundSize:"cover"}}>
                    </div>
                    <div className='pt-32'>
                        <h1 className='font-medium text-4xl'>
                            Discover the Power of Authentic Rudraksha Beads
                        </h1>
                        <p className='text-lg my-4'>Handpicked, spiritually enriched, and rooted in tradition—our collection of sacred rudraksha beads brings you closer to tranquility, health, and prosperity. Experience the divine energy and unlock your spiritual potential today.
                        </p>
                        <Input classNames={{input:"placeholder:text-gray-500 !text-black",inputWrapper: "!text-black",base:"border-b-[.5px] border-white"}} type="text" size='lg' placeholder="Search what you are looking for..." className='rounded-sm mt-20 w-full' radius='sm' startContent={<CiSearch size={32} className='text-black mr-2'/>} endContent={<><Button className='bg-primary rounded-sm px-8 py-0 text-white' size='sm'>Search</Button></>} />
                        <div className='mt-12 flex items-center gap-4 w-full justify-center'>
                            <Button className='bg-primary rounded-sm px-12 py-0 text-white mt-8'>Explore More</Button>
                            <Button className='bg-primary rounded-sm px-12 py-0 text-white mt-8'>View Categories</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="space-y-12">
                <ProductsHome />
                <Categories />
            </div>
        </>
    )
}

export default MainHome
