"use client"
import Link from 'next/link'
import MobileNav from './MobileNav'
import { useContext } from 'react'
import {SidebarContext} from "../providers"
import { FaCartShopping } from "react-icons/fa6";
export default function Navbar() {
  const {val} = useContext(SidebarContext)
  return (
    <nav className=''> 
        <ul className='md:flex hidden justify-around h-16 items-center bg-zinc-800 text-white text-lg'>
                <Link href={'/'}>
                <li>Home</li>
                </Link>
                
            
            
                <Link href={'/about'}>
                <li>About us</li>
                </Link>
                
                
                <Link href={'/contact'}>
                <li>contact</li>
                </Link>

                
                <Link href={'/help'}>
                <li>Help</li>
                </Link>

                <Link href={'/wishes'}>
                <li>{val}</li>
                <p><FaCartShopping /></p>
                </Link>
                

                
            
        </ul>
      <MobileNav />
    </nav>
  
  )
}
