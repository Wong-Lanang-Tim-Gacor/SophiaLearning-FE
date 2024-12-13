import React from 'react'

const InputLabel = (props) => {
  return (
    <>
        <div className='flex flex-col gap-y-2'>
            <label className='text-sm font-medium'>{props.label}</label>
            <input {...props} type={props.type} className='px-4 py-2 text-sm border border-gray-300 w-full outline-none rounded-lg'/>
        </div>
    </>
  )
}

export default InputLabel