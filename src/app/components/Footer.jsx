import React from 'react'
import Link from 'next/link';
import { IoLogoWhatsapp } from "react-icons/io";
import { BsInstagram } from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";


export default function Footer() {
  return (
    <footer className='bg-[url(/mediumclouds.png)] text-white pt-20 pb-6  h-auto '>
      <div className='mx-auto p-4'>
      <div className='flex flex-wrap justify-center mb-4'>
        <div className='w-full md:w-1/2 sm:w-full p-6'>
          <h4 className='uppercase text-white mb-2 '>About us </h4>
          <p className='text-white '>BollyG brings you top movies all across the whole India ranging from action to comedy and other interesting genres. </p>

        </div>

        <div className='w-full md:w-1/2 sm:w-full p-6'>
        <h5 className='uppercase text-white mb-2'>Contact us</h5>

        <ul className='flex flex-row '>
          <Link href={'https://whatsapp.com/'}>
          <li className='size-8'><IoLogoWhatsapp /></li>
          </Link>      

          
          <Link href={'https://instagram.com/'}>
          <li className='size-8'><BsInstagram /></li>
          </Link>
          
          <Link href={'https://x.com/'}>
          <li className='size-8'><FaSquareXTwitter /></li>
          </Link>

          <Link href={'https://gmail.com/'}>
          <li className='size-8'><BiLogoGmail /></li>
          </Link>
          
          
          
        </ul>

        <p className='text-white '>Do not hesitate to reach out to us on all our platforms</p>
        

        </div>

      </div>

      </div>
        <p className='px-6 text-center'>&copy;Bolly G. All rights reserved {(new Date().getFullYear())} </p>
    </footer>
  ) 
} 
