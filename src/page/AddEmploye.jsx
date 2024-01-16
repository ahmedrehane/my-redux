import React from "react";



const AddEmployee = () =>{
    return(
        <div className="ofsset-lg-9 col-lg-12">
        <form>
  <div className="mb-3">
    <label htmlFor="numero" className="form-label">numero</label>
    <input type="number" className="form-control" id="numero" />
    
  </div>
  <div className="mb-3">
    <label htmlFor="nom" className="form-label">nom</label>
    <input type="text" className="form-control" id="nom"/>
  </div>
  <div className="mb-3">
    <label htmlFor="prenom" className="form-label">prenom</label>
    <input type="text" className="form-control" id="prenom"/>
  </div>
  
  <div className="mb-3">
    <label htmlFor="adresse" className="form-label">adresse</label>
    <input type="text" className="form-control" id="adresse"/>
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
</div>
    )
    }
    
    export default AddEmployee
