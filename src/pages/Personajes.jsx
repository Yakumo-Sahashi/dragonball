import { useEffect, useRef, useState } from "react";
import Personaje from "../components/Personaje.jsx";
import AgregarPersonaje from "../components/AgregarPersonaje.jsx";
import EditarPersonaje from "../components/EditarPersonaje.jsx";
import {FontAwesomeIcon}  from '@fortawesome/react-fontawesome';
import { faHornbill} from "@fortawesome/free-brands-svg-icons";
import { faPlus,faMagnifyingGlass, faEarthAmericas} from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import Contexto from "../context/Contexto";

const Personajes = () => {
  const API_URL = process.env.REACT_APP_API_URL;
  const {usuario} = useContext(Contexto);
  const data_user = typeof usuario != 'object' ? JSON.parse(usuario) : usuario;
  const [newBusqueda,setNewBusqueda] = useState("");
  const [personajes,setPersonajes] = useState([]);
  const [orden,setOrden] = useState("a-z");
  const [cambio,setCambio] = useState(0);
  const [personajePrev,setPersonajePrev] = useState("");
  const [previo,setPrevio] = useState([]);
  const refOrden = useRef();

  useEffect(() =>{
    fetch(`${API_URL}/personajes`)
    .then((respuesta) => respuesta.json())
    .then((respuesta) =>{
      setPersonajes(respuesta)
    }).catch((error) =>{
      console.log("Se ha generado un error:",error);
    });
  },[]);

  useEffect(() =>{
    fetch(`${API_URL}/personajes`)
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
    fetch(`${API_URL}/personaje/b/${newBusqueda}`)
    .then((respuesta) => respuesta.json())
    .then((respuesta) =>{
      setPersonajes(respuesta)
    }).catch((error) =>{
      console.log("Se ha generado un error:",error);
    });
  },[newBusqueda]);

  useEffect(() =>{
    if(personajePrev !== ""){
      fetch(`${API_URL}/personaje/${personajePrev}`,{
        headers: {"Content-Type":"application/json","Autorizacion":"Bearer "+data_user.token}
      })
      .then((respuesta) => respuesta.json())
      .then((respuesta) =>{
        setPrevio(respuesta)
      }).catch((error) =>{
        console.log("Se ha generado un error:",error);
      });
      setPersonajePrev("");
    }
  },[personajePrev]);

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
            {(data_user.rol === 1 && <div className="col-md-5">
              <button type="button" className="btn btn-outline-warning mb-3 w-100" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                <FontAwesomeIcon icon={faPlus} className="me-2" />Añadir
              </button>
            </div>)}
          </div>
        </div>
        {
          personajes.map((personaje) => {
            return <div key={personaje._id} className="col-md-6 mb-3">
              <Personaje setPersonajePrev={setPersonajePrev} setCambio={setCambio} cambio={cambio} id={personaje._id} url={personaje.img} nombre={personaje.nombre} nombre_alterno={personaje.nombre_alterno} nacimiento={personaje.nacimiento} especie={personaje.especie} procedencia={personaje.procedencia}/>
            </div> ;
          })
        }
      </div>
      {(data_user.rol === 1 &&
        <>
          <AgregarPersonaje setCambio={setCambio} cambio={cambio}/>
          <EditarPersonaje setPrevio={setPrevio} previo={previo} setCambio={setCambio} cambio={cambio}/>
        </>
      )}
    </div>
  )
}

export default Personajes
