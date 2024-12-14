import React from 'react'

const Attachment = () => {
    const image = 'https://images.unsplash.com/photo-1526413232644-8a40f03cc03b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    return (
        <>
            <h1 className='text-lg font-semibold mb-12'>Tugas Dikumpulkan</h1>
            {[1,2,3,4].map((item) => (
                <div className='border-b border-slate-200 py-2'>
                    <div className='flex items-top gap-x-4'>
                        <img className='w-[50px] h-[50px] rounded-full object-cover' src={image} alt='profile' />
                        <div className='flex w-full justify-between'>
                            <div>
                                <p className='text-sm font-medium'>Alexandrina</p>
                                <p className='text-xs text-gray-500'>15 Desember 2024</p>
                                <div className='grid grid-cols-4 w-full gap-4 py-4'>
                                    <div className="w-full border bg-gray-100 rounded-md px-4 py-2 flex items-center cursor-pointer">
                                        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-2">
                                            <i className="fas fa-file text-gray-600 text-lg"></i>
                                        </div>
                                        <span className="font-medium text-sm text-gray-800">Name File</span>
                                    </div>
                                    <div className="w-full border bg-gray-100 rounded-md px-4 py-2 flex items-center cursor-pointer">
                                        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-2">
                                            <i className="fas fa-file text-gray-600 text-lg"></i>
                                        </div>
                                        <span className="font-medium text-sm text-gray-800">Name File</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label className='text-xs text-right'>Nilai</label>
                                <div className='flex'>
                                    <input className='tetx-sm w-[30px] border-b border-gray-300 outline-none'/>
                                    <p className='text-sm'>/100</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Attachment