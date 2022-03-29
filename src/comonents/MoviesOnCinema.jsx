import React,{useEffect, useState} from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
import { MOVIES_ON_CINEMA} from "../API";


function MoviesOnCinema(){

const [movies,getMovie] = useState([]);

 
 const fetchLiveMovies = async() => {
  const response = await axios.get(MOVIES_ON_CINEMA)
  getMovie(response.data.results)
  console.log("results",response.data)
}

console.log("detail on cinema",movies)

useEffect(() => {
  fetchLiveMovies()
},[])

    return(
      <div className="container mx-auto px-4 pt-16 pb-16">
        <div className="popular-movies">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {movies.map((movie,i) => 
              <MovieCard movies={movie} key={i}/>
            )}
          </div>
        </div>
      </div>
    )

}

export default MoviesOnCinema;