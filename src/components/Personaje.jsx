import "../assets/styles/Personaje.css";
import {FontAwesomeIcon}  from '@fortawesome/react-fontawesome';
import { faSignature, faCalendarCheck, faSpinner, faEarthAmericas,faPenToSquare,faTrashCan} from "@fortawesome/free-solid-svg-icons";
import { faPhoenixSquadron} from "@fortawesome/free-brands-svg-icons";
import Swal from 'sweetalert2';

const Personaje = ({url,nombre,procedencia,nombre_alterno,nacimiento,especie}) => {
  const eliminar = () => {
    Swal.fire({
      title: "¿Quieres eliminar el registro?",
      text: "Una vez eliminado no podras recuperar la informacion!",
      icon: "warning",
      background: "rgb(238, 135, 0,0.8)" ,
      color:"#fff",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si,Eliminar!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Eliminacion completa!",
          text: "El registro fue eliminado",
          icon: "success"
        });
      }
    });
  }
  return (
    <div className='card card-black'>
        <div className="card-body">
          <div className="row">
            <div className="col-4 col-md-5">
              <div className='card-img-p py-0' style={{"background-image":`url(${url})`}}></div>
            </div>
            <div className="col-8 col-md-7">
              <h3 className='text-white mt-1'><FontAwesomeIcon icon={faPhoenixSquadron} className="me-2 text-warning" /><b>{nombre}</b></h3>
              <hr className="text-danger"/>
              <p className='lead'><FontAwesomeIcon icon={faSignature} className="me-2" />Alterno: <span className="badge bg-primary">{nombre_alterno}</span></p>
              <p className='lead'><FontAwesomeIcon icon={faCalendarCheck} className="me-2" />Nacimiento: <span className="badge bg-warning">{nacimiento}</span></p>
              <p className='lead'><FontAwesomeIcon icon={faSpinner} className="me-2" />Especie: <span className="badge bg-danger">{especie}</span></p>
              <p className='lead'><FontAwesomeIcon icon={faEarthAmericas} className="me-2" />Origen: <span className="badge bg-success">{procedencia}</span></p>
              <div className="text-end">
                <button className='btn btn-outline-primary mx-1 btn-sm rounded-circle'><FontAwesomeIcon icon={faPenToSquare}/></button>
                <button onClick={eliminar} className='btn btn-outline-danger mx-1 btn-sm rounded-circle'><FontAwesomeIcon icon={faTrashCan}/></button>
              </div>
            </div>
          </div>
        </div>    
    </div>
  )
}

export default Personaje
