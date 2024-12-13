import React from 'react'

const CodeRoom = (props) => {
    return (
        <>
            <div className='border border-gray-300 p-4 rounded-md'>
                <span className='font-normal text-gray-500 mb-3 text-sm'>Kode Kelas</span>
                {
                    props.code ? (
                        <h3 className='text-2xl font-bold py-2'>{props.code}</h3>
                    ) :
                        <h3 className='text-2xl font-bold bg-slate-300 w-full h-7'></h3>
                }
            </div>
        </>
    )
}

export default CodeRoom