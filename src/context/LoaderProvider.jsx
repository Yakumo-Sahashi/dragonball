import { useState } from 'react';
import LoaderContexto from "./LoaderContexto";

const LoaderProvider = ({ children }) => {
  const [cargando, setCargando] = useState(false);

  const iniciarCarga = () => setCargando(true);
  const detenerCarga = () => setCargando(false);

  const conCarga = async (accion) => {
    try {
      setCargando(true);
      return await accion();
    } finally {
      setCargando(false);
    }
  };

  return (
    <LoaderContexto.Provider value={{ cargando, iniciarCarga, detenerCarga, conCarga }}>
      {children}
    </LoaderContexto.Provider>
  );
}

export default LoaderProvider;