import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from '../pages/Landing'
import AppLayout from '@/components/layout/AppLayout'
import Home from '@/pages/Home'
import Post from '@/pages/room/Post'
import Login from "@/pages/auth/Login.jsx";

const Routers = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path={'/login'} element={<Login/>} />
                <Route path='/' element={<AppLayout/>}>
                  <Route path='/' element={<Home/>}/>
                  <Route path='/class' element={<Post/>}/>
                </Route>
                <Route path='/landing' element={<Landing/>}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default Routers