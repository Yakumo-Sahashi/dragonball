import "../assets/styles/Login.css";
import { NavLink } from 'react-router-dom'

const Login = () => {
  return (
    <div classNameName="container">
      <div className="row justify-content-center py-4 text-white login">		
        <div className="d-none d-md-block col-md-4 bg-login-a borde-t borde-b" data-aos="fade-down" data-aos-duration="3000">
        </div>
        <div className="col-md-4 bg-login-b borde-t borde-b" data-aos="fade-up" data-aos-duration="3000">
          <form id="frm_login" className="row justify-content-center h-100 py-4">
            <div className="col-9 align-self-center">
              <h4 className="mb-5 text-center">Inicia sesion</h4>
              <div className="form-floating mb-3 ">
                <input type="text" className="form-control" placeholder="Usuario"/>
                <label for="usuario" className="form-label text-white">Usuario</label>
              </div>
              <div className="form-floating mb-3">
                <input type="password" className="form-control" placeholder="Contraseña"/>
                <label for="password" className="form-label text-white">Contraseña</label>
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
  )
}

export default Login
