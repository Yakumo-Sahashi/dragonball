import {useReducer} from 'react';
const currentTime = new Date();
const mes = currentTime.getMonth();
const year = currentTime.getFullYear();


const meses = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];
const valorInicial = {m:mes,a:year};
const types = {
  "masM": (fecha) => {return {m:fecha.m === 11 ? 0 : fecha.m+1,a: fecha.m === 11 ? fecha.a+1 : fecha.a}},
  "menosM":(fecha) => {return {m:fecha.m === 0 ? 11 : fecha.m-1,a: fecha.m === 0 ? fecha.a-1 : fecha.a}},
  "masA":(fecha) => {return {m:fecha.m,a:fecha.a+1}},
  "menosA":(fecha) => {return {m:fecha.m,a:fecha.a-1}}
}

const reducer = (state,action) => {
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

export default Arcos;