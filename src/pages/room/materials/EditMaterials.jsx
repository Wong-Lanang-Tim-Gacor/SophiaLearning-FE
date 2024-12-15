import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {
    BtnRedo, BtnUndo, Editor, EditorProvider, Toolbar, BtnBold,
    BtnBulletList,
    BtnClearFormatting,
    BtnItalic,
    BtnLink,
    BtnNumberedList,
    BtnStrikeThrough,
    BtnStyles,
    BtnUnderline,
    HtmlButton,
    Separator,
} from "react-simple-wysiwyg";
import UploadDropzone from "@/components/ui/UploadDropzone.jsx";
import Button from '@/components/ui/Button';
import {toast} from "react-hot-toast";
import {showResource, storeResource, updateResource} from "@/services/ResourceService.jsx";

function EditMaterials(props) {
    const {id,resourceId} = useParams();
    const [content, setContent] = useState();
    const [title, setTitle] = useState();
    const [attachment, setAttachment] = useState([]);
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        return await updateResource(resourceId,{
            title: title,
            content: content,
            attachments: attachment,
        })
            .then(() => {
                navigate(`/room/${id}/materials`)
                toast.success("Edit materi berhasil!");
            }).catch(err => {
                toast.error("Edit materi gagal!");
                console.log(err)
                console.table({
                    title: title,
                    content: content,
                    attachments: attachment,
                });
            })
    }

    useEffect(() => {
        const getMaterials = async () => {
            return await showResource(resourceId)
                .then((response) => {
                    setTitle(response.data.title)
                    setContent(response.data.content)
                })
        }

        getMaterials().catch((error) => {
            console.log(error)
        });
    },[id,resourceId])
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="my-2">
                    <label htmlFor="" className={'block'}>Judul</label>
                    <input type="text" className={'bg-gray-50 p-2 py-3 border outline-gray-400 w-full mt-2 rounded-md'}
                           placeholder={'Masukan judul'} value={title} onChange={e => setTitle(e.target.value)}/>
                </div>
                <div className="my-2">
                    <label htmlFor="" className={'block'}>Materi</label>
                    <EditorProvider>
                        <Editor value={content}
                                className={'bg-gray-50 mt-2'}
                                placeholder={'Masukan judul'} onChange={e => setContent(e.target.value)}>
                            <Toolbar>
                                <BtnUndo/>
                                <BtnRedo/>
                                <Separator/>
                                <BtnBold/>
                                <BtnItalic/>
                                <BtnUnderline/>
                                <BtnStrikeThrough/>
                                <Separator/>
                                <BtnNumberedList/>
                                <BtnBulletList/>
                                <Separator/>
                                <BtnLink/>
                                <BtnClearFormatting/>
                                <HtmlButton/>
                                <Separator/>
                                <BtnStyles/>
                            </Toolbar>
                        </Editor>
                    </EditorProvider>
                </div>

                <div className="my-2">
                    <label htmlFor="" className={'block mb-2'}>Upload Lampiran</label>
                    <UploadDropzone onChangeFile={(val) => setAttachment(val)}/>
                </div>

                <Button type='primary' text='Update'/>
            </form>
        </>
    );
}

export default EditMaterials;