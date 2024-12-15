import React, { useEffect, useState, useContext } from 'react';
import DetailResourceSkeleton from "@/components/skeleton/room/DetailResourceSkeleton.jsx";
import { DateFormat } from "@/utils/FormattingString.jsx";
import TeacherContext from '@/contexts/TeacherContext';
import { Link } from 'react-router-dom';
import UploadDropzone from "@/components/ui/UploadDropzone.jsx";
import Button from "@/components/ui/Button.jsx";
import { storeAnswer } from "@/services/AssignmentService.jsx";
import { toast } from "react-hot-toast";

const formatFileSize = (sizeInBytes) => {
    if (sizeInBytes < 1024) {
        return `${sizeInBytes} B`;
    } else if (sizeInBytes < 1048576) {
        return `${(sizeInBytes / 1024).toFixed(1)} KB`;
    } else if (sizeInBytes < 1073741824) {
        return `${(sizeInBytes / 1048576).toFixed(1)} MB`;
    } else {
        return `${(sizeInBytes / 1073741824).toFixed(1)} GB`;
    }
};

const shortenFileName = (fileName, maxLength = 10) => {
    const fileParts = fileName.split('.');
    const fileExtension = fileParts.pop();
    const baseName = fileParts.join('.');

    if (baseName.length > maxLength) {
        return baseName.slice(0, maxLength) + '...' + '.' + fileExtension;
    }

    return fileName;
};

