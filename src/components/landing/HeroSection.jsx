import React from 'react'

const HeroSection = () => {
  return (
    <>
      <div className='grid-motif w-full h-[60vh] bg-gray-100'>
        <div className='container mx-auto max-w-[1200px] h-full px-4 py-6 flex items-end'>
          <div className='w-full flex justify-between'>
            <h1 className='text-8xl sm:text-9xl font-bold'>Sophia.</h1>
            <p className='hidden sm:block rotate-[90deg] origin-top-right text-md font-medium -mr-6'>Lets Join</p>
          </div>
        </div>
      </div>
      <div className='container mx-auto max-w-[1200px] px-4 py-6'>
        <p className='text-md sm:text-lg w-3/4 text-gray-500 font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quis expedita vitae saepe sapiente. Assumenda suscipit reprehenderit ratione sunt perspiciatis?</p>
        <div className='flex items-center gap-x-2'>
          <button className='mt-4 bg-black text-white px-8 py-2 text-lg font-semibold rounded-md'>Masuk</button>
          <button className='mt-4 bg-white border border-gray-300 px-8 py-2 text-lg font-semibold rounded-md'>Daftar</button>
        </div>
      </div>
    </>
  )
}

export default HeroSection