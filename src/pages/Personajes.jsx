import { useEffect, useRef, useState } from "react";
import Personaje from "../components/Personaje.jsx";
import AgregarPersonaje from "../components/AgregarPersonaje.jsx";
import {FontAwesomeIcon}  from '@fortawesome/react-fontawesome';
import { faHornbill, faSuperpowers} from "@fortawesome/free-brands-svg-icons";
import { faPlus,faMagnifyingGlass, faEarthAmericas} from "@fortawesome/free-solid-svg-icons";

const Personajes = () => {
  const [newBusqueda,setNewBusqueda] = useState("");
  const [personajes,setPersonajes] = useState([]);
  const [orden,setOrden] = useState("a-z");
  const [cambio,setCambio] = useState(0);
  const refOrden = useRef();
  useEffect(() =>{
    fetch("http://localhost:3001/db/personajes")
    .then((respuesta) => respuesta.json())
    .then((respuesta) =>{
      setPersonajes(respuesta)
    }).catch((error) =>{
      console.log("Se ha generado un error:",error);
    });
  },[]);

  useEffect(() =>{
    fetch("http://localhost:3001/db/personajes")
    .then((respuesta) => respuesta.json())
    .then((respuesta) =>{
      setPersonajes(respuesta)
    }).catch((error) =>{
      console.log("Se ha generado un error:",error);
    });
  },[cambio]);

  useEffect(() =>{
    let ordenamiento = {
      "a-z": [...personajes].sort((a,b) => a.nombre.localeCompare(b.nombre)),
      "z-a": [...personajes].sort((a,b) => b.nombre.localeCompare(a.nombre)),
    }
    if(orden !== "")
      setPersonajes(ordenamiento[orden]);
  },[orden]);

  useEffect(() =>{
    refOrden.current.value="";
    fetch(`http://localhost:3001/db/personaje/b/${newBusqueda}`)
    .then((respuesta) => respuesta.json())
    .then((respuesta) =>{
      setPersonajes(respuesta)
    }).catch((error) =>{
      console.log("Se ha generado un error:",error);
    });
  },[newBusqueda]);

  return (
    <div className="container">
      <div className="row justify-content-center py-4 text-white">
        <div className="col mb-3 card-black">
          <h1 className="display-4 text-center text-warning mt-2"><FontAwesomeIcon icon={faHornbill} className="me-2" />Personajes</h1>
          <hr className="text-warning"/>
          <div className="row justify-content-around">
            <div className="col-md-5">
              <div className="form-floating mb-3">
                <select ref={refOrden} onChange={(e) => setOrden(e.target.value)} className="form-control">
                  <option value="">Selecionar</option>
                  <option value="a-z">A-Z</option>
                  <option value="z-a">Z-A</option>
                </select>                  
                <label htmlFor="ordenar" className="form-label text-warning"><FontAwesomeIcon icon={faEarthAmericas} className="me-2" />Ordenar</label>
              </div>
            </div>
            <div className="col-md-5">
              <div className="form-floating mb-3 ">
                <input onChange={(e) => setNewBusqueda(e.target.value)} type="text" className="form-control" placeholder="Buscar"/>
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
              <Personaje setCambio={setCambio} cambio={cambio} id={personaje._id} url={personaje.img} nombre={personaje.nombre} nombre_alterno={personaje.nombre_alterno} nacimiento={personaje.nacimiento} especie={personaje.especie} procedencia={personaje.procedencia}/>
            </div> ;
          })
        }
      </div>
      <AgregarPersonaje setCambio={setCambio} cambio={cambio}/>
    </div>
  )
}

export default Personajes
