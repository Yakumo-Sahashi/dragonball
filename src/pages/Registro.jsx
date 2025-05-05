import "../assets/styles/Login.css";
import {FontAwesomeIcon}  from '@fortawesome/react-fontawesome';
import { faHornbill,faDAndD} from "@fortawesome/free-brands-svg-icons";
import { faUser,faKey} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from 'react-router-dom'

const Registro = () => {
  return (
    <div className="container">
      <div className="row justify-content-center py-5 text-white login">		
        <div className="d-none d-md-block col-md-4 bg-registro-a" data-aos="fade-down" data-aos-duration="3000">
          <div className="row justify-content-center fon-lg">
            <div className="col align-self-center text-center">
              <p className="display-4 text-white"><b>DRAGON BALL API</b> <FontAwesomeIcon icon={faDAndD}/></p>
            </div>
          </div>
        </div>
        <div className="col-md-4 bg-login-b" data-aos="fade-up" data-aos-duration="3000">
          <form className="row justify-content-center h-100 py-4">
            <div className="col-11 align-self-center">
              <FontAwesomeIcon icon={faHornbill} className="mx-auto d-block display-3 text-warning" />
              <h2 className="mb-5 text-center">Registro</h2>
              <div className="form-floating mb-3 ">
                <input type="text" className="form-control" placeholder="Usuario"/>
                <label htmlFor="usuario" className="form-label text-warning"><FontAwesomeIcon icon={faUser} className="me-2"/>Usuario</label>
              </div>
              <div className="form-floating mb-3">
                <input type="password" className="form-control" placeholder="Contraseña"/>
                <label htmlFor="password" className="form-label text-warning"><FontAwesomeIcon icon={faKey} className="me-2"/>Contraseña</label>
              </div>
              <div className="mb-3 text-end">
                <NavLink to="/" className="text-white">¿Olvidaste tu contraseña?</NavLink>
              </div>
              <div className="mt-4">
                <button type="submit" className="btn btn-login w-100 mb-3">Registrar</button>
                <NavLink to="/login" className="btn btn-login w-100 mb-3">¿Ya tienes cuenta? Inicia sesion</NavLink>
              </div>
            </div>
          </form>
        </div>
    </div>
  </div>
  )
}

export default Registro
