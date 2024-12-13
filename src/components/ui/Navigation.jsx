import React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

const Navigation = () => {
    const { id } = useParams();
    const location = useLocation(); // Hook untuk mendapatkan lokasi saat ini

    const navs = [
        {
            name: 'Kelas',
            path: `/room/${id}`,
        },
        {
            name: 'Tugas',
            path: `/room/${id}/assignment`
        },
        {
            name: 'Anggota',
            path: `/room/${id}/member`
        }
    ];

    const activeStyle = 'text-green-600 text-sm font-bold';
    const nonActiveStyle = 'text-gray-400 text-sm font-normal';

    return (
        <div className='sticky top-[8%] bg-white border-b border-gray-300'>
            <div className='p-6 max-w-[980px] mx-auto container flex gap-x-8 sm:gap-x-12 pb-6'>
                {navs.map((nav, index) => (
                    <Link
                        key={index}
                        to={nav.path}
                        className={location.pathname === nav.path ? activeStyle : nonActiveStyle}
                    >
                        {nav.name}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Navigation;
