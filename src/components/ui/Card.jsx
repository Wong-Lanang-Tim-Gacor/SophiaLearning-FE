import React, {useContext, useState} from "react";
import {useNavigate} from "react-router-dom";
import {toast} from "react-hot-toast";
import {archiveClassroom} from "@/services/ClassroomService.jsx";
import TeacherContext from "@/contexts/TeacherContext.jsx";

const Card = (props) => {
    const {data} = props;
    const navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false);
    const [linkCopied, setLinkCopied] = useState(false);

    const handleCopyLink = () => {
        const link = `${window.location.origin}/room/${data.id}`;
        navigator.clipboard.writeText(link)
            .then(() => {
                toast.success('Sukses menyalin link!')
                setLinkCopied(true);
                setTimeout(() => setLinkCopied(false), 2000);
            })
            .catch(err => {
                toast.error('Gagal menyalin link!');
            });
    };

    const handleArchive = async () => {
        return await archiveClassroom(data?.id)
            .then(response => {
                toast.success('Kelas berhasil di arsipkan')
            })
            .catch(e => {
                toast.error('Kelas gagal di arsipkan')
            })
    }

    return (
        <>
            <div {...props} className='border border-gray-300 rounded-lg hover:shadow-md cursor-pointer'>
                <div className="relative">
                    <button
                        onClick={() => setShowMenu(!showMenu)}
                        className='p-2 cursor-pointer grid place-content-center absolute right-3 top-2 text-white z-10'>
                        <i className='fas fa-ellipsis-v text-lg'></i>
                    </button>
                    <div
                        className={`${showMenu ? 'scale-1' : 'scale-0'} rounded-md transition-all border border-gray-300 shadow-md absolute p-4 w-[150px] right-7 top-3 space-y-4 bg-white text-sm`}>
                        <button className="block w-full text-left" onClick={handleCopyLink}>
                            {linkCopied ? 'Link Disalin!' : 'Salin Link'}
                        </button>
                        {
                            data.is_teacher ? (
                                <>
                                    <button className="block w-full text-left">Edit</button>
                                    <button className="block w-full text-left" onClick={handleArchive}>Arsip</button>
                                </>
                            ) : ''
                        }
                    </div>

                    <div className={`${String(data.bg_tw_class)} px-4 pe-7 py-8 rounded-t-lg`}
                         onClick={() => navigate('/room/' + data.id)}>
                        <h2 className='text-md text-white font-medium'>{data.class_name}</h2>
                    </div>
                    <div className='p-4 flex gap-x-2 items-center'>
                        <div className='w-[30px] h-[30px] bg-slate-300 rounded-full'></div>
                        <p className='text-xs font-normal text-gray-500'>{data.teacher.name}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;
