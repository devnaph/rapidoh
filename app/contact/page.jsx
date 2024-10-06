"use client";
import { useContext } from "react";
import Image from "next/image";
import { CursorContext } from "@/components/CursorContext";
import { motion } from "framer-motion";
import Form from "@/components/Form";
import Discounts from "@/components/Discounts";
;
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"



const Contact = () => {

  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <div className="min-h-screen">
      
        {/* page header */}
        <div className='relative w-full top-[150px]  flex items-center overflow-x-hidden'>
        <img className='brightness-75 grayscale object-cover h-[40vh] object-left-bottom w-full' src='https://lella.qodeinteractive.com/wp-content/uploads/2019/08/title-area-img-1.jpg'></img>
                <h3 className="absolute h3 h-full top-0 flex items-center left-1/2 -translate-x-1/2 text-center py-2 text-2xl xl:text-6xl text-red-800">Contact Us</h3>
                <Breadcrumb className="absolute z-10 text-center items-center flex justify-center mt-[130px] py-2 left-1/2 -translate-x-1/2 text-red-800">
                  <BreadcrumbList className="text-lg text-center">
                    <BreadcrumbItem>
                      <BreadcrumbLink className="text-red-800 text-center text-xl "  href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbLink className="text-red-800 text-center text-xl" href="/contact">Contact Us</BreadcrumbLink>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
        </div>

        {/* location & contact form */}
        <section className="py-5 px-[15px] gap-4 mt-[150px] flex justify-center relative text-neutral-950 bg-red-950 bg-opacity-10">

         {/* contact form */}
         <div className="flex flex-col gap-12 xl:flex-row h-full  xl:mt-10">
          {/* text */}
          <motion.div 
            initial={{ opacity: 0, x: -60 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { delay: 2, duration: 0.8, ease: "easeInOut" },
            }}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="flex-1 flex flex-col justify-center"
          >
            <h3 className="h3 mb-8 text-center xl:text-left">Get in touch</h3>
            <p className="text-center py-4">If you have any questions or require further information on any of our treatments or services, feel free to get in touch.</p>
            {/* items */}
            <div className="flex flex-col items-center xl:items-start gap-12">
              {/* item */}
              <div className="flex items-center gap-4">
                {/* icon */}
                <div className="relative w-[36px] h-[36px]">
                  <Image src="/assets/assets/contact/pin.svg" fill alt="" />
                </div>
                <div className="pt-1 flex-1">
                  <h4 className="h4 mb-2">Address</h4>
                  <p className="leading-relaxed">
                    Langata 
                    <br />
                    Nairobi West, Nairobi
                  </p>
                </div>
              </div>
              {/* end items */}
              
              <div className="flex items-center gap-4">
                {/* icon */}
                <div className="relative w-[36px] h-[36px]">
                  <Image src="/assets/assets/contact/phone.svg" fill alt="" />
                </div>
                <div className="pt-1 flex-1">
                  <h4 className="h4 mb-2">Phone number</h4>
                  <div className="pt-1 flex-1">
                    <p>Phone: (+254) 708 928 270</p>
                    <p>Fax: (+254) 708 928 270</p>
                  </div>
                </div>
              </div>
              {/* end items */}

              <div className="flex items-center gap-4">
                {/* icon */}
                <div className="relative w-[36px] h-[36px]">
                  <Image src="/assets/assets/contact/email.svg" fill alt="" />
                </div>
                <div className="pt-1 flex-1">
                  <h4 className="h4 mb-2">Email address</h4>
                  <div className="flex flex-col gap-1">
                    <p>info@elitebeaux.com</p>
                    <p>support@elitebeaux.com</p>
                  </div>
                </div>
              </div>
              {/* end items */}
            </div>
          </motion.div>

          {/* form */}
          <motion.div 
             initial={{ opacity: 0, x: 60 }}
             animate={{
               opacity: 1,
               x: 0,
               transition: { delay: 2, duration: 0.8, ease: "easeInOut" },
             }}
            className="flex-1"
          >
            <div className="bg-[#FFBF78] w-full max-w-[580px] gap-4 p-10 mx-auto xl:mx-0 rounded-2xl">
              <h3 className="h3 mb-8 text-center">Get in touch</h3>
              <Form />
            </div>
          </motion.div>

        </div> 

        </section>


        {/* location map */}
        <motion.div 
           initial={{ opacity: 0, y: 100 }}
           animate={{
             opacity: 1,
             y: 0,
             transition: { delay: 2, duration: 0.8, ease: "easeInOut" },
           }}
          className="w-full flex flex-col items-center justify-center mt-8 gap-12 xl:gap-16 rounded-lg mx-auto sm:px-6 lg:px-4 max-w-7xl px-0"
        >
          <h2 className="h2 text-center py-2 ">Our Location</h2>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.6354345837954!2d36.761148074046275!3d-1.3952216357529441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f05e90359c039%3A0x9458d20a4fbeb91d!2sTumaini%2FOngata%20Rongai!5e0!3m2!1sen!2ske!4v1723792758583!5m2!1sen!2ske" 
            className="w-full h-[300px] md:h-[450px] rounded-lg shadow-lg" // Updated for responsiveness and styling
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </motion.div>
        
      
    </div>
  )
}

export default Contact;
