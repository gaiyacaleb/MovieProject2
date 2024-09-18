import React from 'react'
import { movies } from '../data'
import MovieCard from './MovieCard'
import Link from 'next/link'


export default function MovieList() {
  const cards = movies.sort((x,y) => y.rating - x.rating).map((card,index) => (
      <section key={index}>
        <Link href={`/movie/${String(card.title).split(' ').join('-')}`} title={card.title}>
          <MovieCard  title={card.title} type={card.type} rate={card.rating} img={card.img} category={card.category}/>
        </Link>
      </section>
  )).slice(0,9) 
return (
  <>
  < div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-2 px-16 py-32 capitalize '>
      {cards}
     
     </div>
<Link href={'/movie'} className='flex items-center justify-center my-5 bg-[url(/darkclouds.png)]'>
<span className='bg-rose-500 text-white rounded-full  p-3 hover:text-green-800'>Check out more</span>
</Link>
</>
  )
}