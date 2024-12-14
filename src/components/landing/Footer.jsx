import React from 'react'

const Footer = () => {
    return (
        <>
            <div className='h-screen overflow-x-hidden relative'>
                <div className='grid-motif w-full h-[50vh]'>
                    <div className='h-full' style={{
                        background: 'linear-gradient(rgba(255,255,255,.9), rgba(255,255,255,.1))'
                    }}>
                        <div className='container mx-auto max-w-[1200px] h-full px-4 py-6 flex items-end'>
                            <div className='w-full flex justify-between'>
                                <h1 className='text-8xl sm:text-9xl font-bold'>Thanks</h1>
                            </div>
                        </div>
                    </div>
                    <div className='container mx-auto max-w-[1200px] px-4 py-6'>
                        <div className='flex flex-col sm:flex-row justify-between items-baseline gap-y-6'>
                            <p className='text-sm sm:text-lg w-3/4 sm:w-1/2 text-gray-500 py-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro ea iste molestias accusamus aliquid tempore, nisi iure autem laborum laudantium!</p>
                            <div className='flex flex-row sm:flex-col text-sm sm:text-lg font-semibold gap-6'>
                                <a>Instagram</a>
                                <a>Facebook</a>
                                <a>Youtube</a>
                            </div>
                        </div>
                    </div>
                    <div className='absolute bottom-0 text-center w-full py-6'>
                        &copy; 2024 Sophia. Reserved all right
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer