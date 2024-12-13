import React from 'react'
import { MenuProvider } from '@/contexts/MenuContext'
import Sidebar from '../ui/Sidebar'
import Navbar from '../ui/Navbar'
import { Outlet } from 'react-router-dom'

const ProfileLayout = () => {
    return (
        <>
            <MenuProvider>
                <Navbar />
                <div className='flex'>
                    <div className='w-0 sm:w-[20%]'>
                        <Sidebar />
                    </div>

                    {/* Main Content */}
                    <div className='p-6 max-w-[980px] mx-auto container'>
                        <Outlet />
                    </div>
                </div>
            </MenuProvider>
        </>
    )
}

export default ProfileLayout