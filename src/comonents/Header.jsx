import React from "react";
import {Link} from "react-router-dom"

function Header(){
    return(
        <nav className=" shadow-xl bg-gray-900">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-6 text-gray-400">
                <ul className="flex flex-col md:flex-row items-center">
                    <li>
                        <Link to="/">
                            <p className="sm:text-3xl md:text-3xl lg:text-4xl font-bold">Movie
                                <span className="text-red-600">Book</span>
                            </p>
                        </Link>    
                    </li>
                    <li className="mt-3 md:ml-28 md:mt-0 md:flex-col border-2  border-gray-600  rounded-md " >
                        <Link to="/MoviesOnCinema">
                            <p className="p-1">Movies On Cinema</p>
                        </Link>
                    </li>
                    <li className="mt-3 mb-3 md:ml-5 md:mt-0 md:mb-0 md:flex-col border-2  border-gray-600  rounded-md ">
                        <Link to="/UpcomingMovies">
                            <p className="p-1">Upcoming Movies</p>
                        </Link>
                    </li>
                    

                </ul>
                <div className="flex flex-col md:flex-row md:ml-7 items-center">
                    <input type="text" className="bg-gray-800 rounded-full w-64 px-4 py-1 border-2 border-gray-600" placeholder="Search"/>
                </div>
               
            </div>
           
        </nav>
    )
}

export default Header;