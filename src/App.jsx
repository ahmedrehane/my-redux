
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
import { useSelector } from 'react-redux'



function App() {

  const currentUser=useSelector(state=>state.currentUser)


  return (
    
      <div className='App'>
        <Menu/>
          <Routes>
              <Route path='/' element={<Home/>}/> 
              {currentUser && <Route path='/addEmploye' element={<AddEmploye/>}/> }
              {currentUser && <Route path='/employe' element={<ListEmployee/>}/> }
              {!currentUser &&<Route path='/login' element={<Login/>}/> }
              {currentUser && <Route path='/registre' element={<Enregistrement/>}/> }

              <Route path='/updateEmploye/:numero' element={<UpdateEmploye/>}/>
              <Route path='*' element={<NotFound/>}/>
              
              

          </Routes>
      </div>
        
    
  )
}

export default App
