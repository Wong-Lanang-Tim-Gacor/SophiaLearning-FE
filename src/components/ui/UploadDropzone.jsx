import React from 'react';
import {useDropzone} from 'react-dropzone';

function UploadDropzone(props) {
    const {acceptedFiles, getRootProps, getInputProps} = useDropzone();

    const files = acceptedFiles.map(file => (
        <li key={file.path}>
            {file.path} - {file.size} bytes
        </li>
    ));

    return (
        <section style={{
            border: '2px dashed #007bff',
            borderRadius: '4px',
            padding: '20px',
            textAlign: 'center',
            cursor: 'pointer',
        }}>
            <div {...getRootProps({className: 'dropzone'})}>
                <input {...getInputProps()} />
                <p>Drag 'n' drop some files here, or click to select files</p>
            </div>
            <aside>
                <h4 className={'font-bold mt-3'}>Files</h4>
                <div className="flex flex-col gap-2">
                    <ul className={'w-full my-2 bg-blue-100 block'}>{files}</ul>
                </div>
            </aside>
        </section>
    );
}

export default UploadDropzone