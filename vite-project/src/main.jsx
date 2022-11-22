import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import Home from './Home'
import About from './About'
import Faqs from './Faqs'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  //agregamos etiquetas browserRouter
  <BrowserRouter>
  {/* agregamos 2 componentes nuevos */}
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/faqs' element={<Faqs/>}/>
    </Routes>
  </BrowserRouter> 
)
9