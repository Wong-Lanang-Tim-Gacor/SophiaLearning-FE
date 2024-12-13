import CreatePost from '@/components/room/CreatePost'
import Banner from '@/components/ui/Banner'
import ListPost from '@/components/room/ListPost'
import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom";
import {showClassroom} from "@/services/ClassroomService.jsx";
import ListPostSkeleton from "@/components/skeleton/room/ListPostSkeleton.jsx";
import BannerSkeleton from "@/components/skeleton/room/BannerSkeleton.jsx";

const Post = () => {
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
                <div className='sm:block w-[40%]'>
                    <div className="border p-3 ">
                        <span className={'font-semibold text-gray-700 mb-3 block'}>Kode Kelas</span>
                        {
                            classroom ? (
                                    <h3 className={`text-2xl font-bold text-blue-400`}>{classroom?.identifier_code}</h3>
                                ) :
                                <h3 className={`text-2xl font-bold text-blue-400 bg-slate-300 w-full h-7`}></h3>
                        }
                    </div>
                </div>
                <div className='w-full space-y-4'>
                <CreatePost/>
                    {
                        classroom?.assignments ?
                            classroom?.assignments.map((assignment, index) => (
                                <ListPost key={index} post={assignment} colorBg={classroom.bg_tw_class}/>
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