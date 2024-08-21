import React from "react";
import { Link } from "react-router-dom";

const Navbar = () =>{
    return(
        <div className="bg-gray-800 flex justify-between items-center h-24 mx-auto px-4">
        
                    <ul className="flex">
                        <li className="text-white pl-10">
                            <Link  to="/">Home</Link>
                        </li>
                        <li className="text-white pl-10">
                            <Link to="/countries">Countries</Link>
                        </li>
                        <li className="text-white pl-10">
                            <Link to="/football">Football</Link>
                        </li>
                        <li className="text-white pl-10">
                            <Link to="/venues">Venues</Link>
                        </li>
                        <li className="text-white pl-10">
                            <Link to="/teams">Teams</Link>
                        </li>

                    </ul>
                    </div>

    )
}

export default Navbar;