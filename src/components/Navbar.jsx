import React from "react";
import { Link } from "react-router-dom";

const Navbar = () =>{
    return(
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/sports">Sports</Link>
                </li>
                <li>
                    <Link to="/football">Football</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;