import CreateAnnouncement from '@/components/room/CreateAnnouncement.jsx'
import Banner from '@/components/ui/Banner'
import ListPost from '@/components/room/ListPost'
import React, {useEffect, useState} from 'react'
import {useNavigate, useParams} from "react-router-dom";
import {showClassroom} from "@/services/ClassroomService.jsx";
import ListPostSkeleton from "@/components/skeleton/room/ListPostSkeleton.jsx";
import BannerSkeleton from "@/components/skeleton/room/BannerSkeleton.jsx";
import CodeRoom from '@/components/room/CodeRoom';
import {getResource} from "@/services/ResourceService.jsx";

const Post = () => {
    const navigate = useNavigate()
    const [resource, setResource] = useState()
    const {id} = useParams()

    useEffect(() => {
        const getDataResource = async () => {
            await getResource(id)
                .then((response) => {
                    setResource(response.data)
                })
        }

        getDataResource().catch(error => {
            console.log(error)
        })
    }, [id])

    return (
        <>
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
                    <CreateAnnouncement/>
                    {
                        resource?.resources ?
                            resource?.resources.map((r, index) => (
                                <ListPost key={index}
                                          onClick={() => navigate('detail')}
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
        </>
    )
}

export default Post