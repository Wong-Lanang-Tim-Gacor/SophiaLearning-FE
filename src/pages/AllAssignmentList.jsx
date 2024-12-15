import React, {useEffect, useState} from 'react';
import {getCalendar} from "@/services/ResourceService.jsx";
import ListAssignment from "@/components/room/ListAssignment.jsx";
import ListPostSkeleton from "@/components/skeleton/room/ListPostSkeleton.jsx";

function AllAssignmentList() {
    const [assignments,setAssignments] = useState([]);
    useEffect(() => {
        const getAssignment = async () => {
            try {
                const response = await getCalendar();
                setAssignments(response.data || []);
            } catch (e) {
                console.error(e);
            }
        };
        getAssignment();
    },[])

    console.log(assignments);
    return (
        <>
            <h1 className='text-xl font-semibold'>Daftar Tugas</h1>
            {
                assignments.length > 0 ?
                    assignments?.map((assignment, index) => (
                        <ListAssignment data={assignment} key={index} bgColor={assignment?.classroom?.bg_tw_class} showMenu={false}/>
                    )) : (
                        [1,2,3,4,5].map(() => (
                            <ListPostSkeleton/>
                        ))
                    )
            }
        </>
    );
}

export default AllAssignmentList;