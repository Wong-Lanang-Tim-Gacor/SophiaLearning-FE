import React from 'react'
import Button from '../Button'

const JoinModal = (props) => {
  return (
    <>
        <div className='top-0 left-0 z-[30] w-full h-screen fixed bg-[rgba(0,0,0,.5)]'>
            <div className='mx-auto h-full flex justify-center items-center'>
                <div className='bg-white max-w-[90%] p-4 rounded-lg'>
                    <div className='border border-gray-300 p-4 rounded-md'>
                        <div className='mb-4'>
                            <p className='text-md'>Kode Kelas</p>
                            <p className='text-sm'>Mintalah kode kelas kepada pengajar, lalu masukkan kode di sini.</p>
                        </div>
                        <input value={props.code} onChange={(e) => props.onChangeCode(e.target.value)} className='w-full border border-gray-300 px-4 py-2 rounded-md' placeholder='Kode kelas' type="text"/>
                    </div>
                    <div className='mt-2 flex gap-x-2 justify-end'>
                        <Button onClick={props.onSubmit} type='primary' text='Gabung'/>
                        <Button onClick={props.onClose} type='secondary' text='Batal'/>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default JoinModal