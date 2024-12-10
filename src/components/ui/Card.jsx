const Card = ({data, key}) => {
    return(
        <>
            <div className='border border-gray-300 rounded-lg hover:shadow-md' key={key}>
                <div className={`${data.bg_tw_class} px-4 py-8 rounded-t-lg`}>
                    <h2 className='text-md text-white font-medium'>{data.class_name}</h2>
                </div>
                <div className='p-4 flex gap-x-2 items-center'>
                    <div className='w-[30px] h-[30px] bg-slate-300 rounded-full'></div>
                    <p className='text-xs font-normal text-gray-500'>{data.teacher.name}</p>
                </div>
            </div>
        </>
    )
}

export default Card