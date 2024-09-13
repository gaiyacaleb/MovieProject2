import React from 'react'
import { PiPhoneCallFill } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";




export default function ContactPage() {
  return (
    <div className='bg-[url(/enjoyment.png)]  bg-cover'>
        <div className='md:block hidden '>
            <div className='mx-auto text-center '>
                <h3 className='capitalize font-bold text-4xl mt-10 text-blue-950'>Get in touch with us</h3>
                <p className='text-slate-600 text-xl mt-2'>Got Questions or complaints? Just write us a message</p>

            </div>

            <div className='flex h-[600px] w-[980px] rounded-xl border-solid border-2 border-slate-400 border-opacity-50 m-auto my-10 p-4'>
                <div className='bg-slate-900 h-[550px] w-[550px] pl-2 ml-auto rounded-md p-5'>
                    <h4 className='text-white mt-4 capitalize font-semibold text-3xl text-left ml-5'>Contact Information</h4>
                    <p className='text-slate-200 my-2 text-[18px] ml-5 mt-4'>Chat with Us</p>
                    <p className='flex items-center text-white ml-5 mt-20 text-sm'>
                        <span className='text-2xl mr-5'><PiPhoneCallFill /></span>
                        <span>+234-556799908</span>
                    </p>

                    <p className='flex items-center ml-5 text-white mt-10 text-sm'>
                        <span className='text-2xl mr-5'><MdEmail /></span>
                        <p>Bollyg@gmail.com</p>

                    </p>

                    <address className='flex items-center ml-5 text-slate-50 mt-10 text-sm'>
                        <span className='text-2xl mr-5'><IoLocationSharp /></span>
                        <span>3,praghad Mumbai.</span>
                    </address>

                </div>

                <div className='flex flex-wrap flex-col w-[600px] mt-12 ml-8'>
                    <div>
                        <label for="firstName" className='text-slate-900 capitalize'> First name</label>
                        <input for="firstName" className='block outline-none border-b-2 border-slate-500 w-[215px]'placeholder= 'chooya' type='text' name='name' id='firstName' />
                    </div>
                    <div className=''>
                        <label for="lastName" className='text-slate-900 capitalize'>Last name</label>
                        <input for="text" className='block outline-none border-b-2 border-slate-500 w-[215px]'placeholder='damir' type='text' name='name' id='lastName'/>

                        
                    </div>

                    <div>
                    <label for="E-mail" className='text-slate-900 capitalize'>E-mail </label>
                    <input for="text" className='block outline-none border-b-2 border-slate-500 w-[215px]'placeholder='Enter email here' type='text' name='email' id='E-mail'/>

                    </div>

                    <div>
                    <label for="phoneNumber" className='text-slate-900 capitalize'>Phone Number</label>
                    <input for="tel" className='block outline-none border-b-2 border-slate-500 w-[215px]'placeholder='345678903444' type='tel' name='' id='phoneNumber'/>
                    </div>

                    <div>
                    <label for="" className='text-slate-900 capitalize my-8'>Enter Message Here</label>
                    <input for="text" className='block outline-none border-b-2 border-slate-500 w-[500px] h-36 mt-2'placeholder='Enter message ' type='text' name='' id='Message'/>
                    </div>
                    <button className='capitalize text-white h-12 w-32  bg-black rounded-md ml-34 mt-6 mb-2 hover:text-green-600'>send message</button>

                </div>

            </div>

        </div>
    </div>
  )
}
