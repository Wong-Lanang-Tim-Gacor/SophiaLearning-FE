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
      <div className='grid grid-cols-4 gap-4'>
        { classrooms.map((room, index) => (
          <Card data={room}/>
        )) }
      </div>
    </>
  )
}

export default Home