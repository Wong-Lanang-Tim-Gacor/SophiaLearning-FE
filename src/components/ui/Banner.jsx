import React from 'react'

const Banner = (props) => {
    const {data} = props;
    return (
        <>
            <div className={`${data?.bg_tw_class} p-6 rounded-lg`}>
                <div className="flex flex-col justify-end min-h-[200px]">
                    <div className="flex justify-between">
                        <div className="class-info">
                            <h1 className='text-3xl text-white font-semibold'>{data?.class_name}</h1>
                            <p className={'text-white'}>{data?.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner