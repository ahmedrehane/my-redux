import * as type from './TypeActionEmployee'
import { LOGIN,LOGOUT } from './TypeActionCurrentUser' 



const initState={
    employes:[],
    currentUser:null
    
}

export const reducerEmployee=(state=initState,action)=>{
switch (action.type) {
    case type.ADD_EMPLOYE :
        return {...state,employes:[...state.employes,action.payload]}
        
    case type.DELETE_EMPLOYE:
    return{...state,employes:state.employes.filter(emp=>emp.numero!==action.payload)}
    case type.UPDATE_EMPLOYE:
        return {...state,employes:state.employes.map(emp=>{
            if(emp.numero!==action.payload.numero){
                return {...emp}
            }else{
               const {nom,prenom,adresse}=action.payload
                return {...emp,nom:nom,prenom:prenom,adresse:adresse}
            }
        })

        }
        case LOGIN:
            return {...state,currentUser:action.payload}
            case LOGOUT:
             return {...state,currentUser:null}
    default:
      return  state;
}

}