import Card from '@/components/ui/Card'
import React, {useEffect, useState} from 'react'
import {getClassroom} from "@/services/ClassroomService.jsx";
import Button from '@/components/ui/Button';
import {useNavigate} from "react-router-dom";
import CardSkeleton from "@/components/skeleton/home/CardSkeleton.jsx";

const Home = () => {
  const [classrooms,setClassroom] = useState()
  const navigate = useNavigate();

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
        {
            classrooms ? (
                classrooms.map((room, index) => (
                    <Card key={index} data={room}/>
                ))
            ) : [1,2,3,4].map(item => (
                <CardSkeleton/>
            ))
        }
      </div>
    </>
  )
}

export default Home