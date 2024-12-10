import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from '../pages/Landing'
import AppLayout from '@/components/layout/AppLayout'
import Home from '@/pages/Home'
import Post from '@/pages/room/Post'
import Login from "@/pages/auth/Login.jsx";
import Member from '@/pages/room/Member'
import RoomLayout from '@/components/layout/RoomLayout'

const Routers = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path={'/login'} element={<Login/>} />
                <Route path='/' element={<AppLayout/>}>
                  <Route path='/' element={<Home/>}/>
                </Route>
                <Route path='/' element={<RoomLayout/>}>
                  <Route path='/room/:id' element={<Post/>}/>
                  <Route path='/member' element={<Member/>}/>
                </Route>
                <Route path='/landing' element={<Landing/>}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default Routers