import React from 'react'

const Banner = (props) => {
    const { data } = props;
    return (
        <>
            <div className={`${data?.bg_tw_class} p-6 rounded-lg`}>
                <div className='flex flex-col justify-between min-h-[200px]'>
                    <div>
                        <p className='block sm:hidden text-sm text-white font-medium'>{data?.identifier_code}</p>
                    </div>
                    <div className='class-info'>
                        <h1 className='text-3xl text-white font-semibold'>{data?.class_name}</h1>
                        <p className='text-white'>{data?.description}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner