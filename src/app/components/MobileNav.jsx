"use client"
import { CgMenu } from "react-icons/cg";
import Link from "next/link"
import { useState } from "react"
import { FaCartShopping } from "react-icons/fa6";


export default function MobileNav() {
    const [open, setOpen] = useState(false)
    
    
    function controlNav(){
        setOpen(!open)
    }


  return (
    <nav>
        <ul className="flex bg-slate-900 items-center justify-around md:hidden h-12">
            <li>Home</li>
            <li onClick={controlNav} >
                <CgMenu />
            </li>
            
        </ul>

        {open &&
          <ul className="flex bg-slate-900 flex-col justify-around md:hidden items-end h-72 pr-32">  
            <Link href={'/'}>
            <li>home</li>
            </Link>

            <Link href={'/about'}>
            <li>about</li>
            </Link>

            <Link href={'/contact'}>
            <li>contact</li>
            </Link>

            <Link href={'/help'}>
            <li>help</li>
            </Link>

            
            
          <p><FaCartShopping /></p>
            </ul>

            }
    </nav>
  );
}
