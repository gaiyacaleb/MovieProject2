import Image from "next/image";
import MovieList from "./components/MovieLists";
import Header from "./components/Header";


export default function Home() {
    return (
  <div className="bg-[url(/darkclouds.png)]  bg-cover  ">
    <h1 className=" flex flex-col text-white text-center items-center justify-center font-serif text-3xl ">
    
      
    </h1>
        <Header  />
        
        
        <MovieList />

      </div>
    )
}
