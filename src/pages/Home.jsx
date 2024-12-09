import Card from '@/components/ui/Card'
import React from 'react'

const Home = () => {
  const classrooms = [
    {
      name: 'Matematika',
      author: 'Alexandrina Bell',
      color: 'bg-rose-500'
    },
    {
      name: 'Sains Umum',
      author: 'Steven Worm',
      color: 'bg-blue-500'
    },
    {
      name: 'Programming',
      author: 'Mark Zuckerberg',
      color: 'bg-purple-500'
    }
  ]

  return (
    <>
      <div className='flex justify-between items-center'>
        <h1 className='text-xl font-semibold pb-6'>Daftar Kelas</h1>
        <div className='flex gap-x-2'>
          <button className='bg-green-600 text-white py-2 px-4 rounded-md text-sm font-medium'>Buat Kelas</button>
          <button className='border border-gray-500 py-2 px-4 rounded-md text-sm font-medium'>Gabung Kelas</button>
        </div>
      </div>
      <div className='grid grid-cols-4 gap-4'>
        { classrooms.map((room, index) => (
          <Card data={room}/>
        )) }
      </div>
    </>
  )
}

export default Home