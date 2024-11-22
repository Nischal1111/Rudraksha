import SharedTitle from '@/shared/SharedTitle/SharedTitle'
import { Button } from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'

const Categories = () => {
    return (
        <div className='w-full px-32 pb-12'>
            <SharedTitle title='Categories'/>
            <div className='flex w-full gap-4 h-[600px]'>
                <div className='w-1/3 h-full relative group overflow-hidden cursor-pointer'>
                    <Image 
                        src={"https://cdn.dhanshreegems.com/wysiwyg/gemstones/RUDRAKSHA_PENDENT.jpg"} 
                        alt='categories' 
                        height={1000} 
                        width={1000} 
                        className='object-cover h-full w-full group-hover:scale-110 transition-all duration-300 ease-in-out'
                    />
                    <div className='absolute bg-black/20 pb-32 flex items-center justify-center inset-0 tracking-widest text-white z-[100]'>
                        <p className='text-4xl font-semibold'>Beads</p>
                    </div>
                    <div className='absolute inset-0 bg-black/40 opacity-0 z-[101] group-hover:opacity-100 flex items-center justify-center transition-all duration-300 ease-in-out'>
                        <Button className='bg-primary rounded-sm px-12 py-0 text-white'>View Details</Button>
                    </div>
                </div>
                <div className='w-1/3 h-full relative group overflow-hidden cursor-pointer'>
                    <Image 
                        src={"https://images.unsplash.com/photo-1685419368164-eb624c946062?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cnVkcmFrc2hhfGVufDB8fDB8fHww"} 
                        alt='categories' 
                        height={1000} 
                        width={1000} 
                        className='object-cover h-full w-full group-hover:scale-110 transition-all duration-300 ease-in-out'
                    />
                    <div className='absolute bg-black/20 pb-32 flex items-center justify-center inset-0 tracking-widest text-white z-[100]'>
                        <p className='text-4xl font-semibold'>Mala</p>
                    </div>
                    <div className='absolute inset-0 bg-black/40 opacity-0 z-[101] group-hover:opacity-100 flex items-center justify-center transition-all duration-300 ease-in-out'>
                        <Button className='bg-primary rounded-sm px-12 py-0 text-white'>View Details</Button>
                    </div>
                </div>
                <div className='w-1/3 h-full relative group overflow-hidden cursor-pointer'>
                    <Image 
                        src={"https://images.pexels.com/photos/6634000/pexels-photo-6634000.jpeg?auto=compress&cs=tinysrgb&w=800"} 
                        alt='categories' 
                        height={1000} 
                        width={1000} 
                        className='object-cover h-full w-full group-hover:scale-110 transition-all duration-300 ease-in-out'
                    />
                    <div className='absolute bg-black/20 pb-32 flex items-center justify-center inset-0 tracking-widest text-white z-[100]'>
                        <p className='text-4xl font-semibold'>Bracelet</p>
                    </div>
                    <div className='absolute inset-0 bg-black/40 opacity-0 z-[101] group-hover:opacity-100 flex items-center justify-center transition-all duration-300 ease-in-out'>
                        <Button className='bg-primary rounded-sm px-12 py-0 text-white'>View Details</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories