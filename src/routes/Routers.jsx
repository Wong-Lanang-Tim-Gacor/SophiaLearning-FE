import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from '../pages/Landing'
import AppLayout from '@/components/layout/AppLayout'
import Home from '@/pages/Home'
import Post from '@/pages/room/Post'
import Login from "@/pages/auth/Login.jsx";
import Member from '@/pages/room/Member'
import RoomLayout from '@/components/layout/RoomLayout'
import ProtectedRoute from './ProtectedRoute'
import GuestRoute from './GuestRoute'

const Routers = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route element={<GuestRoute/>}>
                  <Route path='/landing' element={<Landing/>}/>
                  <Route path={'/login'} element={<Login/>} />
                </Route>
                <Route element={<ProtectedRoute/>}>
                  <Route path='/' element={<AppLayout/>}>
                    <Route index path='/' element={<Home/>}/>
                  </Route>
                  <Route path='/room' element={<RoomLayout/>}>
                    <Route path=':id' element={<Post/>}/>
                    <Route path=':id/member' element={<Member/>}/>
                  </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default Routers