import "../assets/styles/Login.css";
import {FontAwesomeIcon}  from '@fortawesome/react-fontawesome';
import { faHornbill,faDAndD} from "@fortawesome/free-brands-svg-icons";
import { faUser,faKey, faTriangleExclamation} from "@fortawesome/free-solid-svg-icons";
import { NavLink,useNavigate} from 'react-router-dom';
import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import Contexto from '../context/Contexto.jsx';
import Swal from "sweetalert2";
import { useLoader } from "../hooks/useLoader.jsx";
import useApi from "../hooks/useApi.jsx";

const Login = () => {
  const API_URL = process.env.REACT_APP_API_URL;
  const navegacion = useNavigate();
  const {login} = useContext(Contexto);
  const {conCarga} = useLoader();
  const { register,handleSubmit,formState: { errors }} = useForm();
  const { respuesta, error, request } = useApi();

  const validaciones = {
    usuario: {
      required: "El nombre de usuario es obligatorio",
      pattern: {
        value: /^[a-zA-Z0-9]+$/,
        message: "El nombre de usuario solo puede contener letras y numeros",
      },
    },
    password:{
      required: "La contraseña es obligatoria"
    }
  }

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

  useEffect(() =>{ 
    if(respuesta){
      Swal.fire({
        title: respuesta.estatus+"!",
        text: "Iniciando sesion\nPor favor espera...",
        timer: 2000,
        icon:"success",
        timerProgressBar: true,
        showConfirmButton: false,
        customClass: {
          popup: 'card-black'
        }
      }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer) {
          login(respuesta.usuario);
          navegacion("/inicio",{replace:true});  
        }
      }); 
    }
  },[respuesta]);

  const onSubmit = (data) => {
    conCarga(async () =>{
      await request({
        url:`${API_URL}/login`,
        method:"POST",
        body:{"usuario":data.usuario,"password":data.password}
      })
    })  
  };
  
  return (
    <>
      <div className="container">
        <div className="row justify-content-center py-5 text-white">		
          <div className="d-none d-md-block col-md-4 bg-login-a" data-aos="fade-down" data-aos-duration="3000">
            <div className="row justify-content-center fon-lg">
              <div className="col align-self-center text-center">
                <p className="display-4 text-white"><b>DRAGON BALL API</b> <FontAwesomeIcon icon={faDAndD}/></p>
              </div>
            </div>
          </div>
          <div className="col-md-4 bg-login-b px-0" data-aos="fade-up" data-aos-duration="3000">
            <form onSubmit={handleSubmit(onSubmit)} className="row justify-content-center h-100 py-4">
              <div className="col-11 align-self-center">
                <FontAwesomeIcon icon={faHornbill} className="mx-auto d-block display-3 text-warning" />
                <h2 className="mb-5 text-center">Inicia sesion</h2>
                {errors.usuario && <b className="text-danger mb-2"><FontAwesomeIcon icon={faTriangleExclamation} className="me-2"/>{errors.usuario.message}</b> }
                <div className="form-floating mb-3 ">
                  <input {...register("usuario",validaciones.usuario)}
                  type="text" className="form-control" placeholder="Usuario"
                  />
                  <label htmlFor="usuario" className="form-label text-warning"><FontAwesomeIcon icon={faUser} className="me-2"/>Usuario</label>
                </div>
                {errors.password && <b className="text-danger mb-2"><FontAwesomeIcon icon={faTriangleExclamation} className="me-2"/>{errors.password.message}</b> }
                <div className="form-floating mb-3">
                  <input {...register("password",validaciones.password)} 
                   type="password" className="form-control" placeholder="Contraseña"/>
                  <label htmlFor="password" className="form-label text-warning"><FontAwesomeIcon icon={faKey} className="me-2"/>Contraseña</label>
                </div>
                <div className="mb-3 text-end">
                  <NavLink to="/" className="text-white">¿Olvidaste tu contraseña?</NavLink>
                </div>
                <div className="mt-4">
                  <button type="submit" className="btn btn-login w-100 mb-3">Iniciar sesión</button>
                  <NavLink to="/registro" className="btn btn-login w-100 mb-3"><i className="fa-solid fa-list-check me-2"></i>Registrarse</NavLink>
                </div>
              </div>
            </form>
          </div>        
        </div>
      </div>
    </>
  )
}

export default Login
