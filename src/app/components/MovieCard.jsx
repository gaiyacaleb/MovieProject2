import Image from 'next/image'
import React from 'react'
import { Rating } from '@mui/material'
//*A React component that displays a movie card with an image, title, type, rating, and category*//
export default function MovieCard({title,type,rate,img,category}) {
  return (
    <div className='flex flex-col text-white items-center bg-[url(/darkclouds.png)] bg-cover'>
    <Image src={`/mv/${img}`} alt={title} width={'300'} height={'500'} className='rounded-md '/>
    <p>
    <Rating name="half-rating-read" defaultValue={rate/2} precision={0.5} max={5} readOnly />
    </p>
    <h1 className='text-lg font-bold mx-8 hover:bg-red-400'>{title}</h1>
    <p>{type} </p>
    <p>{img}</p>
    <p className='underline'>{category}</p>
    

    {/* {Object} props - Component props
   {string} props.title - Movie title
   {string} props.type - Movie type 
   {number} props.rate - Movie rating (out of 10)
   {string} props.img - Movie image URL
   {string} props.category - Movie category  */}

  

</div>
)
}
