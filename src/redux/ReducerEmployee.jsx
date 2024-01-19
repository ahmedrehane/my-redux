import * as type from './TypeActionEmployee'



const initState={
    employes:[]
    
}

export const reducerEmployee=(state=initState,action)=>{
switch (action.type) {
    case type.ADD_EMPLOYE :
        return {...state,employes:[...state.employes,action.payload]}
        
    case type.DELETE_EMPLOYE:
    return{...state,employes:state.employes.filter(emp=>emp.numero!==action.payload)}
    default:
      return  state;
}

}