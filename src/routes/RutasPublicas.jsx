import Contexto from "../context/Contexto";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

const RutasPublicas = ({children}) => {
    const {estado} = useContext(Contexto);
    return (!estado) ? children : <Navigate to="/"></Navigate>;
}

export default RutasPublicas
