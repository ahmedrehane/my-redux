import * as type from './TypeActionEmployee'



const initState={
    employes:[]
}

export const ReducerEmployee=(state=initState,action)=>{
switch (action.type) {
    case type.ADD_EMPLOYE :
        return {...state,employes:[...state.employes,action.payload]}
        
        

    default:
      return state;
}

}