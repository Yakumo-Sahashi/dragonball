import Contexto from "../context/Contexto";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

const RutasPrivadas = ({children}) => {
    const {usuario} = useContext(Contexto);
    return (usuario) ? <><Navbar/> {children} <Footer/></> : <Navigate to="/login"></Navigate> ;
}

export default RutasPrivadas;