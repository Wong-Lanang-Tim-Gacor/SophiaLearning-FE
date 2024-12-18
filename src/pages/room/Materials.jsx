import React, {useContext, useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import ListAssignment from "@/components/room/ListAssignment.jsx";
import ListPostSkeleton from "@/components/skeleton/room/ListPostSkeleton.jsx";
import Button from '@/components/ui/Button';
import {getResource} from "@/services/ResourceService.jsx";
import ListMaterials from "@/components/room/ListMaterials.jsx";
import TeacherContext from "@/contexts/TeacherContext.jsx";

function Materials(props) {
    const {id} = useParams();
    const navigate = useNavigate()
    const [materials, setMaterials] = useState()
    const teacherContext = useContext(TeacherContext);
    const [deleted, setDeleted] = useState(false);


    useEffect(() => {
        const getMaterials = async () => {
            return await getResource(id)
                .then(data => {
                    setMaterials(data.data)
                    if (data.data.is_teacher) {
                        teacherContext.setIsTeacher({isTeacher: true})
                    } else {
                        teacherContext.setIsTeacher({isTeacher: false})
                    }
                })
                .catch(err => console.log(err));
        }

        getMaterials().catch(err => console.log(err));
    }, [id, deleted, teacherContext]);
    return (
        <>
            {
                teacherContext.isTeacher.isTeacher ? (
                    <Button onClick={() => navigate(`/room/${id}/materials/create`)} type='primary'
                            text='Tambah Materi'/>
                ) : ''
            }
            {
                materials ?
                    materials?.resources?.filter(d => d.type === 'material')?.map((assignment, index) => (
                        <ListMaterials data={assignment} key={index} bgColor={materials.bg_tw_class}
                                       setDeleted={setDeleted}/>
                    )) : (
                        [1, 2, 3, 4, 5].map(() => (
                            <ListPostSkeleton/>
                        ))
                    )
            }
        </>
    );
}

export default Materials;