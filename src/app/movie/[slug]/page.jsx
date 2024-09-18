"use client"
import { movies } from "@/app/data"

import { Satisfy } from "next/font/google";
import Link from "next/link";
import MovieCard from "@/app/components/MovieCard";
import { useContext } from "react";
import { SidebarContext } from "@/app/providers";
import { useState } from "react";


const Sat = Satisfy({ subsets: ["latin"], weight: ['400'] });

export default function MovieDetails({params}) {
   const [added, setAdded] = useState('add to favorites')
   const [disable, setDisable] = useState(false)
  const {setVal, movieItem, setMovieItem} = useContext(SidebarContext)

  function handleMovieAdd(){
    setDisable(true)
    setAdded('added already')
    setVal(prev => prev + 1)
    setMovieItem([...movieItem, {title: details.title, epilogue: details.epilogue, category: details.category, img: details.img, date:details.dateReleased}] )
  }

    const details =movies.find(movie => String(movie.title).split(' ').join('-') == params.slug)
    const relatedMovies = movies.filter((card => card.category == details.category && details.title !== card.title))

    const relatedCard = relatedMovies.map((card, index) => <Link href={`/movie/${card.title.split(' ').join('-')}`} title={card.title} className='cursor-pointer' key={index}>
    <MovieCard title={card.title} type={card.type} rate={card.rating} img={card.img}/>
  </Link>)

    
    
  return (
    <div className= "bg-[url(/darkclouds.png)] h-fit text-white  bg-cover">
        <h1 className="">{details.title}</h1>
        <p className=''>{details.epilogue}</p>
        <p className="">{details.category}</p>

        <button
          onClick={handleMovieAdd}
          className="bg-slate-900 text-slate-50 p-3  rounded-full md hover:text-yellow-500" disabled={disable}>add to favorites {added}
        </button>

      <h2 className="text-2xl font-bold text-yellow-600 bg-black  ">Related movies</h2>
 
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4  bg-cover h-[1000px]">
      {relatedCard}
    
      </div>
    </div>
    
    
  )
}
