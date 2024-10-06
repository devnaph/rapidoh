"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";


const links = [
  {
    href: "/",
    name: "Home",
},
{
    href: "/about",
    name: "About",
},
{
    href: "/services",
    name: "Services",
},
{
    href: "/gallery",
    name: "Gallery",
},
{
    href: "/contact",
    name: "Contact",
},
];

// import icons
import { FaYoutube, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const pathname = usePathname();
    return (
        <footer className="bg-footer bg-cover bg-no-repeat relative ">
            {/* overlay */}
            <div className="absolute w-full h-full bg-black/[0.90] z-10 top-0"></div>
            <div className="container mx-auto my-8 z-20 relative">
                <div className="flex flex-col items-center justify-center gap-14">
                    {/* logo */}
                    <div className="mt-8 mb-4">
                        <Link href="/">
                            <Image 
                            src="/assets/assets/rapidoh-badge.png"
                            width={180}
                            height={90}
                            priority
                            alt="logo"
                            />
                        </Link>
                    </div>
                    {/* nav */}
                    <nav className="flex flex-col xl:flex-row gap-8 xl:gap-12 justify-center items-center">
                        {links.map((link, index) => {
                            return (
                                <Link 
                                 href={link.href} 
                                 key={index}
                                 className={`${pathname === link.href}"uppercase text-white tracking-widest hove:text-accent transition-all"`}>
                                    {link.name}
                                </Link>
                            );
                        })}
                    </nav>
                    {/* Socials */}
                    <ul className="flex text-white text-xl gap-4">
                        <Link href="/" className="w-[54px] h-[54px] border border-white/[0.15] rounded-full flex items-center justify-center hover:text-accent transition-all">
                            <FaYoutube />
                        </Link>
                        <Link href="/" className="w-[54px] h-[54px] border border-white/[0.15] rounded-full flex items-center justify-center hover:text-accent transition-all">
                            <FaFacebookF />
                        </Link>
                        <Link href="/" className="w-[54px] h-[54px] border border-white/[0.15] rounded-full flex items-center justify-center hover:text-accent transition-all">
                            <FaInstagram />
                        </Link>
                        <Link href="/" className="w-[54px] h-[54px] border border-white/[0.15] rounded-full flex items-center justify-center hover:text-accent transition-all">
                            <FaTwitter />
                        </Link>
                    </ul>
                    {/* copyright */}
                    <div className="border-t border-white/10 text-[15px] text-white/70 font-light w-full flex items-center justify-center py-6">
                        <p className="text-center">&copy; Copyright 2024 - Rapidoh Empire Salon. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;