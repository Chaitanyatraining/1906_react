import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link to='/' class="nav-link active" aria-current="page">Home</Link>
                            </li>
                            <li class="nav-item">
                                 <Link to='/pagination' class="nav-link">Pagination</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/listkeys' class="nav-link">ListandKeys</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/aboutus' class="nav-link">aboutus</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/useeffect' class="nav-link">useeffect</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/useeffectpagination' class="nav-link">useeffectPagination</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/useeffectunmounting' class="nav-link">useeffectunmounting</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/contactus' class="nav-link">Contact Us</Link>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar