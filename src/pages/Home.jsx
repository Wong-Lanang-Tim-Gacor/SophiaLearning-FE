import React, { useEffect, useReducer } from 'react'
import { getClassroom, joinClassroom, storeClassroom } from '@/services/ClassroomService.jsx'
import { toast } from 'react-hot-toast'
import Card from '@/components/ui/Card'
import CardSkeleton from '@/components/skeleton/home/CardSkeleton.jsx'
import JoinModal from '@/components/ui/modal/JoinModal'
import CreateModal from '@/components/ui/modal/CreateModal'
import ClassroomContext from '@/contexts/ClassroomContext'
import classroomsReducer, { initialState } from '@/reducers/ClassroomReducer'

const Home = () => {
    const [state, dispatch] = useReducer(classroomsReducer, initialState)

    const handleCreateClassroom = async () => {
        try {
            const response = await storeClassroom({
                class_name: state.className,
                description: state.description
            })
            dispatch({ type: 'ADD_CLASSROOM', payload: response.data })
            dispatch({ type: 'SET_MODAL', payload: null })
            toast.success('Sukses menambahkan kelas!')
        } catch (error) {
            toast.error('Gagal menambahkan kelas!')
        }
    }

    const handleJoin = async () => {
        try {
            const response = await joinClassroom(state.classroomCode)
            dispatch({ type: 'ADD_CLASSROOM', payload: response.data })
            dispatch({ type: 'SET_MODAL', payload: null })
            toast.success('Sukses gabung kelas')
        } catch (error) {
            toast.error('Gagal gabung kelas')
        }
    }

    useEffect(() => {
        const fetchClassrooms = async () => {
            try {
                const data = await getClassroom()
                dispatch({ type: 'SET_CLASSROOMS', payload: data })
            } catch (error) {
                console.error(error)
            }
        }
        fetchClassrooms()
    }, [])

    return (
        <ClassroomContext.Provider value={{ state, dispatch }}>
            <div>
                <div className='flex justify-between items-center'>
                    <h1 className='text-xl font-semibold'>Daftar Kelas</h1>
                    <div className='relative'>
                        <button
                            onClick={() => dispatch({ type: 'TOGGLE_ACTIVE' })}
                            className='w-[40px] h-[40px] cursor-pointer hover:bg-gray-100 rounded-full flex items-center justify-center'>
                            <i className='fas fa-plus text-lg'></i>
                        </button>
                        <div
                            className={`${state.active ? 'scale-1' : 'scale-0'} rounded-md transition-all border border-gray-300 shadow-md absolute p-4 w-[150px] right-0 space-y-4 bg-white text-sm z-10`}>
                            <button onClick={() => dispatch({ type: 'SET_MODAL', payload: 'join' })}>Gabung Kelas</button>
                            <button onClick={() => dispatch({ type: 'SET_MODAL', payload: 'create' })}>Buat Kelas</button>
                        </div>
                    </div>
                </div>

                {state.modal === 'join' && (
                    <JoinModal
                        onClose={() => dispatch({ type: 'SET_MODAL', payload: null })}
                        code={state.classroomCode}
                        onSubmit={handleJoin}
                        onChangeCode={(code) => dispatch({ type: 'SET_CLASSROOM_CODE', payload: code })}
                    />
                )}

                {state.modal === 'create' && (
                    <CreateModal
                        onClose={() => dispatch({ type: 'SET_MODAL', payload: null })}
                        name={state.className}
                        description={state.description}
                        onSubmit={handleCreateClassroom}
                        onChangeName={(name) => dispatch({ type: 'SET_CLASS_NAME', payload: name })}
                        onChangeDescription={(desc) => dispatch({ type: 'SET_DESCRIPTION', payload: desc })}
                    />
                )}

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-6'>
                    {
                        state.classrooms
                            ? state.classrooms.map((room, index) => <Card key={index} data={room} />)
                            : (
                                [1, 2, 3, 4].map((item) => <CardSkeleton key={item} />)
                            )
                    }
                </div>
            </div>
        </ClassroomContext.Provider>
    )
}

export default Home
