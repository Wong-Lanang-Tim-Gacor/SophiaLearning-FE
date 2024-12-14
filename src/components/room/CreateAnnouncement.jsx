import React, {useState} from 'react'
import Button from '../ui/Button'
import {storeAssignment} from "@/services/AssignmentService.jsx";
import {storeAnnouncement} from "@/services/ResourceService.jsx";
import {useParams} from "react-router-dom";
import {toast} from "react-hot-toast";

const CreateAnnouncement = (props) => {
    const {id} = useParams()
    const [active, setActive] = useState(false)
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const postAnnouncement = async (e) => {
        e.preventDefault(e)
        return await storeAnnouncement({
            classroom_id: id,
            title: title ?? 'Pemberitahuan Informasi',
            content: content,
            status: 'active',
            type: 'announcement'
        }).then(response => {
            // console.log(response)
            props.setData(response.data)
            toast.success('Sukses menambahkan pemberitahuan')
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <>
            {!active ? <div onClick={() => setActive(!active)}
                            className='border border-gray-300 p-4 rounded-lg cursor-pointer shadow-sm'>
                <p className='text-sm text-gray-500'>Buat Informasi Kelas</p>
            </div> : <></>}

            {
                active ?
                    <div className='py-6 px-4 border border-gray-300 rounded-lg shadow-sm'>
                        <form onSubmit={postAnnouncement}>
                            <input type="text"
                                   className='resize-none w-full bg-slate-100 outline-none p-4 text-sm rounded-md mb-3' placeholder={'Judul'} value={title} onChange={e => setTitle(e.target.value)}/>
                            <textarea
                                onChange={e => setContent(e.target.value)}
                                className='resize-none w-full bg-slate-100 outline-none p-4 text-sm h-[150px] rounded-md' placeholder={'Masukan informasi'}/>
                            <div className='flex justify-between items-center'>
                                {/*<div className='bg-slate-200 w-[200px] h-[20px]'></div>*/}
                                <div className='flex items-center gap-x-2'>
                                    <Button
                                        onClick={() => setActive(!active)}
                                        type='secondary'
                                        text='Batal'/>
                                    <Button
                                        disabled={content.length < 1 || title.length < 1 ? 'disabled' : ''}
                                        type={content.length < 1 || title.length < 1 ? 'disable' : 'primary'}
                                        text='Posting'/>
                                </div>
                            </div>
                        </form>
                    </div> :
                    <></>
            }
        </>
    )
}

export default CreateAnnouncement