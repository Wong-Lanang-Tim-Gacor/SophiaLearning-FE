import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {getAssignmentByClass} from "@/services/AssignmentService.jsx";
import ListAssignment from "@/components/room/ListAssignment.jsx";
import ListPostSkeleton from "@/components/skeleton/room/ListPostSkeleton.jsx";
import Button from '@/components/ui/Button';

function Assignment(props) {
    const {id} = useParams();
    const navigate = useNavigate()
    const [assignments, setAssignments] = useState()

    useEffect(() => {
        const getAssignment = async () => {
            return await getAssignmentByClass(id)
                .then(data => {
                    setAssignments(data.data)
                })
                .catch(err => console.log(err));
        }

        getAssignment().catch(err => console.log(err));
    }, [id]);
    return (
        <>
            <Button onClick={() => navigate(`/room/${id}/assignment/create`)} type='primary' text='Tambah Tugas'/>
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