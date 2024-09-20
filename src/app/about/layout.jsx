
import { Satisfy } from "next/font/google";


export const metadata = {
    title: "About | Creating a movie app",
    description:"The making  | A movie application",
    keywords: 'bollywood',
};

// * children - The child elements to be rendered within the layout. * //
// * A layout component for the About page of the BollyG moie app *//

const Sat = Satisfy({ subsets: ["latin"], weight: ['400'] });
export default function AboutLayout({children}) {
    return (


      <div className="text-2xl flex flex-wrap m-0 capitalize caption-top text-white bg-[url(/forestboy.png)] h-fit relative z-10">
          <div className="bg-black w-full opacity-80 h-screen absolute top-0 z-20"></div>
          <div className="relative z-50"> 

          <h1 className="mx-7"> </h1>
          <p className="mx-6 flex flex-wrap ">
            <span className="underline font-bold">About Us</span>


Welcome to BollyG, where your insatiable movie needs are met. Founded in 2019 by Mr Gaiya, we are dedicated to making your movie experiences second to none.

</p>
<h3 className="py-5 px-5 underline font-bold ">Our Mission</h3>
<p className="m-2">At BollyG, our mission is to create a platform to express your movie choices. We believe in quenching that insatiable hunger for movies from your favorite actors. Whether you are looking for series or movies and we are committed to bringing you the most exciting indian shows.</p>

          
            <h3 className="m-5 underline font-bold">Our Vision</h3>
            <p>BollyG began with a vision to of creating a service for a beautiful service for indians to go watch newly released movies and also classics. Mr Gaiya has always been saddened with the fact that he would have to go do movie stands everyday just to see a movie and hence came the idea . Over the years, we have grown from a pool of movies  to a big movie outlet, thanks to hardwork of the OG also known as Mr Gaiya.
            </p>
          </div>
          
          
          
          {children}
      </div>
    )
  }