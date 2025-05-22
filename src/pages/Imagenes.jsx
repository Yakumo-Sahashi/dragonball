import { useEffect, useState, useContext} from "react";
import {FontAwesomeIcon}  from '@fortawesome/react-fontawesome';
import { faImage, faLink, faTrash, faTriangleExclamation } from "@fortawesome/free-solid-svg-icons"; 
import { faHornbill } from "@fortawesome/free-brands-svg-icons";
import useApi from "../hooks/useApi";
import { useLoader } from "../hooks/useLoader.jsx";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import Contexto from "../context/Contexto";

const Imagenes = () => {
    const API_URL = process.env.REACT_APP_API_URL;
    const {usuario} = useContext(Contexto);
    const data_user = typeof usuario != 'object' ? JSON.parse(usuario) : usuario;
    const [imagenes,setImagenes] = useState({imagenes:[]});
    const [actualizar,setActualizar] = useState(0);
    const {iniciarCarga,detenerCarga} = useLoader();
    const {respuesta, error, request } = useApi();
    const [files, setFiles] = useState([]);
    const [previews, setPreviews] = useState([]);
    const {register,reset,handleSubmit,formState: { errors }} = useForm();

    useEffect(() => {
        if(respuesta) setImagenes(respuesta)
    },[respuesta]);
  
    useEffect(() =>{
        request({
            url:`${API_URL}/imagen`,
            method:"GET",
        })
    },[actualizar]);

    useEffect(()=>{
        if(error){
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
        }
    },[error]);

    
    useEffect(() => {
        if (!files.length) {
            setPreviews([]);
            return;
        }

        const newPreviews = Array.from(files).map(file => URL.createObjectURL(file));
        setPreviews(newPreviews);
        return () => newPreviews.forEach(url => URL.revokeObjectURL(url));
    }, [files]);

    const eliminar = (id) => {
        Swal.fire({
            title: "¿Quieres eliminar la imagen?",
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
                iniciarCarga();
                request({
                    url:`${API_URL}/imagen/`+id,
                    method:"DELETE",
                    headers: {"Autorizacion":"Bearer "+data_user.token}
                })
                setActualizar(actualizar+1) 
                detenerCarga();
            }
        });
    }

    const validaciones = { 
        image: {
            required: "Debes cargar un archivo de tipo imagen"
        }
    }
    const onSubmit = (data) => {
        iniciarCarga()
        const formData = new FormData();
        for (let i = 0; i < data.image.length; i++) {
            formData.append('image', data.image[i]);
        }
        fetch(`${API_URL}/imagenes`,{
            method:"POST",
            headers: {"Autorizacion":"Bearer "+data_user.token},
            body:formData
        })
        .then(respuesta => respuesta.json())
        .then(respuesta => {
             Swal.fire({
                title: respuesta.estatus,
                text: respuesta.msj,
                icon: respuesta.estatus === "Correcto" ? "success" : "error",
                customClass: {
                    popup: 'card-black'
                },
                showCancelButton: false,
                confirmButtonColor: "rgb(238, 135, 0,0.5)",
                confirmButtonText: "Aceptar"
            });
            setFiles([]);
            setPreviews([]);
            setActualizar(actualizar+1);
            reset();
        })
        .catch(error => console.log(error))
        .finally(() => detenerCarga());

    }

    const [copiado, setCopiado] = useState(false);

    const btn_copiar = async (enlace) => {
        try {
            await navigator.clipboard.writeText(enlace);
            setCopiado(true);
            Swal.fire({
                title: "Enlace copiado!",
                timer: 2000,
                icon:"success",
                timerProgressBar: true,
                showConfirmButton: false,
                customClass: {
                    popup: 'card-black'
                }
            });
        } catch (error) {
            console.error('Error al copiar:', error);
        }
    };

    return (
        <>
            <div className="container mt-4">
                <div className="row justify-content-center">
                    <div className="col-12 mb-3 card-black">
                        <h1 className="display-4 text-center text-warning mt-2"><FontAwesomeIcon icon={faHornbill} className="me-2" />Imagenes</h1>
                        <hr className="text-warning"/>
                        <form onSubmit={handleSubmit(onSubmit)} className="row justify-content-center">
                            <div className="col-md-4">
                                {errors.image && <b className="text-danger mb-2"><FontAwesomeIcon icon={faTriangleExclamation} className="me-2"/>{errors.image.message}</b> }
                                <div className="form-floating mb-3 ">
                                    <input type="file" {...register("image",validaciones.image)} className="form-control" placeholder="Imagenes" accept="image/*" multiple onChange={(e)=> setFiles(e.target.files)}/>
                                    <label htmlFor="image" className="form-label text-warning"><FontAwesomeIcon icon={faImage} className="me-2" />Imagenes</label>
                                </div>
                                <button type="submit" className="btn btn-outline-warning mb-3 w-100">Añadir</button>
                            </div>
                        </form>
                        <div className="py-4">
                            {previews.length > 0 && (
                                <div className="contenedor-img">
                                {previews.map((src, i) => (
                                    <img className="img-prev" key={i} src={src} alt={`preview ${i}`}/>
                                ))}
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="masonry">
                            {imagenes.imagenes && imagenes.imagenes.map((imagen) => {
                                return <div key={imagen.nombre} className="card mb-4 card-black-img">
                                    <img src={imagen.url} alt={imagen.nombre}  className="card-img"/>
                                    <div className="card-body">
                                        <button onClick={() => btn_copiar(imagen.url)} type="button" className="btn btn-outline-primary mx-1"><FontAwesomeIcon icon={faLink} title="Copiar enlace"/></button>
                                        <button onClick={() => eliminar(imagen.nombre)} type="button" className="btn btn-outline-danger mx-1"><FontAwesomeIcon icon={faTrash} title="Eliminar"/></button>
                                    </div>
                                </div>
                            })}                       
                        </div>
                    </div>
                </div>
            </div>      
        </>
  )
}

export default Imagenes;
