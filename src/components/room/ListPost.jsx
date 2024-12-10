import React from 'react'

const ListPost = (props) => {
  const {post} = props
  return (
    <>
        <div className='border border-gray-300 p-4 rounded-lg cursor-pointer hover:shadow-md'>
            <div className="flex items-center gap-x-4">
                <div>
                    <div className='bg-green-200 w-[50px] h-[50px] rounded-full'></div>
                </div>
                <div>
                    <h3 className='text-md font-medium'>{post.theory}</h3>
                    <p className='text-xs font-normal text-gray-500'>{post.created}</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default ListPost