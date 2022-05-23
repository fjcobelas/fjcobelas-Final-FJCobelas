import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import logo from '../../assets/images/logo.png';
import { Link, NavLink } from 'react-router-dom';
import './NavBar.css'

const Navbar = () => {

    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <div className='container-fluid'>
                <Link className='navbar-brand' to={"/"}  >
                    <img src={logo} width="350px" alt="logo" />                    
                </Link>
                <div className='nav'>
                    <ul className='nav nav-pills'>
                        <li className='nav-item'>
                            <NavLink className='btn btn-primary btn-lg active' to={"/category/acuarelas"}  >Acuarelas</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink className='btn btn-primary btn-lg active' to={"/category/cursos"}  >Cursos</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink className='btn btn-primary btn-lg active' to={"/Nosotros"}  >Conoceme</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink className='btn btn-primary btn-lg active' to={"/Contacto"}  >Contactame</NavLink>
                        </li>
                    </ul>
                    <CartWidget />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;