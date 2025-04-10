import { useEffect, useState } from "react";
import img1 from "../assets/img/personajes.jpg";

const Personajes = () => {
  const [personajes,setPersonajes] = useState([]);
  //const [estado, setEstado] = useState(false);
  useEffect(() =>{
    fetch("http://localhost:3000/personajes")
    .then((respuesta) => respuesta.json())
    .then((respuesta) =>{
      setPersonajes(respuesta)
    }).catch((error) =>{
      console.log("Se ha generado un error:",error);
    });
  },[]);
  return (
    <div classNameName="container" style={{height:"100vh"}}>
      <div className="row justify-content-center py-4 text-white">	
        <div className="col-md-4">
          <img className="img-fluid mx-auto" src={img1} alt="Personajes" />
        </div>	
        <div className="col-md-8">
          <ul>
            {
              personajes.map((personaje) => {
                return <li>{personaje.nombre}</li> ;
              })
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Personajes
