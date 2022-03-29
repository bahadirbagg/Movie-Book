import React,{useEffect, useState} from "react";
import axios from "axios";
import MovieCard2 from "./MovieCard2";
import { UPCOMING_MOVIES } from "../API";



function UpcomingMovies(){

const [movies,getMovie] = useState([]);

 
 const fetchUpcomingMovies = async() => {
  const response = await axios.get(UPCOMING_MOVIES)
  getMovie(response.data.results)
}

useEffect(() => {
    fetchUpcomingMovies()
},[])

    return(
      <div className="container mx-auto px-4 pt-16 pb-16">
        <div className="popular-movies">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {movies.map((movie,i) => 
              <MovieCard2 movies={movie} key={i}/>
            )}
          </div>
        </div>
      </div>
    )

}

export default UpcomingMovies;