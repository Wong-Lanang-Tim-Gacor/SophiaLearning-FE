import React, { useContext } from 'react'
import MenuContext from '@/contexts/MenuContext'

const Navbar = () => {
  const { active, setActive } = useContext(MenuContext)

  return (
    <>
      <div className='sticky top-0 z-20 bg-white border-b border-gray-300'>
        <div className='flex justify-between items-center px-6 py-4'>
          <div className='flex items-center gap-x-4'>
            <i onClick={() => setActive(!active)} className='fa fa-bars text-lg block sm:hidden'></i>
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