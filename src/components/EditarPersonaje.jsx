import {FontAwesomeIcon}  from '@fortawesome/react-fontawesome';
import { faTriangleExclamation,faSignature, faCalendarCheck, faSpinner, faEarthAmericas,faImage, faDragon, faFloppyDisk, faBan} from "@fortawesome/free-solid-svg-icons";
import { faPhoenixSquadron} from "@fortawesome/free-brands-svg-icons";
import { useForm } from 'react-hook-form';
import { useContext, useEffect } from 'react';
import Contexto from "../context/Contexto";
import Swal from 'sweetalert2';
import validaciones_personaje from '../context/validaciones_personaje.js';

const EditarPersonaje = ({previo,setCambio,cambio}) => {
    const {usuario} = useContext(Contexto);
    const data_user = typeof usuario != 'object' ? JSON.parse(usuario) : usuario;
    const validaciones = validaciones_personaje;
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        fetch(`http://localhost:3001/db/personaje/actualizar/${previo._id ?? ""}`,{
            method:"PUT",
            headers: {"Content-Type":"application/json","Autorizacion":"Bearer "+data_user.token},
            body:JSON.stringify(data)
        })
        .then((respuesta) => respuesta.json())
        .then((respuesta) =>{
            reset();
            setCambio(cambio + 1);
            Swal.fire({
                title: "Personaje actualizado con exito!",
                text:respuesta.msj,
                icon: "success",
                customClass: {
                    popup: 'card-black'
                },
                confirmButtonColor: "rgb(238, 135, 0,0.5)",
                confirmButtonText: "Aceptar"
            });
        }).catch((error) =>{
            Swal.fire({
                title: "Se ha generado un error!",
                text:error,
                icon: "error",
                customClass: {
                  popup: 'card-black'
                },
                confirmButtonColor: "rgb(238, 135, 0,0.5)",
                confirmButtonText: "Aceptar"
            });
        });
    }

    useEffect(()=>{
        if (previo) {
            reset(previo); // <- esto llena el formulario correctamente
        }        
    },[previo]);
    
    return (
        <div className="modal fade" id="staticBackdrop2" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true" style={{"background":"rgba(16, 30, 35, 0.7)"}}>
            <div className="modal-dialog modal-dialog-centered modal-lg">
                <form onSubmit={handleSubmit(onSubmit)} className="modal-content card-black">
                    <div className="modal-header">
                        <h3 className="modal-title text-danger" id="staticBackdropLabel"><FontAwesomeIcon icon={faDragon} className="me-2" />Añadir Personaje</h3>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="row justify-content-center">
                            <div className="col-md-6">
                                {errors.nombre && <b className="text-danger mb-2"><FontAwesomeIcon icon={faTriangleExclamation} className="me-2"/>{errors.nombre.message}</b> }
                                <div className="form-floating mb-3">
                                    <input {...register("nombre",validaciones.nombre)} type="text" className="form-control" placeholder="Nombre"/>
                                    <label htmlFor="nombre" className="form-label text-warning"><FontAwesomeIcon icon={faPhoenixSquadron} className="me-2 text-warning" />Nombre</label>
                                </div> 
                                {errors.nombre_alterno && <b className="text-danger mb-2"><FontAwesomeIcon icon={faTriangleExclamation} className="me-2"/>{errors.nombre_alterno.message}</b> }
                                <div className="form-floating mb-3">
                                    <input {...register("nombre_alterno",validaciones.nombre_alterno)} type="text" className="form-control" placeholder="Nombre Alterno"/>
                                    <label htmlFor="nombre_alterno" className="form-label text-warning"><FontAwesomeIcon icon={faSignature} className="me-2" />Nombre Alterno</label>
                                </div>    
                                {errors.nacimiento && <b className="text-danger mb-2"><FontAwesomeIcon icon={faTriangleExclamation} className="me-2"/>{errors.nacimiento.message}</b> }                        
                                <div className="form-floating mb-3">
                                    <input {...register("nacimiento",validaciones.nacimiento)} type="text" className="form-control" placeholder="Fecha Nacimiento"/>
                                    <label htmlFor="nacimiento" className="form-label text-warning"><FontAwesomeIcon icon={faCalendarCheck} className="me-2" />Fecha Nacimiento</label>
                                </div>                            
                            </div>
                            <div className="col-md-6">
                                {errors.procedencia && <b className="text-danger mb-2"><FontAwesomeIcon icon={faTriangleExclamation} className="me-2"/>{errors.procedencia.message}</b> }
                                <div className="form-floating mb-3">
                                    <select {...register("procedencia",validaciones.procedencia)} className="form-control">
                                        <option value="Tierra">Tierra</option>
                                        <option value="Namek">Namek</option>
                                        <option value="Cold">Cold</option>
                                        <option value="Nuevo Namek">Nuevo Namek</option>
                                        <option value="Vegeta">Vegeta</option>
                                        <option value="Vampa">Vampa</option>
                                        <option value="Yardrat">Yardrat</option>
                                        <option value="Kaioshin Kai">Kaioshin Kai</option>
                                        <option value="Kaio del Norte (Kaio-sama)">Kaio del Norte (Kaio-sama)</option>
                                        <option value="Kaio del Sur, Este y Oeste">Kaio del Sur, Este y Oeste</option>
                                        <option value="Bills">Bills</option>
                                    </select>
                                    <label htmlFor="procedencia" className="form-label text-warning"><FontAwesomeIcon icon={faEarthAmericas} className="me-2" />Procedencia</label>
                                </div>  
                                {errors.especie && <b className="text-danger mb-2"><FontAwesomeIcon icon={faTriangleExclamation} className="me-2"/>{errors.especie.message}</b> }                          
                                <div className="form-floating mb-3">
                                    <select {...register("especie",validaciones.especie)} className="form-control">
                                        <option value="">Selecionar</option>
                                        <option value="Humana">Humana</option>
                                        <option value="Sayajin">Sayajin</option>
                                        <option value="Androide">Androide</option>
                                        <option value="Demonio del Frio">Demonio del Frio</option>
                                        <option value="Namekiano">Namekiano</option>
                                        <option value="Dragon">Dragon</option>
                                        <option value="Kaio">Kaio</option>
                                        <option value="Demonio">Demonio</option>
                                        <option value="Tsufuru">Tsufuru</option>
                                        <option value="Majin">Majin</option>
                                    </select>
                                    <label htmlFor="especie" className="form-label text-warning"><FontAwesomeIcon icon={faSpinner} className="me-2" />Especie</label>
                                </div> 
                                {errors.img && <b className="text-danger mb-2"><FontAwesomeIcon icon={faTriangleExclamation} className="me-2"/>{errors.img.message}</b> }                           
                                <div className="form-floating mb-3">
                                    <input {...register("img",validaciones.img)} type="text" className="form-control" placeholder="URL Imagen"/>
                                    <label htmlFor="img" className="form-label text-warning"><FontAwesomeIcon icon={faImage} className="me-2" />URL Imagen</label>
                                </div>                            
                            </div>
                            <div className="col-md-3 align-self-center">
                                <img src={previo.img} className='mx-auto d-block img-fluid' alt="Previo" />
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button onClick={() => reset()} type="button" className="btn btn-outline-danger" data-bs-dismiss="modal"><FontAwesomeIcon icon={faBan} className="me-2" />Cancelar</button>
                        <button type="submit" className="btn btn-outline-warning"><FontAwesomeIcon icon={faFloppyDisk} className="me-2" />Actualizar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditarPersonaje
