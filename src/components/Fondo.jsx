import { useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

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
            document.body.style.backgroundImage = "url('/images/bg01.jpg')";
        }
    }, [location]);
  
    return (
        <>
            {children}
        </>
    );
}

export default Fondo;