import React from "react"
import { useDispatch } from "react-redux"
import {deleteEmployee} from '../redux/ActionEmployee'
import { Link } from "react-router-dom"



const Employee = (props) =>{
const {numero,nom,prenom,adresse}=props.employe
const dispatch=useDispatch()
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
        <Link className="btn btn-primary" to={`/updateEmploye/${numero}`}>modifier</Link>
        <button className="btn btn-danger" onClick={()=>dispatch(deleteEmployee(numero))} >supprimer</button>

        </div>

    </div>
)
}

export default Employee