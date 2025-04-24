import img1 from "../assets/img/personajes.jpg";
import { useState, useEffect } from "react";

const Temas = () => {
  const [contenido,setContenido] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:3000/personajes")
    .then((respuesta) => respuesta.json())
    .then((respuesta) => {
      setContenido(respuesta);
    }).catch((error) =>{
      console.log("Error al consumir la api");
    });
  },[]);

  return (
    <div className="container" style={{height:"100vh"}}>
      <div className="row justify-content-center py-4 text-white">	
        <div className="col-md-4">
          <img className="img-fluid mx-auto" src={img1} alt="Personajes" />
        </div>	
        <div className="col-md-8">
          {
            contenido.map((personaje)=>{
              return <p>{personaje.nombre}</p>
            })
          }          
        </div>
      </div>
    </div>
  )
}

export default Temas
