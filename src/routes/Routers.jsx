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
import Assignment from "@/pages/room/Assignment.jsx";
import CreateAssignment from "@/pages/room/assignment/CreateAssignment.jsx";
import DetailPost from '@/pages/room/DetailPost'
import ProfileLayout from '@/components/layout/ProfileLayout'
import Profile from '@/pages/profile/Profile'
import EditPassword from '@/pages/profile/EditPassword'
import Calendar from '@/pages/Calendar'

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
                    <Route path='/calendar' element={<Calendar/>}/>
                  </Route>
                  <Route path='/room' element={<RoomLayout/>}>
                    <Route path=':id' element={<Post/>}/>
                    <Route path=':id/detail' element={<DetailPost/>}/>
                      <Route path=':id/member' element={<Member/>}/>
                      <Route path=':id/assignment' element={<Assignment/>}/>
                      <Route path=':id/assignment/create' element={<CreateAssignment/>}/>
                  </Route>
                  <Route path='/profile' element={<ProfileLayout/>}>
                    <Route path='/profile' element={<Profile/>}/>
                    <Route path='/profile/password' element={<EditPassword/>}/>
                  </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default Routers