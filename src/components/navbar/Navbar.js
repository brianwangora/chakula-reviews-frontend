import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(){
    return(
        <nav className="navbar bg-grey">
            <div className="container-fluid">
                <Link className="nav-link" to="/">| HOME | </Link>
                <Link className="nav-link" to="/restaurants">| RESTAURANTS | </Link>
                <Link className="nav-link" to="/reviewform">| ADD A REVIEW | </Link>
            </div>
        </nav>
    )
}