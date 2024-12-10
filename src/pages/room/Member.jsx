import ListMember from '@/components/room/ListMember'
import React from 'react'

const Member = () => {
    const members = ['Alexia Candra', 'Albert Einsten', 'Nicola Tesla', 'Isaac Newton']
    return (
        <>
            <div>
                <h1 className='text-xl font-semibold'>Pengajar</h1>
                <div className='grid grid-cols-2 gap-4 py-6'>
                    <ListMember member={'Alexander'} />
                </div>
            </div>
            <div>
                <h1 className='text-xl font-semibold'>Anggota Kelas</h1>
                <div className='grid grid-cols-2 gap-4 py-6'>
                    {members.map((member, index) => (
                        <ListMember member={member} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Member