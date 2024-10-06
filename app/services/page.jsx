"use client";
import { useContext } from "react";
import Image from "next/image";
import { CursorContext } from "@/components/CursorContext";
import { motion } from "framer-motion";
import Link from "next/link";
import BarberServices from "@/components/BarberServices";
import SalonServices from "@/components/SalonServices";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"


const Services = () => {

  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2 }}}
      className="min-h-screen"
    >
      
        {/* page header */}
        <div className='relative w-full top-[150px]  flex items-center overflow-x-hidden'>
            <img className='brightness-75 grayscale object-cover h-[40vh] object-left-bottom w-full' src='https://lella.qodeinteractive.com/wp-content/uploads/2019/08/title-area-img-3.jpg'></img>
            <h3 className="absolute h3 h-full top-0 flex items-center left-1/2 -translate-x-1/2 text-center py-2 text-2xl xl:text-6xl text-red-800">Our Services</h3>
            <Breadcrumb className="absolute z-10 text-center items-center flex justify-center mt-[130px] py-2 left-1/2 -translate-x-1/2 text-red-800">
              <BreadcrumbList className="text-lg text-center">
                <BreadcrumbItem>
                  <BreadcrumbLink className="text-red-800 text-center text-2xl "  href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink className="text-red-800 text-center text-2xl" href="/contact">Services</BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
        </div>

        {/* Services & Modal Video */}
        <section className='flex flex-wrap justify-center mt-[140px] gap-8 py-8 bg-red-950 bg-opacity-10 text-neutral-900'>
             <div className='relative'>
               <div className='absolute z-10 text-xl top-0 px-2 py-8 flex justify-center items-end gap-2 w-full text-neutral-300'>
                  <p className='font-bold'>Hair-Styling</p>
                  <p>|</p>
                  <p>See more</p>
                  
               </div>
               <img className='grayscale brightness-90' src='https://images.pexels.com/photos/6962024/pexels-photo-6962024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></img>
             </div>

             <div className='relative'>
             <div className='absolute z-10 text-xl top-0 px-2 py-8 flex justify-center items-end gap-2 w-full text-neutral-300'>
                  <p className='font-bold'>Haircuts</p>
                  <p>|</p>
                  <p>See more</p>
                  
               </div>
               <img className='grayscale' src='https://images.pexels.com/photos/6475046/pexels-photo-6475046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></img>
             </div>

             <div className='relative'>
             <div className='absolute z-10 text-xl top-0 px-2 py-8 flex justify-center items-end gap-2 w-full text-neutral-300'>
                  <p className='font-bold'>Dreadlocks</p>
                  <p>|</p>
                  <p>See more</p>
                  
               </div>
               <img className='grayscale brightness-90' src='https://images.pexels.com/photos/6962024/pexels-photo-6962024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></img>
             </div>

             <div className='relative'>
             <div className='absolute z-10 text-xl top-0 px-2 py-8 flex justify-center items-end gap-2 w-full text-neutral-300'>
                  <p className='font-bold'>Nail Art & Pedicure 
                  </p>
                  <p>|</p>
                  <p>See more</p>
                  
               </div>
               <img className='grayscale' src='https://images.pexels.com/photos/2834009/pexels-photo-2834009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></img>
             </div>

        </section>

        {/* Prices List section */}
        <section className=" w-xl flex flex-col md:flex-row mx-auto justify-center items-center gap-12 my-6 px-4 pb-4">
          <BarberServices/>
          <SalonServices/>
        </section>

        
    </motion.div>
  )
}

export default Services;
