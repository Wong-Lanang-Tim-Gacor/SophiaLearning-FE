import React, { useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
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
import { toast, Toaster } from "react-hot-toast";
import { storeResource } from "@/services/ResourceService.jsx";

function CreateAssignment(props) {
    const { id } = useParams();
    const [description, setDescription] = useState();
    const [title, setTitle] = useState();
    const [attachment, setAttachment] = useState([]);
    const [dueDate, setDueDate] = useState();
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await storeResource({
            classroom_id: id,
            title: title,
            content: description,
            attachments: attachment,
            type: 'material',
        });

        if (response.meta.status === 'success') {
            navigate(`/room/${id}/materials`);
            toast.success('Tambah materi berhasil!');
        } else {
            // Tampilkan pesan error detail jika tersedia
            if (response.data && response.meta.code === 422) {
                Object.values(response.data).forEach((errors) => {
                    errors.forEach((errorMessage) => {
                        toast.error(errorMessage); // Tampilkan pesan error validasi
                    });
                });
            } else {
                toast.error(response.meta.message || 'Tambah materi gagal!');
            }
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="my-2">
                    <label htmlFor="" className={'block'}>Judul</label>
                    <input type="text" className={'bg-gray-50 p-2 py-3 border outline-gray-400 w-full mt-2 rounded-md'}
                        placeholder={'Masukan judul'} onChange={e => setTitle(e.target.value)} />
                </div>
                <div className="my-2">
                    <label htmlFor="" className={'block'}>Petunjuk</label>
                    <EditorProvider>
                        <Editor value={description}
                            className={'bg-gray-50 mt-2'}
                            placeholder={'Masukan judul'} onChange={e => setDescription(e.target.value)}>
                            <Toolbar>
                                <BtnUndo />
                                <BtnRedo />
                                <Separator />
                                <BtnBold />
                                <BtnItalic />
                                <BtnUnderline />
                                <BtnStrikeThrough />
                                <Separator />
                                <BtnNumberedList />
                                <BtnBulletList />
                                <Separator />
                                <BtnLink />
                                <BtnClearFormatting />
                                <HtmlButton />
                                <Separator />
                                <BtnStyles />
                            </Toolbar>
                        </Editor>
                    </EditorProvider>
                </div>

                <div className="my-2">
                    <label htmlFor="" className={'block'}>Tenggat Waktu</label>
                    <input type="date" className={'bg-gray-50 p-2 py-3 border outline-gray-400 w-full mt-2 rounded-md'}
                        placeholder={'Masukan judul'} onChange={e => setDueDate(e.target.value)} />
                </div>

                <div className="my-2">
                    <label htmlFor="" className={'block mb-2'}>Upload Lampiran</label>
                    <UploadDropzone onChangeFile={(val) => setAttachment(val)} />
                </div>

                <Button type='primary' text='Simpan' />
            </form>
        </>
    );
}

export default CreateAssignment;