import React,{useEffect, useState} from "react";
import axios from "axios";
import MovieCard from "./MovieCard";



function UpcomingMovies(){

const [movies,getMovie] = useState([]);



var date = new Date();

	var d = date.getDate();
	var m = date.getMonth() + 1;
    var nextm = date.getMonth() + 2;
	var y = date.getFullYear();
    var dateString = y + '-' + (m <= 9 ? '0' + m : m) + '-' + (d <= 9 ? '0' + d : d);
	var nextMonth = y + '-' + (nextm <= 9 ? '0' + nextm : nextm) + '-' + (d <= 9 ? '0' + d : d);



 
 const fetchUpcomingMovies = async() => {
  const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${dateString}&primary_release_date.lte=${nextMonth}&api_key=4eb490f3e0e767726c90fddf79671fa1`)
  getMovie(response.data.results)
  console.log("upcoming data",response.data.results)
}

useEffect(() => {
    fetchUpcomingMovies()
},[fetchUpcomingMovies])

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

export default UpcomingMovies;