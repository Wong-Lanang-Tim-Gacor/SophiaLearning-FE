import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../ui/Sidebar'
import Navbar from '../ui/Navbar'
import Navigation from '../ui/Navigation'

const RoomLayout = () => {
  return (
    <>
        <Navbar/>
        <div className='flex'>
          <div className='w-[20%]'>
              <Sidebar/>
          </div>

          {/* Main Content */}
          <div className='w-[80%]'>
            <Navigation/>
            <div className='p-6 max-w-[980px] mx-auto container'>
              <Outlet/>
            </div>
          </div>
        </div>
    </>
  )
}

export default RoomLayout