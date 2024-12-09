import React from 'react'

const Navbar = () => {
  return (
    <>
      <div className='sticky top-0 z-10 bg-white border-b border-gray-300'>
        <div className='flex justify-between items-center px-6 py-4'>
          <div>
            <h1 className='text-lg font-semibold'>Sophia Learning</h1>
          </div>

          {/* Profile */}
          <div>
            <div className='w-[32px] h-[32px] rounded-full bg-slate-300'></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar