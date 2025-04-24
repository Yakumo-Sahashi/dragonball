import { useEffect, useState } from "react";
import Personaje from "../components/Personaje.jsx";
import AgregarPersonaje from "../components/AgregarPersonaje.jsx";
import {FontAwesomeIcon}  from '@fortawesome/react-fontawesome';
import { faHornbill} from "@fortawesome/free-brands-svg-icons";
import { faPlus} from "@fortawesome/free-solid-svg-icons";

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
    <div className="container">
      <div className="row justify-content-center py-4 text-white">
        <div className="col-12 mb-3 rounded" style={{"background":"rgba(0,0,0,0.7)"}}>
          <h1 className="display-4 text-center text-warning"><FontAwesomeIcon icon={faHornbill} className="me-2" />Personajes</h1>
          <hr className="text-warning"/>
          <div className="text-end">
            <button type="button" class="btn btn-outline-warning mb-3" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
              <FontAwesomeIcon icon={faPlus} className="me-2" />Añadir
            </button>
          </div>
        </div>
        {
          personajes.map((personaje) => {
            return <div key={personaje._id} className="col-md-6 mb-3">
              <Personaje url={personaje.img} nombre={personaje.nombre} nombre_alterno={personaje.nombre_alterno} nacimiento={personaje.nacimiento} especie={personaje.especie} procedencia={personaje.procedencia}/>
            </div> ;
          })
        }
      </div>
      <AgregarPersonaje/>
    </div>
  )
}

export default Personajes
