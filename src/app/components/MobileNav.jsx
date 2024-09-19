"use client"
import { CgMenu } from "react-icons/cg";
import Link from "next/link"
import { useState } from "react"
import { AiFillLike } from "react-icons/ai";
import { useContext } from "react";
import {SidebarContext} from "../providers"

//*A mobile navigation component that toggles a menu on click*//
export default function MobileNav() {
  const {val} = useContext(SidebarContext)
    const [open, setOpen] = useState(false)
    /*
    Toggles the navigation menu.
   */
    
    function controlNav(){
        setOpen(!open)
    }


  return (
    <nav>
      {/* A navigation element with a toggleable menu */}
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

           <Link href={'/wishes'} >
           <li>{val}</li>
          <p><AiFillLike /></p>
           </Link>
            
            </ul>

            }
    </nav>
  );
}
