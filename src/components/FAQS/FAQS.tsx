"use client"
import React from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image';
import SharedTitle from '@/shared/SharedTitle/SharedTitle';


import { Accordion, AccordionItem } from "@nextui-org/react";


const FAQS = () => {
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
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 flex items-center justify-center text-center">
              <div className="text-white">
                <motion.h1
                  className="text-5xl font-bold"
                  {...fadeInUp}
                >
                  Frequently Asked Questions
                </motion.h1>
                <motion.h1
                  className="text-4xl font-bold mb-3">
                     (FAQs)
                </motion.h1>
              </div>
            </div>
          </motion.div>
         
            <div className="w-full">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            {...fadeInUp}
            transition={{ delay: 0.5 }}
            className="text-center mb-12"
          >
             <div className='lg:px-8 lg:py-7 px-8'>
            <SharedTitle title="Frequently Asked Questions" classname="text-4xl" />
            </div>
            <p className="text-gray-600">Find answers to common questions about our consultation services</p>
          </motion.div>
          
          <div className="max-w-5xl mx-auto">
            <Accordion 
              className="!text-black [&_button]:text-black [&_p]:text-black"
              itemClasses={{
                title: "text-gray-800",
                content: "text-black"
              }}
            >
              <AccordionItem key="1" title="What is the consultation process like?">
                Our consultation process begins with you filling out the form with your specific requirements and concerns. Our experts will review your information and schedule a personalized session.
              </AccordionItem>
              <AccordionItem key="2" title="How long does a consultation session last?">
                A typical consultation session lasts between 30-45 minutes. This gives us enough time to understand your needs and provide detailed recommendations.
              </AccordionItem>
              <AccordionItem key="3" title="Do you offer online consultations?">
                Yes, we offer both online and in-person consultations. Online consultations are conducted via video call at a time convenient for you.
              </AccordionItem>
              <AccordionItem key="4" title="What should I prepare before the consultation?">
                It&apos;s helpful to have any specific questions or concerns written down, and if you have any existing Rudraksha beads, please have them ready for discussion.
              </AccordionItem>
              <AccordionItem key="5" title="What happens after the consultation?">
                You&apos;ll receive a detailed report with recommendations and next steps, along with care instructions and guidelines for your spiritual practice.
              </AccordionItem>
              <AccordionItem key="6" title="Can I reschedule my consultation?">
                Yes, you can reschedule your consultation by contacting us at least 24 hours before the scheduled time. We will work with you to find a more convenient time.
              </AccordionItem>
              <AccordionItem key="7" title="Are the consultations confidential?">
                Absolutely. All consultations are private and confidential. We take your privacy seriously and ensure that your information is securely handled.
              </AccordionItem>
              <AccordionItem key="8" title="Is there a follow-up after the initial consultation?">
                Yes, we offer follow-up consultations to monitor your progress and provide ongoing support. You can schedule a follow-up session as needed.
              </AccordionItem>
              <AccordionItem key="9" title="What is the cost of a consultation session?">
                The cost of a consultation session varies depending on the type and duration of the session. Please contact us for detailed pricing information.
              </AccordionItem>
              <AccordionItem key="10" title="Do you offer group consultations?">
                Yes, we offer group consultations for families or small groups. This can be beneficial for shared concerns or group practices.
              </AccordionItem>

            </Accordion>
          </div>
        </div>
      </div>
        </div>
      );
}

export default FAQS