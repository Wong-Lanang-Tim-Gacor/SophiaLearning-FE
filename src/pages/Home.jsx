import Card from '@/components/ui/Card'
import React, {useEffect, useState} from 'react'
import {getClassroom} from "@/Controller/ClassroomController.js";
import {data} from "autoprefixer";

const Home = () => {
  const [classrooms,setClassroom] = useState([])

  useEffect(() => {
    const dataClassroom = async () => {
      const data = await getClassroom()
      setClassroom(data)
    }

    dataClassroom().catch((error) => {
      console.error(error)
    })
  },[])

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
          <Card data={room} key={index}/>
        )) }
      </div>
    </>
  )
}

export default Home