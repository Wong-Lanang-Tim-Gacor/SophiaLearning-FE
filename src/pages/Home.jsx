import Card from '@/components/ui/Card'
import React, {useEffect, useState} from 'react'
import {getClassroom} from "@/services/ClassroomService.jsx";
import {useNavigate} from "react-router-dom";
import CardSkeleton from "@/components/skeleton/home/CardSkeleton.jsx";
import JoinModal from '@/components/ui/modal/JoinModal';
import CreateModal from '@/components/ui/modal/CreateModal';

const Home = () => {
  const [classrooms,setClassroom] = useState()
  const [active, setActive] = useState(false)
  const [modal, setModal] = useState(null)
  const [code, setCode] = useState(null)
  const navigate = useNavigate();

  const handleJoin = () => {
    alert(code)
    setModal(null)
  }

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
        <div className='relative'>
          <button onClick={() => setActive(!active)} className='w-[40px] h-[40px] cursor-pointer hover:bg-gray-100 rounded-full flex items-center justify-center'>
            <i className='fas fa-plus text-lg'></i>
          </button>
          <div className={`${active ? 'scale-1' : 'scale-0'} rounded-md transition-all border border-gray-300 shadow-md absolute p-4 w-[150px] right-0 space-y-4 bg-white text-sm`}>
            <button onClick={() => setModal('join')}>Gabung Kelas</button>
            <button onClick={() => setModal('create')}>Buat Kelas</button>
          </div>
        </div>
      </div>

      {modal === 'join' ? 
        <JoinModal 
          onClose={() => setModal(null)}
          code={code}
          onSubmit={handleJoin}
          onChangeCode={(code) => setCode(code)}
          /> 
        : <></>}
      
      {modal === 'create' ? 
        <CreateModal 
          onClose={() => setModal(null)}
          code={code}
          onSubmit={handleJoin}
          onChangeCode={(code) => setCode(code)}
          /> 
        : <></>}

      <div className='grid grid-cols-4 gap-4 py-6'>
        {
            classrooms ? (
                classrooms.map((room, index) => (
                    <Card key={index} data={room} onClick={() => navigate('/room/'+room.id)}/>
                ))
            ) : [1,2,3,4].map(item => (
                <CardSkeleton key={item}/>
            ))
        }
      </div>
    </>
  )
}

export default Home