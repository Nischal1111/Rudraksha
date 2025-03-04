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
          
          {/* Privacy Policy Section */}
          <div className='mt-12'>
            <SharedTitle title="Privacy Policy - Khandbari Rudraksha" classname="text-4xl" />
            <div className='flex flex-col gap-6 mt-6'>
              <div>
                <h2 className='text-2xl font-semibold'>Introduction</h2>
                <p className='mt-2'>
                  At <strong>Khandbari Rudraksha</strong>, we deeply value the trust you place in us when you visit our website or engage with our services. 
                  This Privacy Policy outlines our commitment to safeguarding your privacy and respecting the confidentiality of your personal information. 
                  Here, we explain the types of information we collect, how we use it, the circumstances under which we may share it, and the measures we take to protect it.
                </p>
              </div>
              
              <div>
                <h2 className='text-2xl font-semibold'>Information We Collect</h2>
                <div className='mt-2'>
                  <h3 className='text-lg font-semibold'>1. Personal Information:</h3>
                  <p>
                    We may collect personal information through various interactions, such as when you visit our website, make a purchase, sign up for updates, 
                    contact us for inquiries, or engage with us through social media. The personal information we collect may include:
                  </p>
                  <ul className='list-inside list-disc mt-2'>
                    <li>Name</li>
                    <li>Postal address</li>
                    <li>Email address</li>
                    <li>Phone number</li>
                    <li>Date of birth (if provided)</li>
                    <li>Any other details you willingly share with us</li>
                  </ul>
                </div>
                
                <div className='mt-4'>
                  <h3 className='text-lg font-semibold'>2. Usage Information:</h3>
                  <p>
                    When you interact with our website, we may automatically collect certain information to enhance your experience. This may include:
                  </p>
                  <ul className='list-inside list-disc mt-2'>
                    <li>IP address</li>
                    <li>Device type and browser information</li>
                    <li>Location data (if location-based services are enabled)</li>
                    <li>Website usage data collected through cookies and tracking technologies</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h2 className='text-2xl font-semibold'>How We Use the Information</h2>
                <p className='mt-2'>We use the information we collect to:</p>
                <ul className='list-inside list-disc mt-2'>
                  <li>Fulfill and manage your orders for our products.</li>
                  <li>Respond to your inquiries and provide customer support.</li>
                  <li>Send important updates regarding our services, terms, and policies.</li>
                  <li>Share offers, promotions, and news about our products (with your consent).</li>
                  <li>Conduct data analysis to improve our services and offerings.</li>
                  <li>Protect against fraud and unauthorized transactions.</li>
                </ul>
              </div>
              
              <div>
                <h2 className='text-2xl font-semibold'>Information We Share</h2>
                <p className='mt-2'>
                  We do not sell or trade your personal information. However, we may share it in the following situations:
                </p>
                <ul className='list-inside list-disc mt-2'>
                  <li>
                    <strong>With Service Providers:</strong> We may share your data with trusted service providers who assist us with payment processing, 
                    order fulfillment, and marketing efforts. They are obligated to handle your data securely.
                  </li>
                  <li>
                    <strong>Legal Requirements:</strong> If required by law or legal processes, we may share information with authorities to protect our rights, 
                    customers, and business.
                  </li>
                  <li>
                    <strong>With Your Consent:</strong> In cases where we wish to share your information beyond these stated purposes, 
                    we will do so only with your explicit consent.
                  </li>
                </ul>
              </div>
              
              <div>
                <h2 className='text-2xl font-semibold'>Protection of Your Information</h2>
                <p className='mt-2'>
                  We implement a variety of security measures—administrative, physical, and technical—to safeguard your personal information. 
                  While we strive to protect your data, no system is completely foolproof. 
                  We remain committed to continuously enhancing our security measures.
                </p>
              </div>
              
              <div>
                <h2 className='text-2xl font-semibold'>Your Rights and Choices</h2>
                <p className='mt-2'>We respect your rights regarding your personal information. You may:</p>
                <ul className='list-inside list-disc mt-2'>
                  <li>Opt out of marketing emails using the unsubscribe option provided.</li>
                  <li>Request updates or corrections to your personal information.</li>
                  <li>Contact us to inquire about the data we hold about you.</li>
                </ul>
              </div>
              
              <div>
                <h2 className='text-2xl font-semibold'>Updates to Our Privacy Policy</h2>
                <p className='mt-2'>
                  We may update this Privacy Policy periodically. Any significant changes will be posted on this page, and where appropriate, 
                  we will notify you through other communication channels. We encourage you to review this policy periodically to stay informed.
                </p>
              </div>
              
              <div>
                <h2 className='text-2xl font-semibold'>How to Contact Us</h2>
                <p className='mt-2'>
                  If you have any questions or concerns about this Privacy Policy or wish to update your information, please contact us at:
                </p>
                <p className='mt-2'>📧 Email: <a href="mailto:khandbarirudraksha@gmail.com" className='text-blue-600 hover:underline'>khandbarirudraksha@gmail.com</a></p>
              </div>
              
              <div className='mt-4'>
                <p>
                  Your privacy is of utmost importance to us. By using our website, you acknowledge and accept the practices described in this Privacy Policy. 
                  If you do not agree with any part of this policy, we kindly request that you refrain from using our services.
                </p>
                <p className='mt-4 font-medium'>Thank you for trusting Khandbari Rudraksha.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Policy;