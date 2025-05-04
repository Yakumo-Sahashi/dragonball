import "../assets/styles/Personaje.css";
import {FontAwesomeIcon}  from '@fortawesome/react-fontawesome';
import { faSignature, faCalendarCheck, faSpinner, faEarthAmericas,faPenToSquare,faTrashCan} from "@fortawesome/free-solid-svg-icons";
import { faPhoenixSquadron} from "@fortawesome/free-brands-svg-icons";
import { useContext } from "react";
import Contexto from "../context/Contexto";
import Swal from 'sweetalert2';

const Personaje = ({setPersonajePrev,setCambio,cambio,id,url,nombre,procedencia,nombre_alterno,nacimiento,especie,btn}) => {
  const {usuario} = useContext(Contexto);
  const data_user = typeof usuario != 'object' ? JSON.parse(usuario) : usuario;

  const eliminar = () => {
    Swal.fire({
      title: "¿Quieres eliminar el registro?",
      text: "Una vez eliminado no podras recuperar la informacion!",
      icon: "warning",
      customClass: {
        popup: 'card-black'
      },
      showCancelButton: true,
      confirmButtonColor: "rgb(238, 135, 0,0.5)",
      cancelButtonColor: "rgb(238, 0, 0,0.5)",
      confirmButtonText: "Eliminar"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch("http://localhost:3001/db/personaje/del/"+id,{
          method:"DELETE",
          headers: {"Content-Type":"application/json","Autorizacion":"Bearer "+data_user.token},
        })
        .then((respuesta) => respuesta.json())
        .then((respuesta) =>{
          Swal.fire({
            title: respuesta.estatus+"!",
            text:respuesta.msj,
            icon: respuesta.estatus === "Correcto" ? "success" : "error",
            draggable: true,
            customClass: {
              popup: 'card-black'
            },
            confirmButtonColor: "rgb(238, 135, 0,0.5)",
            confirmButtonText: "Aceptar"
          });
          setCambio(cambio + 1)
        }).catch((error) =>{
          Swal.fire({
            title: "Se ha generado un error!",
            text:error,
            icon: "error",
            draggable: true,
            customClass: {
              popup: 'card-black'
            },
            confirmButtonColor: "rgb(238, 135, 0,0.5)",
            confirmButtonText: "Aceptar"
          });
        });
      }
    });
  }
  return (
    <div className='card card-black'>
        <div className="card-body">
          <div className="row">
            <div className="col-4 col-md-5">
              <div className='card-img-p py-0' style={{"backgroundImage":`url(${url})`}}></div>
            </div>
            <div className="col-8 col-md-7">
              <h3 className='text-white mt-1'><FontAwesomeIcon icon={faPhoenixSquadron} className="me-2 text-warning" /><b>{nombre}</b></h3>
              <hr className="text-danger"/>
              <p className='lead'><FontAwesomeIcon icon={faSignature} className="me-2" />Alterno: <span className="badge bg-primary">{nombre_alterno}</span></p>
              <p className='lead'><FontAwesomeIcon icon={faCalendarCheck} className="me-2" />Nacimiento: <span className="badge bg-warning">{nacimiento}</span></p>
              <p className='lead'><FontAwesomeIcon icon={faSpinner} className="me-2" />Especie: <span className="badge bg-danger">{especie}</span></p>
              <p className='lead'><FontAwesomeIcon icon={faEarthAmericas} className="me-2" />Origen: <span className="badge bg-success">Planeta {procedencia}</span></p>
              <div className="text-end">
                <button onClick={() => setPersonajePrev(id)} type="button" className="btn btn-outline-primary mx-1 btn-sm rounded-circle" data-bs-toggle="modal" data-bs-target="#staticBackdrop2">
                  <FontAwesomeIcon icon={faPenToSquare}/>
                </button>
                <button onClick={eliminar} className='btn btn-outline-danger mx-1 btn-sm rounded-circle'><FontAwesomeIcon icon={faTrashCan}/></button>
              </div>
            </div>
          </div>
        </div>    
    </div>
  )
}

export default Personaje
