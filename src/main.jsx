import React from 'react'
import ReactDOM from 'react-dom/client'
import {Route, Routes, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { Home } from './components/Home.jsx'
import { About } from './components/About.jsx'
import { Securingpeople } from './components/Services/Securingpeople.jsx'
import { Securingprocess } from './components/Services/Securingprocess.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
    
    <Route path='/' element={<App />}>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/securingpeople' element={<Securingpeople/>} />
      <Route path='/securingprocess' element={<Securingprocess/>} />
      
      
      
    </Route>
    
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
