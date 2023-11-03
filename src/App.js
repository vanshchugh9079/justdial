import React from 'react'
import Layout from './Layout'
import "./css/style.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Advertise from './pages/Advertise'
import Bellicon from './pages/Bellicon'
import Investor from './pages/Investor'
import Language from './pages/Language'
import Freelistening from './pages/Freelistening'
import Wearehiring from './pages/Wearehiring'
import Login from './component/Login'
import Main from './component/Main'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
           <Route path='/' element={<Layout/>}>
              <Route index element={<Main/>}></Route>
              <Route path='login' element={<Login/>}></Route>
           </Route>
           <Route path='/advertise' element={<Advertise/>}></Route>
           <Route path='/notification' element={<Bellicon/>}></Route>
           <Route path="/investor-relation" element={<Investor/>}></Route>
           <Route path='/language' element={<Language/>}></Route>
           <Route path='/freelisting' element={<Freelistening/>}></Route>
           <Route path='/we-are-hiring' element={<Wearehiring/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
