
import './App.css'
import AddEmploye from './page/AddEmploye'
import ListEmployee from './page/ListEmployee'
import { Route,Routes} from 'react-router-dom'
import Home from './page/Home'
import NotFound from './page/NotFound'
import Menu from './Components/Menu'
import UpdateEmploye from './page/UpdateEmploye'
import Enregistrement from './page/Enregistrement' 
import Login from './page/Login'





function App() {


  return (
    
      <div className='App'>
        <Menu/>
          <Routes>
              <Route path='/' element={<Home/>}/> 
              <Route path='/employe' element={<ListEmployee/>}/> 
              <Route path='/addEmploye' element={<AddEmploye/>}/> 
              <Route path='/updateEmploye/:numero' element={<UpdateEmploye/>}/>
              <Route path='*' element={<NotFound/>}/>
              <Route path='/registre' element={<Enregistrement/>}/> 
              <Route path='/logo' element={<Login/>}/> 

          </Routes>
      </div>
        
    
  )
}

export default App
