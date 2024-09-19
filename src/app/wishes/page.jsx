"use client"
import { useContext } from "react"
import { SidebarContext } from "../providers"
import Image from "next/image"
import Delete from "./Delete"

//*This component displays a list of movies in the user's wish basket. If the basket is empty, it displays a message prompting the user to add a movie.
//
export default function WishesPage() {
    const{movieItem} = useContext(SidebarContext)
  return (
    <div className="pt-24 text-white bg-[url(/darkclouds.png)] h-[1000px] bg-cover">
        {movieItem.length == 0 ?
        (
            <h2 className="capitalize text-2xl px-4">add movie to your wish basket</h2>
        )
        :
        (
            <div>
                <table className="w-4/5 m-auto">
                <thead>
                    <tr>
                        <th className="px-11">image</th>
                        <th className="px-11">title</th>
                        <th className="px-11">epilogue</th>
                    </tr>
                </thead>
                <tbody>
                    {movieItem.map((movie, index) => (
                        <tr key={index}>
                            <td><Image src= {`/mv/${movie.img}`} alt={movie.title} title={movie.category} width={'150'} height={'200'}/></td>
                            <td className="px-5">{movie.title}</td>
                            <td>{movie.epilogue}</td>

                            <td>
                                <Delete index={index} title={movie.title} />
                            </td>
                        </tr>
                    ))
                    
                    }
                </tbody>
                </table>
            </div>
        )

        }
    </div>
  )
}
