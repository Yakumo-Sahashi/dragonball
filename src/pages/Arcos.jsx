import { type } from '@testing-library/user-event/dist/type';
import {useReducer} from 'react';
const currentTime = new Date();
const mes = currentTime.getMonth();
const year = currentTime.getFullYear();


const meses = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];
const valorInicial = {m:mes,a:year};
const types = {
  "masM": (fecha) => {return {m:fecha.m == 11 ? 0 : fecha.m+1,a: fecha.m == 11 ? fecha.a+1 : fecha.a}},
  "menosM":(fecha) => {return {m:fecha.m == 0 ? 11 : fecha.m-1,a: fecha.m == 0 ? fecha.a-1 : fecha.a}},
  "masA":(fecha) => {return {m:fecha.m,a:fecha.a+1}},
  "menosA":(fecha) => {return {m:fecha.m,a:fecha.a-1}}
}

const reducer = (state,action) => {
 /*  let newMonth = state.m;
  let newYear = state.a;
  if(action.type == "masM"){
    newMonth = state.m == 11 ? 0 : state.m+1;
  }else if(action.type == "menosM"){
    newMonth = state.m == 0 ? 11 : state.m-1;
  }else if(action.type == "masA"){
    newYear = state.a+1;
  }else if(action.type == "menosA"){
    newYear = state.a-1;
  } */
  return types[action.type](state);
}

const Arcos = () => {
  const [fecha,dispatch] = useReducer(reducer,valorInicial);
  return (
    <div className='container mt-5'>
      {meses[fecha.m]} ({fecha.a})
      <div className="row">
        <div className="col">
          Meses:
          <button onClick={() => dispatch({type:'masM'})} className='btn btn-primary mx-2'>+</button>
          <button onClick={() => dispatch({type:'menosM'})} className='btn btn-primary mx-2'>-</button>
          Año:
          <button onClick={() => dispatch({type:'masA'})} className='btn btn-primary mx-2'>+</button>
          <button onClick={() => dispatch({type:'menosA'})} className='btn btn-primary mx-2'>-</button>
        </div>
      </div>
    </div>
  )
}

export default Arcos
