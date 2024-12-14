import React from 'react'

const HeroSection = () => {
  return (
    <>
      <div className='grid-motif w-full h-[60vh] bg-gray-100'>
        <div className='container mx-auto max-w-[1200px] h-full px-4 py-6 flex items-end'>
          <div className='w-full flex justify-between'>
            <h1 className='text-9xl font-bold'>Sophia.</h1>
            <p className='rotate-[90deg] origin-top-right text-md font-medium -mr-6'>Lets Grow With Us</p>
          </div>
        </div>
      </div>
      <div className='container mx-auto max-w-[1200px] px-4 py-6'>
        <p className='text-lg w-3/4 text-gray-500 font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quis expedita vitae saepe sapiente. Assumenda suscipit reprehenderit ratione sunt perspiciatis?</p>
        <button className='mt-4 bg-black text-white px-8 py-2 text-lg font-semibold rounded-md'>Start</button>
      </div>
    </>
  )
}

export default HeroSection