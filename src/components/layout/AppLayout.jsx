import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../ui/Sidebar'
import Navbar from '../ui/Navbar'

const AppLayout = () => {
  return (
    <>
        <Navbar/>
        <div className='flex'>
          <div className='w-[20%]'>
            <Sidebar/>
          </div>

          {/* Main Content */}
          <div className='w-[80%] p-6'>
            <Outlet/>
          </div>
        </div>
    </>
  )
}

export default AppLayout