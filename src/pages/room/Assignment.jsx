import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {getAssignmentByClass} from "@/services/AssignmentService.jsx";
import ListAssignment from "@/components/room/ListAssignment.jsx";

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
            <button className={'bg-blue-500 text-white p-2 px-3 rounded-full block'}>
                Tambah
            </button>

            {
                assignments ?
                    assignments?.map((assignment, index) => (
                        <ListAssignment data={assignment} key={index}/>
                    )) : 'Loading'
            }
        </>
    );
}

export default Assignment;