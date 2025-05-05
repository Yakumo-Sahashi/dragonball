import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Fondo = ({children}) => {
    const location = useLocation();
    const fondos = {
        "/":"url('/images/bg.webp')",
        "/personajes":"url('/images/bg02.webp')",
        "/arcos":"url('/images/bg06.webp')",
        "/temas":"url('/images/bg05.webp')",
        "/login":"url('/images/bg03.webp')",
        "/registro":"url('/images/bg04.webp')",
    }

    useEffect(() => {
        if(location.pathname in fondos){
            document.body.style.backgroundImage = fondos[location.pathname];
        }else{
            document.body.style.backgroundImage = "url('/images/bg01.webp')";
        }
    },[location]);
  
    return (
        <>
            {children}
        </>
    );
}

export default Fondo;