import Card from '@/components/ui/Card'
import React, {useEffect, useState} from 'react'
import {getClassroom} from "@/services/ClassroomService.jsx";
import Button from '@/components/ui/Button';

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
        <h1 className='text-xl font-semibold'>Daftar Kelas</h1>
        <div className='flex gap-x-2'>
          <Button type='primary' text='Buat Kelas'/>
          <Button type='secondary' text='Gabung Kelas'/>
        </div>
      </div>
      <div className='grid grid-cols-4 gap-4 py-6'>
        { classrooms.map((room, index) => (
          <Card data={room} key={index}/>
        )) }
      </div>
    </>
  )
}

export default Home