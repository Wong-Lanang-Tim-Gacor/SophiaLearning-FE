import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../ui/Sidebar'
import Navbar from '../ui/Navbar'
import Navigation from '../ui/Navigation'
import { MenuProvider } from '@/contexts/MenuContext'

const RoomLayout = () => {
  return (
    <>
        <MenuProvider>
          <Navbar/>
          <div className='flex'>
            <div className='w-0 sm:w-[20%]'>
                <Sidebar/>
            </div>

            {/* Main Content */}
            <div className='w-full sm:w-[80%]'>
              <Navigation/>
              <div className='p-6 max-w-[980px] mx-auto container'>
                <Outlet/>
              </div>
            </div>
          </div>
        </MenuProvider>
    </>
  )
}

export default RoomLayout