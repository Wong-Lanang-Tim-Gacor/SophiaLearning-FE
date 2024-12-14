import React, {useContext} from 'react'
import MenuContext from '@/contexts/MenuContext'
import {Link, useNavigate} from 'react-router-dom'
import {TextSlice} from '@/utils/FormattingString'
import {Logout} from "@/services/AuthService.jsx"
import {toast} from "react-hot-toast"
import GlobalContext from '@/contexts/GlobalContext'

const Sidebar = () => {
    const {active} = useContext(MenuContext)
    const {classrooms} = useContext(GlobalContext)
    const navigate = useNavigate()

    const mainLinks = [
        {
            name: 'Beranda',
            path: '/',
            icon: 'fas fa-home'
        },
        {
            name: 'Kalender',
            path: '/calendar',
            icon: 'far fa-calendar'
        },
        {
            name: 'Daftar Tugas',
            path: '/',
            icon: 'fas fa-clipboard-list'
        }
    ]

    const handleLogout = async () => {
        try {
            toast.success('Logout sukses')
            await Logout()
            sessionStorage.clear()
            navigate('/login')
        } catch (e) {
            toast.error('Logout gagal')
        }
    }

    return (
        <>
            <div
                className='hidden sm:block sticky top-[8%] w-full bg-white border-r border-gray-300 h-screen overflow-y-scroll scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-slate-50'>
                <div className='py-3'>
                    <div className='border-b border-gray-300 pb-3'>
                        {mainLinks.map((link, index) => (
                            <div key={index}
                                 className='flex items-center gap-x-4 pl-6 py-3 hover:bg-gray-100 rounded-r-2xl w-[95%] cursor-pointer'
                                 onClick={() => {
                                     navigate(link.path)
                                 }}>
                                <div className='w-[30px] text-center'>
                                    <i className={`${link.icon} text-lg`}></i>
                                </div>
                                <p className={'text-sm'}>{link.name}</p>
                            </div>
                        ))}
                    </div>
                    <div className='py-3 border-b border-gray-300 pb-3'>
                        {
                            classrooms ?
                                classrooms?.map((room, index) => (
                                    <div key={index}
                                         className='flex items-center gap-x-4 pl-6 py-3 hover:bg-gray-100 rounded-r-2xl w-[95%] cursor-pointer'
                                         onClick={() => {
                                             navigate(`/room/${room.id}`)
                                         }}>
                                        <div key={index}
                                             className={`w-[30px] h-[30px] rounded-full ${room.bg_tw_class} flex items-center justify-center`}>
                                            <p className='text-white text-xs font-bolder'>{TextSlice(room.class_name)}</p>
                                        </div>
                                        <p className='text-sm font-medium'>{room.class_name}</p>
                                    </div>
                                )) : (
                                    [1, 2, 3, 4].map(() => (
                                        <div
                                            className='flex items-center gap-x-4 pl-6 py-3 bg-slate-200 rounded-r-2xl w-[95%] cursor-pointer my-2'>
                                            <div
                                                className={`w-[30px] h-[30px] rounded-full bg-slate-300 flex items-center justify-center`}>
                                                <p className='text-white text-xs font-bolder'></p>
                                            </div>
                                            <p className='text-sm font-medium bg-slate-300 w-22 h-7'></p>
                                        </div>
                                    ))
                                )
                        }
                    </div>
                    <div className='pl-6 py-3'>
                        <button onClick={() => navigate('/profile')}
                                className='flex items-center gap-x-6 mx-2 text-sm font-medium py-3'>
                            <i className="fas fa-user"></i>Profile
                        </button>
                        <button onClick={handleLogout}
                                className='flex items-center gap-x-6 mx-2 text-sm font-medium py-3'>
                            <i className="fas fa-sign-out"></i>Keluar
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Sidebar */}
            <div
                className={`block sm:hidden fixed top-[8%] transition-all ${active ? 'left-0' : 'left-[-100%]'} w-[80%] bg-white border-r border-gray-300 h-screen z-10 overflow-y-scroll scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-slate-50`}>
                <div className='py-3'>
                    <div className='border-b border-gray-300 pb-3'>
                        {mainLinks.map((link, index) => (
                            <div key={index}
                                 className='flex items-center gap-x-4 pl-6 py-3 hover:bg-gray-100 rounded-r-2xl w-[95%]'>
                                <div className='w-[30px] text-center'>
                                    <i className={`${link.icon} text-lg`}></i>
                                </div>
                                <Link className='text-sm' to={link.path}>{link.name}</Link>
                            </div>
                        ))}
                    </div>
                    <div className='py-3'>
                        {
                            classrooms ?
                                classrooms?.map((room, index) => (
                                    <div key={index}
                                         className='flex items-center gap-x-4 pl-6 py-3 hover:bg-gray-100 rounded-r-2xl w-[95%]'
                                         onClick={() => {
                                             navigate(`/room/${room.id}`)
                                         }}>
                                        <div key={index}
                                             className={`w-[30px] h-[30px] rounded-full ${room.bg_tw_class} flex items-center justify-center`}>
                                            <p className='text-white text-xs font-bolder'>{TextSlice(room.class_name)}</p>
                                        </div>
                                        <p className='text-sm font-medium'>{room.class_name}</p>
                                    </div>
                                )) : (
                                    [1, 2, 3, 4].map(() => (
                                        <div
                                            className='flex items-center gap-x-4 pl-6 py-3 bg-slate-200 rounded-r-2xl w-[95%] cursor-pointer  my-2'>
                                            <div
                                                className={`w-[30px] h-[30px] rounded-full bg-slate-300 flex items-center justify-center`}>
                                                <p className='text-white text-xs font-bolder'></p>
                                            </div>
                                            <p className='text-sm font-medium bg-slate-300 w-22 h-7'></p>
                                        </div>
                                    ))
                                )
                        }
                    </div>
                </div>
                <div className='pl-6 py-3'>
                    <button onClick={() => navigate('/profile')}
                            className='flex items-center gap-x-6 mx-2 text-sm font-medium py-3'>
                        <i className="fas fa-user"></i>Profile
                    </button>
                    <button onClick={handleLogout} className='flex items-center gap-x-6 mx-2 text-sm font-medium py-3'>
                        <i className="fas fa-sign-out"></i>Keluar
                    </button>
                </div>
            </div>
        </>
    )
}

export default Sidebar