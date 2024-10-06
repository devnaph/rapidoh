"use client";

import { motion } from "framer-motion";
import { useContext } from "react";
import { CursorContext } from "@/components/CursorContext";
//import Image from "next/image";
import Link from "next/link";

// components 
import HomeVideo from "@/components/HomeVideo";
import Discounts from "@/components/Discounts";
import AboutUs from "@/components/AboutUs";
//import ImageCarousel from "@/components/ImageCarousel";


const Home = () => {

  const {mouseEnterHandler, mouseLeaveHandler} = useContext(CursorContext);
 

  return (
        <div className="flex items-center  overflow-x-hidden">
          <div className="w-full">
            {/* Hero */}
            <HomeVideo />

            {/* Discounts */}
            <Discounts />

            {/* About us */}
            <AboutUs />

            {/* Image Carousel <ImageCarousel />*/}
            
          </div>
        </div>

    
  );
}

export default Home;

