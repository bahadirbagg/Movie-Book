import React from "react";
import {Link} from "react-router-dom"
import {IMAGE_PATH} from "../API"

function MovieCard2({movies}){

  
    return(
        <div className="mt-8 relative overflow-hidden"    >
            <Link to={`/details/${movies.id}`}>
                <img src={IMAGE_PATH + movies.poster_path} alt={movies.original_title} className="border-2  border-gray-600 rounded-xl hover:opacity-75 transition ease-in-out duration-150"/>
            </Link>
            <div className="absolute top-0 right-0 px-2 py-2">
                <div className="opacity-70 bg-orange-400 font-bold rounded-xl p-2 text-gray-700">Release Date:  {movies.release_date}</div>
	        </div>
            <div className="mt-2">
                <p className="  text-2xl mt-2 text-white hover:text-gray:300">{movies.title}</p>
            </div>
        </div>

            
    )
}

export default MovieCard2;