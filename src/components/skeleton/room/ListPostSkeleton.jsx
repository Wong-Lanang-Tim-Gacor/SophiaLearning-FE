import React from 'react';

function ListPostSkeleton() {
    return (
        <div className='border border-gray-200 p-4 rounded-lg cursor-pointer hover:shadow-md bg-slate-200 animate-pulse my-2'>
            <div className="flex items-center gap-x-4 ">
                <div>
                    <div className={`w-[50px] h-[50px] rounded-full grid place-content-center bg-slate-300`}>
                    </div>
                </div>
                <div>
                    <h3 className='text-md font-medium bg-slate-300 w-[100px] h-[15px]'> </h3>
                    <p className='text-xs font-normal text-gray-500 mt-1 bg-slate-300 w-72 h-[15px]'></p>
                </div>
            </div>
        </div>
    );
}

export default ListPostSkeleton;