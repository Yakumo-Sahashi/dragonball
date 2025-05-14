import {useLoader} from "../hooks/useLoader.jsx";
import esfera from "../assets/img/favicon.png";

const Loader = () => {
  const {cargando} = useLoader();

  return cargando ? (
    <div className="contenedor">
      <div className="loader-container">
        <div className="loader"></div>
        <div className="loader2"></div>
        <img className="img-load" src={esfera} alt="Loader..."/>
      </div>
    </div>
  ) : null;
}

export default Loader;
