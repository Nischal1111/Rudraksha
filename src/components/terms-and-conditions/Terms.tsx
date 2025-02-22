"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import SharedTitle from '@/shared/SharedTitle/SharedTitle';

const Terms = () => {
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
          alt="Terms and Conditions banner"
          layout="fill"
          objectFit="cover"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 flex items-center justify-center">
          <div className="text-white">
            <motion.h1 className="lg:text-5xl text-3xl font-bold mb-6" {...fadeInUp}>
              Terms and Conditions
            </motion.h1>
          </div>
        </div>
      </motion.div>
      <div>
        <SharedTitle title="Terms and Conditions" classname="text-4xl" />
        <div className="lg:px-14 px-4 py-7 flex flex-col gap-8 leading-8">
          <div>
            <p>Welcome to Khadbari! By using our website and purchasing our products, you agree to comply with the following terms and conditions. Please read them carefully.</p>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-semibold">1. Introduction</h1>
            <p>These Terms and Conditions govern your use of our website, www.khadbari.com, and the purchase of products from our site. By accessing our website, you accept these terms in full. If you disagree with any part of these terms, please do not use our website.</p>
            <h1 className="text-2xl font-semibold">2. Use of the Website</h1>
            <p>You must be at least 18 years old to use this website or have parental permission. You agree not to use the website for any unlawful purpose or in a way that infringes the rights of, restricts, or inhibits anyone else&apos;s use and enjoyment of the website.</p>
            <h1 className="text-2xl font-semibold">3. Products</h1>
            <p>All products are subject to availability. We reserve the right to discontinue any product at any time without notice. We strive to ensure that product descriptions, prices, and availability information are accurate. However, errors may occur, and we reserve the right to correct them.</p>
            <h1 className="text-2xl font-semibold">4. Orders and Payments</h1>
            <p>By placing an order, you are offering to purchase a product subject to these terms. All orders are subject to availability and confirmation of the order price. We accept various payment methods, as detailed on the website. You agree to provide current, complete, and accurate purchase and account information for all purchases made at our store.</p>
            <h1 className="text-2xl font-semibold">5. Shipping and Delivery</h1>
            <p>We ship products to Nepal and Indonesia, with estimated delivery times provided during checkout. Shipping costs and times are subject to change based on the shipping destination and method chosen. We are not responsible for delays caused by customs clearance processes.</p>
            <h1 className="text-2xl font-semibold">6. Returns and Refunds</h1>
            <p>If you are not satisfied with your purchase, you may return it within [X] days of receipt, subject to our return policy. Products must be returned in their original condition, with proof of purchase. Refunds will be processed within [X] business days after receiving the returned item.</p>
            <h1 className="text-2xl font-semibold">7. Privacy Policy</h1>
            <p>Your privacy is important to us. Please refer to our Privacy Policy for details on how we collect, use, and protect your information.</p>
            <h1 className="text-2xl font-semibold">8. Intellectual Property</h1>
            <p>All content on the website, including text, graphics, logos, images, and software, is the property of Khadbari and is protected by intellectual property laws. You may not use, reproduce, or distribute any content from the website without our explicit permission.</p>
            <h1 className="text-2xl font-semibold">9. Limitation of Liability</h1>
            <p>Khadbari shall not be liable for any indirect, incidental, special, or consequential damages resulting from the use or the inability to use our website or products. Our liability for any claim arising from the purchase of a product will be limited to the amount you paid for that product.</p>
            <h1 className="text-2xl font-semibold">10. Governing Law</h1>
            <p>These terms shall be governed and construed in accordance with the laws of [Nepal/Indonesia], without regard to its conflict of law provisions. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts located in [Nepal/Indonesia].</p>
            <h1 className="text-2xl font-semibold">11. Changes to Terms and Conditions</h1>
            <p>We reserve the right to update or modify these terms at any time without prior notice. It is your responsibility to review these terms periodically for any changes.</p>
            <h1 className="text-2xl font-semibold">12. Contact Information</h1>
            <p>For any questions or concerns about these Terms and Conditions, please contact us at [email address] or [phone number].</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
