import { josefin } from '@/utils/font';
import { Divider } from '@nextui-org/react';
import React from 'react'

interface props{
    title: string;
}
const SharedTitle:React.FC<props> = ({title}) => {
    return (
        <div className={`my-12 flex flex-col items-center justify-center text-5xl text-primary ${josefin.className}`}>
            <Divider className='w-1/5 mb-4 bg-primary'/>
            <h1>{title}</h1>
            <Divider className='w-1/5 mt-4 bg-primary'/>
        </div>
    )
}

export default SharedTitle
