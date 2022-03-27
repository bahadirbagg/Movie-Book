import axios from "axios";
import React,{useEffect, useState} from "react";

function MovieDetail(idm){
    const [movies,getMovie] = useState([]);

const IMAGE_PATH = 'https://image.tmdb.org/t/p/original';

const fetchUpcomingMovies = async() => {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${idm.match.params.id}?api_key=4eb490f3e0e767726c90fddf79671fa1&language=en-US`)
    getMovie(response.data)
    console.log("detail data movies",response.data)
  }
  
  useEffect(() => {
      fetchUpcomingMovies()
  })


    return(
        <div className="movie-details">
            <div className="container max-w-4xl mx-auto p-16" >
                <div>
                    <img src={IMAGE_PATH + movies.backdrop_path} alt="bla"  height={600} width={1000}/>
                </div>
                <div className="mt-6">
                    <h1 className="text-2xl mb-5 text-orange-600">{movies.title}</h1>
                    <p className=" text-white"> {movies.overview}</p>
                    <p className="mt-5 text-cyan-100">Genres: <span className="text-white">{movies.genres?.map((genre) => genre.name).join(", ")}</span></p>
                </div>
            </div>
        </div>

            
    )
}

export default MovieDetail;