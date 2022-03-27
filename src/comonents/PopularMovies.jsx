import React,{useEffect, useState} from "react";
import axios from "axios";
import MovieCard from "./MovieCard";



function PopularMovies(){

  const [movies,getMovie] = useState([]);

 const fetchPopularMovies = async() => {
   const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=4eb490f3e0e767726c90fddf79671fa1`)
   getMovie(response.data.results)
   console.log("popular data",response.data.results)
 }

useEffect(() => {
  fetchPopularMovies()
},[])

    return(
      <div className="container mx-auto px-4 pt-16 pb-16">
        <div className="popular-movies">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {movies.map((movie,i) => 
              <MovieCard movies={movie} key={i}/>
            )}
          </div>
        </div>
      </div>
    )

}

export default PopularMovies;