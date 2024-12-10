import React, { useState } from 'react'

const CreatePost = () => {
  const [active, setActive] = useState(false)
  
  return (
    <>
        {!active ? <div onClick={() => setActive(!active)} className='border border-gray-300 p-4 rounded-lg cursor-pointer shadow-sm'>
            <p className='text-sm text-gray-500'>Buat postingan kelas</p>
        </div> : <></> }

        {active ? 
        <div className='py-6 px-4 border border-gray-300 rounded-lg shadow-sm'>
            <textarea className='resize-none w-full bg-slate-100 outline-none p-4 text-sm h-[150px] rounded-md'></textarea>
            <div className='flex justify-between items-center'>
                <div className='bg-slate-200 w-[200px] h-[20px]'></div>
                <div className='flex items-center'>
                    <button onClick={() => setActive(!active)} className='px-4 py-2'>Batal</button>
                    <button className='px-4 py-2'>Posting</button>
                </div>
            </div>
        </div> : <></>}
    </>
  )
}

export default CreatePost