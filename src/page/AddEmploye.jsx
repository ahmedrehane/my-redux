import React, { useState } from "react";
import {  useDispatch } from "react-redux";
import   {addEmployee} from '../redux/ActionEmployee'


const AddEmployee = () =>{
const [numero,setNumero]=useState(0)
const [nom,setNom]=useState('')
const [prenom,setPrenom]=useState('')
const [adresse,setAdresse]=useState('')
const dispatch=useDispatch()

    return(
        <div className="ofsset-lg-9 col-lg-12">
        <form>
  <div className="mb-3">
    <label htmlFor="numero" className="form-label">
      numero
      </label>
    <input type="number" className="form-control" id="numero" 
    onChange={(e)=>setNumero(e.target.value)} />
    
  </div>
  <div className="mb-3">
    <label htmlFor="nom" className="form-label">
      nom
      </label>
    <input type="text" className="form-control" id="nom"
     onChange={(e)=>setNom(e.target.value)}/>
  </div>
  <div className="mb-3">
    <label htmlFor="prenom" className="form-label">
      prenom
      </label>
    <input type="text" className="form-control" id="prenom"
     onChange={(e)=>setPrenom(e.target.value)}/>
  </div>
  
  <div className="mb-3">
    <label htmlFor="adresse" className="form-label">
      adresse
      </label>
    <input type="text" className="form-control" id="adresse"
     onChange={(e)=>setAdresse(e.target.value)}/>
  </div>
  
  <button  className="btn btn-primary" onClick={()=>dispatch(addEmployee(numero,nom,prenom,adresse))}>
    Submit
    </button>
</form>
</div>
    )
    }
    
    export default AddEmployee
