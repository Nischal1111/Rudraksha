"use client"
import SharedTitle from '@/shared/SharedTitle/SharedTitle'
import { Tab, Tabs } from '@nextui-org/react'
import React from 'react'
import Image from 'next/image'

const CountryBeads = () => {
    const nepalRudraksha = [
    { name: "1 Mukhi Rudraksha", size: "20-25mm",image:"https://cdn.dhanshreegems.com/wysiwyg/gemstones/1_mukhi_Rudraksha.jpg" },
    { name: "2 Mukhi Rudraksha", size: "18-22mm",image:"https://cdn.dhanshreegems.com/wysiwyg/gemstones/2_mukhi_Rudraksha_.jpg" },
    { name: "3 Mukhi Rudraksha", size: "17-21mm",image:"https://cdn.dhanshreegems.com/wysiwyg/gemstones/3_mukhi_Rudraksha_.jpg" },
    { name: "4 Mukhi Rudraksha", size: "15-20mm",image:"https://cdn.dhanshreegems.com/wysiwyg/gemstones/4_mukhi_Rudraksha_.jpg" },
    { name: "5 Mukhi Rudraksha", size: "14-18mm",image:"https://cdn.dhanshreegems.com/wysiwyg/gemstones/5_mukhi_Rudraksha.jpg" },
    { name: "6 Mukhi Rudraksha", size: "12-16mm",image:"https://cdn.dhanshreegems.com/wysiwyg/gemstones/6_mukhi_Rudraksha.jpg" },
    { name: "7 Mukhi Rudraksha", size: "14-18mm",image:"https://cdn.dhanshreegems.com/wysiwyg/gemstones/7_mukhi_Rudraksha_.jpg" },
    { name: "Gauri Shankar Rudraksha", size: "22-30mm",image:"https://cdn.dhanshreegems.com/wysiwyg/gemstones/GANESH_RUDRAKSHA.jpg" },
];

    const indonesiaRudraksha = [
    { name: "1 Mukhi Rudraksha", size: "10-15mm",image:"https://cdn.dhanshreegems.com/wysiwyg/gemstones/GARBH_GAURI_RUDRAKSHA.jpg" },
    { name: "2 Mukhi Rudraksha", size: "8-12mm",image:"https://cdn.dhanshreegems.com/wysiwyg/gemstones/7_mukhi_Rudraksha_.jpg"},
    { name: "3 Mukhi Rudraksha", size: "7-10mm",image:"https://cdn.dhanshreegems.com/wysiwyg/gemstones/GANESH_RUDRAKSHA.jpg" },
    { name: "4 Mukhi Rudraksha", size: "6-9mm", image:"https://cdn.dhanshreegems.com/wysiwyg/gemstones/5_mukhi_Rudraksha.jpg" },
    { name: "5 Mukhi Rudraksha", size: "5-8mm" ,image:"https://cdn.dhanshreegems.com/wysiwyg/gemstones/4_mukhi_Rudraksha_.jpg"},
    { name: "6 Mukhi Rudraksha", size: "6-10mm",image:"https://cdn.dhanshreegems.com/wysiwyg/gemstones/2_mukhi_Rudraksha_.jpg" },
    { name: "7 Mukhi Rudraksha", size: "8-12mm",image:"https://cdn.dhanshreegems.com/wysiwyg/gemstones/3_mukhi_Rudraksha_.jpg" },
    { name: "Gauri Shankar Rudraksha", size: "10-16mm" ,image:"https://cdn.dhanshreegems.com/wysiwyg/gemstones/1_mukhi_Rudraksha.jpg" },
];


    return (
        <div className='w-full'>
            <SharedTitle title='Exclusively From Us'/>
            <div className='w-full my-8 -mt-4 flex flex-col px-16 items-center justify-center'>
                <Tabs key="tabs" className='mb-4' variant="underlined" aria-label="Tabs variants"
                    classNames={{
                        cursor:" group-data-[selected=true]:bg-primary",
                        tabContent: "group-data-[selected=true]:text-primary text-2xl"
                    }}
                >
                    <Tab key="nepal" title="Nepal">
                        <h1 className='text-justify'>Nepalese rudraksha beads are renowned for their larger size, round or oval shape, and deep, well-defined mukhi lines, symbolizing purity and spiritual power. Sourced from the sacred Himalayan region, these beads are considered highly potent for meditation and spiritual growth. Known for their coarser texture and strong energy, they are ideal for individuals seeking enhanced focus, peace, and enlightenment. Nepal also produces rare varieties like the Gauri Shankar Rudraksha, which symbolizes unity and harmony.</h1>
                        <div className='w-full grid grid-cols-4 gap-4 my-8'>
                            {nepalRudraksha?.map(item=>{
                                return (
                                    <div key={item.name} className='mb-4 w-full bg-white flex flex-col shadow-sm'>
                                        <div className='h-[200px] w-full'>
                                            <Image src={item.image} alt='rud' height={1000} width={1000} className='object-cover w-full h-full'/>
                                        </div>
                                        <div className='px-4 py-4 flex gap-2 items-center justify-between'>
                                            <h1 className=' font-semibold'>{item.name}</h1>
                                            <div className='bg-primary text-sm rounded-2xl text-white px-4 py-1'>
                                                <p>{item.size}</p>
                                            </div>
                                        </div>
                                        <div className='flex items-center justify-center cursor-pointer mb-4'>
                                            <h1 className='font-medium text-primary text-sm underline underline-offset-2'>View Details</h1>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </Tab>
                    <Tab key="indonesia" title="Indonesia">
                        <p className='text-justify'>Indonesian rudraksha beads are smaller, smoother, and lightweight, with finer mukhi lines that give them a polished appearance. They are widely appreciated for their versatility and suitability for daily wear as jewelry or malas. While smaller in size, these beads still carry potent spiritual energy, making them a popular choice for subtle energy balancing and meditation. Their affordability and accessibility make Indonesian rudraksha beads ideal for those seeking continuous spiritual benefits in a more contemporary form.</p>
                        <div className='w-full grid grid-cols-4 gap-4 my-8'>
                            {indonesiaRudraksha?.map(item=>{
                                return (
                                    <div key={item.name} className='mb-4 w-full bg-white flex flex-col shadow-sm'>
                                        <div className='h-[200px] w-full'>
                                            <Image src={item.image} alt='rud' height={1000} width={1000} className='object-cover w-full h-full'/>
                                        </div>
                                        <div className='px-4 py-4 flex gap-2 items-center justify-between'>
                                            <h1 className=' font-semibold'>{item.name}</h1>
                                            <div className='bg-primary text-sm rounded-2xl text-white px-4 py-1'>
                                                <p>{item.size}</p>
                                            </div>
                                        </div>
                                        <div className='flex items-center justify-center cursor-pointer mb-4'>
                                            <h1 className='font-medium text-primary text-sm underline underline-offset-2'>View Details</h1>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </Tab>
                </Tabs>
            </div>
        </div>
    )
}

export default CountryBeads
