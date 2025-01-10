"use client"
import React from 'react'
import { IoArrowBack } from "react-icons/io5";
import { useSession } from 'next-auth/react'
import { AuthResponse } from '@/types/types'
import { Avatar, Button } from '@nextui-org/react'
import {Input} from "@nextui-org/react";
import { FaUser } from "react-icons/fa";


const Profile = () => {
     const { data: sessionData } = useSession()
        const session = sessionData as unknown as AuthResponse
  return (
    <div className="w-full px-20 py-10">
        <div className='flex gap-14'>
             <IoArrowBack size={35} className="cursor-pointer" />
             <h1 className='text-3xl font-semibold'>My Profile</h1>
        </div>
        <div className='flex gap-32'>
        <div className='flex flex-col gap-14 items-center mt-9 px-8 py-6 w-1/4'>
        <div>
        <Avatar
        className='w-24 h-24'
        color='warning'
        as="button"
        src={`https://ui-avatars.com/api/?name=${session?.user?.name}&background=E4C087&color=ffff`}
        />
        
        </div>
        <div className='flex flex-col gap-3 items-center'>
       <Button   className='text-white rounded-xl w-40 ' >View Profile</Button>
        <Button   className='text-white rounded-xl w-40 ' >Change Password</Button>
       </div>
       <div>
       </div>
        </div>
        <div className='flex flex-col gap-10 m-20 w-full' >
          <div className='flex gap-4 items-center'>
             <FaUser size={20} />
             <h1 className='text-xl font-semibold'>Personal Information</h1 >
          </div>
    <div className="flex w-2/3 flex-wrap md:flex-nowrap gap-4">
      <Input isDisabled label="Username" placeholder={session?.user?.name}type="email" />
    </div>
        <div className="flex w-2/3 flex-wrap md:flex-nowrap gap-4">
      <Input isDisabled label="Email" placeholder={session?.user?.email} type="email" />
    </div>
        </div>
        </div>
    </div>
  )
}

export default Profile