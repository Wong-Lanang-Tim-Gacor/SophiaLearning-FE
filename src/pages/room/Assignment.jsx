import React, {useContext, useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {getAssignmentByClass} from "@/services/AssignmentService.jsx";
import ListAssignment from "@/components/room/ListAssignment.jsx";
import ListPostSkeleton from "@/components/skeleton/room/ListPostSkeleton.jsx";
import Button from '@/components/ui/Button';
import TeacherContext from "@/contexts/TeacherContext.jsx";

function Assignment(props) {
    const {id} = useParams();
    const navigate = useNavigate()
    const [assignments, setAssignments] = useState()
    const teacherContext = useContext(TeacherContext);

    useEffect(() => {
        const getAssignment = async () => {
            return await getAssignmentByClass(id)
                .then(data => {
                    setAssignments(data.data)
                    if (data.data.is_teacher) {
                        teacherContext.setIsTeacher({isTeacher: true})
                    } else {
                        teacherContext.setIsTeacher({isTeacher: false})
                    }
                })
                .catch(err => console.log(err));
        }

        getAssignment().catch(err => console.log(err));
    }, [id]);
    return (
        <>
            {
                teacherContext.isTeacher.isTeacher ? (
                    <Button onClick={() => navigate(`/room/${id}/assignment/create`)} type='primary' text='Tambah Tugas'/>
                ) : ''
            }
            {
                assignments ?
                    assignments?.resources?.filter(d => d.type === 'assignment')?.map((assignment, index) => (
                        <ListAssignment data={assignment} key={index} bgColor={assignments.bg_tw_class}/>
                    )) : (
                        [1,2,3,4,5].map(() => (
                            <ListPostSkeleton/>
                        ))
                    )
            }
        </>
    );
}

export default Assignment;