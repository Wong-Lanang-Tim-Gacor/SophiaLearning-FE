import CreateAnnouncement from '@/components/room/CreateAnnouncement.jsx'
import Banner from '@/components/ui/Banner'
import ListPost from '@/components/room/ListPost'
import React, {createContext, useContext, useEffect, useState} from 'react'
import {useNavigate, useParams} from "react-router-dom";
import {showClassroom} from "@/services/ClassroomService.jsx";
import ListPostSkeleton from "@/components/skeleton/room/ListPostSkeleton.jsx";
import BannerSkeleton from "@/components/skeleton/room/BannerSkeleton.jsx";
import CodeRoom from '@/components/room/CodeRoom';
import {getResource} from "@/services/ResourceService.jsx";
import TeacherContext from "@/contexts/TeacherContext.jsx";

const ResourceContext = createContext()

const Post = () => {
    const navigate = useNavigate()
    const [resource, setResource] = useState()
    const {id} = useParams()
    const teacherContext = useContext(TeacherContext)
    useEffect(() => {
        const getDataResource = async () => {
            await getResource(id)
                .then((response) => {
                    setResource(response.data)
                    if (response.data.is_teacher){
                        teacherContext.setIsTeacher({isTeacher: true})
                    }else{
                        teacherContext.setIsTeacher({isTeacher: false})
                    }
                })
        }

        getDataResource().catch(error => {
            console.log(error)
        })
    }, [id])

    return (
        <ResourceContext.Provider value={resource}>
            {
                resource ? (
                    <Banner data={resource}/>
                ) : <BannerSkeleton/>
            }
            <div className='mt-8 flex gap-4'>
                <div className='hidden sm:block w-[40%]'>
                    <CodeRoom
                        code={resource?.identifier_code}
                        color={resource?.bg_tw_class}
                    />
                </div>
                <div className='w-full space-y-4'>
                    {
                        teacherContext.isTeacher.isTeacher ?
                            <CreateAnnouncement setData={d => setResource(d)} /> : ''
                    }
                    {
                        resource?.resources ?
                            resource?.resources.map((r, index) => (
                                <ListPost key={index}
                                          onClick={() => navigate(`/room/${id}/resource/${r.id}`)}
                                          post={r}
                                          colorBg={resource.bg_tw_class}
                                          typePost={r.type}
                                />
                            ))
                            : (
                                <ListPostSkeleton/>
                            )
                    }
                </div>
            </div>
        </ResourceContext.Provider>
    )
}

export default Post