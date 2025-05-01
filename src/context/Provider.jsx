import { useReducer } from 'react'
import Contexto from './Contexto.jsx';
import MiReducer from './MiReducer.jsx';
import types from './types.js';

const inicio = () =>{
  const valor = localStorage.getItem("estado");
  return {
    estado: !!valor
  }
}
const Provider = ({children}) => {
  const [logeado,dispatch] = useReducer(MiReducer,{},inicio);

  const login = () =>{
    const action = {
      type:types.login
    }
    localStorage.setItem("estado",true);
    dispatch(action);
  }

  const cerrar_sesion = () => {
    const action = {
      type:types.logout
    }
    localStorage.removeItem("estado")
    dispatch(action)
  }
  return (
    <Contexto.Provider value={{...logeado,login,cerrar_sesion}}>
      {children}  
    </Contexto.Provider>
  )
}

export default Provider;