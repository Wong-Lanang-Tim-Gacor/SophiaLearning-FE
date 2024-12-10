import React, { useState } from 'react'
import Button from '../ui/Button'

const CreatePost = () => {
  const [active, setActive] = useState(false)
  const [content, setContent] = useState('')
  
  return (
    <>
        {!active ? <div onClick={() => setActive(!active)} className='border border-gray-300 p-4 rounded-lg cursor-pointer shadow-sm'>
            <p className='text-sm text-gray-500'>Buat postingan kelas</p>
        </div> : <></> }

        {active ? 
        <div className='py-6 px-4 border border-gray-300 rounded-lg shadow-sm'>
            <textarea 
                    onChange={e => setContent(e.target.value)} 
                    className='resize-none w-full bg-slate-100 outline-none p-4 text-sm h-[150px] rounded-md'>
            </textarea>
            <div className='flex justify-between items-center'>
                <div className='bg-slate-200 w-[200px] h-[20px]'></div>
                <div className='flex items-center gap-x-2'>
                    <Button 
                        onClick={() => setActive(!active)} 
                        type='secondary' 
                        text='Batal'/>
                    <Button 
                        disabled={content.length < 1 ? 'disabled' : ''}
                        type={content.length < 1 ? 'disable' : 'primary'} 
                        text='Posting'/>
                </div>
            </div>
        </div> : <></>}
    </>
  )
}

export default CreatePost