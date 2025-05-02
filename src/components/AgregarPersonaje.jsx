import {FontAwesomeIcon}  from '@fortawesome/react-fontawesome';
import { faTriangleExclamation,faSignature, faCalendarCheck, faSpinner, faEarthAmericas,faImage, faDragon, faFloppyDisk, faBan} from "@fortawesome/free-solid-svg-icons";
import { faPhoenixSquadron} from "@fortawesome/free-brands-svg-icons";
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import Contexto from "../context/Contexto";

const AgregarPersonaje = () => {
    const validaciones = {
        nombre:{
            required: "El nombre es obligatorio",
            pattern: {
                value: /^[a-zA-Z0-9.-\s]+$/,
                message: "El nombre solo puede contener letras,numeros,espacios o puntos",
            },
        },
        nombre_alterno:{
            required: "El nombre alterno es obligatorio",
            pattern: {
                value: /^[a-zA-Z0-9.-\s]+$/,
                message: "El nombre alterno solo puede contener letras,numeros,espacios o puntos",
            },
        },
        nacimiento:{
            required: "El año de nacimiento es obligatorio",
            pattern: {
                value: /^[0-9]+$/,
                message: "El año de nacimiento solo puede contener numeros enteros",
            },
        },
        procedencia:{
            required: "El lugar de procedencia es obligatorio",
            pattern: {
                value: /^[a-zA-Z\s]+$/,
                message: "El lugar de procedencia solo puede contener letras y espacios",
            },
        },
        especie:{
            required: "La especie es obligatorio",
            pattern: {
                value: /^[a-zA-Z\s]+$/,
                message: "La especie del personajes solo puede contener letras y espacios",
            },
        },
        img:{
            required: "La URL de la imagen es obligatoria",
            pattern: {
                value:  /^https?:\/\/.*\.(jpg|jpeg|png|gif|bmp|webp|svg)$/i,
                message: "La URL de la imagen no es valida",
            },
        }

    }
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const {usuario} = useContext(Contexto);
    const data_user = JSON.parse(usuario);
    const onSubmit = (data) => {
        fetch("http://localhost:3001/personaje/insercion",{
            method:"POST",
            headers: {"Content-Type":"application/json","Authorization":"Bearer "+data_user.token},
            body:JSON.stringify(data)
        })
        .then((respuesta) => respuesta.json())
        .then((respuesta) =>{
            console.log(respuesta)
        }).catch((error) =>{
            console.log("Se ha generado un error:",error);
        });
    }
    
    return (
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true" style={{"background":"rgba(16, 30, 35, 0.7)"}}>
            <div className="modal-dialog modal-dialog-centered modal-lg">
                <form onSubmit={handleSubmit(onSubmit)} className="modal-content card-black">
                    <div className="modal-header">
                        <h3 className="modal-title text-danger" id="staticBackdropLabel"><FontAwesomeIcon icon={faDragon} className="me-2" />Añadir Personaje</h3>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="row">
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
                                    <input {...register("procedencia",validaciones.procedencia)} type="text" className="form-control" placeholder="Procedencia"/>
                                    <label htmlFor="procedencia" className="form-label text-warning"><FontAwesomeIcon icon={faSpinner} className="me-2" />Procedencia</label>
                                </div>  
                                {errors.especie && <b className="text-danger mb-2"><FontAwesomeIcon icon={faTriangleExclamation} className="me-2"/>{errors.especie.message}</b> }                          
                                <div className="form-floating mb-3">
                                    <input {...register("especie",validaciones.especie)} type="text" className="form-control" placeholder="Especie"/>
                                    <label htmlFor="especie" className="form-label text-warning"><FontAwesomeIcon icon={faEarthAmericas} className="me-2" />Especie</label>
                                </div> 
                                {errors.img && <b className="text-danger mb-2"><FontAwesomeIcon icon={faTriangleExclamation} className="me-2"/>{errors.img.message}</b> }                           
                                <div className="form-floating mb-3">
                                    <input {...register("img",validaciones.img)} type="text" className="form-control" placeholder="URL Imagen"/>
                                    <label htmlFor="img" className="form-label text-warning"><FontAwesomeIcon icon={faImage} className="me-2" />URL Imagen</label>
                                </div>                            
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-outline-danger" data-bs-dismiss="modal"><FontAwesomeIcon icon={faBan} className="me-2" />Cancelar</button>
                        <button type="submit" className="btn btn-outline-warning"><FontAwesomeIcon icon={faFloppyDisk} className="me-2" />Añadir</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AgregarPersonaje
