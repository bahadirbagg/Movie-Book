import React,{useState} from "react";
import {Link, Redirect} from "react-router-dom"

function Header(){

const [query,setQuery] = useState('');

const searchText = (event) => {
    console.log("gueryy=",query);
    setQuery(event.target.value);
}



    return(
        <nav className=" shadow-xl bg-gray-900">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-6 text-gray-400">
                <ul className="flex flex-col md:flex-row items-center">
                    <li>
                        <Link to="/">
                            <p className="text-3xl md:text-3xl lg:text-4xl font-bold">Movie
                                <span className="text-red-600">Book</span>
                            </p>
                        </Link>    
                    </li>
                    <li className="mt-3 text-sm md:ml-28 md:mt-0 md:flex-col border-2  border-gray-600  rounded-md " >
                        <Link to="/MoviesOnCinema">
                            <p className="p-1">Movies On Cinema</p>
                        </Link>
                    </li>
                    <li className="mt-3 text-sm mb-3 md:ml-5 md:mt-0 md:mb-0 md:flex-col border-2  border-gray-600  rounded-md ">
                        <Link to="/UpcomingMovies">
                            <p className="p-1">Upcoming Movies</p>
                        </Link>
                    </li>
                </ul>
                <div className="flex flex-col md:flex-row md:ml-7 items-center">

                    <input type="text" value={query} onChange={searchText.bind(this)} className=" bg-gray-800 rounded-full md:w-64 px-4 py-1 border-2 border-gray-600" placeholder="Search" />
                    <Link to= {`/search/${query}`}>
                        <p className="  border-2 rounded-2xl p-1 border-orange-400  text-gray-400">Search</p>
                    </Link>

                </div>
            </div>
        </nav>
    )
}

export default Header;