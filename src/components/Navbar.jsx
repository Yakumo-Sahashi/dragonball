import {FontAwesomeIcon}  from '@fortawesome/react-fontawesome';
import { faHornbill} from "@fortawesome/free-brands-svg-icons";
import { faRightFromBracket,faUser,faUserPen} from "@fortawesome/free-solid-svg-icons";
import esfera from "../assets/img/favicon.png";
import { useRef,useContext,useEffect } from "react";
import { NavLink,useNavigate } from "react-router-dom";
import Contexto from "../context/Contexto";

const Navbar = () => {
    const refMenu = useRef();
    useEffect(() => {
        const handleScroll = () => {
            if (refMenu.current) {
                if (window.scrollY > refMenu.current.offsetTop) {
                    refMenu.current.classList.add('menu-fixed');
                } else {
                    refMenu.current.classList.remove('menu-fixed');
                }
            }
        };      
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };          
    }, []);

    const {cerrar_sesion} = useContext(Contexto);
    const navegacion = useNavigate();
    const finalizar_sesion = () =>{
        navegacion("/login",{replace:true});
        cerrar_sesion();
    }

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
                            <NavLink className="btn btn-dark" to="/personajes"><FontAwesomeIcon icon={faHornbill} className="me-2" />Personajes</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="btn btn-dark" to="/arcos">Arcos</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="btn btn-dark" to="/temas">Temas</NavLink>
                        </li>
                    </ul>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                        <li className="nav-item dropdown">
                            <button type='button' className="btn btn-dark dropdown-toggle" id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                <FontAwesomeIcon icon={faUser} className="me-2"/>Usuario
                            </button>
                            <ul className="dropdown-menu bg-black" aria-labelledby="navbarDropdown">
                                <li><NavLink className="btn btn-dark w-100" to="/"><FontAwesomeIcon icon={faUserPen} className="me-2" />Editar cuenta</NavLink></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li>
                                    <button type='button' onClick={finalizar_sesion} className="btn btn-dark text-danger w-100"><FontAwesomeIcon icon={faRightFromBracket} className="me-2" />Cerrar Sesion</button>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
