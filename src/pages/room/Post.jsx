import CreatePost from '@/components/room/CreatePost'
import Banner from '@/components/ui/Banner'
import ListPost from '@/components/room/ListPost'
import React, {useEffect, useState} from 'react'
import {useNavigate, useParams} from "react-router-dom";
import {showClassroom} from "@/services/ClassroomService.jsx";
import ListPostSkeleton from "@/components/skeleton/room/ListPostSkeleton.jsx";
import BannerSkeleton from "@/components/skeleton/room/BannerSkeleton.jsx";
import CodeRoom from '@/components/room/CodeRoom';

const Post = () => {
    const navigate = useNavigate()
    const [classroom, setClassroom] = useState()
    const {id} = useParams()

    useEffect(() => {
        const getClassroom = async () => {
            await showClassroom(id)
                .then((response) => {
                    setClassroom(response.data)
                })
        }

        getClassroom().catch(error => {
            console.log(error)
        })
    }, [id])

    return (
        <>
            {
                classroom ? (
                    <Banner data={classroom}/>
                ) : <BannerSkeleton/>
            }
            <div className='mt-8 flex gap-4'>
                <div className='hidden sm:block w-[40%]'>
                    <CodeRoom 
                        code={classroom?.identifier_code}
                        color={classroom?.bg_tw_class}
                        />
                </div>
                <div className='w-full space-y-4'>
                <CreatePost/>
                    {
                        classroom?.assignments ?
                            classroom?.assignments.map((assignment, index) => (
                                <ListPost key={index}
                                    onClick={() => navigate('detail')}
                                    post={assignment} 
                                    colorBg={classroom.bg_tw_class}/>
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