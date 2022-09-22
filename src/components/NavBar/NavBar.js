import React from 'react';
import './NavBar.css';
import {NavLink} from 'react-router-dom';
import {CartWidget} from '../CartWidget/CartWidget';

export const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
                <div className="nav-container">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/home">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/categoria/accesorios">Accesorios</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/categoria/mujeres">Mujeres</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/categoria/hombres">Hombres</NavLink>
                            </li>
                        </ul>
                        <div className='buttons'>
                            <button className='btn'> 
                                <NavLink to='/login' className='btn btn-outline-dark'>
                                    <i className="fa fa-sign-in me-1" aria-hidden="true"></i> Iniciar Sesion
                                </NavLink>
                                <NavLink to='/register' className='btn btn-outline-dark  ms-2'>
                                    <i className="fa fa-user-plus me-1" aria-hidden="true"></i> Registrarse
                                </NavLink>
                                <NavLink to='/cart' className='btn btn-outline-dark ms-2'>
                                    <i className="fa fa-shopping-cart me-1" aria-hidden="true"></i> {CartWidget}
                                </NavLink>
                            </button> 
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
