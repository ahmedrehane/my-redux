import * as type from './TypeActionEmployee'

export const AddEmployee=(numero,nom,prenom,adresse)=>{

    return{type:type.ADD_EMPLOYE,payload:{numero:numero,nom:nom,prenom:prenom,adresse:adresse}}
}

export const DeleteEmployee=(numero)=>{
    return {type:"DELETE_EMPLOYE" , payload:numero}
}

export const UpdateEmployee=(numero,nom,prenom,adresse)=>{

    return{type:type.UPDATE_EMPLOYE,payload:{numero:numero,nom:nom,prenom:prenom,adresse:adresse}}
}

