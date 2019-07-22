import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import initials from "../../images/rsz_1rsz_initials.png";

function Navbar()   {
    return  (
        <nav className="navdeco">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8" style={{width: "50%"}}>
                        <Link className="navbar-brand" to="/">
                            <a href="#">
                                <img src={initials} id="initials" style={{marginBottom: "10px"}} />
                                Jamil Weeks
                            </a>
                        </Link>
                    </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4" id="nav-menu">
                    <Link className="navbar-brand" style={{paddingRight: "10px"}} to="/">
                        About&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
                    </Link>
                    <Link className="navbar-brand" to="/portfolio">
                        Portfolio&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
                    </Link>
                    <Link className="navbar-brand" to="/contact">
                        Contact
                    </Link>
                </div>
            </div>
        </div>
    </nav>
    )
}

export default Navbar;
