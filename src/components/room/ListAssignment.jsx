import {DateFormat} from '@/utils/FormattingString';
import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {deleteAssignment} from "@/services/AssignmentService.jsx";
import {toast} from "react-hot-toast";

function ListAssignment(props) {
    const {id} = useParams();
    const {data, key, bgColor, setDeleted, showMenu = true} = props
    const [menuVisible, setMenuVisible] = useState(false);
    const navigate = useNavigate();
    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };
    const handleDelete = async () => {
        return await deleteAssignment(data.id)
            .then(res => {
                setDeleted(true)
                toast.success('Hapus tugas Berhasil')
                console.log(res)
            }).catch(err => {
                toast.error('Hapus tugas gagal')
                console.log(err)
            })
    };

    // Fungsi untuk menutup menu saat klik di luar menu
    const handleClickOutside = (e) => {
        if (!e.target.closest('.menu-container')) {
            setMenuVisible(false);
        }
    };

    // Menambahkan event listener untuk klik di luar
    useEffect(() => {
        window.addEventListener('click', handleClickOutside);
        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, []);
    return (
        <div className="border border-gray-300 p-4 rounded-lg cursor-pointer hover:shadow-md mt-5" key={key}>
            <div className="flex items-center justify-between gap-x-4">
                <div className="flex items-center gap-3" onClick={() => navigate(`/room/${id}/resource/${data.id}`)}>
                    <div>
                        <div className={`${bgColor} w-[50px] h-[50px] rounded-full grid place-content-center`}>
                            <i className={'fas fa-book text-white'}></i>
                        </div>
                    </div>
                    <div>
                        <h3 className='text-md font-medium'>{data?.title}</h3>
                        <p className='text-xs font-normal text-gray-500 mt-1'>{DateFormat(data?.created_at)}</p>
                    </div>
                </div>
                {

                    showMenu ? (
                        <div className="relative menu-container">
                            <button className="text-gray-500 focus:outline-none p-3" onClick={toggleMenu}>
                                <i className="fas fa-ellipsis-v"></i>
                            </button>
                            {
                                menuVisible && (
                                    <div
                                        className="absolute right-0 mt-2 w-40 bg-white border border-gray-300 rounded-lg shadow-lg">
                                        <ul className="text-sm text-gray-700">
                                            <li className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                                                onClick={() => navigate(`/room/${id}/assignment/${data.id}/edit`)}>
                                                Edit
                                            </li>
                                            <li className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                                                onClick={handleDelete}>
                                                Hapus
                                            </li>
                                        </ul>
                                    </div>
                                )
                            }
                        </div>) : ''
                }

            </div>
        </div>
    );
}

export default ListAssignment;