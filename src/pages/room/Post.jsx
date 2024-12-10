import CreatePost from '@/components/room/CreatePost'
import Banner from '@/components/ui/Banner'
import ListItem from '@/components/ui/ListItem'
import React from 'react'

const Post = () => {
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
            <div className='max-w-[980px] mx-auto container'>
                <Banner />
                <div className='mt-8 flex'>
                    <div className='w-[40%]'></div>
                    <div className='w-full space-y-4'>
                        <CreatePost/>
                        { posts.map((post, index) => (
                            <ListItem key={index} post={post}/>
                        )) }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Post