import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  const mainLinks = [
    {
      name: 'Beranda',
      path: '/',
      icon: 'fas fa-home'
    },
    {
      name: 'Kalender',
      path: '/calender',
      icon: 'far fa-calendar'
    },
    {
      name: 'Daftar Tugas',
      path: '/',
      icon: 'fas fa-clipboard-list'
    }
  ]

  const classrooms = [
    {
      name: 'Matematika',
      icon: 'M',
      color: 'bg-rose-500'
    },
    {
      name: 'Sains Umum',
      icon: 'S',
      color: 'bg-blue-500'
    },
    {
      name: 'Programming',
      icon: 'P',
      color: 'bg-purple-500'
    }
  ]
  return (
    <>
      <div className='w-full bg-white border-r border-gray-300 min-h-screen'>
        <div className='py-3 sticky top-[10%]'>
          <div className='border-b border-gray-300 pb-3'>
            { mainLinks.map((link, index) => (
              <div key={index} className='flex items-center gap-x-4 pl-6 py-3 hover:bg-gray-100 rounded-r-2xl w-[95%]'>
                <div className='w-[30px] text-center'>
                  <i className={`${link.icon} text-lg`}></i>
                </div>
                <Link className='text-sm' to={link.path}>{link.name}</Link>
              </div>
            )) }
          </div>
          <div className='py-3'>
            { classrooms.map((room, index) => (
              <div key={index} className='flex items-center gap-x-4 pl-6 py-3 hover:bg-gray-100 rounded-r-2xl w-[95%]'>
                <div key={index} className={`w-[30px] h-[30px] rounded-full ${room.color} flex items-center justify-center`}>
                  <p className='text-white text-md'>{room.icon}</p>
                </div>
                <p className='text-sm font-medium'>{room.name}</p>
              </div>
            )) }
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar