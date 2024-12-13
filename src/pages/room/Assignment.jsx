import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {getAssignmentByClass} from "@/services/AssignmentService.jsx";
import ListAssignment from "@/components/room/ListAssignment.jsx";
import ListPostSkeleton from "@/components/skeleton/room/ListPostSkeleton.jsx";

function Assignment(props) {
    const {id} = useParams();
    const [assignments, setAssignments] = useState()

    useEffect(() => {
        const getAssignment = async () => {
            return await getAssignmentByClass(id)
                .then(data => setAssignments(data.data))
                .catch(err => console.log(err));
        }

        getAssignment().catch(err => console.log(err));
    }, [id]);
    return (
        <>
            <button className={'bg-blue-500 text-white p-2 px-3 rounded-full block mb-3'}>
                Tambah
            </button>

            {
                assignments ?
                    assignments?.map((assignment, index) => (
                        <ListAssignment data={assignment} key={index}/>
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