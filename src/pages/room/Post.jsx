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

    const posts = [
        {
            theory: 'Matematika - Aljabar',
            created: '2024-12-01'
        },
        {
            theory: 'Fisika - Hukum Newton',
            created: '2024-12-02'
        },
        {
            theory: 'Kimia - Struktur Atom',
            created: '2024-12-03'
        },
        {
            theory: 'Biologi - Sel dan Organisme',
            created: '2024-12-04'
        },
        {
            theory: 'Geografi - Lapisan Bumi',
            created: '2024-12-05'
        },
        {
            theory: 'Sejarah - Revolusi Industri',
            created: '2024-12-06'
        },
        {
            theory: 'Bahasa Inggris - Tenses Dasar',
            created: '2024-12-07'
        },
        {
            theory: 'Ekonomi - Konsep Dasar Mikroekonomi',
            created: '2024-12-08'
        },
        {
            theory: 'Teknologi Informasi - Dasar-dasar Pemrograman',
            created: '2024-12-09'
        }
    ]

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