"use client"
import React from 'react'
import { useContext } from 'react'
import { SidebarContext } from '../providers'




export default function Delete({title}) {
    const {movieItem, setMovieItem, setVal} = useContext(SidebarContext)
    
    const handleDelete = () => {
        setVal(prev => prev - 1)
        setMovieItem(movieItem.filter(movie => movie.title !== title))
    }
  
  
  
    return (
     <button className='bg-rose-950 hover:bg-green-500 text-white px-4 py-2 font-bold rounded-full'
    onClick={() => handleDelete()}
    >
        Delete
    </button>
  )
}
