import * as type from './TypeActionEmployee'

export const addEmployee=(numero,nom,prenom,adresse)=>{

    return{type:type.ADD_EMPLOYE,payload:{numero:numero,nom:nom,prenom:prenom,adresse:adresse}}
}

export const deleteEmployee=(numero)=>{
    return {type:"DELETE_EMPLOYE" , payload:numero}
}

export const updateEmployee=(numero,nom,prenom,adresse)=>{

    return{type:type.UPDATE_EMPLOYE,payload:{numero:numero,nom:nom,prenom:prenom,adresse:adresse}}
    
}

