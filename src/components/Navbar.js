import React from 'react';
import './Navbar.css';
import logo from './logo.PNG';
import { Link } from "react-router-dom";




export default function Navbar(props) {
    return (<>
        < nav className="navbar nav navbar-expand-lg navbar-light bg-light" id="Nav">
            <div className="container-fluid" id="NavMain">
                <div>
                <a className="navbar-brand" href="/"> <img src={logo} id="logo" /></a>
                </div>
                <div className='container-fluid justify-content-center' id="quote">
                    <h2>{props.quote}</h2>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0" id="options">

                        <li className="nav-item">

                            <Link className="nav-link active" aria-current="page" to="/"  >
                                Home

                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/about" >About Us</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Login
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item" to="/officeLogin">Office Login</Link></li>
                                <li><Link className="dropdown-item" to="/travellersLogin">Traveller's Login</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" to="/signup">Sign Up</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#bottom" >Contact Us</a>
                        </li>

                    </ul>
                    <form className="d-flex" id='search-container'>
                        <input id='search-box' className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit" id="btn">Search</button>
                    </form>
                </div>
            </div>
        </nav >

    </>
    )
}

