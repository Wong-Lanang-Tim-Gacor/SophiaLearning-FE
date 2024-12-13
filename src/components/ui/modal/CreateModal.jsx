import React from 'react'
import Button from '../Button'

const CreateModal = (props) => {
  return (
    <>
        <div className='top-0 left-0 z-[30] w-full h-screen fixed bg-[rgba(0,0,0,.5)]'>
            <div className='mx-auto h-full flex justify-center items-center'>
                <div className='bg-white max-w-[90%] w-[600px] p-4 rounded-lg'>
                    <div className='border border-gray-300 p-4 rounded-md'>
                        <div className='mb-4'>
                            <p className='text-md'>Buat Kelas</p>
                        </div>
                        <div className='mb-3'>
                            <label className='text-sm'>Nama Kelas</label>
                            <input value={props.code} onChange={(e) => props.onChangeCode(e.target.value)} className='w-full border border-gray-300 px-4 py-2 rounded-md' placeholder='Kode kelas' type="text"/>
                        </div>
                        <div className='mb-3'>
                            <label className='text-sm'>Deskripsi</label>
                            <textarea value={props.code} onChange={(e) => props.onChangeCode(e.target.value)} className='w-full border border-gray-300 px-4 py-2 rounded-md'></textarea>
                        </div>
                    </div>
                    <div className='mt-2 flex gap-x-2 justify-end'>
                        <Button onClick={props.onSubmit} type='primary' text='Buat'/>
                        <Button onClick={props.onClose} type='secondary' text='Batal'/>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default CreateModal