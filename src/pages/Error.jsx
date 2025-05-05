import error from "../assets/img/goku.webp";
import {useNavigate } from "react-router-dom";

const Error = () => {
  const navegacion = useNavigate();
  return (
    <div className='container-fluid'>
      <div className="row justify-content-center text-orange fon">
        <div className="col-md-4 align-self-center">
          <img src={error} className='img-fluid mx-auto d-block' alt="Goku Error" />
        </div>
        <div className="col-md-5 text-start align-self-center">
            <h1 className='display-1'>Error 404!</h1>
            <p className='lead fs-3'><b>Pagina no localizada!!</b></p>
            <button className='btn btn-login w-50' onClick={() => navegacion("/",{replace:true})}>Volver al sitio</button>
        </div>
      </div>
    </div>
  )
}

export default Error
