import Link from "next/link";
import { useContext } from "react";
import { CursorContext } from "./CursorContext";
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
        name: "gallery",
    },
    {
        href: "/contact",
        name: "Contact",
    },
]



const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="sticky">
        <div className="container mx-auto flex gap-8">
            {links.map((link, index) => {
                return (
                    <Link href={link.href} key={index} className={`${pathname === link.href && "border-b-2 border-[#2e2e38]"} uppercase`}>
                        {link.name}
                    </Link>
                );
            })}
        </div>
    </nav>
  )
}

export default Nav
