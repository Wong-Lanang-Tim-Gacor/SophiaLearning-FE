import React from 'react'

const Feature = () => {
    return (
        <>
            <div className='py-12'>
                <div className='flex flex-col h-full items-center justify-center mx-auto max-w-[1200px] px-4'>
                    <h1 className='text-5xl sm:text-6xl w-3/4 font-bold text-center'>Fitur Yang Tersedia?</h1>
                    <div className='grid grid-cols-1 sm:grid-cols-2 py-12 sm:py-24 gap-x-6 gap-y-4 sm:gap-y-8'>
                        <div className='border border-gray-300 p-6 rounded-md'>
                            <h2 className='text-lg font-semibold'>Manajemen Kelas</h2>
                            <p className='text-sm text-gray-500 mt-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero ipsum inventore voluptas, veniam labore eius.</p>
                        </div>
                        <div className='border border-gray-300 p-6 rounded-md'>
                            <h2 className='text-lg font-semibold'>Tugas & Penilaian</h2>
                            <p className='text-sm text-gray-500 mt-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero ipsum inventore voluptas, veniam labore eius.</p>
                        </div>
                        <div className='border border-gray-300 p-6 rounded-md'>
                            <h2 className='text-lg font-semibold'>Materi</h2>
                            <p className='text-sm text-gray-500 mt-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero ipsum inventore voluptas, veniam labore eius.</p>
                        </div>
                        <div className='border border-gray-300 p-6 rounded-md'>
                            <h2 className='text-lg font-semibold'>Forum Diskusi</h2>
                            <p className='text-sm text-gray-500 mt-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero ipsum inventore voluptas, veniam labore eius.</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Feature