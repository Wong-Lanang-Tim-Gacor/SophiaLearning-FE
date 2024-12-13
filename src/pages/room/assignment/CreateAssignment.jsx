import React, {useState} from 'react';
import {useParams} from "react-router-dom";
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

function CreateAssignment(props) {
    const {id} = useParams();
    const [description, setDescription] = useState();

    return (
        <>
            <form>
                <div className="my-2">
                    <label htmlFor="" className={'block'}>Judul</label>
                    <input type="text" className={'bg-gray-50 p-2 py-3 border outline-gray-400 w-full mt-2 rounded-md'}
                           placeholder={'Masukan judul'}/>
                </div>
                <div className="my-2">
                    <label htmlFor="" className={'block'}>Petunjuk</label>
                    <EditorProvider>
                        <Editor value={description}
                                className={'bg-gray-50 mt-2'}
                                placeholder={'Masukan judul'} onChange={e => setDescription(e.target.value)}>
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
                    <UploadDropzone onChangeFile={(val) => console.log(val)}/>
                </div>

                <Button type='primary' text='Simpan'/>
            </form>
        </>
    );
}

export default CreateAssignment;