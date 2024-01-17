import React from "react";



const Employee = (props) =>{
const {numero,nom,prenom,adresse}=props.employe
return(
    <div className="col-lg-4 card">
        <div className="card-header">
        <span>Employe numero:{numero}</span>
        </div>
        <div className="card-body">
        <span>nom: {nom}</span><br/>
        <span>prenom: {prenom}</span><br/>
        <span>adreese:{adresse}</span>
        </div>
        <div className="card-footer">
        <button className="btn btn-primary">modifier</button>
        <button className="btn btn-danger">supprimer</button>

        </div>

    </div>
)
}

export default Employee