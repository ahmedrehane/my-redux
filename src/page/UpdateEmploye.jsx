import React, { useEffect, useState } from "react";
import {useDispatch,useSelector} from "react-redux";
import {addEmployee} from '../redux/ActionEmployee'
import { useParams } from "react-router-dom";



const UpdateEmploye = () =>{
const [numero,setNumero]=useState(0)
const [nom,setNom]=useState('')
const [prenom,setPrenom]=useState('')
const [adresse,setAdresse]=useState('')
const dispatch=useDispatch()
const employes=useSelector(state=>state.employes)
const num=useParams().numero
const handleSubmit =(e) =>{
e.preventDefault();
}
useEffect(()=>{
    setNumero(num)

},[])
    return(
        <div className="ofsset-lg-9 col-lg-12">
          <h3>Ajoute Employe {employes.length}</h3>
        <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="numero" className="form-label">
      numero
      </label>
    <input type="number" className="form-control" id="numero"  value={numero}
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
  
  <button  className="btn btn-primary" onClick={()=>dispatch(addEmployee(parseInt (numero),nom,prenom,adresse))}>
    Ajouter
    </button>
</form>
</div>
    )
    }
    
    export default UpdateEmploye

    