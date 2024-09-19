"use client"
import { movies } from "../data"
import Link from "next/link"
import MovieCard from "../components/MovieCard"
import { IoMdSearch } from "react-icons/io"
import { useState } from "react"

export default function MoviePage() {
  const [searchMovie, setSearchMovie] = useState('')

  // *This component renders a search bar and a grid of movie cards.It filters the movie list based on the search input and displays a message if no results are found. *//

  function filterSearch(e){
    setSearchMovie(e.target.value)
  }

  /**
   * Filters the movie list based on the search input
   
   */
  const filterLists = movies.filter(movie => String(movie.title).toLowerCase().includes
(searchMovie.toLowerCase()) || String(movie.category).toLowerCase().includes(searchMovie.toLowerCase()) )


/**
   * Renders a message if no search results are found
   */
const cards = filterLists.length == 0 ?(
  <h1 className="text-2xl">Sorry, search items do not exist</h1>
) : filterLists.map((card,index) => (
  <section  key={index} >
    <Link href={`/movie/${card.title.split(' ').join('-')} `} title={card.title}
    className="cursor-pointer ">
    
    <MovieCard title={card.title} type={card.type} rate ={card.rating} img={card.img} />
    </Link>
  </section>
))
  return (
    <>
    <div className="flex items-center bg-[url(/darkclouds.png)]  justify-between p-3 border-4 rounded-full mt-4 border-slate-950 w-3/5 m-auto">
      <input type="text" name="search" id="search" 
      className="outline-none block mt-4 w-4/5 text-2xl text-white bg-[url(/darkclouds.png)] " placeholder="Search for movies or categories or actors" 
      defaultValue={searchMovie} 
      onChange={(e)=>filterSearch(e)}/>
      <IoMdSearch className="text-2xl"/>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-16 py-32 bg-[url(/darkclouds.png)]  capitalize">
      {cards}

    </div>
    </>
  )
}
