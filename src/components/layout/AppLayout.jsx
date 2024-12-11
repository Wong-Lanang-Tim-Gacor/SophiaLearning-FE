import React, {useContext, useEffect} from 'react'
import {Outlet, useNavigate} from 'react-router-dom'
import Sidebar from '../ui/Sidebar'
import Navbar from '../ui/Navbar'
import {MenuProvider} from '@/contexts/MenuContext'
import AuthContext from "@/contexts/AuthContext.jsx";
import {CheckAuthUser} from "@/services/AuthService.jsx";

const AppLayout = () => {
    const {status,setStatus} = useContext(AuthContext)
    const navigate = useNavigate();

    useEffect(() => {
        const checkAuth = async () => {
            const user = await CheckAuthUser();
            if (status === 'not logged in' && !user) {
                return navigate('/login')
            }else{
                setStatus('logged')
            }
        }
        checkAuth().catch((err) => {
            console.log(err)
        })
    }, [status])

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