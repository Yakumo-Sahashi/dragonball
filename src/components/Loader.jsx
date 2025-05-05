import { useRef,useEffect } from "react";
import esfera from "../assets/img/favicon.png";

const Loader = () => {
    const refLoader = useRef();
    useEffect(() => {
      const handleLoad = () => {
        if (refLoader.current) {
          refLoader.current.style.visibility = 'hidden';
          refLoader.current.style.opacity = '0';
        }
      };
  
      window.addEventListener('load', handleLoad);
      return () => {
        window.removeEventListener('load', handleLoad);
      };
    }, []);

    return (
      <div ref={refLoader} className="contenedor">
        <div className="loader-container">
          <div className="loader"></div>
          <div className="loader2"></div>
          <img className="img-load" src={esfera} alt="Loader..."/>
        </div>
      </div>
    )
}

export default Loader;
