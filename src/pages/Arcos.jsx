import {FontAwesomeIcon}  from '@fortawesome/react-fontawesome';
import { faBattleNet} from "@fortawesome/free-brands-svg-icons";
import { faPlus,faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from 'react';
import Arco from '../components/Arco';

const Arcos = () => {
  const API_URL = process.env.REACT_APP_API_URL;
  const [arcos, setArcos] = useState([]);
  useEffect(() =>{
    fetch(`${API_URL}/arcos`)
    .then((respuesta) => respuesta.json())
    .then((respuesta) =>{
      setArcos(respuesta)
    }).catch((error) =>{
      console.log("Se ha generado un error:",error);
    });
  },[]);
  return (
    <div className="container">
      <div className="row justify-content-center py-4 text-white">
        <div className="col mb-3 card-black">
          <h1 className="display-4 text-center text-warning mt-2"><FontAwesomeIcon icon={faBattleNet} className="me-2" />Arcos</h1>
          <hr className="text-warning"/>
          <div className="row justify-content-around">
            <div className="col-md-5">
              <div className="form-floating mb-3 ">
                <input type="text" className="form-control" placeholder="Buscar"/>
                  <label htmlFor="buscar" className="form-label text-warning"><FontAwesomeIcon icon={faMagnifyingGlass} className="me-2" />Buscar</label>
              </div>
            </div>
            <div className="col-md-5 align-self-center">
              <button type="button" className="btn btn-outline-warning mb-3 w-100" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                <FontAwesomeIcon icon={faPlus} className="me-2" />Añadir
              </button>
            </div>
          </div>
        </div>
        {
          arcos.map((arco) => {
            return <div key={arco._id} className="col-md-12 mb-3">
              <Arco id={arco._id} saga={arco.saga} descripcion={arco.descripcion} episodios={arco.episodios} antagonistas={arco.antagonistas} img={arco.img}/>
            </div> ;
          })
        }
      </div>
    </div>    
  )
}

export default Arcos;