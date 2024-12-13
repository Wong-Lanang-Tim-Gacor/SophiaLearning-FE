import React from 'react'

const DetailTheory = () => {
  const colorBg = 'bg-orange-600'
  return (
    <>
        <div className='flex justify-between items-center'>
          <div className='flex items-center gap-x-6'>
            <div className={`${colorBg} w-[50px] h-[50px] rounded-full grid place-content-center`}>
                <i className={'fa fa-book text-white'}></i>
            </div>
            <div>
              <h1 className='text-xl font-semibold'>Materi</h1>
              <p className='text-sm text-gray-500'>Name of Author • 13 Desember 2024</p>
            </div>
          </div>
          <i className='fas fa-ellipsis-v tetx-lg'></i>
        </div>
    </>
  )
}

export default DetailTheory