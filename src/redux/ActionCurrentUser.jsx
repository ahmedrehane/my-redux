import * as type from "./TypeActionCurrentUser";
export const login=(email,nom,civilite,profile)=>{
return{type:type.LOGIN,payload:{email:email,nom:nom,civilite:civilite,profile:profile}}
}

export const logout=()=>{
    return{type:type.LOGOUT}
}
