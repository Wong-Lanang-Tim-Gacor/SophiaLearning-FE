import React from 'react'

const BannerSkeleton = (props) => {
    const {data} = props;
    return (
        <>
            <div className={`bg-slate-200 p-6 rounded-lg`}>
                <div className="flex flex-col justify-end min-h-[200px]">
                    <div className="flex justify-between">
                        <div className="class-info">
                            <h1 className='text-3xl text-white font-semibold bg-slate-300 w-40 h-5'></h1>
                            <p className={'text-white bg-slate-300 w-full h-4'}></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BannerSkeleton