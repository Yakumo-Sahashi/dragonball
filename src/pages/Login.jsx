import "../assets/styles/Login.css";
import {FontAwesomeIcon}  from '@fortawesome/react-fontawesome';
import { faHornbill} from "@fortawesome/free-brands-svg-icons";
import { faUser,faKey, faTriangleExclamation} from "@fortawesome/free-solid-svg-icons";
import { NavLink,useNavigate} from 'react-router-dom';
import { useContext } from "react";
import { useForm } from "react-hook-form";
import Contexto from '../context/Contexto.jsx';

const Login = () => {
  const {login} = useContext(Contexto);
  const navegacion = useNavigate();

  const iniciar_sesion = (data={}) =>{
    login(data);
    navegacion("/inicio",{replace:true});
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    fetch("http://localhost:3001/login",{
      method:"POST",
      headers: {"Content-Type":"application/json"},
      body:JSON.stringify({"usuario":data.usuario,"password":data.password})
    })
    .then((respuesta) => respuesta.json())
    .then((respuesta) =>{
      iniciar_sesion(respuesta.usuario);      
    }).catch((error) =>{
      console.log("Se ha generado un error:",error);
    });
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center py-5 text-white">		
          <div className="d-none d-md-block col-md-4 bg-login-a px-0" data-aos="fade-down" data-aos-duration="3000">
          </div>
          <div className="col-md-4 bg-login-b px-0" data-aos="fade-up" data-aos-duration="3000">
            <form onSubmit={handleSubmit(onSubmit)} className="row justify-content-center h-100 py-4">
              <div className="col-11 align-self-center">
                <FontAwesomeIcon icon={faHornbill} className="mx-auto d-block display-3 text-warning" />
                <h4 className="mb-5 text-center">Inicia sesion</h4>
                {errors.usuario && <b className="text-danger mb-2"><FontAwesomeIcon icon={faTriangleExclamation} className="me-2"/>{errors.usuario.message}</b> }
                <div className="form-floating mb-3 ">
                  <input {...register("usuario", {
                    required: "El nombre de usuario es obligatorio",
                    pattern: {
                      value: /^[a-zA-Z0-9]+$/,
                      message: "El nombre de usuario solo puede contener letras y numeros",
                    },
                  })} 
                  type="text" className="form-control" placeholder="Usuario"
                  />
                  <label htmlFor="usuario" className="form-label text-warning"><FontAwesomeIcon icon={faUser} className="me-2"/>Usuario</label>
                </div>
                {errors.password && <b className="text-danger mb-2"><FontAwesomeIcon icon={faTriangleExclamation} className="me-2"/>{errors.password.message}</b> }
                <div className="form-floating mb-3">
                  <input {...register("password", {
                    required: "La contraseña es obligatoria"
                  })} 
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
