import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from '../pages/Landing'
import AppLayout from '@/components/layout/AppLayout'
import Home from '@/pages/Home'

const Routers = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<AppLayout/>}>
                  <Route path='/' element={<Home/>}/>
                </Route>
                <Route path='/landing' element={<Landing/>}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default Routers