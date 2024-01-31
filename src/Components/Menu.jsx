import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../redux/ActionCurrentUser";



const Menu = () =>{
  const dispatch=useDispatch()
    return(
<nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container-fluid">
            <a className="navbar-brand" href="#">Gestion Employe</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to='/employe'>Employe</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to='/addEmploye'>Ajouter employe</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to='/registre'>Enregistrement</Link>
                      
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to='/login'>Login</Link>
                      
                    </li>

                    <li className="nav-item">
                      <button className="nav-link" onClick={()=>dispatch(logout())}>Logout</button>
                      
                    </li>

                    
                    <li className="nav-item">
                      <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true"></a>
                    </li>
                  </ul>
            </div>
      </div>
</nav>
    )
    }
    
   
    export default Menu