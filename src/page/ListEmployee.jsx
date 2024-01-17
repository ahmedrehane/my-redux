import React from "react";
import {  useSelector } from "react-redux";
import Employee from "../Components/Employee";



const ListEmployee = () =>{
    const employes= useSelector(state=>state.employes)
    return(
        <div>
        <h3>Liste Employe</h3>
        <div className="row">
        <Employee  employe={{numero:10,nom:"REHANE",prenom:"AHMED",adresse:"sidi maarouf zenith 1"}} />
        <Employee  employe={{numero:10,nom:"REHANE",prenom:"AHMED",adresse:"sidi maarouf zenith 1"}} />    
        <Employee  employe={{numero:10,nom:"REHANE",prenom:"AHMED",adresse:"sidi maarouf zenith 1"}} />
        <Employee  employe={{numero:10,nom:"REHANE",prenom:"AHMED",adresse:"sidi maarouf zenith 1"}} />
        <Employee  employe={{numero:10,nom:"REHANE",prenom:"AHMED",adresse:"sidi maarouf zenith 1"}} />
        <Employee  employe={{numero:10,nom:"REHANE",prenom:"AHMED",adresse:"sidi maarouf zenith 1"}} />

        </div>

        </div>
    )
    }
    
    export default ListEmployee
    