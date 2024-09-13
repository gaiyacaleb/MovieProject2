import React from 'react'

export default function Header() {
  const two = 'Welcome'
  return(

    
    <div className='grid md:grid-cols-6 md:grid-rows-[300px_300px_300px]grid-cols-1 grid-rows-[200px_200px_200px] '>
    <div className='bg-[url(/RRR.png)] md:col-span-4 md:row-span-3 bg-cover text-white text-2xl text-center '>{two}</div>
    <div className='bg-[url(/Savi.png)] md:row-span-2 md:col-span-2 bg-cover'></div>
    <div className='bg-[url(/Rathnam.png)] bg-cover'></div>
    <div className='bg-[url(/Yodha.png)] bg-cover hover:transition-shadow'></div>


    
</div>
    )
}