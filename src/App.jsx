
import './App.css'
import AddEmploye from './page/AddEmploye'
import ListEmployee from './page/ListEmployee'
import { Route,Routes} from 'react-router-dom'
import Home from './page/Home'



function App() {


  return (
    <>
      <div className='App'>
        <h1>App</h1>
        <Routes>
        <Route path='/' element={<Home/>}/> 
        <Route path='/emplyes' element={<ListEmployee/>}/> 

        </Routes>
       
      
      </div>
        
    </>
  )
}

export default App