const DetailAssignment = (props) => {
    const { resource } = props;
    const { isTeacher } = useContext(TeacherContext);
    const [menuVisible, setMenuVisible] = useState(false);
    const [answerAttachment, setAnswerAttachment] = useState([]);
    const [submitedAnswer,setSubmitedAnswer] = useState()

    const handleSubmitAnswer = async () => {
        let confirmSubmit = confirm('Apakah yakin untuk mengirimkan jawaban ini?')
        if (confirmSubmit) {
            try {
                const response = await storeAnswer({
                    resource_id: resource.id,
                    attachments: answerAttachment
                });
                setSubmitedAnswer(response.data)
                toast.success('Sukses mengirimkan jawaban');
            } catch (err) {
                toast.error('Gagal mengirimkan jawaban');
                console.log(err);
            }
        }
    }

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    const handleEdit = () => {
        alert('Edit Item');
    };

    const handleCopyLink = () => {
        alert('Salin Link');
    };

    const handleDelete = () => {
        alert('Hapus Item');
    };

    const handleClickOutside = (e) => {
        if (!e.target.closest('.menu-container')) {
            setMenuVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('click', handleClickOutside);
        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const handleDownload = (url) => {
        const link = document.createElement('a');
        link.href = url;
        link.download = url.split('/').pop();
        link.click();
    };

    return (
        <>
            {resource ? (
                <>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-x-6">
                            <div className={`${resource?.classroom?.bg_tw_class} w-[50px] h-[50px] rounded-full grid place-content-center`}>
                                {
                                    resource.type === 'assignment' ? (
                                        <i className={'fas fa-tasks text-white'}></i>
                                    ) : resource.type === 'material' ? (
                                        <i className={'fa fa-book text-white'}></i>
                                    ) : resource.type === 'announcement' ? (
                                        <i className={'fas fa-bell text-white'}></i>
                                    ) : ''
                                }
                            </div>
                            <div>
                                <h1 className="text-xl font-semibold">{resource.title}</h1>
                                <p className="text-sm text-gray-500">
                                    {isTeacher.isTeacher ? (
                                        <Link to="attachment" className="text-blue-500 text-sm underline font-medium">Lihat Pengumpulan</Link>
                                    ) : (
                                        resource?.classroom?.teacher?.name
                                    )}
                                    • {DateFormat(resource.created_at)}
                                </p>
                            </div>
                        </div>
                        <div className="text-right">
                            <div className="relative menu-container">
                                <button className="text-gray-500 focus:outline-none p-3" onClick={toggleMenu}>
                                    <i className="fas fa-ellipsis-v"></i>
                                </button>
                                {menuVisible && (
                                    <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-300 rounded-lg shadow-lg">
                                        <ul className="text-sm text-gray-700">
                                            <li className="px-4 py-2 cursor-pointer hover:bg-gray-200 text-start" onClick={handleEdit}>
                                                Edit
                                            </li>
                                            <li className="px-4 py-2 cursor-pointer hover:bg-gray-200 text-start" onClick={handleCopyLink}>
                                                Salin Link
                                            </li>
                                            <li className="px-4 py-2 cursor-pointer hover:bg-gray-200 text-start" onClick={handleDelete}>
                                                Hapus
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                            {resource.due_date ? (
                                <p className="text-sm font-medium">Tenggat: {DateFormat(resource.due_date)}</p>
                            ) : ''}
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row mt-5 gap-5">
                        <div className={`w-full ${isTeacher.isTeacher ? 'lg:w-2/3' : 'lg:w-2/3'}`}>
                            <div dangerouslySetInnerHTML={{ __html: resource.content }} />

                            {!isTeacher.isTeacher ? (
                                <div className="w-full border border-gray-300 p-4 rounded-md mt-5">
                                    <div className="text-sm text-gray-600 mb-3 font-bold">Lampiran</div>
                                    <div className="space-y-4">
                                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                            {resource?.attachment?.map((attachment, index) => {
                                                const shortenedFileName = shortenFileName(attachment.file_name);
                                                const formattedFileSize = formatFileSize(attachment.file_size);
                                                return (
                                                    <div
                                                        key={index}
                                                        className="w-full border bg-gray-100 rounded-md p-4 flex items-center cursor-pointer"
                                                        onClick={() => handleDownload(attachment.file_url)}
                                                    >
                                                        <div
                                                            className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                                                            <i className="fas fa-file text-gray-600 text-lg"></i>
                                                        </div>
                                                        <div className="flex flex-col justify-center">
                                                            <span
                                                                className="font-medium text-sm text-gray-800">{shortenedFileName}</span>
                                                            <span
                                                                className="text-xs text-gray-500">{formattedFileSize}</span>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            ) : ''}
                        </div>

                        {!isTeacher.isTeacher ? (
                            submitedAnswer ? (
                                    <div className="lg:w-1/3 w-full border border-gray-300 p-4 rounded-md">
                                        <div className="flex justify-between items-center mb-3">
                                            <div className="text-sm text-gray-600 font-bold">Jawaban Anda</div>
                                            <b className={'text-xl'}>{submitedAnswer.point}/100</b>
                                        </div>
                                        <div className="space-y-4">
                                            {submitedAnswer.attachments?.map((attachment, index) => {
                                                const shortenedFileName = shortenFileName(attachment.file_name, 14);
                                                const formattedFileSize = formatFileSize(attachment.file_size);
                                                return (
                                                    <div
                                                        key={index}
                                                        className="w-full border bg-gray-100 rounded-md p-4 flex items-center cursor-pointer"
                                                        onClick={() => handleDownload(attachment.file_url)}
                                                    >
                                                        <div
                                                            className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                                                            <i className="fas fa-file text-gray-600 text-lg"></i>
                                                        </div>
                                                        <div className="flex flex-col justify-center">
                                                        <span
                                                            className="font-medium text-sm text-gray-800">{shortenedFileName}</span>
                                                            <span
                                                                className="text-xs text-gray-500">{formattedFileSize}</span>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                ) : resource?.answer ? (
                                <div className="lg:w-1/3 w-full border border-gray-300 p-4 rounded-md">
                                    <div className="flex justify-between items-center mb-3">
                                        <div className="text-sm text-gray-600 font-bold">Jawaban Anda</div>
                                        <b className={'text-xl'}>{resource.answer.point}/100</b>
                                    </div>
                                    <div className="space-y-4">
                                    {resource?.answer.attachments?.map((attachment, index) => {
                                            const shortenedFileName = shortenFileName(attachment.file_name, 14);
                                            const formattedFileSize = formatFileSize(attachment.file_size);
                                            return (
                                                <div
                                                    key={index}
                                                    className="w-full border bg-gray-100 rounded-md p-4 flex items-center cursor-pointer"
                                                    onClick={() => handleDownload(attachment.file_url)}
                                                >
                                                    <div
                                                        className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                                                        <i className="fas fa-file text-gray-600 text-lg"></i>
                                                    </div>
                                                    <div className="flex flex-col justify-center">
                                                        <span
                                                            className="font-medium text-sm text-gray-800">{shortenedFileName}</span>
                                                        <span
                                                            className="text-xs text-gray-500">{formattedFileSize}</span>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            ) : (
                                <div className="w-full lg:w-1/3 border border-gray-300 p-4 rounded-md">
                                    <div className="text-sm text-gray-600 mb-3 font-bold">Upload Jawaban</div>
                                    <UploadDropzone onChangeFile={(val) => setAnswerAttachment(val)} />
                                    <Button text={'Kirim Jawaban'} type={'primary'} onClick={handleSubmitAnswer} />
                                </div>
                            )
                        ) : (
                            <div className="lg:w-1/3 w-full border border-gray-300 p-4 rounded-md">
                                <div className="text-sm text-gray-600 mb-3 font-bold">Lampiran</div>
                                <div className="space-y-4">
                                    {resource?.attachment?.map((attachment, index) => {
                                        const shortenedFileName = shortenFileName(attachment.file_name, 14);
                                        const formattedFileSize = formatFileSize(attachment.file_size);
                                        return (
                                            <div
                                                key={index}
                                                className="w-full border bg-gray-100 rounded-md p-4 flex items-center cursor-pointer"
                                                onClick={() => handleDownload(attachment.file_url)}
                                            >
                                                <div
                                                    className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                                                    <i className="fas fa-file text-gray-600 text-lg"></i>
                                                </div>
                                                <div className="flex flex-col justify-center">
                                                    <span
                                                        className="font-medium text-sm text-gray-800">{shortenedFileName}</span>
                                                    <span className="text-xs text-gray-500">{formattedFileSize}</span>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        )}
                    </div>
                </>
            ) : <DetailResourceSkeleton />}
        </>
    );
};

export default DetailAssignment;
