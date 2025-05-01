import "../assets/styles/Login.css";
import { NavLink,useNavigate} from 'react-router-dom';
import { useContext, useEffect, useState } from "react";
import {FontAwesomeIcon}  from '@fortawesome/react-fontawesome';
import { faHornbill} from "@fortawesome/free-brands-svg-icons";
import { faUser,faKey} from "@fortawesome/free-solid-svg-icons";
import Contexto from '../context/Contexto.jsx';

const Login = () => {
  const {login} = useContext(Contexto);
  const navegacion = useNavigate();
  const [usuario,setUsuario] = useState("");
  const [password,setPassword] = useState("");
  const [token,setToken] = useState({});
  const iniciar_sesion = () =>{
    /* fetch("http://localhost:3001/login",{
      method:"POST",
      headers: {"Content-Type":"application/json"},
      body:JSON.stringify({"usuario":usuario,"password":password})
    })
    .then((respuesta) => respuesta.json())
    .then((respuesta) =>{

    }).catch((error) =>{
      console.log("Se ha generado un error:",error);
    });   */  
    login();
    navegacion("/inicio",{replace:true});
  }
  return (
    <>
      <div className="container">
        <div className="row justify-content-center py-5 text-white">		
          <div className="d-none d-md-block col-md-4 bg-login-a px-0" data-aos="fade-down" data-aos-duration="3000">
          </div>
          <div className="col-md-4 bg-login-b px-0" data-aos="fade-up" data-aos-duration="3000">
            <form className="row justify-content-center h-100 py-4">
              <div className="col-11 align-self-center">
                <FontAwesomeIcon icon={faHornbill} className="mx-auto d-block display-3 text-warning" />
                <h4 className="mb-5 text-center">Inicia sesion</h4>
                <div className="form-floating mb-3 ">
                  <input onChange={(e) => setUsuario(e.target.value)} value={usuario} type="text" className="form-control" placeholder="Usuario"/>
                  <label htmlFor="usuario" className="form-label text-warning"><FontAwesomeIcon icon={faUser} className="me-2"/>Usuario</label>
                </div>
                <div className="form-floating mb-3">
                  <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" className="form-control" placeholder="Contraseña"/>
                  <label htmlFor="password" className="form-label text-warning"><FontAwesomeIcon icon={faKey} className="me-2"/>Contraseña</label>
                </div>
                <div className="mb-3 text-end">
                  <NavLink to="/" className="text-white">¿Olvidaste tu contraseña?</NavLink>
                </div>
                <div className="mt-4">
                  <button type="button" onClick={iniciar_sesion} className="btn btn-login w-100 mb-3">Iniciar sesión</button>
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
