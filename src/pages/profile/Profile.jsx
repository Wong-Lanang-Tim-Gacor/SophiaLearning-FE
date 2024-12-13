import Button from '@/components/ui/Button'
import InputLabel from '@/components/ui/InputLabel'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
    const navigate = useNavigate()
    const image = 'https://images.unsplash.com/photo-1526413232644-8a40f03cc03b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    return (
        <>
            <div className='flex items-center gap-x-6'>
                <div className='py-6'>
                    <img className='w-[100px] sm:w-[150px] aspect-square rounded-full object-cover' src={image} alt='profile' />
                </div>
                <h1 className='text-xl sm:text-2xl font-semibold'>Edit Profile</h1>
            </div>
            <form>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 sm:gap-y-8 mt-6'>
                    <InputLabel label='Nama' value='Erine Calevaria' />
                    <InputLabel label='Username' value='Erni' />
                    <InputLabel label='Email' value='erinejkt48@gmail.com' />
                    <InputLabel label='Telepon' value='628319134132' />
                </div>
                <div className='flex items-center mt-6 gap-x-2'>
                    <Button type='primary' text='Simpan' />
                    <Button onClick={() => navigate('/')} type='secondary' text='Batal' />
                </div>
            </form>
        </>
    )
}

export default Profile