import React, { useEffect, useState } from 'react'
import DetailResourceSkeleton from "@/components/skeleton/room/DetailResourceSkeleton.jsx";

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

const shortenFileName = (fileName, maxLength = 20) => {
    if (fileName.length > maxLength) {
        return fileName.slice(0, maxLength) + '...';
    }
    return fileName;
};

const DetailAssignment = (props) => {
    const { resource } = props

    const [menuVisible, setMenuVisible] = useState(false)

    const toggleMenu = () => {
        setMenuVisible(!menuVisible)
    }

    const handleEdit = () => {
        alert('Edit Item')
    }

    const handleCopyLink = () => {
        alert('Salin Link')
    }

    const handleDelete = () => {
        alert('Hapus Item')
    }

    const handleClickOutside = (e) => {
        if (!e.target.closest('.menu-container')) {
            setMenuVisible(false)
        }
    }

    useEffect(() => {
        window.addEventListener('click', handleClickOutside)
        return () => {
            window.removeEventListener('click', handleClickOutside)
        }
    }, [])

    const handleDownload = (url) => {
        const link = document.createElement('a');
        link.href = url;
        link.download = url.split('/').pop(); // Menetapkan nama file berdasarkan nama file di URL
        link.click();
    };

    return (
        <>
            {
                resource ? (
                    <>
                        <div className='flex justify-between items-center'>
                            <div className='flex items-center gap-x-6'>
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
                                    <h1 className='text-xl font-semibold'>{resource.title}</h1>
                                    <p className='text-sm text-gray-500'>Teacher • {resource.created_at}</p>
                                </div>
                            </div>
                            <div className='text-right'>
                                <div className="relative menu-container">
                                    <button className="text-gray-500 focus:outline-none p-3" onClick={toggleMenu}>
                                        <i className="fas fa-ellipsis-v"></i>
                                    </button>
                                    {menuVisible && (
                                        <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-300 rounded-lg shadow-lg">
                                            <ul className="text-sm text-gray-700">
                                                <li className="px-4 py-2 cursor-pointer hover:bg-gray-200 text-start"
                                                    onClick={handleEdit}>
                                                    Edit
                                                </li>
                                                <li className="px-4 py-2 cursor-pointer hover:bg-gray-200 text-start"
                                                    onClick={handleCopyLink}>
                                                    Salin Link
                                                </li>
                                                <li className="px-4 py-2 cursor-pointer hover:bg-gray-200 text-start"
                                                    onClick={handleDelete}>
                                                    Hapus
                                                </li>
                                            </ul>
                                        </div>
                                    )}
                                </div>
                                {
                                    resource.due_date ? (
                                        <p className='text-sm font-medium'>Tenggat: {resource.due_date}</p>
                                    ) : ''
                                }
                            </div>
                        </div>
                        <div className="flex mt-5 gap-5">
                            <div className="w-full">
                                <div dangerouslySetInnerHTML={{ __html: resource.content }} />
                            </div>
                            <div className="w-1/3 border rounded-md ">
                                <div className="space-y-4">
                                    {
                                        resource?.attachment?.map((attachment, index) => {
                                            const shortenedFileName = shortenFileName(attachment.file_name);
                                            const formattedFileSize = formatFileSize(attachment.file_size);
                                            return (
                                                <div key={index}
                                                     className="w-full border bg-gray-100 rounded-md p-4 flex items-center cursor-pointer"
                                                     onClick={() => handleDownload(attachment.file_url)}>
                                                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                                                        <i className="fas fa-file text-gray-600 text-lg"></i>
                                                    </div>
                                                    <div className="flex flex-col justify-center">
                                                        <span className="font-medium text-sm text-gray-800">{shortenedFileName}</span>
                                                        <span className="text-xs text-gray-500">{formattedFileSize}</span>
                                                    </div>
                                                </div>
                                            );
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </>
                ) : <DetailResourceSkeleton/>
            }
        </>
    )
}

export default DetailAssignment
