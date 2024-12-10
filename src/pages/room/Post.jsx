import CreatePost from '@/components/room/CreatePost'
import Banner from '@/components/ui/Banner'
import ListPost from '@/components/room/ListPost'
import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom";
import {showClassroom} from "@/services/ClassroomService.jsx";

const Post = () => {
    const [classroom,setClassroom]=useState([])
    const {id} = useParams()

    useEffect(()=>{
        const getClassroom = async () => {
            await showClassroom(id)
                .then((response) => {
                    setClassroom(response.data)
                    console.log(response.data)
                })
        }

        getClassroom().catch(error => {
            console.log(error)
        })
    }, [id])

    return (
        <>
            <Banner data={classroom} />
            <div className='mt-8 flex'>
                <div className='hidden sm:block w-[40%]'></div>
                <div className='w-full space-y-4'>
                    <CreatePost />
                    {
                        classroom?.assignments ?
                            classroom?.assignments.map((assignment,index) => (
                                <ListPost key={index} post={assignment} />
                            )) : 'Loading Data....'
                    }
                </div>
            </div>
        </>
    )
}

export default Post