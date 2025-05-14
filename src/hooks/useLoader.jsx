import { useContext } from "react";
import LoaderContexto from "../context/LoaderContexto";

const useLoader = () => {
  const contexto = useContext(LoaderContexto);
  if (!contexto) {
    throw new Error('useLoader debe usarse dentro de <LoaderProvider>');
  }
  return contexto;
}

export {useLoader};
