import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../ui/Sidebar'
import Navbar from '../ui/Navbar'
import { MenuProvider } from '@/contexts/MenuContext'

const AppLayout = () => {
  return (
    <>
        <MenuProvider>
          <Navbar/>
          <div className='flex'>
            <div className='w-0 sm:w-[20%]'>
                <Sidebar/>
            </div>

            {/* Main Content */}
            <div className='w-full sm:w-[80%] p-6'>
              <Outlet/>
            </div>
          </div>
        </MenuProvider>
    </>
  )
}

export default AppLayout