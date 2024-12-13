import React, {useEffect, useState} from 'react';

function ListAssignment(props) {
    const {data,key} = props
    const [menuVisible, setMenuVisible] = useState(false);

    // Fungsi untuk toggle menu
    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    // Fungsi untuk aksi menu
    const handleEdit = () => {
        alert('Edit Item');
    };

    const handleCopyLink = () => {
        alert('Salin Link');
    };

    const handleDelete = () => {
        alert('Hapus Item');
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
                <div className="flex items-center gap-3">
                    <div>
                        <div className={`bg-rose-500 w-[50px] h-[50px] rounded-full grid place-content-center`}>
                            <i className={'fas fa-tasks text-white'}></i>
                        </div>
                    </div>
                    <div>
                        <h3 className='text-md font-medium'>{data?.title}</h3>
                        <p className='text-xs font-normal text-gray-500 mt-1'>{data?.due_date}</p>
                    </div>
                </div>
                <div className="relative menu-container">
                    <button className="text-gray-500 focus:outline-none p-3" onClick={toggleMenu}>
                        <i className="fas fa-ellipsis-v"></i>
                    </button>
                    {menuVisible && (
                        <div
                            className="absolute right-0 mt-2 w-40 bg-white border border-gray-300 rounded-lg shadow-lg">
                            <ul className="text-sm text-gray-700">
                                <li className="px-4 py-2 cursor-pointer hover:bg-gray-200" onClick={handleEdit}>
                                    Edit
                                </li>
                                <li className="px-4 py-2 cursor-pointer hover:bg-gray-200" onClick={handleCopyLink}>
                                    Salin Link
                                </li>
                                <li className="px-4 py-2 cursor-pointer hover:bg-gray-200" onClick={handleDelete}>
                                    Hapus
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ListAssignment;