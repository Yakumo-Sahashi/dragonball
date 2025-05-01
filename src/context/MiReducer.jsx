import types from './types.js';

const MiReducer = (state={},action) => {
  switch(action.type){
    case types.login:
      return {estado:true}
    case types.logout:
      return {estado:false}
    default:
      return state;
  }
}

export default MiReducer;

