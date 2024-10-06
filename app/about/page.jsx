"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { CursorContext } from "@/components/CursorContext";
import StatsItem from "@/components/StatsItem";
//import Carousel from "@/components/Carousel";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"


const About = () => {

  const { mouseEnterHandler, mouseLeaveHandler} = useContext(CursorContext);
  return (
    <motion.section 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition: { delay: 2 }}}
    className="min-h-screen"
  >
    {/* page header */}
    <div className='relative w-full top-[150px]  flex items-center overflow-x-hidden'>
            <img className='brightness-75 grayscale object-cover h-[40vh] object-left-bottom w-full' src='https://lella.qodeinteractive.com/wp-content/uploads/2019/08/title-area-img-5.jpg'></img>
            <h3 className="absolute h3 h-full top-0 flex items-center left-1/2 -translate-x-1/2 text-center py-2 text-2xl xl:text-6xl text-red-800">About Us</h3>
            <Breadcrumb className="absolute z-10 text-center items-center flex justify-center mt-[130px] py-2 left-1/2 -translate-x-1/2 text-red-800">
              <BreadcrumbList className="text-lg text-center">
                <BreadcrumbItem>
                  <BreadcrumbLink className="text-red-800 text-center text-2xl "  href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink className="text-red-800 text-center text-xl" href="/contact">About Us</BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
        </div>


    <section className="py-20 px-[15px] gap-4 mt-[150px] flex justify-center relative text-neutral-950 bg-red-950 bg-opacity-10">
        <h2 className="text-9xl hidden lg:block absolute top-64 -left-48 text-red-900 rotate-90">Our Story</h2>
            {/* text */}
        <div className="flex flex-col items-start xl:max-w-[650px] text-center xl:text-left mx-auto xl:mx-0">
              <h2 className="h2 mb-6 mx-auto max-w-[540px] xl:max-w-none">
                Who We Are
              </h2>
              <p className="lead max-w-[600px] mx-auto xl:mx-0">
              At Elite Beaux Parlour, we are committed to enhancing your beauty and well-being. 
              Our skilled professionals combine expertise with a passion for excellence, offering top-quality hair, grooming, and spa services in a relaxing environment. 
              Discover our story, values, and dedication to making every visit an exceptional experience.
              </p>
      
              {/* items */}
              <div className="grid grid-cols-3 gap-[30px] mb-14 mx-auto xl:mx-0">
                <div>
                  <StatsItem countNum={13} text="Years On Market" />
                </div>
                <div>
                  <StatsItem countNum={35} text="Happy Clients" countText="k+" />
                </div>
                <div>
                  <StatsItem countNum={97} countText="%" text="Natural Ingredients" />
                </div>
              </div>
      
              {/* btn */}
              <button className="btn mx-auto xl:mx-0">
                <Link href="/contact">Contact us</Link>
              </button>
        </div>
        <img src='https://images.pexels.com/photos/7195808/pexels-photo-7195808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className="w-1/4 object-cover hidden md:block" ></img>
      </section>
  
    {/* hero intro */}
    
  
     
    
  </motion.section>
  )
}

export default About
