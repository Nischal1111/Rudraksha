"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Divider } from "@nextui-org/react";
import { 
  FaHeart, 
  FaUsers, 
  FaMedal, 
  FaLeaf, 
  FaBook,
  FaSeedling,
  FaGraduationCap,
  FaClinicMedical,
  FaCheckCircle,
} from "react-icons/fa";
import CountUp from 'react-countup';
import { josefin } from '@/utils/font';
import SharedTitle from '@/shared/SharedTitle/SharedTitle';
import TeamSection from './TeamSection';

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const stats = [
    { icon: <FaUsers size={24} />, number: 10000, suffix: "+", label: "Customers Served" },
    { icon: <FaLeaf size={24} />, number: 100, suffix: "+", label: "Farming Families" },
    { icon: <FaBook size={24} />, number: 15, suffix: "+", label: "Years Experience" },
    { icon: <FaHeart size={24} />, number: 5, suffix: "%", label: "To Social Causes" }
  ];

  const socialInitiatives = [
    { 
      icon: <FaGraduationCap size={24} />, 
      title: "Education Support",
      description: "Providing education for farmers' children"
    },
    { 
      icon: <FaSeedling size={24} />, 
      title: "Sustainable Farming",
      description: "Implementing eco-friendly farming practices"
    },
    { 
      icon: <FaClinicMedical size={24} />, 
      title: "Healthcare Access",
      description: "Supporting medical facilities in farming communities"
    }
  ];

  return (
    <div className="w-full">
      <motion.div 
        className="relative h-[400px] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Image 
          src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*uzsms9SUmXAPoEtyqVqHLA.jpeg"
          alt="Rudraksha farm" 
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 flex items-center">
          <div className="max-w-3xl lg:px-16 px-4 lg:ml-12 ml-4 text-white">
            <motion.h1 
              className="lg:text-5xl text-3xl font-bold mb-6"
              {...fadeInUp}
            >
              Our Journey with Rudraksha
            </motion.h1>
            <motion.p 
              className="text-xl"
              {...fadeInUp}
              transition={{ delay: 0.2 }}
            >
              Bridging tradition with authenticity since 2009
            </motion.p>
          </div>
        </div>
      </motion.div>

      <div className={`max-w-7xl mx-auto px-4 pt-16 space-y-12 ${josefin.className}`}>
        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          {...fadeInUp}
        >
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md py-4">
              <div className="text-center overflow-visible py-2">
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-primary/10 text-primary">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-primary">
                  <CountUp end={stat.number} duration={2.5} />
                  {stat.suffix}
                </div>
                <p className="text-default-500">{stat.label}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Our Story Section */}
        <motion.div {...fadeInUp}>
          <div className='bg-white rounded-md shadow-sm px-8 py-2'>
            <div className="py-4">
              <div className="flex gap-3">
                <div>
                  <p className={`text-3xl text-primary ${josefin.className}`}>Our Story</p>
                  <p className="text-default-500">A journey of authenticity and tradition</p>
                </div>
              </div>
            </div>
            <Divider/>
            <div className='text-black py-6'>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <Image 
                    src="https://cdn.pixabay.com/photo/2019/10/11/20/56/mala-4542708_1280.jpg"
                    alt="Our journey" 
                    width={600}
                    height={400}
                    className="rounded-sm"
                  />
                </div>
                <div className="space-y-4">
                  <p className="text-lg">
                    Founded in the heart of Nepal&apos;s Rudraksha-growing region, our journey began with a simple mission: to bridge the gap between authentic Rudraksha farmers and spiritual seekers worldwide.
                  </p>
                  <p className="text-lg">
                    Today, we pride ourselves on maintaining direct relationships with farmers across Nepal and Indonesia, ensuring fair compensation while delivering only the most authentic Rudraksha beads to our customers.
                  </p>
                  <div className="space-y-2">
                    {[
                      "Direct farmer relationships",
                      "Fair trade practices",
                      "Sustainable sourcing",
                      "Community development"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <FaCheckCircle className='text-primary'/>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Social Impact Section */}
        <motion.div {...fadeInUp}>
          <div className="rounded-sm shadow-sm">
            <SharedTitle title="Our Social Impact" classname="text-4xl font-medium text-primary" />
            <div className="px-6 flex items-center justify-center">
                <div className="space-y-6">
                  <p className="text-lg">
                    We believe in giving back to the communities that make our work possible. Through our social initiative program, we support:
                  </p>
                  <div className="space-y-4">
                    {socialInitiatives.map((initiative, index) => (
                      <motion.div 
                        key={index}
                        className="flex items-center gap-4 p-4 rounded-lg bg-white/60"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 * index }}
                      >
                        <div className="w-10 h-10 rounded-full flex items-center justify-center bg-primary/10 text-primary">
                          {initiative.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold">{initiative.title}</h3>
                          <p className="text-default-500">{initiative.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
            </div>
          </div>
        </motion.div>

        {/* Awards Section */}
        <motion.div {...fadeInUp}>
            <SharedTitle title="Recognition and Awards" classname="text-4xl font-medium text-primary" />
            <div className="px-6">
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    img:"/award1.jpeg",
                    title: "Letter of Excellence",
                    description: "Recognized for our commitment to fair trade and sustainable sourcing practices."
                  },
                  {
                    img:"/award2.jpeg",
                    title: "Awarded for proficient and consistent contribution to the promotion of Rudraksha.",
                    description: "Awarded for maintaining exceptional customer satisfaction and authenticity."
                  }
                ].map((award, index) => (
                  <div key={index} className="w-full flex flex-col rounded-sm">
                    <div className='w-full h-[400px] mb-8'>
                      <Image src={award.img} alt="award" height={1000} width={1000} className='w-full h-full object-cover rounded-lg'/>
                    </div>
                    <div className="flex gap-2 w-full">
                      <div className="w-12 h-12 aspect-square rounded-full flex items-center justify-center bg-white text-primary">
                        <FaMedal size={22} className="w-full h-full p-2" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{award.title}</h3>
                        <p className="text-default-500">{award.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
          </div>
        </motion.div>
        <TeamSection/>
      </div>
    </div>
  );
};

export default About;