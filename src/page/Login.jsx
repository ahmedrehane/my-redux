import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../redux/ActionCurrentUser";
import { useNavigate } from "react-router-dom";


const Login = () =>{
    const [password, setPassword] = useState("")
    const [email,setEmail] = useState("")
    const [success, setSuccess] = useState(false)
    const [erreur, setErreur] = useState('')
    const dispatch=useDispatch()
    const navigate=useNavigate()

    //endpoint de l' api users

 const urlUsers= "http://localhost:3000/users"

 async function handleSubmit(e){
    e.preventDefault();
    try {
        const response=await axios.get(`${urlUsers}/${email}`)
        const user=response.data
        if(user?.password===password){
            const {id,nom,civilite,profile}=user
            dispatch(login(email,nom,civilite,profile))

            setSuccess(true)
            navigate("/")
        }
        else{
            setErreur("not logged verify your data")
            setSuccess(false)
        }
        console.log(response)
    } catch (error) {
        setSuccess(false)
        setErreur("erreur:  "+error.message)

    }
 }




 return(
    <div>

           <div className="offset-lg-3 col-lg-6">
           <form className="container" onSubmit={(event)=>handleSubmit(event)}>
                   <div className="card">
                   <div className="card-header">
                   <h1>Login</h1>
                   {success && <p style={{color:"green"}}>you are logged</p>}
                   {!success && <p style={{color:"red"}}>{erreur}</p>}

                   </div>
                   <div className="card-body">
                   <div className="row">
                   <div className="col-lg-6">
                   <div className="form-group">
               
          
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
           </div>
           </div>
           <div className="card-footer">
           <button type="submit" className="btn btn-primary">
               connexion
           </button>
           <Link to="/logo" className="btn btn-danger">
               Nouveau utilisateur
           </Link>
           </div>
           </div>
           </form>
       </div>
    


</div>

 )
}
export default Login
