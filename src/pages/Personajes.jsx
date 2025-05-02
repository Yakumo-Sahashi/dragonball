import { useEffect, useState } from "react";
import Personaje from "../components/Personaje.jsx";
import AgregarPersonaje from "../components/AgregarPersonaje.jsx";
import {FontAwesomeIcon}  from '@fortawesome/react-fontawesome';
import { faHornbill, faSuperpowers} from "@fortawesome/free-brands-svg-icons";
import { faPlus,faMagnifyingGlass, faEarthAmericas} from "@fortawesome/free-solid-svg-icons";

const Personajes = () => {
  const [especie,setEspecie] = useState("");
  const [personajes,setPersonajes] = useState([]);
  //const [estado, setEstado] = useState(false);
  useEffect(() =>{
    fetch("http://localhost:3001/personajes")
    .then((respuesta) => respuesta.json())
    .then((respuesta) =>{
      setPersonajes(respuesta)
    }).catch((error) =>{
      console.log("Se ha generado un error:",error);
    });
  },[]);

  useEffect(() =>{
    fetch("http://localhost:3001/personajes")
    .then((respuesta) => respuesta.json())
    .then((respuesta) =>{
      setPersonajes(respuesta)
    }).catch((error) =>{
      console.log("Se ha generado un error:",error);
    });
  },[especie]);

  return (
    <div className="container">
      <div className="row justify-content-center py-4 text-white">
        <div className="col mb-3 card-black">
          <h1 className="display-4 text-center text-warning mt-2"><FontAwesomeIcon icon={faHornbill} className="me-2" />Personajes</h1>
          <hr className="text-warning"/>
          <div className="row justify-content-around">
            <div className="col-md-5">
              <div className="form-floating mb-3">
                <select onChange={(e) => setEspecie(e.target.value)} className="form-control">
                  <option value="">Todas</option>
                  <option value="Humana">Humana</option>
                  <option value="Sayajin">Sayajin</option>
                  <option value="Demonio del Frio">Demonio del Frio</option>
                  <option value="Namekiano">Namekiano</option>
                </select>                  
                <label htmlFor="especie" className="form-label text-warning"><FontAwesomeIcon icon={faSuperpowers} className="me-2" />Especie</label>
              </div>
            </div>
            <div className="col-md-5">
              <div className="form-floating mb-3">
                <select className="form-control">
                  <option value="">Todos</option>
                  <option value="">Tierra</option>
                  <option value="">Vegeta</option>
                  <option value="">Namek del Frio</option>
                  <option value="">Cold</option>
                </select>                  
                <label htmlFor="planeta" className="form-label text-warning"><FontAwesomeIcon icon={faEarthAmericas} className="me-2" />Planeta</label>
              </div>
            </div>
            <div className="col-md-5">
              <div className="form-floating mb-3">
                <select className="form-control">
                  <option value="">Ninguno</option>
                  <option value="">Nombre</option>
                  <option value="">Nombre Alterno</option>
                  <option value="">Planeta</option>
                  <option value="">Especie</option>
                </select>                  
                <label htmlFor="ordenar" className="form-label text-warning"><FontAwesomeIcon icon={faEarthAmericas} className="me-2" />Ordenar</label>
              </div>
            </div>
            <div className="col-md-5">
              <div className="form-floating mb-3 ">
                <input type="text" className="form-control" placeholder="Buscar"/>
                  <label htmlFor="buscar" className="form-label text-warning"><FontAwesomeIcon icon={faMagnifyingGlass} className="me-2" />Buscar</label>
              </div>
            </div>
            <div className="col-md-5">
              <button type="button" className="btn btn-outline-warning mb-3 w-100" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                <FontAwesomeIcon icon={faPlus} className="me-2" />Añadir
              </button>
            </div>
            <div className="col-md-5">
              <button type="button" className="btn btn-outline-warning mb-3 w-100" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                <FontAwesomeIcon icon={faPlus} className="me-2" />Reiniciar
              </button>
            </div>
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
