import SharedTitle from '@/shared/SharedTitle/SharedTitle'
import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div className='px-24 w-full flex items-center justify-center flex-col'>
      <SharedTitle title='About Khadbari Rudraksha Suppliers'/>
      <div className='flex gap-8 items-start justify-center w-full'>
          <div className='w-1/2 h-[550px]'>
            <Image src={"https://images.unsplash.com/photo-1705575480602-8bbd28173fdc?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt='about' height={1000} width={1000} className='object-cover h-full w-full rounded-lg shadow-sm'/>
          </div>
          <p className='text-justify text-gray-700 w-1/2 text-base'>
            Welcome to Khadbari Rudraksha Suppliers, your trusted destination for authentic rudraksha beads that embody spirituality, tradition, and unmatched quality. We are dedicated to providing individuals worldwide with sacred beads that not only carry deep spiritual significance but also offer profound benefits for the mind, body, and soul.
<br /> <br />
At Khadbari Rudraksha Suppliers, we source our rudraksha beads directly from the pristine regions of Nepal and Indonesia, ensuring authenticity and ethical practices at every step. Our beads are meticulously handpicked, tested for quality, and crafted to perfection, making them the perfect companion for your spiritual journey.
<br /> <br />
We believe that spirituality should be accessible to everyone, which is why we focus on offering competitive prices without compromising quality. By working closely with farmers and curators, we bring you genuine beads that radiate positive energy, promote well-being, and help you achieve your goals.
<br /> <br />
Beyond just a product, we aim to provide an experience. From guiding you in selecting the right bead to educating you about its significance and care, we are here to support you every step of the way.
          </p>
      </div>
    </div>
  )
}

export default About
