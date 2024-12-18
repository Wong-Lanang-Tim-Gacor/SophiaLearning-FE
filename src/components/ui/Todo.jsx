import React from 'react'
import {useNavigate} from "react-router-dom";

const Todo = (props) => {
    const { data } = props;
    const navigate = useNavigate()

    // Log data untuk memeriksa apakah data yang diterima benar
    console.log('Todo Data:', data);

    // Pastikan properti yang diakses ada
    if (!data || !data.title) {
        return <div>Data tidak tersedia</div>;  // Menghindari error jika data tidak lengkap
    }
    return (
        <>
            <div className={`w-full p-2 ${data.classroom?.bg_tw_class || 'bg-gray-500'} text-white rounded-md cursor-pointer`} onClick={() => navigate(`/room/${data.classroom.id}/resource/${data.id}`)}>
                <p className='text-xs'>{data.title.slice(0, 8) + '...'}</p>
            </div>
        </>
    );
}

export default Todo;
