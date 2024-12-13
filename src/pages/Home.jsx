import Card from '@/components/ui/Card'
import React, {createContext, useContext, useEffect, useState} from 'react'
import {getClassroom, storeClassroom} from "@/services/ClassroomService.jsx";
import {useNavigate} from "react-router-dom";
import CardSkeleton from "@/components/skeleton/home/CardSkeleton.jsx";
import JoinModal from '@/components/ui/modal/JoinModal';
import CreateModal from '@/components/ui/modal/CreateModal';
const ClassroomsContext = createContext();

const Home = () => {
    const [classrooms, setClassroom] = useState()
    const [active, setActive] = useState(false)
    const [modal, setModal] = useState(null)
    const [className, setClassname] = useState()
    const [description, setDescription] = useState()
    const navigate = useNavigate();

    const handleCreateClassroom = async () => {
        return await storeClassroom({
            class_name: className,
            description: description
        }).then(response => {
            alert('Classroom created successfully!');
            setClassroom(prevClassrooms => [...prevClassrooms, response.data]); // Add new classroom to context
        }).catch(error => {
            alert('Classroom created failed!');
            console.log(error)
        })
    }

    useEffect(() => {
        const dataClassroom = async () => {
            const data = await getClassroom()

            setClassroom(data)
        }
        dataClassroom().catch((error) => {
            console.error(error)
        })
    }, [])

    return (
        <ClassroomsContext.Provider value={classrooms}>
            <div className='flex justify-between items-center'>
                <h1 className='text-xl font-semibold'>Daftar Kelas</h1>
                <div className='relative'>
                    <button onClick={() => setActive(!active)}
                            className='w-[40px] h-[40px] cursor-pointer hover:bg-gray-100 rounded-full flex items-center justify-center'>
                        <i className='fas fa-plus text-lg'></i>
                    </button>
                    <div
                        className={`${active ? 'scale-1' : 'scale-0'} rounded-md transition-all border border-gray-300 shadow-md absolute p-4 w-[150px] right-0 space-y-4 bg-white text-sm`}>
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
                    name={className}
                    description={description}
                    onSubmit={handleCreateClassroom}
                    onChangeName={name => setClassname(name)}
                    onChangeDescription={desc => setDescription(desc)}
                />
                : <></>}

            <div className='grid grid-cols-4 gap-4 py-6'>
                {
                    classrooms ? (
                        classrooms.map((room, index) => (
                            <Card key={index} data={room} onClick={() => navigate('/room/' + room.id)}/>
                        ))
                    ) : [1, 2, 3, 4].map(item => (
                        <CardSkeleton key={item}/>
                    ))
                }
            </div>
        </ClassroomsContext.Provider>
    )
}

export default Home