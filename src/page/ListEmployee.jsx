import React from "react";
import {  useSelector } from "react-redux";
import Employee from "../Components/Employee";



const ListEmployee = () =>{
    const employes= useSelector(state=>state.employes)
    return(
        <div>
        <h3>Liste Employe</h3>
        <div className="row">
    {employes.map((emp,index)=>{
        return(
        <Employee employe={emp} key={index}/> 
        )
    })}
        </div>

        </div>
    )
    }
    
    export default ListEmployee
    