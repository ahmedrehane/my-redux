import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {legacy_createStore as createstore}  from 'redux'
import { Provider } from 'react-redux'
import  {reducerEmployee} from './redux/ReducerEmployee.jsx'
import { BrowserRouter } from 'react-router-dom'


 const root = ReactDOM.createRoot(document.getElementById('root'))
 const store=createstore(reducerEmployee)
 ;root.render(

  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
