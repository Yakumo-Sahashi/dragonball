import { useRef } from "react";
import esfera from "../assets/img/favicon.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const refMenu = useRef();
    document.addEventListener("DOMContentLoaded", () =>{
        window.addEventListener("scroll", () => {
            if (window.scrollY  > refMenu.current.offsetTop) {
               refMenu.current.classList.add('menu-fixed');
            } else {
               refMenu.current.classList.remove('menu-fixed');
            }
        });    
    });

    return (
        <nav ref={refMenu} className="navbar navbar-expand-lg navbar-light bg-black">
            <div className="container text-center">
                <NavLink className="navbar-brand text-white" to="/"><img className="me-2" src={esfera} width="32px" alt="Esfera" />Dragon Ball API</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                        <li className="nav-item">
                            <NavLink className="btn btn-dark " to="/">Inicio</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="btn btn-dark" to="/personajes">Personajes</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="btn btn-dark" to="/arcos">Arcos</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="btn btn-dark" to="/temas">Temas</NavLink>
                        </li>
                    </ul>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                        <li className="nav-item">
                            <NavLink className="btn btn-dark" to="/login">Iniciar Sesion</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
