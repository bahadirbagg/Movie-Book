import axios from "axios";
import React,{useEffect, useState} from "react";
import {BACKDROP_PATH} from "../API"
import YouTube from 'react-youtube';

function MovieDetail(idm){
    const [movies,getMovie] = useState([]);
    const [video,getVideo] = useState([]);
    const [cast,getCast] = useState([]);




const fetchDetailMovies = async() => {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${idm.match.params.id}?api_key=4eb490f3e0e767726c90fddf79671fa1&language=en-US`)
    const response2 = await axios.get(`https://api.themoviedb.org/3/movie/${idm.match.params.id}/credits?api_key=4eb490f3e0e767726c90fddf79671fa1&language=en-US`)

    getMovie(response.data);
    getCast(response2.data)
    console.log("cast",response2.data);
  }

const fetchVideo = async() => {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${idm.match.params.id}/videos?api_key=4eb490f3e0e767726c90fddf79671fa1&language=en-US&language=en-US`)
    getVideo(response.data.results.find(vid => vid.name.includes('Trailer')));
    console.log("video",response.data);
}



useEffect(() => {
    fetchDetailMovies()
    fetchVideo()
},[])

const renderTrailer = () => {
    return(
        <YouTube videoId={video.key} opts={opts}/>
    )
}

const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 0,
    },
  };

    return(
        <div className="movie-details">
            <div className="container sm:max-w-4xl md:max-w-4xl mx-auto p-16" >
                <div>
                    <img src={BACKDROP_PATH + movies.backdrop_path} alt={movies.original_title}  height={600} width={1000}/>
                </div>
                <div className="mt-6">
                    <h1 className="text-2xl md:text-2xl mb-5 text-orange-600">{movies.title}</h1>
                    <p className="text-sm md:text-xl text-white"> {movies.overview}</p>
                    <p className="text-xs md:text-sm mt-5 text-cyan-100">Genres: <span className="text-white">{movies.genres?.map((genre) => genre.name).join(", ")}</span></p>
                </div>
                <div className="mt-16" >
                    {video.key ? renderTrailer() : null}
                </div>
            </div>
        </div>
    )
}

export default MovieDetail;