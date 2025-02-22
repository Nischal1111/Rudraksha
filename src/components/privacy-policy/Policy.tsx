"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import SharedTitle from '@/shared/SharedTitle/SharedTitle';

const Policy = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <div className="w-full">
      <motion.div
        className="relative h-[280px] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Image
          src="https://images.unsplash.com/photo-1650809652995-85581c240f19?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Consultation banner"
          layout="fill"
          objectFit="cover"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 flex items-center justify-center">
          <div className="text-white">
            <motion.h1
              className="lg:text-5xl text-3xl font-bold mb-6"
              {...fadeInUp}
            >
              Privacy and Policy
            </motion.h1>
          </div>
        </div>
      </motion.div>
      <div className='lg:px-20 lg:py-7 px-4 py-4'>
        <SharedTitle title="Policy plans of Khadbari" classname="text-4xl" />
        <div className='flex flex-col gap-8 leading-8'>
          <div>
            <p>
              Khadbari is dedicated to providing high-quality rudraksha beads, bracelets, and malas in Nepal and Indonesia. Our commitment ensures that all products are authentic and sourced responsibly, with Khadbari actively engaging in the promotion of cultural heritage and spiritual wellness. Our long-term goal is to become a leading e-commerce platform for spiritual and wellness products, fostering trust and satisfaction among our customers.
            </p>
          </div>
          <div className='flex flex-col gap-4'>
            <h1 className='text-2xl font-semibold'>Product Offerings</h1>
            <p>Khadbari offers a wide range of products, all designed to meet the spiritual and aesthetic needs of our customers.</p>
            <div>
              <h2 className='text-lg font-semibold'>Rudraksha Beads</h2>
              <ul className='list-inside list-disc'>
                <li>We provide genuine rudraksha beads sourced from trusted suppliers.</li>
                <li>Our rudraksha beads are available in various mukhis (faces), each with specific spiritual significance.</li>
              </ul>
            </div>
            <div>
              <h2 className='text-lg font-semibold'>Bracelets</h2>
              <ul className='list-inside list-disc'>
                <li>Our bracelets are crafted using high-quality rudraksha beads and other materials like silver and gold.</li>
                <li>Each bracelet is designed to be both spiritually beneficial and aesthetically pleasing.</li>
              </ul>
            </div>
            <div>
              <h2 className='text-lg font-semibold'>Malas</h2>
              <ul className='list-inside list-disc'>
                <li>Khadbari offers malas made from rudraksha beads, ideal for meditation and prayer.</li>
                <li>Our malas are available in different bead counts to suit individual preferences.</li>
              </ul>
            </div>
          </div>
          <div className='flex flex-col gap-4'>
            <h1 className='text-2xl font-semibold'>Quality Assurance</h1>
            <ul className='list-inside list-disc'>
              <li>Authenticity Guarantee: We ensure that all our products are genuine and meet the highest quality standards.</li>
              <li>Certification: Each product comes with a certification of authenticity, providing customers with confidence in their purchase.</li>
            </ul>
          </div>
          <div className='flex flex-col gap-4'>
            <h1 className='text-2xl font-semibold'>Customer Policies</h1>
            <ul className='list-inside list-disc'>
            <li>Privacy Policy: We are committed to protecting our customers&apos; personal information and ensuring a secure shopping experience.</li>
            <li>Return and Refund Policy: Customers can return products within a specified period if they are not satisfied, subject to our return guidelines.</li>
              <li>Shipping Policy: We offer reliable shipping services with clear tracking options, ensuring timely delivery to Nepal and Indonesia.</li>
            </ul>
          </div>
          <div className='flex flex-col gap-4'>
            <h1 className='text-2xl font-semibold'>Community Engagement</h1>
            <ul className='list-inside list-disc'>
              <li>Local Sourcing: We support local artisans and suppliers, contributing to the local economy in Nepal and Indonesia.</li>
              <li>Sustainability Practices: Our packaging is eco-friendly, and we are committed to reducing our environmental impact.</li>
            </ul>
          </div>
          <div className='flex flex-col gap-4'>
            <h1 className='text-2xl font-semibold'>Future Plans</h1>
            <ul className='list-inside list-disc'>
              <li>Expansion: We aim to expand our product line to include more spiritual and wellness products.</li>
              <li>Global Reach: Khadbari plans to reach a global audience, bringing the spiritual heritage of Nepal and Indonesia to the world.</li>
              <li>Educational Initiatives: We intend to educate our customers about the significance of rudraksha and other spiritual products through blogs and online workshops.</li>
            </ul>
          </div>
          <div>
            <p>Khadbari is dedicated to providing an enriching experience for our customers, ensuring that our products bring spiritual well-being and satisfaction.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Policy;
