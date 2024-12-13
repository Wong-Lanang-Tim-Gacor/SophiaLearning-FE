import React from 'react'

const DetailAssignment = () => {
  const colorBg = 'bg-orange-600'
  return (
    <>
        <div className='flex justify-between items-center'>
          <div className='flex items-center gap-x-6'>
            <div className={`${colorBg} w-[50px] h-[50px] rounded-full grid place-content-center`}>
                <i className={'fa fa-tasks text-white'}></i>
            </div>
            <div>
              <h1 className='text-xl font-semibold'>Membuat Web Anime</h1>
              <p className='text-sm text-gray-500'>Name of Author • 13 Desember 2024</p>
              <p className='text-sm font-medium'>Max Score: 100</p>
            </div>
          </div>
          <div className='text-right'>
            <i className='fas fa-ellipsis-v text-lg'></i>
            <p className='text-sm font-medium'>Tenggat: 19 Desember</p>
          </div>
        </div>
    </>
  )
}

export default DetailAssignment