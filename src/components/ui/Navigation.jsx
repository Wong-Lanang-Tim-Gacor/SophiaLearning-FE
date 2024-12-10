import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
    const navs = [
        {
            name: 'Forum',
            path: '/class'
        },
        {
            name: 'Tugas',
            path: '/assignment'
        },
        {
            name: 'Anggota',
            path: '/member'
        }
    ]

    const activeStyle = 'text-green-600 text-sm font-bold'
    const nonActiveStyle = 'text-gray-400 text-sm font-normal'
    return (
        <>
            <div className='sticky top-[8%] bg-white border-b border-gray-300'>
                <div className='p-6 max-w-[980px] mx-auto container flex gap-x-8 sm:gap-x-12 pb-6'>
                    {navs.map((nav, index) => (
                        <Link
                            className={`${nav.path === '/class' ? activeStyle : nonActiveStyle}`}
                            key={index}
                            to={nav.path}>
                            {nav.name}
                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Navigation