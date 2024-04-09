import React from 'react'
import ReactDOM from 'react-dom/client'
import {Route, Routes, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import 'animate.css';
import { Home } from './components/Home.jsx'
import { About } from './components/About.jsx'
import { Securingpeople } from './components/Services/Securingpeople.jsx'
import { Securingprocess } from './components/Services/Securingprocess.jsx'
import { Securingtechnology } from './components/Services/Securingtechnology.jsx'
import { Securingthings } from './components/Services/Securingthings.jsx'
import { Securingdata } from './components/Services/Securingdata.jsx'
import { Productofferings } from './components/Productofferings.jsx'
import { Contact } from './components/Contact.jsx'
import { Career } from './components/Career.jsx'





const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path='/' element={<App />}>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/securingpeople' element={<Securingpeople/>} />
      <Route path='/securingprocess' element={<Securingprocess/>} />
      <Route path='/securingtechnology' element={<Securingtechnology/>} />
      <Route path='/securingthings' element={<Securingthings/>} />
      <Route path='/securingdata' element={<Securingdata/>} />
      <Route path='/productofferings' element={<Productofferings/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/career' element={<Career/>} />

      
      
      
    </Route>
    
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
