import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


const Enregistrement = () =>{
  
 const [nom, setNom] = useState("")
 const [ville, setVille] = useState("")
 const [civilite, setCivilite] = useState("feminin")
 const [password, setPassword] = useState("")
 const [email,setEmail] = useState("")
 const [adresse,setAdresse] = useState("adresse")
 const [succes, setSuccess] = useState("false")
 const [msgError,setMsgError] = useState('')
 const urlUsers= "http://localhost:3500/users"



async function handleSubmit(e){
 e.preventDefault()
 const user={id:email,nom:nom,password:password,civilite:civilite,ville:ville,adreese:adresse,profil:"admin"}
try{
    const response= await axios.post(urlUsers,user)
    setSuccess(true)
} catch (error){
    setMsgError(error.message)
    setSuccess(false)
    
}


}

return(
    
    <div>
         {succes && <p style={{color:"green"}}>enegistrement success</p>}
         {!succes && <p style={{color:"red"}}>{msgError}</p>}

                <div className="offset-lg-3 col-lg-6">
                <form className="container" onSubmit={handleSubmit}>
                        <div className="card">
                        <div className="card-header">
                        <h1>Enregistrement</h1>  
                        </div>
                        <div className="card-body">
                        <div className="row">
                        <div className="col-lg-6">
                        <div className="form-group">
                    
                <label>
                nom  <span className="errmsg">*</span>
                    </label>
                    <input
                    type="text"
                    value={nom}
                    onChange={(e) =>setNom(e.target.value)}
                    className="form-control"
                    />
                </div>
                </div>
                <div className="col-lg-6">
                <div className="form-group">
                    <label>
                    email<span className="errmsg">*</span>
                    </label> 
                <input
                    type="text"
                    value={email}
                    onChange={(e) =>setEmail(e.target.value)}
                    className="form=control"
                />
                </div>
                </div>
                <div className="col-lg-6">
                <div className="form-group">
                <label>
                     password<span className="errmsg">*</span>
                </label> 
                <input
                    type="password"
                    value={password}
                    onChange={(e) =>setPassword(e.target.value)}
                    className="form=control"
                
                />
                </div>
                </div>

                <div className="col-lg-6">
                <div className="form-group">
                <label>
                ville<span className="errmsg">*</span>
                </label> 
                <select
                className="form=control"
                onChange={(e) =>setVille(e.target.value)}
                >
                <option value="casa">casa</option>
                <option value="rabat">rabat</option>
                <option value="fes">fes</option>
                <option value="laayoune">laayoune</option>
                </select>
                </div>
                </div>
                <div className="col-lg-6">
                <div className="form-group"></div>
                <label>
                civilite<span className="errmsg">*</span>
                </label> 
                <br />

                <input
                type="radio"
                name="civilite"
                value="masculin"
                checked={civilite == "masculin"}
                onChange={(e) =>setCivilite(e.target.value)}
                className="app-check"
                
                />
                <label>Masculin</label>
                <br />
                <input
                type="radio"
                name="civilite"
                value="feminin"
                checked={civilite == "feminin"}
                onChange={(e) =>setCivilite(e.target.value)}
                className="app-check"
                />
                <label>feminin</label>
                </div>
                </div>

                <div className="col-lg-6">
                <div className="form-group">
                <label>
                adresse<span className="errmsg">*</span>
                </label> 
                <textarea
                value={adresse}
                onChange={(e) =>setAdresse(e.target.value)}
                className="form=control"
                ></textarea>
                </div>
                </div>
                </div>
                </div>
                <div className="card-footer">
                <button type="submit" className="btn btn-primary">
                    Enregistrement
                </button>
                <Link to="/" className="btn btn-danger">
                    Home
                </Link>
                </div>
                </form>
            </div>



     </div>

)


    }
    
   
   
   
   
 export default Enregistrement