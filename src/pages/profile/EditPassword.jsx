import Button from '@/components/ui/Button'
import InputLabel from '@/components/ui/InputLabel'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const EditPassword = () => {
    const navigate = useNavigate()
    const image = 'https://images.unsplash.com/photo-1526413232644-8a40f03cc03b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    return (
        <>
            <h1 className='text-xl sm:text-2xl font-semibold py-12'>Ubah Password</h1>
            <form>
                <InputLabel label='Password saat ini'/>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 sm:gap-y-8 mt-4'>
                    <InputLabel label='Buat password baru'/>
                    <InputLabel label='Ulangi password baru'/>
                </div>
                <div className='flex items-center mt-6 gap-x-2'>
                    <Button type='primary' text='Simpan' />
                    <Button onClick={() => navigate('/')} type='secondary' text='Batal' />
                </div>
            </form>
        </>
    )
}

export default EditPassword