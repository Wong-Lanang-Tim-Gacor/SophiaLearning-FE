import React from 'react';

function CardSkeleton(props) {
    return (
        <>
            <div className='border border-gray-300 rounded-lg hover:shadow-md bg-slate-200'>
                <div className={`bg-slate-300 px-4 py-8 rounded-t-lg h-24`}></div>
                <div className='p-4 flex gap-x-2 items-center'>
                    <div className='w-[30px] h-[30px] bg-slate-300 rounded-full'></div>
                    <p className='text-xs font-normal bg-slate-300 w-[50%] h-4'></p>
                </div>
            </div>
        </>
    );
}

export default CardSkeleton;