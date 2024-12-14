import React from 'react'

const DetailResourceSkeleton = () => {
    return (
        <>
            <div className='flex justify-between items-center animate-pulse'>
                <div className='flex items-center gap-x-6'>
                    <div className='w-[50px] h-[50px] bg-gray-300 rounded-full animate-pulse'></div>
                    <div>
                        <div className='h-6 bg-gray-300 rounded-md w-1/3 animate-pulse'></div>
                        <div className='h-4 bg-gray-200 rounded-md w-2/5 animate-pulse'></div>
                    </div>
                </div>
                <div className='text-right'>
                    <div className="relative">
                        <button className="h-10 w-10 bg-gray-300 rounded-full animate-pulse"></button>
                        <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-300 rounded-lg shadow-lg">
                            <ul className="text-sm text-gray-700">
                                <li className="px-4 py-2 cursor-pointer hover:bg-gray-200 text-start animate-pulse"></li>
                                <li className="px-4 py-2 cursor-pointer hover:bg-gray-200 text-start animate-pulse"></li>
                                <li className="px-4 py-2 cursor-pointer hover:bg-gray-200 text-start animate-pulse"></li>
                            </ul>
                        </div>
                    </div>
                    <div className='h-4 bg-gray-300 rounded-md w-1/3 animate-pulse'></div>
                </div>
            </div>
            <div className="flex mt-5 gap-5 animate-pulse">
                <div className="w-full">
                    <div className="h-20 bg-gray-300 rounded-md w-full animate-pulse"></div>
                </div>
                <div className="w-1/3 border bg-gray-100 rounded-md h-[100px]">
                    <div className="space-y-4">
                        {Array(4).fill().map((_, idx) => (
                            <div key={idx} className="w-full border bg-gray-200 rounded-md p-4 flex items-center animate-pulse">
                                <div className="w-10 h-10 bg-gray-300 rounded-full mr-4"></div>
                                <div className="flex flex-col justify-center">
                                    <div className="h-4 bg-gray-300 rounded-md w-3/4 animate-pulse"></div>
                                    <div className="h-4 bg-gray-200 rounded-md w-1/2 animate-pulse"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailResourceSkeleton