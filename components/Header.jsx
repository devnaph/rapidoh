"use client";
import React, { useContext, useState, useEffect } from "react";
import { CursorContext } from "./CursorContext";

// components
import MobileNav from "@/components/MobileNav";
import Nav from "@/components/Nav";
import Promotions from "@/components/Promotions";
//import { FaPhoneAlt } from "react-icons/fa";
//import { IoMdMail } from "react-icons/io";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

import { FaAlignRight } from "react-icons/fa";

const Header = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  const [mobileNav, setMobileNav] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`pb-6 xl:pb-[50px] fixed z-40 w-full xl:bg-white ${isScrolled ? 'bg-accent-100/80' : 'bg-accent-100'} transition-colors duration-300`}>
      {/* topbar */}
      <div className="bg-[#2e2e38] mb-6 xl:mb-[50px] xl:h-[50px] py-4 xl:py-0">
          <Promotions />
      </div>
      <div className="container mx-auto px-5 flex items-center justify-between xl:px-8  xl:p-3 xl:mt-[-20px] xl:rounded-full xl:bg-accent-100">
        {/* logo */}
        <motion.div
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
        >
          <Link href="/">
            <Image 
              src="/assets/assets/rapidoh-badge.png"
              width={200}
              height={120}
              priority
              alt="logo"
            />
          </Link>
        </motion.div>

        {/* mobile nav trigger */}
        <div 
          className="xl:hidden cursor-pointer" 
          onClick={() => setMobileNav(!mobileNav)}
        >
          <FaAlignRight className="text-3xl text-primary" />
        </div>

        {/* mobile nav */}
        <motion.div
          initial={{ right: "-100%"}}
          animate={{ right: mobileNav ? 0: "-100%" }}
          className="fixed bg-primary top-0 bottom-0 right-0 w-[300px] xl:hidden z-50"
        >
          <MobileNav setMobileNav={setMobileNav}/>
        </motion.div>

        {/* desktop nav */}
        <motion.div
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className="hidden xl:block"
        >
          <Nav />
        </motion.div>
      </div>
    </header>
  )
}

export default Header
