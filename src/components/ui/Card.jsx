import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

const Card = (props) => {
    const {data} = props;
    const navigate = useNavigate();
    const [showMenu,setShowMenu] = useState(false)
    return (
        <>
            <div {...props} className='border border-gray-300 rounded-lg hover:shadow-md cursor-pointer'>
                <div className="relative">
                    <button onClick={() => setShowMenu(!showMenu)}
                            className='p-2 cursor-pointer grid place-content-center absolute right-3 top-2 text-white z-10'>
                        <i className='fas fa-ellipsis-v text-lg'></i>
                    </button>
                    <div
                        className={`${showMenu ? 'scale-1' : 'scale-0'} rounded-md transition-all border border-gray-300 shadow-md absolute p-4 w-[150px] right-7 top-3 space-y-4 bg-white text-sm`}>
                        <button className={'block'}>Salin Link</button>
                        <button className={'block'}>Edit</button>
                        <button className={'block'}>Arsip</button>
                    </div>
                    <div className={`${String(data.bg_tw_class)} px-4 pe-7 py-8 rounded-t-lg`} onClick={() => navigate('/room/' + data.id)}>
                        <h2 className='text-md text-white font-medium'>{data.class_name}</h2>
                    </div>
                    <div className='p-4 flex gap-x-2 items-center'>
                        <div className='w-[30px] h-[30px] bg-slate-300 rounded-full'></div>
                        <p className='text-xs font-normal text-gray-500'>{data.teacher.name}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card