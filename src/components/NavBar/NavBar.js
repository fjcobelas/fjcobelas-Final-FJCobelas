import { Link } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"
import logo from './logo.png';

export const NavBar = () => {

    return (
        <header className="header">
            <Link to="/"><img className="navbar-brand" src={logo} width="250px" alt="logo" /></Link>

            <nav className="header-nav">
                <Link to="/category/acuarelas" className="header-link">Acuarelas</Link>
                <Link to="/category/cursos" className="header-link">Cursos</Link>
                <Link to="/Nosotros/" className="header-link">Conoceme</Link>
                <Link to="/Contacto" className="header-link">Contactame</Link>
                <CartWidget/>
            </nav>

        </header>
    )
}