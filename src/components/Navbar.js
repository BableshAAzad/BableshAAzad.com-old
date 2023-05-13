import React from 'react'
import { Link } from 'react-router-dom';
import Bableshaazad from './Bableshaazad';
import './Bableshaz.css';

export default function Navbar() {
  
    return (
        <div>
            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid">
                    <div className="logog">
                        <Link to="https://www.bableshaazad.com" rel="noopener noreferrer"><img src="logog_circle.png" alt="logog" /></Link>
                    </div>
                    <Link className="navbar-brand" to="https://www.bableshaazad.com"><Bableshaazad /></Link>
                    <button className="navbar-toggler navbarbut" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active text-dark m-2"  aria-current="page" to="/">Home</Link>
                            </li>

                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle m-2" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Projects
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/textEditor">Text Editor</Link></li>
                                    <li><a className="dropdown-item" href="/">News App</a></li>
                                    <li><Link className="dropdown-item" to="/loginForm">Form Validation</Link></li>
                                </ul>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link active text-dark m-2" to="/contactDetails">Contact Details</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active text-dark m-2" to="/services">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active text-dark m-2" to="/about">About</Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-primary" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}
