import ListMember from '@/components/room/ListMember'
import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom";
import {showClassroom} from "@/services/ClassroomService.jsx";

const Member = () => {
    const {id} = useParams()
    const [members, setMembers] = useState([])
    const [teacher,setTeacher] = useState([])

    useEffect(() => {
        const detailClass = async () => {
            return await showClassroom(id)
                .then(response => {
                    setMembers(response.data?.students)
                    setTeacher(response.data?.teacher)
                })
        }

        detailClass().catch(error => {
            console.log(error)
        })
    }, [id]);

    return (
        <>
            <div>
                <h1 className='text-xl font-semibold'>Pengajar</h1>
                <div className='grid grid-cols-2 gap-4 py-6'>
                    <ListMember member={teacher}/>
                </div>
                <div>
                </div>
                <h1 className='text-xl font-semibold'>Anggota Kelas</h1>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 py-6'>
                    {
                        members ?
                            members?.map((member, index) => (
                                <ListMember member={member} key={index}/>
                            )) : 'Loading...'
                    }
                </div>
            </div>
        </>
    )
}

export default Member