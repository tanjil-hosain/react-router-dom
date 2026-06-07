import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom'
import MyRoutes from './MyRoutes'

export default function Nav() {
    return (
        <>
            <BrowserRouter>
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                    <div className="container-fluid">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <MyRoutes></MyRoutes>
            </BrowserRouter>


        </>
    )
}
